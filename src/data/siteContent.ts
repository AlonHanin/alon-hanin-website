import type { Localized, NavItem } from "../types";

/**
 * Free-text copy for every section that isn't a repeating list
 * (services / projects / process live in their own files next to this one).
 * Each field is a { en, he } pair — edit the language you need.
 */

export const nav: Localized<NavItem[]> = {
  en: [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "how-i-work", label: "How I Work" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  he: [
    { id: "home", label: "בית" },
    { id: "services", label: "שירותים" },
    { id: "how-i-work", label: "איך זה עובד" },
    { id: "projects", label: "פרויקטים" },
    { id: "about", label: "עליי" },
    { id: "contact", label: "יצירת קשר" },
  ],
};

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
    headline: "Five stages, always in this order.",
    highlight: "We don't start with code. We start with the business process.",
  },
  he: {
    eyebrow: "איך זה עובד",
    headline: "חמישה שלבים, תמיד באותו סדר.",
    highlight: "לא מתחילים מקוד. מתחילים מהתהליך העסקי.",
  },
} satisfies Localized<Record<string, string>>;

export const about = {
  en: {
    eyebrow: "About",
    headline: "Before I was a developer, I managed people, processes and complex operational environments.",
    paragraphs: [
      "That experience shapes how I build systems today. I'm not only concerned with the code — I care about understanding the real business process, defining what actually needs to be built, simplifying workflows, and creating systems that are clear and usable.",
      "My background includes a B.Sc. in Information Systems and roughly ten years of leadership and command experience as a reserve officer at the rank of Major. That combination of technical and operational background is the foundation of how I approach every project — understand how the business works first, then build.",
    ],
    facts: [
      { label: "Education", value: "B.Sc. Information Systems" },
      { label: "Background", value: "Reserve Officer (Major), ~10 years of leadership" },
      { label: "Approach", value: "Technical + operational — process before code" },
    ],
  },
  he: {
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
