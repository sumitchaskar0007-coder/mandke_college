import jwt from "jsonwebtoken";
export function attachUserOptional(req, _res, next) {
    const secret = process.env.JWT_SECRET || "dev_secret";
    const cookieToken = req.cookies?.token;
    const header = req.headers.authorization?.replace(/^Bearer\s+/i, "");
    const token = cookieToken || header;
    if (!token)
        return next();
    try {
        const payload = jwt.verify(token, secret);
        req.user = payload;
    }
    catch {
        /* ignore invalid token for public endpoints */
    }
    return next();
}
