import { Router, type Request, type Response, type NextFunction } from "express";
import { query, body, validationResult } from "express-validator";
import { Announcement } from "../models/index.js";
import { verifyToken, type AuthRequest } from "../middleware/auth.js";
import { attachUserOptional } from "../middleware/attachUser.js";

export const announcementRouter = Router();

announcementRouter.get(
  "/",
  attachUserOptional,
  [
    query("page").optional().isInt({ min: 1 }).toInt(),
    query("limit").optional().isInt({ min: 1, max: 50 }).toInt(),
    query("type").optional().isIn(["notice", "event", "result", "admission", "general"]),
  ],
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const isAdmin = !!req.user;

      let filter: Record<string, unknown> = {};
      if (!isAdmin) {
        const now = new Date();
        filter.isActive = true;
        filter.$or = [{ expiresAt: null }, { expiresAt: { $exists: false } }, { expiresAt: { $gt: now } }];
      }

      if (isAdmin && req.query.active === "true") filter = { ...filter, isActive: true };
      if (isAdmin && req.query.active === "false") filter = { ...filter, isActive: false };

      const t = req.query.type as string | undefined;
      if (t) filter = { ...filter, type: t };

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const [items, total] = await Promise.all([
        Announcement.find(filter)
          .sort({ isPinned: -1, createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),
        Announcement.countDocuments(filter),
      ]);

      res.json({ items, page, limit, total, pages: Math.ceil(total / limit) || 1 });
    } catch (e) {
      next(e);
    }
  }
);

announcementRouter.post(
  "/",
  verifyToken,
  [body("title").isString().notEmpty(), body("body").optional().isString()],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const row = await Announcement.create(req.body);
      res.status(201).json(row);
    } catch (e) {
      next(e);
    }
  }
);

announcementRouter.put("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const row = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!row) return res.status(404).json({ message: "Not found" });
    return res.json(row);
  } catch (e) {
    next(e);
  }
});

announcementRouter.delete("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});
