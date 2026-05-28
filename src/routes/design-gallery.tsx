import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, useReveal, PageHero } from "@/components/site";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/build-finish.jpg";
import g6 from "../assets/build-print.jpg";
import g7 from "../assets/rs500-hero.jpg";
import g8 from "../assets/pillar-one-of-one.jpg";

export const Route = createFileRoute("/design-gallery")({
  head: () => ({
    meta: [
      { title: "Design Gallery | Vision148 RS500" },
      { name: "description", content: "A visual reference library for the Vision148 RS500 build — renders, details, materials, and process imagery." },
      { property: "og:title", content: "Design Gallery | Vision148" },
      { property: "og:description", content: "Renders, details, materials, process imagery." },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { img: g1, t: "RS500 Reimagined", tag: "Render", span: "md:col-span-2 md:row-span-2" },
  { img: g3, t: "Carbon Rear Wing", tag: "Detail" },
  { img: g4, t: "Engine Bay Study", tag: "Component" },
  { img: g2, t: "Digital Twin", tag: "Engineering", span: "md:col-span-2" },
  { img: g5, t: "Final Finish", tag: "Process" },
  { img: g6, t: "Composite Layup", tag: "Manufacturing" },
  { img: g7, t: "Workshop Capture", tag: "On Set", span: "md:col-span-2" },
  { img: g8, t: "Hand Fabrication", tag: "Coachbuilding" },
];

function GalleryPage() {
  useReveal();

  return (
    <main className="bg-ink text-bone overflow-x-hidden">
      <Nav />
      <PageHero
        kicker="Design Gallery"
        title={<>A Library of <span className="text-acid">Intent.</span></>}
        subtitle="Renders, scans, details, materials, and process imagery from the Vision148 design phase — a living archive of the build as it develops."
        image={g1}
      />

      <section className="py-24 px-6 bg-carbon">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 grid-cols-2 auto-rows-[16rem] gap-4">
            {ITEMS.map((it, i) => (
              <figure
                key={i}
                className={`reveal relative overflow-hidden border border-white/10 group bg-ink ${it.span ?? ""}`}
              >
                <img
                  src={it.img}
                  alt={it.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-acid mb-1">
                    {it.tag}
                  </div>
                  <div className="font-display text-lg text-bone">{it.t}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal">
            More Coming
          </div>
          <h2 className="reveal font-display text-4xl md:text-6xl leading-[1] mb-10">
            The gallery grows with <span className="text-acid">every milestone.</span>
          </h2>
          <p className="reveal text-bone/70 mb-10 leading-relaxed">
            Syndicate members receive the full-resolution archive, plus exclusive imagery from
            inside each partner workshop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/the-build"
              className="reveal px-8 py-4 border border-white/30 text-bone uppercase tracking-widest text-sm rounded-full hover:border-acid hover:text-acid transition-colors"
            >
              See the Build →
            </Link>
            <Link
              to="/apply"
              className="reveal px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors"
            >
              Apply for Allocation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}