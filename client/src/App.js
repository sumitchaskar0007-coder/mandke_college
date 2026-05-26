import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./components/layout/MarketingLayout";
import { AdminGate } from "./pages/admin/AdminGate";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const CommercePage = lazy(() => import("./pages/CommercePage").then((m) => ({ default: m.CommercePage })));
const BbaPage = lazy(() => import("./pages/BbaPage").then((m) => ({ default: m.BbaPage })));
const BcaPage = lazy(() => import("./pages/BcaPage").then((m) => ({ default: m.BcaPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage").then((m) => ({ default: m.AdmissionsPage })));
const AnnouncementsPage = lazy(() => import("./pages/AnnouncementsPage").then((m) => ({ default: m.AnnouncementsPage })));
const NoticesPage = lazy(() => import("./pages/NoticesPage").then((m) => ({ default: m.NoticesPage })));
const GalleryPage = lazy(() => import("./pages/GalleryPage").then((m) => ({ default: m.GalleryPage })));
const BlogListPage = lazy(() => import("./pages/BlogListPage").then((m) => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const AboutFacultyPage = lazy(() => import("./pages/AboutFacultyPage").then((m) => ({ default: m.AboutFacultyPage })));
const LibraryPage = lazy(() => import("./pages/LibraryPage").then((m) => ({ default: m.LibraryPage })));
const AlumniPage = lazy(() => import("./pages/AlumniPage").then((m) => ({ default: m.AlumniPage })));
const Simple = lazy(() => import("./pages/SimpleContentPage").then((m) => ({
    default: m.DistanceEducationPage,
})));
const IQACPage = lazy(() => import("./pages/IQACPage").then((m) => ({ default: m.IQACPage })));
const IQACDetailPage = lazy(() => import("./pages/IQACPage").then((m) => ({ default: m.IQACDetailPage })));
const ActivitiesPage = lazy(() => import("./pages/SimpleContentPage").then((m) => ({ default: m.ActivitiesPage })));
const StakeholdersPage = lazy(() => import("./pages/SimpleContentPage").then((m) => ({ default: m.StakeholdersPage })));
const MHHFPage = lazy(() => import("./pages/SimpleContentPage").then((m) => ({ default: m.MHHFPage })));
const SectionContentPage = lazy(() => import("./pages/SectionContentPage").then((m) => ({ default: m.SectionContentPage })));
function PageLoader() {
    return _jsx("div", { className: "flex min-h-[40vh] items-center justify-center text-textSecondary", children: "Loading\u2026" });
}
function NotFound() {
    return (_jsxs("section", { className: "px-4 py-24 text-center", children: [_jsx("h1", { className: "font-heading text-2xl font-bold text-primary", children: "Page not found" }), _jsx("p", { className: "mt-2 text-textSecondary", children: "The page you requested does not exist." })] }));
}
export default function App() {
    return (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(MarketingLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/about/faculty", element: _jsx(AboutFacultyPage, {}) }), _jsx(Route, { path: "/about/:slug", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/academics", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/academics/bba", element: _jsx(BbaPage, {}) }), _jsx(Route, { path: "/academics/bca", element: _jsx(BcaPage, {}) }), _jsx(Route, { path: "/academics/:slug", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/commerce", element: _jsx(CommercePage, {}) }), _jsx(Route, { path: "/distance-education", element: _jsx(Simple, {}) }), _jsx(Route, { path: "/distance-education/:slug", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/iqac", element: _jsx(IQACPage, {}) }), _jsx(Route, { path: "/iqac/:slug", element: _jsx(IQACDetailPage, {}) }), _jsx(Route, { path: "/library", element: _jsx(LibraryPage, {}) }), _jsx(Route, { path: "/activities", element: _jsx(ActivitiesPage, {}) }), _jsx(Route, { path: "/activities/:slug", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/stakeholders", element: _jsx(StakeholdersPage, {}) }), _jsx(Route, { path: "/stakeholders/:slug", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/alumni", element: _jsx(AlumniPage, {}) }), _jsx(Route, { path: "/mhhf", element: _jsx(MHHFPage, {}) }), _jsx(Route, { path: "/mhhf/:slug", element: _jsx(SectionContentPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/admissions", element: _jsx(AdmissionsPage, {}) }), _jsx(Route, { path: "/announcements", element: _jsx(AnnouncementsPage, {}) }), _jsx(Route, { path: "/notices", element: _jsx(NoticesPage, {}) }), _jsx(Route, { path: "/gallery", element: _jsx(GalleryPage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogListPage, {}) }), _jsx(Route, { path: "/blog/:slug", element: _jsx(BlogPostPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Route, { path: "/admin/login", element: _jsx(AdminLoginPage, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminGate, { children: _jsx(AdminDashboardPage, {}) }) })] }) }));
}
