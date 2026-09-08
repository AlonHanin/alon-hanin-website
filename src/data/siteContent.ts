import type { NavItem } from "../types";

/**
 * Free-text copy for every section that isn't a repeating list
 * (services / projects / process live in their own files next to this one).
 * Edit the strings below to change what's on the page.
 */

export const nav: NavItem[] = [
  { id: "home", label: "בית" },
  { id: "services", label: "שירותים" },
  { id: "how-i-work", label: "איך זה עובד" },
  { id: "projects", label: "פרויקטים" },
  { id: "about", label: "עליי" },
  { id: "contact", label: "יצירת קשר" },
];

export const hero = {
  eyebrow: "מערכות ניהול • Web Apps • אתרים • אפליקציות",
  headline: "מהאקסל למערכת שעובדת בשביל העסק שלך.",
  sub: "אני עוזר לעסקים להפוך תהליכים ידניים, קבצי Excel ועבודה מפוזרת בין WhatsApp, מייל ונייר — למערכת דיגיטלית אחת, פשוטה וברורה, שמותאמת בול לצורת העבודה שלהם.",
  ctaPrimary: "בואו נדבר",
  ctaSecondary: "איך זה עובד",
};

export const painPoint = {
  eyebrow: "מוכר לכם?",
  headline: "העסק גדל. האקסל נשאר מאחור.",
  points: [
    "אותו מידע נמצא בכמה קבצים במקביל",
    "משימות נופלות בין WhatsApp למייל",
    "קשה לדעת מה הסטטוס של כל לקוח או הזמנה",
    "אותו מידע מוזן ידנית שוב ושוב",
    "אין תמונת מצב אחת וברורה של העסק",
    "תהליכים שלמים תלויים בזיכרון של איש אחד",
  ],
  transition: "בדיוק כאן מערכת קטנה ומדויקת יכולה לעשות הבדל גדול.",
};

export const howIWork = {
  eyebrow: "איך זה עובד",
  headline: "חמישה שלבים, תמיד באותו סדר.",
  highlight: "לא מתחילים מקוד. מתחילים מהתהליך העסקי.",
};

export const about = {
  eyebrow: "עליי",
  headline: "לפני שהייתי מפתח, ניהלתי אנשים, תהליכים וסביבות מבצעיות מורכבות.",
  paragraphs: [
    "החוויה הזו משפיעה על האופן שבו אני בונה מערכות היום. אני עוסק לא רק בקוד — אלא בהבנת התהליך העסקי האמיתי, בהגדרת מה שבאמת צריך להיבנות, בפישוט תהליכים וביצירת מערכות ברורות ושימושיות.",
    "ברקע שלי תואר ראשון במערכות מידע, וכעשר שנות ניסיון בפיקוד וניהול כקצין במילואים בדרגת רב-סרן. שילוב של רקע טכני ותפעולי הוא הבסיס לאיך שאני ניגש לכל פרויקט — קודם מבינים איך העסק עובד, ואז בונים.",
  ],
  facts: [
    { label: "השכלה", value: "B.Sc. מערכות מידע" },
    { label: "רקע", value: "קצין (רב-סרן) במילואים, כ-10 שנות ניהול" },
    { label: "גישה", value: "טכני + תפעולי — הבנת התהליך לפני הקוד" },
  ],
};

export const why = {
  eyebrow: "למה לעבוד איתי",
  headline: "ארבעה דברים שמנחים כל פרויקט.",
};

export const contactSection = {
  headline: "יש תהליך בעסק שמרגיש מסורבל? בואו נדבר.",
  sub: "גם אם עדיין לא ברור איזו מערכת צריך, אפשר להתחיל משיחה קצרה ולהבין אם יש דרך פשוטה יותר לעבוד.",
  whatsappLabel: "לשלוח הודעת WhatsApp",
  emailLabel: "לשלוח מייל",
};

export const footer = {
  linkedinLabel: "LinkedIn",
  githubLabel: "GitHub",
  emailLabel: "אימייל",
};
