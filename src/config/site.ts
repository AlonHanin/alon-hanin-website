import type { Localized } from "../types";

// Set to true to restore both the projects section and its navigation links.
export const showProjects = false;

/**
 * Core brand configuration.
 * Change the brand name / descriptor here — nothing else in the app
 * hardcodes "Alon Hanin", so a rename only touches this file.
 */
export const site: Localized<{ name: string; descriptor: string }> = {
  en: {
    name: "Alon Hanin",
    descriptor: "Business Systems & Digital Solutions",
  },
  he: {
    name: "אלון חנין",
    descriptor: "מערכות דיגיטליות לעסקים",
  },
};
