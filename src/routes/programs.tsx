import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Sparkles, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — SYS Educational Services" },
      {
        name: "description",
        content:
          "Three flagship workshops: Graduation Planning, College & Career Prep, and Soft Skills & Leadership. Designed for Seattle high school students.",
      },
      { property: "og:title", content: "SYS Programs — Workshops for Seattle Students" },
      {
        property: "og:description",
        content:
          "Graduation Planning, College & Career Prep, and Soft Skills & Leadership workshops.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    icon: GraduationCap,
    color: "navy",
    title: "Graduation Planning",
    tag: "9th – 12th grade",
    description:
      "We help students take ownership of their high school journey with credit audits, course planning, and goal-setting that maps every year to graduation.",
    bullets: [
      "Personal credit & transcript review",
      "4-year academic roadmap",
      "Goal tracking and accountability check-ins",
    ],
  },
  {
    icon: Sparkles,
    color: "gold",
    title: "College & Career Prep",
    tag: "11th – 12th grade",
    description:
      "From the Common App to FAFSA to alternative pathways, students leave with a real plan — not just a list of dreams.",
    bullets: [
      "College applications & essays",
      "FAFSA & scholarship workshops",
      "Career exploration & informational interviews",
    ],
  },
  {
    icon: Users,
    color: "teal",
    title: "Soft Skills & Leadership",
    tag: "All grades",
    description:
      "The skills that actually move careers forward: communication, professional presence, and the confidence to lead in any room.",
    bullets: [
      "Public speaking & interview prep",
      "Professional email & networking",
      "Peer leadership and team projects",
    ],
  },
];

function Programs() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Programs</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-display text-navy leading-[1.05]">
            Three workshops. <span className="italic text-gold">One mission.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Each SYS program is designed to be delivered in schools, community centers, or virtually
            — and adapts to the specific needs of your students.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 space-y-8">
        {programs.map((p, i) => (
          <article
            key={p.title}
            className="grid md:grid-cols-12 gap-8 items-start rounded-3xl border border-border bg-card p-8 md:p-12 hover:shadow-soft transition-shadow"
          >
            <div className="md:col-span-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  p.color === "navy"
                    ? "bg-navy text-gold"
                    : p.color === "gold"
                      ? "bg-gold text-navy"
                      : "bg-teal text-cream"
                }`}
              >
                <p.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-teal font-semibold">
                Workshop 0{i + 1} · {p.tag}
              </p>
              <h2 className="mt-2 text-3xl font-display text-navy">{p.title}</h2>
            </div>

            <div className="md:col-span-8">
              <p className="text-foreground/75 leading-relaxed text-lg">{p.description}</p>
              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-5 py-2.5 text-sm font-semibold hover:bg-navy/90 transition-all hover:gap-3"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-3xl bg-navy text-cream p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl">Not sure which program fits?</h2>
            <p className="mt-3 text-cream/80 max-w-xl mx-auto">
              Most schools start with a one-day pilot. We'll help you figure out where to begin.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold text-navy px-6 py-3 text-sm font-bold hover:bg-gold/90 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
