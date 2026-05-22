import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TEXT =
  "🎓 Admissions Open 2026-27 for B.Com FY / SY / TY | Apply Now → • NAAC Accredited | SPPU Affiliated | Silver Jubilee 2027 •";

export function Marquee() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const saved =
      window.innerWidth < 768 ? window.localStorage.getItem("marquee-dismiss-mobile") === "1" : false;
    setDismissed(saved);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className="relative z-[60] flex items-center gap-3 border-b border-borderSoft bg-white px-3 py-2 text-sm text-primary md:px-4"
      role="region"
      aria-label="Important announcements"
    >
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee">
          <span className="pr-16 font-semibold">{TEXT}</span>
          <span className="pr-16 font-semibold" aria-hidden>
            {TEXT}
          </span>
        </div>
      </div>
      <Link
        to="/admissions"
        className="hidden shrink-0 rounded-btn bg-accent px-3 py-1.5 text-sm font-semibold text-white md:inline-block"
      >
        Apply Now
      </Link>
      <button
        type="button"
        className="shrink-0 rounded-badge p-2 text-primary md:hidden"
        aria-label="Dismiss announcement bar"
        onClick={() => {
          window.localStorage.setItem("marquee-dismiss-mobile", "1");
          setDismissed(true);
        }}
      >
        ×
      </button>
    </div>
  );
}
