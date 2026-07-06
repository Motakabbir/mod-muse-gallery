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
const getDirectLines_createServerFn_handler = createServerRpc({
  id: "9d5d90b80df1ece8b649303ca74c9d63692f0f226b382338d93d8d04399a1955",
  name: "getDirectLines",
  filename: "src/lib/contact.ts"
}, (opts) => getDirectLines.__executeServer(opts));
const getDirectLines = createServerFn({
  method: "GET"
}).handler(getDirectLines_createServerFn_handler, async () => {
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
});
const getWorkshopAddress_createServerFn_handler = createServerRpc({
  id: "7ccf67c9f0168c6ac9157c05785d1dcd26d00c09dfaf8efac7d05f81052b726b",
  name: "getWorkshopAddress",
  filename: "src/lib/contact.ts"
}, (opts) => getWorkshopAddress.__executeServer(opts));
const getWorkshopAddress = createServerFn({
  method: "GET"
}).handler(getWorkshopAddress_createServerFn_handler, async () => {
  return ["Syndicate Build Facility", "Unit 7, Silverstone Park", "Northamptonshire, NN12 8TN", "United Kingdom"];
});
export {
  getDirectLines_createServerFn_handler,
  getWorkshopAddress_createServerFn_handler
};
