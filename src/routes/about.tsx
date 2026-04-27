import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Compass, Users, Sparkles, MapPin, HandHeart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SYS — Built from Lived Experience" },
      {
        name: "description",
        content:
          "Founded by Said Mohammed in Seattle, SYS empowers high school students — especially first-gen, BIPOC, and underserved youth — with early, personalized academic and career guidance.",
      },
      { property: "og:title", content: "About SYS Educational Services" },
      {
        property: "og:description",
        content:
          "Meet the founder and learn the mission behind SYS — early intervention mentorship for Seattle's high school students.",
      },
    ],
  }),
  component: About,
});

const approach = [
  {
    icon: Sparkles,
    title: "Start Early",
    body: "We begin with 9th graders so students plan the full high school path — not scramble in senior year.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    body: "Services are tailored to real school data — Garfield High School graduation requirements, Seattle Central pathways, and local scholarships.",
  },
  {
    icon: Compass,
    title: "Bridge Opportunities",
    body: "We connect students directly to programs like Running Start at Seattle Central — including nursing and computer science tracks.",
  },
  {
    icon: HandHeart,
    title: "Culturally Grounded",
    body: "We center self-confidence, identity, and belonging. Students see themselves in the mentors and the material.",
  },
];

function About() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">About SYS</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-display text-navy leading-[1.05]">
            Built from lived experience.{" "}
            <span className="italic text-gold">Rooted in community.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-2xl">
            SYS Educational Services empowers high school students — especially from
            underrepresented communities — with early, personalized academic and career guidance.
            We help them plan confidently from freshman year through post-graduation.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy via-teal to-gold relative overflow-hidden shadow-soft">
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-cream">
                  <p className="font-display text-2xl">Said Mohammed</p>
                  <p className="text-sm text-cream/80 mt-1">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
              Founder Story
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display text-navy">
              The mentor I needed in high school.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Said Mohammed founded SYS after years of watching peers in his Seattle community
                graduate without a plan — or, worse, not graduate at all. As a first-generation
                student himself, he knew what it felt like to navigate college applications,
                financial aid, and career decisions without a roadmap.
              </p>
              <p>
                "I started SYS to be the mentor I wished I'd had at 15," Said says. "Not someone
                who lectured at me, but someone who sat down, listened, and helped me figure out
                what was actually possible."
              </p>
              <p>
                Today, SYS is officially registered as an LLC and is building its pilot model
                around Garfield High School and Seattle Central pathways — bringing structured
                support to first-gen, BIPOC, and historically underserved students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-cream/60 border-y border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">
              Our Approach
            </p>
            <h2 className="mt-3 text-4xl font-display text-navy leading-tight">
              Four principles guide everything we do.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {approach.map((a) => (
              <div
                key={a.title}
                className="bg-background rounded-2xl p-7 border border-border hover:border-gold/50 hover:shadow-soft transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-display text-navy">{a.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision + Audience */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: "Our Mission",
              body: "To empower high school students with early, personalized academic and career guidance from freshman year through post-graduation.",
            },
            {
              icon: Compass,
              title: "Our Vision",
              body: "A Seattle where every student — regardless of zip code, income, or background — graduates with a clear next step and the belief they can take it.",
            },
            {
              icon: Users,
              title: "Who We Serve",
              body: "Grades 9–12 — especially first-gen, BIPOC, and underserved youth — plus the parents, schools, and nonprofits who support them.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display text-navy">{v.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-navy">Want to partner with us?</h2>
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          We're always looking for schools, sponsors, and community members who share our mission.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center rounded-full bg-navy text-cream px-7 py-3.5 text-sm font-semibold hover:bg-navy/90 transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
