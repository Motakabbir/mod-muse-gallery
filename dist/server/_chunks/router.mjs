import { a as createRootRouteWithContext, u as useRouter, L as Link, d as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, b as createRouter } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { u as useReducedMotion, A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as createSsrRpc } from "../_libs/@tanstack/start-server-core.mjs";
import { h as createServerFn } from "../_libs/tanstack__start-client-core.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
const appCss = "/assets/styles-Cuk-K9W4.css";
const logo = "/assets/logo-4-BrrnFFbn.jpeg";
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
      },
      {
        rel: "icon",
        type: "image/jpeg",
        href: logo
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
const getPhases = async () => {
  return [
    {
      n: "01",
      t: "Acquisition & Strip - Complete",
      video: "/src/assets/video/aquisition-001.mp4",
      body: "Car #148 — the 148th of 500 RS500s ever built — sourced, authenticated, and fully stripped to bare metal. Every component is catalogued and inspected.",
      bullets: ["Base vehicle selection", "Full teardown", "Component cataloguing", "Chassis inspection"],
      partner: "ASM Auto Recycling"
    },
    {
      n: "02",
      t: "Design & Engineering",
      video: "/src/assets/video/design-engineering-001.mp4",
      body: "Body shell is 3D scanned to sub-millimetre accuracy, producing a complete digital twin. Engineers iterate CAD designs for structural optimisation and modern performance.",
      bullets: ["3D scanning & digital twin", "CAD modelling", "Structural optimisation", "Aero & thermal sims"],
      partner: "T3DMC • BAMD Composites"
    },
    {
      n: "03",
      t: "Coach Building",
      video: "/src/assets/video/manufacturing-001.mp4",
      body: "At the heart of the syndicatedrestomod build is to create a coach built Aluminium body  to showcase the artisan skills of our build partners.",
      bullets: ["Hand formed bodywork", "Lightweight aluminium", "Coach built techniques", "Hand built by craftsmen"],
      partner: "Coventry Metalcraft • Silverstone"
    },
    {
      n: "04",
      t: "Additive Manufacturing",
      video: "/src/assets/video/finshing-and-validation-001.mp4",
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
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
const $$splitComponentImporter$6 = () => import("./the-build.mjs");
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
      a: "A dedicated and limited Syndicate is created with the purpose to support the build of a moderised version of a classic icon. The Syndicate members will gain access to a managed usage of the car when complete.  "
    },
    {
      q: "How much does allocation cost?",
      a: "The Sydnicate has two entry levels"
    },
    {
      q: "How many shares are available?",
      a: "10 - Founder Members & 20 Associate Members"
    },
    {
      q: "Can I sell my share?",
      a: "Yes, you can sell the share should you wish to."
    },
    {
      q: "What happens if the build goes over budget?",
      a: "The build has been professionally costed and will be forensically managed to ensure no cost overrun, however if unforeseen circumstances additional funds are required the Trust will be informed and an action plan implemented."
    },
    {
      q: "Do I get to drive the car?",
      a: "Founder Members receive 16 days per yer allocation to drive the car. Associate members will have the opportunity to have accompanied drives at the designated track days."
    },
    {
      q: "Where is the car stored?",
      a: "The car will be  stored securely and maintained within the management agreement of the Trust."
    },
    {
      q: "How do I apply?",
      a: "You can apply directly through this website or at TheCarcrowd.co.uk"
    }
  ];
};
const $$splitComponentImporter$5 = () => import("./events.mjs");
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
const getGalleryItems = async () => {
  return [
    {
      video: "/src/assets/video/rs500_monaco_showcase.mp4",
      img: "/src/assets/image/rs500-hero.jpg",
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
      img: "/src/assets/image/composite.png",
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
      img: "/src/assets/image/engine.png",
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
      img: "/src/assets/image/digital-twin.jpg",
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
      img: "/src/assets/image/additive-manufacturing.png",
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
      img: "/src/assets/image/cad-and-design.jpg",
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
      img: "/src/assets/image/workshop-capture.jpg",
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
      img: "/src/assets/image/hand-fabrication.jpg",
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
const $$splitComponentImporter$4 = () => import("./design-gallery.mjs");
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
const getDirectLines = async () => {
  return [{
    label: "General Inquiries",
    email: "hello@synmod.build"
  }, {
    label: "Syndicate Applications",
    email: "apply@synmod.build"
  }, {
    label: "Press & Media",
    email: "press@synmod.build"
  }, {
    label: "Partnerships",
    email: "partners@synmod.build"
  }];
};
const getWorkshopAddress = async () => {
  return ["Syndicate Build Facility", "Unit 7, Silverstone Park", "Northamptonshire, NN12 8TN", "United Kingdom"];
};
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType(),
  email: stringType().email(),
  subject: stringType(),
  message: stringType()
})).handler(createSsrRpc("8361093590b5c9f67fb3a9ecd7f49f4e2177e3958ed2619c9723c49531e5d0f3"));
const $$splitComponentImporter$3 = () => import("./contact2.mjs");
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
const getApplySteps = async () => {
  return [{
    n: "01",
    t: "Register Interest",
    b: "Submit the form below. We respond within 48 hours."
  }, {
    n: "02",
    t: "Discovery Call",
    b: "A 30-min call to walk through the syndicate model and answer questions."
  }, {
    n: "03",
    t: "Allocation Offer",
    b: "Receive a formal allocation document outlining cost, structure, and timeline."
  }, {
    n: "04",
    t: "Secure Position",
    b: "Sign and fund. You're in. Welcome to Syndicate."
  }];
};
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
const $$splitComponentImporter$2 = () => import("./apply2.mjs");
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
    { name: "Ian Howe ", role: "Founder & Build Director", bio: "30 years experience in automotive & Fintech business", img: "/src/assets/image/ian-howe.png" },
    { name: "Simon Kiero Watson", role: "Commercial & Finance Oversight", bio: "Highly experienced Corporate Finance and Exchange Expert.", img: "/src/assets/image/simon-kw.png" },
    { name: "Al Yasid Oozeear", role: "Digital Visualisor & Designer", bio: "Independent Automotive designer specialising in bespoke car design", img: "/src/assets/image/al-yasid.png" },
    { name: "Stuart Peach", role: "Project Co Founder", bio: "Partner in the syndicatedrestomod project and original custodian of #148", img: "/src/assets/image/stuart-peach.png" }
  ];
};
const $$splitComponentImporter$1 = () => import("./about.mjs");
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
const getLiveSyndicates = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    {
      title: "syndicatedrestomod Sierra Cosworth RS500",
      img: "/src/assets/image/rs500-studio-showcase.png",
      // In a real DB, this would be a URL
      allocation: [
        "£25,000 Founder Members",
        "£5,000 Associate Members"
      ],
      stats: "10 Founder Allocations • 20 Associate Allocations",
      return: "Potential: 77.1%*",
      isPlaceholder: false,
      waitlist: false
    },
    {
      title: "Next Build being assessed for Syndication",
      img: "/src/assets/image/syn-mod-build-round-web.png",
      allocation: ["TBD"],
      stats: "TBD",
      return: "TBD",
      isPlaceholder: false,
      waitlist: true,
      containImg: true
    },
    {
      title: "Something special in the longterm pipeline",
      img: "/src/assets/image/syn-mod-build-round-web.png",
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
      img: "/src/assets/image/build-process.jpg",
      // Representing a dynamic image path
      date: "Funded Date — Dec 25",
      val: "Funded Value — £82,000",
      members: "Syndicate Members — 14"
    },
    {
      title: "Aston Martin V12 Vantage",
      img: "/src/assets/image/build-process.jpg",
      date: "Funded Date — Sep 25",
      val: "Funded Value — £66,000",
      members: "Syndicate Members — 21"
    },
    {
      title: "Porsche 996 GT3 RS",
      img: "/src/assets/image/build-process.jpg",
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
      video: "/src/assets/video/pillar-01-one-of-one-build.mp4",
      img: "/src/assets/image/pillar-one-of-one.jpg",
      body: "There will never be another. Car #148 — the 148th of 500 RS500s ever built — reborn as a unique, documented, investment-grade restomod."
    },
    {
      n: "02",
      title: "World-Class Build Partners",
      video: "/src/assets/video/partner-video-pillar-2.mp4",
      img: "/src/assets/image/pillar-partners.jpg",
      body: "The very best in innovative manufacturing and artisan craft — from coachbuilding to bleeding-edge additive manufacturing."
    },
    {
      n: "03",
      title: "Exclusive Access & Experience",
      video: "/src/assets/video/pillar-03-exclusive-access.mp4",
      img: "/src/assets/image/pillar-experience.jpg",
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
const $$splitComponentImporter = () => import("./index.mjs");
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
const router = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getRouter
});
export {
  Route$6 as R,
  Route$5 as a,
  Route$4 as b,
  Route$3 as c,
  Route$2 as d,
  Route$1 as e,
  Route as f,
  cn as g,
  submitContactForm as h,
  logo as l,
  router as r,
  submitApplyForm as s
};
