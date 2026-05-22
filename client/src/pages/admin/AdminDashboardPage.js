import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/client";
const DEFAULT_GALLERY_CATEGORIES = [
    { label: "Campus activities", value: "campus-activities" },
    { label: "Student achievements", value: "student-achievements" },
    { label: "Workshops", value: "workshops" },
    { label: "Celebrations", value: "celebrations" },
];
export function AdminDashboardPage() {
    const { admin, logout } = useAuth();
    const queryClient = useQueryClient();
    const fileInputRef = useRef(null);
    const [galleryForm, setGalleryForm] = useState({
        title: "",
        eventName: "",
        category: DEFAULT_GALLERY_CATEGORIES[0].value,
        date: "",
        files: [],
    });
    const enquiriesQ = useQuery({
        queryKey: ["admin", "enquiries"],
        queryFn: async () => (await api.get("/enquiry?limit=200")).data,
    });
    const admissionsQ = useQuery({
        queryKey: ["admin", "admissions"],
        queryFn: async () => (await api.get("/admissions?limit=200")).data,
    });
    const blogsQ = useQuery({
        queryKey: ["admin", "blogs-count"],
        queryFn: async () => (await api.get("/blogs?limit=1")).data,
    });
    const annQ = useQuery({
        queryKey: ["admin", "announcements-count"],
        queryFn: async () => (await api.get("/announcements?limit=1")).data,
    });
    const galleryCategoriesQ = useQuery({
        queryKey: ["gallery", "categories"],
        queryFn: async () => (await api.get("/gallery/categories")).data,
    });
    const galleryQ = useQuery({
        queryKey: ["admin", "gallery"],
        queryFn: async () => (await api.get("/gallery?limit=24")).data,
    });
    const categories = galleryCategoriesQ.data?.length ? galleryCategoriesQ.data : DEFAULT_GALLERY_CATEGORIES;
    const uploadGallery = useMutation({
        mutationFn: async () => {
            if (!galleryForm.files.length)
                throw new Error("Select at least one image.");
            const form = new FormData();
            galleryForm.files.forEach((file) => form.append("images", file));
            form.append("title", galleryForm.title);
            form.append("eventName", galleryForm.eventName);
            form.append("category", galleryForm.category);
            if (galleryForm.date)
                form.append("date", galleryForm.date);
            await api.post("/gallery", form, { headers: { "Content-Type": "multipart/form-data" } });
        },
        onSuccess: async () => {
            setGalleryForm({ title: "", eventName: "", category: categories[0]?.value || "campus-activities", date: "", files: [] });
            if (fileInputRef.current)
                fileInputRef.current.value = "";
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["admin", "gallery"] }),
                queryClient.invalidateQueries({ queryKey: ["gallery"] }),
            ]);
        },
    });
    const deleteGallery = useMutation({
        mutationFn: async (id) => {
            await api.delete(`/gallery/${id}`);
        },
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["admin", "gallery"] }),
                queryClient.invalidateQueries({ queryKey: ["gallery"] }),
            ]);
        },
    });
    const handleFiles = (event) => {
        setGalleryForm((current) => ({ ...current, files: Array.from(event.target.files || []) }));
    };
    const handleUpload = (event) => {
        event.preventDefault();
        uploadGallery.mutate();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Admin - Mandke College" }) }), _jsxs("div", { className: "min-h-screen bg-section", children: [_jsx("header", { className: "border-b border-borderSoft bg-white px-4 py-4", children: _jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs uppercase text-textSecondary", children: "Signed in" }), _jsx("p", { className: "font-semibold text-primary", children: admin?.name || admin?.email })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Link, { to: "/", className: "text-sm font-medium text-accent hover:underline", children: "View site" }), _jsx("button", { type: "button", className: "text-sm font-medium text-textSecondary hover:text-primary", onClick: () => void logout(), children: "Log out" })] })] }) }), _jsxs("main", { className: "mx-auto max-w-6xl px-4 py-10", children: [_jsx("h1", { className: "font-heading text-3xl font-bold text-primary", children: "Dashboard" }), _jsx("p", { className: "mt-2 text-textSecondary", children: "Overview of enquiries, applications, and content activity." }), _jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: [_jsxs("div", { className: "rounded-card border border-borderSoft bg-white p-5 shadow-card", children: [_jsx("p", { className: "text-sm text-textSecondary", children: "Enquiries" }), _jsx("p", { className: "mt-2 font-heading text-3xl font-bold text-primary", children: enquiriesQ.data?.length ?? "-" })] }), _jsxs("div", { className: "rounded-card border border-borderSoft bg-white p-5 shadow-card", children: [_jsx("p", { className: "text-sm text-textSecondary", children: "Applications" }), _jsx("p", { className: "mt-2 font-heading text-3xl font-bold text-primary", children: admissionsQ.data?.length ?? "-" })] }), _jsxs("div", { className: "rounded-card border border-borderSoft bg-white p-5 shadow-card", children: [_jsx("p", { className: "text-sm text-textSecondary", children: "Blog posts" }), _jsx("p", { className: "mt-2 font-heading text-3xl font-bold text-primary", children: blogsQ.data?.total ?? "-" })] }), _jsxs("div", { className: "rounded-card border border-borderSoft bg-white p-5 shadow-card", children: [_jsx("p", { className: "text-sm text-textSecondary", children: "Announcements" }), _jsx("p", { className: "mt-2 font-heading text-3xl font-bold text-primary", children: annQ.data?.total ?? "-" })] }), _jsxs("div", { className: "rounded-card border border-borderSoft bg-white p-5 shadow-card", children: [_jsx("p", { className: "text-sm text-textSecondary", children: "Gallery images" }), _jsx("p", { className: "mt-2 font-heading text-3xl font-bold text-primary", children: galleryQ.data?.length ?? "-" })] })] }), _jsxs("section", { className: "mt-12 rounded-card border border-borderSoft bg-white p-6 shadow-card", children: [_jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Life at Mandke" }), _jsx("h2", { className: "mt-1 font-heading text-2xl font-semibold text-primary", children: "Gallery and reels" }), _jsx("p", { className: "mt-2 max-w-2xl text-sm text-textSecondary", children: "Add campus moments for Campus activities, Student achievements, Workshops, and Celebrations." })] }), _jsx(Link, { to: "/gallery", className: "rounded-btn border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-section", children: "View gallery" })] }), _jsxs("form", { className: "mt-6 grid gap-4 md:grid-cols-2", onSubmit: handleUpload, children: [_jsxs("label", { className: "block text-sm font-semibold text-primary", children: ["Category", _jsx("select", { className: "mt-2 w-full rounded-btn border border-borderSoft bg-white px-3 py-2 text-sm text-textPrimary", value: galleryForm.category, onChange: (event) => setGalleryForm((current) => ({ ...current, category: event.target.value })), children: categories.map((category) => (_jsx("option", { value: category.value, children: category.label }, category.value))) })] }), _jsxs("label", { className: "block text-sm font-semibold text-primary", children: ["Date", _jsx("input", { type: "date", className: "mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary", value: galleryForm.date, onChange: (event) => setGalleryForm((current) => ({ ...current, date: event.target.value })) })] }), _jsxs("label", { className: "block text-sm font-semibold text-primary", children: ["Title", _jsx("input", { className: "mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary", value: galleryForm.title, onChange: (event) => setGalleryForm((current) => ({ ...current, title: event.target.value })), placeholder: "Annual day moments" })] }), _jsxs("label", { className: "block text-sm font-semibold text-primary", children: ["Event name", _jsx("input", { className: "mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary", value: galleryForm.eventName, onChange: (event) => setGalleryForm((current) => ({ ...current, eventName: event.target.value })), placeholder: "Commerce workshop" })] }), _jsxs("label", { className: "block text-sm font-semibold text-primary md:col-span-2", children: ["Images", _jsx("input", { ref: fileInputRef, type: "file", accept: "image/png,image/jpeg,image/jpg,image/webp", multiple: true, className: "mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary", onChange: handleFiles })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 md:col-span-2", children: [_jsx("button", { type: "submit", disabled: uploadGallery.isPending, className: "rounded-btn bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-60", children: uploadGallery.isPending ? "Uploading..." : "Upload to gallery" }), galleryForm.files.length ? (_jsxs("span", { className: "text-sm text-textSecondary", children: [galleryForm.files.length, " image(s) selected"] })) : null, uploadGallery.isError ? (_jsx("span", { className: "text-sm font-semibold text-red-600", children: uploadGallery.error.message || "Upload failed" })) : null, uploadGallery.isSuccess ? _jsx("span", { className: "text-sm font-semibold text-green-700", children: "Gallery updated." }) : null] })] }), _jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: (galleryQ.data || []).slice(0, 8).map((item) => (_jsxs("article", { className: "overflow-hidden rounded-btn border border-borderSoft bg-section", children: [_jsx("img", { src: item.thumbnailUrl || item.imageUrl || "", alt: item.title || item.eventName || "Gallery image", className: "h-36 w-full object-cover", loading: "lazy" }), _jsxs("div", { className: "p-3", children: [_jsx("p", { className: "line-clamp-1 font-heading text-sm font-bold text-primary", children: item.title || item.eventName || "Campus moment" }), _jsx("p", { className: "mt-1 text-xs text-textSecondary", children: categories.find((category) => category.value === item.category)?.label || item.category || "Gallery" }), _jsx("button", { type: "button", disabled: deleteGallery.isPending, onClick: () => deleteGallery.mutate(item._id), className: "mt-3 text-xs font-bold text-red-600 hover:underline disabled:opacity-60", children: "Delete" })] })] }, item._id))) })] })] })] })] }));
}
