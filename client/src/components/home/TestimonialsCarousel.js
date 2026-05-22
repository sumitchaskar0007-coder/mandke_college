import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function extractYouTubeId(url) {
    try {
        const u = new URL(url);
        if (u.hostname.includes("youtu.be"))
            return u.pathname.slice(1) || null;
        if (u.searchParams.get("v"))
            return u.searchParams.get("v");
        const m = u.pathname.match(/\/embed\/([^/]+)/);
        return m ? m[1] : null;
    }
    catch {
        return null;
    }
}
export function TestimonialsCarousel({ items }) {
    const list = items.length ? items : [];
    if (!list.length) {
        return (_jsx("p", { className: "text-center text-textSecondary", children: "Student stories will appear here once testimonials are published." }));
    }
    return (_jsx(Swiper, { modules: [Autoplay, Pagination], spaceBetween: 24, slidesPerView: 1, loop: list.length > 1, autoplay: { delay: 6500, disableOnInteraction: true, pauseOnMouseEnter: true }, pagination: { clickable: true, dynamicBullets: true }, breakpoints: {
            640: { slidesPerView: 1.15, spaceBetween: 20 },
            900: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 2.2, spaceBetween: 28 },
        }, className: "testimonial-swiper !pb-14", children: list.map((t) => {
            const yt = t.videoUrl ? extractYouTubeId(t.videoUrl) : null;
            const thumb = yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null;
            return (_jsx(SwiperSlide, { className: "!h-auto", children: _jsxs(motion.div, { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "flex h-full flex-col overflow-hidden rounded-2xl border border-borderSoft bg-white shadow-card transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,60,143,0.12)]", children: [_jsxs("div", { className: "relative aspect-[16/9] bg-gradient-to-br from-primary/90 to-dark", children: [thumb ? (_jsx("img", { src: thumb, alt: "", className: "h-full w-full object-cover opacity-90", loading: "lazy", decoding: "async" })) : t.photo ? (_jsx("img", { src: t.photo, alt: "", className: "h-full w-full object-cover opacity-90", loading: "lazy", decoding: "async" })) : (_jsx("div", { className: "flex h-full w-full items-center justify-center text-white/40", children: _jsx(Star, { className: "h-16 w-16", "aria-hidden": true }) })), t.videoUrl ? (_jsx("a", { href: t.videoUrl, target: "_blank", rel: "noreferrer noopener", className: "absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/45", "aria-label": `Watch video testimonial from ${t.studentName}`, children: _jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg", children: _jsx(Play, { className: "ml-1 h-8 w-8 fill-current", "aria-hidden": true }) }) })) : null] }), _jsxs("div", { className: "flex flex-1 flex-col p-6 md:p-7", children: [_jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30", children: t.photo ? (_jsx("img", { src: t.photo, alt: "", className: "h-full w-full object-cover", loading: "lazy", decoding: "async" })) : (_jsx("div", { className: "flex h-full w-full items-center justify-center bg-section text-lg font-bold text-primary", children: t.studentName.charAt(0) })) }), _jsxs("div", { children: [_jsx("p", { className: "font-heading text-lg font-bold text-primary", children: t.studentName }), _jsxs("p", { className: "text-sm text-textSecondary", children: [t.course || "B.Com", t.batch ? ` · Batch ${t.batch}` : ""] }), typeof t.rating === "number" ? (_jsx("div", { className: "mt-1 flex items-center gap-1 text-amber-500", children: Array.from({ length: 5 }).map((_, i) => (_jsx(Star, { className: `h-4 w-4 ${i < Math.round(t.rating) ? "fill-current" : "text-borderSoft"}`, "aria-hidden": true }, i))) })) : null] })] }), _jsxs("blockquote", { className: "mt-4 flex-1 font-display text-lg italic leading-relaxed text-primary md:text-xl", children: ["\u201C", t.quote, "\u201D"] }), _jsx("p", { className: "mt-4 text-xs font-semibold uppercase tracking-wide text-accent", children: "Success story" })] })] }) }, t._id));
        }) }));
}
