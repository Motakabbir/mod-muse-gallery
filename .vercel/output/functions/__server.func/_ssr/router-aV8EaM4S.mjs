import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, d as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-Dkk4XzO3.mjs";
import { u as useReducedMotion, A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-CisAMXDm.css";
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
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
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
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getPhases = createServerFn({
  method: "GET"
}).handler(createSsrRpc("de1baaab6d9d6b32a851c3872eda95f609bc6ad63df410dcd14a814a4a6b8c7d"));
const getSpecs = createServerFn({
  method: "GET"
}).handler(createSsrRpc("99b07c72264bd83f294bf8c190daadda04dd85ad1509ca79cec14ab8c32bf477"));
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
const $$splitComponentImporter$6 = () => import("./the-build-fVGVf-j6.mjs");
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
    const [seo, phases, specs] = await Promise.all([seoPromise, phasesPromise, specsPromise]);
    return {
      seo,
      phases,
      specs
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "The Build | Syndicate RS500 Restomod",
      description: "Four phases of the Syndicate build: acquisition & strip, design & engineering, manufacturing, finishing & validation. Engineered in the open.",
      og_title: "The Build | Syndicate",
      og_description: "Engineered in the open. Every stage documented."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const getPageEvents = createServerFn({
  method: "GET"
}).handler(createSsrRpc("32ebfdeb12c784e01d43e641321f48eb4b3a23b1017f01ba2e406f7461e63a7e"));
const getFaqs = createServerFn({
  method: "GET"
}).handler(createSsrRpc("84ac47e88e92c0a102a5f22e093fc9253feb648bc5fb9abad64c673167143404"));
const $$splitComponentImporter$5 = () => import("./events-B--QPYPE.mjs");
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
    const [seo, events, faqs] = await Promise.all([seoPromise, eventsPromise, faqsPromise]);
    return {
      seo,
      events,
      faqs
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
      og_title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      og_description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const getGalleryItems = createServerFn({
  method: "GET"
}).handler(createSsrRpc("0f43699aa5c12fd7eccb86d3c89fc028b662ee26b58f0d02adfb484e9344adea"));
const $$splitComponentImporter$4 = () => import("./design-gallery-BGuDPoHW.mjs");
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
    return {
      seo,
      items
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Design Gallery | Syndicate RS500",
      description: "A visual reference library for the Syndicate RS500 build — renders, details, materials, and process imagery.",
      og_title: "Design Gallery | Syndicate",
      og_description: "Renders, details, materials, process imagery."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const getDirectLines = createServerFn({
  method: "GET"
}).handler(createSsrRpc("9d5d90b80df1ece8b649303ca74c9d63692f0f226b382338d93d8d04399a1955"));
const getWorkshopAddress = createServerFn({
  method: "GET"
}).handler(createSsrRpc("7ccf67c9f0168c6ac9157c05785d1dcd26d00c09dfaf8efac7d05f81052b726b"));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType(),
  email: stringType().email(),
  subject: stringType(),
  message: stringType()
})).handler(createSsrRpc("8361093590b5c9f67fb3a9ecd7f49f4e2177e3958ed2619c9723c49531e5d0f3"));
const $$splitComponentImporter$3 = () => import("./contact-Dbgo0fKV.mjs");
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
    const [seo, directLines, workshopAddress] = await Promise.all([seoPromise, directLinesPromise, workshopAddressPromise]);
    return {
      seo,
      directLines,
      workshopAddress
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Contact — Syndicate | Syndicated Restomod Build",
      description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      og_title: "Contact — Syndicate | Syndicated Restomod Build",
      og_description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const getApplySteps = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ebe8ef3d05a46c2d928d9d6319350dfb53ad6f290bd633e464e3550d615987e5"));
const submitApplyForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  firstName: stringType(),
  lastName: stringType(),
  email: stringType().email(),
  phone: stringType().optional(),
  country: stringType().optional(),
  allocation: stringType(),
  message: stringType().optional()
})).handler(createSsrRpc("72c66bebe91d7d47494a86d50c6d4fb8b7472c948d4b635fd0d0d8ff97e1f04c"));
const $$splitComponentImporter$2 = () => import("./apply-C_PeORjY.mjs");
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
    return {
      seo,
      steps
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Apply for Allocation | Syndicate",
      description: "Apply for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available.",
      og_title: "Apply for Allocation | Syndicate",
      og_description: "Limited syndicate positions for the Syndicate RS500 build."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const getPrinciples = createServerFn({
  method: "GET"
}).handler(createSsrRpc("c3ab668dcbbf85177bcd1c92f3777bc61f78af3c447bb7cd1449451b613d7329"));
const getArchitects = createServerFn({
  method: "GET"
}).handler(createSsrRpc("b6ec13c45afd3f3a4fc06cbfb77f797107faeaad290a546d85fda1f90d7de29b"));
const $$splitComponentImporter$1 = () => import("./about-Cg5VrexI.mjs");
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
    const [seo, principles, architects] = await Promise.all([seoPromise, principlesPromise, architectsPromise]);
    return {
      seo,
      principles,
      architects
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "About Us — Syndicate | Syndicated Restomod Build",
      description: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners.",
      og_title: "About Us — Syndicate | Syndicated Restomod Build",
      og_description: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const getLiveSyndicates = createServerFn({
  method: "GET"
}).handler(createSsrRpc("041b66f586895c402252b0a2ec4cbb187064b43fc562c382861f52f1fae90224"));
const getRecentlyFunded = createServerFn({
  method: "GET"
}).handler(createSsrRpc("cdb6f24a000fe743889e66044e57b678ffab7c29ad8773078d041e94faab139b"));
const getEvents = createServerFn({
  method: "GET"
}).handler(createSsrRpc("bcde8082d3369e5a7fc294219e3bc981a037f0fd2283bf641bde7a11feebf4b2"));
const getPillars = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4a4bed894e92b763e0483532a03ef3b66456933fb0cb0c1ddcb303b229de53eb"));
const getProcess = createServerFn({
  method: "GET"
}).handler(createSsrRpc("598d1ce99a86ccdfcf29f22eb6720f9eea7fb410d8b2a1ed82f69f5877049988"));
const getPartners = createServerFn({
  method: "GET"
}).handler(createSsrRpc("c196cb2e36758946b524ae3ac80190f8a985530bc850e44f1d9fb958cdafbb0e"));
const getSyndicateSteps = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ac52de4b35ea0c682573eb720be0c3dc0e938a370123a3490c4605b60ab0786c"));
const getBenefits = createServerFn({
  method: "GET"
}).handler(createSsrRpc("908d6378279f221ff138851f3efe8d5676afb43fba40f140c2cfa0b0dd888628"));
const $$splitComponentImporter = () => import("./index-DLa3w-nU.mjs");
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
    const [seo, syndicates, events, recentlyFunded, pillars, process2, partners, syndicateSteps, benefits] = await Promise.all([seoPromise, syndicatesPromise, eventsPromise, recentlyFundedPromise, pillarsPromise, processPromise, partnersPromise, syndicateStepsPromise, benefitsPromise]);
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
  head: ({
    loaderData
  }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Syndicate | Syndicated Restomod Build",
      description: "Be part of the creation of an icon. A syndicated restomod build of the Ford Sierra Cosworth RS500, engineered in the open.",
      og_title: "Syndicate | Syndicated Restomod Build",
      og_description: "Syndicated restomod builds powered by TheCarCrowd."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$6 as R,
  Route$5 as a,
  Route$4 as b,
  Route$3 as c,
  Route$2 as d,
  Route$1 as e,
  Route as f,
  submitContactForm as g,
  router as r,
  submitApplyForm as s
};
