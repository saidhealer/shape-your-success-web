import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SYS — Book a Workshop" },
      {
        name: "description",
        content:
          "Get in touch with SYS Educational Services to bring mentorship workshops to your Seattle-area school. Call 206-591-3788 or email saidomermohammed@gmail.com.",
      },
      { property: "og:title", content: "Contact SYS Educational Services" },
      {
        property: "og:description",
        content: "Book a workshop, ask a question, or partner with us.",
      },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        if (iss.path[0]) fieldErrors[iss.path[0] as string] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Contact</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-display text-navy leading-[1.05]">
            Let's <span className="italic text-gold">talk.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
            Whether you're a school administrator, parent, student, or community partner — we'd love
            to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-navy text-cream p-6">
            <h3 className="font-display text-2xl text-gold">Reach us directly</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-cream/60 text-xs uppercase tracking-wider">Call</div>
                  <a href="tel:2065913788" className="text-cream hover:text-gold transition-colors text-base">
                    206-591-3788
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-cream/60 text-xs uppercase tracking-wider">Email</div>
                  <a
                    href="mailto:saidomermohammed@gmail.com"
                    className="text-cream hover:text-gold transition-colors text-base break-all"
                  >
                    saidomermohammed@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-cream/60 text-xs uppercase tracking-wider">Based in</div>
                  <div className="text-cream text-base">Seattle, Washington</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h4 className="font-display text-lg text-navy">Booking a workshop?</h4>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
              Include your school name, approximate student count, and any dates you have in mind.
              We'll get back to you within 2 business days.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
              <h3 className="mt-4 font-display text-2xl text-navy">Thanks — message received.</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Said and the SYS team will get back to you soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-navy underline underline-offset-4 hover:text-gold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="you@school.org"
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
                  placeholder="Tell us a bit about your school or how we can help..."
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-3 text-sm font-semibold hover:bg-navy/90 transition-all hover:gap-3"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
