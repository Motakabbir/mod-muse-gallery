import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useReveal, N as Nav, P as PageHero, F as Footer } from "./site.mjs";
import { b as Route } from "./router.mjs";
import { D as Dialog, a as DialogContent, b as DialogTitle } from "./dialog.mjs";
import { X, b as ChevronLeft, c as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__react-query.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/@tanstack/start-server-core.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tanstack__start-client-core.mjs";
import "../_libs/@tanstack/start-storage-context+[...].mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const videoCarSection = "/assets/library-of-intent-CcxMx2Ke.mp4";
function GalleryPage() {
  useReveal();
  const {
    items
  } = Route.useLoaderData();
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { kicker: "Design Gallery", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A Library of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "Intent." })
    ] }), subtitle: "Renders, scans, details, materials, and process imagery from the Syndicate design phase — a living archive of the build as it develops.", video: videoCarSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-carbon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 grid-cols-2 auto-rows-[16rem] gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reveal ${it.span ?? ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { onClick: () => setSelectedIdx(i), className: "relative h-full w-full overflow-hidden border border-white/10 group bg-ink cursor-pointer", children: [
      it.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: it.video, poster: it.img, autoPlay: true, muted: true, loop: true, playsInline: true, className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.t, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.3em] uppercase text-acid mb-1", children: it.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-bone", children: it.t })
      ] })
    ] }) }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: selectedIdx !== null, onOpenChange: (open) => {
      if (!open) setSelectedIdx(null);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-6xl p-0 bg-carbon border-white/10 rounded-2xl overflow-hidden shadow-2xl gap-0 sm:rounded-2xl [&>button:last-child]:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: "Gallery Item" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-12 w-full h-full max-h-[90vh]", children: selectedIdx !== null && currentItem && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIdx(null), "aria-label": "Close details", className: "absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative bg-ink/50 flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[75vh] border-b lg:border-b-0 lg:border-r border-white/10 group/img", children: [
          currentItem.video ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: currentItem.video, poster: currentItem.img, controls: true, autoPlay: true, loop: true, playsInline: true, className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: currentItem.img, alt: currentItem.t, className: "w-full h-full object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            setSelectedIdx((prev) => prev !== null && prev > 0 ? prev - 1 : items.length - 1);
          }, "aria-label": "Previous item", className: "absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            setSelectedIdx((prev) => prev !== null && prev < items.length - 1 ? prev + 1 : 0);
          }, "aria-label": "Next item", className: "absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 hover:scale-105 transition-all duration-300 opacity-0 group-hover/img:opacity-100 focus:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" }) })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: currentItem.details.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink/30 border border-white/5 p-4 hover:border-white/10 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-mono text-[10px] uppercase tracking-wider text-bone/40 mb-1", children: d.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-sm text-bone", children: d.value })
              ] }, idx)) })
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
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 text-center border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal", children: "More Coming" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "reveal font-display text-4xl md:text-6xl leading-[1] mb-10", children: [
        "The gallery grows with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-acid", children: "every milestone." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal text-bone/70 mb-10 leading-relaxed", children: "Syndicate members receive the full-resolution archive, plus exclusive imagery from inside each partner workshop." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/the-build", className: "reveal px-8 py-4 border border-white/30 text-bone uppercase tracking-widest text-sm rounded-full hover:border-acid hover:text-acid transition-colors", children: "See the Build →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apply", className: "reveal px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors", children: "Apply for Allocation" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  GalleryPage as component
};
