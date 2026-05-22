import { Router } from "express";
import { body, query, validationResult } from "express-validator";
import { Testimonial } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
import { attachUserOptional } from "../middleware/attachUser.js";
export const testimonialRouter = Router();
testimonialRouter.get("/", attachUserOptional, [query("limit").optional().isInt({ min: 1, max: 100 }).toInt()], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const isAdmin = !!req.user;
        let filter = {};
        if (!isAdmin) {
            filter.isApproved = true;
        }
        const limit = Number(req.query.limit) || 50;
        const items = await Testimonial.find(filter)
            .sort({ createdAt: -1 })
            .limit(limit)
            .lean();
        res.json(items);
    }
    catch (e) {
        next(e);
    }
});
testimonialRouter.post("/", verifyToken, [
    body("studentName").isString().trim().notEmpty(),
    body("batch").optional().isString(),
    body("course").optional().isString(),
    body("photo").optional().isString(),
    body("quote").isString().notEmpty(),
    body("rating").optional().isFloat({ min: 1, max: 5 }).toFloat(),
    body("isApproved").optional().isBoolean(),
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const row = await Testimonial.create(req.body);
        res.status(201).json(row);
    }
    catch (e) {
        next(e);
    }
});
testimonialRouter.put("/:id", verifyToken, async (req, res, next) => {
    try {
        const row = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!row)
            return res.status(404).json({ message: "Not found" });
        return res.json(row);
    }
    catch (e) {
        next(e);
    }
});
testimonialRouter.delete("/:id", verifyToken, async (req, res, next) => {
    try {
        await Testimonial.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
});
