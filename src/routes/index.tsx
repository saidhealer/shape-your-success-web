import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Sparkles, Users } from "lucide-react";
import heroImg from "../assets/hero-students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYS Educational Services — Shape Your Future, Starting Now." },
      {
        name: "description",
        content:
          "Seattle-based youth mentorship empowering high school students with graduation planning, college prep, and leadership workshops.",
      },
      { property: "og:title", content: "SYS — Shape Your Future, Starting Now." },
      {
        property: "og:description",
        content:
          "Mentorship and academic planning for high school students across Seattle. Book a workshop today.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "90%", label: "of participants better plan their academic path" },
  { value: "85%", label: "report increased motivation after workshops" },
  { value: "10+", label: "partnerships with local Seattle schools" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Seattle Youth Mentorship
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-navy leading-[1.05]">
              Shape Your Future,{" "}
              <span className="italic text-gold">Starting Now.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl leading-relaxed">
              SYS Educational Services helps high school students plan for graduation, college, and
              career — with workshops built for the students who too often get left out of the
              conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-3 text-sm font-semibold hover:bg-navy/90 transition-all hover:gap-3"
              >
                Book a Workshop
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-background px-6 py-3 text-sm font-semibold text-navy hover:bg-cream transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-teal/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_oklch(0.27_0.06_255/0.4)]">
              <img
                src={heroImg}
                alt="Diverse high school students collaborating in a bright Seattle classroom"
                width={1536}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-cream rounded-xl shadow-soft p-4 max-w-[220px] border border-border">
              <p className="text-xs uppercase tracking-wider text-teal font-semibold">Mission</p>
              <p className="mt-1 text-sm text-navy font-medium leading-snug">
                Building the next generation of confident, college-ready leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Our Mission</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-display text-navy leading-tight">
          We meet students where they are — and walk with them toward where they want to go.
        </h2>
        <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
          SYS partners with schools, families, and community organizations across the Seattle area
          to give high schoolers from underrepresented communities the tools, planning, and belief
          they need to succeed after graduation.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-navy text-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center md:text-left border-t border-cream/15 pt-8">
                <div className="font-display text-6xl text-gold font-semibold">{s.value}</div>
                <p className="mt-3 text-cream/80 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">What we offer</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-display text-navy">Workshops with purpose.</h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            See all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Graduation Planning", desc: "Stay on track for graduation with credit audits and personalized planning." },
            { icon: Sparkles, title: "College & Career Prep", desc: "Applications, financial aid, and exploring career paths that fit." },
            { icon: Users, title: "Soft Skills & Leadership", desc: "Communication, confidence, and the leadership habits that open doors." },
          ].map((p) => (
            <div key={p.title} className="group rounded-2xl border border-border bg-card p-7 hover:border-gold/50 hover:shadow-soft transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-navy group-hover:bg-gold group-hover:text-navy transition-colors">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-3xl bg-gradient-to-br from-navy via-navy to-teal/80 px-8 py-16 md:p-16 text-center text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 bg-gold/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl">Bring SYS to your school.</h2>
            <p className="mt-4 text-cream/80 max-w-2xl mx-auto">
              Counselors, principals, and community leaders — let's talk about how a SYS workshop
              series can support your students this semester.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-navy px-7 py-3.5 text-sm font-bold hover:bg-gold/90 transition-all hover:gap-3"
            >
              Book a Workshop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
