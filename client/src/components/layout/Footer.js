import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/client";
import logoUrl from "../../assets/logo.png";
const quick = [
    { label: "About", href: "/about" },
    { label: "B.Com Program", href: "/commerce" },
    { label: "Faculty", href: "/about/faculty" },
    { label: "Announcements", href: "/announcements" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
];
export function Footer() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState(null);
    async function onNewsletter(e) {
        e.preventDefault();
        setMsg(null);
        try {
            await api.post("/newsletter", { email });
            setMsg("Thanks for subscribing!");
            setEmail("");
        }
        catch {
            setMsg("Could not subscribe. Try again later.");
        }
    }
    return (_jsxs("footer", { className: "bg-primary text-white", children: [_jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-start gap-4", children: [_jsx("img", { src: logoUrl, alt: "Smt. Sudhatai Mandke College", className: "h-28 w-24 shrink-0 rounded-btn bg-white object-contain shadow-lg sm:h-32 sm:w-28" }), _jsxs("div", { children: [_jsx("p", { className: "font-display text-lg font-semibold text-accent", children: "Smt. Sudhatai Mandke College" }), _jsx("p", { className: "mt-2 text-sm text-white/80", children: "Your Goal | Our Mission - Better You" })] })] }), _jsx("p", { className: "mt-4 inline-block rounded-badge border border-amber-400/50 bg-white/10 px-3 py-1 text-xs text-amber-200", children: "Celebrating 25 Years - 2002-2027" }), _jsx("p", { className: "mt-6 text-xs leading-relaxed text-white/65", children: "Trusted by families across Pune for NAAC-accredited B.Com, SPPU affiliation, and a placement-focused culture." })] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: "Quick links" }), _jsx("ul", { className: "mt-3 space-y-2 text-sm text-white/80", children: quick.map((l) => (_jsx("li", { children: _jsx(Link, { to: l.href, className: "hover:text-accent", children: l.label }) }, l.href))) })] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: "Contact" }), _jsxs("address", { className: "mt-3 space-y-2 text-sm not-italic text-white/80", children: [_jsxs("p", { children: ["47/8, Mandke Growth Centre, Paud Road,", _jsx("br", {}), "Next to Ideal Colony Metro Station,", _jsx("br", {}), "Kothrud, Pune - 411 038"] }), _jsxs("p", { children: [_jsx("a", { href: "tel:+919922965506", className: "hover:text-accent", children: "+91 99229 65506" }), " | ", _jsx("a", { href: "tel:+919577060606", className: "hover:text-accent", children: "+91 9577 060606" })] }), _jsx("p", { children: _jsx("a", { href: "mailto:admissions.mandkecollege@gmail.com", className: "hover:text-accent", children: "admissions.mandkecollege@gmail.com" }) })] })] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: "Newsletter" }), _jsx("p", { className: "mt-2 text-sm text-white/70", children: "Get updates on admissions and events." }), _jsxs("form", { onSubmit: onNewsletter, className: "mt-3 flex max-w-sm flex-col gap-2", children: [_jsx("label", { htmlFor: "newsletter-email", className: "sr-only", children: "Email" }), _jsx("input", { id: "newsletter-email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email address", className: "min-h-[44px] rounded-btn border border-white/25 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" }), _jsx("button", { type: "submit", className: "min-h-[44px] rounded-btn bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-95", children: "Subscribe" }), msg ? _jsx("p", { className: "text-xs text-white/70", children: msg }) : null] })] })] }), _jsx("div", { className: "border-t border-white/15", children: _jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Mandke College | NAAC Accredited | Affiliated to SPPU | Created by", " ", _jsx("a", { href: "", target: "_blank", rel: "noreferrer", className: "font-semibold text-accent hover:underline" })] }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx("a", { href: "https://instagram.com", className: "min-h-[44px] hover:text-accent", target: "_blank", rel: "noreferrer", children: "Instagram" }), _jsx("a", { href: "https://linkedin.com", className: "min-h-[44px] hover:text-accent", target: "_blank", rel: "noreferrer", children: "LinkedIn" }), _jsx("a", { href: "https://youtube.com", className: "min-h-[44px] hover:text-accent", target: "_blank", rel: "noreferrer", children: "YouTube" }), _jsx("a", { href: "https://facebook.com", className: "min-h-[44px] hover:text-accent", target: "_blank", rel: "noreferrer", children: "Facebook" })] })] }) })] }));
}
