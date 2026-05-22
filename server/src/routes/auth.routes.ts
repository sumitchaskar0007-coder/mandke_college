import { Router, type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import { Admin } from "../models/index.js";
import { verifyToken, type AuthRequest } from "../middleware/auth.js";

export const authRouter = Router();

const cookieOpts = (): import("express").CookieOptions => {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  };
};

authRouter.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }).isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body as { email: string; password: string };
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });
    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const secret = process.env.JWT_SECRET || "dev_secret";
    const token = jwt.sign({ id: admin._id.toString(), role: admin.role }, secret, { expiresIn: "7d" });

    admin.lastLogin = new Date();
    await admin.save();

    res.cookie("token", token, cookieOpts());

    return res.json({
      token,
      admin: { id: admin._id, email: admin.email, role: admin.role, name: admin.name },
    });
  }
);

authRouter.post("/logout", (_req: Request, res: Response) => {
  res.clearCookie("token", { ...cookieOpts(), maxAge: 0 });
  return res.json({ message: "Logged out" });
});

authRouter.get("/me", verifyToken, async (req: AuthRequest, res: Response) => {
  const doc = await Admin.findById(req.user!.id).select("name email role lastLogin").lean();
  if (!doc || Array.isArray(doc)) {
    return res.json({ user: req.user, admin: null });
  }
  const d = doc as unknown as { _id: { toString(): string }; email: string; name?: string; role: string };
  const admin = { id: String(d._id), email: d.email, name: d.name, role: d.role };
  return res.json({ user: req.user, admin });
});
