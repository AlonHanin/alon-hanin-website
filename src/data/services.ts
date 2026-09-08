import {
  LayoutDashboard,
  AppWindow,
  Globe,
  Smartphone,
  Plug,
} from "lucide-react";
import type { Localized, Service } from "../types";

export const services: Localized<Service[]> = {
  en: [
    {
      id: "business-systems",
      title: "Business Management Systems",
      description:
        "One system that centralizes what today runs across several spreadsheets and WhatsApp groups — clients, jobs, orders, inventory and tasks, all in one clear place.",
      icon: LayoutDashboard,
      examples: ["Customer management", "Jobs & orders", "Inventory & tasks", "Payments & reports"],
    },
    {
      id: "web-apps",
      title: "Web Apps & Internal Tools",
      description:
        "Custom internal tools accessible from the browser, from anywhere — for your team, suppliers or clients, with no dependency on a single file emailed back and forth.",
      icon: AppWindow,
      examples: ["Dashboards", "Approval workflows", "Client & supplier portals"],
    },
    {
      id: "business-websites",
      title: "Business Websites",
      description:
        "A clean, fast business website that conveys credibility and drives inquiries — not a generic template, but a site built around how your business actually works and sells.",
      icon: Globe,
      examples: ["Brand sites", "Landing pages", "Fully responsive on mobile"],
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps for Business",
      description:
        "When part of the process happens in the field — a cross-platform Android and iOS app connecting employees or clients to the central system.",
      icon: Smartphone,
      examples: ["Field apps", "Notifications & updates", "Works without constant connectivity"],
    },
  ],
  he: [
    {
      id: "business-systems",
      title: "מערכות ניהול לעסקים",
      description:
        "מערכת אחת שמרכזת את מה שהיום מתנהל בכמה קבצי אקסל וקבוצות WhatsApp — לקוחות, עבודות, הזמנות, מלאי ומשימות, במקום אחד ברור.",
      icon: LayoutDashboard,
      examples: ["ניהול לקוחות", "ניהול עבודות והזמנות", "מלאי ומשימות", "תשלומים ודוחות"],
    },
    {
      id: "web-apps",
      title: "Web Apps ומערכות פנימיות",
      description:
        "כלים פנימיים מותאמים אישית שנגישים מהדפדפן מכל מקום — לצוות, לספקים או ללקוחות, בלי תלות בקובץ אחד ששולחים במייל.",
      icon: AppWindow,
      examples: ["לוחות בקרה (Dashboards)", "ניהול תהליכים ואישורים", "פורטלים ללקוחות וספקים"],
    },
    {
      id: "business-websites",
      title: "אתרים לעסקים",
      description:
        "אתר עסקי נקי ומהיר שמעביר אמינות ומוביל לפנייה — לא תבנית גנרית, אלא אתר שבנוי סביב איך שהעסק שלכם באמת עובד ומוכר.",
      icon: Globe,
      examples: ["אתרי תדמית", "דפי נחיתה", "התאמה מלאה למובייל"],
    },
    {
      id: "mobile-apps",
      title: "אפליקציות לעסקים",
      description:
        "כשחלק מהתהליך קורה בשטח — אפליקציה חוצת-פלטפורמות ל-Android ו-iOS שמחברת את העובדים או הלקוחות למערכת המרכזית.",
      icon: Smartphone,
      examples: ["אפליקציות שטח", "התראות ועדכונים", "עבודה גם ללא חיבור רציף"],
    },
  ],
};

export const integrationsNote: Localized<{
  icon: typeof Plug;
  title: string;
  description: string;
}> = {
  en: {
    icon: Plug,
    title: "Also: connecting systems together",
    description:
      "When needed — connecting to existing systems, importing and exporting data, and automations between tools via APIs, so information moves once and stays correct everywhere.",
  },
  he: {
    icon: Plug,
    title: "וגם: חיבור בין מערכות",
    description:
      "כשצריך — חיבור למערכות קיימות, ייבוא וייצוא נתונים, ואוטומציות בין כלים דרך APIs, כך שהמידע זז פעם אחת ונשאר נכון בכל מקום.",
  },
};
