import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { api } from "../api/client";

const INITIAL = {
  fullName: "",
  dob: "",
  phone: "",
  email: "",
  parentPhone: "",
  address: "",
  qualification: "",
  percentage: "",
  course: "B.Com",
  year: "",
  message: "",
  source: "Website",
};

export function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function update<K extends keyof typeof INITIAL>(k: K, v: (typeof INITIAL)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit() {
    setErr(null);
    setSending(true);
    try {
      await api.post("/admissions", {
        ...form,
        percentage: form.percentage ? Number(form.percentage) : undefined,
      });
      setDone(true);
    } catch {
      setErr("Something went wrong. Please try again or email admissions.mandkecollege@gmail.com");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Admissions — Mandke College</title>
      </Helmet>
      <section className="bg-section py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-heading text-4xl font-bold text-primary">Admissions 2026–27</h1>
          <p className="mt-4 text-textSecondary">
            Apply online or use our Google Form. For help, write to{" "}
            <a className="font-medium text-accent" href="mailto:admissions.mandkecollege@gmail.com">
              admissions.mandkecollege@gmail.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-btn border border-borderSoft bg-white px-4 py-2 text-sm font-semibold text-primary shadow-card"
            >
              Apply via Google Form
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        {done ? (
          <div className="rounded-card border border-borderSoft bg-white p-8 text-center shadow-card">
            <p className="text-lg font-semibold text-primary">Application received!</p>
            <p className="mt-2 text-textSecondary">We will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="mb-8 flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full ${step >= s ? "bg-accent" : "bg-borderSoft"}`}
                  aria-hidden
                />
              ))}
            </div>

            {step === 1 ? (
              <div className="space-y-4 rounded-card border border-borderSoft bg-white p-6 shadow-card">
                <h2 className="font-heading text-xl font-semibold text-primary">Personal information</h2>
                <label className="block text-sm">
                  Full name *
                  <input
                    required
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Date of birth
                  <input
                    type="date"
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.dob}
                    onChange={(e) => update("dob", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Phone *
                  <input
                    required
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Email *
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Parent / guardian phone
                  <input
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.parentPhone}
                    onChange={(e) => update("parentPhone", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Address
                  <textarea
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    rows={3}
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                  />
                </label>
                <button
                  type="button"
                  className="w-full rounded-btn bg-primary py-3 font-semibold text-white"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-4 rounded-card border border-borderSoft bg-white p-6 shadow-card">
                <h2 className="font-heading text-xl font-semibold text-primary">Academic information</h2>
                <label className="block text-sm">
                  Last qualification
                  <input
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.qualification}
                    onChange={(e) => update("qualification", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Percentage
                  <input
                    type="number"
                    min={0}
                    max={100}
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.percentage}
                    onChange={(e) => update("percentage", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Year
                  <input
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.year}
                    onChange={(e) => update("year", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Course applied
                  <select
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.course}
                    onChange={(e) => update("course", e.target.value)}
                  >
                    <option value="B.Com">B.Com</option>
                  </select>
                </label>
                <div className="flex gap-3">
                  <button type="button" className="flex-1 rounded-btn border border-borderSoft py-3" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button type="button" className="flex-1 rounded-btn bg-primary py-3 font-semibold text-white" onClick={() => setStep(3)}>
                    Next
                  </button>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-4 rounded-card border border-borderSoft bg-white p-6 shadow-card">
                <h2 className="font-heading text-xl font-semibold text-primary">Additional</h2>
                <label className="block text-sm">
                  Message
                  <textarea
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  How did you hear about us?
                  <input
                    className="mt-1 w-full rounded-btn border border-borderSoft px-3 py-2"
                    value={form.source}
                    onChange={(e) => update("source", e.target.value)}
                  />
                </label>
                {err ? <p className="text-sm text-red-600">{err}</p> : null}
                <div className="flex gap-3">
                  <button type="button" className="flex-1 rounded-btn border border-borderSoft py-3" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={sending}
                    className="flex-1 rounded-btn bg-accent py-3 font-semibold text-white disabled:opacity-60"
                    onClick={() => void submit()}
                  >
                    {sending ? "Submitting…" : "Submit application"}
                  </button>
                </div>
              </div>
            ) : null}
          </>
        )}
      </section>
    </>
  );
}
