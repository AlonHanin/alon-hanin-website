import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { pageRoutes, pageTitle } from "./src/config/routes.ts";
import { projects } from "./src/data/projects.ts";

// Real HTML entry files allow direct links and refreshes on Cloudflare Pages.
// Navigation uses normal links, so browser history, new tabs and scroll
// restoration keep their native behavior without a client-side router.
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
        const escape = (text: string) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
        const htmlFor = (path: string) => {
          const title = escape(pageTitle(path, "en"));
          const project = projects.en.find((item) => path === `/work/${item.id}/`);
          let html = template.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
            .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${title}`);
          if (project) html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*/, `$1${escape(project.solution)}`);
          return html;
        };
        index.source = htmlFor("/");
        for (const route of pageRoutes.filter((item) => item.path !== "/")) {
          this.emitFile({ type: "asset", fileName: `${route.path.slice(1)}index.html`, source: htmlFor(route.path) });
        }
        this.emitFile({ type: "asset", fileName: "404.html", source: htmlFor("/404/").replace("</head>", '<meta name="robots" content="noindex" /></head>') });
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pageEntries()],
});
