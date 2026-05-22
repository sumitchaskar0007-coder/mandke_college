import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./components/layout/MarketingLayout";
import { AdminGate } from "./pages/admin/AdminGate";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const CommercePage = lazy(() => import("./pages/CommercePage").then((m) => ({ default: m.CommercePage })));
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
  return <div className="flex min-h-[40vh] items-center justify-center text-textSecondary">Loading…</div>;
}

function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="font-heading text-2xl font-bold text-primary">Page not found</h1>
      <p className="mt-2 text-textSecondary">The page you requested does not exist.</p>
    </section>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/faculty" element={<AboutFacultyPage />} />
          <Route path="/about/:slug" element={<SectionContentPage />} />
          <Route path="/academics" element={<SectionContentPage />} />
          <Route path="/academics/:slug" element={<SectionContentPage />} />
          <Route path="/commerce" element={<CommercePage />} />
          <Route path="/distance-education" element={<Simple />} />
          <Route path="/distance-education/:slug" element={<SectionContentPage />} />
          <Route path="/iqac" element={<IQACPage />} />
          <Route path="/iqac/:slug" element={<IQACDetailPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:slug" element={<SectionContentPage />} />
          <Route path="/stakeholders" element={<StakeholdersPage />} />
          <Route path="/stakeholders/:slug" element={<SectionContentPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/mhhf" element={<MHHFPage />} />
          <Route path="/mhhf/:slug" element={<SectionContentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminGate>
              <AdminDashboardPage />
            </AdminGate>
          }
        />
      </Routes>
    </Suspense>
  );
}
