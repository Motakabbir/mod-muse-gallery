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
const submitContactForm_createServerFn_handler = createServerRpc({
  id: "8361093590b5c9f67fb3a9ecd7f49f4e2177e3958ed2619c9723c49531e5d0f3",
  name: "submitContactForm",
  filename: "src/lib/contact.ts"
}, (opts) => submitContactForm.__executeServer(opts));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType(),
  email: stringType().email(),
  subject: stringType(),
  message: stringType()
})).handler(submitContactForm_createServerFn_handler, async ({
  data
}) => {
  console.info("Server received contact submission:", data);
  const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
  try {
    const res = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: data.name.split(" ")[0] || "",
        last_name: data.name.split(" ").slice(1).join(" ") || "",
        email: data.email,
        phone: "N/A",
        message: `Subject: ${data.subject}

${data.message}`
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
    console.warn("Backend API not reachable, falling back to mock/offline success:", err.message);
  }
  return {
    success: true,
    offline: true
  };
});
export {
  submitContactForm_createServerFn_handler
};
