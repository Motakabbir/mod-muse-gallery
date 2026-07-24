import { i as createStart, f as createMiddleware, e as createCsrfMiddleware } from "../_libs/tanstack__start-client-core.mjs";
import { r as renderErrorPage } from "../index.mjs";
import "../_libs/tanstack__start-fn-stubs.mjs";
import "../_libs/@tanstack/start-storage-context+[...].mjs";
import "node:async_hooks";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/cookie-es.mjs";
import "node:stream/web";
import "node:stream";
const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(error), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn"
});
const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware]
}));
export {
  startInstance
};
