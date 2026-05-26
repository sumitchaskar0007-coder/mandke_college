import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import buildingImage from "../assets/images/building.png";
import heroImage from "../assets/images/hero.png";

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
  const stakeholders = [
    {
      title: "Students",
      image: heroImage,
      imageLabel: "classroom2.jpg",
      paragraphs: [
        "Our Students are our pride and joy. We strive very hard each day to make them into self assured, confident and achievement oriented global citizens, who will collectively strive to make the society better.",
        "Our teachers through various methods allow students to continuously learn and unlearn so that they get a world view which will help them realise their true and full potential.",
        "The college encourages students to participate in academics, co-curricular activities, skill-building sessions, leadership opportunities, and campus initiatives that help them grow with confidence and responsibility.",
      ],
    },
    {
      title: "Parents",
      image: buildingImage,
      imageLabel: "parents.jpg",
      paragraphs: [
        "Parents are an important part of the whole academic process. They are unconditionally invested in the well-being and career growth of their ward.",
        "Regular constructive interaction with the parents helps us to understand their aspirations for their ward, in turn helping us improve our processes for the benefit of the students.",
        "Through open communication, counselling support, and timely academic updates, we work with parents as partners in shaping a positive and purposeful learning journey.",
      ],
    },
    {
      title: "Teachers & Staff",
      image: buildingImage,
      imageLabel: "Faculty.jpg",
      paragraphs: [
        "Teachers & Staff are the backbone of our College. We have been fortunate to have highly experienced, dedicated, sincere and enthusiastic teachers in our team.",
        "Their sole aim is to mould students to be the best versions of themselves. For this the College aims to provide them with best working conditions and facilities.",
        "Our faculty and staff support students through classroom teaching, mentoring, administrative guidance, examination support, activities, and a caring campus environment.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Stakeholders - Mandke College</title>
      </Helmet>
      <section className="bg-gradient-to-br from-primary via-[#0b2556] to-accent py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Our Stakeholders</p>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-5xl">Students, Parents, Teachers & Staff</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            A strong institution grows through meaningful participation from students, parents, teachers, and staff.
            Together, they shape a learning culture built on confidence, care, discipline, and progress.
          </p>
        </div>
      </section>

      <section className="bg-section py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8">
            {stakeholders.map((stakeholder, index) => (
              <article
                key={stakeholder.title}
                className="grid gap-6 rounded-btn border border-borderSoft bg-white p-5 shadow-card md:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <figure className={`${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden rounded-btn border border-borderSoft bg-section`}>
                  <img
                    src={stakeholder.image}
                    alt={stakeholder.title}
                    className="h-64 w-full object-cover md:h-80"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="px-4 py-3 text-sm font-semibold text-textSecondary">{stakeholder.imageLabel}</figcaption>
                </figure>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Stakeholder</p>
                  <h2 className="mt-2 font-heading text-3xl font-bold text-primary">{stakeholder.title}</h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-textSecondary md:text-lg">
                    {stakeholder.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
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
