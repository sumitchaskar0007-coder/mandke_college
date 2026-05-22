import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { api } from "../api/client";

type G = { _id: string; thumbnailUrl?: string; imageUrl?: string; title?: string; eventName?: string; category?: string };
type GalleryCategory = { label: string; value: string };

export function GalleryPage() {
  const [category, setCategory] = useState("all");

  const categoriesQ = useQuery({
    queryKey: ["gallery", "categories"],
    queryFn: async () => (await api.get<GalleryCategory[]>("/gallery/categories")).data,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["gallery", "all", category],
    queryFn: async () => {
      const query = category === "all" ? "?limit=60" : `?limit=60&category=${encodeURIComponent(category)}`;
      return (await api.get<G[]>(`/gallery${query}`)).data;
    },
  });
  const categories = categoriesQ.data || [];

  return (
    <>
      <Helmet>
        <title>Gallery - Mandke College</title>
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary">Gallery</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {[{ label: "All", value: "all" }, ...categories].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setCategory(item.value)}
              className={`rounded-btn border px-4 py-2 text-sm font-bold transition ${
                category === item.value
                  ? "border-accent bg-accent text-white"
                  : "border-borderSoft bg-white text-primary hover:border-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {isLoading ? <p className="mt-6">Loading...</p> : null}
        <div className="mt-10 columns-2 gap-3 sm:columns-3 md:columns-4">
          {(data || []).map((g) => (
            <figure key={g._id} className="group relative mb-3 break-inside-avoid overflow-hidden rounded-card shadow-card">
              <img
                src={g.thumbnailUrl || g.imageUrl || ""}
                alt={g.title || g.eventName || "Campus"}
                className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm text-white opacity-0 transition group-hover:opacity-100">
                {g.eventName || g.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
