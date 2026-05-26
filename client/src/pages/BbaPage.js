import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Briefcase, CheckCircle, Presentation, Target } from "lucide-react";
const HIGHLIGHTS = [
    {
        icon: Presentation,
        title: "Management Foundation",
        desc: "Business strategy, communication, marketing, HR, finance, and digital business practices.",
    },
    {
        icon: Target,
        title: "Leadership Skills",
        desc: "Case studies, presentations, projects, and teamwork that build confidence and decision-making.",
    },
    {
        icon: Award,
        title: "NEP 2020 Aligned",
        desc: "Flexible learning, interdisciplinary exposure, innovation, and skill-focused development.",
    },
    {
        icon: Briefcase,
        title: "Industry Exposure",
        desc: "Internships, industry visits, projects, and practical learning for corporate readiness.",
    },
];
const OUTCOMES = [
    "Understand core management concepts and business functions",
    "Apply marketing, finance, HR, and operations knowledge in practical contexts",
    "Develop leadership, communication, and presentation skills",
    "Analyze business problems and propose practical solutions",
    "Work on case studies, projects, industry visits, and internships",
    "Build entrepreneurial thinking and digital business readiness",
    "Use data-driven decision making in business scenarios",
    "Prepare for corporate careers, startups, and higher studies",
];
export function BbaPage() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "BBA Program - Mandke College | AICTE Approved | NEP 2020" }), _jsx("meta", { name: "description", content: "Bachelor of Business Administration at Mandke College, Pune. AICTE approved BBA program aligned with NEP 2020." })] }), _jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-primary via-[#14306f] to-dark py-20 text-white md:py-28", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-transparent" }), _jsxs("div", { className: "relative mx-auto max-w-6xl px-4", children: [_jsx(motion.span, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, className: "inline-block rounded-badge bg-accent/20 px-3 py-1 text-xs font-bold uppercase text-accent", children: "AICTE Approved | NEP 2020" }), _jsx(motion.h1, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl", children: "Bachelor of Business Administration" }), _jsx(motion.p, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 }, className: "mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl", children: "A future-focused undergraduate degree for students who want to build careers in management, leadership, entrepreneurship, and digital business." }), _jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [_jsx(Link, { to: "/admissions", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg", children: "Apply Now" }), _jsx("a", { href: "#curriculum", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white/90 bg-white/5 px-8 py-3.5 text-base font-bold text-white", children: "View Curriculum" })] }), _jsx("div", { className: "mt-12 flex flex-wrap gap-6", children: [
                                    { label: "Duration", value: "3 Years" },
                                    { label: "Approval", value: "AICTE" },
                                    { label: "Framework", value: "NEP 2020" },
                                    { label: "Focus", value: "Leadership" },
                                ].map((item) => (_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-400", children: item.label }), _jsx("p", { className: "font-semibold", children: item.value })] }, item.label))) })] })] }), _jsx("section", { className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Program Overview" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold text-primary md:text-4xl", children: "Management for the Real World" }), _jsx("p", { className: "mt-6 text-lg leading-relaxed text-textSecondary", children: "The BBA program at Mandke College, Pune, is crafted as per NEP 2020 guidelines. Students gain exposure to marketing, finance, human resource management, international business, and data-driven decision making." }), _jsx("p", { className: "mt-4 text-lg leading-relaxed text-textSecondary", children: "Through case studies, projects, industry visits, and internships, students graduate with the right balance of academic knowledge, practical skills, and entrepreneurial mindset." })] }), _jsx("div", { className: "grid gap-4 md:grid-cols-2", children: HIGHLIGHTS.map((item) => {
                                const Icon = item.icon;
                                return (_jsxs("div", { className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15", children: _jsx(Icon, { className: "h-6 w-6 text-accent" }) }), _jsx("h3", { className: "mt-4 font-heading font-semibold text-primary", children: item.title }), _jsx("p", { className: "mt-2 text-sm text-textSecondary", children: item.desc })] }, item.title));
                            }) })] }) }), _jsx("section", { id: "curriculum", className: "bg-section py-20 md:py-28", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsx("h2", { className: "font-heading text-3xl font-bold text-primary md:text-4xl", children: "Course Structure" }), _jsx("p", { className: "mt-4 max-w-2xl text-lg text-textSecondary", children: "The BBA program combines management fundamentals, applied business skills, projects, and internships across 6 semesters." }), _jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [
                                { year: "First Year", subjects: ["Principles of Management", "Business Communication", "Business Economics", "Accounting Basics"] },
                                { year: "Second Year", subjects: ["Marketing Management", "Human Resource Management", "Financial Management", "Business Analytics"] },
                                { year: "Third Year", subjects: ["Strategic Management", "Entrepreneurship", "International Business", "Project / Internship"] },
                            ].map((group) => (_jsxs("div", { className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h3", { className: "font-heading text-lg font-bold text-accent", children: group.year }), _jsx("ul", { className: "mt-4 space-y-2", children: group.subjects.map((subject) => (_jsxs("li", { className: "flex items-start gap-2 text-sm text-textSecondary", children: [_jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), subject] }, subject))) })] }, group.year))) })] }) }), _jsx("section", { className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Program Outcomes" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold text-primary md:text-4xl", children: "What You'll Achieve" }), _jsx("p", { className: "mt-6 text-lg text-textSecondary", children: "BBA graduates are prepared for management careers, entrepreneurship, startups, family business growth, and higher studies." })] }), _jsx("div", { className: "space-y-3", children: OUTCOMES.map((outcome) => (_jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-borderSoft bg-white p-4 shadow-sm", children: [_jsx(CheckCircle, { className: "mt-1 h-5 w-5 shrink-0 text-accent" }), _jsx("span", { className: "text-sm text-textSecondary", children: outcome })] }, outcome))) })] }) }), _jsx("section", { className: "bg-gradient-to-r from-primary via-dark to-accent py-20 text-white md:py-24", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [_jsx("h2", { className: "font-heading text-3xl font-bold md:text-4xl", children: "Ready to Build Your Management Career?" }), _jsx("p", { className: "mt-6 text-lg text-white/90", children: "Join Mandke College's BBA program and start building leadership, confidence, and business readiness." }), _jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/admissions", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg", children: "Apply Now" }), _jsx(Link, { to: "/contact#enquiry", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white px-8 py-3.5 text-base font-bold text-white", children: "Ask Questions" })] })] }) })] }));
}
