import { Router, type Request, type Response, type NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { attachUserOptional } from "../middleware/attachUser.js";
import type { AuthRequest } from "../middleware/auth.js";
import { Event } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";

export const eventRouter = Router();

eventRouter.get("/", attachUserOptional, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const isAdmin = !!req.user;

    const filter: Record<string, unknown> = {};
    if (!isAdmin) {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      filter.date = { $gte: start };
    }

    const items = await Event.find(filter).sort({ date: 1 }).limit(200).lean();

    res.json(items);
  } catch (e) {
    next(e);
  }
});

eventRouter.post(
  "/",
  verifyToken,
  [body("title").isString().notEmpty(), body("date").optional().isISO8601()],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const payload = {
        ...req.body,
        date: req.body.date ? new Date(req.body.date) : undefined,
      };
      const row = await Event.create(payload);
      res.status(201).json(row);
    } catch (e) {
      next(e);
    }
  }
);

eventRouter.put("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const update = { ...req.body };
    if (update.date) update.date = new Date(update.date as string | Date);

    const row = await Event.findByIdAndUpdate(req.params.id, update, { new: true });

    if (!row) return res.status(404).json({ message: "Not found" });
    return res.json(row);
  } catch (e) {
    next(e);
  }
});

eventRouter.delete("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});
