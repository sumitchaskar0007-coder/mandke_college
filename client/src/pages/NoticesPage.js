import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { api } from "../api/client";
export function NoticesPage() {
    const { data, isLoading } = useQuery({
        queryKey: ["notices"],
        queryFn: async () => (await api.get("/notices")).data,
    });
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Notices \u2014 Mandke College" }) }), _jsxs("section", { className: "mx-auto max-w-5xl px-4 py-16", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: "Official notices" }), _jsx("p", { className: "mt-2 text-textSecondary", children: "Download PDF notices issued by the college." }), isLoading ? _jsx("p", { className: "mt-6", children: "Loading\u2026" }) : null, _jsx("div", { className: "mt-8 overflow-x-auto rounded-card border border-borderSoft bg-white shadow-card", children: _jsxs("table", { className: "w-full text-left text-sm", children: [_jsx("thead", { className: "bg-section text-textSecondary", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-3", children: "Sr." }), _jsx("th", { className: "px-4 py-3", children: "Title" }), _jsx("th", { className: "px-4 py-3", children: "Category" }), _jsx("th", { className: "px-4 py-3", children: "Date" }), _jsx("th", { className: "px-4 py-3", children: "PDF" })] }) }), _jsx("tbody", { children: (data?.items || []).map((r, i) => (_jsxs("tr", { className: "border-t border-borderSoft", children: [_jsx("td", { className: "px-4 py-3", children: i + 1 }), _jsx("td", { className: "px-4 py-3 font-medium text-primary", children: r.title }), _jsx("td", { className: "px-4 py-3", children: r.category || "—" }), _jsx("td", { className: "px-4 py-3", children: r.date ? new Date(r.date).toLocaleDateString() : "—" }), _jsx("td", { className: "px-4 py-3", children: r.pdfUrl ? (_jsx("a", { href: r.pdfUrl, target: "_blank", rel: "noreferrer", className: "font-semibold text-accent hover:underline", children: "Download" })) : ("—") })] }, r._id))) })] }) })] })] }));
}
