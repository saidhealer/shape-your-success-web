import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/sys-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream/90 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="SYS — Shape Your Success logo"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-cream/20"
            />
            <span className="font-display text-lg text-cream">SYS Educational Services</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Helping high school students shape their future through mentorship, academic planning,
            and community.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/programs" className="hover:text-gold transition-colors">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-gold" />
              <a href="tel:2065913788" className="hover:text-gold transition-colors">206-591-3788</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-gold" />
              <a href="mailto:info@sysmentors.com" className="hover:text-gold transition-colors">
                info@sysmentors.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold" />
              <span>Seattle, Washington</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-cream/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} SYS Educational Services. All rights reserved.</span>
          <span>Shape Your Success — Seattle, WA</span>
        </div>
      </div>
    </footer>
  );
}
