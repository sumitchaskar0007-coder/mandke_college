import { Helmet } from "react-helmet-async";
import { BookOpen, Clock, ExternalLink, LibraryBig, Monitor, Printer, ShieldCheck } from "lucide-react";

const LIBRARY_STATS = [
  { label: "Number of Books", value: "3000+" },
  { label: "Magazines / Periodicals / Journals", value: "20" },
  { label: "Rare or Special Books", value: "20" },
  { label: "Computers with Internet", value: "02" },
];

const LIBRARY_SERVICES = [
  "OPAC (Online Public Access Catalogue) through VRIDHHI Software is implemented to check the availability and status of library material.",
  "All the books in the library have barcodes for referencing.",
  "Computer and Internet facility is provided to the staff and students.",
  "Facility to print and photocopy study material is available to students, if required.",
  "Latest editions of competitive examination books are made available in the library.",
  "Daily newspapers in English and Marathi are available for the users.",
  "Drinking water facility is provided.",
  "Display stands allow users to know of latest arrivals of books and magazines in the library.",
  "Every year Saraswati Pooja and Vachan Prerna Din (15th Oct) are celebrated in the library.",
  "Student and faculty feedback is welcomed and acted upon to continuously improve services in the library.",
];

const LIBRARY_RULES = [
  "Student ID and own library card are compulsory to get books issued. Library card is non-transferable.",
  "Maximum 2 books will be issued against library card for 7 days only.",
  "Late charge of 1 rupee per day per book will be charged after 7 days.",
  "Periodicals, journals and reference material will be issued against ID card.",
  "If any book is damaged or lost, student will have to replace the same at own cost.",
  "Eatables and water bottles are not allowed inside library.",
  "Silence, decorum and discipline must be maintained in the library.",
  "Readers should ensure that cell phones are in switch off or silent mode at all times in the library.",
  "Use of computer online and offline services are for academic use only and not for commercial or personal purposes.",
  "Students must follow library rules set forth from time to time. Failing to do so might result in suspension, cancellation, or permanent blacklisting from admission to and borrowing of books from the library.",
];

const ONLINE_PUBLICATIONS = [
  { label: "Indian Journals", href: "https://www.indianjournals.com/" },
  { label: "Dalal Street Investment Journal", href: "https://www.dsij.in/" },
];

const TIMINGS = [
  { day: "Monday to Friday", hours: "8am - 3pm" },
  { day: "Saturday", hours: "8am - 1pm" },
  { day: "Lunch Break", hours: "1pm - 1:30pm" },
];

export function LibraryPage() {
  return (
    <>
      <Helmet>
        <title>Library - Mandke College | Knowledge Resource Center</title>
        <meta
          name="description"
          content="Smt. Sudhatai Mandke College Library and Knowledge Resource Center facilities, services, OPAC, timings, and rules."
        />
      </Helmet>

      <section className="bg-section py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Knowledge Resource Center</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">Library</h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-textSecondary">
            A well-equipped and well-managed library is the foundation of modern educational structure. The importance of
            library in education can be appreciated properly and precisely only if we try to understand the changing
            concepts of education. Today, education bereft of library service is like a body without soul.
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">- The College Library Manual</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LIBRARY_STATS.map((stat) => (
            <article key={stat.label} className="rounded-btn border border-borderSoft bg-white p-5 shadow-card">
              <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-textSecondary">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
          <div className="flex items-center gap-3">
            <LibraryBig className="h-8 w-8 text-accent" aria-hidden />
            <h2 className="font-heading text-2xl font-bold text-primary">Facilities & Services</h2>
          </div>
          <p className="mt-4 text-textSecondary">
            Smt. Sudhatai Mandke College has an extensive Library and Knowledge Resource Center.
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-textSecondary md:grid-cols-2">
            {LIBRARY_SERVICES.map((service) => (
              <li key={service} className="rounded-btn bg-section px-4 py-3">
                {service}
              </li>
            ))}
          </ul>
          <a
            href="https://smcc.vriddhionline.com/DataCenter_01OnlineOPAC.aspx?UniqueID=ST_MANDKE"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:brightness-105"
          >
            OPAC - VRIDHHI Software
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      <section className="bg-section py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
          <article className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <ExternalLink className="h-7 w-7 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Subscriptions to Online Publications</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {ONLINE_PUBLICATIONS.map((publication) => (
                <a
                  key={publication.href}
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-btn bg-section px-4 py-3 text-sm font-bold text-accent hover:underline"
                >
                  {publication.label}
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <Printer className="h-7 w-7 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Commerce and Language Lab</h2>
            </div>
            <p className="mt-5 leading-relaxed text-textSecondary">
              Commerce Lab is set up to showcase charts and projects made by the students.
            </p>
            <p className="mt-4 leading-relaxed text-textSecondary">
              The Language Lab houses books and CDs in many languages. Students make full use of the same for either
              honing their language skills or learning a new language just for fun.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article id="hours" className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Timing</h2>
            </div>
            <div className="mt-6 space-y-3">
              {TIMINGS.map((item) => (
                <div key={item.day} className="flex items-center justify-between gap-4 rounded-btn bg-section px-4 py-3">
                  <span className="font-semibold text-primary">{item.day}</span>
                  <span className="text-sm text-textSecondary">{item.hours}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Library Rules</h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-textSecondary">
              {LIBRARY_RULES.map((rule) => (
                <li key={rule} className="rounded-btn bg-section px-4 py-3">
                  {rule}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary via-[#0b2556] to-accent py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-amber-300" aria-hidden />
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">Explore the Knowledge Resource Center</h2>
          <p className="mt-4 text-lg text-white/90">
            Use OPAC, access subscribed publications, and visit the library for books, reference material, study support,
            and academic resources.
          </p>
          <a
            href="https://smcc.vriddhionline.com/DataCenter_01OnlineOPAC.aspx?UniqueID=ST_MANDKE"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-amber-300 px-7 py-3 text-base font-bold text-primary shadow-lg shadow-black/20 transition hover:bg-amber-200"
          >
            Open OPAC
            <Monitor className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
