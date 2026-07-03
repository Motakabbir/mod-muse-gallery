import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logo } from "./logo-4-ISZutHRh.mjs";
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-8", children: [
            NAV.map((n) => {
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
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apply", className: "btn-acid !py-2.5 !px-5 !text-[11px]", children: [
              "Apply ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ] })
          ] }),
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
  video
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
        className: "absolute inset-0 h-full w-full object-cover opacity-30"
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" }),
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
export {
  Footer as F,
  Nav as N,
  PageHero as P,
  useReveal as u
};
