import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useReveal, N as Nav, P as PageHero, F as Footer } from "./site-paN77MRt.mjs";
import { e as Route$1 } from "./router-CCJXtYGR.mjs";
import "../_libs/seroval.mjs";
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
import "./server-DBYqdG6E.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const aboutDetail = "/assets/01_MISSION%20-Cu3ME3dV.png";
const videoPillarOne = "/assets/OUR_STORY-0mupV783.mp4";
function AboutPage() {
  useReveal();
  const {
    principles,
    architects
  } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ink text-bone", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { kicker: "Our Story", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Built By ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Fanatics" }),
      ".",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Engineered To ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Last" }),
      "."
    ] }), subtitle: "Syndicate is more than a car. It is a collective of engineers, designers, and enthusiasts who believe the golden era of motorsport deserves a modern encore.", video: videoPillarOne }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutDetail, alt: "Precision engineering detail", className: "w-full h-[500px] object-cover rounded-lg border border-white/10", loading: "lazy", width: 1024, height: 1024 }) })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "inline-block px-10 py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300", children: "Apply For Allocation" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
