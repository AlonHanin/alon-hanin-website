import type { Localized, ProcessStep } from "../types/index.ts";

export const processSteps: Localized<ProcessStep[]> = {
  en: [
    { step: 1, title: "Understand the Process", description: "Map the current workflow, tools, data, people involved, and points where manual work or friction slows the process down." },
    { step: 2, title: "Define the System", description: "Decide what should be simplified, automated, connected or built, and define the required business logic." },
    { step: 3, title: "Build and Integrate", description: "Develop the solution and connect it to the relevant tools, APIs and data sources where needed." },
    { step: 4, title: "Test and Refine", description: "Validate the workflow with real use cases, handle edge cases and improve usability and reliability." },
  ],
  he: [
    { step: 1, title: "להבין את התהליך", description: "ממפים את תהליך העבודה הקיים, הכלים, הנתונים והאנשים המעורבים, ומזהים עבודה ידנית ונקודות חיכוך שמעכבות אותו." },
    { step: 2, title: "להגדיר את המערכת", description: "מחליטים מה צריך לפשט, להפוך לאוטומטי, לחבר או לבנות, ומגדירים את הלוגיקה העסקית הנדרשת." },
    { step: 3, title: "לבנות ולחבר", description: "מפתחים את הפתרון ומחברים אותו לכלים, ל־APIs ולמקורות הנתונים הרלוונטיים לפי הצורך." },
    { step: 4, title: "לבדוק ולשפר", description: "בודקים את התהליך עם מקרי שימוש אמיתיים, מטפלים במקרי קצה ומשפרים את השימושיות והאמינות." },
  ],
};
