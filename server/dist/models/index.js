import mongoose, { Schema, model } from "mongoose";
const baseOptions = { timestamps: true };
const models = mongoose.models;
export const Admin = models.Admin || model("Admin", new Schema({
    name: String,
    email: { type: String, unique: true },
    passwordHash: String,
    role: { type: String, enum: ["superadmin", "editor"], default: "editor" },
    lastLogin: Date,
}, baseOptions));
export const Blog = models.Blog || model("Blog", new Schema({
    title: String,
    slug: { type: String, unique: true },
    excerpt: String,
    content: String,
    coverImage: String,
    category: { type: String, enum: ["career", "news", "events", "tips"] },
    tags: [String],
    author: String,
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
    views: { type: Number, default: 0 },
}, baseOptions));
export const Announcement = models.Announcement || model("Announcement", new Schema({
    title: String,
    body: String,
    type: { type: String, enum: ["notice", "event", "result", "admission", "general"], default: "general" },
    link: String,
    isPinned: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    expiresAt: Date,
}, baseOptions));
export const Notice = models.Notice || model("Notice", new Schema({
    title: String,
    pdfUrl: String,
    category: String,
    date: Date,
}, baseOptions));
export const GalleryAlbum = models.GalleryAlbum || model("GalleryAlbum", new Schema({
    title: String,
    slug: { type: String, unique: true, sparse: true },
    category: String,
}, baseOptions));
export const Gallery = models.Gallery || model("Gallery", new Schema({
    imageUrl: String,
    thumbnailUrl: String,
    title: String,
    category: String,
    albumId: { type: Schema.Types.ObjectId, ref: "GalleryAlbum" },
    eventName: String,
    date: Date,
}, baseOptions));
export const Testimonial = models.Testimonial || model("Testimonial", new Schema({
    studentName: String,
    batch: String,
    course: String,
    photo: String,
    quote: String,
    videoUrl: String,
    rating: Number,
    isApproved: { type: Boolean, default: false },
}, baseOptions));
export const Faculty = models.Faculty || model("Faculty", new Schema({
    name: String,
    designation: String,
    qualification: String,
    specialisation: String,
    photo: String,
    department: String,
    bio: String,
    linkedIn: String,
    order: Number,
    isActive: { type: Boolean, default: true },
}, baseOptions));
export const Enquiry = models.Enquiry || model("Enquiry", new Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    course: String,
    source: String,
    isRead: { type: Boolean, default: false },
    repliedAt: Date,
}, baseOptions));
export const Admission = models.Admission || model("Admission", new Schema({
    fullName: String,
    dob: Date,
    phone: String,
    email: String,
    parentPhone: String,
    qualification: String,
    percentage: Number,
    course: String,
    year: String,
    address: String,
    message: String,
    source: String,
    status: { type: String, enum: ["pending", "reviewing", "accepted", "rejected"], default: "pending" },
    notes: String,
}, baseOptions));
export const Content = models.Content || model("Content", new Schema({
    page: String,
    section: String,
    data: Schema.Types.Mixed,
    updatedBy: String,
}, { timestamps: { createdAt: false, updatedAt: true } }));
export const Event = models.Event || model("Event", new Schema({
    title: String,
    date: Date,
    time: String,
    venue: String,
    description: String,
    image: String,
    category: String,
}, baseOptions));
export const Stats = models.Stats || model("Stats", new Schema({
    students: Number,
    years: Number,
    placement: Number,
    jubilee: Number,
    trustBadges: [String],
}, { timestamps: false }));
export const NewsletterSubscriber = models.NewsletterSubscriber || model("NewsletterSubscriber", new Schema({
    email: { type: String, unique: true, lowercase: true, trim: true },
}, baseOptions));
