import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
const IQAC_POLICY = "We at Smt. Sudhatai Mandke College are committed to impart quality education in the field of Commerce and Management in order to help students to unleash their potential and empower them with sound managerial, entrepreneurial and life skills, to excel through curricular, co-curricular, extracurricular, research and extension activities with the help of technological tools, through continuous improvements and performance based initiatives for maximization of stakeholders' satisfaction.";
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
const PDF_DOCUMENTS = {
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
function ContentCard({ title, children }) {
    return (_jsxs("div", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: title }), _jsx("div", { className: "mt-4 space-y-4 text-textSecondary", children: children })] }));
}
function BulletList({ items }) {
    return (_jsx("ul", { className: "space-y-3", children: items.map((entry) => (_jsxs("li", { className: "flex gap-3", children: [_jsx("span", { className: "mt-2 h-2 w-2 shrink-0 rounded-full bg-accent", "aria-hidden": true }), _jsx("span", { children: entry })] }, entry))) }));
}
export function IQACPage() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "IQAC - Mandke College" }), _jsx("meta", { name: "description", content: "Internal Quality Assurance Cell documents, NAAC records, AQAR, minutes, affiliation documents, and statutory declarations." })] }), _jsx("section", { className: "bg-section py-16", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4 text-center", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Quality Assurance" }), _jsx("h1", { className: "mt-3 font-heading text-4xl font-bold text-primary md:text-5xl", children: "Internal Quality Assurance Cell" }), _jsx("p", { className: "mx-auto mt-4 max-w-3xl text-textSecondary", children: "IQAC documents, accreditation records, reports, policies, and statutory disclosures for Smt. Sudhatai Mandke College." })] }) }), _jsx("section", { className: "mx-auto max-w-6xl px-4 py-14", children: _jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: IQAC_ITEMS.map((item) => (_jsxs(Link, { to: `/iqac/${item.slug}`, className: "group flex min-h-[150px] flex-col rounded-btn border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift", children: [_jsx(FileText, { className: "h-7 w-7 text-accent", "aria-hidden": true }), _jsx("h2", { className: "mt-4 font-heading text-lg font-bold text-primary", children: item.title }), _jsx("p", { className: "mt-2 line-clamp-2 text-sm text-textSecondary", children: IQAC_DESCRIPTIONS[item.slug] }), _jsxs("span", { className: "mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-accent", children: ["View details ", _jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1", "aria-hidden": true })] })] }, item.slug))) }) })] }));
}
function InternalQualityAssuranceCellContent() {
    return (_jsx("section", { className: "mx-auto max-w-5xl px-4 py-12", children: _jsxs("div", { className: "grid gap-6", children: [_jsx(ContentCard, { title: "About Internal Quality Assurance Cell (IQAC)", children: IQAC_ABOUT.map((paragraph) => (_jsx("p", { children: paragraph }, paragraph))) }), _jsx(ContentCard, { title: "Quality Policy & Objective", children: _jsx("p", { children: IQAC_POLICY }) }), _jsx(ContentCard, { title: "Strategies", children: _jsx(BulletList, { items: STRATEGIES }) }), _jsx(ContentCard, { title: "Functions of IQAC", children: _jsx(BulletList, { items: FUNCTIONS }) }), _jsx(ContentCard, { title: "Benefits", children: _jsx(BulletList, { items: BENEFITS }) }), _jsxs("div", { className: "rounded-btn border border-accent/30 bg-amber-50 p-6", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "IQAC Committee Members" }), _jsx("p", { className: "mt-3 text-textSecondary", children: "IQAC committee member details are available on the separate IQAC Committee page." }), _jsxs(Link, { to: "/iqac/iqac-committee", className: "mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white", children: ["View IQAC Committee ", _jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })] })] })] }) }));
}
function IQACCommitteeContent() {
    return (_jsxs("section", { className: "mx-auto max-w-5xl px-4 py-12", children: [_jsxs("div", { className: "overflow-hidden rounded-btn border border-borderSoft bg-white shadow-card", children: [_jsx("div", { className: "bg-primary px-6 py-5", children: _jsx("h2", { className: "font-heading text-2xl font-bold text-white", children: "IQAC Committee Members" }) }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full min-w-[720px] border-collapse text-left", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-primary text-white", children: [_jsx("th", { className: "px-5 py-3 text-sm font-bold uppercase tracking-wide", children: "Name" }), _jsx("th", { className: "px-5 py-3 text-sm font-bold uppercase tracking-wide", children: "Designation" }), _jsx("th", { className: "px-5 py-3 text-sm font-bold uppercase tracking-wide", children: "Role in IQAC" })] }) }), _jsx("tbody", { children: COMMITTEE_MEMBERS.map((member, index) => (_jsxs("tr", { className: index % 2 === 0 ? "bg-slate-200" : "bg-white", children: [_jsx("td", { className: "px-5 py-3 text-sm font-medium text-textSecondary md:text-base", children: member.name }), _jsx("td", { className: "px-5 py-3 text-sm text-textSecondary md:text-base", children: member.designation }), _jsx("td", { className: "px-5 py-3 text-sm text-textSecondary md:text-base", children: member.role })] }, member.name))) })] }) })] }), _jsxs("div", { className: "mt-8 rounded-btn border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "IQAC Committee Members" }), _jsx("p", { className: "mt-3 text-textSecondary", children: "The IQAC Committee coordinates institutional quality initiatives, academic review processes, stakeholder feedback, documentation, and quality enhancement activities." })] })] }));
}
function PDFDocumentContent({ title, url, description }) {
    return (_jsx("section", { className: "mx-auto max-w-5xl px-4 py-12", children: _jsxs("div", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: title }), _jsx("p", { className: "mt-3 text-textSecondary", children: description }), _jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [_jsx("a", { href: url, target: "_blank", rel: "noreferrer", className: "inline-flex min-h-[44px] items-center justify-center rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white", children: "Open PDF" }), _jsx("a", { href: url, download: true, className: "inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary", children: "Download PDF" })] }), _jsx("div", { className: "mt-8 overflow-hidden rounded-btn border border-borderSoft bg-section", children: _jsx("iframe", { src: url, title: title, className: "h-[70vh] min-h-[520px] w-full" }) })] }) }));
}
function IQACMinutesContent() {
    return (_jsx("section", { className: "mx-auto max-w-5xl px-4 py-12", children: _jsxs("div", { className: "grid gap-6", children: [_jsxs(ContentCard, { title: "IQAC Minutes & Action Reports", children: [_jsx("p", { children: "The Internal Quality Assurance Cell (IQAC) of the college plays a vital role in planning, monitoring, and enhancing the quality benchmarks of institutional processes. Regular IQAC meetings are conducted to discuss academic, administrative, and infrastructural developments, while also reviewing the progress of ongoing quality initiatives." }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-primary", children: "Each meeting includes:" }), _jsx("div", { className: "mt-3", children: _jsx(BulletList, { items: IQAC_MINUTES_POINTS }) })] }), _jsx("p", { children: "Following every meeting, an Action Taken Report (ATR) is prepared, which records the decisions implemented based on the resolutions passed. This ensures a transparent and accountable quality assurance process." }), _jsx("p", { children: "These reports serve as evidence of the college's continuous internal assessment and commitment to maintaining and enhancing academic standards in line with the guidelines of NAAC and SPPU." })] }), _jsxs("div", { className: "rounded-btn border border-accent/30 bg-amber-50 p-6", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "IQAC Minutes of Meeting & ATR 2024-25" }), _jsx("p", { className: "mt-3 text-textSecondary", children: "Minutes of Meeting and Action Taken Reports for the academic year 2024-25 will be published here." }), _jsx("div", { className: "mt-6 rounded-btn bg-white p-5 text-sm text-textSecondary shadow-sm", children: "No document has been published yet." })] })] }) }));
}
export function IQACDetailPage() {
    const { slug } = useParams();
    const item = IQAC_ITEMS.find((entry) => entry.slug === slug);
    if (!item) {
        return _jsx(Navigate, { to: "/iqac", replace: true });
    }
    const matchedDocument = PDF_DOCUMENTS[item.slug];
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [item.title, " - IQAC - Mandke College"] }) }), _jsx("section", { className: "bg-section py-16", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [_jsx(Link, { to: "/iqac", className: "text-sm font-bold text-accent hover:underline", children: "Back to IQAC" }), _jsx("h1", { className: "mt-4 font-heading text-4xl font-bold text-primary", children: item.title }), _jsx("p", { className: "mt-4 text-textSecondary", children: IQAC_DESCRIPTIONS[item.slug] })] }) }), item.slug === "internal-quality-assurance-cell" ? _jsx(InternalQualityAssuranceCellContent, {}) : null, item.slug === "iqac-committee" ? _jsx(IQACCommitteeContent, {}) : null, item.slug === "iqac-minutes-action-reports" ? _jsx(IQACMinutesContent, {}) : null, matchedDocument ? (_jsx(PDFDocumentContent, { title: matchedDocument.title, url: matchedDocument.url, description: `View or download ${matchedDocument.title} for Smt. Sudhatai Mandke College.` })) : null, item.slug !== "internal-quality-assurance-cell" &&
                item.slug !== "iqac-committee" &&
                item.slug !== "iqac-minutes-action-reports" &&
                !matchedDocument ? (_jsx("section", { className: "mx-auto max-w-4xl px-4 py-12", children: _jsxs("div", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: item.slug === "undertaking" ? "UGC Undertaking PDF" : "Documents" }), _jsx("p", { className: "mt-3 text-textSecondary", children: item.slug === "undertaking"
                                ? "Upload the UGC Undertaking PDF in the assets PDF folder to publish it on this page."
                                : "Documents for this section can be uploaded or linked from the admin/CMS. This page is ready for certificates, PDFs, reports, notices, and statutory records." }), _jsx("div", { className: "mt-6 rounded-btn bg-section p-5 text-sm text-textSecondary", children: item.slug === "undertaking" ? "UGC Undertaking PDF not found yet." : "No document has been published yet." })] }) })) : null] }));
}
