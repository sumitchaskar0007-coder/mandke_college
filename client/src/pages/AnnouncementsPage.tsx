import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { api } from "../api/client";

type Ann = { _id: string; title: string; body?: string; type?: string; link?: string; isPinned?: boolean; createdAt?: string };

const TABS = [
  ["", "All"],
  ["notice", "Notices"],
  ["event", "Events"],
  ["result", "Results"],
  ["admission", "Admissions"],
] as const;

export function AnnouncementsPage() {
  const [tab, setTab] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["announcements", "page", tab],
    queryFn: async () => {
      const q = tab ? `?type=${tab}&limit=20` : "?limit=20";
      return (await api.get<{ items: Ann[] }>(`/announcements${q}`)).data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Announcements — Mandke College</title>
      </Helmet>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary">Announcements</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {TABS.map(([value, label]) => (
            <button
              key={value || "all"}
              type="button"
              onClick={() => setTab(value)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                tab === value ? "bg-primary text-white" : "bg-section text-textSecondary hover:bg-borderSoft"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {isLoading ? <p className="mt-8 text-textSecondary">Loading…</p> : null}
        <ul className="mt-8 space-y-4">
          {(data?.items || []).map((a) => (
            <li key={a._id} className="rounded-card border border-borderSoft bg-white p-5 shadow-card">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {a.isPinned ? <span aria-hidden>📌</span> : null}
                <span className="rounded-badge bg-section px-2 py-0.5 text-xs font-semibold capitalize text-primary">
                  {a.type}
                </span>
                {a.createdAt ? (
                  <span className="text-textSecondary">{new Date(a.createdAt).toLocaleDateString()}</span>
                ) : null}
              </div>
              <h2 className="mt-2 font-heading text-xl font-semibold text-primary">{a.title}</h2>
              {a.body ? <p className="mt-2 text-textSecondary">{a.body}</p> : null}
              {a.link ? (
                <a href={a.link} className="mt-2 inline-block text-sm font-semibold text-accent hover:underline" target="_blank" rel="noreferrer">
                  Open link →
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
