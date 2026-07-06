import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useReveal, N as Nav, P as PageHero, F as Footer } from "./site-paN77MRt.mjs";
import { c as carbonTexture } from "./carbon-texture-CrF_2aOK.mjs";
import { h as heroVideo$1 } from "./video-E_2QOweG.mjs";
import { R as Route$6 } from "./router-Cuxds2qW.mjs";
import "../_libs/seroval.mjs";
import { P as Play, X, a as ChevronLeft, b as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./logo-4-ISZutHRh.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-CR71_7B5.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const buildStrip = "/assets/gallery-1-BNSHI9Rh.jpg";
const buildScan = "/assets/gallery-1-BNSHI9Rh.jpg";
const buildPrint = "/assets/gallery-1-BNSHI9Rh.jpg";
const buildFinish = "/assets/gallery-1-BNSHI9Rh.jpg";
const buildProcess = "/assets/gallery-1-BNSHI9Rh.jpg";
const rs500Hero = "/assets/gallery-1-BNSHI9Rh.jpg";
const gallery1 = "/assets/gallery-1-BNSHI9Rh.jpg";
const gallery2 = "/assets/gallery-1-BNSHI9Rh.jpg";
const gallery3 = "/assets/gallery-1-BNSHI9Rh.jpg";
const gallery4 = "/assets/gallery-1-BNSHI9Rh.jpg";
const heroVideo = "/assets/SYNDICATE_TEASER_REAL-DWnZKdrn.mp4";
const MEDIA = [
  {
    kind: "video",
    src: heroVideo,
    poster: rs500Hero,
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
    src: buildStrip,
    title: "Bare Shell",
    caption: "Car #148 stripped to bare metal. Every component catalogued.",
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
    src: buildScan,
    title: "Digital Twin",
    caption: "Sub-millimetre 3D scan of the original shell.",
    phase: "Phase 02",
    longDesc: "High-precision 3D scan of the bare chassis. This scan provides a sub-millimetre accurate digital model, allowing our engineers to design CAD components that fit flawlessly.",
    details: [
      { label: "Scan Res", value: "0.05 mm" },
      { label: "Points", value: "78.4 Million" },
      { label: "Partner", value: "T3DMC" }
    ]
  },
  {
    kind: "image",
    src: gallery1,
    title: "CAD Surfacing",
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
    src: buildPrint,
    title: "Additive Tooling",
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
    src: carbonTexture,
    title: "Carbon Layup",
    caption: "BAMD composite panels — weave inspection.",
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
  }
];
const FILTERS = ["All", "Reveal", "Phase 01", "Phase 02", "Phase 03", "Phase 04", "Validation", "Ongoing"];
function BuildGallery() {
  const [filter, setFilter] = reactExports.useState("All");
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const filtered = filter === "All" ? MEDIA : MEDIA.filter((m) => m.phase === filter);
  const close = reactExports.useCallback(() => setOpenIndex(null), []);
  const next = reactExports.useCallback(
    () => setOpenIndex((i) => i === null ? null : (i + 1) % filtered.length),
    [filtered.length]
  );
  const prev = reactExports.useCallback(
    () => setOpenIndex((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  reactExports.useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "relative py-32 px-6 bg-carbon border-y border-white/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-bg pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "● Build Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl leading-[1] max-w-4xl text-gradient-bone", children: [
          "Watch every ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-acid", children: "turn of the wrench." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-bone/60 max-w-2xl leading-relaxed", children: "Films and stills from the workshop floor. Tap any tile to open details and documentation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal mb-10 flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setFilter(f);
            setOpenIndex(null);
          },
          className: `px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] border transition-all ${filter === f ? "border-acid bg-acid text-ink" : "border-white/10 text-bone/60 hover:border-acid/60 hover:text-acid"}`,
          children: f
        },
        f
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3", children: filtered.map((m, i) => {
        const isBig = i === 0 || i % 7 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reveal ${isBig ? "col-span-2 row-span-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpenIndex(i),
            className: "relative w-full h-full group overflow-hidden rounded-xl border border-white/10 bg-ink hover-lift text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: m.kind === "video" ? m.poster : m.src,
                  alt: m.title,
                  loading: "lazy",
                  className: "absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" }),
              m.kind === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full glass-acid flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 text-acid fill-acid ml-1" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 glass-acid rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.25em] uppercase text-acid", children: m.phase }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base md:text-lg text-bone leading-tight", children: m.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mt-1 line-clamp-1", children: m.caption })
              ] })
            ]
          }
        ) }, m.src + i);
      }) })
    ] }),
    active && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[100] bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6",
        onClick: close,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full max-w-6xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden grid lg:grid-cols-12 shadow-2xl z-10",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: close,
                  "aria-label": "Close details",
                  className: "absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative bg-ink/50 flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[75vh] border-b lg:border-b-0 lg:border-r border-white/10 group/img", children: [
                active.kind === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "video",
                  {
                    src: active.src,
                    poster: active.poster,
                    controls: true,
                    autoPlay: true,
                    className: "w-full h-full object-contain bg-black"
                  },
                  active.src
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: active.src,
                    alt: active.title,
                    className: "w-full h-full object-contain"
                  },
                  active.src
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      prev();
                    },
                    "aria-label": "Previous item",
                    className: "absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      next();
                    },
                    "aria-label": "Next item",
                    className: "absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-[75vh]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-acid tracking-[0.2em] uppercase mb-2", children: active.phase }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-gradient-bone leading-tight", children: active.title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-sm md:text-base leading-relaxed font-sans", children: active.longDesc || active.caption }),
                  active.details && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-6 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-acid", children: "Specifications & Details" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: active.details.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "bg-ink/30 border border-white/5 p-4 hover:border-white/10 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-mono text-[10px] uppercase tracking-wider text-bone/40 mb-1", children: d.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-sm text-bone", children: d.value })
                        ]
                      },
                      idx
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-bone/40 font-mono text-[10px] uppercase tracking-[0.25em]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Syndicate Build Documentation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    String((openIndex ?? 0) + 1).padStart(2, "0"),
                    " / ",
                    String(filtered.length).padStart(2, "0")
                  ] })
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function TheBuildPage() {
  useReveal();
  const {
    phases,
    specs
  } = Route$6.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-ink text-bone overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { kicker: "The Build Process", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Engineered ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "In The Open." })
    ] }), subtitle: "Every stage documented. Every decision visible. From bare shell to first ignition, syndicate members travel with the build from day one.", video: heroVideo$1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-32", children: phases.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `reveal grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border border-white/10 group", children: p.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.t, loading: "lazy", className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" }) : p.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: p.video, autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" }) : null }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-3", children: [
          "Phase ",
          p.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl leading-[1.05] mb-6", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 leading-relaxed mb-8", children: p.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 border-t border-white/10 pt-6 mb-6", children: p.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-bone/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "—" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.25em] text-bone/50", children: [
          "Partner: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone/90", children: p.partner })
        ] })
      ] })
    ] }, p.n)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BuildGallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 bg-carbon border-y border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal", children: "Specification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-4xl md:text-5xl leading-[1] mb-16", children: [
        "Technical ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Snapshot." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid md:grid-cols-2 gap-px bg-white/10 border border-white/10", children: specs.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon p-8 hover:bg-steel transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-3", children: s.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-xl text-bone", children: s.v })
      ] }, s.l)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-4xl md:text-6xl leading-[1] mb-10", children: [
        "Watch it ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "come together." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal text-bone/70 mb-10 leading-relaxed", children: "Syndicate members receive build documentation, workshop access, and behind-the-scenes content at every milestone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "reveal inline-block px-12 py-5 bg-acid text-ink font-semibold uppercase tracking-widest rounded-full hover:bg-bone transition-colors", children: "Apply for Allocation" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  TheBuildPage as component
};
