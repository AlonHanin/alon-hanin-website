// Run against a local preview and a dedicated Chrome debugging profile.
// Automated checks supplement, and do not replace, a manual accessibility audit.
import fs from "node:fs/promises";
import { pageRoutes } from "../src/config/routes.ts";

const siteUrl = process.argv[2] ?? "http://127.0.0.1:5191";
const debugUrl = process.argv[3] ?? "http://127.0.0.1:9226";
const pages = await (await fetch(`${debugUrl}/json`)).json();
const page = pages.find((item) => item.type === "page");
if (!page) throw new Error("Open a tab in the dedicated Chrome debugging session.");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));
let sequence = 0;
const pending = new Map();
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  const request = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) request.reject(message.error);
  else request.resolve(message.result);
};
const call = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
});
const evaluate = async (expression) => {
  const result = await call("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const navigate = async (path) => {
  await call("Page.navigate", { url: new URL(path, siteUrl).href });
  for (let attempt = 0; attempt < 100; attempt++) {
    await sleep(60);
    try {
      if (await evaluate('document.readyState === "complete" && !!document.querySelector("main h1")')) return;
    } catch { /* The previous execution context is discarded during navigation. */ }
  }
  throw new Error(`Navigation timed out: ${path}`);
};
const axe = await fs.readFile(new URL("../node_modules/axe-core/axe.min.js", import.meta.url), "utf8");
const results = [];
const scan = async (context) => {
  await evaluate(axe);
  const result = await evaluate(`axe.run(document, { runOnly: {type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']} }).then(r => ({
    violations: r.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({html: n.html, summary: n.failureSummary})) })),
    needsManualReview: r.incomplete.length
  }))`);
  results.push({ ...context, ...result });
};
try {
  await call("Page.enable");
  for (const lang of ["en", "he"]) {
    await navigate("/");
    await evaluate(`localStorage.setItem('site-lang', '${lang}'); localStorage.removeItem('site-accessibility');`);
    for (const width of [390, 1440]) {
      await call("Emulation.setDeviceMetricsOverride", { width, height: 844, deviceScaleFactor: 1, mobile: width < 500 });
      for (const route of pageRoutes) {
        await navigate(route.path);
        await scan({ lang, width, path: route.path, view: "page" });
        if (route.key === "work") {
          const cards = await evaluate("document.querySelectorAll('.project-card > button').length");
          for (let index = 0; index < cards; index++) {
            await evaluate(`document.querySelectorAll('.project-card > button')[${index}].click()`);
            await scan({ lang, width, path: route.path, view: `project dialog ${index + 1}` });
            await evaluate("document.querySelector('.project-dialog-close').click()");
          }
        }
      }
      await evaluate(`document.querySelector('.accessibility-launcher button').click()`);
      await scan({ lang, width, view: "accessibility dialog" });
      await evaluate(`document.querySelectorAll('dialog input').forEach(input => input.click())`);
      await scan({ lang, width, view: "accessibility dialog with preferences" });
      await evaluate(`document.querySelector('dialog > button').click()`);
    }
  }
  const failures = results.filter((result) => result.violations.length);
  await fs.mkdir("tmp", { recursive: true });
  await fs.writeFile("tmp/accessibility-audit.json", JSON.stringify(results, null, 2));
  console.log(`${results.length} scans; ${failures.length} scans with automated violations. Manual review remains necessary.`);
  if (failures.length) { console.log(JSON.stringify(failures, null, 2)); process.exitCode = 1; }
} finally { ws.close(); }
