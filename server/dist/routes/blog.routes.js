import { Router } from "express";
import { query, body, validationResult } from "express-validator";
import { Blog } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
import { attachUserOptional } from "../middleware/attachUser.js";
export const blogRouter = Router();
blogRouter.get("/", attachUserOptional, [
    query("page").optional().isInt({ min: 1 }).toInt(),
    query("limit").optional().isInt({ min: 1, max: 50 }).toInt(),
    query("category").optional().isIn(["career", "news", "events", "tips"]),
    query("search").optional().isString().trim(),
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const category = req.query.category;
        const search = req.query.search?.trim();
        const filter = {};
        const isAdmin = !!req.user;
        if (!isAdmin) {
            filter.isPublished = true;
        }
        if (category)
            filter.category = category;
        if (search) {
            filter.$or = [
                { title: new RegExp(search, "i") },
                { excerpt: new RegExp(search, "i") },
                { tags: new RegExp(search, "i") },
            ];
        }
        const [items, total] = await Promise.all([
            Blog.find(filter).sort({ publishedAt: -1, createdAt: -1 }).skip(skip).limit(limit).lean(),
            Blog.countDocuments(filter),
        ]);
        res.json({
            items,
            page,
            limit,
            total,
            pages: Math.ceil(total / limit) || 1,
        });
    }
    catch (e) {
        next(e);
    }
});
blogRouter.get("/slug/:slug", attachUserOptional, async (req, res, next) => {
    try {
        const post = await Blog.findOne({ slug: req.params.slug });
        if (!post)
            return res.status(404).json({ message: "Not found" });
        if (!post.isPublished && !req.user)
            return res.status(404).json({ message: "Not found" });
        await Blog.updateOne({ _id: post._id }, { $inc: { views: 1 } });
        const fresh = await Blog.findById(post._id).lean();
        return res.json(fresh);
    }
    catch (e) {
        next(e);
    }
});
blogRouter.post("/", verifyToken, [
    body("title").isString().trim().notEmpty(),
    body("slug").optional().isString().trim(),
    body("content").optional().isString(),
    body("category").optional().isIn(["career", "news", "events", "tips"]),
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const title = String(req.body.title || "");
        let slug = typeof req.body.slug === "string" && req.body.slug.length > 0
            ? String(req.body.slug)
            : title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .trim()
                .replace(/\s+/g, "-");
        const exists = await Blog.findOne({ slug });
        if (exists)
            slug = `${slug}-${Date.now()}`;
        const payload = {
            ...req.body,
            slug,
            author: req.body.author || "Mandke College",
        };
        const row = await Blog.create(payload);
        res.status(201).json(row);
    }
    catch (e) {
        next(e);
    }
});
blogRouter.put("/:id", verifyToken, async (req, res, next) => {
    try {
        const row = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!row)
            return res.status(404).json({ message: "Not found" });
        return res.json(row);
    }
    catch (e) {
        next(e);
    }
});
blogRouter.delete("/:id", verifyToken, async (req, res, next) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
});
blogRouter.patch("/:id/publish", verifyToken, async (req, res, next) => {
    try {
        const current = await Blog.findById(req.params.id);
        if (!current)
            return res.status(404).json({ message: "Not found" });
        const explicit = typeof req.body.isPublished === "boolean"
            ? req.body.isPublished
            : undefined;
        const isPublished = explicit !== undefined ? explicit : !current.isPublished;
        const update = { isPublished };
        if (isPublished && !current.publishedAt) {
            update.publishedAt = new Date();
        }
        const row = await Blog.findByIdAndUpdate(req.params.id, update, { new: true });
        return res.json(row);
    }
    catch (e) {
        next(e);
    }
});
