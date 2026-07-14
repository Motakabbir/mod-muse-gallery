import { c as createServerRpc } from "./createServerRpc-EbRzDRkK.mjs";
import { b as createServerFn } from "./server-BUMPnHDz.mjs";
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
const getPhases_createServerFn_handler = createServerRpc({
  id: "de1baaab6d9d6b32a851c3872eda95f609bc6ad63df410dcd14a814a4a6b8c7d",
  name: "getPhases",
  filename: "src/lib/build.ts"
}, (opts) => getPhases.__executeServer(opts));
const getPhases = createServerFn({
  method: "GET"
}).handler(getPhases_createServerFn_handler, async () => {
  return [{
    n: "01",
    t: "Acquisition & Strip - Complete",
    video: "/src/assets/AQUISITION_001.mp4",
    body: "Car #148 — the 148th of 500 RS500s ever built — sourced, authenticated, and fully stripped to bare metal. Every component is catalogued and inspected.",
    bullets: ["Base vehicle selection", "Full teardown", "Component cataloguing", "Chassis inspection"],
    partner: "ASM Auto Recycling"
  }, {
    n: "02",
    t: "Design & Engineering",
    video: "/src/assets/DESIGN_ENGINEERING_001.mp4",
    body: "Body shell is 3D scanned to sub-millimetre accuracy, producing a complete digital twin. Engineers iterate CAD designs for structural optimisation and modern performance.",
    bullets: ["3D scanning & digital twin", "CAD modelling", "Structural optimisation", "Aero & thermal sims"],
    partner: "T3DMC • BAMD Composites"
  }, {
    n: "03",
    t: "Coach Building",
    video: "/src/assets/Manufacturing_001.mp4",
    body: "At the heart of the Vision148 build is to create a coach built Aluminium body  to showcase the artisan skills of our build partners.",
    bullets: ["Hand formed bodywork", "Lightweight aluminium", "Coach built techniques", "Hand built by craftsmen"],
    partner: "Coventry Metalcraft • Silverstone"
  }, {
    n: "04",
    t: "Additive Manufacturing",
    video: "/src/assets/FINSHING_AND_VALIDATION_001.mp4",
    body: "The Vision148 build is designed to showcase the bleeding edge technology at our disposal through our manufacturing partners to deliver rapid prototyping to the build efficiency as well as the use of polymer and specialist metals.",
    bullets: ["Polymer plastics printing ", "Titanium alloy printing", "Interior & Exterior parts and components", "Rapid development"],
    partner: "Group • DMC"
  }];
});
const getSpecs_createServerFn_handler = createServerRpc({
  id: "99b07c72264bd83f294bf8c190daadda04dd85ad1509ca79cec14ab8c32bf477",
  name: "getSpecs",
  filename: "src/lib/build.ts"
}, (opts) => getSpecs.__executeServer(opts));
const getSpecs = createServerFn({
  method: "GET"
}).handler(getSpecs_createServerFn_handler, async () => {
  return [{
    l: "Base",
    v: "1987 Ford Sierra Cosworth RS500 #148"
  }, {
    l: "Engine",
    v: "Reworked YB 2.0L turbocharged inline-4"
  }, {
    l: "Target Power",
    v: "550+ bhp"
  }, {
    l: "Bodywork",
    v: "Coachbuilt Aluminium + Composite"
  }, {
    l: "Chassis",
    v: "Reinforced shell, modern suspension geometry"
  }, {
    l: "Production",
    v: "1 of 1"
  }];
});
export {
  getPhases_createServerFn_handler,
  getSpecs_createServerFn_handler
};
