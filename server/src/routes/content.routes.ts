import { Router } from "express";
import { Content } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";

export const contentRouter = Router();

contentRouter.get("/:page", async (req, res) => {
  const rows = await Content.find({ page: req.params.page }).lean();
  res.json(rows);
});

contentRouter.put("/:page", verifyToken, async (req, res) => {
  const { blocks } = req.body;
  if (!Array.isArray(blocks)) return res.status(400).json({ message: "blocks array required" });
  await Content.deleteMany({ page: req.params.page });
  const created = await Content.insertMany(blocks.map((b: any) => ({ ...b, page: req.params.page })));
  res.json(created);
});
