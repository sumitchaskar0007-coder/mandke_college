import { Outlet, Link } from "react-router-dom";
import { Marquee } from "./Marquee";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";
import { StickySupportDock } from "./StickySupportDock";
import undertakingUrl from "../../assets/pdf/undertaking.pdf?url";

export function MarketingLayout() {
  return (
    <div className="min-h-screen bg-white text-textPrimary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-card"
      >
        Skip to main content
      </a>
      <Marquee />
      <Navbar />
      <main id="main-content" className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <Link
        to="/admissions"
        className="fixed right-0 top-1/2 z-[55] hidden -translate-y-1/2 [writing-mode:vertical-rl] rounded-l-btn bg-red-600 px-4 py-8 text-sm font-bold text-white shadow-lg md:inline-flex"
      >
        Apply Now
      </Link>
      <Link
        to="/contact"
        className="fixed right-0 top-[72%] z-[55] hidden -translate-y-1/2 [writing-mode:vertical-rl] rounded-l-btn bg-lime-300 px-4 py-8 text-sm font-bold text-black shadow-lg md:inline-flex"
      >
        Suggestion Link
      </Link>
      <a
        href={undertakingUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed left-0 top-[58%] z-[55] hidden -translate-y-1/2 [writing-mode:vertical-rl] rounded-r-btn bg-[#3fa9f5] px-4 py-7 text-sm font-bold text-white shadow-lg md:inline-flex"
      >
        UGC Undertaking
      </a>
      <WhatsAppButton />
      <StickySupportDock />
    </div>
  );
}
