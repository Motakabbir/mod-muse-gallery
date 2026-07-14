import { c as createServerRpc } from "./createServerRpc-EhsVzGDI.mjs";
import { b as createServerFn } from "./server-D7_jbsHF.mjs";
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
const getApplySteps_createServerFn_handler = createServerRpc({
  id: "ebe8ef3d05a46c2d928d9d6319350dfb53ad6f290bd633e464e3550d615987e5",
  name: "getApplySteps",
  filename: "src/lib/apply.ts"
}, (opts) => getApplySteps.__executeServer(opts));
const getApplySteps = createServerFn({
  method: "GET"
}).handler(getApplySteps_createServerFn_handler, async () => {
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
});
export {
  getApplySteps_createServerFn_handler
};
