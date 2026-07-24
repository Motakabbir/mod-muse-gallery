function createIsomorphicFn() {
  return createRuntimeFn(() => void 0);
}
function createRuntimeFn(fn, serverImpl) {
  return Object.assign(fn, {
    server: (nextServerImpl) => {
      return createRuntimeFn(nextServerImpl, nextServerImpl);
    },
    client: (clientImpl) => {
      return createRuntimeFn(serverImpl ?? clientImpl, serverImpl);
    }
  });
}
var createServerOnlyFn = (fn) => fn;
export {
  createServerOnlyFn as a,
  createIsomorphicFn as c
};
