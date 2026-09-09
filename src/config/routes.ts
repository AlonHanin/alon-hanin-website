import { projects } from "../data/projects.ts";
import { showProjects } from "./site.ts";
import type { Lang } from "../types/index.ts";

export const navigation = [
  { key: "home", path: "/", label: { he: "בית", en: "Home" } },
  { key: "services", path: "/services/", label: { he: "שירותים", en: "Services" } },
  ...(showProjects ? [{ key: "work", path: "/work/", label: { he: "עבודות", en: "Work" } }] : []),
  { key: "contact", path: "/contact/", label: { he: "עליי ויצירת קשר", en: "About & contact" } },
];

export const pageRoutes = [
  { path: "/accessibility/", key: "accessibility", title: { he: "הצהרת נגישות", en: "Accessibility Statement" } },
  { path: "/", key: "home", title: { he: "מערכות דיגיטליות לעסקים", en: "Digital Systems for Business" } },
  { path: "/services/", key: "services", title: { he: "שירותי פיתוח לעסקים", en: "Development Services" } },
  ...(showProjects ? [{ path: "/work/", key: "work", title: { he: "עבודות נבחרות", en: "Selected Work" } }] : []),
  { path: "/contact/", key: "contact", title: { he: "עליי ויצירת קשר", en: "About & Contact" } },
  ...(showProjects ? projects.en.filter((p) => p.published).map((p) => ({
    path: `/work/${p.id}/`,
    key: "project",
    title: { en: p.name, he: projects.he.find((item) => item.id === p.id)?.name ?? p.name },
  })) : []),
];

export function normalizePath(path: string) {
  const clean = path.replace(/\/index\.html$/, "/").replace(/\/+$/, "");
  return clean ? `${clean}/` : "/";
}

export function pageTitle(path: string, lang: Lang) {
  const page = pageRoutes.find((route) => route.path === normalizePath(path));
  const title = page?.title[lang] ?? (lang === "he" ? "העמוד לא נמצא" : "Page not found");
  return `${title} | ${lang === "he" ? "אלון חנין" : "Alon Hanin"}`;
}
