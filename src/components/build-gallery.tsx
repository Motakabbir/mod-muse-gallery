import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
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
import heroVideo from "../assets/SYNDICATE_TEASER_REAL.mp4";

type MediaItem =
  | { kind: "image"; src: string; title: string; caption: string; phase: string; longDesc: string; details: { label: string; value: string }[] }
  | { kind: "video"; src: string; poster?: string | boolean; title: string; caption: string; phase: string; longDesc: string; details: { label: string; value: string }[] };

const MEDIA: MediaItem[] = [
  {
    kind: "video",
    src: '/src/assets/SYNDICATE_TEASER_REAL.mp4',
    poster: false,
    title: "Syndicate — Teaser Reel",
    caption: "First glimpse of the RS500 reborn.",
    phase: "Reveal",
    longDesc: "The official debut teaser for the Syndicate Vision148 project. Highlighting the historic pedigree of the Ford Sierra Cosworth RS500 and the engineering team behind its modern rebirth.",
    details: [
      { label: "Production", value: "Syndicate Media" },
      { label: "Format", value: "4K ProRes" },
      { label: "Location", value: "Silverstone" }
    ]
  },
  {
    kind: "image",
    src: '/src/assets/Sketches.jpeg',
    title: "1st Sketches & Digital Modeling",
    caption: "The art of design begins",
    phase: "Phase 01",
    longDesc: "Chassis #148 stripped down completely to bare metal. Every original spot weld was inspected, and the chassis was cataloged to prepare for structural reinforcement.",
    details: [
      { label: "Chassis ID", value: "#148 of 500" },
      { label: "Condition", value: "100% Rust-Free" },
      { label: "Partner", value: "ASM Auto Recycling" }
    ]
  },
  {
    kind: "image",
    src: '/src/assets/Digital_Twin.png',
    title: "Digital Modelling",
    caption: "Sub-millimetre 3D scan of the original shell.",
    phase: "Phase 01",
    longDesc: "High-precision 3D scan of the bare chassis. This scan provides a sub-millimetre accurate digital model, allowing our engineers to design CAD components that fit flawlessly.",
    details: [
      { label: "Scan Res", value: "0.05 mm" },
      { label: "Points", value: "78.4 Million" },
      { label: "Partner", value: "T3DMC" }
    ]
  },
  {
    kind: "image",
    src: '/src/assets/Dismantling.JPG',
    title: "Digital & CAD Modelling",
    caption: "Aero and structural geometry refined in CAD.",
    phase: "Phase 02",
    longDesc: "Refining the exterior body lines and custom aerodynamic elements in CAD. The styling respects the classic Group A touring car design while optimizing underbody airflow.",
    details: [
      { label: "Software", value: "Siemens NX" },
      { label: "Surface Class", value: "Class-A Bezier" },
      { label: "Aero Target", value: "Increased Downforce" }
    ]
  },
  {
    kind: "image",
    src: '/src/assets/Bare_Shell_Disamantling.jpg',
    title: "Fabrication & Coachbuilding",
    caption: "Composite tooling printed in-house at DMC Silverstone.",
    phase: "Phase 03",
    longDesc: "Large-format 3D printing of composite tooling. This allows the fabrication team to lay up carbon fiber parts with extreme precision and speed.",
    details: [
      { label: "3D Printer", value: "Renishaw RenAM 500Q" },
      { label: "Material", value: "Scalmalloy® Tooling" },
      { label: "Partner", value: "DMC Silverstone" }
    ]
  },
  {
    kind: "image",
    src: '/src/assets/Fabrication.JPG',
    title: "Fabrication & Tooling",
    caption: "Coventry Metalcraft & DMC ",
    phase: "Phase 03",
    longDesc: "A close-up inspection of the autoclaved-cured carbon fiber weave. Using high-grade prepreg carbon ensures the panels are both incredibly lightweight and stiff.",
    details: [
      { label: "Weave", value: "2x2 Twill 3K" },
      { label: "Curing Temp", value: "135°C in Autoclave" },
      { label: "Partner", value: "BAMD Composites" }
    ]
  },
  {
    kind: "image",
    src: gallery2,
    title: "Block Assembly",
    caption: "MAHLE rebuild of the YB inline-four.",
    phase: "Phase 04",
    longDesc: "The assembly of the legendary Cosworth YB inline-four engine block. Completely redesigned with modern internals, custom cylinder head, and modern engine management.",
    details: [
      { label: "Power Output", value: "550+ bhp" },
      { label: "Drivetrain", value: "6-Speed Sequential" },
      { label: "Partner", value: "MAHLE Group" }
    ]
  },
  {
    kind: "image",
    src: buildFinish,
    title: "Paint Shop",
    caption: "Heritage livery, modern finish process.",
    phase: "Phase 04",
    longDesc: "Applying the signature Syndicate livery. Using modern multi-stage coating processes that provide a deep finish while saving weight compared to standard paint.",
    details: [
      { label: "Color", value: "Syndicate Ink Black / Acid Green" },
      { label: "Coatings", value: "Ultra-thin clear coat" },
      { label: "Partner", value: "MAHLE Paint Division" }
    ]
  },
  {
    kind: "image",
    src: gallery3,
    title: "Suspension Geometry",
    caption: "Modern damping under classic bodywork.",
    phase: "Phase 04",
    longDesc: "Configuring the bespoke double-wishbone front and multi-link rear suspension. Modern active dampers are integrated to give contemporary handling characteristics.",
    details: [
      { label: "Dampers", value: "Bespoke Active Bilstein" },
      { label: "Bushings", value: "Motorsport Spherical Joints" },
      { label: "Adjustability", value: "3-Way Dynamic Control" }
    ]
  },
  {
    kind: "image",
    src: gallery4,
    title: "Track Validation",
    caption: "First shakedown laps at Silverstone.",
    phase: "Validation",
    longDesc: "First high-speed validation runs at the Silverstone GP circuit. Monitoring engine thermals, aerodynamic balance, and suspension behavior under load.",
    details: [
      { label: "Circuit", value: "Silverstone GP" },
      { label: "Telemetry", value: "Real-time MoTeC" },
      { label: "Driver", value: "Pro Instructor" }
    ]
  },
  {
    kind: "image",
    src: buildProcess,
    title: "Workshop Floor",
    caption: "Engineered in the open — every visit documented.",
    phase: "Ongoing",
    longDesc: "Documenting the daily progress on the shop floor. Transparent updates are shared with syndicate co-owners at every turn of the wrench.",
    details: [
      { label: "Frequency", value: "Bi-weekly updates" },
      { label: "Format", value: "HD Video & Photos" },
      { label: "Access", value: "Owner Portal" }
    ]
  },
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
            Films and stills from the workshop floor. Tap any tile to open details and documentation.
          </p>
        </div>

        <div className="reveal mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setOpenIndex(null); // Reset open index when filtering
              }}
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
              <div key={m.src + i} className={`reveal ${isBig ? "col-span-2 row-span-2" : ""}`}>
                <button
                  onClick={() => setOpenIndex(i)}
                  className="relative w-full h-full group overflow-hidden rounded-xl border border-white/10 bg-ink hover-lift text-left"
                >
                  {m.kind === "video" && !m.poster ? (
                    <video
                      src={m.src}
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none"
                    />
                  ) : (
                    <img
                      src={m.kind === "video" ? (m.poster as string) : m.src}
                      alt={m.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  {m.kind === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full glass-acid flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-acid fill-acid ml-1" />
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Lightbox Modal with Technical Specifications */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6"
          onClick={close}
        >
          {/* Modal Card */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden grid lg:grid-cols-12 shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={close}
              aria-label="Close details"
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Media Container */}
            <div className="lg:col-span-7 relative bg-ink/50 flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[75vh] border-b lg:border-b-0 lg:border-r border-white/10 group/img">
              {active.kind === "video" ? (
                <video
                  key={active.src}
                  src={active.src}
                  poster={typeof active.poster === 'string' ? active.poster : undefined}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <img
                  key={active.src}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-contain"
                />
              )}

              {/* Left/Right Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous item"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
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
                    {active.phase}
                  </div>
                  <h3 className="font-display text-3xl text-gradient-bone leading-tight">
                    {active.title}
                  </h3>
                </div>

                <p className="text-bone/70 text-sm md:text-base leading-relaxed font-sans">
                  {active.longDesc || active.caption}
                </p>

                {/* Technical Specifications */}
                {active.details && (
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid">
                      Specifications & Details
                    </h4>
                    <dl className="grid sm:grid-cols-2 gap-4">
                      {active.details.map((d, idx) => (
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
                <span>Syndicate Build Documentation</span>
                <span>{String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}