const server = require('./server.js');

module.exports = async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost';
  const url = new URL(req.url, protocol + '://' + host);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers.append(key, Array.isArray(value) ? value.join(', ') : String(value));
    }
  }

  const method = req.method || 'GET';
  let body = undefined;
  if (method !== 'GET' && method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    if (chunks.length > 0) body = Buffer.concat(chunks);
  }

  const request = new Request(url.href, {
    method,
    headers,
    body: body && body.length > 0 ? body : undefined,
  });

  let response;
  try {
    response = await server.fetch(request, {}, {});
  } catch (err) {
    console.error('SSR handler error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
    return;
  }

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
};
