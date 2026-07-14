import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useReveal, N as Nav, P as PageHero, F as Footer } from "./site-CoFSfQEh.mjs";
import { h as heroVideo } from "./Hero_001-Czs966-j.mjs";
import { d as Route$2 } from "./router-D6gkI43S.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-D7_jbsHF.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ApplyPage() {
  useReveal();
  const steps = Route$2.useLoaderData();
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-ink text-bone overflow-x-hidden min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { kicker: "Syndicate Availability", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Apply for ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Allocation." })
    ] }), subtitle: "A fixed number of syndicate positions. Strict allocation structure. Early applicants prioritised. Once filled, the opportunity closes.", video: heroVideo }),
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
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "reveal space-y-6 border border-white/10 bg-carbon p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", name: "firstName", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", name: "lastName", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country of Residence", name: "country" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2", children: "Allocation Interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, name: "allocation", className: "w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select an option…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Single allocation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Multiple allocations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Lead syndicate position" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Just exploring" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2", children: "Tell Us About You" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, className: "w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors resize-none", placeholder: "Your background, what drew you to Syndicate, any questions…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors", children: "Submit Application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/40 text-xs font-mono uppercase tracking-[0.2em] text-center", children: "Your information is handled confidentially." })
      ] })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, className: "w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors" })
  ] });
}
export {
  ApplyPage as component
};
