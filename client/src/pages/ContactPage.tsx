import { Helmet } from "react-helmet-async";
import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { api } from "../api/client";

export function ContactPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", course: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      await api.post("/enquiry", { ...form, source: "Contact page" });
      setStatus("Thank you — we will get back to you soon.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "", course: "" });
      setStep(1);
    } catch {
      setStatus("Could not send. Please email admissions.mandkecollege@gmail.com");
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — Mandke College | Pune</title>
        <meta name="description" content="Contact Mandke College Kothrud: map, phone, email, and quick enquiry form." />
      </Helmet>
      <section className="bg-gradient-to-b from-section to-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-primary md:text-5xl">Contact us</h1>
            <p className="mt-4 text-lg text-textSecondary">
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/919922965506"
                className="inline-flex items-center gap-1 font-bold text-[#25D366] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </p>
            <address className="mt-8 space-y-3 text-textSecondary not-italic">
              <p className="text-base leading-relaxed">
                47/8, Mandke Growth Centre, Paud Road,
                <br />
                Next to Ideal Colony Metro Station,
                <br />
                Kothrud, Pune – 411 038
              </p>
              <p>
                <a href="tel:+919922965506" className="font-semibold text-accent hover:underline">
                  +91 99229 65506
                </a>
                {" · "}
                <a href="tel:+919577060606" className="font-semibold text-accent hover:underline">
                  +91 9577 060606
                </a>
              </p>
              <p>
                <a href="mailto:admissions.mandkecollege@gmail.com" className="font-semibold text-accent hover:underline">
                  admissions.mandkecollege@gmail.com
                </a>
              </p>
              <p className="text-sm text-textSecondary">Office hours: Mon–Sat, 9:00 am – 5:00 pm (call to confirm holidays)</p>
            </address>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-borderSoft bg-borderSoft shadow-lift">
              <iframe
                title="College location"
                className="h-full w-full border-0"
                src="https://www.google.com/maps?q=Kothrud+Pune+Mandke&output=embed"
                loading="lazy"
              />
            </div>
          </div>

          <div id="enquiry">
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">Quick enquiry</h2>
            <p className="mt-2 text-textSecondary">Three short steps — we respond within 1–2 working days.</p>

            <div className="mt-6 flex gap-2" aria-hidden>
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1.5 flex-1 rounded-full ${step >= s ? "bg-accent" : "bg-borderSoft"}`} />
              ))}
            </div>
            <p className="mt-2 text-xs font-medium text-textSecondary">
              Step {step} of 3 — {step === 1 ? "You" : step === 2 ? "Programme" : "Message"}
            </p>

            <form onSubmit={submit} className="mt-6 space-y-5 rounded-2xl border border-borderSoft bg-white p-6 shadow-card md:p-8">
              {step === 1 ? (
                <>
                  <label className="block text-sm font-medium text-textPrimary">
                    Full name *
                    <input
                      required
                      className="mt-2 min-h-[48px] w-full rounded-btn border border-borderSoft px-4 py-3 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </label>
                  <label className="block text-sm font-medium text-textPrimary">
                    Email *
                    <input
                      required
                      type="email"
                      className="mt-2 min-h-[48px] w-full rounded-btn border border-borderSoft px-4 py-3 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </label>
                  <label className="block text-sm font-medium text-textPrimary">
                    Phone *
                    <input
                      required
                      inputMode="tel"
                      className="mt-2 min-h-[48px] w-full rounded-btn border border-borderSoft px-4 py-3 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </label>
                  <button
                    type="button"
                    className="w-full min-h-[48px] rounded-btn bg-primary py-3.5 text-base font-bold text-white"
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </button>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <label className="block text-sm font-medium text-textPrimary">
                    Course interest
                    <input
                      className="mt-2 min-h-[48px] w-full rounded-btn border border-borderSoft px-4 py-3 text-base"
                      value={form.course}
                      onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))}
                      placeholder="e.g. B.Com FY"
                    />
                  </label>
                  <label className="block text-sm font-medium text-textPrimary">
                    Subject (optional)
                    <input
                      className="mt-2 min-h-[48px] w-full rounded-btn border border-borderSoft px-4 py-3 text-base"
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      placeholder="Admissions / visit / other"
                    />
                  </label>
                  <div className="flex gap-3">
                    <button type="button" className="min-h-[48px] flex-1 rounded-btn border border-borderSoft py-3 font-semibold" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button type="button" className="min-h-[48px] flex-1 rounded-btn bg-primary py-3 font-bold text-white" onClick={() => setStep(3)}>
                      Next
                    </button>
                  </div>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <label className="block text-sm font-medium text-textPrimary">
                    Message *
                    <textarea
                      required
                      rows={4}
                      className="mt-2 w-full rounded-btn border border-borderSoft px-4 py-3 text-base"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="How can we help?"
                    />
                  </label>
                  {status ? <p className="text-sm font-medium text-primary">{status}</p> : null}
                  <div className="flex gap-3">
                    <button type="button" className="min-h-[48px] flex-1 rounded-btn border border-borderSoft py-3 font-semibold" onClick={() => setStep(2)}>
                      Back
                    </button>
                    <button type="submit" className="min-h-[48px] flex-1 rounded-btn bg-gradient-to-r from-accent to-amber-600 py-3 text-base font-bold text-white shadow-md">
                      Send enquiry
                    </button>
                  </div>
                </>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
