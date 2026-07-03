import { c as createServerRpc } from "./createServerRpc-BGYnNetv.mjs";
import { a as createServerFn } from "./server-B1tIjFVW.mjs";
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
const getGalleryItems_createServerFn_handler = createServerRpc({
  id: "0f43699aa5c12fd7eccb86d3c89fc028b662ee26b58f0d02adfb484e9344adea",
  name: "getGalleryItems",
  filename: "src/lib/gallery.ts"
}, (opts) => getGalleryItems.__executeServer(opts));
const getGalleryItems = createServerFn({
  method: "GET"
}).handler(getGalleryItems_createServerFn_handler, async () => {
  return [{
    img: "/src/assets/gallery-1.jpg",
    t: "RS500 Reimagined",
    tag: "Render",
    span: "md:col-span-2 md:row-span-2",
    desc: "The ultimate design study of the Syndicate RS500, visualised in a modern studio environment. The design respects the original 1987 Sierra shape while introducing advanced aerodynamics, carbon composite elements, and an aggressive stance.",
    details: [{
      label: "Category",
      value: "Visualisation"
    }, {
      label: "Creator",
      value: "Al Yasid Oozeear"
    }, {
      label: "Phase",
      value: "02 - Design & Engineering"
    }]
  }, {
    img: "/src/assets/COMPOSITE.png",
    t: "COMPOSITE PARTS",
    tag: "Detail",
    desc: "An in-depth look at the bespoke autoclave-cured carbon fiber wing and aerodynamic body panels. These components are developed in collaboration with BAMD Composites to ensure minimal weight and optimal downforce.",
    details: [{
      label: "Material",
      value: "Prepreg Carbon Fiber"
    }, {
      label: "Partner",
      value: "BAMD Composites"
    }, {
      label: "Weight Reduction",
      value: "40% vs OEM"
    }]
  }, {
    img: "/src/assets/ENGINE.png",
    t: "ENGINE & DRIVETRAIN ",
    tag: "Component",
    desc: "The legendary Cosworth YB 2.0L block, completely stripped and reworked. Featuring a custom billet block, modern motorsport-spec ECU, hybrid turbocharger, and a bespoke exhaust manifold engineered for high-RPM reliability.",
    details: [{
      label: "Configuration",
      value: "2.0L Inline-4 Turbo"
    }, {
      label: "Target Power",
      value: "550+ bhp"
    }, {
      label: "Engineering Partner",
      value: "MAHLE Group"
    }]
  }, {
    img: "/src/assets/DIGITAL_TWIN.JPG",
    t: "Digital Twin",
    tag: "Engineering",
    span: "md:col-span-2",
    desc: "A high-precision 3D scan of Sierra RS500 chassis #148. Every bracket, weld, and structural channel was mapped to sub-millimetre accuracy to create a perfect digital twin for bodywork development and custom component design.",
    details: [{
      label: "Scanning Tech",
      value: "GOM Atos Triple Scan"
    }, {
      label: "Point Cloud",
      value: "78.4 Million Points"
    }, {
      label: "Partner",
      value: "T3DMC"
    }]
  }, {
    img: "/src/assets/additive_manufacturing .png",
    t: "ADDITIVE MANUFACTURING",
    tag: "Process",
    desc: "Custom suspension uprights and cooling duct brackets produced via advanced selective laser melting (SLM) 3D printing. This allows us to create structurally optimized parts that are impossible to machine traditionally.",
    details: [{
      label: "Method",
      value: "SLM Metal 3D Printing"
    }, {
      label: "Material",
      value: "Scalmalloy® Alloy"
    }, {
      label: "Partner",
      value: "DMC Silverstone"
    }]
  }, {
    img: "/src/assets/build-print.jpg",
    t: "CAD & DESIGN ",
    tag: "Manufacturing",
    desc: "The complete digital assembly of the restomod. Engineering models verify clearances for the dry-sump oil system, custom suspension kinematics, and internal cockpit cooling channels before any physical fabrication begins.",
    details: [{
      label: "Software",
      value: "Siemens NX / SolidWorks"
    }, {
      label: "System",
      value: "Full Vehicle Assembly"
    }, {
      label: "Status",
      value: "Signed Off"
    }]
  }, {
    img: "/src/assets/WORKSHOP_CAPTURE.JPG",
    t: "Workshop Capture",
    tag: "On Set",
    span: "md:col-span-2",
    desc: "A raw, unedited glimpse into the main workshop at Coventry Metalcraft. The bare shell of RS500 #148 is mounted on the jig, undergoing structural prep, seam welding, and reinforcement for the high-power drivetrain.",
    details: [{
      label: "Location",
      value: "Coventry Metalcraft"
    }, {
      label: "Stage",
      value: "Bare Metal Restoration"
    }, {
      label: "Chassis ID",
      value: "RS500 #148"
    }]
  }, {
    img: "/src/assets/pillar-one-of-one.jpg",
    t: "Hand Fabrication",
    tag: "Coachbuilding",
    desc: "Master coachbuilders shaping and preparing custom aluminum wheel arches and internal panels. Hand-forming is blended with CAD accuracy to maintain the traditional handcrafted soul of the vehicle.",
    details: [{
      label: "Craft",
      value: "English Wheel & Jig Fitting"
    }, {
      label: "Skill",
      value: "Master Coachbuilding"
    }, {
      label: "Hours Logged",
      value: "120+ hrs"
    }]
  }];
});
export {
  getGalleryItems_createServerFn_handler
};
