import { c as createServerRpc } from "../_libs/@tanstack/start-server-core.mjs";
import { h as createServerFn } from "../_libs/tanstack__start-client-core.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/cookie-es.mjs";
import "node:stream/web";
import "../_libs/@tanstack/start-storage-context+[...].mjs";
const submitApplyForm_createServerFn_handler = createServerRpc({
  id: "72c66bebe91d7d47494a86d50c6d4fb8b7472c948d4b635fd0d0d8ff97e1f04c",
  name: "submitApplyForm",
  filename: "src/lib/apply.ts"
}, (opts) => submitApplyForm.__executeServer(opts));
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
})).handler(submitApplyForm_createServerFn_handler, async ({
  data
}) => {
  console.info("Server received application submission:", data);
  const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
  try {
    const res = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || "N/A",
        message: `Country: ${data.country || "N/A"}
Allocation Interest: ${data.allocation}

${data.message || ""}`
      })
    });
    const json = await res.json();
    if (res.ok && json.success) {
      return {
        success: true,
        offline: false
      };
    }
  } catch (err) {
    console.warn("Backend API not reachable for applications, falling back to mock/offline success:", err.message);
  }
  return {
    success: true,
    offline: true
  };
});
export {
  submitApplyForm_createServerFn_handler
};
