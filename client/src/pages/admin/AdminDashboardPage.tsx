import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type ChangeEvent, type FormEvent, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/client";

type GalleryCategory = { label: string; value: string };
type GalleryItem = {
  _id: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  title?: string;
  eventName?: string;
  category?: string;
  date?: string;
};

const DEFAULT_GALLERY_CATEGORIES: GalleryCategory[] = [
  { label: "Campus activities", value: "campus-activities" },
  { label: "Student achievements", value: "student-achievements" },
  { label: "Workshops", value: "workshops" },
  { label: "Celebrations", value: "celebrations" },
];

export function AdminDashboardPage() {
  const { admin, logout } = useAuth();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    eventName: "",
    category: DEFAULT_GALLERY_CATEGORIES[0].value,
    date: "",
    files: [] as File[],
  });

  const enquiriesQ = useQuery({
    queryKey: ["admin", "enquiries"],
    queryFn: async () => (await api.get<unknown[]>("/enquiry?limit=200")).data,
  });

  const admissionsQ = useQuery({
    queryKey: ["admin", "admissions"],
    queryFn: async () => (await api.get<unknown[]>("/admissions?limit=200")).data,
  });

  const blogsQ = useQuery({
    queryKey: ["admin", "blogs-count"],
    queryFn: async () => (await api.get<{ total: number }>("/blogs?limit=1")).data,
  });

  const annQ = useQuery({
    queryKey: ["admin", "announcements-count"],
    queryFn: async () => (await api.get<{ total: number }>("/announcements?limit=1")).data,
  });

  const galleryCategoriesQ = useQuery({
    queryKey: ["gallery", "categories"],
    queryFn: async () => (await api.get<GalleryCategory[]>("/gallery/categories")).data,
  });

  const galleryQ = useQuery({
    queryKey: ["admin", "gallery"],
    queryFn: async () => (await api.get<GalleryItem[]>("/gallery?limit=24")).data,
  });

  const categories = galleryCategoriesQ.data?.length ? galleryCategoriesQ.data : DEFAULT_GALLERY_CATEGORIES;

  const uploadGallery = useMutation({
    mutationFn: async () => {
      if (!galleryForm.files.length) throw new Error("Select at least one image.");
      const form = new FormData();
      galleryForm.files.forEach((file) => form.append("images", file));
      form.append("title", galleryForm.title);
      form.append("eventName", galleryForm.eventName);
      form.append("category", galleryForm.category);
      if (galleryForm.date) form.append("date", galleryForm.date);
      await api.post("/gallery", form, { headers: { "Content-Type": "multipart/form-data" } });
    },
    onSuccess: async () => {
      setGalleryForm({ title: "", eventName: "", category: categories[0]?.value || "campus-activities", date: "", files: [] });
      if (fileInputRef.current) fileInputRef.current.value = "";
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["admin", "gallery"] }),
        queryClient.invalidateQueries({ queryKey: ["gallery"] }),
      ]);
    },
  });

  const deleteGallery = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/gallery/${id}`);
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["admin", "gallery"] }),
        queryClient.invalidateQueries({ queryKey: ["gallery"] }),
      ]);
    },
  });

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    setGalleryForm((current) => ({ ...current, files: Array.from(event.target.files || []) }));
  };

  const handleUpload = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    uploadGallery.mutate();
  };

  return (
    <>
      <Helmet>
        <title>Admin - Mandke College</title>
      </Helmet>
      <div className="min-h-screen bg-section">
        <header className="border-b border-borderSoft bg-white px-4 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div>
              <p className="text-xs uppercase text-textSecondary">Signed in</p>
              <p className="font-semibold text-primary">{admin?.name || admin?.email}</p>
            </div>
            <div className="flex gap-3">
              <Link to="/" className="text-sm font-medium text-accent hover:underline">
                View site
              </Link>
              <button type="button" className="text-sm font-medium text-textSecondary hover:text-primary" onClick={() => void logout()}>
                Log out
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="font-heading text-3xl font-bold text-primary">Dashboard</h1>
          <p className="mt-2 text-textSecondary">Overview of enquiries, applications, and content activity.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-card border border-borderSoft bg-white p-5 shadow-card">
              <p className="text-sm text-textSecondary">Enquiries</p>
              <p className="mt-2 font-heading text-3xl font-bold text-primary">{enquiriesQ.data?.length ?? "-"}</p>
            </div>
            <div className="rounded-card border border-borderSoft bg-white p-5 shadow-card">
              <p className="text-sm text-textSecondary">Applications</p>
              <p className="mt-2 font-heading text-3xl font-bold text-primary">{admissionsQ.data?.length ?? "-"}</p>
            </div>
            <div className="rounded-card border border-borderSoft bg-white p-5 shadow-card">
              <p className="text-sm text-textSecondary">Blog posts</p>
              <p className="mt-2 font-heading text-3xl font-bold text-primary">{blogsQ.data?.total ?? "-"}</p>
            </div>
            <div className="rounded-card border border-borderSoft bg-white p-5 shadow-card">
              <p className="text-sm text-textSecondary">Announcements</p>
              <p className="mt-2 font-heading text-3xl font-bold text-primary">{annQ.data?.total ?? "-"}</p>
            </div>
            <div className="rounded-card border border-borderSoft bg-white p-5 shadow-card">
              <p className="text-sm text-textSecondary">Gallery images</p>
              <p className="mt-2 font-heading text-3xl font-bold text-primary">{galleryQ.data?.length ?? "-"}</p>
            </div>
          </div>

          <section className="mt-12 rounded-card border border-borderSoft bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent">Life at Mandke</p>
                <h2 className="mt-1 font-heading text-2xl font-semibold text-primary">Gallery and reels</h2>
                <p className="mt-2 max-w-2xl text-sm text-textSecondary">
                  Add campus moments for Campus activities, Student achievements, Workshops, and Celebrations.
                </p>
              </div>
              <Link to="/gallery" className="rounded-btn border border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-section">
                View gallery
              </Link>
            </div>

            <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleUpload}>
              <label className="block text-sm font-semibold text-primary">
                Category
                <select
                  className="mt-2 w-full rounded-btn border border-borderSoft bg-white px-3 py-2 text-sm text-textPrimary"
                  value={galleryForm.category}
                  onChange={(event) => setGalleryForm((current) => ({ ...current, category: event.target.value }))}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-primary">
                Date
                <input
                  type="date"
                  className="mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary"
                  value={galleryForm.date}
                  onChange={(event) => setGalleryForm((current) => ({ ...current, date: event.target.value }))}
                />
              </label>
              <label className="block text-sm font-semibold text-primary">
                Title
                <input
                  className="mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary"
                  value={galleryForm.title}
                  onChange={(event) => setGalleryForm((current) => ({ ...current, title: event.target.value }))}
                  placeholder="Annual day moments"
                />
              </label>
              <label className="block text-sm font-semibold text-primary">
                Event name
                <input
                  className="mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary"
                  value={galleryForm.eventName}
                  onChange={(event) => setGalleryForm((current) => ({ ...current, eventName: event.target.value }))}
                  placeholder="Commerce workshop"
                />
              </label>
              <label className="block text-sm font-semibold text-primary md:col-span-2">
                Images
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  multiple
                  className="mt-2 w-full rounded-btn border border-borderSoft px-3 py-2 text-sm text-textPrimary"
                  onChange={handleFiles}
                />
              </label>
              <div className="flex flex-wrap items-center gap-3 md:col-span-2">
                <button
                  type="submit"
                  disabled={uploadGallery.isPending}
                  className="rounded-btn bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {uploadGallery.isPending ? "Uploading..." : "Upload to gallery"}
                </button>
                {galleryForm.files.length ? (
                  <span className="text-sm text-textSecondary">{galleryForm.files.length} image(s) selected</span>
                ) : null}
                {uploadGallery.isError ? (
                  <span className="text-sm font-semibold text-red-600">
                    {(uploadGallery.error as Error).message || "Upload failed"}
                  </span>
                ) : null}
                {uploadGallery.isSuccess ? <span className="text-sm font-semibold text-green-700">Gallery updated.</span> : null}
              </div>
            </form>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(galleryQ.data || []).slice(0, 8).map((item) => (
                <article key={item._id} className="overflow-hidden rounded-btn border border-borderSoft bg-section">
                  <img
                    src={item.thumbnailUrl || item.imageUrl || ""}
                    alt={item.title || item.eventName || "Gallery image"}
                    className="h-36 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="line-clamp-1 font-heading text-sm font-bold text-primary">
                      {item.title || item.eventName || "Campus moment"}
                    </p>
                    <p className="mt-1 text-xs text-textSecondary">
                      {categories.find((category) => category.value === item.category)?.label || item.category || "Gallery"}
                    </p>
                    <button
                      type="button"
                      disabled={deleteGallery.isPending}
                      onClick={() => deleteGallery.mutate(item._id)}
                      className="mt-3 text-xs font-bold text-red-600 hover:underline disabled:opacity-60"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
