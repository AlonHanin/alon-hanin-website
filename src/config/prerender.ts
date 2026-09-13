import { insights, publishedInsights } from "../data/insights.ts";
import { processSteps } from "../data/process.ts";
import { projects } from "../data/projects.ts";
import { integrationsNote, services } from "../data/services.ts";
import { servicesFaq } from "../data/faq.ts";
import { about, contactSection, hero, howIWork } from "../data/siteContent.ts";
import { canonicalUrl, routeFor, SITE_URL } from "./routes.ts";

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const list = (items: string[]) => `<ul class="mt-3 space-y-2 text-ink-soft">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const shell = (content: string) => `<main id="main-content" class="py-9 sm:py-16"><div class="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8">${content}</div></main>`;

function homeBody() {
  const featured = projects.en.filter((project) => project.published && project.featured);
  return shell(`
    <section>
      <p class="text-sm font-semibold text-accent">${escapeHtml(hero.en.eyebrow)}</p>
      <h1 class="mt-3 max-w-4xl font-display text-4xl font-bold">${escapeHtml(hero.en.headline)}</h1>
      <p class="mt-4 max-w-3xl leading-relaxed text-ink-soft">${escapeHtml(hero.en.sub)}</p>
      <p class="mt-5"><a class="font-semibold text-accent" href="/contact/">${escapeHtml(hero.en.ctaPrimary)}</a> · <a class="font-semibold text-accent" href="/services/#how-i-work">${escapeHtml(hero.en.ctaSecondary)}</a></p>
    </section>
    <section class="mt-12"><h2 class="font-display text-2xl font-bold">How can I help?</h2><p class="mt-3"><a class="font-semibold text-accent" href="/insights/">Read practical insights</a></p><div class="mt-5 grid gap-4 sm:grid-cols-2">${services.en.map((service) => `<article><h3 class="font-semibold"><a href="/services/#${escapeHtml(service.id)}">${escapeHtml(service.title)}</a></h3><p class="mt-2 text-sm leading-relaxed text-ink-soft">${escapeHtml(service.description)}</p></article>`).join("")}</div></section>
    <section class="mt-12"><h2 class="font-display text-2xl font-bold"><a href="/work/">Selected work</a></h2><div class="mt-5 grid gap-4 sm:grid-cols-2">${featured.map((project) => `<article><h3 class="font-semibold"><a href="/work/${escapeHtml(project.id)}/">${escapeHtml(project.name)} — ${escapeHtml(project.category)}</a></h3><p class="mt-2 text-sm leading-relaxed text-ink-soft">${escapeHtml(project.headline)}</p></article>`).join("")}</div></section>
    <section class="mt-12"><h2 class="font-display text-2xl font-bold">${escapeHtml(about.en.headline)}</h2><p class="mt-3 max-w-3xl leading-relaxed text-ink-soft">${escapeHtml(about.en.paragraphs[0])}</p><p class="mt-4"><a class="font-semibold text-accent" href="/contact/">About Alon and contact</a></p></section>
  `);
}

function servicesBody() {
  return shell(`
    <p class="text-xs font-semibold text-accent">Services</p>
    <h1 class="mt-3 max-w-3xl font-display text-3xl font-bold">Digital solutions built around your business.</h1>
    <p class="mt-3 max-w-2xl leading-relaxed text-ink-soft">Start with the business need, then choose the right tools for the way you work.</p>
    <div class="mt-8 grid gap-5 sm:grid-cols-2">${services.en.map((service) => `<section id="${escapeHtml(service.id)}"><h2 class="font-display text-xl font-bold">${escapeHtml(service.title)}</h2><p class="mt-2 leading-relaxed text-ink-soft">${escapeHtml(service.description)}</p>${list(service.examples)}</section>`).join("")}</div>
    <section id="integrations" class="mt-10"><h2 class="font-display text-2xl font-bold">${escapeHtml(integrationsNote.en.title)}</h2><p class="mt-3 max-w-3xl leading-relaxed text-ink-soft">${escapeHtml(integrationsNote.en.description)}</p><p class="mt-2 max-w-3xl leading-relaxed text-ink-soft">${escapeHtml(integrationsNote.en.note)}</p></section>
    <section id="how-i-work" class="mt-10"><h2 class="font-display text-2xl font-bold">How we work together</h2><ol class="mt-5 grid gap-5 sm:grid-cols-2">${processSteps.en.map((item) => `<li><h3 class="font-semibold">${item.step}. ${escapeHtml(item.title)}</h3><p class="mt-2 text-sm leading-relaxed text-ink-soft">${escapeHtml(item.description)}</p></li>`).join("")}</ol><p class="mt-5 font-semibold text-accent">${escapeHtml(howIWork.en.highlight)}</p></section>
    <section class="mt-10"><h2 class="font-display text-2xl font-bold">Before we start</h2>${servicesFaq.en.map(({ question, answer }) => `<details><summary class="font-semibold">${escapeHtml(question)}</summary><p class="mt-2 text-sm leading-relaxed text-ink-soft">${escapeHtml(answer)}</p></details>`).join("")}</section>
    <p class="mt-10"><a class="font-semibold text-accent" href="/work/">See selected projects</a> · <a class="font-semibold text-accent" href="/insights/">Read practical insights</a> · <a class="font-semibold text-accent" href="/contact/">Let's talk</a></p>
  `);
}

function workBody() {
  const visible = projects.en.filter((project) => project.published);
  return shell(`
    <p class="text-xs font-semibold text-accent">Portfolio</p>
    <h1 class="mt-3 font-display text-3xl font-bold">Selected work</h1>
    <p class="mt-3 max-w-xl leading-relaxed text-ink-soft">Systems, apps and websites I've built. Explore a project to see the work behind it.</p>
    <div class="mt-8 grid gap-5 sm:grid-cols-2">${visible.map((project) => `<article><h2 class="font-display text-xl font-bold"><a href="/work/${escapeHtml(project.id)}/">${escapeHtml(project.name)} — ${escapeHtml(project.category)}</a></h2><p class="mt-2 text-sm leading-relaxed text-ink-soft">${escapeHtml(project.headline)}</p><h3 class="mt-4 font-semibold">Problem</h3><p class="mt-1 text-sm leading-relaxed text-ink-soft">${escapeHtml(project.problem)}</p><h3 class="mt-4 font-semibold">System / Solution</h3><p class="mt-1 text-sm leading-relaxed text-ink-soft">${escapeHtml(project.solution)}</p>${project.result ? `<h3 class="mt-4 font-semibold">Result and current status</h3><p class="mt-1 text-sm leading-relaxed text-ink-soft">${escapeHtml(project.result)}</p>` : ""}</article>`).join("")}</div>
  `);
}

function projectBody(projectId: string) {
  const project = projects.en.find((item) => item.id === projectId && item.published);
  if (!project) return notFoundBody();
  const related = services.en.find((service) => service.id === project.relatedServiceId);
  return shell(`
    <p><a class="font-semibold text-accent" href="/work/">All projects</a></p>
    <article class="mt-5"><p class="font-semibold text-accent">${escapeHtml(project.category)}</p><h1 class="mt-3 font-display text-3xl font-bold">${escapeHtml(project.name)}</h1><p class="mt-3 max-w-3xl leading-relaxed text-ink-soft">${escapeHtml(project.headline)}</p>
    <section class="mt-8"><h2 class="font-display text-xl font-bold">Problem</h2><p class="mt-2 leading-relaxed text-ink-soft">${escapeHtml(project.problem)}</p></section>
    ${project.existingWorkflow ? `<section class="mt-8"><h2 class="font-display text-xl font-bold">Existing workflow</h2><p class="mt-2 leading-relaxed text-ink-soft">${escapeHtml(project.existingWorkflow)}</p></section>` : ""}
    ${project.requirements?.length ? `<section class="mt-8"><h2 class="font-display text-xl font-bold">Requirements</h2>${list(project.requirements)}</section>` : ""}
    <section class="mt-8"><h2 class="font-display text-xl font-bold">System / Solution</h2><p class="mt-2 leading-relaxed text-ink-soft">${escapeHtml(project.solution)}</p></section>
    <section class="mt-8"><h2 class="font-display text-xl font-bold">Implementation approach</h2><p class="mt-2 leading-relaxed text-ink-soft">${escapeHtml(project.scope)}</p></section>
    ${project.result ? `<section class="mt-8"><h2 class="font-display text-xl font-bold">Result and current status</h2><p class="mt-2 leading-relaxed text-ink-soft">${escapeHtml(project.result)}</p></section>` : ""}
    <section class="mt-8"><h2 class="font-display text-xl font-bold">Technologies and integrations</h2>${list([...project.stack, ...(project.integrations ?? [])])}</section>
    ${related ? `<p class="mt-8">Related service: <a class="font-semibold text-accent" href="/services/#${escapeHtml(related.id)}">${escapeHtml(related.title)}</a></p>` : ""}
    <p class="mt-8"><a class="font-semibold text-accent" href="${escapeHtml(project.cta?.href ?? "/contact/")}">${escapeHtml(project.cta?.label ?? "Let's discuss your project")}</a></p></article>
  `);
}

function contactBody() {
  return shell(`<p class="text-xs font-semibold text-accent">About &amp; contact</p><h1 class="mt-3 font-display text-3xl font-bold">${escapeHtml(about.en.headline)}</h1>${about.en.paragraphs.map((paragraph) => `<p class="mt-4 max-w-3xl leading-relaxed text-ink-soft">${escapeHtml(paragraph)}</p>`).join("")}<section class="mt-10"><h2 class="font-display text-2xl font-bold">${escapeHtml(contactSection.en.headline)}</h2><p class="mt-3 max-w-2xl leading-relaxed text-ink-soft">${escapeHtml(contactSection.en.sub)}</p><p class="mt-5"><a class="font-semibold text-accent" href="mailto:alon.hanin95@gmail.com">${escapeHtml(contactSection.en.emailLabel)}</a></p></section>`);
}

function insightsBody() {
  const articles = publishedInsights("en");
  return shell(`<p class="text-xs font-semibold text-accent">Insights</p><h1 class="mt-3 font-display text-3xl font-bold">Practical guides for better digital workflows</h1><p class="mt-3 max-w-2xl leading-relaxed text-ink-soft">Practical articles on business systems, automation and workflows — what to examine, when to start and how to choose a solution that fits the business.</p>${articles.length ? `<div class="mt-8 space-y-5">${articles.map((article) => `<article class="rounded-xl border border-line bg-paper-raised p-5 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:p-6"><div><h2 class="font-display text-xl font-bold"><a href="/insights/${escapeHtml(article.slug)}/">${escapeHtml(article.title)}</a></h2><p class="mt-3 text-sm leading-relaxed text-ink-soft">${escapeHtml(article.summary)}</p></div><time class="mt-4 block text-xs text-muted sm:mt-0" datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time></article>`).join("")}</div>` : ""}`);
}

function insightBody(slug: string) {
  const article = insights.en.find((item) => item.slug === slug && item.published);
  if (!article) return notFoundBody();
  const relatedServices = services.en.filter((service) => article.relatedServiceIds.includes(service.id));
  const relatedProjects = projects.en.filter((project) => project.published && article.relatedProjectIds.includes(project.id));
  const relatedArticles = publishedInsights("en").filter((item) => article.relatedArticleSlugs.includes(item.slug));
  return shell(`<article><p><a href="/insights/">All insights</a></p><h1 class="mt-4 font-display text-3xl font-bold">${escapeHtml(article.title)}</h1><p class="mt-3 leading-relaxed text-ink-soft">${escapeHtml(article.summary)}</p><p class="mt-3 text-sm text-muted">${escapeHtml(article.author)} · <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time></p>${article.sections.map((section) => `<section class="mt-8"><h2 class="font-display text-2xl font-bold">${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p class="mt-3 leading-relaxed text-ink-soft">${escapeHtml(paragraph)}</p>`).join("")}</section>`).join("")}${relatedServices.length ? `<section class="mt-8"><h2 class="font-display text-xl font-bold">Related services</h2><ul>${relatedServices.map((service) => `<li><a href="/services/#${escapeHtml(service.id)}">${escapeHtml(service.title)}</a></li>`).join("")}</ul></section>` : ""}${relatedProjects.length ? `<section class="mt-8"><h2 class="font-display text-xl font-bold">Related project</h2><p><a href="/work/${escapeHtml(relatedProjects[0].id)}/">${escapeHtml(relatedProjects[0].name)} — ${escapeHtml(relatedProjects[0].category)}</a></p></section>` : ""}${relatedArticles.length ? `<section class="mt-8"><h2 class="font-display text-xl font-bold">Related articles</h2><ul>${relatedArticles.map((item) => `<li><a href="/insights/${escapeHtml(item.slug)}/">${escapeHtml(item.title)}</a></li>`).join("")}</ul></section>` : ""}<p class="mt-8"><a href="${escapeHtml(article.cta?.href ?? "/contact/")}">${escapeHtml(article.cta?.label ?? "Let's talk")}</a></p></article>`);
}

function notFoundBody() {
  return shell(`<p class="text-accent">404</p><h1 class="mt-3 font-display text-3xl font-bold">Page not found</h1><p class="mt-4"><a class="font-semibold text-accent" href="/">Back to home</a></p>`);
}

export function prerenderBody(path: string) {
  if (path === "/") return homeBody();
  if (path === "/services/") return servicesBody();
  if (path === "/work/") return workBody();
  if (path === "/contact/") return contactBody();
  if (path === "/accessibility/") return shell(`<h1 class="font-display text-3xl font-bold">Accessibility Statement</h1><p class="mt-4 max-w-3xl leading-relaxed text-ink-soft">NolaNxt provides services remotely and works to make this website accessible. Accessibility controls and contact options are available throughout the site.</p><p class="mt-5"><a class="font-semibold text-accent" href="mailto:alon.hanin95@gmail.com">Contact about accessibility</a></p>`);
  if (path === "/insights/") return insightsBody();
  const projectMatch = path.match(/^\/work\/([^/]+)\/$/);
  if (projectMatch) return projectBody(projectMatch[1]);
  const insightMatch = path.match(/^\/insights\/([^/]+)\/$/);
  if (insightMatch) return insightBody(insightMatch[1]);
  return notFoundBody();
}

export function structuredData(path: string) {
  const schemas: Record<string, unknown>[] = [{
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Nolanxt",
    url: SITE_URL,
    logo: `${SITE_URL}/nolanxt-logo.svg`,
    founder: { "@type": "Person", name: "Alon Hanin" },
    sameAs: ["https://www.linkedin.com/in/alon-hanin"],
  }];

  const route = routeFor(path);
  if (route && path !== "/") {
    const parts = [{ name: "Home", item: `${SITE_URL}/` }];
    if (path.startsWith("/work/") && path !== "/work/") parts.push({ name: "Selected Work", item: `${SITE_URL}/work/` });
    if (path.startsWith("/insights/") && path !== "/insights/") parts.push({ name: "Insights", item: `${SITE_URL}/insights/` });
    parts.push({ name: route.title.en, item: canonicalUrl(path) });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: parts.map((part, index) => ({ "@type": "ListItem", position: index + 1, ...part })),
    });
  }

  const articleMatch = path.match(/^\/insights\/([^/]+)\/$/);
  const article = articleMatch ? insights.en.find((item) => item.slug === articleMatch[1] && item.published) : undefined;
  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      author: article.author === "Nolanxt" ? { "@id": `${SITE_URL}/#organization` } : { "@type": "Person", name: article.author },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: canonicalUrl(path),
      ...(article.image ? { image: `${SITE_URL}${article.image.src}` } : {}),
    });
  }

  return JSON.stringify(schemas).replaceAll("<", "\\u003c");
}
