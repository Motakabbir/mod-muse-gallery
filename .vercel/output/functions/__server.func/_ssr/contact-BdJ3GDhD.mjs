import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useReveal, N as Nav, P as PageHero, F as Footer } from "./site-paN77MRt.mjs";
import { h as heroVideo } from "./Hero_002-BDf_P1XZ.mjs";
import { c as Route$3 } from "./router-H6Qytzl1.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./server-Bong7ss-.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  useReveal();
  const {
    directLines,
    workshopAddress
  } = Route$3.useLoaderData();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-ink text-bone", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { kicker: "Get In Touch", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Talk" }),
      "."
    ] }), subtitle: "Press inquiries, partnership proposals, or questions about the syndicate — we read every message personally.", video: heroVideo }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }), className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors", placeholder: "Your full name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors", placeholder: "you@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: form.subject, onChange: (e) => setForm({
              ...form,
              subject: e.target.value
            }), className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone focus:outline-none focus:border-acid/50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "syndicate", children: "Syndicate Application Question" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "press", children: "Press & Media" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "partnership", children: "Partnership" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Inquiry" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, value: form.message, onChange: (e) => setForm({
              ...form,
              message: e.target.value
            }), className: "w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors resize-none", placeholder: "Tell us what is on your mind..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300", children: "Send Message" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 grain relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "Questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Common Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg max-w-2xl mx-auto mb-10", children: "Everything you need to know about joining the Syndicate syndicate, from allocation to ownership structure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/events", className: "inline-block px-10 py-4 border-2 border-white/20 text-bone text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:border-acid hover:text-acid transition-all duration-300", children: "View FAQ & Events" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
