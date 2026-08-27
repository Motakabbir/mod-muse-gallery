import http from 'http';

// Monkey-patch http.createServer to fix cPanel/Passenger proxying absolute URLs
// This ensures that req.url is always a relative path before Nitro sees it.
const originalCreateServer = http.createServer;
http.createServer = function (options, requestListener) {
  if (typeof options === 'function') {
    requestListener = options;
    options = {};
  }
  
  const wrappedListener = function (req, res) {
    if (req.url && req.url.startsWith('http')) {
      try {
        const url = new URL(req.url);
        req.url = url.pathname + url.search;
      } catch (e) {
        // ignore
      }
    }
    return requestListener(req, res);
  };
  
  return originalCreateServer(options, wrappedListener);
};

// Now import the built Nitro server
import('./dist/server/index.mjs').catch(err => {
  console.error("Failed to start server. Make sure you ran 'npm run build' first!");
  console.error(err);
  process.exit(1);
});
