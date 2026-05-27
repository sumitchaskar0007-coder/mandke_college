import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logoUrl from "../../assets/logo.png";
import { NAV_ITEMS } from "../../data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2 lg:grid-cols-[190px_1fr_190px] lg:py-3">
        <Link
          to="/"
          className="shrink-0 lg:flex lg:justify-start"
          onClick={() => setOpen(false)}
          aria-label="Smt. Sudhatai Mandke College home"
        >
          <img
            src={logoUrl}
            alt="Smt. Sudhatai Mandke College"
            className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
        </Link>
        <Link to="/" className="min-w-0 px-2 text-center sm:px-4" onClick={() => setOpen(false)}>
          <span className="block text-[10px] font-semibold leading-tight text-primary sm:text-sm">
            Mandke Human Happiness Foundation&apos;s
          </span>
          <span className="block font-heading text-lg font-extrabold uppercase leading-tight tracking-normal text-primary sm:text-2xl lg:text-3xl">
            SMT. SUDHATAI MANDKE COLLEGE
          </span>
          <span className="mx-auto block max-w-[42rem] text-[9px] font-medium leading-snug text-textSecondary sm:text-xs">
            Affiliated to Savitribai Phule Pune University - ID No. PU/PN/ASC/178-2002
          </span>
          <span className="block animate-blink text-[9px] font-extrabold leading-snug text-yellow-500 [text-shadow:0_0_10px_rgba(234,179,8,0.75)] sm:text-sm">
            20+ Years of Excellence in Education
          </span>
        </Link>

        <div className="flex justify-end">
          <div className="hidden overflow-hidden rounded-btn border border-primary/15 bg-white text-left shadow-card lg:block">
            <div className="flex items-center gap-3 border-b border-borderSoft px-3 py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white">
                NAAC
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-primary">NAAC Accredited</p>
                <p className="text-[10px] font-semibold text-textSecondary">Credential</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-primary bg-white text-primary shadow-sm transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="hidden min-h-[44px] flex-wrap items-center justify-center gap-x-1 text-xs lg:flex">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.to} className="group relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex min-h-[44px] items-center gap-1 px-2.5 font-bold text-white transition hover:bg-white/10 ${isActive ? "bg-white/15" : ""
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </NavLink>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-b-btn border border-borderSoft bg-white py-2 opacity-0 shadow-lift transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2.5 text-sm font-semibold text-textSecondary transition hover:bg-section hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex min-h-[44px] items-center gap-1 px-2.5 font-bold text-white transition hover:bg-white/10 ${isActive ? "bg-white/15" : ""
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              )
            )}
          </nav>

          <div
            id="mobile-navigation"
            className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out lg:hidden ${open ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <nav className="grid max-h-[65vh] gap-1 overflow-y-auto py-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-btn px-4 py-3 text-sm font-bold transition ${isActive ? "bg-white text-primary" : "text-white hover:bg-white/10"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                  </NavLink>
                  {item.dropdown ? (
                    <div className="ml-4 mt-1 grid gap-1 border-l border-white/20 pl-3">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="rounded-btn px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/10"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-btn bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-md"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
