import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { api } from "../api/client";
export function GalleryPage() {
    const [category, setCategory] = useState("all");
    const categoriesQ = useQuery({
        queryKey: ["gallery", "categories"],
        queryFn: async () => (await api.get("/gallery/categories")).data,
    });
    const { data, isLoading } = useQuery({
        queryKey: ["gallery", "all", category],
        queryFn: async () => {
            const query = category === "all" ? "?limit=60" : `?limit=60&category=${encodeURIComponent(category)}`;
            return (await api.get(`/gallery${query}`)).data;
        },
    });
    const categories = categoriesQ.data || [];
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Gallery - Mandke College" }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: "Gallery" }), _jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: [{ label: "All", value: "all" }, ...categories].map((item) => (_jsx("button", { type: "button", onClick: () => setCategory(item.value), className: `rounded-btn border px-4 py-2 text-sm font-bold transition ${category === item.value
                                ? "border-accent bg-accent text-white"
                                : "border-borderSoft bg-white text-primary hover:border-accent"}`, children: item.label }, item.value))) }), isLoading ? _jsx("p", { className: "mt-6", children: "Loading..." }) : null, _jsx("div", { className: "mt-10 columns-2 gap-3 sm:columns-3 md:columns-4", children: (data || []).map((g) => (_jsxs("figure", { className: "group relative mb-3 break-inside-avoid overflow-hidden rounded-card shadow-card", children: [_jsx("img", { src: g.thumbnailUrl || g.imageUrl || "", alt: g.title || g.eventName || "Campus", className: "h-auto w-full object-cover transition group-hover:scale-[1.02]", loading: "lazy" }), _jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm text-white opacity-0 transition group-hover:opacity-100", children: g.eventName || g.title })] }, g._id))) })] })] }));
}
