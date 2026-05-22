import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";
import { Admin, Announcement, Blog, Testimonial, Faculty, Stats, Content, Event, GalleryAlbum } from "./models/index.js";
dotenv.config();
async function run() {
    await connectDB();
    const hash = await bcrypt.hash("Admin@2025", 10);
    await Admin.updateOne({ email: "admin@mandkecollege.in" }, { name: "Super Admin", email: "admin@mandkecollege.in", passwordHash: hash, role: "superadmin" }, { upsert: true });
    await Announcement.deleteMany({});
    await Announcement.insertMany([
        { title: "Admissions Open 2026-27", body: "Apply now for FY/SY/TY B.Com", type: "admission", isPinned: true },
        { title: "Silver Jubilee Events", body: "Join celebrations through 2027", type: "event" },
        { title: "Exam Result Notice", body: "Semester results published", type: "result" }
    ]);
    await Blog.deleteMany({});
    await Blog.insertMany([
        {
            title: "Career Tips for Commerce Students",
            slug: "career-tips-commerce-students",
            excerpt: "Skills that make you industry-ready.",
            content: "<p>Commerce graduates who pair academics with communication and digital tools stand out in placements.</p>",
            category: "career",
            tags: ["career"],
            author: "Mandke College",
            isPublished: true,
            publishedAt: new Date(),
        },
        {
            title: "How to Prepare for B.Com Success",
            slug: "prepare-for-bcom-success",
            excerpt: "Build competence and mindset.",
            content: "<p>Draft article — publish from the admin panel.</p>",
            category: "tips",
            tags: ["bcom"],
            author: "Mandke College",
            isPublished: false,
        },
    ]);
    await Event.deleteMany({});
    const openDay = new Date();
    openDay.setDate(openDay.getDate() + 14);
    await Event.insertMany([
        {
            title: "Open Day — B.Com Programs",
            date: openDay,
            time: "10:00 AM",
            venue: "Mandke College, Kothrud",
            category: "Admission",
            description: "Meet faculty and explore our B.Com pathway.",
        },
    ]);
    await GalleryAlbum.deleteMany({});
    await GalleryAlbum.insertMany([
        { title: "Campus activities", slug: "campus-activities", category: "campus-activities" },
        { title: "Student achievements", slug: "student-achievements", category: "student-achievements" },
        { title: "Workshops", slug: "workshops", category: "workshops" },
        { title: "Celebrations", slug: "celebrations", category: "celebrations" },
    ]);
    await Testimonial.deleteMany({});
    await Testimonial.insertMany([
        {
            studentName: "Priya S.",
            batch: "2024",
            course: "B.Com",
            photo: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
            quote: "The placement workshops and mentor conversations changed how I present myself in interviews. I felt prepared, not nervous.",
            rating: 5,
            isApproved: true,
            videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        },
        ...Array.from({ length: 4 }).map((_, idx) => ({
            studentName: `Student ${idx + 2}`,
            batch: "2025",
            course: "B.Com",
            photo: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
            quote: "Mandke College helped me become career ready.",
            rating: 5,
            isApproved: true,
        })),
    ]);
    await Faculty.deleteMany({});
    await Faculty.insertMany([
        { name: "Prof. A. Deshmukh", designation: "Head of Department", qualification: "M.Com, NET", department: "Commerce", order: 1 },
        { name: "Prof. S. Kulkarni", designation: "Assistant Professor", qualification: "M.Com", department: "Commerce", order: 2 }
    ]);
    await Stats.deleteMany({});
    await Stats.create({
        students: 7000,
        years: 20,
        placement: 100,
        jubilee: 2027,
        trustBadges: ["NAAC", "SPPU", "AISHE", "NIRF"],
    });
    await Content.deleteMany({});
    await Content.insertMany([
        { page: "home", section: "hero", data: { headline: "Your Goal | Our Mission", subtitle: "BETTER YOU" } },
        { page: "home", section: "vision", data: { text: "To be a premier institution of need based higher education..." } },
        { page: "about", section: "managingDirector", data: { message: "I believe education is not only about earning a degree - it is about becoming confident, capable, and ready for the real world..." } },
        { page: "commerce", section: "theme", data: { text: "B.COM = Building Competence & Mindset" } }
    ]);
    console.log("Seed complete");
    process.exit(0);
}
run().catch((err) => {
    console.error(err);
    process.exit(1);
});
