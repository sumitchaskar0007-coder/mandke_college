import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Target, Award, Briefcase, CheckCircle } from "lucide-react";

const COURSE_HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    desc: "SPPU-designed commerce education with accounting, finance, and business management fundamentals.",
  },
  {
    icon: Target,
    title: "Skill Development",
    desc: "Practical workshops in taxation, auditing, financial analysis, and communication.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    desc: "Internships with leading firms and placement partnerships across financial and corporate sectors.",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    desc: "Career counselling and interview preparation to launch successful commerce careers.",
  },
];

const LEARNING_OUTCOMES = [
  "Apply accounting principles and practices in real-world business scenarios",
  "Analyze financial statements and make informed business decisions",
  "Understand taxation policies and compliance requirements",
  "Develop business plans and entrepreneurial ventures",
  "Use business software and digital tools effectively",
  "Communicate business ideas clearly to stakeholders",
  "Demonstrate ethical business practices and corporate governance",
  "Work effectively in teams and lead projects",
];

export function CommercePage() {
  return (
    <>
      <Helmet>
        <title>B.Com Program — Mandke College | SPPU Affiliated | Commerce Education</title>
        <meta
          name="description"
          content="B.Com program at Mandke College, Pune - SPPU affiliated, NAAC accredited. Building Competence & Mindset. Placement-focused commerce education."
        />
        <meta
          name="keywords"
          content="B.Com Pune, Commerce degree, SPPU, Mandke College, commerce admissions, accounting, finance, business"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#0f1f4d] to-dark py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-badge bg-accent/20 px-3 py-1 text-xs font-bold uppercase text-accent"
          >
            B.COM = Building Competence & Mindset
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Bachelor of Commerce
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            Your Goal | Our Mission — BETTER YOU. SPPU-affiliated commerce education designed for academic excellence and industry
            readiness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/admissions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg hover:brightness-105"
            >
              Apply Now
            </Link>
            <a
              href="#curriculum"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white/90 bg-white/5 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              View Curriculum
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {[
              { label: "Duration", value: "3 Years" },
              { label: "Affiliation", value: "SPPU, Pune" },
              { label: "Intake", value: "FY/SY/TY" },
              { label: "Approach", value: "Industry-Linked" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Program Overview</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">Commerce with a Difference</h2>
            <p className="mt-6 text-lg leading-relaxed text-textSecondary">
              Mandke College's B.Com program combines Savitribai Phule Pune University's robust curriculum with industry partnerships,
              skill development, and placement support. We believe in building not just commerce knowledge, but competence and mindset
              for lifelong success.
            </p>
            <ul className="mt-8 space-y-3">
              {["SPPU-aligned curriculum", "Placement-focused approach", "Expert faculty mentoring", "Industry internships"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="font-semibold text-primary">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {COURSE_HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-primary">{h.title}</h3>
                  <p className="mt-2 text-sm text-textSecondary">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Mandke Approach */}
      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Approach</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">Mandke College Approach</h2>
            <p className="mt-4 text-lg text-textSecondary">
              At Mandke College, B.COM stands for Building Competence &amp; Mindset. More than a traditional commerce degree, it is a
              student-focused journey designed to develop practical skills, confidence, industry readiness, and the mindset needed to
              succeed in the real world.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "💼",
                title: "Customised Pathways",
                desc: "We believe every student is unique. Career pathways are tailored based on individual abilities, strengths, and interests.",
              },
              {
                emoji: "🎯",
                title: "Industry Ready",
                desc: "Real-world projects, case studies, and internships ensure students develop practical skills valued by employers.",
              },
              {
                emoji: "🌟",
                title: "Better You Philosophy",
                desc: "Our mission is helping every student become the best version of themselves — confident, capable, and purpose-driven.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card md:p-8"
              >
                <p className="text-4xl">{item.emoji}</p>
                <h3 className="mt-4 font-heading text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-textSecondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Description & Structure */}
      <section id="curriculum" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Course Structure</h2>
        <p className="mt-4 max-w-2xl text-lg text-textSecondary">
          The B.Com program is structured across 6 semesters (3 years) with a balance of core commerce subjects, electives, and
          practical training aligned with SPPU curriculum standards.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              year: "First Year (FY)",
              subjects: ["Fundamentals of Accounting", "Micro Economics", "Business Organization", "Environmental Studies"],
            },
            {
              year: "Second Year (SY)",
              subjects: ["Advanced Accounting", "Corporate Law", "Macro Economics", "Business Communication"],
            },
            {
              year: "Third Year (TY)",
              subjects: ["Auditing & Taxation", "Financial Management", "Business Strategy", "Industry Project"],
            },
          ].map((year, i) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card md:p-8"
            >
              <h3 className="font-heading text-lg font-bold text-accent">{year.year}</h3>
              <ul className="mt-4 space-y-2">
                {year.subjects.map((subject) => (
                  <li key={subject} className="flex items-start gap-2 text-sm text-textSecondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {subject}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-borderSoft bg-gradient-to-br from-primary/5 to-accent/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Note</p>
          <p className="mt-3 text-textSecondary">
            The detailed curriculum, syllabus, and elective options are based on Savitribai Phule Pune University guidelines. Students
            can access the full SPPU curriculum document from the academic office or college website. Subjects and structure may be
            updated annually in alignment with SPPU directives.
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Program Outcomes</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">What You'll Achieve</h2>
              <p className="mt-6 text-lg text-textSecondary">
                Upon completion of the B.Com program, graduates will have developed practical skills, theoretical knowledge, and
                professional competencies required for successful careers in commerce and finance.
              </p>
            </div>
            <div className="space-y-3">
              {LEARNING_OUTCOMES.map((outcome, i) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-start gap-3 rounded-lg border border-borderSoft bg-white p-4"
                >
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-textSecondary">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar & Timetable */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Academic Information</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-borderSoft bg-white p-8 shadow-card">
            <h3 className="font-heading text-xl font-bold text-primary">Academic Calendar</h3>
            <p className="mt-4 text-textSecondary">
              The academic year runs from June to May, with two semesters aligned with SPPU guidelines. Detailed academic calendar
              including semester dates, examination schedules, and holidays is available in the college prospectus and on the portal.
            </p>
            <Link to="/contact" className="mt-6 inline-block font-semibold text-accent hover:underline">
              Download Academic Calendar →
            </Link>
          </div>
          <div className="rounded-2xl border border-borderSoft bg-white p-8 shadow-card">
            <h3 className="font-heading text-xl font-bold text-primary">Time Table</h3>
            <p className="mt-4 text-textSecondary">
              Class schedules are designed to balance theoretical learning with practical sessions and self-study time. Time tables
              for each semester are announced at the start of the academic year. Check the college portal or student dashboard for
              current schedules.
            </p>
            <Link to="/contact" className="mt-6 inline-block font-semibold text-accent hover:underline">
              View Current Time Table →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary via-dark to-accent py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Ready to Build Your Commerce Career?</h2>
          <p className="mt-6 text-lg text-white/90">
            Join Mandke College's B.Com program and become part of 5000+ successful commerce professionals. Admissions open for
            2026-27.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/contact#enquiry"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white px-8 py-3.5 text-base font-bold text-white"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
