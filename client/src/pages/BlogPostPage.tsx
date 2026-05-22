import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/client";

type Post = {
  title: string;
  slug: string;
  content?: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
  category?: string;
  coverImage?: string;
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", slug],
    enabled: !!slug,
    queryFn: async () => (await api.get<Post>(`/blogs/slug/${slug}`)).data,
  });

  if (isLoading) {
    return (
      <section className="px-4 py-16">
        <p>Loading…</p>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="px-4 py-16">
        <p>Article not found.</p>
        <Link to="/blog" className="mt-4 text-accent hover:underline">
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title} — Mandke College</title>
      </Helmet>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold uppercase text-accent">{data.category}</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-primary">{data.title}</h1>
        <p className="mt-2 text-sm text-textSecondary">
          {data.author}
          {data.publishedAt ? ` · ${new Date(data.publishedAt).toLocaleDateString()}` : ""}
        </p>
        {data.coverImage ? (
          <img src={data.coverImage} alt="" className="mt-8 w-full rounded-card object-cover shadow-card" />
        ) : null}
        <div className="mt-10 space-y-4 text-base leading-relaxed text-textSecondary [&_h1]:font-heading [&_h1]:text-2xl [&_h1]:text-primary [&_h2]:mt-6 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:text-primary [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6" 
          dangerouslySetInnerHTML={{ __html: data.content || "" }} 
        />
        {(data.tags || []).length ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {data.tags!.map((t) => (
              <span key={t} className="rounded-badge bg-section px-2 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <Link to="/blog" className="mt-10 inline-block font-semibold text-accent hover:underline">
          ← All articles
        </Link>
      </article>
    </>
  );
}
