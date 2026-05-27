import {
  renderErrorPage
} from "./chunk-U4TNIV2Z.js";
import {
  createMiddleware
} from "./chunk-TVBJ3E42.js";
import "./chunk-EF2KJFQN.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-VHBRN7H3.js";
import {
  __toESM
} from "./chunk-QGM4M3NI.js";

// dist/server/assets/start-DFsKAVeD.js
import "node:async_hooks";
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware
  };
};
var errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(typeof error !== 'undefined' ? error : (typeof err !== 'undefined' ? err : undefined)), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
var startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware]
}));
export {
  startInstance
};
