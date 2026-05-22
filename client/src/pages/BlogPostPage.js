import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/client";
export function BlogPostPage() {
    const { slug } = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["blog", slug],
        enabled: !!slug,
        queryFn: async () => (await api.get(`/blogs/slug/${slug}`)).data,
    });
    if (isLoading) {
        return (_jsx("section", { className: "px-4 py-16", children: _jsx("p", { children: "Loading\u2026" }) }));
    }
    if (isError || !data) {
        return (_jsxs("section", { className: "px-4 py-16", children: [_jsx("p", { children: "Article not found." }), _jsx(Link, { to: "/blog", className: "mt-4 text-accent hover:underline", children: "Back to blog" })] }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [data.title, " \u2014 Mandke College"] }) }), _jsxs("article", { className: "mx-auto max-w-3xl px-4 py-16", children: [_jsx("p", { className: "text-sm font-semibold uppercase text-accent", children: data.category }), _jsx("h1", { className: "mt-2 font-heading text-4xl font-bold text-primary", children: data.title }), _jsxs("p", { className: "mt-2 text-sm text-textSecondary", children: [data.author, data.publishedAt ? ` · ${new Date(data.publishedAt).toLocaleDateString()}` : ""] }), data.coverImage ? (_jsx("img", { src: data.coverImage, alt: "", className: "mt-8 w-full rounded-card object-cover shadow-card" })) : null, _jsx("div", { className: "mt-10 space-y-4 text-base leading-relaxed text-textSecondary [&_h1]:font-heading [&_h1]:text-2xl [&_h1]:text-primary [&_h2]:mt-6 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:text-primary [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6", dangerouslySetInnerHTML: { __html: data.content || "" } }), (data.tags || []).length ? (_jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: data.tags.map((t) => (_jsx("span", { className: "rounded-badge bg-section px-2 py-1 text-xs", children: t }, t))) })) : null, _jsx(Link, { to: "/blog", className: "mt-10 inline-block font-semibold text-accent hover:underline", children: "\u2190 All articles" })] })] }));
}
