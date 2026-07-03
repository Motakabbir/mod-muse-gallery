import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, useReveal } from "../components/site";
import aboutHero from "../assets/about-hero.jpg";
import aboutDetail from "../assets/01_MISSION .png";
import videoPillarOne from "../assets/OUR_STORY.mp4";

import { getPrinciples, getArchitects } from "../lib/about";
import { useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Syndicate | Syndicated Restomod Build" },
      { name: "description", content: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners." },
      { property: "og:title", content: "About Us — Syndicate | Syndicated Restomod Build" },
      { property: "og:description", content: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners." },
    ],
  }),
  component: AboutPage,
  loader: async () => {
    const principles = await getPrinciples();
    const architects = await getArchitects();
    return { principles, architects };
  },
});

function AboutPage() {
  useReveal();
  const { principles, architects } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-ink text-bone">
      <Nav />
      <PageHero
        kicker="Our Story"
        title={
          <>
            Built By <span className="text-acid">Fanatics</span>.<br />
            Engineered To <span className="text-acid">Last</span>.
          </>
        }
        subtitle="Syndicate is more than a car. It is a collective of engineers, designers, and enthusiasts who believe the golden era of motorsport deserves a modern encore."
        video={videoPillarOne}
      />

      {/* Mission */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">01 — Mission</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
              Reimagine What A<br />Restomod Can Be
            </h2>
            <p className="text-bone/70 text-lg leading-relaxed mb-6">
              Traditional restorations preserve the past. Syndicate builds on it. We take iconic rally-bred
              silhouettes and infuse them with modern coach building engineering, additive manufacturing, and
              motorsport-grade safety — without losing the analog soul that makes these cars magical.
            </p>
            <p className="text-bone/70 text-lg leading-relaxed">
              Every weld, every panel, every line of code in the ECU is obsessively considered. The result
              is not a replica. It is a rebirth.
            </p>
          </div>
          <div className="reveal">
            <img
              src={aboutDetail}
              alt="Precision engineering detail"
              className="w-full h-[500px] object-cover rounded-lg border border-white/10"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 grain relative border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal text-center mb-16">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">02 — Principles</div>
            <h2 className="font-display text-4xl md:text-5xl">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((v) => (
              <div key={v.num} className="reveal bg-carbon border border-white/10 rounded-lg p-8 hover:border-acid/30 transition-colors duration-500">
                <div className="font-mono text-5xl text-white/10 mb-6">{v.num}</div>
                <h3 className="font-display text-2xl mb-4">{v.title}</h3>
                <p className="text-bone/60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal text-center mb-16">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">03 — Leadership</div>
            <h2 className="font-display text-4xl md:text-5xl">The Architects</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {architects.map((p) => (
              <div key={p.name} className="reveal bg-carbon border border-white/10 rounded-lg p-6 text-center hover:border-acid/30 transition-colors duration-500">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-steel border border-white/10 flex items-center justify-center overflow-hidden">
                  {p.img ? (
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-display text-2xl text-acid">{p.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="font-display text-lg mb-1">{p.name}</h3>
                <div className="font-mono text-xs text-acid uppercase tracking-widest mb-3">{p.role}</div>
                <p className="text-bone/50 text-sm leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="reveal mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6">
            Want To Join <span className="text-acid">The Build</span>?
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-xl mx-auto">
            Allocation is limited. Applications are reviewed personally by the build team.
          </p>
          <Link
            to="/apply"
            className="inline-block px-10 py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300"
          >
            Apply For Allocation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
