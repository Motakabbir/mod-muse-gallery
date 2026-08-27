export default function (nitroApp) {
  nitroApp.hooks.hook("request", (event) => {
    // If a reverse proxy (like cPanel/Apache/Nginx) passes the full absolute URL,
    // this strips it down to just the relative path so Nitro's router can understand it.
    if (event.node && event.node.req && event.node.req.url && event.node.req.url.startsWith("http")) {
      try {
        const url = new URL(event.node.req.url);
        event.node.req.url = url.pathname + url.search;
      } catch (e) {
        // ignore parsing errors
      }
    }
  });
}
