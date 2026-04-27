import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sys-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="SYS — Shape Your Success logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-lg tracking-tight text-navy">
            SYS<span className="text-gold"> · </span>
            <span className="hidden sm:inline text-foreground/70 font-sans text-sm font-medium">
              Shape Your Success
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-navy transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-navy rounded-md bg-cream" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-navy text-cream px-5 py-2 text-sm font-semibold hover:bg-navy/90 transition-colors"
          >
            Book a Workshop
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80"
                activeProps={{ className: "py-2 text-base font-semibold text-navy" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-navy text-cream px-5 py-2.5 text-sm font-semibold"
            >
              Book a Workshop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
