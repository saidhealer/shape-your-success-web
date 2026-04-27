import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  FileText,
  Send,
  Trophy,
  Ticket,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  PenLine,
} from "lucide-react";

export const Route = createFileRoute("/college-apps")({
  head: () => ({
    meta: [
      { title: "Master Your College Application Journey — SYS Educational Services" },
      {
        name: "description",
        content:
          "A step-by-step college application timeline, fee waiver guidance, and personal statement tips for Seattle high school students.",
      },
      {
        property: "og:title",
        content: "College Application Journey — SYS Educational Services",
      },
      {
        property: "og:description",
        content:
          "Timeline, fee waivers, and quick tips to help you submit strong college applications.",
      },
    ],
  }),
  component: CollegeApps,
});

const timeline = [
  {
    icon: CalendarDays,
    when: "Junior Year — Spring",
    title: "Research & Test",
    body: "Start researching colleges that fit your goals and take standardized tests (SAT/ACT). Build a balanced list of reach, target, and safety schools.",
  },
  {
    icon: FileText,
    when: "Summer Before Senior Year",
    title: "Draft Your Story",
    body: "Draft your personal statement and prepare your resume. Lock in recommenders and start your Common App account.",
  },
  {
    icon: Send,
    when: "Senior Year — Fall",
    title: "Apply & FAFSA",
    body: "Finalize your college list, complete applications, and submit the FAFSA as soon as it opens. Send transcripts and test scores.",
  },
  {
    icon: Trophy,
    when: "Senior Year — Winter",
    title: "Scholarships & Interviews",
    body: "Submit remaining applications, apply for scholarships, and prepare for alumni or program interviews.",
  },
];

const tips = [
  "Start early and stay organized",
  "Highlight your unique experiences and perspectives",
  "Get your applications reviewed by teachers or mentors",
  "Pay attention to deadlines — mark them on your calendar",
  "Don't be afraid to ask for help from counselors or teachers",
];

function CollegeApps() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            College Readiness
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-display text-navy leading-[1.05]">
            Master your <span className="italic text-gold">college application</span> journey.
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            From SAT prep to FAFSA submission, this is the roadmap our mentors walk students
            through — broken down into the moments that actually matter.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
            Application Timeline
          </p>
          <h2 className="mt-3 text-4xl font-display text-navy leading-tight">
            Four checkpoints from junior year to submission day.
          </h2>
        </div>

        <div className="relative">
          {/* vertical line on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <ol className="space-y-10 md:space-y-16">
            {timeline.map((item, i) => {
              const flip = i % 2 === 1;
              return (
                <li
                  key={item.when}
                  className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center"
                >
                  {/* dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gold text-navy items-center justify-center font-display font-bold shadow-soft">
                    {i + 1}
                  </div>

                  <div className={flip ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}>
                    <p className="text-xs uppercase tracking-[0.18em] text-teal font-semibold">
                      Step 0{i + 1}
                    </p>
                    <p className="mt-1 font-display text-2xl text-navy">{item.when}</p>
                    <p className="mt-1 text-gold font-semibold">{item.title}</p>
                  </div>

                  <div className={flip ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"}>
                    <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition-shadow inline-flex flex-col gap-3 text-left">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <p className="text-foreground/75 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Fee waivers */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy">
              <Ticket className="h-7 w-7" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Application Fee Waivers
            </p>
            <h2 className="mt-3 text-4xl font-display text-cream leading-tight">
              Don't let application fees hold you back.
            </h2>
            <p className="mt-4 text-cream/75 leading-relaxed max-w-xl">
              Most colleges offer fee waivers for students who qualify — including those on
              free/reduced lunch, in TRIO programs, or whose family income meets federal
              guidelines. We'll help you check eligibility and submit waivers through the Common
              App, Coalition App, and directly to schools.
            </p>
          </div>
          <div className="md:col-span-5 grid gap-4">
            {[
              { t: "Common App Waiver", d: "Self-certify in your profile — no extra paperwork." },
              { t: "NACAC Request Form", d: "Counselor-signed form for paper applications." },
              { t: "SAT/ACT Waivers", d: "Cover testing fees — and unlock 4+ free score sends." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-cream/5 border border-cream/10 p-5">
                <p className="font-display text-lg text-cream">{b.t}</p>
                <p className="mt-1 text-sm text-cream/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy px-6 py-3 text-sm font-bold hover:bg-gold/90 transition-colors"
            >
              Check Eligibility <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick tips */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-cream">
              <Lightbulb className="h-7 w-7" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-teal font-semibold">
              Quick Tips for Success
            </p>
            <h2 className="mt-3 text-4xl font-display text-navy leading-tight">
              The advice we give every senior on day one.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Small habits make the difference between a stressed-out December and a confident one.
            </p>
          </div>
          <ul className="md:col-span-7 space-y-3">
            {tips.map((t) => (
              <li
                key={t}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-gold/60 hover:shadow-soft transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground/80 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Personal statement CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-cream border border-border p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                <PenLine className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy">
                Get personal statement writing tips.
              </h2>
              <p className="mt-3 text-foreground/70 max-w-xl leading-relaxed">
                Your story is your strongest asset. Book a 1-on-1 session with an SYS mentor for
                brainstorming, drafting, and line-by-line edits.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-3 text-sm font-bold hover:bg-navy/90 transition-colors"
              >
                Get Writing Tips <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
