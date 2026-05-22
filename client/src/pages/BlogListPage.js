import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../api/client";
export function BlogListPage() {
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const { data, isLoading } = useQuery({
        queryKey: ["blogs", category, search],
        queryFn: async () => {
            const params = new URLSearchParams({ limit: "12" });
            if (category)
                params.set("category", category);
            if (search.trim())
                params.set("search", search.trim());
            return (await api.get(`/blogs?${params}`)).data;
        },
    });
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Blog \u2014 Mandke College" }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: "Articles & career tips" }), _jsxs("div", { className: "mt-6 flex flex-col gap-4 md:flex-row md:items-end", children: [_jsxs("label", { className: "text-sm", children: ["Search", _jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), className: "mt-1 block w-full rounded-btn border border-borderSoft px-3 py-2 md:w-64", placeholder: "Search titles or tags" })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: ["", "career", "news", "events", "tips"].map((c) => (_jsx("button", { type: "button", onClick: () => setCategory(c), className: `rounded-full px-3 py-1.5 text-sm capitalize ${category === c ? "bg-primary text-white" : "bg-section text-textSecondary"}`, children: c || "All" }, c || "all"))) })] }), isLoading ? _jsx("p", { className: "mt-8", children: "Loading\u2026" }) : null, _jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: (data?.items || []).map((b) => (_jsxs("article", { className: "rounded-card border border-borderSoft bg-white shadow-card", children: [b.coverImage ? (_jsx("img", { src: b.coverImage, alt: "", className: "h-48 w-full rounded-t-card object-cover" })) : (_jsx("div", { className: "h-48 rounded-t-card bg-section" })), _jsxs("div", { className: "p-4", children: [_jsx("span", { className: "text-xs font-bold uppercase text-accent", children: b.category }), _jsx("h2", { className: "mt-2 font-heading text-lg font-semibold text-primary", children: _jsx(Link, { to: `/blog/${b.slug}`, className: "hover:text-accent", children: b.title }) }), b.excerpt ? _jsx("p", { className: "mt-2 line-clamp-3 text-sm text-textSecondary", children: b.excerpt }) : null, b.publishedAt ? (_jsx("p", { className: "mt-3 text-xs text-textSecondary", children: new Date(b.publishedAt).toLocaleDateString() })) : null] })] }, b._id))) })] })] }));
}
