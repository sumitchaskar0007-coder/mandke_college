import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

function extractToken(req: Request): string | undefined {
  const cookieTok = req.cookies?.token;
  if (typeof cookieTok === "string" && cookieTok) return cookieTok;
  const h = req.headers.authorization;
  if (h?.startsWith("Bearer ")) return h.replace(/^Bearer\s+/i, "").trim();
  return undefined;
}

export function verifyToken(req: AuthRequest, res: Response, next: NextFunction) {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "dev_secret") as { id: string; role: string };
    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
