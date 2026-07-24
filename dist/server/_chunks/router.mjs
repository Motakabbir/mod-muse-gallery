import { a as createRootRouteWithContext, u as useRouter, L as Link, d as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, b as createRouter } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { u as useReducedMotion, A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { P as Play, X, a as ChevronLeft, b as ChevronRight, C as Calendar, M as MapPin, U as Users, S as ShieldAlert } from "../_libs/lucide-react.mjs";
import { h as createServerFn } from "../_libs/tanstack__start-client-core.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/cookie-es.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__start-fn-stubs.mjs";
import "../_libs/@tanstack/start-storage-context+[...].mjs";
import "node:async_hooks";
const appCss = "/assets/styles-CJ9Wao-e.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Syndicate | Syndicated Restomod Build" },
      {
        name: "description",
        content: "Be part of the creation of an icon. A syndicated restomod build of the Ford Sierra Cosworth RS500, engineered in the open."
      },
      { name: "author", content: "Syndicated Restomod" },
      { property: "og:title", content: "Syndicate | Syndicated Restomod Build" },
      { property: "og:description", content: "Syndicated restomod builds powered by TheCarCrowd." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { type: "tween", duration: 0.22, ease: "easeOut" };
  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      variants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
    },
    pathname
  ) }) });
}
const logo = "/assets/logo-4-BrrnFFbn.jpeg";
const NAV = [
  { label: "Syndicate", to: "/", hash: "intro" },
  { label: "The Car", to: "/", hash: "car" },
  { label: "The Build", to: "/the-build" },
  { label: "Gallery", to: "/design-gallery" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" }
];
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/5" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-acid/30 blur-xl group-hover:bg-acid/50 transition-all rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Syn Mod Build", className: "relative h-10 w-10", width: 40, height: 40 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] tracking-[0.25em] uppercase text-bone/80 leading-tight hidden sm:block", children: [
              "Syndicated",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Restomod"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: NAV.map((n) => {
            const href = n.hash ? `/#${n.hash}` : n.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href,
                className: "relative text-xs text-bone/70 hover:text-acid transition-colors uppercase tracking-[0.25em] font-medium after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-acid hover:after:w-full after:transition-all after:duration-300",
                children: n.label
              },
              n.label
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(!open),
              "aria-label": "Menu",
              className: "lg:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-4 bg-bone transition-all ${open ? "rotate-45 translate-y-1" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-4 bg-bone transition-all ${open ? "-rotate-45 -translate-y-0.5" : ""}` })
              ]
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden glass border-t border-white/5 px-6 py-6 flex flex-col gap-4", children: [
          NAV.map((n) => {
            const href = n.hash ? `/#${n.hash}` : n.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href,
                onClick: () => setOpen(false),
                className: "text-sm text-bone/80 hover:text-acid uppercase tracking-[0.25em] py-2 border-b border-white/5",
                children: n.label
              },
              n.label
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", onClick: () => setOpen(false), className: "btn-acid justify-center", children: "Apply Now →" })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-white/10 bg-carbon overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-bg opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden py-6 border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap scroll-marquee", children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-12 px-6 font-display text-4xl md:text-6xl text-bone/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Syndicate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid/30", children: "★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SYNDICATED RESTOMOD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid/30", children: "★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ONE OF ONE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid/30", children: "★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "BUILT IN THE OPEN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid/30", children: "★" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Syn Mod Build", className: "h-12 w-12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Syndicated Restomod" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-bone/40 uppercase tracking-[0.25em]", children: "Syndicate • Powered by TheCarCrowd" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 text-sm max-w-md leading-relaxed", children: "A new model for collective ownership of a singular hand-built restomod. Engineered in the open with the world's leading specialists." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-sm text-bone/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-acid transition-colors", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/the-build", className: "hover:text-acid transition-colors", children: "The Build" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/design-gallery", className: "hover:text-acid transition-colors", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "hover:text-acid transition-colors", children: "Events" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-sm text-bone/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-acid transition-colors", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "hover:text-acid transition-colors", children: "Apply" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@Syndicate.com", className: "hover:text-acid transition-colors", children: "hello@Syndicate.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-6 bg-white/10 my-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "hover:text-acid transition-colors", children: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noreferrer", className: "hover:text-acid transition-colors", children: "LinkedIn" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-white/5 py-6 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-3 text-bone/40 text-[11px] font-mono uppercase tracking-[0.25em]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Syn Mod Build — All rights reserved"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Built in the open · Driven for life" })
    ] }) })
  ] });
}
function PageHero({
  kicker,
  title,
  subtitle,
  image,
  video,
  videoClassName = "opacity-30",
  overlayClassName = "bg-gradient-to-b from-ink/70 via-ink/80 to-ink"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-40 pb-28 px-6 overflow-hidden grain border-b border-white/10", children: [
    video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: video,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: `absolute inset-0 h-full w-full object-cover ${videoClassName}`
      }
    ) : image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image,
        alt: "",
        className: "absolute inset-0 h-full w-full object-cover opacity-40 scale-110",
        loading: "eager"
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 ${overlayClassName}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-10 h-72 w-72 rounded-full bg-acid/10 blur-[120px] float-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass-acid rounded-full px-4 py-1.5 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-acid animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid", children: kicker })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] max-w-5xl text-gradient-bone", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-bone/70 text-lg md:text-xl max-w-2xl leading-relaxed", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-acid/60" }),
        "Scroll to explore"
      ] })
    ] })
  ] });
}
const buildProcess = "/assets/build-process-BNSHI9Rh.jpg";
const MEDIA = [
  {
    kind: "video",
    src: "/src/assets/SYNDICATE_TEASER_REAL.mp4",
    poster: false,
    title: "Syndicate — Teaser Reel",
    caption: "First glimpse of the RS500 reborn.",
    phase: "Reveal",
    longDesc: "The official debut teaser for the Syndicate syndicatedrestomod project. Highlighting the historic pedigree of the Ford Sierra Cosworth RS500 and the engineering team behind its modern rebirth.",
    details: [
      { label: "Production", value: "Syndicate Media" },
      { label: "Format", value: "4K ProRes" },
      { label: "Location", value: "Silverstone" }
    ]
  },
  {
    kind: "image",
    src: "/src/assets/Sketches.jpeg",
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
    src: "/src/assets/Digital_Twin.png",
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
    src: "/src/assets/Dismantling.JPG",
    title: "3D scanning & Desktop Design",
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
    src: "/src/assets/Bare_Shell_Disamantling.jpg",
    title: "Fabrication & Coachbuilding",
    caption: "Panel & component tooling",
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
    src: "/src/assets/Fabrication.JPG",
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
    src: "/src/assets/yb_engine.png",
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
    src: "/src/assets/ps500_Studio_showcase.png",
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
    src: "/src/assets/suspension.png",
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
    src: "/src/assets/testing_validation.jpeg",
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
              m.kind === "video" && !m.poster ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  src: m.src,
                  muted: true,
                  playsInline: true,
                  className: "absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                    poster: typeof active.poster === "string" ? active.poster : void 0,
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
const heroVideo$1 = "/assets/Hero_002-CVqSQ5jk.mp4";
const getPhases = async () => {
  return [
    {
      n: "01",
      t: "Acquisition & Strip - Complete",
      video: "/src/assets/AQUISITION_001.mp4",
      body: "Car #148 — the 148th of 500 RS500s ever built — sourced, authenticated, and fully stripped to bare metal. Every component is catalogued and inspected.",
      bullets: ["Base vehicle selection", "Full teardown", "Component cataloguing", "Chassis inspection"],
      partner: "ASM Auto Recycling"
    },
    {
      n: "02",
      t: "Design & Engineering",
      video: "/src/assets/DESIGN_ENGINEERING_001.mp4",
      body: "Body shell is 3D scanned to sub-millimetre accuracy, producing a complete digital twin. Engineers iterate CAD designs for structural optimisation and modern performance.",
      bullets: ["3D scanning & digital twin", "CAD modelling", "Structural optimisation", "Aero & thermal sims"],
      partner: "T3DMC • BAMD Composites"
    },
    {
      n: "03",
      t: "Coach Building",
      video: "/src/assets/Manufacturing_001.mp4",
      body: "At the heart of the syndicatedrestomod build is to create a coach built Aluminium body  to showcase the artisan skills of our build partners.",
      bullets: ["Hand formed bodywork", "Lightweight aluminium", "Coach built techniques", "Hand built by craftsmen"],
      partner: "Coventry Metalcraft • Silverstone"
    },
    {
      n: "04",
      t: "Additive Manufacturing",
      video: "/src/assets/FINSHING_AND_VALIDATION_001.mp4",
      body: "The syndicatedrestomod build is designed to showcase the bleeding edge technology at our disposal through our manufacturing partners to deliver rapid prototyping to the build efficiency as well as the use of polymer and specialist metals.",
      bullets: ["Polymer plastics printing ", "Titanium alloy printing", "Interior & Exterior parts and components", "Rapid development"],
      partner: "DMC"
    }
  ];
};
const getSpecs = async () => {
  return [
    { l: "Base", v: "1987 Ford Sierra Cosworth RS500 #148" },
    { l: "Engine", v: "Reworked YB 2.0L turbocharged inline-4" },
    { l: "Target Power", v: "550+ bhp" },
    { l: "Bodywork", v: "Coachbuilt Aluminium + Composite" },
    { l: "Chassis", v: "Reinforced shell, modern suspension geometry" },
    { l: "Production", v: "1 of 1" }
  ];
};
async function fetchSeoMetadata(slug, fallback) {
  const apiUrl = typeof process !== "undefined" && process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
  try {
    const res = await fetch(`${apiUrl}/seos/slug/${slug}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    if (json.success && json.data) {
      return {
        title: json.data.title || fallback.title,
        description: json.data.description || fallback.description,
        keywords: json.data.keywords || fallback.keywords,
        og_title: json.data.og_title || fallback.og_title,
        og_description: json.data.og_description || fallback.og_description,
        og_image: json.data.og_image || fallback.og_image
      };
    }
  } catch (error) {
    console.debug(`[SEO] Offline fallback for ${slug}:`, error.message);
  }
  return fallback;
}
function mapSeoToMeta(seo) {
  const metaTags = [];
  if (seo.title) metaTags.push({ title: seo.title });
  if (seo.description) metaTags.push({ name: "description", content: seo.description });
  if (seo.keywords) metaTags.push({ name: "keywords", content: seo.keywords });
  if (seo.og_title) metaTags.push({ property: "og:title", content: seo.og_title });
  if (seo.og_description) metaTags.push({ property: "og:description", content: seo.og_description });
  if (seo.og_image) metaTags.push({ property: "og:image", content: seo.og_image });
  if (seo.og_url) metaTags.push({ property: "og:url", content: seo.og_url });
  if (seo.og_type) metaTags.push({ property: "og:type", content: seo.og_type });
  if (seo.twitter_card) metaTags.push({ name: "twitter:card", content: seo.twitter_card });
  if (seo.twitter_title) metaTags.push({ name: "twitter:title", content: seo.twitter_title });
  if (seo.twitter_description) metaTags.push({ name: "twitter:description", content: seo.twitter_description });
  if (seo.twitter_image) metaTags.push({ name: "twitter:image", content: seo.twitter_image });
  return metaTags;
}
const Route$6 = createFileRoute("/the-build")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("the-build", {
      title: "The Build | Syndicate RS500 Restomod",
      description: "Four phases of the Syndicate build: acquisition & strip, design & engineering, manufacturing, finishing & validation. Engineered in the open.",
      og_title: "The Build | Syndicate",
      og_description: "Engineered in the open. Every stage documented."
    });
    const phasesPromise = getPhases();
    const specsPromise = getSpecs();
    const [seo, phases, specs] = await Promise.all([
      seoPromise,
      phasesPromise,
      specsPromise
    ]);
    return { seo, phases, specs };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Build | Syndicate RS500 Restomod",
      description: "Four phases of the Syndicate build: acquisition & strip, design & engineering, manufacturing, finishing & validation. Engineered in the open.",
      og_title: "The Build | Syndicate",
      og_description: "Engineered in the open. Every stage documented."
    })
  }),
  component: TheBuildPage
});
function TheBuildPage() {
  useReveal();
  const { phases, specs } = Route$6.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-ink text-bone overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "The Build Process",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Engineered ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "In The Open." })
        ] }),
        subtitle: "Every stage documented. Every decision visible. From bare shell to first ignition, syndicate members travel with the build from day one.",
        video: heroVideo$1,
        videoClassName: "opacity-60",
        overlayClassName: "bg-gradient-to-b from-ink/30 via-ink/50 to-ink"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-32", children: phases.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: `reveal grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border border-white/10 group", children: p.img ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.img,
              alt: p.t,
              loading: "lazy",
              className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            }
          ) : p.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              src: p.video,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            }
          ) : null }) }),
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
        ]
      },
      p.n
    )) }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/apply",
          className: "reveal inline-block px-12 py-5 bg-acid text-ink font-semibold uppercase tracking-widest rounded-full hover:bg-bone transition-colors",
          children: "Apply for Allocation"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const getPageEvents = async () => {
  return [
    {
      date: "October 2026",
      title: "Build Facility Open Day",
      desc: "Exclusive behind-the-scenes access for confirmed syndicate members. See the chassis in progress, meet the fabrication team, and review panel fitment firsthand.",
      location: "Silverstone Park, UK",
      status: "Members Only",
      longDesc: "An exclusive invitation to go behind the closed doors of our main build facility at Silverstone. You will stand next to the stripped chassis of RS500 #148, inspect the structural enhancements and CAD alignments, and discuss the chassis preparation directly with our lead fabricators. Lunch and refreshments will be provided.",
      schedule: [
        "09:30 AM - Welcome & Registration",
        "10:00 AM - Keynote from Build Director",
        "10:45 AM - Chassis #148 Live Walkthrough",
        "12:00 PM - Lunch & Networking",
        "01:30 PM - Live Metalwork Demonstration",
        "03:00 PM - Closing Q&A"
      ],
      capacity: "Capped at 25 participants",
      requirements: "Active membership required. Closed-toe footwear is mandatory for the workshop floor."
    },
    {
      date: "July 2027",
      title: "Goodwood Members' Meeting",
      desc: "Syndicate will have a dedicated paddock presence. Syndicate members receive hospitality passes and grid walk access.",
      location: "Goodwood Circuit, UK",
      status: "Public + Members",
      longDesc: "Join us at one of the most prestigious events in the historic motorsport calendar. Syndicate will have a dedicated paddock presence showcasing our build progress, components, and design materials. Members receive full weekend hospitality passes, access to the Syndicate enclosure, and an exclusive grid walk opportunity before the main historic touring car race.",
      schedule: [
        "Saturday 08:00 AM - Paddock Access & Morning Tea",
        "Saturday 11:30 AM - Syndicate Enclosure Lunch",
        "Saturday 03:00 PM - Grid Walk Experience",
        "Sunday 09:00 AM - Historic Race Commentary",
        "Sunday 01:00 PM - Members Dining Experience",
        "Sunday 05:00 PM - Event Wrap-up"
      ],
      capacity: "12 Member passes available",
      requirements: "Goodwood dress code applies (jacket & tie for gentlemen). Grid walk passes must be booked 30 days in advance."
    },
    {
      date: "SEP 2026",
      title: "Design Review Weekend",
      desc: "Final design sign-off event. Members vote on remaining specification choices: wheel finish, interior stitch colour, and livery details.",
      location: "Silverstone Park, UK",
      status: "Members Only",
      longDesc: "A critical milestone in the syndicatedrestomod project. This weekend, members gather at Silverstone to review the finalized exterior surface scan, touch material samples, and cast votes on final customization choices. Make your mark on the build: vote on wheel finishes, interior leather stitching patterns, and custom livery details.",
      schedule: [
        "10:00 AM - Morning Briefing & CAD Twin Showcase",
        "11:00 AM - Material Samples Touch & Feel Session",
        "12:30 PM - Buffet Lunch",
        "02:00 PM - Voting and Customization Debate",
        "04:00 PM - Voting Results Announcement",
        "06:00 PM - Member Dinner"
      ],
      capacity: "All members invited",
      requirements: "Member portal authentication required for voting."
    },
    {
      date: "Nov 2027",
      title: "Track Day Silverstone Anglesey Circuit",
      desc: "First shakedown and member track experience. Professional instruction provided. Photography and videography included.",
      location: "Silverstone, UK",
      status: "Members Only",
      longDesc: "The first official driving event for the Syndicate RS500. This Anglesey track day will serve as the initial high-speed shakedown. Members will have the opportunity to ride alongside our professional test drivers, experience the YB turbo engine at full throttle, and receive track driving instruction on the iconic coastal circuit. Full media coverage (photo/video) is included for all attendees.",
      schedule: [
        "08:00 AM - Arrival & Safety Briefing",
        "09:00 AM - Track Opens & Instructor Laps",
        "10:30 AM - Member Co-Pilot Sessions",
        "12:30 PM - Lunch & Debrief",
        "01:30 PM - High-Speed Testing and Telemetry Review",
        "04:30 PM - Track Closes & Champagne Toast"
      ],
      capacity: "Strictly members only",
      requirements: "Valid driving license required for track instruction. Helmets provided."
    }
  ];
};
const getFaqs = async () => {
  return [
    {
      q: "What is a syndicated restomod?",
      a: "Instead of one owner funding an entire build, a small group of enthusiasts co-invest in a single vehicle. Each member gets allocated drive time, event access, and equity in the appreciating asset — all managed by Syndicate."
    },
    {
      q: "How much does allocation cost?",
      a: "There are 10 Platinum Syndicate Slots at £25,000 and 20 Silver Syndicate Members at £5000."
    },
    {
      q: "How many shares are available?",
      a: "Each build is strictly capped at 12 shares. This ensures meaningful access for every member while preserving the exclusivity that makes these cars special."
    },
    {
      q: "Can I sell my share?",
      a: "Yes. Shares can be transferred to approved buyers through Syndicate at any time. We handle the valuation, documentation, and introduction to the buyer pool."
    },
    {
      q: "What happens if the build goes over budget?",
      a: "Build costs are fixed at the point of allocation. Any overruns are absorbed by Syndicate and our partner network. Your share price will not change post-commitment."
    },
    {
      q: "Do I get to drive the car?",
      a: "Absolutely. Every member receives an annual allocation of drive days, track sessions, and road tours. The schedule is coordinated democratically through the member portal."
    },
    {
      q: "Where is the car stored?",
      a: "Vehicles are stored in a climate-controlled secure facility at Silverstone Park, maintained by our in-house team. Members can arrange visits by appointment."
    },
    {
      q: "How do I apply?",
      a: "Submit an application through our Apply page. We review every application personally and aim to respond within 7 business days. A brief phone call is part of the process."
    }
  ];
};
const Route$5 = createFileRoute("/events")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("events", {
      title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
      og_title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      og_description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions."
    });
    const eventsPromise = getPageEvents();
    const faqsPromise = getFaqs();
    const [seo, events, faqs] = await Promise.all([
      seoPromise,
      eventsPromise,
      faqsPromise
    ]);
    return { seo, events, faqs };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
      og_title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      og_description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions."
    })
  }),
  component: EventsPage
});
function EventsPage() {
  useReveal();
  const { events, faqs } = Route$5.useLoaderData();
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [selectedEventIdx, setSelectedEventIdx] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (selectedEventIdx === null) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedEventIdx(null);
      if (e.key === "ArrowRight") {
        setSelectedEventIdx((prev) => prev !== null && prev < events.length - 1 ? prev + 1 : 0);
      }
      if (e.key === "ArrowLeft") {
        setSelectedEventIdx((prev) => prev !== null && prev > 0 ? prev - 1 : events.length - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEventIdx, events.length]);
  const currentEvent = selectedEventIdx !== null ? events[selectedEventIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ink text-bone", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Community",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Events & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Answers" }),
          "."
        ] }),
        subtitle: "Join us at the track, in the workshop, and everywhere in between. Every question answered below.",
        video: heroVideo$1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "01 — Calendar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Upcoming Events" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 max-w-md", children: "From build open-days to track experiences, the syndicate calendar is designed to maximise your connection to the car and the community." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => setSelectedEventIdx(i),
          className: "bg-carbon border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-acid/40 hover:bg-carbon/80 cursor-pointer transition-all duration-500 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-32 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-acid uppercase tracking-widest", children: ev.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-acid" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-bone/60 uppercase tracking-wider", children: ev.status })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl mb-2 group-hover:text-acid transition-colors", children: ev.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 leading-relaxed", children: ev.desc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-48 shrink-0 md:text-right flex flex-col md:items-end justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-bone/40 uppercase tracking-widest mb-2", children: ev.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-acid opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: "View Details →" })
            ] })
          ]
        }
      ) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedEventIdx !== null && currentEvent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink/95 backdrop-blur-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: () => setSelectedEventIdx(null) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.95, y: 20 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 20 },
              transition: { type: "spring", duration: 0.5 },
              className: "relative w-full max-w-4xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 grid md:grid-cols-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedEventIdx(null),
                    "aria-label": "Close details",
                    className: "absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 p-8 bg-ink/40 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between max-h-[40vh] md:max-h-[85vh] overflow-y-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-acid/10 border border-acid/20 text-acid font-mono text-[10px] uppercase tracking-wider mb-4", children: currentEvent.status }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-gradient-bone leading-tight", children: currentEvent.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t border-white/10 pt-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-acid shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-bone/40", children: "Date & Time" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-bone", children: currentEvent.date })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-acid shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-bone/40", children: "Location" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-bone", children: currentEvent.location })
                        ] })
                      ] }),
                      currentEvent.capacity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-acid shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-bone/40", children: "Attendance" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bone/80", children: currentEvent.capacity })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-bone/40 font-mono text-[10px] uppercase tracking-[0.25em]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setSelectedEventIdx((prev) => prev !== null && prev > 0 ? prev - 1 : events.length - 1),
                        className: "hover:text-acid flex items-center gap-1 transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" }),
                          " Prev"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      selectedEventIdx + 1,
                      " / ",
                      events.length
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setSelectedEventIdx((prev) => prev !== null && prev < events.length - 1 ? prev + 1 : 0),
                        className: "hover:text-acid flex items-center gap-1 transition-colors",
                        children: [
                          "Next ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 p-8 flex flex-col justify-between max-h-[50vh] md:max-h-[85vh] overflow-y-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-3", children: "About the Event" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-sm md:text-base leading-relaxed", children: currentEvent.longDesc || currentEvent.desc })
                    ] }),
                    currentEvent.schedule && currentEvent.schedule.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-4", children: "Event Schedule" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-white/10 ml-2 space-y-4", children: currentEvent.schedule.map((item, idx) => {
                        const [time, ...rest] = item.split(" - ");
                        const text = rest.join(" - ");
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-6", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-[-4.5px] top-[6px] h-2 w-2 rounded-full bg-acid" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-acid uppercase tracking-wider mb-0.5", children: time }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bone/70", children: text })
                        ] }, idx);
                      }) })
                    ] }),
                    currentEvent.requirements && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink/30 border border-white/5 p-4 flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-acid shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-mono text-[10px] uppercase tracking-wider text-acid mb-1", children: "Key Requirements" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bone/60 leading-relaxed", children: currentEvent.requirements })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-white/10 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/apply",
                      onClick: () => setSelectedEventIdx(null),
                      className: "px-6 py-2.5 bg-acid text-ink font-semibold uppercase tracking-widest text-[10px] rounded-full hover:bg-bone transition-colors",
                      children: "Request Invite →"
                    }
                  ) })
                ] })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 grain relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "02 — FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Common Questions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-carbon border rounded-lg transition-colors duration-300 ${openFaq === i ? "border-acid/40" : "border-white/10 hover:border-white/20"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpenFaq(openFaq === i ? null : i),
                className: "w-full flex items-center justify-between p-6 text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg pr-4", children: faq.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-acid border-acid text-ink rotate-45" : "text-bone/60"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" }) })
                    }
                  )
                ]
              }
            ),
            openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 leading-relaxed", children: faq.a }) })
          ]
        }
      ) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 text-center border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl leading-[0.95] mb-6", children: [
        "Still Have ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Questions" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg mb-10 max-w-xl mx-auto", children: "We are happy to talk through anything that is not covered above. No obligation, no pressure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          className: "inline-block px-10 py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300",
          children: "Contact The Team"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const videoCarSection$1 = "/assets/LIBRARY_OF_INTENT-CcxMx2Ke.mp4";
const getGalleryItems = async () => {
  return [
    {
      video: "/src/assets/RS500_REIMAGINED_MORPHING.mp4",
      img: "/src/assets/rs500-hero.jpg",
      t: "RS500 Reimagined",
      tag: "Render",
      span: "md:col-span-2 md:row-span-2",
      desc: "The ultimate design study of the Syndicate RS500, visualised in a modern studio environment. The design respects the original 1987 Sierra shape while introducing advanced aerodynamics, carbon composite elements, and an aggressive stance.",
      details: [
        { label: "Category", value: "Visualisation" },
        { label: "Creator", value: "Al Yasid Oozeear" },
        { label: "Phase", value: "02 - Design & Engineering" }
      ]
    },
    {
      img: "/src/assets/COMPOSITE.png",
      t: "COMPOSITE PARTS",
      tag: "Detail",
      desc: "An in-depth look at the bespoke autoclave-cured carbon fiber wing and aerodynamic body panels. These components are developed in collaboration with BAMD Composites to ensure minimal weight and optimal downforce.",
      details: [
        { label: "Material", value: "Prepreg Carbon Fiber" },
        { label: "Partner", value: "BAMD Composites" },
        { label: "Weight Reduction", value: "40% vs OEM" }
      ]
    },
    {
      img: "/src/assets/ENGINE.png",
      t: "ENGINE & DRIVETRAIN ",
      tag: "Component",
      desc: "The legendary Cosworth YB 2.0L block, completely stripped and reworked. Featuring a custom billet block, modern motorsport-spec ECU, hybrid turbocharger, and a bespoke exhaust manifold engineered for high-RPM reliability.",
      details: [
        { label: "Configuration", value: "2.0L Inline-4 Turbo" },
        { label: "Target Power", value: "550+ bhp" },
        { label: "Engineering Partner", value: "MAHLE Group" }
      ]
    },
    {
      img: "/src/assets/DIGITAL_TWIN.JPG",
      t: "Digital Twin",
      tag: "Engineering",
      span: "md:col-span-2",
      desc: "A high-precision 3D scan of Sierra RS500 chassis #148. Every bracket, weld, and structural channel was mapped to sub-millimetre accuracy to create a perfect digital twin for bodywork development and custom component design.",
      details: [
        { label: "Scanning Tech", value: "GOM Atos Triple Scan" },
        { label: "Point Cloud", value: "78.4 Million Points" },
        { label: "Partner", value: "T3DMC" }
      ]
    },
    {
      img: "/src/assets/additive_manufacturing .png",
      t: "ADDITIVE MANUFACTURING",
      tag: "Process",
      desc: "Custom suspension uprights and cooling duct brackets produced via advanced selective laser melting (SLM) 3D printing. This allows us to create structurally optimized parts that are impossible to machine traditionally.",
      details: [
        { label: "Method", value: "SLM Metal 3D Printing" },
        { label: "Material", value: "Scalmalloy® Alloy" },
        { label: "Partner", value: "DMC Silverstone" }
      ]
    },
    {
      img: "/src/assets/CAD_AND_DESIGN.jpg",
      t: "CAD & DESIGN ",
      tag: "Manufacturing",
      desc: "The complete digital assembly of the restomod. Engineering models verify clearances for the dry-sump oil system, custom suspension kinematics, and internal cockpit cooling channels before any physical fabrication begins.",
      details: [
        { label: "Software", value: "Siemens NX / SolidWorks" },
        { label: "System", value: "Full Vehicle Assembly" },
        { label: "Status", value: "Signed Off" }
      ]
    },
    {
      img: "/src/assets/WORKSHOP_CAPTURE.JPG",
      t: "Workshop Capture",
      tag: "On Set",
      span: "md:col-span-2",
      desc: "A raw, unedited glimpse into the main workshop at Coventry Metalcraft. The bare shell of RS500 #148 is mounted on the jig, undergoing structural prep, seam welding, and reinforcement for the high-power drivetrain.",
      details: [
        { label: "Location", value: "Coventry Metalcraft" },
        { label: "Stage", value: "Bare Metal Restoration" },
        { label: "Chassis ID", value: "RS500 #148" }
      ]
    },
    {
      img: "/src/assets/HAND_FABRICATION.JPG",
      t: "Hand Fabrication",
      tag: "Coachbuilding",
      desc: "Master coachbuilders shaping and preparing custom aluminum wheel arches and internal panels. Hand-forming is blended with CAD accuracy to maintain the traditional handcrafted soul of the vehicle.",
      details: [
        { label: "Craft", value: "English Wheel & Jig Fitting" },
        { label: "Skill", value: "Master Coachbuilding" },
        { label: "Hours Logged", value: "120+ hrs" }
      ]
    }
  ];
};
const Route$4 = createFileRoute("/design-gallery")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("design-gallery", {
      title: "Design Gallery | Syndicate RS500",
      description: "A visual reference library for the Syndicate RS500 build — renders, details, materials, and process imagery.",
      og_title: "Design Gallery | Syndicate",
      og_description: "Renders, details, materials, process imagery."
    });
    const itemsPromise = getGalleryItems();
    const [seo, items] = await Promise.all([seoPromise, itemsPromise]);
    return { seo, items };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Design Gallery | Syndicate RS500",
      description: "A visual reference library for the Syndicate RS500 build — renders, details, materials, and process imagery.",
      og_title: "Design Gallery | Syndicate",
      og_description: "Renders, details, materials, process imagery."
    })
  }),
  component: GalleryPage
});
function GalleryPage() {
  useReveal();
  const { items } = Route$4.useLoaderData();
  const [selectedIdx, setSelectedIdx] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (selectedIdx === null) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => prev !== null && prev < items.length - 1 ? prev + 1 : 0);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => prev !== null && prev > 0 ? prev - 1 : items.length - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx, items.length]);
  const currentItem = selectedIdx !== null ? items[selectedIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-ink text-bone overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Design Gallery",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "A Library of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Intent." })
        ] }),
        subtitle: "Renders, scans, details, materials, and process imagery from the Syndicate design phase — a living archive of the build as it develops.",
        video: videoCarSection$1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-carbon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 grid-cols-2 auto-rows-[16rem] gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reveal ${it.span ?? ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        onClick: () => setSelectedIdx(i),
        className: "relative h-full w-full overflow-hidden border border-white/10 group bg-ink cursor-pointer",
        children: [
          it.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              src: it.video,
              poster: it.img,
              autoPlay: true,
              muted: true,
              loop: true,
              playsInline: true,
              className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.img,
              alt: it.t,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-acid mb-1", children: it.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-bone", children: it.t })
          ] })
        ]
      }
    ) }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedIdx !== null && currentItem && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink/95 backdrop-blur-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: () => setSelectedIdx(null) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.95, y: 20 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 20 },
              transition: { type: "spring", duration: 0.5 },
              className: "relative w-full max-w-6xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden grid lg:grid-cols-12 shadow-2xl z-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedIdx(null),
                    "aria-label": "Close details",
                    className: "absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative bg-ink/50 flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[75vh] border-b lg:border-b-0 lg:border-r border-white/10 group/img", children: [
                  currentItem.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "video",
                    {
                      src: currentItem.video,
                      poster: currentItem.img,
                      controls: true,
                      autoPlay: true,
                      loop: true,
                      playsInline: true,
                      className: "w-full h-full object-contain"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: currentItem.img,
                      alt: currentItem.t,
                      className: "w-full h-full object-contain"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        setSelectedIdx((prev) => prev !== null && prev > 0 ? prev - 1 : items.length - 1);
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
                        setSelectedIdx((prev) => prev !== null && prev < items.length - 1 ? prev + 1 : 0);
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-acid tracking-[0.2em] uppercase mb-2", children: currentItem.tag }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-gradient-bone leading-tight", children: currentItem.t })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-sm md:text-base leading-relaxed", children: currentItem.desc }),
                    currentItem.details && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-6 space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-acid", children: "Specifications & Details" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: currentItem.details.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Syndicate syndicatedrestomod" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      selectedIdx + 1,
                      " / ",
                      items.length
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 text-center border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal", children: "More Coming" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-4xl md:text-6xl leading-[1] mb-10", children: [
        "The gallery grows with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "every milestone." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal text-bone/70 mb-10 leading-relaxed", children: "Syndicate members receive the full-resolution archive, plus exclusive imagery from inside each partner workshop." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/the-build",
            className: "reveal px-8 py-4 border border-white/30 text-bone uppercase tracking-widest text-sm rounded-full hover:border-acid hover:text-acid transition-colors",
            children: "See the Build →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/apply",
            className: "reveal px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors",
            children: "Apply for Allocation"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const getDirectLines = async () => {
  return [
    { label: "General Inquiries", email: "hello@synmod.build" },
    { label: "Syndicate Applications", email: "apply@synmod.build" },
    { label: "Press & Media", email: "press@synmod.build" },
    { label: "Partnerships", email: "partners@synmod.build" }
  ];
};
const getWorkshopAddress = async () => {
  return [
    "Syndicate Build Facility",
    "Unit 7, Silverstone Park",
    "Northamptonshire, NN12 8TN",
    "United Kingdom"
  ];
};
const submitContactForm = createServerFn({ method: "POST" }).inputValidator(
  objectType({
    name: stringType(),
    email: stringType().email(),
    subject: stringType(),
    message: stringType()
  })
).handler(async ({ data }) => {
  console.info("Server received contact submission:", data);
  const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
  try {
    const res = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: data.name.split(" ")[0] || "",
        last_name: data.name.split(" ").slice(1).join(" ") || "",
        email: data.email,
        phone: "N/A",
        message: `Subject: ${data.subject}

${data.message}`
      })
    });
    const json = await res.json();
    if (res.ok && json.success) {
      return { success: true, offline: false };
    }
  } catch (err) {
    console.warn("Backend API not reachable, falling back to mock/offline success:", err.message);
  }
  return { success: true, offline: true };
});
const Route$3 = createFileRoute("/contact")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("contact", {
      title: "Contact — Syndicate | Syndicated Restomod Build",
      description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      og_title: "Contact — Syndicate | Syndicated Restomod Build",
      og_description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome."
    });
    const directLinesPromise = getDirectLines();
    const workshopAddressPromise = getWorkshopAddress();
    const [seo, directLines, workshopAddress] = await Promise.all([
      seoPromise,
      directLinesPromise,
      workshopAddressPromise
    ]);
    return { seo, directLines, workshopAddress };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Contact — Syndicate | Syndicated Restomod Build",
      description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      og_title: "Contact — Syndicate | Syndicated Restomod Build",
      og_description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome."
    })
  }),
  component: ContactPage
});
function ContactPage() {
  useReveal();
  const { directLines, workshopAddress } = Route$3.useLoaderData();
  const [form, setForm] = reactExports.useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitContactForm({ data: form });
      if (res.success) {
        setSent(true);
        setTimeout(() => setSent(false), 4e3);
        if (res.offline) {
          try {
            const submissions = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
            submissions.push({ ...form, submitted_at: (/* @__PURE__ */ new Date()).toISOString() });
            localStorage.setItem("contact_submissions", JSON.stringify(submissions));
          } catch (storageErr) {
            console.error("Failed to save to localStorage:", storageErr);
          }
        }
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      setSent(true);
      setTimeout(() => setSent(false), 4e3);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ink text-bone", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Get In Touch",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Let's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Talk" }),
          "."
        ] }),
        subtitle: "Press inquiries, partnership proposals, or questions about the syndicate — we read every message personally.",
        video: heroVideo$1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "01 — Direct Lines" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl leading-[1.05] mb-8", children: "Reach The Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: directLines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-bone/40 uppercase tracking-widest mb-2", children: line.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${line.email}`, className: "text-lg text-bone hover:text-acid transition-colors", children: line.email })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-bone/40 uppercase tracking-widest mb-3", children: "Workshop" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 leading-relaxed", children: workshopAddress.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            line,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon border border-white/10 rounded-lg p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "02 — Send A Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-8", children: "Write To Us" }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto mb-6 rounded-full bg-acid/10 border border-acid/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-acid", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl mb-2", children: "Message Sent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60", children: "We will be in touch within 48 hours." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors",
                placeholder: "Your full name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                type: "email",
                value: form.email,
                onChange: (e) => setForm({ ...form, email: e.target.value }),
                className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors",
                placeholder: "you@example.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                required: true,
                value: form.subject,
                onChange: (e) => setForm({ ...form, subject: e.target.value }),
                className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone focus:outline-none focus:border-acid/50 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a subject" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "syndicate", children: "Syndicate Application Question" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "press", children: "Press & Media" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "partnership", children: "Partnership" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Inquiry" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                rows: 5,
                value: form.message,
                onChange: (e) => setForm({ ...form, message: e.target.value }),
                className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors resize-none",
                placeholder: "Tell us what is on your mind..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "w-full py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300",
              children: "Send Message"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 grain relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "Questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Common Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg max-w-2xl mx-auto mb-10", children: "Everything you need to know about joining the Syndicate syndicate, from allocation to ownership structure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/events",
          className: "inline-block px-10 py-4 border-2 border-white/20 text-bone text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:border-acid hover:text-acid transition-all duration-300",
          children: "View FAQ & Events"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const heroVideo = "/assets/Hero_001-B52X2wuK.mp4";
const getApplySteps = async () => {
  return [
    { n: "01", t: "Register Interest", b: "Submit the form below. We respond within 48 hours." },
    { n: "02", t: "Discovery Call", b: "A 30-min call to walk through the syndicate model and answer questions." },
    { n: "03", t: "Allocation Offer", b: "Receive a formal allocation document outlining cost, structure, and timeline." },
    { n: "04", t: "Secure Position", b: "Sign and fund. You're in. Welcome to Syndicate." }
  ];
};
const submitApplyForm = createServerFn({ method: "POST" }).inputValidator(
  objectType({
    firstName: stringType(),
    lastName: stringType(),
    email: stringType().email(),
    phone: stringType().optional(),
    country: stringType().optional(),
    allocation: stringType(),
    message: stringType().optional()
  })
).handler(async ({ data }) => {
  console.info("Server received application submission:", data);
  const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
  try {
    const res = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || "N/A",
        message: `Country: ${data.country || "N/A"}
Allocation Interest: ${data.allocation}

${data.message || ""}`
      })
    });
    const json = await res.json();
    if (res.ok && json.success) {
      return { success: true, offline: false };
    }
  } catch (err) {
    console.warn("Backend API not reachable for applications, falling back to mock/offline success:", err.message);
  }
  return { success: true, offline: true };
});
const Route$2 = createFileRoute("/apply")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("apply", {
      title: "Apply for Allocation | Syndicate",
      description: "Apply for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available.",
      og_title: "Apply for Allocation | Syndicate",
      og_description: "Limited syndicate positions for the Syndicate RS500 build."
    });
    const stepsPromise = getApplySteps();
    const [seo, steps] = await Promise.all([seoPromise, stepsPromise]);
    return { seo, steps };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Apply for Allocation | Syndicate",
      description: "Apply for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available.",
      og_title: "Apply for Allocation | Syndicate",
      og_description: "Limited syndicate positions for the Syndicate RS500 build."
    })
  }),
  component: ApplyPage
});
function ApplyPage() {
  useReveal();
  const { steps } = Route$2.useLoaderData();
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-ink text-bone overflow-x-hidden min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Syndicate Availability",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Apply for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Allocation." })
        ] }),
        subtitle: "A fixed number of syndicate positions. Strict allocation structure. Early applicants prioritised. Once filled, the opportunity closes.",
        video: heroVideo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-carbon border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-12 reveal", children: "How It Works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-px bg-white/10 border border-white/10", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon p-8 hover:bg-steel transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-acid mb-6", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 text-sm leading-relaxed", children: s.b })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal", children: "Application Form" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-4xl md:text-5xl leading-[1] mb-12", children: [
        "Register Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Interest." })
      ] }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal border border-acid bg-acid/5 p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-acid mb-4", children: "Application Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 mb-8", children: "Thank you. A member of the syndicate team will be in touch within 48 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-block px-8 py-3 border border-white/20 text-bone uppercase tracking-widest text-xs rounded-full hover:border-acid hover:text-acid transition-all", children: "Back to Home" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              firstName: formData.get("firstName"),
              lastName: formData.get("lastName"),
              email: formData.get("email"),
              phone: formData.get("phone") || "",
              country: formData.get("country") || "",
              allocation: formData.get("allocation"),
              message: formData.get("message") || ""
            };
            try {
              const res = await submitApplyForm({ data });
              if (res.success) {
                setSubmitted(true);
                if (res.offline) {
                  try {
                    const submissions = JSON.parse(localStorage.getItem("apply_submissions") || "[]");
                    submissions.push({ ...data, submitted_at: (/* @__PURE__ */ new Date()).toISOString() });
                    localStorage.setItem("apply_submissions", JSON.stringify(submissions));
                  } catch (storageErr) {
                    console.error("Failed to save application to localStorage:", storageErr);
                  }
                }
              }
            } catch (err) {
              console.error("Failed to submit application form:", err);
              setSubmitted(true);
            }
          },
          className: "reveal space-y-6 border border-white/10 bg-carbon p-8 md:p-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", name: "firstName", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", name: "lastName", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country of Residence", name: "country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2", children: "Allocation Interest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  required: true,
                  name: "allocation",
                  className: "w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select an option…" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Single allocation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Multiple allocations" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Lead syndicate position" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Just exploring" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2", children: "Tell Us About You" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  name: "message",
                  rows: 5,
                  className: "w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors resize-none",
                  placeholder: "Your background, what drew you to Syndicate, any questions…"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "w-full px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors",
                children: "Submit Application"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/40 text-xs font-mono uppercase tracking-[0.2em] text-center", children: "Your information is handled confidentially." })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        name,
        required,
        className: "w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors"
      }
    )
  ] });
}
const aboutDetail = "/assets/01_MISSION%20-Cu3ME3dV.png";
const videoPillarOne = "/assets/OUR_STORY-0mupV783.mp4";
const getPrinciples = async () => {
  return [
    {
      num: "01",
      title: "Analog Soul",
      text: "We preserve mechanical connection. Hydraulic steering. Manual gearboxes. Driver-first ergonomics. Technology serves the experience, never replaces it."
    },
    {
      num: "02",
      title: "Engineering Integrity",
      text: "Every component is traceable, tested, and validated. We partner with OEM-grade suppliers and motorsport specialists who share our obsession."
    },
    {
      num: "03",
      title: "Open Collaboration",
      text: "The syndicate model means owners are participants, not spectators. From design votes to build-week visits, transparency is our default."
    }
  ];
};
const getArchitects = async () => {
  return [
    { name: "IAN HOWE ", role: "Founder & Build Director", bio: "30 years experience in automotive & Fintech business", img: "/src/assets/Ian-Howe.png" },
    { name: "Simon Kiero Watson", role: "Commercial & Finance Oversight", bio: "Highly experienced Corporate Finance and Exchange Expert.", img: "/src/assets/Simon-KW.png" },
    { name: "Al Yasid Oozeear", role: "Digital Visualisor & Designer", bio: "Independent Automotive designer specialising in bespoke car design", img: "/src/assets/Al-Yasid.png" },
    { name: "Stuart Peach", role: "Project Co Founder", bio: "Partner in the syndicatedrestomod project and original custodian of #148", img: "/src/assets/Stuart-Peach.png" }
  ];
};
const Route$1 = createFileRoute("/about")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("about", {
      title: "About Us — Syndicate | Syndicated Restomod Build",
      description: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners.",
      og_title: "About Us — Syndicate | Syndicated Restomod Build",
      og_description: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners."
    });
    const principlesPromise = getPrinciples();
    const architectsPromise = getArchitects();
    const [seo, principles, architects] = await Promise.all([
      seoPromise,
      principlesPromise,
      architectsPromise
    ]);
    return { seo, principles, architects };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "About Us — Syndicate | Syndicated Restomod Build",
      description: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners.",
      og_title: "About Us — Syndicate | Syndicated Restomod Build",
      og_description: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners."
    })
  }),
  component: AboutPage
});
function AboutPage() {
  useReveal();
  const { principles, architects } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ink text-bone", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Our Story",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Built By ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Fanatics" }),
          ".",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Engineered To ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Last" }),
          "."
        ] }),
        subtitle: "Syndicate is more than a car. It is a collective of engineers, designers, and enthusiasts who believe the golden era of motorsport deserves a modern encore.",
        video: videoPillarOne
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "01 — Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl leading-[1.05] mb-6", children: [
          "Reimagine What A",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Restomod Can Be"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg leading-relaxed mb-6", children: "Traditional restorations preserve the past. Syndicate builds on it. We take iconic rally-bred silhouettes and infuse them with modern coach building engineering, additive manufacturing, and motorsport-grade safety — without losing the analog soul that makes these cars magical." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg leading-relaxed", children: "Every weld, every panel, every line of code in the ECU is obsessively considered. The result is not a replica. It is a rebirth." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: aboutDetail,
          alt: "Precision engineering detail",
          className: "w-full h-[500px] object-cover rounded-lg border border-white/10",
          loading: "lazy",
          width: 1024,
          height: 1024
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 grain relative border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "02 — Principles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "What Drives Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: principles.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon border border-white/10 rounded-lg p-8 hover:border-acid/30 transition-colors duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-5xl text-white/10 mb-6", children: v.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 leading-relaxed", children: v.text })
      ] }, v.num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "03 — Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "The Architects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-6", children: architects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon border border-white/10 rounded-lg p-6 text-center hover:border-acid/30 transition-colors duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto mb-4 rounded-full bg-steel border border-white/10 flex items-center justify-center overflow-hidden", children: p.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-acid", children: p.name.charAt(0) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-1", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-acid uppercase tracking-widest mb-3", children: p.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/50 text-sm leading-relaxed", children: p.bio })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl leading-[0.95] mb-6", children: [
        "Want To Join ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "The Build" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg mb-10 max-w-xl mx-auto", children: "Allocation is limited. Applications are reviewed personally by the build team." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/apply",
          className: "inline-block px-10 py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300",
          children: "Apply For Allocation"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const carbonTexture = "/assets/build-process-BNSHI9Rh.jpg";
const videoCarSection = "/assets/RS500_REIMAGINED_MORPHING-y9t4xghZ.mp4";
const getLiveSyndicates = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    {
      title: "syndicatedrestomod Sierra Cosworth RS500",
      img: "/src/assets/RS500_Studio_showcase.png",
      // In a real DB, this would be a URL
      allocation: [
        "£25,000 Platinum Allocation",
        "£5,000 Silver Allocation"
      ],
      stats: "10 Platinum Allocations • 20 Silver Allocations",
      return: "Potential Return: 77.1%*",
      isPlaceholder: false,
      waitlist: false
    },
    {
      title: "Next Build being assessed for Syndication",
      img: "/src/assets/SynModBuild-Round-WEB.png",
      allocation: ["TBD"],
      stats: "TBD",
      return: "TBD",
      isPlaceholder: false,
      waitlist: true,
      containImg: true
    },
    {
      title: "Something special in the longterm pipeline",
      img: "/src/assets/SynModBuild-Round-WEB.png",
      allocation: ["TBD"],
      stats: "TBD",
      return: "TBD",
      isPlaceholder: false,
      waitlist: true,
      containImg: true
    }
  ];
};
const getRecentlyFunded = async () => {
  return [
    {
      title: "Lamborghini Gallardo SE",
      img: "/src/assets/build-process.jpg",
      // Representing a dynamic image path
      date: "Funded Date — Dec 25",
      val: "Funded Value — £82,000",
      members: "Syndicate Members — 14"
    },
    {
      title: "Aston Martin V12 Vantage",
      img: "/src/assets/build-process.jpg",
      date: "Funded Date — Sep 25",
      val: "Funded Value — £66,000",
      members: "Syndicate Members — 21"
    },
    {
      title: "Porsche 996 GT3 RS",
      img: "/src/assets/build-process.jpg",
      date: "Funded Date — May 25",
      val: "Funded Value — £165,000",
      members: "Syndicate Members — 22"
    }
  ];
};
const getEvents = async () => {
  return [
    {
      type: "Syndicate Member Invitation",
      title: "Coventry Metalcraft",
      tag: "INVITE ONLY",
      description: "An opportunity to meet the UK's leading coach building company and syndicatedrestomod build partner",
      date: "TBA"
    },
    {
      type: "Syndicate Member Invitation",
      title: "Digital Manufacturing Centre - Silverstone",
      tag: "INVITE ONLY",
      description: "Emersion in Additive Manufacturing at this bleeding edge manufacturing facility in the heart of motorsport",
      date: "TBA"
    },
    {
      type: "THE CARCROWD SYNDICATE GATHERING",
      title: "Secret Meet 2026",
      tag: "INVITE ONLY",
      description: "",
      date: "TBA"
    }
  ];
};
const getPillars = async () => {
  return [
    {
      n: "01",
      title: "One of One Build",
      video: "/src/assets/PILLAR_01_ONE_OF_ONE_BUILD.mp4",
      img: "/src/assets/pillar-one-of-one.jpg",
      body: "There will never be another. Car #148 — the 148th of 500 RS500s ever built — reborn as a unique, documented, investment-grade restomod."
    },
    {
      n: "02",
      title: "World-Class Build Partners",
      video: "/src/assets/PILLAR_03_WROLD_CLASS.mp4",
      img: "/src/assets/pillar-partners.jpg",
      body: "The very best in innovative manufacturing and artisan craft — from coachbuilding to bleeding-edge additive manufacturing."
    },
    {
      n: "03",
      title: "Exclusive Access & Experience",
      video: "/src/assets/PILLAR_03_EXCLUSIVE_ACCESS.mp4",
      img: "/src/assets/pillar-experience.jpg",
      body: "Designed so syndicate members experience the finished car and the journey: build visits, drive events, private invitations."
    }
  ];
};
const getProcess = async () => {
  return [
    { n: "01", title: "Acquisition & Strip", items: ["Base vehicle selection", "Full teardown", "Digital scanning"] },
    { n: "02", title: "Design & Engineering", items: ["CAD modelling", "Structural optimisation", "Performance upgrades"] },
    { n: "03", title: "Manufacturing", items: ["Fabrication", "Additive manufacturing", "Precision assembly"] },
    { n: "04", title: "Finishing & Validation", items: ["Paint & livery", "Road & track testing", "Final sign-off"] }
  ];
};
const getPartners = async () => {
  return [
    { name: "T3DMC", role: "3D Scanning & Digital Twin" },
    { name: "ASM Auto Recycling", role: "Chassis Dismantling & Cataloguing" },
    { name: "Coventry Metalcraft", role: "Chassis prep, alignment & Precision Coach building" },
    { name: "Digital Manufacturing Centre - Silverstone", role: "Assembly & Additive Manufacturing" },
    { name: "BAMD Composites", role: "Composite Structures" },
    { name: "MAHLE Group", role: "Engine Rebuild & Performance" },
    { name: "Cornerstone Technologies", role: "Non-structural Skillsets" },
    { name: "HGL / VenueServe", role: "Membership Platform & Fan Portal" }
  ];
};
const getSyndicateSteps = async () => {
  return [
    { n: 1, title: "Syndicate Formation", body: "A fixed number of participants secure allocation." },
    { n: 2, title: "Build Phase", body: "Full transparency through content and direct access." },
    { n: 3, title: "Experience Phase", body: "Driving events, track days, private access." },
    { n: 4, title: "Exit Opportunity", body: "Potential sale of the asset at premium." }
  ];
};
const getBenefits = async () => {
  return [
    { icon: "⬡", title: "Build Access", items: ["Workshop visits", "Engineering insight"] },
    { icon: "◎", title: "Driving Access", items: ["Road drives", "Track sessions"] },
    { icon: "✦", title: "Events", items: ["Launch", "Private experiences"] },
    { icon: "◈", title: "Knowledge", items: ["Learn the build", "Understand the engineering"] }
  ];
};
const Route = createFileRoute("/")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("home", {
      title: "Syndicate | Syndicated Restomod Build",
      description: "Be part of the creation of an icon. A syndicated restomod build of the Ford Sierra Cosworth RS500, engineered in the open.",
      og_title: "Syndicate | Syndicated Restomod Build",
      og_description: "Syndicated restomod builds powered by TheCarCrowd."
    });
    const syndicatesPromise = getLiveSyndicates();
    const eventsPromise = getEvents();
    const recentlyFundedPromise = getRecentlyFunded();
    const pillarsPromise = getPillars();
    const processPromise = getProcess();
    const partnersPromise = getPartners();
    const syndicateStepsPromise = getSyndicateSteps();
    const benefitsPromise = getBenefits();
    const [
      seo,
      syndicates,
      events,
      recentlyFunded,
      pillars,
      process2,
      partners,
      syndicateSteps,
      benefits
    ] = await Promise.all([
      seoPromise,
      syndicatesPromise,
      eventsPromise,
      recentlyFundedPromise,
      pillarsPromise,
      processPromise,
      partnersPromise,
      syndicateStepsPromise,
      benefitsPromise
    ]);
    return {
      seo,
      syndicates,
      events,
      recentlyFunded,
      pillars,
      process: process2,
      partners,
      syndicateSteps,
      benefits
    };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Syndicate | Syndicated Restomod Build",
      description: "Be part of the creation of an icon. A syndicated restomod build of the Ford Sierra Cosworth RS500, engineered in the open.",
      og_title: "Syndicate | Syndicated Restomod Build",
      og_description: "Syndicated restomod builds powered by TheCarCrowd."
    })
  }),
  component: Index
});
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen w-full overflow-hidden grain flex items-center justify-center py-24 md:pt-28 md:pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: heroVideo,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-acid/15 blur-[140px] float-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-acid/10 blur-[140px] float-slow", style: { animationDelay: "2s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full flex flex-col items-center justify-center text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass-acid rounded-full px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom duration-1000", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-acid animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid", children: "Syndicate · Now Forming" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] max-w-6xl animate-in fade-in slide-in-from-bottom duration-1000 delay-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-bone", children: "Be Part of the" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-acid", children: "Creation of an Icon" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-bone/70 text-lg md:text-xl max-w-xl animate-in fade-in slide-in-from-bottom duration-1000 delay-200", children: "Syndicated Restomod Builds — engineered in the open, owned together, driven for life." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "btn-acid", children: "Apply for Allocation →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#intro", className: "btn-ghost", children: "Explore Syndicate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-8 max-w-2xl animate-in fade-in duration-1000 delay-500", children: [
        { k: "Car", v: "#148 / 500" },
        { k: "Allocations", v: "Limited" },
        { k: "Status", v: "Forming" }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 mb-1", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm md:text-base text-acid", children: s.v })
      ] }, s.k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 font-mono text-[10px] text-bone/40 tracking-[0.3em] uppercase", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-acid/60" }),
      "Scroll",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-acid/60" })
    ] })
  ] });
}
function SectionLabel({ kicker, title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: kicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl leading-[1] max-w-4xl", children: title })
  ] });
}
function Intro() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "intro", className: "relative py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { kicker: "● Not Just Ownership", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Not Just Ownership.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone/40", children: "Participation." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-6 text-bone/70 text-lg leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This is not a traditional restoration. This is not passive investment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "This is a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "syndicated restomod build" }),
          " where participants join the creation and future of a unique automotive asset."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-6 text-bone/60 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Syndicate members support the project from the earliest stage — funding the development of a one-of-one car, staying engaged with every phase of the build, and ultimately gaining firsthand access to the finished asset while sharing in the potential appreciation of its value over time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-bone text-xl pt-4 border-t border-white/10", children: "From strip-down to final drive — you are part of it." })
      ] })
    ] })
  ] }) });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6 border-y border-white/5 bg-carbon/50 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-bg pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl mb-12 text-center reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-bone/60", children: [
      "Powered By ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone", children: "TheCarCrowd" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5", children: [
      { n: "110", label: "CURATED ASSETS" },
      { n: "6000", label: "REGISTERED MEMBERS" },
      { n: "12.6", label: "ANNUAL RATE OF RETURN SINCE 2021" },
      { n: "2020", label: "FIRST CAR LAUNCHED" },
      { n: "60", label: "YEARS OF EXPERIENCE" }
    ].map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center py-6 px-2 bg-ink/60 hover:bg-ink transition-colors group flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-gradient-acid mb-2 group-hover:scale-105 transition-transform", children: st.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-bone/50 text-center", children: st.label })
    ] }, st.label)) })
  ] });
}
function Pillars({ pillars }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 px-6 bg-carbon overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-bg pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { kicker: "Why Syndicate", title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Built on three pillars." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-stagger grid md:grid-cols-3 gap-8", children: pillars.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl border border-white/10 bg-ink overflow-hidden hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] overflow-hidden relative", children: [
          p.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              src: p.video,
              autoPlay: true,
              muted: true,
              loop: true,
              playsInline: true,
              className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 glass-acid rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-bone", children: [
            "PILLAR ",
            p.n
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 -mt-16 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4 text-gradient-bone", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 leading-relaxed", children: p.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px w-12 bg-acid/60 group-hover:w-24 transition-all duration-500" })
        ] })
      ] }, p.n)) })
    ] })
  ] });
}
function TheCar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "car", className: "relative py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden border border-white/10 aspect-video", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          src: videoCarSection,
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          className: "w-full h-full object-cover hover:scale-102 transition-transform duration-700"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid", children: "RS500 Reimagined" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "The Car" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl leading-[1.05] mb-8", children: [
        "The Ford Sierra Cosworth RS500. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone/40", children: "Reimagined." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 leading-relaxed mb-8", children: "One of the most dominant touring cars ever built and a fan-favourite road icon — reinterpreted through modern engineering, advanced materials, precision manufacturing, and performance optimisation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 border-t border-white/10 pt-6", children: [
        "One-of-one build",
        "Engineering-led, not cosmetic",
        "Heritage-informed design",
        "Built for road and track"
      ].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 items-baseline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-acid", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone/90", children: h })
      ] }, h)) })
    ] })
  ] }) });
}
function LiveSyndicates({ syndicates }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "syndicates", className: "relative py-32 px-6 bg-carbon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionLabel,
      {
        kicker: "Active Opportunities",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Live Syndicates. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Open Allocations." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-stagger grid md:grid-cols-3 gap-8", children: syndicates.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `group border ${s.isPlaceholder ? "border-white/5" : "border-white/10 hover:border-acid"} bg-ink overflow-hidden transition-all duration-300 flex flex-col justify-between`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/10] overflow-hidden relative bg-carbon", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: s.img,
            alt: s.title,
            loading: "lazy",
            className: `h-full w-full transition-transform duration-700 ${s.containImg ? "object-contain p-6" : "object-cover"} ${s.isPlaceholder ? "blur-md opacity-30 grayscale scale-110" : "group-hover:scale-105"}`
          }
        ),
        !s.isPlaceholder && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 bg-acid text-ink px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-semibold", children: "Live" }),
        s.isPlaceholder && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-ink/60 backdrop-blur-md border border-white/10 text-bone/80 px-4 py-2 font-mono text-[10px] tracking-widest uppercase rounded", children: "Assessing for Syndication" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex-1 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-acid mb-6", children: (Array.isArray(s.allocation) ? s.allocation : [s.allocation]).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: line }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-bone/60 text-sm border-t border-white/5 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s.stats }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-bone/80 font-semibold", children: s.return })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: s.waitlist ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-2", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Email for waitlist",
              required: true,
              className: "bg-carbon border border-white/10 px-4 py-3 rounded-full text-bone placeholder:text-bone/40 focus:outline-none focus:border-acid w-full transition-colors text-xs text-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "w-full text-center py-3 border border-acid text-acid uppercase tracking-widest text-xs rounded-full hover:bg-acid/10 transition-all duration-300 font-semibold",
              children: "Join Waitlist"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#apply",
            className: "w-full inline-block text-center py-3 border border-white/20 text-bone uppercase tracking-widest text-xs rounded-full hover:border-acid hover:text-acid hover:bg-acid/5 transition-all duration-300",
            children: "Request Details"
          }
        ) })
      ] })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 reveal border border-white/10 bg-ink p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-acid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 lg:max-w-xl text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-acid tracking-widest uppercase mb-3", children: "Learn the process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl mb-3", children: "Want the full picture?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 text-sm md:text-base leading-relaxed", children: "Download our comprehensive Briefing Document to dive deeper into our acquisition strategy, engineering standards, and projected returns." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full lg:w-auto flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto lg:mx-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            placeholder: "Enter your email address",
            required: true,
            className: "bg-carbon border border-white/20 px-6 py-4 sm:py-3 rounded-full text-bone placeholder:text-bone/40 focus:outline-none focus:border-acid w-full sm:min-w-[280px] transition-colors text-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "bg-acid text-ink font-semibold uppercase tracking-widest text-xs px-8 py-4 sm:py-3 rounded-full hover:bg-bone transition-colors whitespace-nowrap",
            children: "Get Briefing PDF"
          }
        )
      ] }) })
    ] })
  ] }) });
}
function Partnership({ steps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6 bg-carbon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionLabel,
      {
        kicker: "Partnership",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "A New Model of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Automotive Ownership." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-px bg-white/10 border border-white/10", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon p-8 hover:bg-steel transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl text-acid mb-6", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 text-sm leading-relaxed", children: s.body })
    ] }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 reveal flex items-center gap-6 justify-center text-bone/50 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono uppercase tracking-[0.3em] text-xs", children: "Powered by Syndi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-white/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono uppercase tracking-[0.3em] text-xs", children: "In collaboration with The Car Crowd" })
    ] })
  ] }) });
}
function BuildProcess({ process: process2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "build", className: "relative py-32 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: videoCarSection,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { kicker: "The Build Process", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Engineered ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "in the open." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: process2.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-acid pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-2", children: [
          "Phase ",
          p.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-6 leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-bone/70 text-sm", children: p.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "—" }),
          i
        ] }, i)) })
      ] }, p.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal mt-16 text-center font-mono text-xs uppercase tracking-[0.3em] text-bone/50", children: "Every stage documented • Every decision visible" })
    ] })
  ] });
}
function Events({ events }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "events", className: "relative py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionLabel,
      {
        kicker: "Syndicate Community",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Upcoming Events & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Experiences." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal border border-white/10 bg-carbon p-8 flex flex-col justify-between hover:border-acid transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-acid tracking-widest uppercase", children: e.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/5 border border-white/10 px-2 py-0.5 rounded font-mono text-[9px] text-bone/60 tracking-wider", children: e.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: e.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-bone/40", children: e.date }),
        e.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-bone/60 leading-relaxed", children: e.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#apply",
          className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-acid hover:text-bone transition-colors",
          children: [
            "Request Invite ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm", children: "→" })
          ]
        }
      ) })
    ] }, e.title)) })
  ] }) });
}
function Partners({ partners }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "partners", className: "relative py-32 px-6 bg-carbon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { kicker: "Partners", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Built with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "specialists." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal text-bone/70 max-w-2xl mb-16 -mt-8 leading-relaxed", children: "The Syndicate RS500 is created with leading experts in coachbuilding, digital engineering, additive manufacturing, and specialist car builds." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10", children: partners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-carbon p-8 hover:bg-steel transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: [
        "Partner ",
        String(i + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-2", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/50 text-sm", children: p.role })
    ] }, p.name)) })
  ] }) });
}
function Benefits({ benefits }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { kicker: "Syndicate Benefits", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "More than an ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "investment." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-6", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal border border-white/10 p-8 hover:border-acid transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-acid text-4xl mb-6 font-mono", children: b.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-bone/60 text-sm", children: b.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "— ",
        i
      ] }, i)) })
    ] }, b.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reveal text-center mt-16 font-display text-2xl md:text-3xl text-bone/80", children: [
      "This is ownership ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "you can feel." })
    ] })
  ] }) });
}
function Value() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: carbonTexture, alt: "", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal", children: "The Value Proposition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-4xl md:text-6xl leading-[1] mb-10 max-w-3xl", children: [
        "A Different Kind of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Return." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal max-w-2xl text-bone/70 leading-relaxed mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "border-l-2 border-acid pl-6 italic font-display text-xl text-bone", children: '"Financial return is only part of the story."' }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        { t: "Shared Cost", b: "Of a high-value build" },
        { t: "Exclusive Asset", b: "A one-of-one engineered car" },
        { t: "Experiential", b: "Events, driving, access" },
        { t: "Upside Potential", b: "On future sale" }
      ].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal bg-ink/60 backdrop-blur border border-white/10 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-2 text-acid", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 text-sm", children: v.b })
      ] }, v.t)) })
    ] })
  ] });
}
function Apply() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", className: "relative py-40 px-6 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal font-mono text-xs tracking-[0.3em] uppercase text-acid mb-6", children: "Syndicate Availability" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-5xl md:text-7xl leading-[0.95] mb-10", children: [
      "Limited ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Allocation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "reveal text-bone/70 space-y-2 mb-12 inline-block text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Fixed number of syndicate positions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Strict allocation structure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "— Early applicants prioritised" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal text-bone/50 mb-10 font-mono uppercase tracking-[0.25em] text-xs", children: "Once filled, the opportunity closes." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "mailto:hello@syndicatedrestomod.com",
        className: "reveal inline-block px-12 py-5 bg-acid text-ink font-semibold uppercase tracking-widest rounded-full hover:bg-bone transition-colors",
        children: "Apply for Allocation"
      }
    )
  ] }) });
}
function Index() {
  useReveal();
  const {
    syndicates,
    events,
    recentlyFunded,
    pillars,
    process: process2,
    partners,
    syndicateSteps,
    benefits
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-ink text-bone overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pillars, { pillars }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TheCar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveSyndicates, { syndicates }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partnership, { steps: syndicateSteps }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BuildProcess, { process: process2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Events, { events }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, { partners }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, { benefits }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Value, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Apply, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const TheBuildRoute = Route$6.update({
  id: "/the-build",
  path: "/the-build",
  getParentRoute: () => Route$7
});
const EventsRoute = Route$5.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$7
});
const DesignGalleryRoute = Route$4.update({
  id: "/design-gallery",
  path: "/design-gallery",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const ApplyRoute = Route$2.update({
  id: "/apply",
  path: "/apply",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ApplyRoute,
  ContactRoute,
  DesignGalleryRoute,
  EventsRoute,
  TheBuildRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
