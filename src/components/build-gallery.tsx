import { useCallback, useEffect, useState } from "react";
import buildStrip from "../assets/build-strip.jpg";
import buildScan from "../assets/build-scan.jpg";
import buildPrint from "../assets/build-print.jpg";
import buildFinish from "../assets/build-finish.jpg";
import buildProcess from "../assets/build-process.jpg";
import carbonTexture from "../assets/carbon-texture.jpg";
import rs500Hero from "../assets/rs500-hero.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import heroVideo from "../assets/video.mp4";

type MediaItem =
  | { kind: "image"; src: string; title: string; caption: string; phase: string }
  | { kind: "video"; src: string; poster: string; title: string; caption: string; phase: string };

const MEDIA: MediaItem[] = [
  { kind: "video", src: heroVideo, poster: rs500Hero, title: "Syndicate — Teaser Reel", caption: "First glimpse of the RS500 reborn.", phase: "Reveal" },
  { kind: "image", src: buildStrip, title: "Bare Shell", caption: "Car #148 stripped to bare metal. Every component catalogued.", phase: "Phase 01" },
  { kind: "image", src: buildScan, title: "Digital Twin", caption: "Sub-millimetre 3D scan of the original shell.", phase: "Phase 02" },
  { kind: "image", src: gallery1, title: "CAD Surfacing", caption: "Aero and structural geometry refined in CAD.", phase: "Phase 02" },
  { kind: "image", src: buildPrint, title: "Additive Tooling", caption: "Composite tooling printed in-house at DMC Silverstone.", phase: "Phase 03" },
  { kind: "image", src: carbonTexture, title: "Carbon Layup", caption: "BAMD composite panels — weave inspection.", phase: "Phase 03" },
  { kind: "image", src: gallery2, title: "Block Assembly", caption: "MAHLE rebuild of the YB inline-four.", phase: "Phase 04" },
  { kind: "image", src: buildFinish, title: "Paint Shop", caption: "Heritage livery, modern finish process.", phase: "Phase 04" },
  { kind: "image", src: gallery3, title: "Suspension Geometry", caption: "Modern damping under classic bodywork.", phase: "Phase 04" },
  { kind: "image", src: gallery4, title: "Track Validation", caption: "First shakedown laps at Silverstone.", phase: "Validation" },
  { kind: "image", src: buildProcess, title: "Workshop Floor", caption: "Engineered in the open — every visit documented.", phase: "Ongoing" },
];

const FILTERS = ["All", "Reveal", "Phase 01", "Phase 02", "Phase 03", "Phase 04", "Validation", "Ongoing"];

export function BuildGallery() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? MEDIA : MEDIA.filter((m) => m.phase === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  const active = openIndex !== null ? filtered[openIndex] : null;

  return (
    <section id="gallery" className="relative py-32 px-6 bg-carbon border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal mb-12">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">● Build Gallery</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1] max-w-4xl text-gradient-bone">
            Watch every <span className="text-gradient-acid">turn of the wrench.</span>
          </h2>
          <p className="mt-6 text-bone/60 max-w-2xl leading-relaxed">
            Films and stills from the workshop floor. Tap any tile to open in fullscreen — use arrow keys to navigate.
          </p>
        </div>

        <div className="reveal mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] border transition-all ${filter === f
                  ? "border-acid bg-acid text-ink"
                  : "border-white/10 text-bone/60 hover:border-acid/60 hover:text-acid"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {filtered.map((m, i) => {
            const isBig = i === 0 || i % 7 === 0;
            return (
              <button
                key={m.src + i}
                onClick={() => setOpenIndex(i)}
                className={`reveal group relative overflow-hidden rounded-xl border border-white/10 bg-ink hover-lift text-left ${isBig ? "col-span-2 row-span-2" : ""
                  }`}
              >
                <img
                  src={m.kind === "video" ? m.poster : m.src}
                  alt={m.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                {m.kind === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full glass-acid flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-acid ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 glass-acid rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.25em] uppercase text-acid">
                  {m.phase}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-display text-base md:text-lg text-bone leading-tight">{m.title}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mt-1 line-clamp-1">
                    {m.caption}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center text-bone hover:text-acid hover:border-acid transition-colors z-10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center text-bone hover:text-acid hover:border-acid transition-colors z-10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center text-bone hover:text-acid hover:border-acid transition-colors z-10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            className="relative max-w-6xl w-full max-h-[88vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden border border-white/10 bg-ink">
              {active.kind === "video" ? (
                <video
                  key={active.src}
                  src={active.src}
                  poster={active.poster}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[78vh] object-contain bg-black"
                />
              ) : (
                <img
                  key={active.src}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full max-h-[78vh] object-contain"
                />
              )}
            </div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-acid mb-2">
                  {active.phase}
                </div>
                <div className="font-display text-xl md:text-2xl text-bone">{active.title}</div>
                <div className="text-bone/60 text-sm mt-1 max-w-2xl">{active.caption}</div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 whitespace-nowrap">
                {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}