import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Handshake, Target, TrendingUp } from "lucide-react";
const PILLARS = [
    {
        title: "Placement cell",
        body: "CV reviews, aptitude prep, and recruiter connects from semester one.",
        icon: Handshake,
    },
    {
        title: "Industry immersion",
        body: "Workshops, guest lectures, and live projects aligned with commerce careers.",
        icon: Building2,
    },
    {
        title: "Outcome mindset",
        body: "We track skills, confidence, and readiness - not just attendance.",
        icon: Target,
    },
];
export function PlacementsSection({ placementPercent = 95, students = 5000 }) {
    const pct = Math.min(100, Math.max(0, placementPercent));
    return (_jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-dark via-[#121a3a] to-primary py-20 text-white md:py-28", children: [_jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,124,0,0.25),transparent_50%)]" }), _jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08),transparent_45%)]" }), _jsx("div", { className: "relative mx-auto max-w-6xl px-4", children: _jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Placements & careers" }), _jsx("h2", { className: "mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl", children: "Built for recruiters. Designed for your first paycheque." }), _jsx("p", { className: "mt-5 max-w-xl text-lg leading-relaxed text-slate-300", children: "From mock interviews to employer showcases, Mandke College keeps placement support practical, personal, and persistent - so you walk into interviews with proof, not promises." }), _jsxs("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap", children: [_jsxs("div", { className: "rounded-btn border border-white/15 bg-white/5 p-5 backdrop-blur-sm", children: [_jsxs("p", { className: "font-heading text-4xl font-bold text-accent md:text-5xl", children: [pct, "%"] }), _jsx("p", { className: "mt-1 text-sm font-medium text-slate-300", children: "Placement-focused training cohorts*" })] }), _jsxs("div", { className: "rounded-btn border border-white/15 bg-white/5 p-5 backdrop-blur-sm", children: [_jsxs("p", { className: "font-heading text-4xl font-bold text-white md:text-5xl", children: [students.toLocaleString(), "+"] }), _jsx("p", { className: "mt-1 text-sm font-medium text-slate-300", children: "Learners mentored across programmes" })] })] }), _jsx("p", { className: "mt-4 text-xs text-slate-500", children: "*Outcome metrics vary by cohort; speak to admissions for latest reports." })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, className: "space-y-4", children: [PILLARS.map((p, i) => {
                                    const Icon = p.icon;
                                    return (_jsxs(motion.div, { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.06 }, viewport: { once: true }, whileHover: { scale: 1.01 }, className: "flex gap-4 rounded-btn border border-white/10 bg-white/5 p-5 backdrop-blur-md", children: [_jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-accent/20 text-accent", children: _jsx(Icon, { className: "h-6 w-6", "aria-hidden": true }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-heading text-lg font-bold", children: p.title }), _jsx("p", { className: "mt-1 text-sm leading-relaxed text-slate-300", children: p.body })] })] }, p.title));
                                }), _jsxs(Link, { to: "/admissions", className: "mt-2 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:brightness-110", children: [_jsx(TrendingUp, { className: "h-5 w-5", "aria-hidden": true }), "Book a career counselling call"] })] })] }) })] }));
}
