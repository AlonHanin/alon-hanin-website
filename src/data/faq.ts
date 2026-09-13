import type { Localized } from "../types/index.ts";

export interface FaqItem {
  question: string;
  answer: string;
}

export const servicesFaq: Localized<FaqItem[]> = {
  en: [
    { question: "Can we start with one small process?", answer: "Yes. We can start with one focused workflow and expand the solution as needed." },
    { question: "What is business automation?", answer: "Business automation uses software, integrations and defined workflow logic to complete repeatable steps with less manual intervention." },
    { question: "Which business processes are worth automating first?", answer: "Start with frequent, repetitive processes that use structured data, follow clear rules and create meaningful time, error or service costs." },
    { question: "Can Nolanxt connect to an existing CRM or business system?", answer: "We first review the system's APIs, webhooks and data import or export options. When a reliable connection is available, it can become part of the wider workflow." },
    { question: "Do we need to replace our current software?", answer: "Usually not. Existing tools can remain when they fit the process; the solution can connect, improve or extend them instead of replacing them automatically." },
    { question: "Can a custom system be built around our existing process?", answer: "Yes. We map the current process first, then decide which parts should stay, be simplified, connected or built specifically for the business." },
    { question: "What is the difference between workflow automation and AI automation?", answer: "Workflow automation follows predefined rules. AI automation is useful when a step requires interpretation, classification, summarization or generation. Many processes need only the first." },
    { question: "How do you decide whether a business needs automation, integration or custom software?", answer: "We map the trigger, data, tools, rules, exceptions and desired outcome. Repeatable steps point to automation, disconnected tools to integration, and workflow gaps to custom software." },
    { question: "How are scope and timing defined?", answer: "Once the need is clear, we define the screens, workflows and integrations required. These inform the work plan and proposal." },
  ],
  he: [
    { question: "אפשר להתחיל מתהליך קטן?", answer: "כן. אפשר להתחיל בתהליך עבודה אחד וממוקד, ולהרחיב את הפתרון בהמשך לפי הצורך." },
    { question: "מהי אוטומציה עסקית?", answer: "אוטומציה עסקית משתמשת בתוכנה, בחיבורים ובלוגיקה מוגדרת כדי לבצע שלבים שחוזרים על עצמם עם פחות עבודה ידנית." },
    { question: "אילו תהליכים עסקיים כדאי להפוך לאוטומטיים קודם?", answer: "כדאי להתחיל בתהליכים תכופים וחזרתיים שמבוססים על נתונים מסודרים וכללים ברורים, ושיש להם השפעה ממשית על זמן, טעויות או השירות." },
    { question: "האם Nolanxt יכולה להתחבר ל־CRM או למערכת עסקית קיימת?", answer: "תחילה בודקים אילו APIs, חיבורי Webhook ואפשרויות ייבוא או ייצוא המערכת מציעה. כשקיים חיבור אמין, אפשר לשלב אותה בתהליך העבודה הרחב יותר." },
    { question: "האם צריך להחליף את התוכנות הקיימות שלנו?", answer: "בדרך כלל לא. כלים שמתאימים לתהליך יכולים להישאר, והפתרון יכול לחבר, לשפר או להרחיב אותם במקום להחליף אותם אוטומטית." },
    { question: "האם אפשר לבנות מערכת מותאמת סביב התהליך הקיים שלנו?", answer: "כן. קודם ממפים את התהליך הקיים, ואז מחליטים אילו חלקים להשאיר, לפשט, לחבר או לבנות במיוחד עבור העסק." },
    { question: "מה ההבדל בין אוטומציית תהליכים לאוטומציה מבוססת AI?", answer: "אוטומציית תהליכים פועלת לפי כללים שהוגדרו מראש. אוטומציית AI מתאימה לשלב שדורש פרשנות, סיווג, סיכום או יצירה. תהליכים רבים זקוקים רק לאפשרות הראשונה." },
    { question: "איך מחליטים אם העסק צריך אוטומציה, אינטגרציה או תוכנה מותאמת?", answer: "ממפים את נקודת ההתחלה, הנתונים, הכלים, הכללים, החריגים והתוצאה הרצויה. שלבים חזרתיים מצביעים על אוטומציה, כלים מנותקים על אינטגרציה ופערים בתהליך על תוכנה מותאמת." },
    { question: "איך נקבעים ההיקף ולוח הזמנים?", answer: "אחרי שמבינים את הצורך, מגדירים את המסכים, התהליכים והחיבורים הדרושים. אלה הבסיס לתכנון העבודה ולהצעה." },
  ],
};
