import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Linkedin } from "lucide-react";
import { api } from "../api/client";

type F = {
  _id: string;
  name: string;
  designation?: string;
  qualification?: string;
  department?: string;
  photo?: string;
  bio?: string;
  linkedIn?: string;
};

export function AboutFacultyPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["faculty"],
    queryFn: async () => (await api.get<F[]>("/faculty")).data,
  });

  return (
    <>
      <Helmet>
        <title>Faculty — Mandke College</title>
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary">Faculty</h1>
        <p className="mt-2 text-textSecondary">Committed educators guiding your B.Com journey.</p>
        {isLoading ? <p className="mt-8">Loading…</p> : null}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(data || []).map((f) => (
            <article
              key={f._id}
              className="group relative overflow-hidden rounded-card border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-section">
                  {f.photo ? <img src={f.photo} alt="" className="h-full w-full object-cover" /> : null}
                </div>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-primary">{f.name}</h2>
                  <p className="text-sm text-accent">{f.designation}</p>
                  <p className="text-sm text-textSecondary">{f.qualification}</p>
                  <p className="text-xs text-textSecondary">{f.department}</p>
                </div>
              </div>
              {f.bio ? (
                <p className="mt-4 text-sm text-textSecondary opacity-0 transition group-hover:opacity-100 md:opacity-100">
                  {f.bio}
                </p>
              ) : null}
              {f.linkedIn ? (
                <a
                  href={f.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
