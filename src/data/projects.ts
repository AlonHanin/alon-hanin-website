import type { Project } from "../types";

/**
 * Add a new project by pushing another object into this array —
 * the Projects section renders whatever is here, in order.
 */
export const projects: Project[] = [
  {
    id: "wineops",
    name: "WineOps",
    category: "מערכת SaaS לניהול יקבים",
    status: "בפיתוח",
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
    status: "אקדמי",
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
    status: "פעיל",
    problem:
      "עסק שניהל את התפעול השוטף שלו דרך כמה גיליונות אקסל נפרדים, ללא תמונת מצב אחת וללא היסטוריה מסודרת.",
    solution:
      "מערכת פנימית קלה שמחליפה את הגיליונות בתהליך עבודה מובנה אחד, בהתאמה מלאה לאופן שבו הצוות כבר עובד.",
    capabilities: ["ניהול תהליך עבודה", "מעקב סטטוסים", "דוחות בסיסיים"],
    stack: ["React", "TypeScript", "Supabase"],
  },
];
