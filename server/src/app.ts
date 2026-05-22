import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";

import { notFoundHandler, errorHandler } from "./middleware/errors.js";
import { configureCloudinary } from "./config/cloudinary.js";

import { authRouter } from "./routes/auth.routes.js";
import { blogRouter } from "./routes/blog.routes.js";
import { announcementRouter } from "./routes/announcement.routes.js";
import { noticeRouter } from "./routes/notice.routes.js";
import { galleryRouter } from "./routes/gallery.routes.js";
import { testimonialRouter } from "./routes/testimonial.routes.js";
import { facultyRouter } from "./routes/faculty.routes.js";
import { enquiryRouter } from "./routes/enquiry.routes.js";
import { admissionRouter } from "./routes/admission.routes.js";
import { eventRouter } from "./routes/event.routes.js";
import { newsletterRouter } from "./routes/newsletter.routes.js";
import { contentRouter } from "./routes/content.routes.js";
import { statsRouter } from "./routes/stats.routes.js";

configureCloudinary();

export const app = express();

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(compression());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/announcements", announcementRouter);
app.use("/api/notices", noticeRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/testimonials", testimonialRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/enquiry", enquiryRouter);
app.use("/api/admissions", admissionRouter);
app.use("/api/events", eventRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/content", contentRouter);
app.use("/api/stats", statsRouter);

app.use(notFoundHandler);
app.use(errorHandler);
