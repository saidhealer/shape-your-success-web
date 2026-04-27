import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Compass, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SYS — Built from Lived Experience" },
      {
        name: "description",
        content:
          "Founded by Said Mohammed in Seattle, SYS Educational Services is a youth mentorship organization rooted in community and committed to underrepresented students.",
      },
      { property: "og:title", content: "About SYS Educational Services" },
      {
        property: "og:description",
        content:
          "Meet the founder and learn the mission behind SYS — empowering Seattle's high school students.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">About SYS</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-display text-navy leading-[1.05]">
            Built from lived experience. <span className="italic text-gold">Rooted in community.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-2xl">
            SYS Educational Services exists because too many bright, capable students reach senior
            year without a clear plan — not for lack of talent, but for lack of guidance. We're
            changing that, one workshop at a time.
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
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Founder Story</p>
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
                Today, SYS partners with schools and community organizations across the Seattle
                area, bringing that same approach to hundreds of students — especially those from
                immigrant, low-income, and historically underserved backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: "Our Mission",
              body: "To equip high school students with the planning tools, mentorship, and confidence to design a future they're excited about.",
            },
            {
              icon: Compass,
              title: "Our Vision",
              body: "A Seattle where every student — regardless of zip code, income, or background — graduates with a clear next step and the belief they can take it.",
            },
            {
              icon: Users,
              title: "Who We Serve",
              body: "9th–12th grade students from underrepresented communities, plus the schools, families, and partners who support them.",
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
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
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
