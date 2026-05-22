import { Router } from "express";
import { Stats } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
export const statsRouter = Router();
statsRouter.get("/", async (_req, res) => {
    const stats = await Stats.findOne();
    res.json(stats);
});
statsRouter.put("/", verifyToken, async (req, res) => {
    const stats = await Stats.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(stats);
});
