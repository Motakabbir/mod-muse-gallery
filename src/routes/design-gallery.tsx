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
import videoCarSection from "../assets/LIBRARY_OF_INTENT.mp4";

import { getGalleryItems } from "../lib/gallery";
import { useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/design-gallery")({
  head: () => ({
    meta: [
      { title: "Design Gallery | Syndicate RS500" },
      { name: "description", content: "A visual reference library for the Syndicate RS500 build — renders, details, materials, and process imagery." },
      { property: "og:title", content: "Design Gallery | Syndicate" },
      { property: "og:description", content: "Renders, details, materials, process imagery." },
    ],
  }),
  component: GalleryPage,
  loader: () => getGalleryItems(),
});

// ITEMS moved to API/Loader

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function GalleryPage() {
  useReveal();
  const items = Route.useLoaderData();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIdx === null) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx, items.length]);

  const currentItem = selectedIdx !== null ? items[selectedIdx] : null;

  return (
    <main className="bg-ink text-bone overflow-x-hidden">
      <Nav />
      <PageHero
        kicker="Design Gallery"
        title={<>A Library of <span className="text-acid">Intent.</span></>}
        subtitle="Renders, scans, details, materials, and process imagery from the Syndicate design phase — a living archive of the build as it develops."
        video={videoCarSection}
      />

      <section className="py-24 px-6 bg-carbon">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 grid-cols-2 auto-rows-[16rem] gap-4">
            {items.map((it, i) => (
              <div key={i} className={`reveal ${it.span ?? ""}`}>
                <figure
                  onClick={() => setSelectedIdx(i)}
                  className="relative h-full w-full overflow-hidden border border-white/10 group bg-ink cursor-pointer"
                >
                  {it.video ? (
                    <video
                      src={it.video}
                      poster={it.img}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={it.img}
                      alt={it.t}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-acid mb-1">
                      {it.tag}
                    </div>
                    <div className="font-display text-lg text-bone">{it.t}</div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink/95 backdrop-blur-2xl"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedIdx(null)} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden grid lg:grid-cols-12 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Media Container */}
              <div className="lg:col-span-7 relative bg-ink/50 flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[75vh] border-b lg:border-b-0 lg:border-r border-white/10 group/img">
                {currentItem.video ? (
                  <video
                    src={currentItem.video}
                    poster={currentItem.img}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={currentItem.img}
                    alt={currentItem.t}
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Left/Right Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
                  }}
                  aria-label="Previous item"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdx((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
                  }}
                  aria-label="Next item"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Side: Details Information */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-[75vh]">
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-acid tracking-[0.2em] uppercase mb-2">
                      {currentItem.tag}
                    </div>
                    <h3 className="font-display text-3xl text-gradient-bone leading-tight">
                      {currentItem.t}
                    </h3>
                  </div>

                  <p className="text-bone/70 text-sm md:text-base leading-relaxed">
                    {currentItem.desc}
                  </p>

                  {/* Technical Metadata */}
                  {currentItem.details && (
                    <div className="border-t border-white/10 pt-6 space-y-4">
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid">
                        Specifications & Details
                      </h4>
                      <dl className="grid sm:grid-cols-2 gap-4">
                        {currentItem.details.map((d: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-ink/30 border border-white/5 p-4 hover:border-white/10 transition-colors"
                          >
                            <dt className="font-mono text-[10px] uppercase tracking-wider text-bone/40 mb-1">
                              {d.label}
                            </dt>
                            <dd className="font-display text-sm text-bone">
                              {d.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>

                {/* Footer status inside details */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-bone/40 font-mono text-[10px] uppercase tracking-[0.25em]">
                  <span>Syndicate Vision148</span>
                  <span>{selectedIdx + 1} / {items.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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