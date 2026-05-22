import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function SimpleContentPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <Helmet>
        <title>{title} — Mandke College</title>
      </Helmet>
      <section className="bg-section py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-heading text-4xl font-bold text-primary">{title}</h1>
          {subtitle ? <p className="mt-4 text-textSecondary">{subtitle}</p> : null}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-12 text-textSecondary">{children}</section>
    </>
  );
}

export function DistanceEducationPage() {
  return (
    <SimpleContentPage title="Distance Education" subtitle="Flexible learning pathways with Mandke College support.">
      <p>
        Detailed procedures, links, and FAQs can be managed from the admin CMS. For admissions counselling, visit the{" "}
        <Link to="/admissions" className="font-semibold text-accent hover:underline">
          Admissions
        </Link>{" "}
        section.
      </p>
    </SimpleContentPage>
  );
}

export function IQACPage() {
  return (
    <SimpleContentPage title="IQAC" subtitle="Internal Quality Assurance Cell — initiatives and reports.">
      <p>IQAC documents, AQAR links, and best practices will appear here as they are published through the CMS.</p>
    </SimpleContentPage>
  );
}

export function LibraryPage() {
  return (
    <SimpleContentPage title="Library" subtitle="Digital and physical learning resources for commerce students.">
      <p>Timings, OPAC links, e-resources, and new arrivals will be updated by administrators.</p>
    </SimpleContentPage>
  );
}

export function ActivitiesPage() {
  return (
    <SimpleContentPage title="Activities" subtitle="Sports, culture, clubs, and student life.">
      <p>Photos, reports, and upcoming activities will be published from the gallery and CMS.</p>
    </SimpleContentPage>
  );
}

export function StakeholdersPage() {
  return (
    <SimpleContentPage title="Stakeholders" subtitle="Students, parents, industry, and community engagement.">
      <p>Forms, feedback channels, and stakeholder-specific communications can be linked here via CMS.</p>
    </SimpleContentPage>
  );
}

export function AlumniPage() {
  return (
    <SimpleContentPage title="Alumni" subtitle="Stay connected with Mandke College.">
      <p>Alumni stories and registration will be wired to dedicated forms and workflows in a future iteration.</p>
    </SimpleContentPage>
  );
}

export function MHHFPage() {
  return (
    <SimpleContentPage title="Mandke Human Happiness Foundation" subtitle="Social initiatives that strengthen communities.">
      <p>Foundation programmes and impact stories will be showcased in this section.</p>
    </SimpleContentPage>
  );
}
