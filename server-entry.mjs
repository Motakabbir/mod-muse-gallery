import http from 'http';
import { existsSync, lstatSync, createReadStream } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT || '3020', 10);
const HOST = process.env.HOST || '127.0.0.1';

// Try to find the correct built server file
const possiblePaths = [
  './dist/server/index.mjs',   // Nitro node-server preset output
  './dist/server/server.js',   // TanStack Start SSR handler
  './dist/server/server.mjs',  // Alternative
];

const serverPath = possiblePaths.find(p => existsSync(resolve(__dirname, p)));

if (!serverPath) {
  console.error("ERROR: No built server file found. Run 'npm run build' first.");
  console.error("Checked paths:", possiblePaths);
  process.exit(1);
}

console.log(`Loading server module from: ${serverPath}`);

// Load the SSR handler module
const mod = await import(serverPath).catch(err => {
  console.error("Failed to import server module:", err);
  process.exit(1);
});

const handler = mod.default ?? mod;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
};

function getMimeType(filePath) {
  const ext = filePath.slice(filePath.lastIndexOf('.')).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

// If the module itself starts a server (Nitro node-server preset), we're done.
// Otherwise, create a Node HTTP server wrapping the Fetch API handler.
if (typeof handler?.fetch === 'function') {
  console.log('Detected Fetch API handler - wrapping in Node.js HTTP server...');
  
  const server = http.createServer(async (req, res) => {
    try {
      // Normalize URL - handle absolute URLs from proxies
      let url = req.url || '/';
      if (url.startsWith('http')) {
        try {
          url = new URL(url).pathname + (new URL(url).search || '');
        } catch (e) { /* ignore */ }
      }

      const protocol = req.headers['x-forwarded-proto'] || 'https';
      const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'syndicatedrestomod.com';
      const fullUrl = `${protocol}://${host}${url}`;

      // Static file serving fallback
      const urlObj = new URL(fullUrl);
      const pathname = urlObj.pathname;
      const clientDir = join(__dirname, './dist/client');
      const filePath = join(clientDir, pathname);
      
      if (filePath.startsWith(clientDir) && existsSync(filePath)) {
        try {
          const stat = lstatSync(filePath);
          if (stat.isFile()) {
            res.writeHead(200, {
              'Content-Type': getMimeType(filePath),
              'Cache-Control': pathname.startsWith('/assets/') 
                ? 'public, max-age=31536000, immutable' 
                : 'public, max-age=3600',
            });
            createReadStream(filePath).pipe(res);
            return;
          }
        } catch (e) {
          // Fall through to SSR
        }
      }

      // Read body
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const body = chunks.length > 0 ? Buffer.concat(chunks) : null;

      // Build Fetch Request
      const fetchReq = new Request(fullUrl, {
        method: req.method,
        headers: Object.fromEntries(
          Object.entries(req.headers).map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : v])
        ),
        body: body && body.length > 0 ? body : undefined,
        duplex: 'half',
      });

      const fetchRes = await handler.fetch(fetchReq);

      // Write response
      res.statusCode = fetchRes.status;
      for (const [key, value] of fetchRes.headers.entries()) {
        res.setHeader(key, value);
      }

      if (fetchRes.body) {
        const reader = fetchRes.body.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
        }
      }
      res.end();
    } catch (err) {
      console.error('Request error:', err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
      }
    }
  });

  server.listen(PORT, HOST, () => {
    console.log(`✓ Server running at http://${HOST}:${PORT}`);
  });

  server.on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
  });

} else {
  // The module is a full Nitro node-server (handles its own HTTP)
  console.log('Server module is self-hosting (Nitro node-server preset).');
  console.log(`✓ Server should be listening on port ${PORT}`);
}
