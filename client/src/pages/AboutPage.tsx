import { Helmet } from "react-helmet-async";
import { BookOpen, CheckCircle2, HeartHandshake, Target, Users } from "lucide-react";
import buildingImage from "../assets/images/building.png";

const COLLEGE_PARAGRAPHS = [
  "Smt. Sudhatai Mandke College of Commerce was established in 2002 by the Mandke Human Happiness Foundation, Pune; by Shri. Sudhir Mandke, a leading promoter and builder of Pune. The college is affiliated to Savitribai Phule Pune University providing graduate degree in B.Com, approved by AICTE providing graduation in BCA & BBA and is also approved by the Govt. of Maharashtra.",
  "A senior college, the main aim here is to create self-assured global citizens who will be confident and highly eligible to take up jobs or venture into self-employment.",
  "Besides academic excellence, the college also provides students with an environment conducive for overall development of their personality. The college through its various activities viz. NSS, Soft Skills, Earn & Learn, Career Guidance and Counseling, Placement Cell etc. encourage students to showcase their talent in various fields and help them become well rounded individuals.",
];

const SUDHATAI_PARAGRAPHS = [
  "Smt. Sudhatai Mandke, a name that needs no introduction in the education fraternity. A highly respected teacher of Hindi & Marathi at the Guru Nanak High School, Pune. She dedicated 30 years of her life not only helping her students gain proficiency in these languages, but also taught them the ways of life and above all to become a good human being.",
  "Her life inspired many. She has done an abundance of social work through the Mahila Arthik Vikas Mahamandal, to help women empower themselves by teaching them various Arts & Crafts and educating them to be self-sufficient. She was the Vice-president of the Marathi Natya Parishad and helped the Marathi Theater industry to grow in more than one way. She was a member of the core committee for the Hindi Rashtra Bhasha Exam, which conducts nationwide examination for Hindi language proficiency.",
  "A people person, she always encouraged those around her to be successful, and most importantly good individuals. It was to keep this amazing spirit alive, that the Mandke Group through its Mandke Human Happiness Foundation, established the Smt. Sudhatai Mandke College in 2002.",
];

const FOREWORD_PARAGRAPHS = [
  "With great pleasure and privilege I extend my best wishes to you all. Smt. Sudhatai Mandke College, Pune, being affiliated to Savitribai Phule Pune University and approved by AICTE, conducts various courses designed by the university at undergraduate level.",
  "The qualified and dedicated team of faculty and administrative staff work hard each day to ensure that our students have an enriching and holistic learning experience. College assures to nurture students to help them enhance their skills and potential not only through academic learning, but also by participating in extracurricular activities. We ensure to inculcate entrepreneurial and leadership skills in our students.",
  "We believe that an institution like ours can sculpt students into well-rounded individuals ready to face the myriad of challenges with confidence and zest.",
  "We aspire to acquire excellence by way of introducing new areas of commerce education and providing support facilities to students.",
];

const CORE_VALUES = [
  "To create self-assured global citizens who will be confident and highly eligible.",
  "To encourage team work, hard work and integrity in students by preparing them to take up jobs or venture into self-employment.",
  "To provide students with an environment which is conducive for overall development of their personality.",
];

function TextBlock({ title, label, children }: { title: string; label?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
        {label ? <p className="text-sm font-bold uppercase tracking-widest text-accent">{label}</p> : null}
        <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">{title}</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-textSecondary md:text-lg">{children}</div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Smt. Sudhatai Mandke College of Commerce</title>
        <meta
          name="description"
          content="About Smt. Sudhatai Mandke College of Commerce, Sudhatai Mandke, Principal's Foreword, Vision, Mission and Core Values."
        />
      </Helmet>

      <section className="bg-section py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">About</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
              Smt. Sudhatai Mandke College of Commerce
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-textSecondary">
              A senior college established in 2002 by Mandke Human Happiness Foundation, Pune, dedicated to commerce
              education, confidence, employability, and all-round student development.
            </p>
          </div>
          <figure className="overflow-hidden rounded-btn border border-borderSoft bg-white shadow-lift">
            <img src={buildingImage} alt="Smt. Sudhatai Mandke College Growth Centre" className="h-full max-h-[420px] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm font-semibold text-textSecondary">Growth Centre photo</figcaption>
          </figure>
        </div>
      </section>

      <TextBlock title="About Smt. Sudhatai Mandke College of Commerce">
        {COLLEGE_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TextBlock>

      <TextBlock title="Smt. Sudhatai Mandke" label="Teacher | Inspirator | Philanthropist | Humanitarian">
        {SUDHATAI_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TextBlock>

      <TextBlock title="Principal's Foreword" label="Dear Students">
        {FOREWORD_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="pt-3 font-semibold text-primary">
          <p>Sincerely,</p>
          <p className="mt-2">Dr. Ambadas T. Bhosale</p>
          <p>Principal</p>
        </div>
      </TextBlock>

      <section className="bg-section py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 lg:grid-cols-3">
          <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card">
            <Target className="h-9 w-9 text-accent" aria-hidden />
            <h2 className="mt-4 font-heading text-2xl font-bold text-primary">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-textSecondary">
              To serve the society particularly in the field of need based education; help individuals maximize their
              potential and in turn make the society better as a whole.
            </p>
          </div>
          <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card lg:col-span-2">
            <BookOpen className="h-9 w-9 text-accent" aria-hidden />
            <h2 className="mt-4 font-heading text-2xl font-bold text-primary">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-textSecondary">
              We are committed to delivering quality higher education that nurtures moral values, intellectual curiosity,
              and physical well-being. Our goal is to create a supportive and dynamic learning environment that empowers
              students with the skills, confidence, and guidance needed for career success. Through strong industry
              partnerships, innovative teaching practices, and a focus on holistic development, we prepare our students and
              staff to achieve global recognition and thrive in an ever-evolving world.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Core Values</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Values That Guide Us</h2>
            </div>
            <HeartHandshake className="h-10 w-10 text-accent" aria-hidden />
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <li key={value} className="flex gap-3 rounded-btn bg-section p-4 text-textSecondary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
