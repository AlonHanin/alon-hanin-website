import type { Localized, Project } from "../types/index.ts";

export const projectImages: Localized<Record<string, Project["images"]>> = {
  he: {
    wineops: [{ src: "/projects/wineops.jpg", width: 461, height: 871, presentation: "device", alt: "מסך הפתיחה של WineOps במובייל, עם תחומי ניהול מלאי, מעקב מעבדה ועבודת צוות.", caption: "מסך פתיחה · מוצר בפיתוח" }],
    ap: [
      { src: "/projects/ap-1.png", width: 1160, height: 546, presentation: "browser", alt: "טבלת תקציב שנתי המשווה תכנון 2025 לשנת 2024, עם סעיפי ביטוח, מים, בנק וניהול.", caption: "תקציב שנתי · סעיפי הוצאות והשוואה בין שנים" },
      { src: "/projects/ap-2.png", width: 1157, height: 487, presentation: "browser", alt: "סיכום תקציב לפי קטגוריות לצד השוואת סכומים שנתית והצגת שינוי באחוזים.", caption: "סקירת תקציב · פילוח הוצאות והשוואה שנתית" },
    ],
    thinkgreen: [
      { src: "/projects/thinkgreen-1.png", width: 277, height: 540, presentation: "device", alt: "מסך הבית של ThinkGreen: יתרת נקודות, דיווח פעילות, מימוש נקודות ופעולות אחרונות.", caption: "מסך הבית · נקודות, פעולות מהירות ופעילות אחרונה" },
      { src: "/projects/thinkgreen-2.png", width: 274, height: 535, presentation: "device", alt: "ממשק מנהל ב־ThinkGreen עם יצירת אתגר, נתוני המערכת ובדיקת דיווחים.", caption: "ממשק ניהול · אתגרים, נתונים ובדיקת דיווחים" },
      { src: "/projects/thinkgreen-3.png", width: 274, height: 540, presentation: "device", alt: "אתגרים שבועיים לשימוש חוזר, תחבורה ציבורית ומיחזור, עם מעקב התקדמות ונקודות.", caption: "אתגרים שבועיים · פעולות סביבתיות ומעקב התקדמות" },
      { src: "/projects/thinkgreen-4.png", width: 276, height: 540, presentation: "device", alt: "קטלוג תגמולים עם עלות בנקודות לכל הטבה וסימון תגמולים שעדיין נעולים.", caption: "תגמולים · בחירת הטבות לפי יתרת הנקודות" },
    ],
    bi: [
      { src: "/projects/bi-1.png", width: 1208, height: 555, presentation: "browser", alt: "מודל נתונים המקשר בין טבלאות משחקים, תאריכים, ביקורות ומשתמשים לצורך ניתוח משותף.", caption: "מודל הנתונים · הקשרים בין משחקים, ביקורות, משתמשים ותאריכים" },
      { src: "/projects/bi-2.png", width: 843, height: 419, presentation: "browser", alt: "דשבורד עם דירוג עשרת המשחקים המובילים במדד הצלחה והשוואות לפי מחיר, פלטפורמות, זמן משחק ודירוגי משתמשים.", caption: "דשבורד ניתוח · השוואת מדד הצלחה לפי מחיר, פלטפורמות, זמן משחק וביקורות" },
    ],
    cat4u: [{ src: "/projects/cat4u.jpg", width: 1530, height: 792, presentation: "browser", alt: "עמוד הבית של Cat4U עם מידע וקישורים לאימוץ חתולים, אירועים והתנדבות.", caption: "עמוד הבית · אתר לאימוץ חתולים" }],
  },
  en: {
    wineops: [{ src: "/projects/wineops.jpg", width: 461, height: 871, presentation: "device", alt: "WineOps mobile welcome screen showing inventory, lab tracking and team management areas.", caption: "Welcome screen · product in development" }],
    ap: [
      { src: "/projects/ap-1.png", width: 1160, height: 546, presentation: "browser", alt: "Annual budget table comparing the 2025 plan with 2024, including insurance, utilities, banking and management expenses.", caption: "Annual budget · expense categories and year comparisons" },
      { src: "/projects/ap-2.png", width: 1157, height: 487, presentation: "browser", alt: "Budget summary by category beside an annual comparison of amounts and percentage changes.", caption: "Budget overview · expense breakdown and annual comparison" },
    ],
    thinkgreen: [
      { src: "/projects/thinkgreen-1.png", width: 277, height: 540, presentation: "device", alt: "ThinkGreen home screen with a points balance, activity reporting, reward redemption and recent activity.", caption: "Home · points, quick actions and recent activity" },
      { src: "/projects/thinkgreen-2.png", width: 274, height: 535, presentation: "device", alt: "ThinkGreen administration screen with challenge creation, system statistics and report review.", caption: "Administration · challenges, statistics and report review" },
      { src: "/projects/thinkgreen-3.png", width: 274, height: 540, presentation: "device", alt: "Weekly reusable bottle, public transport and recycling challenges with progress and points.", caption: "Weekly challenges · environmental actions and progress tracking" },
      { src: "/projects/thinkgreen-4.png", width: 276, height: 540, presentation: "device", alt: "Rewards catalog showing each reward's point cost and which rewards are still locked.", caption: "Rewards · benefits available for the points balance" },
    ],
    bi: [
      { src: "/projects/bi-1.png", width: 1208, height: 555, presentation: "browser", alt: "Data model relating games, dates, reviews and users for combined analysis.", caption: "Data model · relationships between games, reviews, users and dates" },
      { src: "/projects/bi-2.png", width: 843, height: 419, presentation: "browser", alt: "Dashboard ranking ten games by a success score and comparing price, platforms, playtime and user ratings.", caption: "Analytics dashboard · success scores by price, platforms, playtime and reviews" },
    ],
    cat4u: [{ src: "/projects/cat4u.jpg", width: 1530, height: 792, presentation: "browser", alt: "Cat4U homepage with information and links for cat adoption, events and volunteering.", caption: "Homepage · cat adoption website" }],
  },
};
