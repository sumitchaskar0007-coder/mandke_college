import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Handshake, Target, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = { placementPercent?: number; students?: number };

const PILLARS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Placement cell",
    body: "CV reviews, aptitude prep, and recruiter connects from semester one.",
    icon: Handshake,
  },
  {
    title: "Industry immersion",
    body: "Workshops, guest lectures, and live projects aligned with commerce careers.",
    icon: Building2,
  },
  {
    title: "Outcome mindset",
    body: "We track skills, confidence, and readiness - not just attendance.",
    icon: Target,
  },
];

export function PlacementsSection({ placementPercent = 95, students = 5000 }: Props) {
  const pct = Math.min(100, Math.max(0, placementPercent));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-[#121a3a] to-primary py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,124,0,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Placements &amp; careers</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Built for recruiters. Designed for your first paycheque.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              From mock interviews to employer showcases, Mandke College keeps placement support practical, personal, and
              persistent - so you walk into interviews with proof, not promises.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
              <div className="rounded-btn border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-heading text-4xl font-bold text-accent md:text-5xl">{pct}%</p>
                <p className="mt-1 text-sm font-medium text-slate-300">Placement-focused training cohorts*</p>
              </div>
              <div className="rounded-btn border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-heading text-4xl font-bold text-white md:text-5xl">{students.toLocaleString()}+</p>
                <p className="mt-1 text-sm font-medium text-slate-300">Learners mentored across programmes</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">*Outcome metrics vary by cohort; speak to admissions for latest reports.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className="flex gap-4 rounded-btn border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-accent/20 text-accent">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{p.body}</p>
                  </div>
                </motion.div>
              );
            })}
            <Link
              to="/admissions"
              className="mt-2 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
            >
              <TrendingUp className="h-5 w-5" aria-hidden />
              Book a career counselling call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
