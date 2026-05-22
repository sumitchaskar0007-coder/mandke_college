import { Router } from "express";
import { body, validationResult } from "express-validator";
import { NewsletterSubscriber } from "../models/index.js";
export const newsletterRouter = Router();
newsletterRouter.post("/", [body("email").isEmail().normalizeEmail()], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        await NewsletterSubscriber.updateOne({ email: req.body.email }, { email: req.body.email }, { upsert: true });
        res.status(201).json({ ok: true });
    }
    catch (e) {
        next(e);
    }
});
