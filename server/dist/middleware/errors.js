export function notFoundHandler(_req, res) {
    res.status(404).json({ message: "Not found" });
}
export function errorHandler(err, _req, res, _next) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Server error";
    const status = err?.status || 500;
    res.status(status).json({ message });
}
