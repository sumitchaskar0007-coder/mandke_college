import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Briefcase, CheckCircle, Presentation, Target } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Presentation,
    title: "Management Foundation",
    desc: "Business strategy, communication, marketing, HR, finance, and digital business practices.",
  },
  {
    icon: Target,
    title: "Leadership Skills",
    desc: "Case studies, presentations, projects, and teamwork that build confidence and decision-making.",
  },
  {
    icon: Award,
    title: "NEP 2020 Aligned",
    desc: "Flexible learning, interdisciplinary exposure, innovation, and skill-focused development.",
  },
  {
    icon: Briefcase,
    title: "Industry Exposure",
    desc: "Internships, industry visits, projects, and practical learning for corporate readiness.",
  },
];

const OUTCOMES = [
  "Understand core management concepts and business functions",
  "Apply marketing, finance, HR, and operations knowledge in practical contexts",
  "Develop leadership, communication, and presentation skills",
  "Analyze business problems and propose practical solutions",
  "Work on case studies, projects, industry visits, and internships",
  "Build entrepreneurial thinking and digital business readiness",
  "Use data-driven decision making in business scenarios",
  "Prepare for corporate careers, startups, and higher studies",
];

export function BbaPage() {
  return (
    <>
      <Helmet>
        <title>BBA Program - Mandke College | AICTE Approved | NEP 2020</title>
        <meta
          name="description"
          content="Bachelor of Business Administration at Mandke College, Pune. AICTE approved BBA program aligned with NEP 2020."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#14306f] to-dark py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-badge bg-accent/20 px-3 py-1 text-xs font-bold uppercase text-accent">
            AICTE Approved | NEP 2020
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Bachelor of Business Administration
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            A future-focused undergraduate degree for students who want to build careers in management, leadership, entrepreneurship, and digital business.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/admissions" className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg">
              Apply Now
            </Link>
            <a href="#curriculum" className="inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white/90 bg-white/5 px-8 py-3.5 text-base font-bold text-white">
              View Curriculum
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { label: "Duration", value: "3 Years" },
              { label: "Approval", value: "AICTE" },
              { label: "Framework", value: "NEP 2020" },
              { label: "Focus", value: "Leadership" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Program Overview</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">Management for the Real World</h2>
            <p className="mt-6 text-lg leading-relaxed text-textSecondary">
              The BBA program at Mandke College, Pune, is crafted as per NEP 2020 guidelines. Students gain exposure to marketing, finance, human resource management, international business, and data-driven decision making.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-textSecondary">
              Through case studies, projects, industry visits, and internships, students graduate with the right balance of academic knowledge, practical skills, and entrepreneurial mindset.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-textSecondary">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="curriculum" className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Course Structure</h2>
          <p className="mt-4 max-w-2xl text-lg text-textSecondary">
            The BBA program combines management fundamentals, applied business skills, projects, and internships across 6 semesters.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { year: "First Year", subjects: ["Principles of Management", "Business Communication", "Business Economics", "Accounting Basics"] },
              { year: "Second Year", subjects: ["Marketing Management", "Human Resource Management", "Financial Management", "Business Analytics"] },
              { year: "Third Year", subjects: ["Strategic Management", "Entrepreneurship", "International Business", "Project / Internship"] },
            ].map((group) => (
              <div key={group.year} className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card">
                <h3 className="font-heading text-lg font-bold text-accent">{group.year}</h3>
                <ul className="mt-4 space-y-2">
                  {group.subjects.map((subject) => (
                    <li key={subject} className="flex items-start gap-2 text-sm text-textSecondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Program Outcomes</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">What You'll Achieve</h2>
            <p className="mt-6 text-lg text-textSecondary">
              BBA graduates are prepared for management careers, entrepreneurship, startups, family business growth, and higher studies.
            </p>
          </div>
          <div className="space-y-3">
            {OUTCOMES.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-lg border border-borderSoft bg-white p-4 shadow-sm">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-textSecondary">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary via-dark to-accent py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Ready to Build Your Management Career?</h2>
          <p className="mt-6 text-lg text-white/90">Join Mandke College's BBA program and start building leadership, confidence, and business readiness.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg">
              Apply Now
            </Link>
            <Link to="/contact#enquiry" className="inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white px-8 py-3.5 text-base font-bold text-white">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
