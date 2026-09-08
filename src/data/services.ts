import {
  LayoutDashboard,
  AppWindow,
  Globe,
  Smartphone,
  Plug,
} from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "business-systems",
    title: "מערכות ניהול לעסקים",
    description:
      "מערכת אחת שמרכזת את מה שהיום מתנהל בכמה קבצי אקסל וקבוצות WhatsApp — לקוחות, עבודות, הזמנות, מלאי ומשימות, במקום אחד ברור.",
    icon: LayoutDashboard,
    examples: [
      "ניהול לקוחות",
      "ניהול עבודות והזמנות",
      "מלאי ומשימות",
      "תשלומים ודוחות",
    ],
  },
  {
    id: "web-apps",
    title: "Web Apps ומערכות פנימיות",
    description:
      "כלים פנימיים מותאמים אישית שנגישים מהדפדפן מכל מקום — לצוות, לספקים או ללקוחות, בלי תלות בקובץ אחד ששולחים במייל.",
    icon: AppWindow,
    examples: [
      "לוחות בקרה (Dashboards)",
      "ניהול תהליכים ואישורים",
      "פורטלים ללקוחות וספקים",
    ],
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
];

export const integrationsNote = {
  icon: Plug,
  title: "וגם: חיבור בין מערכות",
  description:
    "כשצריך — חיבור למערכות קיימות, ייבוא וייצוא נתונים, ואוטומציות בין כלים דרך APIs, כך שהמידע זז פעם אחת ונשאר נכון בכל מקום.",
};
