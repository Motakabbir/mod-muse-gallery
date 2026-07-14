import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as heroVideo } from "./Hero_002-BDf_P1XZ.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useReveal, N as Nav, P as PageHero, F as Footer } from "./site-CoFSfQEh.mjs";
import { a as Route$5 } from "./router-D6gkI43S.mjs";
import "../_libs/seroval.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, C as Calendar, M as MapPin, U as Users, a as ChevronLeft, b as ChevronRight, S as ShieldAlert } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function EventsPage() {
  useReveal();
  const {
    events,
    faqs
  } = Route$5.useLoaderData();
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { kicker: "Community", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Events & ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Answers" }),
      "."
    ] }), subtitle: "Join us at the track, in the workshop, and everywhere in between. Every question answered below.", video: heroVideo }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "01 — Calendar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Upcoming Events" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/60 max-w-md", children: "From build open-days to track experiences, the syndicate calendar is designed to maximise your connection to the car and the community." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedEventIdx(i), className: "bg-carbon border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-acid/40 hover:bg-carbon/80 cursor-pointer transition-all duration-500 group", children: [
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
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedEventIdx !== null && currentEvent && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink/95 backdrop-blur-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: () => setSelectedEventIdx(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 0.95,
        y: 20
      }, animate: {
        scale: 1,
        y: 0
      }, exit: {
        scale: 0.95,
        y: 20
      }, transition: {
        type: "spring",
        duration: 0.5
      }, className: "relative w-full max-w-4xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 grid md:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedEventIdx(null), "aria-label": "Close details", className: "absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedEventIdx((prev) => prev !== null && prev > 0 ? prev - 1 : events.length - 1), className: "hover:text-acid flex items-center gap-1 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" }),
              " Prev"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              selectedEventIdx + 1,
              " / ",
              events.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedEventIdx((prev) => prev !== null && prev < events.length - 1 ? prev + 1 : 0), className: "hover:text-acid flex items-center gap-1 transition-colors", children: [
              "Next ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
            ] })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-white/10 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", onClick: () => setSelectedEventIdx(null), className: "px-6 py-2.5 bg-acid text-ink font-semibold uppercase tracking-widest text-[10px] rounded-full hover:bg-bone transition-colors", children: "Request Invite →" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 grain relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4", children: "02 — FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Common Questions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-carbon border rounded-lg transition-colors duration-300 ${openFaq === i ? "border-acid/40" : "border-white/10 hover:border-white/20"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full flex items-center justify-between p-6 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg pr-4", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-acid border-acid text-ink rotate-45" : "text-bone/60"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" }) }) })
        ] }),
        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 leading-relaxed", children: faq.a }) })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 text-center border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl leading-[0.95] mb-6", children: [
        "Still Have ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Questions" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bone/70 text-lg mb-10 max-w-xl mx-auto", children: "We are happy to talk through anything that is not covered above. No obligation, no pressure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-block px-10 py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300", children: "Contact The Team" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EventsPage as component
};
