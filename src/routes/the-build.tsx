import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, useReveal, PageHero } from "@/components/site";
import { BuildGallery } from "@/components/build-gallery";
import buildStrip from "../assets/build-strip.jpg";
import buildScan from "../assets/build-scan.jpg";
import buildPrint from "../assets/build-print.jpg";
import buildFinish from "../assets/build-finish.jpg";
import heroImg from "../assets/build-process.jpg";
import videoCarSection from "../assets/video.mp4";

import { getPhases, getSpecs } from "../lib/build";
import { useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/the-build")({
  head: () => ({
    meta: [
      { title: "The Build | Syndicate RS500 Restomod" },
      { name: "description", content: "Four phases of the Syndicate build: acquisition & strip, design & engineering, manufacturing, finishing & validation. Engineered in the open." },
      { property: "og:title", content: "The Build | Syndicate" },
      { property: "og:description", content: "Engineered in the open. Every stage documented." },
    ],
  }),
  component: TheBuildPage,
  loader: async () => {
    const phases = await getPhases();
    const specs = await getSpecs();
    return { phases, specs };
  },
});

// PHASES moved to API/Loader
// SPECS moved to API/Loader

function TheBuildPage() {
  useReveal();
  const { phases, specs } = Route.useLoaderData();

  return (
    <main className="bg-ink text-bone overflow-x-hidden">
      <Nav />
      <PageHero
        kicker="The Build Process"
        title={<>Engineered <span className="text-acid">In The Open.</span></>}
        subtitle="Every stage documented. Every decision visible. From bare shell to first ignition, syndicate members travel with the build from day one."
        video={videoCarSection}
      />

      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl space-y-32">
          {phases.map((p, i) => (
            <article
              key={p.n}
              className={`reveal grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-7">
                <div className="overflow-hidden border border-white/10 group">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.t}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : p.video ? (
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : null}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-3">
                  Phase {p.n}
                </div>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">{p.t}</h2>
                <p className="text-bone/70 leading-relaxed mb-8">{p.body}</p>
                <ul className="space-y-2 border-t border-white/10 pt-6 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-bone/80">
                      <span className="text-acid">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-bone/50">
                  Partner: <span className="text-bone/90">{p.partner}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BuildGallery />

      <section className="py-32 px-6 bg-carbon border-y border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal">Specification</div>
          <h2 className="reveal font-display text-4xl md:text-5xl leading-[1] mb-16">
            Technical <span className="text-acid">Snapshot.</span>
          </h2>
          <dl className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {specs.map((s) => (
              <div key={s.l} className="reveal bg-carbon p-8 hover:bg-steel transition-colors">
                <dt className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-3">{s.l}</dt>
                <dd className="font-display text-xl text-bone">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal font-display text-4xl md:text-6xl leading-[1] mb-10">
            Watch it <span className="text-acid">come together.</span>
          </h2>
          <p className="reveal text-bone/70 mb-10 leading-relaxed">
            Syndicate members receive build documentation, workshop access, and behind-the-scenes
            content at every milestone.
          </p>
          <Link
            to="/apply"
            className="reveal inline-block px-12 py-5 bg-acid text-ink font-semibold uppercase tracking-widest rounded-full hover:bg-bone transition-colors"
          >
            Apply for Allocation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}