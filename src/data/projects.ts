import type { Localized, Project } from "../types";

/**
 * Add a new project by pushing another object into each language's array —
 * the Projects section renders whatever is here, in order. Keep the same
 * `id` and `status` between the `en` and `he` versions of a project.
 */
export const projects: Localized<Project[]> = {
  en: [
    {
      id: "wineops",
      name: "WineOps",
      category: "Winery management SaaS platform",
      status: "in-development",
      problem:
        "Wineries manage the production lifecycle — from vineyard to bottle — across spreadsheets and separate files, with no structured tracking of batches, tanks and barrels.",
      solution:
        "A dedicated platform that centralizes the entire production process in one place, with full, data-driven traceability along the whole production chain.",
      capabilities: [
        "Vineyards & harvests",
        "Wine batches & tanks",
        "Barrel management",
        "Lab tests",
        "Finished goods",
        "Work orders",
        "Users & roles",
        "Traceability",
      ],
      stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    },
    {
      id: "think-green",
      name: "Think Green",
      category: "Academic mobile app — selected Top 5 project",
      status: "academic",
      problem:
        "Build a tool that encourages and rewards environmentally-friendly behavior, with content management and approval workflows on the admin side.",
      solution:
        "A full mobile app with environmental reports, challenges and a rewards system, including an admin side for approval and moderation.",
      capabilities: [
        "Sign-up & login",
        "User profile",
        "Environmental reports",
        "Admin approval workflow",
        "Rewards & challenges",
        "Admin panel",
      ],
      stack: ["Flutter", "Dart", "PHP", "MySQL"],
    },
    {
      id: "custom-business-system",
      name: "Custom Business Management System",
      category: "Internal system",
      status: "active",
      problem:
        "A business ran its day-to-day operations across several separate spreadsheets, with no single picture and no organized history.",
      solution:
        "A lightweight internal system that replaces the spreadsheets with one structured workflow, fully matched to how the team already works.",
      capabilities: ["Workflow management", "Status tracking", "Basic reporting"],
      stack: ["React", "TypeScript", "Supabase"],
    },
  ],
  he: [
    {
      id: "wineops",
      name: "WineOps",
      category: "מערכת SaaS לניהול יקבים",
      status: "in-development",
      problem:
        "יקבים מנהלים את מחזור החיים של הייצור — מהכרם ועד הבקבוק — דרך גיליונות וקבצים נפרדים, בלי מעקב מסודר אחר אצוות, מכלים וחביות.",
      solution:
        "פלטפורמה ייעודית שמרכזת את כל תהליך הייצור במקום אחד, עם מעקב מלא ומבוסס נתונים לאורך כל שרשרת הייצור.",
      capabilities: [
        "כרמים ובצירים",
        "אצוות יין ומכלים",
        "ניהול חביות",
        "בדיקות מעבדה",
        "מוצר מוגמר",
        "הזמנות עבודה",
        "משתמשים והרשאות",
        "מעקביות (Traceability)",
      ],
      stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    },
    {
      id: "think-green",
      name: "Think Green",
      category: "אפליקציה אקדמית — נבחרה ל-Top 5 בפרויקטים",
      status: "academic",
      problem:
        "יצירת כלי שמעודד ומתגמל התנהגות סביבתית, עם ניהול תוכן ואישורים מצד גורם מנהל.",
      solution:
        "אפליקציית מובייל מלאה עם דיווחים סביבתיים, אתגרים ומערכת תגמול, כולל צד ניהול לאישור ובקרה.",
      capabilities: [
        "הרשמה והתחברות",
        "פרופיל משתמש",
        "דיווחים סביבתיים",
        "תהליך אישור ניהולי",
        "תגמולים ואתגרים",
        "ממשק ניהול",
      ],
      stack: ["Flutter", "Dart", "PHP", "MySQL"],
    },
    {
      id: "custom-business-system",
      name: "מערכת ניהול עסקית מותאמת אישית",
      category: "מערכת פנימית",
      status: "active",
      problem:
        "עסק שניהל את התפעול השוטף שלו דרך כמה גיליונות אקסל נפרדים, ללא תמונת מצב אחת וללא היסטוריה מסודרת.",
      solution:
        "מערכת פנימית קלה שמחליפה את הגיליונות בתהליך עבודה מובנה אחד, בהתאמה מלאה לאופן שבו הצוות כבר עובד.",
      capabilities: ["ניהול תהליך עבודה", "מעקב סטטוסים", "דוחות בסיסיים"],
      stack: ["React", "TypeScript", "Supabase"],
    },
  ],
};

export const statusLabel: Localized<Record<Project["status"], string>> = {
  en: { active: "Active", "in-development": "In development", academic: "Academic" },
  he: { active: "פעיל", "in-development": "בפיתוח", academic: "אקדמי" },
};
