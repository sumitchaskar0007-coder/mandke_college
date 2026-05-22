import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Newspaper,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { api } from "../api/client";
import buildingImage from "../assets/images/building.png";
import { useCounter } from "../hooks/useCounter";
import { CourseCards } from "../components/home/CourseCards";
import { PlacementsSection } from "../components/home/PlacementsSection";
import { TestimonialsCarousel } from "../components/home/TestimonialsCarousel";
import type { TestimonialRow } from "../components/home/TestimonialsCarousel";
import { HomeGalleryGrid, GallerySectionFooter } from "../components/home/HomeGalleryGrid";
import type { GalleryCategory, GalleryItem } from "../components/home/HomeGalleryGrid";

type Stats = { students?: number; years?: number; placement?: number; jubilee?: number; trustBadges?: string[] };
type Announcement = { _id: string; title: string; body?: string; type?: string; isPinned?: boolean; createdAt?: string };
type BlogItem = { _id: string; title: string; slug: string; excerpt?: string; category?: string; publishedAt?: string; coverImage?: string };
type EventItem = { _id: string; title: string; date?: string; venue?: string; image?: string };
type ContentBlock = { section: string; data: Record<string, unknown> };

const HERO_IMAGE = buildingImage;

const DEFAULT_HIGHLIGHTS = [
  { title: "Building Competence & Mindset", body: "B.Com designed for practical skills, confidence, and industry readiness." },
  { title: "100% Employment Focused", body: "Career guidance, internships, and placement support from day one." },
  { title: "7000+ Students Trained", body: "Over 20 years of transforming commerce students into confident professionals." },
  { title: "Only B.Com Course 2026-27", body: "Specialized focus on commerce education with holistic development." },
  { title: "Your Goal | Our Mission - BETTER YOU", body: "Personalized learning pathways to help every student discover their potential." },
  { title: "Silver Jubilee Legacy 2027", body: "Celebrating 25 years of excellence since 2002. Join our transformational journey." },
];

const DEFAULT_ANNOUNCEMENTS: Announcement[] = [
  {
    _id: "admission-open",
    title: "Admissions open for B.Com FY/SY/TY 2026-27",
    body: "Apply online or connect with the admissions team for counselling and document guidance.",
    type: "Admissions",
    isPinned: true,
  },
  {
    _id: "campus-visit",
    title: "Campus visits and counselling slots available",
    body: "Meet faculty, understand the B.Com pathway, and explore placement support.",
    type: "Counselling",
  },
  {
    _id: "silver-jubilee",
    title: "Silver Jubilee journey toward 2027",
    body: "Celebrating a legacy of commerce education, student confidence, and community impact.",
    type: "Milestone",
  },
];

const DEFAULT_EVENTS: EventItem[] = [
  { _id: "orientation", title: "B.Com Orientation and Parent Interaction", date: "2026-06-15", venue: "Mandke College Campus" },
  { _id: "career", title: "Career Readiness Workshop", date: "2026-06-22", venue: "Seminar Hall" },
  { _id: "visit", title: "Campus Tour and Admissions Counselling", date: "2026-06-29", venue: "Admissions Office" },
];

const DEFAULT_BLOGS: BlogItem[] = [
  {
    _id: "career-commerce",
    title: "How a focused B.Com pathway prepares students for modern commerce careers",
    slug: "commerce-career-pathway",
    excerpt: "A practical look at academics, internships, communication, and interview readiness.",
    category: "Career Guide",
  },
  {
    _id: "accounting-skills",
    title: "Accounting, analytics, and confidence: skills every commerce student should build",
    slug: "commerce-skills",
    excerpt: "Core skill areas that help students move from classroom learning to workplace performance.",
    category: "Skill Building",
  },
  {
    _id: "admission-checklist",
    title: "B.Com admissions checklist for students and parents",
    slug: "bcom-admission-checklist",
    excerpt: "Documents, questions, and campus visit tips for a smooth admissions conversation.",
    category: "Admissions",
  },
];

const VISION =
  "To be a premier institution of need based higher education that nurtures socially responsible, globally competent, and industry-ready individuals through academic excellence, holistic development, and value-based learning.";

const MISSION = [
  "To impart relevant and quality higher education that empowers students for successful careers and meaningful lives.",
  "To foster moral, intellectual, physical, and personality development through a holistic learning environment.",
  "To implement effective and innovative teaching-learning practices that promote academic excellence and practical knowledge.",
  "To strengthen industry-institute interaction and enhance opportunities for internships, employability, and campus placements.",
  "To provide career guidance, skill development, and a conducive environment for the overall growth of students and staff.",
  "To prepare students and faculty to achieve global competence, leadership, and lifelong learning.",
];

const SITE = {
  name: "Smt. Sudhatai Mandke College",
  legalName: "Mandke Human Happiness Foundation's Smt. Sudhatai Mandke College",
  url: "https://mandkecollege.edu.in",
  phone: "+91-99229-65506",
  email: "admissions.mandkecollege@gmail.com",
  address: {
    streetAddress: "47/8, Mandke Growth Centre, Paud Road, Next to Ideal Colony Metro Station",
    addressLocality: "Kothrud, Pune",
    postalCode: "411038",
    addressCountry: "IN",
  },
};

function StatCard({ icon: Icon, label, target, suffix = "" }: { icon: LucideIcon; label: string; target: number; suffix?: string }) {
  const { ref, value } = useCounter(target);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="rounded-btn border border-borderSoft bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,60,143,0.14)] md:p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-btn bg-gradient-to-br from-primary/10 to-accent/15">
        <Icon className="h-7 w-7 text-accent" aria-hidden />
      </div>
      <p className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-base text-textSecondary">{label}</p>
    </motion.div>
  );
}

function TrustBadgeCard({ name }: { name: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex min-h-[80px] min-w-[120px] flex-1 items-center justify-center rounded-btn border border-borderSoft bg-white px-5 py-4 text-center shadow-card transition hover:border-accent/40 hover:shadow-lg"
    >
      <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary md:text-base">{name}</span>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-3 max-w-2xl text-lg leading-relaxed text-textSecondary">{body}</p> : null}
    </motion.div>
  );
}

export function HomePage() {
  const { data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => (await api.get<Stats | null>("/stats")).data,
  });

  const { data: announcements } = useQuery({
    queryKey: ["announcements", "home"],
    queryFn: async () => (await api.get<{ items: Announcement[] }>("/announcements?limit=3")).data,
  });

  const { data: blogs } = useQuery({
    queryKey: ["blogs", "home"],
    queryFn: async () => (await api.get<{ items: BlogItem[] }>("/blogs?limit=3")).data,
  });

  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => (await api.get<EventItem[]>("/events")).data,
  });

  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => (await api.get<TestimonialRow[]>("/testimonials?limit=12")).data,
  });

  const { data: gallery } = useQuery({
    queryKey: ["gallery", "home"],
    queryFn: async () => (await api.get<GalleryItem[]>("/gallery?limit=8")).data,
  });

  const { data: galleryCategories } = useQuery({
    queryKey: ["gallery", "categories"],
    queryFn: async () => (await api.get<GalleryCategory[]>("/gallery/categories")).data,
  });

  const { data: contentRows } = useQuery({
    queryKey: ["content", "home"],
    queryFn: async () => (await api.get<ContentBlock[]>("/content/home")).data,
  });

  const highlightsBlock = contentRows?.find((c) => c.section === "highlights")?.data as
    | { items?: { title: string; body: string }[] }
    | undefined;
  const highlights = highlightsBlock?.items?.length ? highlightsBlock.items : DEFAULT_HIGHLIGHTS;
  const s = stats || {};
  const placementDisplay = typeof s.placement === "number" ? Math.min(100, s.placement) : 95;
  const visibleAnnouncements = announcements?.items?.length ? announcements.items : DEFAULT_ANNOUNCEMENTS;
  const visibleEvents = events?.length ? events : DEFAULT_EVENTS;
  const visibleBlogs = blogs?.items?.length ? blogs.items : DEFAULT_BLOGS;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "CollegeOrUniversity"],
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    description:
      "B.Com college affiliated to Savitribai Phule Pune University (SPPU), NAAC accredited. Tagline: Your Goal | Our Mission - Better You.",
  };

  return (
    <>
      <Helmet>
        <title>Mandke College | Your Goal | Our Mission | Better You | B.Com SPPU Pune</title>
        <meta
          name="description"
          content="NAAC accredited B.Com at Smt. Sudhatai Mandke College, Pune - SPPU affiliated, placement-focused, Silver Jubilee legacy. Admissions 2026-27."
        />
        <meta
          name="keywords"
          content="Mandke College, B.Com Pune, SPPU commerce, NAAC college Pune, admissions 2026, Sudhatai Mandke College, career tips commerce"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="relative overflow-hidden bg-[#061735] text-white">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,23,53,0.82)_0%,rgba(10,35,82,0.58)_46%,rgba(6,23,53,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#061735] to-transparent" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-btn border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-widest text-amber-200 backdrop-blur"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              Admissions 2026-27 open
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
              className="mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Your Goal.
              <span className="block text-amber-300">Our Mission.</span>
              <span className="block">Better You.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl"
            >
              NAAC accredited, SPPU affiliated B.Com education in Kothrud, Pune, shaped around competence,
              confidence, employability, and a values-led campus experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/admissions"
                className="inline-flex min-h-[50px] min-w-[160px] items-center justify-center gap-2 rounded-btn bg-accent px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/30 transition hover:brightness-105"
              >
                Apply now <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {["NAAC Accredited", "SPPU Affiliated", "Est. 2002", "Silver Jubilee 2027"].map((b) => (
                <div key={b} className="rounded-btn border border-white/20 bg-white/10 px-3 py-3 text-sm font-semibold backdrop-blur">
                  {b}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="rounded-btn border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-md md:p-6"
          >
            <div className="grid gap-4">
              <div className="rounded-btn bg-white p-5 text-textPrimary shadow-card">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">Focused programme</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-primary">B.Com with career readiness</h2>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                  Commerce academics, skill labs, placement guidance, student mentoring, and campus activities in one
                  structured pathway.
                </p>
                <div className="mt-5 grid gap-3 text-sm font-semibold text-primary">
                  {["Admissions counselling", "Digital accounting exposure", "Mock interviews and CV clinics"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-btn border border-white/15 bg-[#0b2556]/80 p-4">
                  <p className="font-heading text-3xl font-bold text-amber-300">{s.students ?? 5000}+</p>
                  <p className="mt-1 text-xs font-medium text-slate-200">Students trained</p>
                </div>
                <div className="rounded-btn border border-white/15 bg-[#0b2556]/80 p-4">
                  <p className="font-heading text-3xl font-bold text-amber-300">{s.years ?? 20}+</p>
                  <p className="mt-1 text-xs font-medium text-slate-200">Years of excellence</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-btn border border-white/15 bg-[#0b2556]/80 p-4 text-sm text-slate-100">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden />
                <span>Kothrud, Pune - next to Ideal Colony Metro Station</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-borderSoft bg-gradient-to-r from-amber-50 via-white to-section py-3 md:py-4">
        <div className="mx-auto max-w-6xl overflow-hidden px-4">
          <div className="flex animate-marquee gap-16 whitespace-nowrap text-sm font-bold text-accent md:text-base">
            <span>Admissions 2026-27 Open for B.Com FY/SY/TY - Apply Now!</span>
            <span>7000+ Students Trained Since 2002</span>
            <span>100% Employment Focused</span>
            <span>Silver Jubilee 2027 Celebration</span>
            <span>Building Competence & Mindset</span>
            <span>Admissions 2026-27 Open for B.Com FY/SY/TY - Apply Now!</span>
          </div>
        </div>
      </section>

      <CourseCards />
      <PlacementsSection placementPercent={placementDisplay} students={s.students ?? 5000} />

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader eyebrow="Numbers that matter" title="A trusted launchpad for commerce careers" />
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Users} label="Students trained" target={s.students ?? 5000} suffix="+" />
          <StatCard icon={Award} label="Years of excellence" target={s.years ?? 20} suffix="+" />
          <StatCard icon={GraduationCap} label="Career readiness focus" target={placementDisplay} suffix="%" />
          <StatCard icon={Sparkles} label="Silver Jubilee year" target={s.jubilee ?? 2027} />
        </div>
      </section>

      <section className="bg-gradient-to-b from-section via-white to-section py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Stories"
              title="Hear from students and alumni"
              body="Video journeys, star-rated experiences, and candid reflections from learners who grew with us."
            />
            <Link to="/blog" className="inline-flex min-h-[48px] items-center font-bold text-accent hover:underline">
              Read career articles
            </Link>
          </div>
          <div className="mt-12">
            <TestimonialsCarousel items={testimonials || []} />
          </div>
        </div>
      </section>

      <section className="border-y border-borderSoft bg-white py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Accreditation and partners</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary md:text-3xl">Recognised. Audited. University-aligned.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
            {(s.trustBadges || ["NAAC", "SPPU", "AISHE", "NIRF", "ISO-ready"]).map((name) => (
              <TrustBadgeCard key={name} name={name} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">Announcements</h2>
          <Link to="/announcements" className="min-h-[44px] text-base font-bold text-accent hover:underline">
            View all
          </Link>
        </div>
        <ul className="mt-8 space-y-4">
          {visibleAnnouncements.map((a) => (
            <motion.li
              key={a._id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-start gap-3 rounded-btn border border-borderSoft bg-white p-5 shadow-card transition hover:shadow-md"
            >
              {a.isPinned ? <Newspaper className="mt-1 h-5 w-5 text-accent" aria-hidden /> : null}
              <span className="rounded-btn bg-section px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                {a.type || "Update"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-lg font-semibold text-primary">{a.title}</p>
                {a.body ? <p className="mt-1 line-clamp-2 text-textSecondary">{a.body}</p> : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="bg-gradient-to-b from-section to-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">Campus calendar</h2>
            <Link to="/contact" className="min-h-[44px] text-base font-bold text-accent hover:underline">
              Plan a visit
            </Link>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-3 pt-1 [-webkit-overflow-scrolling:touch]">
            {visibleEvents.slice(0, 6).map((ev) => (
              <article
                key={ev._id}
                className="min-w-[260px] shrink-0 rounded-btn border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lg md:min-w-[300px]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <Calendar className="h-4 w-4" />
                  {ev.date ? new Date(ev.date).toLocaleDateString() : "TBC"}
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-primary">{ev.title}</h3>
                {ev.venue ? <p className="mt-2 text-sm text-textSecondary">{ev.venue}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader eyebrow="Why Mandke" title="A college experience built around the whole student" />
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex h-full flex-col rounded-btn border border-borderSoft bg-white p-6 shadow-card transition hover:shadow-lg"
            >
              <BookOpen className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-heading text-xl font-bold text-primary">{h.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-textSecondary">{h.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary via-[#152a66] to-dark py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Vision</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">Where competence meets character</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">{VISION}</p>
          </motion.div>
          <div className="rounded-btn border border-white/15 bg-white/5 p-6 backdrop-blur-md md:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Mission</p>
            <ol className="mt-4 space-y-4 text-sm leading-relaxed text-slate-200 md:text-base">
              {MISSION.map((m, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {String.fromCharCode(97 + idx)}
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Life at Mandke"
            title="Gallery and reels"
            body="Campus moments, events, student activities, and celebration highlights."
          />
        </div>
        <div className="mt-12">
          <HomeGalleryGrid items={gallery || []} categories={galleryCategories} />
        </div>
        <GallerySectionFooter />
      </section>

      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Weekly insights</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">Career tips and commerce trends</h2>
            </div>
            <Link to="/blog" className="min-h-[44px] text-base font-bold text-accent hover:underline">
              View all articles
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {visibleBlogs.map((b) => (
              <Link
                key={b._id}
                to={`/blog/${b.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-btn border border-borderSoft bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl"
              >
                {b.coverImage ? (
                  <img
                    src={b.coverImage.includes("cloudinary") ? b.coverImage.replace("/upload/", "/upload/w_800,f_webp,q_auto/") : b.coverImage}
                    alt=""
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary to-[#0b2556] text-white">
                    <BookOpen className="h-12 w-12 text-amber-300" aria-hidden />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase text-accent">{b.category || "Insight"}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-primary group-hover:text-accent">{b.title}</h3>
                  {b.excerpt ? <p className="mt-2 line-clamp-3 flex-1 text-sm text-textSecondary">{b.excerpt}</p> : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-dark to-accent" />
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">25 years of transforming lives</h2>
          <p className="mt-6 text-lg text-white/90">2002 Founded - NAAC milestones - Digital campus - 2027 Silver Jubilee</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg"
            >
              Join the legacy
            </Link>
            <Link
              to="/about"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-white px-8 py-3.5 text-base font-bold text-white"
            >
              Explore our story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">Ready to begin your journey?</h2>
          <p className="mt-5 text-lg text-textSecondary">
            Admissions open for 2026-27. Choose Mandke College for a B.Com experience that is guided, practical, and future-ready.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg"
            >
              Apply now
            </Link>
            <Link
              to="/commerce"
              className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn border-2 border-primary px-8 py-3.5 text-base font-bold text-primary"
            >
              Brochure
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn bg-primary px-8 py-3.5 text-base font-bold text-white"
            >
              Contact admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
