import { Router, type Request, type Response, type NextFunction } from "express";
import { body, query, validationResult } from "express-validator";
import { Enquiry } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
import { sendMail } from "../utils/email.js";

export const enquiryRouter = Router();

enquiryRouter.post(
  "/",
  [
    body("name").isString().trim().notEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("phone").isString().trim().notEmpty(),
    body("message").isString().trim().notEmpty(),
    body("subject").optional().isString().trim(),
    body("course").optional().isString(),
    body("source").optional().isString(),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const row = await Enquiry.create(req.body);

      const adminTo = process.env.ADMIN_EMAIL;
      const subject = (req.body as { subject?: string }).subject;
      const subjectLine = `[Contact] ${subject || "Website enquiry"} — ${req.body.name}`;

      if (adminTo) {
        const escaped = String(req.body.message).replace(/</g, "&lt;");
        await sendMail(
          adminTo,
          subjectLine,
          `<p><strong>Name:</strong> ${req.body.name}</p>
           <p><strong>Email:</strong> ${req.body.email}</p>
           <p><strong>Phone:</strong> ${req.body.phone}</p>
           ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
           <p>${escaped}</p>`
        );
      }

      res.status(201).json({ id: row._id, ok: true });
    } catch (e) {
      next(e);
    }
  }
);

enquiryRouter.get(
  "/",
  verifyToken,
  [
    query("status").optional().isIn(["unread", "read", "all"]),
    query("limit").optional().isInt({ min: 1, max: 200 }).toInt(),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const status = req.query.status as string | undefined;
      const filter: Record<string, unknown> = {};
      if (status === "unread") filter.isRead = false;
      if (status === "read") filter.isRead = true;

      const limit = Number(req.query.limit) || 100;
      const items = await Enquiry.find(filter).sort({ createdAt: -1 }).limit(limit).lean();
      res.json(items);
    } catch (e) {
      next(e);
    }
  }
);

enquiryRouter.patch("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { isRead, repliedAt } = req.body as { isRead?: boolean; repliedAt?: string };
    const update: Record<string, unknown> = {};
    if (typeof isRead === "boolean") update.isRead = isRead;
    if (typeof repliedAt === "string") update.repliedAt = new Date(repliedAt);
    const row = await Enquiry.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!row) return res.status(404).json({ message: "Not found" });
    res.json(row);
  } catch (e) {
    next(e);
  }
});
