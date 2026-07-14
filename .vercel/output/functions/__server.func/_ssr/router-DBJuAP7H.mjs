import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, d as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DlmSafZR.mjs";
import { u as useReducedMotion, A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
const $$splitComponentImporter$6 = () => import("./the-build-CXzpj1Dj.mjs");
const Route$6 = createFileRoute("/the-build")({
  head: () => ({
    meta: [{
      title: "The Build | Syndicate RS500 Restomod"
    }, {
      name: "description",
      content: "Four phases of the Syndicate build: acquisition & strip, design & engineering, manufacturing, finishing & validation. Engineered in the open."
    }, {
      property: "og:title",
      content: "The Build | Syndicate"
    }, {
      property: "og:description",
      content: "Engineered in the open. Every stage documented."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  loader: async () => {
    const phases = await getPhases();
    const specs = await getSpecs();
    return {
      phases,
      specs
    };
  }
});
const getPageEvents = createServerFn({
  method: "GET"
}).handler(createSsrRpc("32ebfdeb12c784e01d43e641321f48eb4b3a23b1017f01ba2e406f7461e63a7e"));
const getFaqs = createServerFn({
  method: "GET"
}).handler(createSsrRpc("84ac47e88e92c0a102a5f22e093fc9253feb648bc5fb9abad64c673167143404"));
const $$splitComponentImporter$5 = () => import("./events-dHqHUbX6.mjs");
const Route$5 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events & FAQ — Syndicate | Syndicated Restomod Build"
    }, {
      name: "description",
      content: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions."
    }, {
      property: "og:title",
      content: "Events & FAQ — Syndicate | Syndicated Restomod Build"
    }, {
      property: "og:description",
      content: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  loader: async () => {
    const events = await getPageEvents();
    const faqs = await getFaqs();
    return {
      events,
      faqs
    };
  }
});
const getGalleryItems = createServerFn({
  method: "GET"
}).handler(createSsrRpc("0f43699aa5c12fd7eccb86d3c89fc028b662ee26b58f0d02adfb484e9344adea"));
const $$splitComponentImporter$4 = () => import("./design-gallery-Bs_3tOr9.mjs");
const Route$4 = createFileRoute("/design-gallery")({
  head: () => ({
    meta: [{
      title: "Design Gallery | Syndicate RS500"
    }, {
      name: "description",
      content: "A visual reference library for the Syndicate RS500 build — renders, details, materials, and process imagery."
    }, {
      property: "og:title",
      content: "Design Gallery | Syndicate"
    }, {
      property: "og:description",
      content: "Renders, details, materials, process imagery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  loader: () => getGalleryItems()
});
const getDirectLines = createServerFn({
  method: "GET"
}).handler(createSsrRpc("9d5d90b80df1ece8b649303ca74c9d63692f0f226b382338d93d8d04399a1955"));
const getWorkshopAddress = createServerFn({
  method: "GET"
}).handler(createSsrRpc("7ccf67c9f0168c6ac9157c05785d1dcd26d00c09dfaf8efac7d05f81052b726b"));
const $$splitComponentImporter$3 = () => import("./contact-DLpTcKv7.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Syndicate | Syndicated Restomod Build"
    }, {
      name: "description",
      content: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome."
    }, {
      property: "og:title",
      content: "Contact — Syndicate | Syndicated Restomod Build"
    }, {
      property: "og:description",
      content: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  loader: async () => {
    const directLines = await getDirectLines();
    const workshopAddress = await getWorkshopAddress();
    return {
      directLines,
      workshopAddress
    };
  }
});
const getApplySteps = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ebe8ef3d05a46c2d928d9d6319350dfb53ad6f290bd633e464e3550d615987e5"));
const $$splitComponentImporter$2 = () => import("./apply-es1qiH_N.mjs");
const Route$2 = createFileRoute("/apply")({
  head: () => ({
    meta: [{
      title: "Apply for Allocation | Syndicate"
    }, {
      name: "description",
      content: "Apply for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available."
    }, {
      property: "og:title",
      content: "Apply for Allocation | Syndicate"
    }, {
      property: "og:description",
      content: "Limited syndicate positions for the Syndicate RS500 build."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: () => getApplySteps()
});
const getPrinciples = createServerFn({
  method: "GET"
}).handler(createSsrRpc("c3ab668dcbbf85177bcd1c92f3777bc61f78af3c447bb7cd1449451b613d7329"));
const getArchitects = createServerFn({
  method: "GET"
}).handler(createSsrRpc("b6ec13c45afd3f3a4fc06cbfb77f797107faeaad290a546d85fda1f90d7de29b"));
const $$splitComponentImporter$1 = () => import("./about-0W6_lw9X.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Syndicate | Syndicated Restomod Build"
    }, {
      name: "description",
      content: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners."
    }, {
      property: "og:title",
      content: "About Us — Syndicate | Syndicated Restomod Build"
    }, {
      property: "og:description",
      content: "Meet the team behind Syndicate. A syndicated restomod build powered by passion, precision engineering, and world-class partners."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async () => {
    const principles = await getPrinciples();
    const architects = await getArchitects();
    return {
      principles,
      architects
    };
  }
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
const $$splitComponentImporter = () => import("./index-valMjR47.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async () => {
    const syndicates = await getLiveSyndicates();
    const events = await getEvents();
    const recentlyFunded = await getRecentlyFunded();
    const pillars = await getPillars();
    const process = await getProcess();
    const partners = await getPartners();
    const syndicateSteps = await getSyndicateSteps();
    const benefits = await getBenefits();
    return {
      syndicates,
      events,
      recentlyFunded,
      pillars,
      process,
      partners,
      syndicateSteps,
      benefits
    };
  }
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
  router as r
};
