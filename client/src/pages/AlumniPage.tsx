import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, Heart, Briefcase } from "lucide-react";

const ALUMNI_STATS = [
    { icon: Users, label: "Alumni Network", value: "5000+" },
    { icon: Briefcase, label: "Career Outcomes", value: "95%+" },
    { icon: Award, label: "Success Stories", value: "100+" },
    { icon: Heart, label: "Giving Back", value: "Active" },
];

const TESTIMONIALS = [
    {
        name: "Rahul Sharma",
        role: "Finance Manager, HDFC Bank",
        batch: "2015-2018",
        quote:
            "Mandke College taught me not just commerce theory, but practical skills that helped me excel in banking. The placement support was exceptional.",
    },
    {
        name: "Priya Deshmukh",
        role: "Entrepreneur, Digital Marketing Startup",
        batch: "2012-2015",
        quote:
            "The faculty believed in us and provided mentorship that went beyond academics. That confidence helped me start my own venture.",
    },
    {
        name: "Amit Joshi",
        role: "Senior Analyst, EY",
        batch: "2018-2021",
        quote:
            "From day one, Mandke emphasized industry-readiness. The projects and internships gave us real-world experience that employers value.",
    },
];

export function AlumniPage() {
    return (
        <>
            <Helmet>
                <title>Alumni — Mandke College | Success Stories & Network</title>
                <meta
                    name="description"
                    content="Join the Mandke College Alumni network. Discover success stories, career paths, and ways to give back to our community since 2002."
                />
            </Helmet>

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#152a66] to-dark py-20 text-white md:py-28">
                <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-90" />
                <div className="relative mx-auto max-w-6xl px-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Community</p>
                    <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        Mandke College Alumni
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                        Over 5000 commerce professionals across industries, connected by their Mandke journey. Stay in touch, grow together, and
                        give back to the next generation.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href="#stories"
                            className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:brightness-110"
                        >
                            Read success stories
                        </a>
                        <a
                            href="#network"
                            className="inline-flex min-h-[44px] items-center rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold backdrop-blur-sm hover:bg-white/25"
                        >
                            Join network
                        </a>
                    </div>
                </div>
            </section>

            {/* Alumni Stats */}
            <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-widest text-accent">By The Numbers</p>
                    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
                        A thriving alumni ecosystem
                    </h2>
                </motion.div>
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {ALUMNI_STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,60,143,0.14)] md:p-8"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15">
                                    <Icon className="h-7 w-7 text-accent" aria-hidden />
                                </div>
                                <p className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">{stat.value}</p>
                                <p className="mt-2 text-base text-textSecondary">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Success Stories */}
            <section id="stories" className="bg-section py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-accent">Pathways</p>
                        <h2 className="mt-3 font-heading text-3xl font-bold text-primary md:text-4xl">Where Mandke alumni are today</h2>
                        <p className="mt-4 text-lg text-textSecondary">
                            From banking and consulting to entrepreneurship and education — Mandke alumni lead across sectors.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.article
                                key={t.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card transition hover:shadow-lg md:p-8"
                            >
                                <p className="text-sm font-semibold text-accent uppercase tracking-widest">{t.batch}</p>
                                <blockquote className="mt-4 italic text-textSecondary">&ldquo;{t.quote}&rdquo;</blockquote>
                                <div className="mt-6 flex items-end justify-between">
                                    <div>
                                        <p className="font-semibold text-primary">{t.name}</p>
                                        <p className="text-sm text-textSecondary">{t.role}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Network */}
            <section id="network" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
                <div className="rounded-3xl border border-borderSoft bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-12 lg:p-16">
                    <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Join the network</h2>
                    <p className="mt-4 max-w-2xl text-lg text-textSecondary">
                        Stay updated with alumni events, mentorship opportunities, and ways to connect with batch mates. Your Mandke journey
                        continues.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn bg-gradient-to-r from-accent to-amber-600 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:brightness-105">
                            Alumni Registration
                        </button>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn border-2 border-primary px-8 py-3.5 text-base font-bold text-primary hover:bg-primary/5"
                        >
                            LinkedIn Page
                        </a>
                    </div>
                </div>
            </section>

            {/* Get Involved */}
            <section className="bg-section py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-center font-heading text-3xl font-bold text-primary md:text-4xl">Get involved</h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Mentor",
                                desc: "Guide current students with career insights and industry perspectives.",
                                icon: "🎓",
                            },
                            {
                                title: "Hire",
                                desc: "Access our talent pool of commerce professionals for recruitment.",
                                icon: "💼",
                            },
                            {
                                title: "Give Back",
                                desc: "Support scholarships and campus development initiatives.",
                                icon: "❤️",
                            },
                        ].map((item) => (
                            <div key={item.title} className="rounded-2xl border border-borderSoft bg-white p-6 shadow-card md:p-8">
                                <p className="text-4xl">{item.icon}</p>
                                <h3 className="mt-4 font-heading text-xl font-bold text-primary">{item.title}</h3>
                                <p className="mt-2 text-textSecondary">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            to="/contact"
                            className="inline-flex min-h-[48px] items-center justify-center rounded-btn border-2 border-primary px-8 py-3.5 text-base font-bold text-primary hover:bg-primary/5"
                        >
                            Connect with us
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-20 text-white md:py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-dark to-accent" />
                <div className="relative mx-auto max-w-4xl px-4 text-center">
                    <h2 className="font-heading text-3xl font-bold md:text-4xl">Your Mandke story matters</h2>
                    <p className="mt-4 text-lg text-white/90">Share how the college shaped your career and inspire the next generation of Mandke students.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg">
                            Share Your Story
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
