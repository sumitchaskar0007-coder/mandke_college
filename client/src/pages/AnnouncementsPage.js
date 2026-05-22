import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { api } from "../api/client";
const TABS = [
    ["", "All"],
    ["notice", "Notices"],
    ["event", "Events"],
    ["result", "Results"],
    ["admission", "Admissions"],
];
export function AnnouncementsPage() {
    const [tab, setTab] = useState("");
    const { data, isLoading } = useQuery({
        queryKey: ["announcements", "page", tab],
        queryFn: async () => {
            const q = tab ? `?type=${tab}&limit=20` : "?limit=20";
            return (await api.get(`/announcements${q}`)).data;
        },
    });
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Announcements \u2014 Mandke College" }) }), _jsxs("section", { className: "mx-auto max-w-4xl px-4 py-16", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: "Announcements" }), _jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: TABS.map(([value, label]) => (_jsx("button", { type: "button", onClick: () => setTab(value), className: `rounded-full px-4 py-2 text-sm font-medium ${tab === value ? "bg-primary text-white" : "bg-section text-textSecondary hover:bg-borderSoft"}`, children: label }, value || "all"))) }), isLoading ? _jsx("p", { className: "mt-8 text-textSecondary", children: "Loading\u2026" }) : null, _jsx("ul", { className: "mt-8 space-y-4", children: (data?.items || []).map((a) => (_jsxs("li", { className: "rounded-card border border-borderSoft bg-white p-5 shadow-card", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm", children: [a.isPinned ? _jsx("span", { "aria-hidden": true, children: "\uD83D\uDCCC" }) : null, _jsx("span", { className: "rounded-badge bg-section px-2 py-0.5 text-xs font-semibold capitalize text-primary", children: a.type }), a.createdAt ? (_jsx("span", { className: "text-textSecondary", children: new Date(a.createdAt).toLocaleDateString() })) : null] }), _jsx("h2", { className: "mt-2 font-heading text-xl font-semibold text-primary", children: a.title }), a.body ? _jsx("p", { className: "mt-2 text-textSecondary", children: a.body }) : null, a.link ? (_jsx("a", { href: a.link, className: "mt-2 inline-block text-sm font-semibold text-accent hover:underline", target: "_blank", rel: "noreferrer", children: "Open link \u2192" })) : null] }, a._id))) })] })] }));
}
