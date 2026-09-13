import { insights } from "../data/insights.ts";
import { projects } from "../data/projects.ts";
import { showProjects } from "./site.ts";
import type { Lang, Localized } from "../types/index.ts";

export const SITE_URL = "https://nolanxt.com";

type RouteKey = "accessibility" | "home" | "services" | "work" | "contact" | "project" | "insights" | "insight";

export interface PageRoute {
  path: string;
  key: RouteKey;
  title: Localized<string>;
  seoTitle?: Localized<string>;
  description: Localized<string>;
  indexable?: boolean;
}

export const navigation = [
  { key: "home", path: "/", label: { he: "בית", en: "Home" } },
  { key: "services", path: "/services/", label: { he: "שירותים", en: "Services" } },
  ...(showProjects ? [{ key: "work", path: "/work/", label: { he: "עבודות", en: "Work" } }] : []),
  ...(insights.en.some((article) => article.published) ? [{ key: "insights", path: "/insights/", label: { he: "מדריכים", en: "Insights" } }] : []),
  { key: "contact", path: "/contact/", label: { he: "עליי ויצירת קשר", en: "About & contact" } },
];

const coreRoutes: PageRoute[] = [
  {
    path: "/accessibility/",
    key: "accessibility",
    title: { he: "הצהרת נגישות", en: "Accessibility Statement" },
    description: { he: "הצהרת הנגישות של אתר NolaNxt ודרכי יצירת קשר בנושא נגישות.", en: "The NolaNxt website accessibility statement and contact details for accessibility inquiries." },
  },
  {
    path: "/",
    key: "home",
    title: { he: "מערכות עסקיות ואוטומציה בהתאמה אישית", en: "Custom Business Systems & Automation" },
    seoTitle: { he: "Custom Business Systems & Automation | Nolanxt", en: "Custom Business Systems & Automation | Nolanxt" },
    description: { he: "Nolanxt designs custom business systems and automation around real business workflows, helping businesses reduce manual work and connect the tools they already use.", en: "Nolanxt designs custom business systems and automation around real business workflows, helping businesses reduce manual work and connect the tools they already use." },
  },
  {
    path: "/services/",
    key: "services",
    title: { he: "שירותי פיתוח לעסקים", en: "Development Services" },
    description: { he: "פיתוח מערכות ניהול, Web Apps, אתרים ואפליקציות שמותאמים לתהליך העבודה של העסק ומתחברים לכלים הקיימים.", en: "Custom business systems, web apps, websites and mobile apps designed around real workflows and existing tools." },
  },
  ...(showProjects ? [{
    path: "/work/",
    key: "work" as const,
    title: { he: "עבודות נבחרות", en: "Selected Work" },
    description: { he: "פרויקטים אמיתיים של מערכות ניהול, אפליקציות, אתרים ודשבורדים שפיתח אלון חנין.", en: "Selected business systems, mobile apps, websites and dashboards developed by Alon Hanin." },
  }] : []),
  {
    path: "/contact/",
    key: "contact",
    title: { he: "עליי ויצירת קשר", en: "About & Contact" },
    description: { he: "הכירו את אלון חנין ואת הגישה של NolaNxt לפיתוח מערכות, וצרו קשר לשיחה על התהליך העסקי שלכם.", en: "Meet Alon Hanin, learn how NolaNxt approaches business systems, and get in touch about your workflow." },
  },
  {
    path: "/insights/",
    key: "insights",
    title: { he: "תובנות ומדריכים", en: "Insights & Guides" },
    description: { he: "מדריכים מעשיים על מערכות עסקיות, תהליכי עבודה ואוטומציה.", en: "Practical guides to business systems, workflows and automation." },
    indexable: insights.en.some((article) => article.published),
  },
];

const projectRoutes: PageRoute[] = showProjects ? projects.en.filter((project) => project.published).map((project) => {
  const hebrew = projects.he.find((item) => item.id === project.id);
  return {
    path: `/work/${project.id}/`,
    key: "project",
    title: { en: project.name, he: hebrew?.name ?? project.name },
    description: { en: project.solution, he: hebrew?.solution ?? project.solution },
  };
}) : [];

const insightRoutes: PageRoute[] = insights.en.filter((article) => article.published).map((article) => {
  const hebrew = insights.he.find((item) => item.slug === article.slug);
  return {
    path: `/insights/${article.slug}/`,
    key: "insight",
    title: { en: article.title, he: hebrew?.title ?? article.title },
    seoTitle: { en: article.metaTitle, he: hebrew?.metaTitle ?? article.metaTitle },
    description: { en: article.metaDescription, he: hebrew?.metaDescription ?? article.metaDescription },
  };
});

export const pageRoutes: PageRoute[] = [...coreRoutes, ...projectRoutes, ...insightRoutes];

export function normalizePath(path: string) {
  const clean = path.replace(/\/index\.html$/, "/").replace(/\/+$/, "");
  return clean ? `${clean}/` : "/";
}

export function routeFor(path: string) {
  return pageRoutes.find((route) => route.path === normalizePath(path));
}

export function pageTitle(path: string, lang: Lang) {
  const page = routeFor(path);
  const title = page?.title[lang] ?? (lang === "he" ? "העמוד לא נמצא" : "Page not found");
  return page?.seoTitle?.[lang] ?? `${title} | Nolanxt`;
}

export function pageDescription(path: string, lang: Lang) {
  const page = routeFor(path);
  return page?.description[lang] ?? (lang === "he" ? "העמוד המבוקש לא נמצא." : "The requested page could not be found.");
}

export function canonicalUrl(path: string) {
  return `${SITE_URL}${normalizePath(path)}`;
}
