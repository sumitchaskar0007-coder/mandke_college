import { Router, type Request, type Response, type NextFunction } from "express";
import { query, validationResult } from "express-validator";
import { Notice } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
import { uploadPdfMemory } from "../middleware/upload.js";
import { uploadBufferToCloudinary } from "../utils/uploadCloudinary.js";

export const noticeRouter = Router();

noticeRouter.get(
  "/",
  [
    query("category").optional().isString(),
    query("page").optional().isInt({ min: 1 }).toInt(),
    query("limit").optional().isInt({ min: 1, max: 100 }).toInt(),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 50;
      const skip = (page - 1) * limit;

      const filter: Record<string, unknown> = {};
      if (req.query.category) filter.category = req.query.category;

      const [items, total] = await Promise.all([
        Notice.find(filter).sort({ date: -1, createdAt: -1 }).skip(skip).limit(limit).lean(),
        Notice.countDocuments(filter),
      ]);

      res.json({ items, page, limit, total, pages: Math.ceil(total / limit) || 1 });
    } catch (e) {
      next(e);
    }
  }
);

noticeRouter.post(
  "/",
  verifyToken,
  uploadPdfMemory.single("pdf"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!process.env.CLOUDINARY_CLOUD_NAME) {
        return res.status(503).json({ message: "File uploads are not configured" });
      }
      const title = req.body.title as string | undefined;
      const category = req.body.category as string | undefined;
      const dateStr = req.body.date as string | undefined;
      if (!title?.trim()) return res.status(400).json({ message: "title is required" });
      const file = req.file;
      if (!file) return res.status(400).json({ message: "pdf file required" });

      const result = await uploadBufferToCloudinary(file.buffer, {
        folder: "mandke/notices",
        resource_type: "raw",
        public_id: undefined,
      });

      const pdfUrl = result.secure_url;
      const doc = await Notice.create({
        title: title.trim(),
        category,
        pdfUrl,
        date: dateStr ? new Date(dateStr) : new Date(),
      });
      res.status(201).json(doc);
    } catch (e) {
      next(e);
    }
  }
);

noticeRouter.delete("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});
