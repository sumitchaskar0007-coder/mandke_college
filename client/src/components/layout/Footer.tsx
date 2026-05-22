import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
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
  const [msg, setMsg] = useState<string | null>(null);

  async function onNewsletter(e: FormEvent) {
    e.preventDefault();
    setMsg(null);
    try {
      await api.post("/newsletter", { email });
      setMsg("Thanks for subscribing!");
      setEmail("");
    } catch {
      setMsg("Could not subscribe. Try again later.");
    }
  }

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-start gap-4">
            <img
              src={logoUrl}
              alt="Smt. Sudhatai Mandke College"
              className="h-28 w-24 shrink-0 rounded-btn bg-white object-contain shadow-lg sm:h-32 sm:w-28"
            />
            <div>
              <p className="font-display text-lg font-semibold text-accent">Smt. Sudhatai Mandke College</p>
              <p className="mt-2 text-sm text-white/80">Your Goal | Our Mission - Better You</p>
            </div>
          </div>
          <p className="mt-4 inline-block rounded-badge border border-amber-400/50 bg-white/10 px-3 py-1 text-xs text-amber-200">
            Celebrating 25 Years - 2002-2027
          </p>
          <p className="mt-6 text-xs leading-relaxed text-white/65">
            Trusted by families across Pune for NAAC-accredited B.Com, SPPU affiliation, and a placement-focused culture.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {quick.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-white/80">
            <p>
              47/8, Mandke Growth Centre, Paud Road,
              <br />
              Next to Ideal Colony Metro Station,
              <br />
              Kothrud, Pune - 411 038
            </p>
            <p>
              <a href="tel:+919922965506" className="hover:text-accent">
                +91 99229 65506
              </a>
              {" | "}
              <a href="tel:+919577060606" className="hover:text-accent">
                +91 9577 060606
              </a>
            </p>
            <p>
              <a href="mailto:admissions.mandkecollege@gmail.com" className="hover:text-accent">
                admissions.mandkecollege@gmail.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="font-semibold text-white">Newsletter</p>
          <p className="mt-2 text-sm text-white/70">Get updates on admissions and events.</p>
          <form onSubmit={onNewsletter} className="mt-3 flex max-w-sm flex-col gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="min-h-[44px] rounded-btn border border-white/25 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
            <button
              type="submit"
              className="min-h-[44px] rounded-btn bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
            >
              Subscribe
            </button>
            {msg ? <p className="text-xs text-white/70">{msg}</p> : null}
          </form>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Mandke College | NAAC Accredited | Affiliated to SPPU | Created by{" "}
            <a href="" target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">

            </a>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://instagram.com" className="min-h-[44px] hover:text-accent" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" className="min-h-[44px] hover:text-accent" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://youtube.com" className="min-h-[44px] hover:text-accent" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://facebook.com" className="min-h-[44px] hover:text-accent" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
