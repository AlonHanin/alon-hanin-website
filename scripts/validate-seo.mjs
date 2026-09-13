import fs from "node:fs/promises";
import path from "node:path";
import { canonicalUrl, pageRoutes, SITE_URL } from "../src/config/routes.ts";

const dist = path.resolve("dist");
const failures = [];
const fail = (message) => failures.push(message);
const fileForRoute = (routePath) => routePath === "/" ? path.join(dist, "index.html") : path.join(dist, routePath.slice(1), "index.html");
const htmlByRoute = new Map();

for (const route of pageRoutes) {
  const file = fileForRoute(route.path);
  let html;
  try { html = await fs.readFile(file, "utf8"); }
  catch { fail(`${route.path}: missing ${path.relative(dist, file)}`); continue; }
  htmlByRoute.set(route.path, html);

  const h1Count = html.match(/<h1\b/g)?.length ?? 0;
  if (h1Count !== 1) fail(`${route.path}: expected one H1, found ${h1Count}`);
  if (!html.includes(`<link rel="canonical" href="${canonicalUrl(route.path)}"`)) fail(`${route.path}: incorrect canonical`);
  const expectedRobots = route.indexable === false ? "noindex,follow" : "index,follow";
  if (!html.includes(`<meta name="robots" content="${expectedRobots}"`)) fail(`${route.path}: incorrect robots directive`);
  if (!html.includes('<main id="main-content"')) fail(`${route.path}: no crawlable main content`);
  if (!html.includes('property="og:url"')) fail(`${route.path}: missing og:url`);
  if (!html.includes('name="twitter:image"')) fail(`${route.path}: missing Twitter image`);

  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (schemas.length === 0) fail(`${route.path}: missing structured data`);
  for (const [, json] of schemas) {
    try { JSON.parse(json); } catch (error) { fail(`${route.path}: invalid structured data (${error.message})`); }
  }
}

for (const [routePath, html] of htmlByRoute) {
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathname = href.split(/[?#]/, 1)[0] || "/";
    const target = pathname.endsWith("/") ? fileForRoute(pathname) : path.join(dist, pathname.slice(1));
    try { await fs.access(target); } catch { fail(`${routePath}: broken internal link ${href}`); }
  }
}

const sitemap = await fs.readFile(path.join(dist, "sitemap.xml"), "utf8");
for (const route of pageRoutes) {
  const included = sitemap.includes(`<loc>${canonicalUrl(route.path)}</loc>`);
  if (route.indexable === false && included) fail(`${route.path}: noindex route appears in sitemap`);
  if (route.indexable !== false && !included) fail(`${route.path}: indexable route missing from sitemap`);
}

const robots = await fs.readFile(path.join(dist, "robots.txt"), "utf8");
if (!robots.includes("User-agent: *\nAllow: /")) fail("robots.txt does not allow general crawling");
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) fail("robots.txt sitemap URL is incorrect");

const notFound = await fs.readFile(path.join(dist, "404.html"), "utf8");
if (!notFound.includes('content="noindex,follow"')) fail("404.html is not noindex");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`${pageRoutes.length} routes validated: crawlable body, one H1, metadata, structured data, sitemap, robots and internal links.`);
}
