import { Router } from "express";
import { body, query, validationResult } from "express-validator";
import { Types } from "mongoose";
import { Gallery, GalleryAlbum } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
import { uploadImagesMemory } from "../middleware/upload.js";
import { uploadBufferToCloudinary, cloudinaryThumbWebp } from "../utils/uploadCloudinary.js";
export const galleryRouter = Router();
const GALLERY_CATEGORIES = [
    { label: "Campus activities", value: "campus-activities" },
    { label: "Student achievements", value: "student-achievements" },
    { label: "Workshops", value: "workshops" },
    { label: "Celebrations", value: "celebrations" },
];
galleryRouter.get("/", [
    query("category").optional().isString(),
    query("albumId").optional().isString(),
    query("limit").optional().isInt({ min: 1, max: 100 }).toInt(),
    query("skip").optional().isInt({ min: 0 }).toInt(),
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const filter = {};
        if (req.query.category)
            filter.category = req.query.category;
        if (req.query.albumId && Types.ObjectId.isValid(String(req.query.albumId))) {
            filter.albumId = new Types.ObjectId(String(req.query.albumId));
        }
        const limit = Number(req.query.limit) || 24;
        const skip = Number(req.query.skip) || 0;
        const items = await Gallery.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
        res.json(items);
    }
    catch (e) {
        next(e);
    }
});
galleryRouter.get("/categories", (_req, res) => {
    res.json(GALLERY_CATEGORIES);
});
galleryRouter.get("/albums", async (_req, res, next) => {
    try {
        const albums = await GalleryAlbum.find().sort({ title: 1 }).lean();
        res.json(albums);
    }
    catch (e) {
        next(e);
    }
});
galleryRouter.post("/albums", verifyToken, [body("title").isString().trim().notEmpty(), body("slug").optional().isString(), body("category").optional().isString()], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const row = await GalleryAlbum.create(req.body);
        res.status(201).json(row);
    }
    catch (e) {
        next(e);
    }
});
galleryRouter.post("/", verifyToken, uploadImagesMemory.array("images", 24), async (req, res, next) => {
    try {
        if (!process.env.CLOUDINARY_CLOUD_NAME) {
            return res.status(503).json({ message: "File uploads are not configured" });
        }
        const files = req.files;
        if (!files?.length)
            return res.status(400).json({ message: "images required" });
        const albumId = req.body.albumId ? String(req.body.albumId) : undefined;
        const title = typeof req.body.title === "string" ? req.body.title : "";
        const category = typeof req.body.category === "string" ? req.body.category : "";
        const eventName = typeof req.body.eventName === "string" ? req.body.eventName : "";
        const dateStr = req.body.date ? String(req.body.date) : undefined;
        const created = [];
        for (const file of files) {
            const up = await uploadBufferToCloudinary(file.buffer, { folder: "mandke/gallery" });
            const imageUrl = up.secure_url.replace("/upload/", "/upload/w_1200,f_webp,q_auto/");
            const thumbnailUrl = cloudinaryThumbWebp(up.secure_url, 400);
            created.push(await Gallery.create({
                imageUrl,
                thumbnailUrl,
                title,
                category,
                albumId: albumId && Types.ObjectId.isValid(albumId) ? new Types.ObjectId(albumId) : undefined,
                eventName,
                date: dateStr ? new Date(dateStr) : new Date(),
            }));
        }
        res.status(201).json(created);
    }
    catch (e) {
        next(e);
    }
});
galleryRouter.delete("/:id", verifyToken, async (req, res, next) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
});
