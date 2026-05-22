import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Linkedin } from "lucide-react";
import { api } from "../api/client";
export function AboutFacultyPage() {
    const { data, isLoading } = useQuery({
        queryKey: ["faculty"],
        queryFn: async () => (await api.get("/faculty")).data,
    });
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Faculty \u2014 Mandke College" }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: "Faculty" }), _jsx("p", { className: "mt-2 text-textSecondary", children: "Committed educators guiding your B.Com journey." }), isLoading ? _jsx("p", { className: "mt-8", children: "Loading\u2026" }) : null, _jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: (data || []).map((f) => (_jsxs("article", { className: "group relative overflow-hidden rounded-card border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lg", children: [_jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "h-20 w-20 shrink-0 overflow-hidden rounded-full bg-section", children: f.photo ? _jsx("img", { src: f.photo, alt: "", className: "h-full w-full object-cover" }) : null }), _jsxs("div", { children: [_jsx("h2", { className: "font-heading text-lg font-semibold text-primary", children: f.name }), _jsx("p", { className: "text-sm text-accent", children: f.designation }), _jsx("p", { className: "text-sm text-textSecondary", children: f.qualification }), _jsx("p", { className: "text-xs text-textSecondary", children: f.department })] })] }), f.bio ? (_jsx("p", { className: "mt-4 text-sm text-textSecondary opacity-0 transition group-hover:opacity-100 md:opacity-100", children: f.bio })) : null, f.linkedIn ? (_jsxs("a", { href: f.linkedIn, target: "_blank", rel: "noreferrer", className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline", children: [_jsx(Linkedin, { className: "h-4 w-4" }), " LinkedIn"] })) : null] }, f._id))) })] })] }));
}
