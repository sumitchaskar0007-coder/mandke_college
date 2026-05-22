import jwt from "jsonwebtoken";
function extractToken(req) {
    const cookieTok = req.cookies?.token;
    if (typeof cookieTok === "string" && cookieTok)
        return cookieTok;
    const h = req.headers.authorization;
    if (h?.startsWith("Bearer "))
        return h.replace(/^Bearer\s+/i, "").trim();
    return undefined;
}
export function verifyToken(req, res, next) {
    const token = extractToken(req);
    if (!token)
        return res.status(401).json({ message: "Unauthorized" });
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
        req.user = payload;
        return next();
    }
    catch {
        return res.status(401).json({ message: "Invalid token" });
    }
}
