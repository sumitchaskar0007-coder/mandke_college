import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import { modelMap } from "../models/index.js";
export function resourceRouterFactory(modelName) {
    const router = Router();
    const Model = modelMap[modelName];
    router.get("/", async (req, res) => {
        const limit = Number(req.query.limit || 50);
        const data = await Model.find().sort({ createdAt: -1 }).limit(limit);
        res.json(data);
    });
    router.get("/:id", async (req, res) => {
        const row = await Model.findById(req.params.id);
        if (!row)
            return res.status(404).json({ message: "Not found" });
        return res.json(row);
    });
    router.post("/", verifyToken, async (req, res) => {
        const row = await Model.create(req.body);
        res.status(201).json(row);
    });
    router.put("/:id", verifyToken, async (req, res) => {
        const row = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!row)
            return res.status(404).json({ message: "Not found" });
        return res.json(row);
    });
    router.patch("/:id", verifyToken, async (req, res) => {
        const row = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!row)
            return res.status(404).json({ message: "Not found" });
        return res.json(row);
    });
    router.delete("/:id", verifyToken, async (req, res) => {
        await Model.findByIdAndDelete(req.params.id);
        res.status(204).send();
    });
    return router;
}
