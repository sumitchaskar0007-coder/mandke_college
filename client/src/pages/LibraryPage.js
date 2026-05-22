import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Monitor, Clock, MapPin, Users, Award } from "lucide-react";
const LIBRARY_STATS = [
    { icon: BookOpen, label: "Physical Books", value: "15000+" },
    { icon: Monitor, label: "E-Resources", value: "50+" },
    { icon: Users, label: "Seating Capacity", value: "200+" },
    { icon: Award, label: "Databases", value: "Premium" },
];
const E_RESOURCES = [
    {
        title: "Jurisprudence & Statutes",
        link: "#",
        desc: "Legal databases and regulatory documents",
    },
    {
        title: "Business & Management Journals",
        link: "#",
        desc: "Top international business publications",
    },
    {
        title: "Commerce Reference Collection",
        link: "#",
        desc: "Accounting, finance, and taxation guides",
    },
    {
        title: "SPPU Repository",
        link: "#",
        desc: "Pune University approved study materials",
    },
    {
        title: "Digital Archives",
        link: "#",
        desc: "Institutional publications and theses",
    },
    {
        title: "Online Databases",
        link: "#",
        desc: "Industry reports and market research",
    },
];
export function LibraryPage() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Library \u2014 Mandke College | Learning Resources & Digital Hub" }), _jsx("meta", { name: "description", content: "Mandke College Library: 15000+ books, e-resources, study spaces, and digital learning hub for commerce students." })] }), _jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-primary via-[#152a66] to-dark py-20 text-white md:py-28", children: [_jsx("div", { className: "pointer-events-none absolute inset-0 bg-brand-radial opacity-90" }), _jsxs("div", { className: "relative mx-auto max-w-6xl px-4", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Knowledge Hub" }), _jsx("h1", { className: "mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl", children: "Mandke College Library" }), _jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl", children: "A modern learning commons with 15,000+ physical books, premium e-resources, quiet study zones, and collaborative spaces designed for commerce student success." }), _jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [_jsx("a", { href: "#resources", className: "inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:brightness-110", children: "Browse E-Resources" }), _jsx("a", { href: "#hours", className: "inline-flex min-h-[44px] items-center rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur-sm hover:bg-white/25", children: "Library Hours" })] })] })] }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "mx-auto max-w-3xl text-center", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "By The Numbers" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl", children: "A comprehensive learning resource center" })] }), _jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: LIBRARY_STATS.map((stat, i) => {
                            const Icon = stat.icon;
                            return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.05 }, whileHover: { y: -6 }, className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,60,143,0.14)] md:p-8", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15", children: _jsx(Icon, { className: "h-7 w-7 text-accent", "aria-hidden": true }) }), _jsx("p", { className: "mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl", children: stat.value }), _jsx("p", { className: "mt-2 text-base text-textSecondary", children: stat.label })] }, stat.label));
                        }) })] }), _jsx("section", { className: "bg-section py-20 md:py-28", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsx("h2", { className: "font-heading text-3xl font-bold text-primary md:text-4xl", children: "Library Features" }), _jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: [
                                {
                                    icon: "📚",
                                    title: "Physical Collection",
                                    desc: "15000+ books across commerce, general studies, and reference materials. Open Access shelving for browsing.",
                                },
                                {
                                    icon: "🖥️",
                                    title: "Digital Library",
                                    desc: "50+ e-databases including journals, case studies, and financial databases. Access 24/7 from campus.",
                                },
                                {
                                    icon: "🤫",
                                    title: "Quiet Study Zones",
                                    desc: "200+ seating capacity with dedicated silent reading areas, individual carrels, and focused study nooks.",
                                },
                                {
                                    icon: "👥",
                                    title: "Group Study Areas",
                                    desc: "Collaborative spaces with whiteboards, projectors, and flexible furniture for project work and discussions.",
                                },
                                {
                                    icon: "💻",
                                    title: "Tech-Enabled Learning",
                                    desc: "Computer labs, high-speed internet, printing services, and multimedia resources for research.",
                                },
                                {
                                    icon: "🎓",
                                    title: "Expert Support",
                                    desc: "Librarians and subject experts available for research guidance, citation help, and information literacy sessions.",
                                },
                            ].map((item, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.05 }, className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsx("p", { className: "text-4xl", children: item.icon }), _jsx("h3", { className: "mt-4 font-heading text-xl font-bold text-primary", children: item.title }), _jsx("p", { className: "mt-2 text-textSecondary", children: item.desc })] }, item.title))) })] }) }), _jsxs("section", { id: "resources", className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: [_jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Online Access" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold text-primary md:text-4xl", children: "Premium Digital Resources" }), _jsx("p", { className: "mt-4 text-lg text-textSecondary", children: "Premium subscriptions to leading academic and business databases, accessible to all students and faculty." })] }), _jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: E_RESOURCES.map((resource, i) => (_jsxs(motion.a, { href: resource.link, initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.05 }, className: "group rounded-2xl border border-borderSoft bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg md:p-8", children: [_jsx("h3", { className: "font-heading text-lg font-bold text-primary group-hover:text-accent", children: resource.title }), _jsx("p", { className: "mt-2 text-textSecondary", children: resource.desc }), _jsx("p", { className: "mt-4 text-sm font-semibold text-accent", children: "Access Resource \u2192" })] }, resource.title))) })] }), _jsx("section", { className: "bg-section py-20 md:py-28", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsx("h2", { className: "text-center font-heading text-3xl font-bold text-primary md:text-4xl", children: "Our Services" }), _jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: [
                                {
                                    service: "Book Lending",
                                    details: "Borrow up to 5 books for 2 weeks. Renewal available online.",
                                },
                                {
                                    service: "Reference Service",
                                    details: "Expert assistance for research, citations, and subject matter queries.",
                                },
                                {
                                    service: "Document Delivery",
                                    details: "Digital copies of articles and chapters available within 48 hours.",
                                },
                                {
                                    service: "Library Orientation",
                                    details: "Guided tours and information literacy sessions for new students.",
                                },
                                {
                                    service: "Inter-Library Loan",
                                    details: "Access resources from partnering institutions and libraries.",
                                },
                                {
                                    service: "Printing & Scanning",
                                    details: "High-quality printing, scanning, and photocopying services available.",
                                },
                            ].map((item, i) => (_jsxs("div", { className: "rounded-2xl border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsx("h3", { className: "font-heading text-lg font-bold text-primary", children: item.service }), _jsx("p", { className: "mt-2 text-textSecondary", children: item.details })] }, item.service))) })] }) }), _jsx("section", { id: "hours", className: "mx-auto max-w-6xl px-4 py-20 md:py-28", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Clock, { className: "h-8 w-8 text-accent" }), _jsx("h3", { className: "font-heading text-2xl font-bold text-primary", children: "Operating Hours" })] }), _jsx("div", { className: "mt-8 space-y-4", children: [
                                        { day: "Monday – Friday", hours: "7:30 AM – 6:00 PM" },
                                        { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                                        { day: "Sunday", hours: "Closed" },
                                        { day: "During Exams", hours: "Extended Hours Available" },
                                        { day: "Holidays", hours: "As announced" },
                                    ].map((item) => (_jsxs("div", { className: "flex justify-between rounded-lg border border-borderSoft bg-white p-4", children: [_jsx("span", { className: "font-semibold text-primary", children: item.day }), _jsx("span", { className: "text-textSecondary", children: item.hours })] }, item.day))) })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-8 w-8 text-accent" }), _jsx("h3", { className: "font-heading text-2xl font-bold text-primary", children: "Location & Contact" })] }), _jsx("div", { className: "mt-8 space-y-4", children: _jsxs("div", { className: "rounded-2xl border border-borderSoft bg-gradient-to-br from-primary/5 to-accent/10 p-6", children: [_jsx("p", { className: "font-semibold text-primary", children: "Mandke College Library" }), _jsx("p", { className: "mt-2 text-textSecondary", children: "47/8, Mandke Growth Centre, Paud Road, Next to Ideal Colony Metro Station, Kothrud, Pune \u2013 411 038" }), _jsx("p", { className: "mt-4", children: _jsx("a", { href: "tel:+919922965506", className: "font-semibold text-accent hover:underline", children: "+91 99229 65506" }) }), _jsx("p", { children: _jsx("a", { href: "mailto:admissions.mandkecollege@gmail.com", className: "font-semibold text-accent hover:underline", children: "library@mandkecollege.edu.in" }) })] }) })] })] }) }), _jsx("section", { className: "bg-gradient-to-r from-primary via-dark to-accent py-20 text-white md:py-24", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [_jsx("h2", { className: "font-heading text-3xl font-bold md:text-4xl", children: "Ready to explore?" }), _jsx("p", { className: "mt-4 text-lg text-white/90", children: "Get your library card and unlock unlimited access to knowledge and resources." }), _jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/contact", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg", children: "Get Library Card" }), _jsx("a", { href: "https://opac.mandkecollege.edu.in", target: "_blank", rel: "noreferrer", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white px-8 py-3.5 text-base font-bold text-white", children: "OPAC Search" })] })] }) })] }));
}
