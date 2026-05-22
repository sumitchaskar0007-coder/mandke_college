import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
export function SimpleContentPage({ title, subtitle, children, }) {
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [title, " \u2014 Mandke College"] }) }), _jsx("section", { className: "bg-section py-16", children: _jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: title }), subtitle ? _jsx("p", { className: "mt-4 text-textSecondary", children: subtitle }) : null] }) }), _jsx("section", { className: "mx-auto max-w-3xl px-4 py-12 text-textSecondary", children: children })] }));
}
export function DistanceEducationPage() {
    return (_jsx(SimpleContentPage, { title: "Distance Education", subtitle: "Flexible learning pathways with Mandke College support.", children: _jsxs("p", { children: ["Detailed procedures, links, and FAQs can be managed from the admin CMS. For admissions counselling, visit the", " ", _jsx(Link, { to: "/admissions", className: "font-semibold text-accent hover:underline", children: "Admissions" }), " ", "section."] }) }));
}
export function IQACPage() {
    return (_jsx(SimpleContentPage, { title: "IQAC", subtitle: "Internal Quality Assurance Cell \u2014 initiatives and reports.", children: _jsx("p", { children: "IQAC documents, AQAR links, and best practices will appear here as they are published through the CMS." }) }));
}
export function LibraryPage() {
    return (_jsx(SimpleContentPage, { title: "Library", subtitle: "Digital and physical learning resources for commerce students.", children: _jsx("p", { children: "Timings, OPAC links, e-resources, and new arrivals will be updated by administrators." }) }));
}
export function ActivitiesPage() {
    return (_jsx(SimpleContentPage, { title: "Activities", subtitle: "Sports, culture, clubs, and student life.", children: _jsx("p", { children: "Photos, reports, and upcoming activities will be published from the gallery and CMS." }) }));
}
export function StakeholdersPage() {
    return (_jsx(SimpleContentPage, { title: "Stakeholders", subtitle: "Students, parents, industry, and community engagement.", children: _jsx("p", { children: "Forms, feedback channels, and stakeholder-specific communications can be linked here via CMS." }) }));
}
export function AlumniPage() {
    return (_jsx(SimpleContentPage, { title: "Alumni", subtitle: "Stay connected with Mandke College.", children: _jsx("p", { children: "Alumni stories and registration will be wired to dedicated forms and workflows in a future iteration." }) }));
}
export function MHHFPage() {
    return (_jsx(SimpleContentPage, { title: "Mandke Human Happiness Foundation", subtitle: "Social initiatives that strengthen communities.", children: _jsx("p", { children: "Foundation programmes and impact stories will be showcased in this section." }) }));
}
