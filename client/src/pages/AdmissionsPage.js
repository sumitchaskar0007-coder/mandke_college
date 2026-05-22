import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    const [err, setErr] = useState(null);
    function update(k, v) {
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
        }
        catch {
            setErr("Something went wrong. Please try again or email admissions.mandkecollege@gmail.com");
        }
        finally {
            setSending(false);
        }
    }
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Admissions \u2014 Mandke College" }) }), _jsx("section", { className: "bg-section py-16", children: _jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [_jsx("h1", { className: "font-heading text-4xl font-bold text-primary", children: "Admissions 2026\u201327" }), _jsxs("p", { className: "mt-4 text-textSecondary", children: ["Apply online or use our Google Form. For help, write to", " ", _jsx("a", { className: "font-medium text-accent", href: "mailto:admissions.mandkecollege@gmail.com", children: "admissions.mandkecollege@gmail.com" }), "."] }), _jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: _jsx("a", { href: "https://forms.google.com", target: "_blank", rel: "noreferrer", className: "rounded-btn border border-borderSoft bg-white px-4 py-2 text-sm font-semibold text-primary shadow-card", children: "Apply via Google Form" }) })] }) }), _jsx("section", { className: "mx-auto max-w-3xl px-4 py-12", children: done ? (_jsxs("div", { className: "rounded-card border border-borderSoft bg-white p-8 text-center shadow-card", children: [_jsx("p", { className: "text-lg font-semibold text-primary", children: "Application received!" }), _jsx("p", { className: "mt-2 text-textSecondary", children: "We will contact you shortly." })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "mb-8 flex gap-2", children: [1, 2, 3].map((s) => (_jsx("div", { className: `h-2 flex-1 rounded-full ${step >= s ? "bg-accent" : "bg-borderSoft"}`, "aria-hidden": true }, s))) }), step === 1 ? (_jsxs("div", { className: "space-y-4 rounded-card border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-xl font-semibold text-primary", children: "Personal information" }), _jsxs("label", { className: "block text-sm", children: ["Full name *", _jsx("input", { required: true, className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.fullName, onChange: (e) => update("fullName", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Date of birth", _jsx("input", { type: "date", className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.dob, onChange: (e) => update("dob", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Phone *", _jsx("input", { required: true, className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.phone, onChange: (e) => update("phone", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Email *", _jsx("input", { required: true, type: "email", className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.email, onChange: (e) => update("email", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Parent / guardian phone", _jsx("input", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.parentPhone, onChange: (e) => update("parentPhone", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Address", _jsx("textarea", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", rows: 3, value: form.address, onChange: (e) => update("address", e.target.value) })] }), _jsx("button", { type: "button", className: "w-full rounded-btn bg-primary py-3 font-semibold text-white", onClick: () => setStep(2), children: "Next" })] })) : null, step === 2 ? (_jsxs("div", { className: "space-y-4 rounded-card border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-xl font-semibold text-primary", children: "Academic information" }), _jsxs("label", { className: "block text-sm", children: ["Last qualification", _jsx("input", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.qualification, onChange: (e) => update("qualification", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Percentage", _jsx("input", { type: "number", min: 0, max: 100, className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.percentage, onChange: (e) => update("percentage", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Year", _jsx("input", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.year, onChange: (e) => update("year", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["Course applied", _jsx("select", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.course, onChange: (e) => update("course", e.target.value), children: _jsx("option", { value: "B.Com", children: "B.Com" }) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { type: "button", className: "flex-1 rounded-btn border border-borderSoft py-3", onClick: () => setStep(1), children: "Back" }), _jsx("button", { type: "button", className: "flex-1 rounded-btn bg-primary py-3 font-semibold text-white", onClick: () => setStep(3), children: "Next" })] })] })) : null, step === 3 ? (_jsxs("div", { className: "space-y-4 rounded-card border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("h2", { className: "font-heading text-xl font-semibold text-primary", children: "Additional" }), _jsxs("label", { className: "block text-sm", children: ["Message", _jsx("textarea", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", rows: 4, value: form.message, onChange: (e) => update("message", e.target.value) })] }), _jsxs("label", { className: "block text-sm", children: ["How did you hear about us?", _jsx("input", { className: "mt-1 w-full rounded-btn border border-borderSoft px-3 py-2", value: form.source, onChange: (e) => update("source", e.target.value) })] }), err ? _jsx("p", { className: "text-sm text-red-600", children: err }) : null, _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { type: "button", className: "flex-1 rounded-btn border border-borderSoft py-3", onClick: () => setStep(2), children: "Back" }), _jsx("button", { type: "button", disabled: sending, className: "flex-1 rounded-btn bg-accent py-3 font-semibold text-white disabled:opacity-60", onClick: () => void submit(), children: sending ? "Submitting…" : "Submit application" })] })] })) : null] })) })] }));
}
