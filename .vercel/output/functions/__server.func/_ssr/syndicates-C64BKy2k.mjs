import { c as createServerRpc } from "./createServerRpc-YL9bRpSG.mjs";
import { a as createServerFn } from "./server-DBYqdG6E.mjs";
import { l as logo } from "./logo-4-ISZutHRh.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const getLiveSyndicates_createServerFn_handler = createServerRpc({
  id: "041b66f586895c402252b0a2ec4cbb187064b43fc562c382861f52f1fae90224",
  name: "getLiveSyndicates",
  filename: "src/lib/syndicates.ts"
}, (opts) => getLiveSyndicates.__executeServer(opts));
const getLiveSyndicates = createServerFn({
  method: "GET"
}).handler(getLiveSyndicates_createServerFn_handler, async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [{
    title: "Vision148 Sierra Cosworth RS500",
    img: logo,
    // In a real DB, this would be a URL
    allocation: "£5,000 per allocation",
    stats: "25 Allocations • 10 remaining",
    return: "Potential Returns 77.1%*",
    isPlaceholder: false,
    waitlist: false
  }, {
    title: "Next Build being assessed for Syndication",
    img: logo,
    allocation: "£2,000 per allocation",
    stats: "31 Allocations • 17 remaining",
    return: "Potential Returns 63.90%*",
    isPlaceholder: true,
    waitlist: true
  }, {
    title: "Mercedes SLS AMG",
    img: logo,
    allocation: "£5,000 per allocation",
    stats: "39 Allocations • 32 remaining",
    return: "Potential Returns 87.2%*",
    isPlaceholder: false,
    waitlist: false
  }];
});
const getRecentlyFunded_createServerFn_handler = createServerRpc({
  id: "cdb6f24a000fe743889e66044e57b678ffab7c29ad8773078d041e94faab139b",
  name: "getRecentlyFunded",
  filename: "src/lib/syndicates.ts"
}, (opts) => getRecentlyFunded.__executeServer(opts));
const getRecentlyFunded = createServerFn({
  method: "GET"
}).handler(getRecentlyFunded_createServerFn_handler, async () => {
  return [{
    title: "Lamborghini Gallardo SE",
    img: "/src/assets/build-process.jpg",
    // Representing a dynamic image path
    date: "Funded Date — Dec 25",
    val: "Funded Value — £82,000",
    members: "Syndicate Members — 14"
  }, {
    title: "Aston Martin V12 Vantage",
    img: "/src/assets/build-process.jpg",
    date: "Funded Date — Sep 25",
    val: "Funded Value — £66,000",
    members: "Syndicate Members — 21"
  }, {
    title: "Porsche 996 GT3 RS",
    img: "/src/assets/build-process.jpg",
    date: "Funded Date — May 25",
    val: "Funded Value — £165,000",
    members: "Syndicate Members — 22"
  }];
});
const getEvents_createServerFn_handler = createServerRpc({
  id: "bcde8082d3369e5a7fc294219e3bc981a037f0fd2283bf641bde7a11feebf4b2",
  name: "getEvents",
  filename: "src/lib/syndicates.ts"
}, (opts) => getEvents.__executeServer(opts));
const getEvents = createServerFn({
  method: "GET"
}).handler(getEvents_createServerFn_handler, async () => {
  return [{
    type: "Syndicate Member Invitation",
    title: "Coventry Metalcraft",
    tag: "INVITE ONLY",
    description: "An opportunity to meet the UK's leading coach building company and Vision148 build partner",
    date: "TBA"
  }, {
    type: "Syndicate Member Invitation",
    title: "Digital Manufacturing Centre - Silverstone",
    tag: "INVITE ONLY",
    description: "Emersion in Additive Manufacturing at this bleeding edge manufacturing facility in the heart of motorsport",
    date: "TBA"
  }, {
    type: "THE CARCROWD SYNDICATE GATHERING",
    title: "Secret Meet 2026",
    tag: "INVITE ONLY",
    description: "",
    date: "TBA"
  }];
});
const getPillars_createServerFn_handler = createServerRpc({
  id: "4a4bed894e92b763e0483532a03ef3b66456933fb0cb0c1ddcb303b229de53eb",
  name: "getPillars",
  filename: "src/lib/syndicates.ts"
}, (opts) => getPillars.__executeServer(opts));
const getPillars = createServerFn({
  method: "GET"
}).handler(getPillars_createServerFn_handler, async () => {
  return [{
    n: "01",
    title: "One of One Build",
    video: "/src/assets/10825391-hd_1920_1080_24fps.mp4",
    img: "/src/assets/pillar-one-of-one.jpg",
    body: "There will never be another. Car #148 — the 148th of 500 RS500s ever built — reborn as a unique, documented, investment-grade restomod."
  }, {
    n: "02",
    title: "World-Class Build Partners",
    img: "/src/assets/pillar-partners.jpg",
    body: "The very best in innovative manufacturing and artisan craft — from coachbuilding to bleeding-edge additive manufacturing."
  }, {
    n: "03",
    title: "Exclusive Access & Experience",
    video: "/src/assets/14209297_3840_2160_24fps.mp4",
    img: "/src/assets/pillar-experience.jpg",
    body: "Designed so syndicate members experience the finished car and the journey: build visits, drive events, private invitations."
  }];
});
const getProcess_createServerFn_handler = createServerRpc({
  id: "598d1ce99a86ccdfcf29f22eb6720f9eea7fb410d8b2a1ed82f69f5877049988",
  name: "getProcess",
  filename: "src/lib/syndicates.ts"
}, (opts) => getProcess.__executeServer(opts));
const getProcess = createServerFn({
  method: "GET"
}).handler(getProcess_createServerFn_handler, async () => {
  return [{
    n: "01",
    title: "Acquisition & Strip",
    items: ["Base vehicle selection", "Full teardown", "Digital scanning"]
  }, {
    n: "02",
    title: "Design & Engineering",
    items: ["CAD modelling", "Structural optimisation", "Performance upgrades"]
  }, {
    n: "03",
    title: "Manufacturing",
    items: ["Fabrication", "Additive manufacturing", "Precision assembly"]
  }, {
    n: "04",
    title: "Finishing & Validation",
    items: ["Paint & livery", "Road & track testing", "Final sign-off"]
  }];
});
const getPartners_createServerFn_handler = createServerRpc({
  id: "c196cb2e36758946b524ae3ac80190f8a985530bc850e44f1d9fb958cdafbb0e",
  name: "getPartners",
  filename: "src/lib/syndicates.ts"
}, (opts) => getPartners.__executeServer(opts));
const getPartners = createServerFn({
  method: "GET"
}).handler(getPartners_createServerFn_handler, async () => {
  return [{
    name: "T3DMC",
    role: "3D Scanning & Digital Twin"
  }, {
    name: "ASM Auto Recycling",
    role: "Chassis Dismantling & Cataloguing"
  }, {
    name: "Coventry Metalcraft",
    role: "Precision Coachbuilding"
  }, {
    name: "DMC Silverstone",
    role: "Assembly & Digital Manufacturing"
  }, {
    name: "BAMD Composites",
    role: "Composite Structures"
  }, {
    name: "MAHLE Group",
    role: "Engine Rebuild & Performance"
  }, {
    name: "Cornerstone Technologies",
    role: "Non-structural Skillsets"
  }, {
    name: "HGL / VenueServe",
    role: "Membership Platform & Fan Portal"
  }];
});
const getSyndicateSteps_createServerFn_handler = createServerRpc({
  id: "ac52de4b35ea0c682573eb720be0c3dc0e938a370123a3490c4605b60ab0786c",
  name: "getSyndicateSteps",
  filename: "src/lib/syndicates.ts"
}, (opts) => getSyndicateSteps.__executeServer(opts));
const getSyndicateSteps = createServerFn({
  method: "GET"
}).handler(getSyndicateSteps_createServerFn_handler, async () => {
  return [{
    n: 1,
    title: "Syndicate Formation",
    body: "A fixed number of participants secure allocation."
  }, {
    n: 2,
    title: "Build Phase",
    body: "Full transparency through content and direct access."
  }, {
    n: 3,
    title: "Experience Phase",
    body: "Driving events, track days, private access."
  }, {
    n: 4,
    title: "Exit Opportunity",
    body: "Potential sale of the asset at premium."
  }];
});
const getBenefits_createServerFn_handler = createServerRpc({
  id: "908d6378279f221ff138851f3efe8d5676afb43fba40f140c2cfa0b0dd888628",
  name: "getBenefits",
  filename: "src/lib/syndicates.ts"
}, (opts) => getBenefits.__executeServer(opts));
const getBenefits = createServerFn({
  method: "GET"
}).handler(getBenefits_createServerFn_handler, async () => {
  return [{
    icon: "⬡",
    title: "Build Access",
    items: ["Workshop visits", "Engineering insight"]
  }, {
    icon: "◎",
    title: "Driving Access",
    items: ["Road drives", "Track sessions"]
  }, {
    icon: "✦",
    title: "Events",
    items: ["Launch", "Private experiences"]
  }, {
    icon: "◈",
    title: "Knowledge",
    items: ["Learn the build", "Understand the engineering"]
  }];
});
export {
  getBenefits_createServerFn_handler,
  getEvents_createServerFn_handler,
  getLiveSyndicates_createServerFn_handler,
  getPartners_createServerFn_handler,
  getPillars_createServerFn_handler,
  getProcess_createServerFn_handler,
  getRecentlyFunded_createServerFn_handler,
  getSyndicateSteps_createServerFn_handler
};
