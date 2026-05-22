import { Router } from "express";
import { body, query, validationResult } from "express-validator";
import { Admission } from "../models/index.js";
import { verifyToken } from "../middleware/auth.js";
import { sendMail } from "../utils/email.js";
export const admissionRouter = Router();
admissionRouter.post("/", [
    body("fullName").isString().trim().notEmpty(),
    body("dob").optional().isISO8601(),
    body("phone").isString().trim().notEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("qualification").optional().isString(),
    body("course").optional().isString(),
    body("year").optional().isString(),
    body("percentage").optional().isFloat({ min: 0, max: 100 }).toFloat(),
    body("address").optional().isString(),
    body("parentPhone").optional().isString(),
    body("message").optional().isString(),
    body("source").optional().isString(),
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const row = await Admission.create({
            ...req.body,
            dob: req.body.dob ? new Date(req.body.dob) : undefined,
        });
        const studentEmail = req.body.email;
        await sendMail(studentEmail, "Admission application received — Mandke College", `<p>Dear ${req.body.fullName},</p><p>Thank you for applying to Mandke College. Our admissions office will reach out shortly.</p>`);
        const adminTo = process.env.ADMIN_EMAIL;
        if (adminTo) {
            await sendMail(adminTo, `[Admission] Application from ${req.body.fullName}`, `<pre>${JSON.stringify(req.body, null, 2)}</pre>`);
        }
        res.status(201).json({ id: row._id, ok: true });
    }
    catch (e) {
        next(e);
    }
});
admissionRouter.get("/", verifyToken, [
    query("status").optional().isIn(["pending", "reviewing", "accepted", "rejected"]),
    query("course").optional().isString(),
    query("year").optional().isString(),
    query("limit").optional().isInt({ min: 1, max: 500 }).toInt(),
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        const filter = {};
        if (req.query.status)
            filter.status = req.query.status;
        if (req.query.course)
            filter.course = req.query.course;
        if (req.query.year)
            filter.year = req.query.year;
        const limit = Number(req.query.limit) || 100;
        const items = await Admission.find(filter).sort({ createdAt: -1 }).limit(limit).lean();
        res.json(items);
    }
    catch (e) {
        next(e);
    }
});
admissionRouter.patch("/:id", verifyToken, async (req, res, next) => {
    try {
        const row = await Admission.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!row)
            return res.status(404).json({ message: "Not found" });
        res.json(row);
    }
    catch (e) {
        next(e);
    }
});
