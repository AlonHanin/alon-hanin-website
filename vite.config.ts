import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { canonicalUrl, pageDescription, pageRoutes, pageTitle, routeFor, SITE_URL } from "./src/config/routes.ts";
import { prerenderBody, structuredData } from "./src/config/prerender.ts";

const escapeAttribute = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const escapeXml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

function replaceMeta(html: string, attribute: "name" | "property", key: string, value: string) {
  const pattern = new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*`, "m");
  return html.replace(pattern, `$1${escapeAttribute(value)}`);
}

// Cloudflare Pages receives a real HTML entry for every public route. The
// build-time body gives non-JavaScript crawlers meaningful content, while React
// replaces it with the existing interactive UI for visitors.
function pageEntries(): Plugin {
  return {
    name: "page-entries",
    apply: "build",
    enforce: "post",
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        const index = bundle["index.html"];
        if (!index || index.type !== "asset") throw new Error("Missing built index.html");
        const template = String(index.source);

        const htmlFor = (path: string, forceNoindex = false) => {
          const route = routeFor(path);
          const title = pageTitle(path, "en");
          const description = pageDescription(path, "en");
          const canonical = canonicalUrl(path);
          const noindex = forceNoindex || route?.indexable === false || !route;
          const isArticle = route?.key === "insight";
          let html = template
            .replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(title)}</title>`)
            .replace(/(<link\s+rel="canonical"\s+href=")[^"]*/, `$1${escapeAttribute(canonical)}`)
            .replace('<div id="root"></div>', `<div id="root">${prerenderBody(path)}</div>`);

          html = replaceMeta(html, "name", "description", description);
          html = replaceMeta(html, "name", "robots", noindex ? "noindex,follow" : "index,follow");
          html = replaceMeta(html, "property", "og:type", isArticle ? "article" : "website");
          html = replaceMeta(html, "property", "og:title", title);
          html = replaceMeta(html, "property", "og:description", description);
          html = replaceMeta(html, "property", "og:url", canonical);
          html = replaceMeta(html, "name", "twitter:title", title);
          html = replaceMeta(html, "name", "twitter:description", description);
          return html.replace("</head>", `<script type="application/ld+json">${structuredData(path)}</script>\n  </head>`);
        };

        index.source = htmlFor("/");
        for (const route of pageRoutes.filter((item) => item.path !== "/")) {
          this.emitFile({ type: "asset", fileName: `${route.path.slice(1)}index.html`, source: htmlFor(route.path) });
        }
        this.emitFile({ type: "asset", fileName: "404.html", source: htmlFor("/404/", true) });

        const indexableRoutes = pageRoutes.filter((route) => route.indexable !== false);
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexableRoutes.map((route) => `  <url><loc>${escapeXml(canonicalUrl(route.path))}</loc></url>`).join("\n")}\n</urlset>\n`;
        this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap });
        this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` });
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pageEntries()],
});
