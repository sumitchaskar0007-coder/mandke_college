import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Calculator, Clock, ClipboardList, LineChart, Star } from "lucide-react";
const COURSES = [
    {
        title: "B.Com (Regular)",
        subtitle: "SPPU affiliated | Building Competence & Mindset",
        duration: "3 Years",
        rating: 4.9,
        reviews: 320,
        highlights: ["Industry workshops", "Placement cell", "Digital accounting labs"],
        href: "/commerce",
        icon: Calculator,
        accent: "orange",
    },
    {
        title: "Career & Placement Track",
        subtitle: "CV clinics, mock interviews, employer connects",
        duration: "Ongoing",
        rating: 4.8,
        reviews: 180,
        highlights: ["Skill certifications", "Internship guidance", "Alumni mentors"],
        href: "/admissions",
        icon: Briefcase,
        accent: "navy",
    },
    {
        title: "Skill & Personality Labs",
        subtitle: "Communication, leadership, and confidence",
        duration: "Semester-wise",
        rating: 4.9,
        reviews: 240,
        highlights: ["Soft skills studio", "Debate & culture", "Sports & wellness"],
        href: "/activities",
        icon: LineChart,
        accent: "orange",
    },
];
const QUICK_LINKS = [
    { label: "Admission", href: "/admissions" },
    { label: "Key Features", href: "/commerce" },
    { label: "Fee Structure", href: "/commerce" },
    { label: "Faculty", href: "/about/faculty" },
];
function Stars({ value }) {
    const full = Math.round(value);
    return (_jsx("div", { className: "flex items-center gap-0.5", "aria-label": `${value} out of 5 stars`, children: Array.from({ length: 5 }).map((_, i) => (_jsx(Star, { className: `h-4 w-4 ${i < full ? "fill-amber-400 text-amber-400" : "text-borderSoft"}`, "aria-hidden": true }, i))) }));
}
export function CourseCards() {
    return (_jsx("section", { className: "relative overflow-hidden bg-white py-16 md:py-24", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Commerce pathway" }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl", children: "One focused B.Com ecosystem for study, skills, and confidence" })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "rounded-btn border border-borderSoft bg-section p-5", children: [_jsx("p", { className: "text-base leading-relaxed text-textSecondary", children: "Courses at Smt. Sudhatai Mandke College are designed to help students meet the opportunities of the corporate world through value-based learning, practical exposure, and personal development." }), _jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: QUICK_LINKS.map((link) => (_jsx(Link, { to: link.href, className: "rounded-btn border border-primary/15 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm transition hover:border-accent hover:text-accent", children: link.label }, link.label))) })] })] }), _jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: COURSES.map((c, i) => {
                        const Icon = c.icon;
                        const tone = c.accent === "orange"
                            ? "bg-gradient-to-br from-accent to-amber-600 text-white"
                            : "bg-gradient-to-br from-primary to-dark text-white";
                        return (_jsxs(motion.article, { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.08 }, viewport: { once: true }, whileHover: { y: -5 }, className: "group relative flex h-full flex-col overflow-hidden rounded-btn border border-borderSoft bg-white p-6 shadow-card transition-all duration-300 hover:shadow-lift", children: [_jsx("div", { className: `mb-4 inline-flex h-14 w-14 items-center justify-center rounded-btn ${tone}`, children: _jsx(Icon, { className: "h-7 w-7", "aria-hidden": true }) }), _jsx("h3", { className: "font-heading text-xl font-bold text-primary md:text-2xl", children: c.title }), _jsx("p", { className: "mt-2 text-sm leading-relaxed text-textSecondary", children: c.subtitle }), _jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3 text-sm text-textSecondary", children: [_jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-btn bg-section px-3 py-1 font-medium text-primary", children: [_jsx(Clock, { className: "h-4 w-4 text-accent", "aria-hidden": true }), c.duration] }), _jsx(Stars, { value: c.rating }), _jsxs("span", { className: "text-xs text-textSecondary", children: ["(", c.reviews, "+ reviews)"] })] }), _jsx("ul", { className: "mt-5 space-y-2 border-t border-borderSoft pt-5 text-sm text-textSecondary", children: c.highlights.map((h) => (_jsxs("li", { className: "flex gap-2", children: [_jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent", "aria-hidden": true }), h] }, h))) }), _jsxs(Link, { to: c.href, className: "mt-6 inline-flex min-h-[48px] items-center gap-2 font-semibold text-accent transition group-hover:gap-3", children: ["Explore ", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })] })] }, c.title));
                    }) }), _jsxs("div", { className: "mt-12 flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/admissions", className: "inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/25 transition hover:opacity-95", children: "Apply now" }), _jsxs(Link, { to: "/commerce", className: "inline-flex min-h-[48px] min-w-[170px] items-center justify-center rounded-btn border-2 border-primary bg-white px-8 py-3.5 text-base font-bold text-primary transition hover:bg-section", children: [_jsx(ClipboardList, { className: "mr-2 h-5 w-5", "aria-hidden": true }), "Compare pathways"] })] })] }) }));
}
