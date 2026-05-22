import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation } from "react-router-dom";
import { SECTION_PAGES } from "../data/navigation";

export function SectionContentPage() {
  const { pathname } = useLocation();
  const page = SECTION_PAGES.find((entry) => entry.to === pathname);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{page.label} - Mandke College</title>
      </Helmet>

      <section className="bg-section py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">{page.group}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">{page.label}</h1>
          <p className="mt-4 text-textSecondary">{page.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card">
          <h2 className="font-heading text-2xl font-bold text-primary">{page.label}</h2>
          <div className="mt-4 space-y-4 text-textSecondary">
            {page.content?.length ? (
              page.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>Content, notices, PDFs, forms, and detailed information for this section can be published here.</p>
            )}
          </div>
          {page.highlights?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {page.highlights.map((highlight) => (
                <span key={highlight} className="rounded-btn bg-section px-3 py-1.5 text-sm font-semibold text-primary">
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white"
            >
              Contact Office
            </Link>
            <Link
              to="/admissions"
              className="inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary"
            >
              Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
