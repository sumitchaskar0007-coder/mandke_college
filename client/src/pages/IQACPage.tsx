import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { IQAC_DESCRIPTIONS, IQAC_ITEMS } from "../data/iqac";
import aqarReportUrl from "../assets/pdf/27657 FINAL AQAR REPORT- 2021-2022.pdf?url";
import affiliationLetterUrl from "../assets/pdf/Affiliation 2021 CA-1610, Dated 06-10-2021.pdf?url";
import aisheCertificateUrl from "../assets/pdf/C-41872_AISHE CERTIFICATE 2023-24.pdf?url";
import bestPracticesUrl from "../assets/pdf/Best Practices.pdf?url";
import codeOfConductUrl from "../assets/pdf/SMCC- Code of Conduct.pdf?url";
import institutionalDistinctivenessUrl from "../assets/pdf/Institutional Distinctiveness.pdf?url";
import naacCertificateUrl from "../assets/pdf/NAAC CERTIFICATE.pdf?url";
import rtiDeclarationUrl from "../assets/pdf/RTI-Statutory-Declaration-SMCC final.pdf?url";
import undertakingUrl from "../assets/pdf/undertaking.pdf?url";

const IQAC_ABOUT = [
  "The National Assessment and Accreditation Council (NAAC), Bangalore requires that each accredited institute establish an Internal Quality Assurance Cell (IQAC) post accreditation. The purpose of the same is to maintain quality. NAAC suggests that IQAC shall put all efforts and take measures towards the promotion of holistic academic excellence of the institution.",
  "The Internal Quality Assurance Cell (IQAC) is a crucial cell for institutionalization of quality. The cell leads strategic initiatives in the college to fill gaps and deficiencies to ensure quality and performance.",
  "Internal Quality Assurance Cell (IQAC) of the college is the central nodal unit that looks into the quality sustenance and quality enhancement of various systems in the college. Since the establishment of IQAC, it has been taking sincere efforts to establish the procedures and modalities relating to various aspects right from identification of need of the students to feedback of various stakeholders and finally the review of processes for continuous improvements.",
];

const IQAC_POLICY =
  "We at Smt. Sudhatai Mandke College are committed to impart quality education in the field of Commerce and Management in order to help students to unleash their potential and empower them with sound managerial, entrepreneurial and life skills, to excel through curricular, co-curricular, extracurricular, research and extension activities with the help of technological tools, through continuous improvements and performance based initiatives for maximization of stakeholders' satisfaction.";

const STRATEGIES = [
  "Ensuring timely, efficient and progressive performance of academic, administrative and financial units.",
  "Adoption of relevant and quality academic and research programmes.",
  "Ensuring equitable access to and affordability of academic programmes for various sections of the society.",
  "Optimization and integration of modern methods of teaching and learning.",
  "Ensuring credible assessment and evaluation processes.",
  "Ensuring the proper allocation, adequacy and maintenance of support structure and services.",
  "Sharing of research findings and networking with other institutions in India and abroad.",
];

const FUNCTIONS = [
  "To strive for continuous improvement through development of quality benchmarks.",
  "Development of system and processes for academic and administrative activities of the college.",
  "Identification of needs of students and facilitation of a learner-centric environment conducive to quality education.",
  "Motivating the faculty to adopt the required knowledge and technology for innovative and participative Teaching-Learning-Evaluation of the students.",
  "Collection and analysis of feedback from all the stakeholders on various parameters like teaching-learning process, infrastructure etc.",
  "Dissemination of information on various quality parameters to all stakeholders.",
  "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.",
  "Devising user friendly and ICT enabled documentation system for implementation throughout the institution.",
  "Acting as a nodal agency of the institution for coordination among various departments and institutionalization of the best practices.",
  "Devising parameters and conducting annual performance analysis of the teaching faculty.",
  "Conducting periodic academic and administrative audit and its follow-up.",
  "Preparing and submitting the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC.",
];

const BENEFITS = [
  "Ensuring clarity and focus in the institution's march towards quality enhancement.",
  "Ensuring internalization of quality culture.",
  "Ensuring enhancement and coordination among the various units and activities of the institution and institutionalizing all good practices.",
  "Providing a sound basis for decision-making to improve institutional functioning.",
  "Acting as a dynamic system for quality changes in HEIs.",
  "Building a sound methodology for documentation and internal communication.",
];

const IQAC_MINUTES_POINTS = [
  "Review of previous action points",
  "Discussion on quality enhancement initiatives",
  "Academic and administrative planning",
  "Suggestions for improving teaching-learning outcomes",
  "Planning of FDPs, seminars, workshops, student support activities",
  "Feedback analysis and follow-up measures",
];

const COMMITTEE_MEMBERS = [
  { name: "Dr. Ambadas T. Bhosale", designation: "Principal", role: "Chairperson IQAC" },
  { name: "Dr. Sanjay Patankar", designation: "Teacher Representative", role: "Member" },
  { name: "Mrs. Jyoti Ghodke", designation: "Teacher Representative", role: "Member" },
  { name: "Mrs. Vaishali Karkare", designation: "Teacher Representative", role: "Member" },
  { name: "Mrs. Radhika Godbole", designation: "Management Representative", role: "Member" },
  { name: "Ms. Surekha Padwale", designation: "Representative of Non-Teaching Staff", role: "Member" },
  { name: "Mr. Sameer Patole", designation: "Representative of Non-Teaching Staff", role: "Member" },
  { name: "Dr. G. S. Angal", designation: "Representative of Local Society", role: "Member" },
  { name: "Mr. Om Wagh", designation: "Student Representative", role: "Member" },
  { name: "Mr. Alvi Afeef", designation: "Alumni Representative", role: "Member" },
  { name: "Mr. Indraneil Mandke", designation: "Nominee from Industry", role: "Member" },
  { name: "Mrs. Amruta Bhide", designation: "Assistant Professor", role: "IQAC Coordinator" },
];

const PDF_DOCUMENTS: Partial<Record<(typeof IQAC_ITEMS)[number]["slug"], { title: string; url: string }>> = {
  "naac-accreditation-certificate": {
    title: "NAAC Accreditation Certificate",
    url: naacCertificateUrl,
  },
  aqar: {
    title: "AQAR Report 2021-2022",
    url: aqarReportUrl,
  },
  "important-affiliation-docs": {
    title: "Affiliation 2021 CA-1610, Dated 06-10-2021",
    url: affiliationLetterUrl,
  },
  undertaking: {
    title: "UGC Undertaking",
    url: undertakingUrl,
  },
  "affiliation-letter-bcom": {
    title: "Affiliation Letter B.Com",
    url: affiliationLetterUrl,
  },
  aishe: {
    title: "AISHE Certificate 2023-24",
    url: aisheCertificateUrl,
  },
  "rti-statutory-declaration": {
    title: "RTI Statutory Declaration",
    url: rtiDeclarationUrl,
  },
  "code-of-conduct": {
    title: "Code of Conduct",
    url: codeOfConductUrl,
  },
  "institutional-distinctiveness": {
    title: "Institutional Distinctiveness",
    url: institutionalDistinctivenessUrl,
  },
  "best-practices": {
    title: "Best Practices",
    url: bestPracticesUrl,
  },
};

function ContentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card">
      <h2 className="font-heading text-2xl font-bold text-primary">{title}</h2>
      <div className="mt-4 space-y-4 text-textSecondary">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((entry) => (
        <li key={entry} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>{entry}</span>
        </li>
      ))}
    </ul>
  );
}

export function IQACPage() {
  return (
    <>
      <Helmet>
        <title>IQAC - Mandke College</title>
        <meta
          name="description"
          content="Internal Quality Assurance Cell documents, NAAC records, AQAR, minutes, affiliation documents, and statutory declarations."
        />
      </Helmet>

      <section className="bg-section py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Quality Assurance</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">Internal Quality Assurance Cell</h1>
          <p className="mx-auto mt-4 max-w-3xl text-textSecondary">
            IQAC documents, accreditation records, reports, policies, and statutory disclosures for Smt. Sudhatai Mandke College.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IQAC_ITEMS.map((item) => (
            <Link
              key={item.slug}
              to={`/iqac/${item.slug}`}
              className="group flex min-h-[150px] flex-col rounded-btn border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
            >
              <FileText className="h-7 w-7 text-accent" aria-hidden />
              <h2 className="mt-4 font-heading text-lg font-bold text-primary">{item.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-textSecondary">{IQAC_DESCRIPTIONS[item.slug]}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-accent">
                View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function InternalQualityAssuranceCellContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid gap-6">
        <ContentCard title="About Internal Quality Assurance Cell (IQAC)">
          {IQAC_ABOUT.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ContentCard>

        <ContentCard title="Quality Policy & Objective">
          <p>{IQAC_POLICY}</p>
        </ContentCard>

        <ContentCard title="Strategies">
          <BulletList items={STRATEGIES} />
        </ContentCard>

        <ContentCard title="Functions of IQAC">
          <BulletList items={FUNCTIONS} />
        </ContentCard>

        <ContentCard title="Benefits">
          <BulletList items={BENEFITS} />
        </ContentCard>

        <div className="rounded-btn border border-accent/30 bg-amber-50 p-6">
          <h2 className="font-heading text-2xl font-bold text-primary">IQAC Committee Members</h2>
          <p className="mt-3 text-textSecondary">
            IQAC committee member details are available on the separate IQAC Committee page.
          </p>
          <Link
            to="/iqac/iqac-committee"
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white"
          >
            View IQAC Committee <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IQACCommitteeContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="overflow-hidden rounded-btn border border-borderSoft bg-white shadow-card">
        <div className="bg-primary px-6 py-5">
          <h2 className="font-heading text-2xl font-bold text-white">IQAC Committee Members</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-5 py-3 text-sm font-bold uppercase tracking-wide">Name</th>
                <th className="px-5 py-3 text-sm font-bold uppercase tracking-wide">Designation</th>
                <th className="px-5 py-3 text-sm font-bold uppercase tracking-wide">Role in IQAC</th>
              </tr>
            </thead>
            <tbody>
              {COMMITTEE_MEMBERS.map((member, index) => (
                <tr key={member.name} className={index % 2 === 0 ? "bg-slate-200" : "bg-white"}>
                  <td className="px-5 py-3 text-sm font-medium text-textSecondary md:text-base">{member.name}</td>
                  <td className="px-5 py-3 text-sm text-textSecondary md:text-base">{member.designation}</td>
                  <td className="px-5 py-3 text-sm text-textSecondary md:text-base">{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 rounded-btn border border-borderSoft bg-white p-6 shadow-card">
        <h2 className="font-heading text-2xl font-bold text-primary">IQAC Committee Members</h2>
        <p className="mt-3 text-textSecondary">
          The IQAC Committee coordinates institutional quality initiatives, academic review processes, stakeholder
          feedback, documentation, and quality enhancement activities.
        </p>
      </div>
    </section>
  );
}

function PDFDocumentContent({ title, url, description }: { title: string; url: string; description: string }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card">
        <h2 className="font-heading text-2xl font-bold text-primary">{title}</h2>
        <p className="mt-3 text-textSecondary">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white"
          >
            Open PDF
          </a>
          <a
            href={url}
            download
            className="inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary"
          >
            Download PDF
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-btn border border-borderSoft bg-section">
          <iframe
            src={url}
            title={title}
            className="h-[70vh] min-h-[520px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function IQACMinutesContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid gap-6">
        <ContentCard title="IQAC Minutes & Action Reports">
          <p>
            The Internal Quality Assurance Cell (IQAC) of the college plays a vital role in planning, monitoring, and
            enhancing the quality benchmarks of institutional processes. Regular IQAC meetings are conducted to discuss
            academic, administrative, and infrastructural developments, while also reviewing the progress of ongoing
            quality initiatives.
          </p>
          <div>
            <p className="font-semibold text-primary">Each meeting includes:</p>
            <div className="mt-3">
              <BulletList items={IQAC_MINUTES_POINTS} />
            </div>
          </div>
          <p>
            Following every meeting, an Action Taken Report (ATR) is prepared, which records the decisions implemented
            based on the resolutions passed. This ensures a transparent and accountable quality assurance process.
          </p>
          <p>
            These reports serve as evidence of the college&apos;s continuous internal assessment and commitment to
            maintaining and enhancing academic standards in line with the guidelines of NAAC and SPPU.
          </p>
        </ContentCard>

        <div className="rounded-btn border border-accent/30 bg-amber-50 p-6">
          <h2 className="font-heading text-2xl font-bold text-primary">IQAC Minutes of Meeting & ATR 2024-25</h2>
          <p className="mt-3 text-textSecondary">
            Minutes of Meeting and Action Taken Reports for the academic year 2024-25 will be published here.
          </p>
          <div className="mt-6 rounded-btn bg-white p-5 text-sm text-textSecondary shadow-sm">
            No document has been published yet.
          </div>
        </div>
      </div>
    </section>
  );
}

export function IQACDetailPage() {
  const { slug } = useParams();
  const item = IQAC_ITEMS.find((entry) => entry.slug === slug);

  if (!item) {
    return <Navigate to="/iqac" replace />;
  }
  const matchedDocument = PDF_DOCUMENTS[item.slug];

  return (
    <>
      <Helmet>
        <title>{item.title} - IQAC - Mandke College</title>
      </Helmet>

      <section className="bg-section py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link to="/iqac" className="text-sm font-bold text-accent hover:underline">
            Back to IQAC
          </Link>
          <h1 className="mt-4 font-heading text-4xl font-bold text-primary">{item.title}</h1>
          <p className="mt-4 text-textSecondary">{IQAC_DESCRIPTIONS[item.slug]}</p>
        </div>
      </section>

      {item.slug === "internal-quality-assurance-cell" ? <InternalQualityAssuranceCellContent /> : null}
      {item.slug === "iqac-committee" ? <IQACCommitteeContent /> : null}
      {item.slug === "iqac-minutes-action-reports" ? <IQACMinutesContent /> : null}
      {matchedDocument ? (
        <PDFDocumentContent
          title={matchedDocument.title}
          url={matchedDocument.url}
          description={`View or download ${matchedDocument.title} for Smt. Sudhatai Mandke College.`}
        />
      ) : null}
      {item.slug !== "internal-quality-assurance-cell" &&
      item.slug !== "iqac-committee" &&
      item.slug !== "iqac-minutes-action-reports" &&
      !matchedDocument ? (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-primary">
              {item.slug === "undertaking" ? "UGC Undertaking PDF" : "Documents"}
            </h2>
            <p className="mt-3 text-textSecondary">
              {item.slug === "undertaking"
                ? "Upload the UGC Undertaking PDF in the assets PDF folder to publish it on this page."
                : "Documents for this section can be uploaded or linked from the admin/CMS. This page is ready for certificates, PDFs, reports, notices, and statutory records."}
            </p>
            <div className="mt-6 rounded-btn bg-section p-5 text-sm text-textSecondary">
              {item.slug === "undertaking" ? "UGC Undertaking PDF not found yet." : "No document has been published yet."}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
