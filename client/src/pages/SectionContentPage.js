import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation } from "react-router-dom";
import { SECTION_PAGES } from "../data/navigation";
export function SectionContentPage() {
    const { pathname } = useLocation();
    const page = SECTION_PAGES.find((entry) => entry.to === pathname);
    if (!page) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [page.label, " - Mandke College"] }) }), _jsx("section", { className: "bg-section py-16", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: page.group }), _jsx("h1", { className: "mt-3 font-heading text-4xl font-bold text-primary md:text-5xl", children: page.label }), _jsx("p", { className: "mt-4 text-textSecondary", children: page.subtitle })] }) }), _jsx("section", { className: "mx-auto max-w-4xl px-4 py-12", children: _jsxs("div", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: page.label }), _jsx("div", { className: "mt-4 space-y-4 text-textSecondary", children: page.content?.length ? (page.content.map((paragraph) => _jsx("p", { children: paragraph }, paragraph))) : (_jsx("p", { children: "Content, notices, PDFs, forms, and detailed information for this section can be published here." })) }), page.highlights?.length ? (_jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: page.highlights.map((highlight) => (_jsx("span", { className: "rounded-btn bg-section px-3 py-1.5 text-sm font-semibold text-primary", children: highlight }, highlight))) })) : null, _jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [_jsx(Link, { to: "/contact", className: "inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white", children: "Contact Office" }), _jsx(Link, { to: "/admissions", className: "inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary", children: "Admissions" })] })] }) })] }));
}
