import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  School,
  Drama,
  Briefcase,
  Compass,
  MessageCircleHeart,
} from "lucide-react";

const pathway = [
  {
    grade: "9th Grade",
    title: "Planning + Class Mapping",
    body: "Build a 4-year plan, understand graduation requirements, and start tracking GPA from day one.",
  },
  {
    grade: "10–11th Grade",
    title: "Running Start, Honors & Career Paths",
    body: "Explore AP, IB, Honors, CTE, and Running Start tracks like nursing or computer science at Seattle Central.",
  },
  {
    grade: "12th Grade",
    title: "College Apps & Scholarships",
    body: "Common App, FAFSA, fee waivers, scholarships, and resume + LinkedIn building — every deadline covered.",
  },
  {
    grade: "Post-Grad",
    title: "Transition & Belonging",
    body: "Smooth handoff into college, technical programs, or the workforce — with continued mentorship.",
  },
];

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Resources — SYS Educational Services" },
      {
        name: "description",
        content:
          "Three flagship workshops plus resources for 4-year planning, Running Start, college apps, internships, and career exploration. Built for Seattle high school students.",
      },
      { property: "og:title", content: "SYS Programs — Workshops & Student Resources" },
      {
        property: "og:description",
        content:
          "Graduation Planning, College & Career Prep, Leadership, plus Running Start guidance, internships, and college application support.",
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
      "We help students take ownership of their high school journey with credit audits, course planning, and a personalized 4-year roadmap that aligns with their goals and interests.",
    bullets: [
      "Personal credit & transcript review",
      "4-year academic roadmap with course selection",
      "Goal tracking and accountability check-ins",
      "Running Start eligibility & integration",
    ],
  },
  {
    icon: Sparkles,
    color: "gold",
    title: "College & Career Prep",
    tag: "11th – 12th grade",
    description:
      "From the Common App to FAFSA to alternative pathways, students leave with a real plan — not just a list of dreams. We walk them through every deadline.",
    bullets: [
      "College applications, essays & personal statements",
      "FAFSA, scholarships & application fee waivers",
      "SAT/ACT prep guidance and timeline planning",
      "Career exploration & informational interviews",
    ],
  },
  {
    icon: Users,
    color: "teal",
    title: "Soft Skills & Leadership",
    tag: "All grades",
    description:
      "The skills that actually move careers forward: communication, professional presence, and the confidence to lead in any room — at school, at work, or in the community.",
    bullets: [
      "Public speaking & interview prep",
      "Professional email & networking",
      "Peer leadership and team projects",
      "Personal storytelling & self-advocacy",
    ],
  },
];

const resources = [
  {
    icon: CalendarDays,
    title: "4-Year Plan Workshop",
    desc: "Craft a personalized high school plan that maps every semester to graduation and beyond.",
  },
  {
    icon: School,
    title: "Running Start Guidance",
    desc: "Apply for Running Start, take placement tests, and earn college credit while still in high school — for free.",
  },
  {
    icon: Drama,
    title: "Extracurricular Planning",
    desc: "Find activities that showcase your talents, fit your schedule, and strengthen your college applications.",
  },
  {
    icon: Briefcase,
    title: "Internships & Stipends",
    desc: "Curated paid internship and stipend programs that match your career interests and build your resume.",
  },
  {
    icon: Compass,
    title: "Career Exploration",
    desc: "Interactive workshops with real professionals to help students discover the path that excites them.",
  },
  {
    icon: MessageCircleHeart,
    title: "Share Your Story",
    desc: "Mentorship circles where students learn to tell their own story — for essays, interviews, and life.",
  },
];

function Programs() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            Programs & Resources
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-display text-navy leading-[1.05]">
            Three workshops. <span className="italic text-gold">One mission.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Each SYS program is designed to be delivered in schools, community centers, or
            virtually — and adapts to the specific needs of your students. Below the flagship
            workshops, you'll find the full library of resources we walk students through.
          </p>
        </div>
      </section>

      {/* Flagship workshops */}
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

      {/* Grade-by-grade pathway */}
      <section className="bg-navy text-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Program Structure
            </p>
            <h2 className="mt-3 text-4xl font-display text-cream leading-tight">
              A pathway from freshman year through post-graduation.
            </h2>
            <p className="mt-4 text-cream/75 leading-relaxed">
              Early intervention is what makes SYS different. We meet students at every stage — not
              just senior year — so the plan grows with them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pathway.map((p, i) => (
              <div
                key={p.grade}
                className="relative rounded-2xl bg-cream/5 border border-cream/10 p-6 hover:bg-cream/10 transition-colors"
              >
                <div className="font-display text-5xl text-gold/30 absolute top-4 right-5 leading-none">
                  0{i + 1}
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">
                  {p.grade}
                </p>
                <h3 className="mt-2 font-display text-xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student resources grid */}
      <section className="bg-cream/60 border-y border-border">

        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
              Student Resources
            </p>
            <h2 className="mt-3 text-4xl font-display text-navy leading-tight">
              The full toolkit — woven into every workshop.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              From Running Start applications to internship matching, these are the resources our
              mentors guide students through one-on-one and in small groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl bg-background border border-border p-6 hover:border-gold/60 hover:shadow-soft transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-display text-navy">{r.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Running Start spotlight */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Spotlight</p>
            <h2 className="mt-3 text-4xl font-display text-navy leading-tight">
              Running Start: a head start on college.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Washington students can earn college credit — for free — while still in high school.
              We walk families through eligibility, applications, and how to balance the workload.
            </p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Save Money", d: "Earn college credits for free or at reduced cost." },
              { t: "Save Time", d: "Graduate earlier — sometimes with an Associate's in hand." },
              { t: "Challenge Yourself", d: "Build academic confidence with college coursework." },
              { t: "Boost Applications", d: "Prove college-level performance to admissions teams." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-lg text-navy">{b.t}</p>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
