import jwt from "jsonwebtoken";
import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.js";

export function attachUserOptional(req: AuthRequest, _res: Response, next: NextFunction) {
  const secret = process.env.JWT_SECRET || "dev_secret";
  const cookieToken = req.cookies?.token as string | undefined;
  const header = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  const token = cookieToken || header;
  if (!token) return next();
  try {
    const payload = jwt.verify(token, secret) as { id: string; role: string };
    req.user = payload;
  } catch {
    /* ignore invalid token for public endpoints */
  }
  return next();
}
