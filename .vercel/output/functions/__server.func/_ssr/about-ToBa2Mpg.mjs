import { c as createServerRpc } from "./createServerRpc-j5ljxVFO.mjs";
import { b as createServerFn } from "./server-c-ppK572.mjs";
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
const getPrinciples_createServerFn_handler = createServerRpc({
  id: "c3ab668dcbbf85177bcd1c92f3777bc61f78af3c447bb7cd1449451b613d7329",
  name: "getPrinciples",
  filename: "src/lib/about.ts"
}, (opts) => getPrinciples.__executeServer(opts));
const getPrinciples = createServerFn({
  method: "GET"
}).handler(getPrinciples_createServerFn_handler, async () => {
  return [{
    num: "01",
    title: "Analog Soul",
    text: "We preserve mechanical connection. Hydraulic steering. Manual gearboxes. Driver-first ergonomics. Technology serves the experience, never replaces it."
  }, {
    num: "02",
    title: "Engineering Integrity",
    text: "Every component is traceable, tested, and validated. We partner with OEM-grade suppliers and motorsport specialists who share our obsession."
  }, {
    num: "03",
    title: "Open Collaboration",
    text: "The syndicate model means owners are participants, not spectators. From design votes to build-week visits, transparency is our default."
  }];
});
const getArchitects_createServerFn_handler = createServerRpc({
  id: "b6ec13c45afd3f3a4fc06cbfb77f797107faeaad290a546d85fda1f90d7de29b",
  name: "getArchitects",
  filename: "src/lib/about.ts"
}, (opts) => getArchitects.__executeServer(opts));
const getArchitects = createServerFn({
  method: "GET"
}).handler(getArchitects_createServerFn_handler, async () => {
  return [{
    name: "IAN HOWE ",
    role: "Founder & Build Director",
    bio: "30 years experience in automotive & Fintech business",
    img: "/src/assets/Ian-Howe.png"
  }, {
    name: "Simon Kiero Watson",
    role: "Commercial & Finance Oversight",
    bio: "Highly experienced Corporate Finance and Exchange Expert.",
    img: "/src/assets/Simon-KW.png"
  }, {
    name: "Al Yasid Oozeear",
    role: "Digital Visualisor & Designer",
    bio: "Independent Automotive designer specialising in bespoke car design",
    img: "/src/assets/Al-Yasid.png"
  }, {
    name: "Stuart Peach",
    role: "Project Co Founder",
    bio: "PARTNER IN THE VISION148 PROJECT AND ORIGINAL CUSTODIAN OF #148",
    img: "/src/assets/Stuart-Peach.png"
  }];
});
export {
  getArchitects_createServerFn_handler,
  getPrinciples_createServerFn_handler
};
