import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../api/client";

type BlogItem = { _id: string; title: string; slug: string; excerpt?: string; category?: string; publishedAt?: string; coverImage?: string };

export function BlogListPage() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["blogs", category, search],
    queryFn: async () => {
      const params = new URLSearchParams({ limit: "12" });
      if (category) params.set("category", category);
      if (search.trim()) params.set("search", search.trim());
      return (await api.get<{ items: BlogItem[] }>(`/blogs?${params}`)).data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Blog — Mandke College</title>
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary">Articles &amp; career tips</h1>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end">
          <label className="text-sm">
            Search
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-1 block w-full rounded-btn border border-borderSoft px-3 py-2 md:w-64"
              placeholder="Search titles or tags"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {["", "career", "news", "events", "tips"].map((c) => (
              <button
                key={c || "all"}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1.5 text-sm capitalize ${
                  category === c ? "bg-primary text-white" : "bg-section text-textSecondary"
                }`}
              >
                {c || "All"}
              </button>
            ))}
          </div>
        </div>
        {isLoading ? <p className="mt-8">Loading…</p> : null}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(data?.items || []).map((b) => (
            <article key={b._id} className="rounded-card border border-borderSoft bg-white shadow-card">
              {b.coverImage ? (
                <img src={b.coverImage} alt="" className="h-48 w-full rounded-t-card object-cover" />
              ) : (
                <div className="h-48 rounded-t-card bg-section" />
              )}
              <div className="p-4">
                <span className="text-xs font-bold uppercase text-accent">{b.category}</span>
                <h2 className="mt-2 font-heading text-lg font-semibold text-primary">
                  <Link to={`/blog/${b.slug}`} className="hover:text-accent">
                    {b.title}
                  </Link>
                </h2>
                {b.excerpt ? <p className="mt-2 line-clamp-3 text-sm text-textSecondary">{b.excerpt}</p> : null}
                {b.publishedAt ? (
                  <p className="mt-3 text-xs text-textSecondary">{new Date(b.publishedAt).toLocaleDateString()}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
