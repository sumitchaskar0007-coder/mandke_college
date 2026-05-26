import { Helmet } from "react-helmet-async";
import { GraduationCap, LibraryBig, UserRound } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  qualification?: string;
  experience?: string;
  note?: string;
  photo?: string;
};

type TeamSection = {
  title: string;
  members: TeamMember[];
};

const PRINCIPAL: TeamMember = {
  name: "Dr. Ambadas T Bhosale",
  role: "Principal",
  qualification: "PHD, M.Com, LLB, DLL & L.W.",
  experience: "40 years Experience",
};

const TEAM_SECTIONS: TeamSection[] = [
  {
    title: "Teaching Staff",
    members: [
      {
        name: "Mrs. Amruta Bhide",
        role: "Head of Department - B.Com",
        note: "IQAC Co-ordinator",
        qualification: "M.Com",
        experience: "16 years of Teaching Experience",
      },
      {
        name: "Mrs. Vaishali Karkare",
        role: "Head of Department - BCA",
        qualification: "BSc Physics, MCM",
        experience: "10 years of Teaching Experience",
      },
      {
        name: "Mr. Mohan Yenpure",
        role: "Faculty - B.Com",
        note: "NSS Co-ordinator",
        qualification: "M. Com, B.Ed, LLB, LLM, SET",
        experience: "13 years of Teaching Experience",
      },
      {
        name: "Ms. Swati Chopde",
        role: "Faculty - B.Com / BCA",
        qualification: "M.Phil",
        experience: "4 years of Teaching Experience",
      },
      {
        name: "Mrs. Snehal Udavant",
        role: "Faculty - B.Com",
        qualification: "M. Com",
        experience: "5 years of Teaching Experience",
      },
      {
        name: "Mrs. Poonam Lahurikar",
        role: "Faculty - BCA",
        qualification: "MCA",
        experience: "13 years of Teaching Experience",
      },
      {
        name: "Mrs. Sheetal Chavan",
        role: "Librarian",
        qualification: "BA, M.lib",
        experience: "1 year of Work Experience",
      },
      {
        name: "Dr. Sanjay Patankar",
        role: "Head of Department - BBA",
        qualification: "M.Com, MBA, MPM, LLB, DTL, SET, ICWA, CMA, Ph.D",
        experience: "44 years of Teaching Experience",
      },
      {
        name: "Ms. Neha Chavan",
        role: "Physical Director",
        qualification: "Ph.D, M.Phil, B.Ed, M.Ed all in Physical Education",
        experience: "9 years Experience",
      },
      {
        name: "Mr. Vishwesh Lohar",
        role: "Faculty - B.Com",
        note: "Student Development Officer",
        qualification: "MA Economics",
        experience: "2 years of Teaching Experience",
      },
      {
        name: "Ms. Vaishnavi Malyal",
        role: "Faculty - BBA",
        qualification: "M. Com",
        experience: "25 years of Teaching Experience",
      },
      {
        name: "Ms. Soniya Jadhav",
        role: "Faculty - B.Com",
        qualification: "M.A, Ph.D (English Literature)",
        experience: "1 year of Teaching Experience",
      },
      {
        name: "Mrs. Ambara Yande",
        role: "Faculty - BCA / BBA",
        qualification: "M.Sc. Comp Sci.",
        experience: "4 years of Teaching Experience",
      },
    ],
  },
  {
    title: "Non-Teaching Staff",
    members: [
      {
        name: "Mr. Hari Solanki",
        role: "Administrative Department Head",
        qualification: "M.Com",
        experience: "31 years of Experience",
      },
      {
        name: "Ms. Surekha Padwale",
        role: "Clerk",
        qualification: "MA Psychology",
        experience: "34 years of Administrative Experience",
      },
      {
        name: "Mr. Adarsh Kadam",
        role: "Head Clerk",
        qualification: "B.Com",
        experience: "1 year Experience",
      },
      {
        name: "Mrs. Monali Kangude",
        role: "Accountant",
        qualification: "B.Com",
        experience: "15 years of Experience",
      },
    ],
  },
  {
    title: "Support Staff",
    members: [
      {
        name: "Mr. Akash Kamble",
        role: "Peon",
        qualification: "M.A Appeared",
        experience: "6 years Experience",
      },
      {
        name: "Mrs. Surekha Jadhav",
        role: "House Keeping",
        experience: "20 years Experience",
      },
      {
        name: "Mr. Aakash Ghare",
        role: "Peon",
        qualification: "B.Com",
        experience: "1 year Experience",
      },
      {
        name: "Mrs. Aarti Dhadve",
        role: "House Keeping",
        experience: "10 years Experience",
      },
    ],
  },
];

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-section text-xl font-extrabold text-primary ring-1 ring-borderSoft">
          {member.photo ? <img src={member.photo} alt={member.name} className="h-full w-full object-cover" /> : initials(member.name)}
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold leading-tight text-primary">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase text-accent">{member.role}</p>
          {member.note ? <p className="mt-1 text-sm font-medium text-textSecondary">{member.note}</p> : null}
        </div>
      </div>
      <div className="mt-5 space-y-2 text-sm text-textSecondary">
        {member.qualification ? <p>- {member.qualification}</p> : null}
        {member.experience ? <p>- {member.experience}</p> : null}
      </div>
    </article>
  );
}

export function AboutFacultyPage() {
  return (
    <>
      <Helmet>
        <title>Faculty & Staff - Mandke College</title>
      </Helmet>

      <section className="bg-section py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Team</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">Faculty</h1>
          <div className="mt-5 max-w-4xl space-y-2 text-lg leading-relaxed text-textSecondary">
            <p>The teaching and non-teaching staff at Smt. Sudhatai Mandke College are our backbone.</p>
            <p>We have been fortunate to get highly experienced and passionate teachers from day one.</p>
            <p>Our non-teaching staff is young and enthusiastic. We are very proud to introduce them to you.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Principal</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary">College Leadership</h2>
            </div>
            <GraduationCap className="h-10 w-10 text-accent" aria-hidden />
          </div>
          <div className="mt-8 max-w-xl">
            <TeamCard member={PRINCIPAL} />
          </div>
        </div>
      </section>

      {TEAM_SECTIONS.map((section) => (
        <section key={section.title} className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="mb-6 flex items-center gap-3">
            {section.title === "Teaching Staff" ? (
              <GraduationCap className="h-8 w-8 text-accent" aria-hidden />
            ) : section.title === "Non-Teaching Staff" ? (
              <UserRound className="h-8 w-8 text-accent" aria-hidden />
            ) : (
              <LibraryBig className="h-8 w-8 text-accent" aria-hidden />
            )}
            <h2 className="font-heading text-3xl font-bold text-primary">{section.title}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
