import type { Localized } from "../types/index.ts";

/**
 * Free-text copy for every section that isn't a repeating list
 * (services / projects / process live in their own files next to this one).
 * Each field is a { en, he } pair — edit the language you need.
 */

export const hero = {
  en: {
    eyebrow: "Management Systems • Web Apps • Websites • Mobile Apps",
    headline: "From spreadsheets to a system that works for your business.",
    sub: "I help businesses turn manual processes, Excel files and work scattered across WhatsApp, email and paper into one simple, clear digital system — built around the way they actually work.",
    ctaPrimary: "Let's talk",
    ctaSecondary: "How it works",
  },
  he: {
    eyebrow: "מערכות ניהול • Web Apps • אתרים • אפליקציות",
    headline: "מהאקסל למערכת שעובדת בשביל העסק שלך.",
    sub: "אני עוזר לעסקים להפוך תהליכים ידניים, קבצי Excel ועבודה מפוזרת בין WhatsApp, מייל ונייר — למערכת דיגיטלית אחת, פשוטה וברורה, שמותאמת בול לצורת העבודה שלהם.",
    ctaPrimary: "בואו נדבר",
    ctaSecondary: "איך זה עובד",
  },
} satisfies Localized<Record<string, string>>;

export const painPoint = {
  en: {
    eyebrow: "Sound familiar?",
    headline: "The business grew. The spreadsheet didn't.",
    points: [
      "The same information lives in several files at once",
      "Tasks fall between WhatsApp and email",
      "It's hard to know the status of a client or an order",
      "The same data gets typed in manually, again and again",
      "There's no single, clear picture of the business",
      "Whole processes depend on one person's memory",
    ],
    transition: "This is exactly where one small, precise system can make a big difference.",
  },
  he: {
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
  },
} satisfies Localized<{
  eyebrow: string;
  headline: string;
  points: string[];
  transition: string;
}>;

export const howIWork = {
  en: {
    eyebrow: "How I Work",
    headline: "Four stages, always in this order.",
    highlight: "The process comes before the technology.",
  },
  he: {
    eyebrow: "איך זה עובד",
    headline: "ארבעה שלבים, תמיד באותו סדר.",
    highlight: "התהליך קודם לטכנולוגיה.",
  },
} satisfies Localized<Record<string, string>>;

export const about = {
  en: {
    eyebrow: "About",
    headline: "Before I was a developer, I managed people, processes and complex operational environments.",
    paragraphs: [
      "That experience directly shapes the way I build systems today. To me, developing a system doesn't start with code — it starts with understanding the business, the people who work in it and the processes that happen in practice. Only after we understand what's truly needed can we simplify the process and build a clear, efficient and practical system.",
      "I hold a bachelor's degree in Information Systems and have roughly ten years of experience in command, management and leading processes as an IDF officer, including reserve service, at the rank of Major. The combination of technological thinking, operational understanding and management experience is the foundation of my approach to every project — understand the problem first, then decide how best to solve it.",
    ],
    facts: [
      { label: "What I build", value: "Custom business systems" },
      { label: "How I work", value: "Understand the process before writing code" },
      { label: "Who I build for", value: "The business and the people who work in it" },
      { label: "The result", value: "Less manual work. More order and control." },
    ],
  },
  he: {
    eyebrow: "עליי",
    headline: "לפני שהייתי מפתח, ניהלתי אנשים, תהליכים וסביבות מבצעיות מורכבות.",
    paragraphs: [
      `הניסיון הזה משפיע ישירות על הדרך שבה אני בונה מערכות היום. מבחינתי, פיתוח מערכת לא מתחיל בקוד — הוא מתחיל בהבנה של העסק, של האנשים שעובדים בו ושל התהליכים שמתרחשים בו בפועל. רק אחרי שמבינים מה באמת נדרש, אפשר לפשט את התהליך ולבנות מערכת ברורה, יעילה ושימושית.`,

      `אני בעל תואר ראשון במערכות מידע, עם כעשר שנות ניסיון בפיקוד, ניהול והובלת תהליכים כקצין בצה"ל ובמילואים, בדרגת רב־סרן. השילוב בין חשיבה טכנולוגית, הבנה תפעולית וניסיון ניהולי הוא הבסיס לגישה שלי לכל פרויקט — להבין קודם את הבעיה, ורק אחר כך לבחור איך נכון לפתור אותה.`,
    ],
    facts: [
      { label: "מה אני בונה", value: "מערכות עסקיות בהתאמה אישית" },
      { label: "איך אני עובד", value: "מבינים את התהליך לפני שכותבים קוד" },
      { label: "למי אני בונה", value: "לא רק לעסק — גם לאנשים שעובדים בו" },
      { label: "מה יוצא מזה", value: "פחות עבודה ידנית. יותר סדר ושליטה." },
    ],
  },
} satisfies Localized<{
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
}>;

export const why = {
  en: { eyebrow: "Why work with me", headline: "Four things that guide every project." },
  he: { eyebrow: "למה לעבוד איתי", headline: "ארבעה דברים שמנחים כל פרויקט." },
} satisfies Localized<Record<string, string>>;

export const contactSection = {
  en: {
    headline: "Got a process in the business that feels clunky? Let's talk.",
    sub: "Even if it's not yet clear which system you need, we can start with a short conversation and see if there's a simpler way to work.",
    whatsappLabel: "Message on WhatsApp",
    emailLabel: "Send an email",
  },
  he: {
    headline: "יש תהליך בעסק שמרגיש מסורבל? בואו נדבר.",
    sub: "גם אם עדיין לא ברור איזו מערכת צריך, אפשר להתחיל משיחה קצרה ולהבין אם יש דרך פשוטה יותר לעבוד.",
    whatsappLabel: "לשלוח הודעת WhatsApp",
    emailLabel: "לשלוח מייל",
  },
} satisfies Localized<Record<string, string>>;

export const footer = {
  en: { linkedinLabel: "LinkedIn", githubLabel: "GitHub", emailLabel: "Email" },
  he: { linkedinLabel: "LinkedIn", githubLabel: "GitHub", emailLabel: "אימייל" },
} satisfies Localized<Record<string, string>>;

export const langToggle = {
  en: { label: "עב", aria: "Switch to Hebrew" },
  he: { label: "EN", aria: "החלף לאנגלית" },
} satisfies Localized<{ label: string; aria: string }>;
