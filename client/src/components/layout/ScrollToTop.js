import { jsx as _jsx } from "react/jsx-runtime";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
export function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    if (!visible)
        return null;
    return (_jsx("button", { type: "button", className: "fixed bottom-[5.75rem] left-5 z-[55] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-card ring-1 ring-borderSoft transition hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:bottom-24 md:left-auto md:right-5", "aria-label": "Scroll to top", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), children: _jsx(ChevronUp, { className: "h-6 w-6" }) }));
}
