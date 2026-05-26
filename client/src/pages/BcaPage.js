import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Binary, CheckCircle, Code2, Database, ShieldCheck } from "lucide-react";
const HIGHLIGHTS = [
    {
        icon: Code2,
        title: "Programming Foundation",
        desc: "Hands-on coding, software development, problem-solving, and application-building skills.",
    },
    {
        icon: Database,
        title: "Data & Databases",
        desc: "Database systems, data handling, analytics fundamentals, and practical IT workflows.",
    },
    {
        icon: ShieldCheck,
        title: "Emerging Technologies",
        desc: "Exposure to artificial intelligence, cybersecurity, data analytics, and modern IT practices.",
    },
    {
        icon: Award,
        title: "AICTE & NEP 2020",
        desc: "AICTE approved program restructured in line with the National Education Policy 2020.",
    },
];
const OUTCOMES = [
    "Understand core computer application and computer science concepts",
    "Write, test, and debug programs using modern programming practices",
    "Use databases and data handling tools for real-world problems",
    "Build logical, analytical, and problem-solving abilities",
    "Understand AI, cybersecurity, data analytics, and emerging IT areas",
    "Develop communication and teamwork skills for technology workplaces",
    "Work on projects, internships, and practical assignments",
    "Prepare for IT careers, startups, and higher studies in computer science",
];
export function BcaPage() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "BCA Program - Mandke College | AICTE Approved | Computer Applications" }), _jsx("meta", { name: "description", content: "Bachelor of Computer Applications at Mandke College, Pune. AICTE approved BCA program aligned with NEP 2020." })] }), _jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-primary via-[#12316d] to-dark py-20 text-white md:py-28", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-transparent" }), _jsxs("div", { className: "relative mx-auto max-w-6xl px-4", children: [_jsx(motion.span, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, className: "inline-block rounded-badge bg-accent/20 px-3 py-1 text-xs font-bold uppercase text-accent", children: "AICTE Approved | NEP 2020" }), _jsx(motion.h1, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl", children: "Bachelor of Computer Applications" }), _jsx(motion.p, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 }, className: "mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl", children: "A technology-focused undergraduate program for students passionate about IT, software development, programming, AI, cybersecurity, and data analytics." }), _jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [_jsx(Link, { to: "/admissions", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg", children: "Apply Now" }), _jsx("a", { href: "#curriculum", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white/90 bg-white/5 px-8 py-3.5 text-base font-bold text-white", children: "View Curriculum" })] }), _jsx("div", { className: "mt-12 flex flex-wrap gap-6", children: [
                                    { label: "Duration", value: "3 Years" },
                                    { label: "Approval", value: "AICTE" },
                                    { label: "Framework", value: "NEP 2020" },
                                    { label: "Focus", value: "IT & Software" },
                                ].map((item) => (_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-400", children: item.label }), _jsx("p", { className: "font-semibold", children: item.value })] }, item.label))) })] })] }), _jsx("section", { className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Program Overview" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold text-primary md:text-4xl", children: "Technology Skills for a Digital Future" }), _jsx("p", { className: "mt-6 text-lg leading-relaxed text-textSecondary", children: "The BCA course at Mandke College, Pune, has been restructured in line with NEP 2020, offering students a pathway into Information Technology, Software Development, Artificial Intelligence, Cybersecurity, and Data Analytics." }), _jsx("p", { className: "mt-4 text-lg leading-relaxed text-textSecondary", children: "The program combines theoretical foundations with practical applications, hands-on coding, industry certifications, internships, and a multidisciplinary learning environment." })] }), _jsx("div", { className: "grid gap-4 md:grid-cols-2", children: HIGHLIGHTS.map((item) => {
                                const Icon = item.icon;
                                return (_jsxs("div", { className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15", children: _jsx(Icon, { className: "h-6 w-6 text-accent" }) }), _jsx("h3", { className: "mt-4 font-heading font-semibold text-primary", children: item.title }), _jsx("p", { className: "mt-2 text-sm text-textSecondary", children: item.desc })] }, item.title));
                            }) })] }) }), _jsx("section", { id: "curriculum", className: "bg-section py-20 md:py-28", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsx("h2", { className: "font-heading text-3xl font-bold text-primary md:text-4xl", children: "Course Structure" }), _jsx("p", { className: "mt-4 max-w-2xl text-lg text-textSecondary", children: "The BCA program balances programming, database systems, software engineering, web technologies, projects, and industry-oriented practical learning." }), _jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: [
                                { year: "First Year", subjects: ["Programming Fundamentals", "Computer Organization", "Mathematics for Computing", "Web Basics"] },
                                { year: "Second Year", subjects: ["Data Structures", "Database Management", "Object-Oriented Programming", "Operating Systems"] },
                                { year: "Third Year", subjects: ["Software Engineering", "AI / Data Analytics", "Cybersecurity Basics", "Project / Internship"] },
                            ].map((group) => (_jsxs("div", { className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h3", { className: "font-heading text-lg font-bold text-accent", children: group.year }), _jsx("ul", { className: "mt-4 space-y-2", children: group.subjects.map((subject) => (_jsxs("li", { className: "flex items-start gap-2 text-sm text-textSecondary", children: [_jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), subject] }, subject))) })] }, group.year))) })] }) }), _jsx("section", { className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Program Outcomes" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold text-primary md:text-4xl", children: "What You'll Achieve" }), _jsx("p", { className: "mt-6 text-lg text-textSecondary", children: "BCA graduates are prepared for IT companies, startups, software roles, internships, and higher studies in computer science." })] }), _jsx("div", { className: "space-y-3", children: OUTCOMES.map((outcome) => (_jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-borderSoft bg-white p-4 shadow-sm", children: [_jsx(CheckCircle, { className: "mt-1 h-5 w-5 shrink-0 text-accent" }), _jsx("span", { className: "text-sm text-textSecondary", children: outcome })] }, outcome))) })] }) }), _jsx("section", { className: "bg-gradient-to-r from-primary via-dark to-accent py-20 text-white md:py-24", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [_jsx(Binary, { className: "mx-auto h-12 w-12 text-accent", "aria-hidden": true }), _jsx("h2", { className: "mt-4 font-heading text-3xl font-bold md:text-4xl", children: "Ready to Build Your IT Career?" }), _jsx("p", { className: "mt-6 text-lg text-white/90", children: "Join Mandke College's BCA program and start building programming, analytical, and digital technology skills." }), _jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/admissions", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg", children: "Apply Now" }), _jsx(Link, { to: "/contact#enquiry", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white px-8 py-3.5 text-base font-bold text-white", children: "Ask Questions" })] })] }) })] }));
}
