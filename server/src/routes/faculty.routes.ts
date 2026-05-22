import { Router, type Request, type Response, type NextFunction } from "express";
import { query, validationResult } from "express-validator";
import { Faculty } from "../models/index.js";
import { verifyToken, type AuthRequest } from "../middleware/auth.js";
import { attachUserOptional } from "../middleware/attachUser.js";

export const facultyRouter = Router();

facultyRouter.get(
  "/",
  attachUserOptional,
  [query("limit").optional().isInt({ min: 1, max: 500 }).toInt()],
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const filter: Record<string, unknown> = {};
      if (!req.user) filter.isActive = true;
      const limit = Number(req.query.limit) || 200;

      const items = await Faculty.find(filter).sort({ order: 1, name: 1 }).limit(limit).lean();
      res.json(items);
    } catch (e) {
      next(e);
    }
  }
);

facultyRouter.post("/", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const row = await Faculty.create(req.body);
    res.status(201).json(row);
  } catch (e) {
    next(e);
  }
});

facultyRouter.put("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const row = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!row) return res.status(404).json({ message: "Not found" });
    return res.json(row);
  } catch (e) {
    next(e);
  }
});

facultyRouter.delete("/:id", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});
