import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { api } from "../api/client";

type Row = { _id: string; title: string; category?: string; date?: string; pdfUrl?: string };

export function NoticesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => (await api.get<{ items: Row[] }>("/notices")).data,
  });

  return (
    <>
      <Helmet>
        <title>Notices — Mandke College</title>
      </Helmet>
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary">Official notices</h1>
        <p className="mt-2 text-textSecondary">Download PDF notices issued by the college.</p>
        {isLoading ? <p className="mt-6">Loading…</p> : null}
        <div className="mt-8 overflow-x-auto rounded-card border border-borderSoft bg-white shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-section text-textSecondary">
              <tr>
                <th className="px-4 py-3">Sr.</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">PDF</th>
              </tr>
            </thead>
            <tbody>
              {(data?.items || []).map((r, i) => (
                <tr key={r._id} className="border-t border-borderSoft">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-primary">{r.title}</td>
                  <td className="px-4 py-3">{r.category || "—"}</td>
                  <td className="px-4 py-3">{r.date ? new Date(r.date).toLocaleDateString() : "—"}</td>
                  <td className="px-4 py-3">
                    {r.pdfUrl ? (
                      <a href={r.pdfUrl} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">
                        Download
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
