import type { Localized, ProcessStep } from "../types";

export const processSteps: Localized<ProcessStep[]> = {
  en: [
    { step: 1, title: "Understand the business", description: "First we understand how the business actually works today — in practice, not in theory." },
    { step: 2, title: "Identify the problem", description: "We locate bottlenecks, repetitive work, manual processes and blind spots." },
    { step: 3, title: "Define the solution", description: "We define requirements, users, workflow, data, and the scope of an MVP." },
    { step: 4, title: "Build", description: "We build in increments you can see and test, with feedback along the way." },
    { step: 5, title: "Launch", description: "We deploy, test, train the team, and keep improving as needed." },
  ],
  he: [
    { step: 1, title: "להבין את העסק", description: "קודם כול מבינים איך העסק עובד היום — בפועל, לא בתיאוריה." },
    { step: 2, title: "לזהות את הבעיה", description: "מאתרים צווארי בקבוק, עבודה חוזרת, תהליכים ידניים ונקודות עיוורון." },
    { step: 3, title: "לאפיין פתרון", description: "מגדירים דרישות, משתמשים, תהליך עבודה, נתונים והיקף MVP." },
    { step: 4, title: "לבנות", description: "בונים בשלבים שאפשר לראות ולבדוק, עם משוב שוטף בדרך." },
    { step: 5, title: "לעלות לאוויר", description: "מעלים לאוויר, בודקים, מכשירים את הצוות וממשיכים לשפר." },
  ],
};
