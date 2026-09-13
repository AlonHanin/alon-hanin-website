import type { InsightArticle, Localized } from "../types/index.ts";

const publishedAt = "2026-09-13";

export const insights: Localized<InsightArticle[]> = {
  en: [
    {
      slug: "custom-business-system-vs-ready-made-software",
      title: "Custom Business System vs Ready-Made Software: Which One Do You Need?",
      summary: "Compare custom business systems and ready-made software based on workflow fit, integrations, cost, ownership, flexibility and long-term operational needs.",
      published: true,
      publishedAt,
      author: "Nolanxt",
      metaTitle: "Custom Business System vs Ready Made Software | Nolanxt",
      metaDescription: "Compare custom business systems and ready made software based on workflow fit, integrations, cost, ownership, flexibility and long term operational needs.",
      sections: [
        {
          heading: "The decision is about fit, not preference",
          paragraphs: [
            "Ready made software solves common problems with a standard product. A custom business system is designed around a specific workflow, data model or combination of systems. Neither option is automatically better.",
            "The right decision depends on how closely the business process matches what existing products are designed to do.",
          ],
        },
        {
          heading: "When ready made software is usually better",
          paragraphs: [
            "If the requirement is common and the available product already supports the necessary workflow, ready made software can reduce implementation time and maintenance responsibility. Mature products may also include security, support, reporting and integrations that would be expensive to build independently.",
            "Businesses should not create custom software simply to reproduce a standard capability that already works well.",
          ],
        },
        {
          heading: "When a custom system becomes useful",
          paragraphs: [
            "A custom system becomes more attractive when the process is unique, multiple systems must be coordinated, employees rely on workarounds or standard tools require constant manual steps. It can also be useful when the business needs a specific interface, permission model or operational logic that existing products cannot provide cleanly.",
            "The value is strongest when the custom system reflects a process that creates real business differentiation or operational efficiency.",
          ],
        },
        {
          heading: "Consider total ownership cost",
          paragraphs: [
            "A subscription price is only one part of software cost. Ready made tools may require several subscriptions, manual work or expensive customization. Custom systems require development, hosting, maintenance and future updates.",
            "The comparison should include implementation effort, ongoing administration, integration costs, user training and the cost of inefficient work that remains after the solution is deployed.",
          ],
        },
        {
          heading: "Use a structured decision process",
          paragraphs: [
            "Define the process first, then evaluate existing products against the actual requirements. Identify which needs are essential, which are preferences and which can be changed. If a standard product meets the core requirements without major workarounds, it may be the better choice.",
            "If the business still needs significant manual bridges between tools or cannot represent its core workflow, a custom business system may provide a better long term fit.",
          ],
        },
        {
          heading: "Frequently asked questions",
          paragraphs: [
            "When should a company build a custom business system? When the core workflow is specific, standard software creates persistent workarounds or several systems must be coordinated through custom logic.",
            "Is custom software always more expensive? Not always, but it requires development and maintenance. The correct comparison is total ownership cost rather than initial price alone.",
            "Can a custom system use existing software? Yes. Custom systems often sit between existing products and provide a tailored interface or workflow across them.",
          ],
        },
      ],
      relatedArticleSlugs: ["identify-repetitive-business-processes-to-automate", "what-is-business-process-automation"],
      relatedServiceIds: ["business-systems", "web-apps"],
      relatedProjectIds: ["ap"],
      cta: { label: "Let's talk", href: "/contact/" },
    },
    {
      slug: "identify-repetitive-business-processes-to-automate",
      title: "How to Identify Repetitive Business Processes Worth Automating",
      summary: "Use a practical scoring model to identify repetitive business tasks that are worth automating based on frequency, time, errors, rules, data and business impact.",
      published: true,
      publishedAt,
      author: "Nolanxt",
      metaTitle: "How to Identify Repetitive Business Tasks to Automate | Nolanxt",
      metaDescription: "Use a practical scoring model to identify repetitive business tasks that are worth automating based on frequency, time, errors, rules, data and business impact.",
      sections: [
        {
          heading: "Automation opportunities are usually visible in daily work",
          paragraphs: [
            "Employees often know which tasks are repetitive before management does. They copy data, reconcile spreadsheets, forward information, rename files, update the same fields in several systems and send the same reminders every day.",
            "The first step is to document these tasks rather than immediately selecting automation software.",
          ],
        },
        {
          heading: "Score frequency and time",
          paragraphs: [
            "A task that takes two minutes may still be expensive if it happens hundreds of times each month. Record how often the task occurs and how much active employee time it requires. Include time spent checking whether the task was completed and correcting mistakes.",
            "This creates a realistic baseline for evaluating automation value.",
          ],
        },
        {
          heading: "Score rules and data quality",
          paragraphs: [
            "Automation works best when inputs are available and the decision rules can be described. If employees rely on hidden knowledge or inconsistent data, the process may need cleanup before automation.",
            "Ask whether the same input normally produces the same action. If the answer is yes, the task is a strong candidate for deterministic automation. If interpretation is required, AI may support part of the workflow.",
          ],
        },
        {
          heading: "Score error and business impact",
          paragraphs: [
            "Some tasks consume little time but create significant risk when performed incorrectly. Missing a lead assignment, sending an invoice with incorrect data or failing to update a customer status can have greater impact than the labor cost alone.",
            "The prioritization model should therefore include both time and consequence.",
          ],
        },
        {
          heading: "Build a ranked automation backlog",
          paragraphs: [
            "Create a list of candidate processes and score each one for frequency, time, rule clarity, data availability, error rate and business impact. Start with a process that has strong value and manageable complexity.",
            "This approach prevents teams from choosing projects based on visibility or novelty. It creates an automation roadmap grounded in operational evidence.",
          ],
        },
        {
          heading: "Frequently asked questions",
          paragraphs: [
            "Which repetitive tasks are best for automation? Tasks that occur frequently, use structured data, follow clear rules and create measurable time or error costs are strong candidates.",
            "Should every repetitive task be automated? No. Low volume tasks, unstable processes and tasks that require significant judgment may not justify automation.",
            "How do you prioritize automation opportunities? Use a scoring model that combines frequency, time, rules, data quality, error risk and business impact.",
          ],
        },
      ],
      relatedArticleSlugs: ["what-is-business-process-automation", "custom-business-system-vs-ready-made-software"],
      relatedServiceIds: ["business-systems"],
      relatedProjectIds: [],
      cta: { label: "Let's talk", href: "/contact/" },
    },
    {
      slug: "what-is-business-process-automation",
      title: "What Is Business Process Automation? A Practical Guide for Growing Companies",
      summary: "Learn what business process automation means, which workflows can be automated and how growing companies can start without replacing their existing systems.",
      published: true,
      publishedAt,
      author: "Nolanxt",
      metaTitle: "What Is Business Process Automation? Practical Guide | Nolanxt",
      metaDescription: "Learn what business process automation means, which workflows can be automated and how growing companies can start without replacing their existing systems.",
      sections: [
        {
          heading: "Business process automation defined",
          paragraphs: [
            "Business process automation is the use of software, integrations and workflow logic to execute repeatable business tasks with less manual intervention. It can move information, trigger actions, update systems, assign responsibility and notify people according to predefined rules.",
            "The purpose is not to remove people from every process. It is to remove avoidable manual work from processes where software can perform predictable actions faster and more consistently.",
          ],
        },
        {
          heading: "What can be automated",
          paragraphs: [
            "Common examples include lead capture, CRM updates, document creation, approval routing, invoice notifications, recurring reporting, customer onboarding, support classification, task creation and data synchronization between systems.",
            "A useful way to identify candidates is to look for work that employees describe as copying, checking, forwarding, updating, reminding or moving information. These verbs often point to process steps that can be automated.",
          ],
        },
        {
          heading: "How automation works across existing systems",
          paragraphs: [
            "Modern business automation usually connects tools rather than replacing them. A website form may trigger an integration that creates a contact in a CRM, assigns the lead, sends a message and creates a follow up task. An accounting event may update a dashboard and notify the correct team.",
            "APIs and webhooks are common building blocks. They allow systems to exchange data and events so that one action can start the next part of a workflow.",
          ],
        },
        {
          heading: "Where AI fits into business process automation",
          paragraphs: [
            "Traditional automation works best when the rules are explicit. AI becomes useful when a step requires interpretation, classification, summarization or generation. For example, AI may classify an incoming request before a standard workflow routes it to the correct team.",
            "The strongest architecture often combines deterministic automation with AI only where AI adds value. Critical decisions, permissions and high impact actions should remain controlled and observable.",
          ],
        },
        {
          heading: "How to start",
          paragraphs: [
            "Document one process from beginning to end. Define the trigger, required data, systems involved, decisions, exceptions and final outcome. Then establish a baseline such as time spent, response time, error rate or number of manual steps.",
            "A well scoped first project provides evidence. Once the business understands the operational value and maintenance requirements, it can expand automation to additional workflows with less risk.",
          ],
        },
        {
          heading: "Frequently asked questions",
          paragraphs: [
            "What is business process automation in simple terms? It is the use of software and integrations to complete repeatable business steps automatically according to defined rules.",
            "Which business processes are easiest to automate? Processes with frequent repetition, structured data and clear rules are usually the easiest and safest starting point.",
            "Can business process automation work with existing software? Yes. Many automation projects are designed around the current CRM, website, messaging tools, databases and operational systems.",
          ],
        },
      ],
      relatedArticleSlugs: ["identify-repetitive-business-processes-to-automate", "custom-business-system-vs-ready-made-software"],
      relatedServiceIds: ["business-systems", "web-apps"],
      relatedProjectIds: [],
      cta: { label: "Let's talk", href: "/contact/" },
    },
  ],
  he: [
    {
      slug: "custom-business-system-vs-ready-made-software",
      title: "מערכת עסקית מותאמת או תוכנת מדף: מה מתאים לכם?",
      summary: "השוואה מעשית בין מערכת עסקית מותאמת לתוכנת מדף לפי התאמה לתהליך, אינטגרציות, עלות, בעלות, גמישות והצרכים התפעוליים לטווח ארוך.",
      published: true,
      publishedAt,
      author: "Nolanxt",
      metaTitle: "מערכת עסקית מותאמת או תוכנת מדף | Nolanxt",
      metaDescription: "השוו בין מערכת עסקית מותאמת לתוכנת מדף לפי התאמה לתהליך, אינטגרציות, עלות, בעלות, גמישות והצרכים התפעוליים לטווח ארוך.",
      sections: [
        { heading: "ההחלטה היא על התאמה, לא על העדפה", paragraphs: ["תוכנת מדף פותרת בעיות נפוצות באמצעות מוצר סטנדרטי. מערכת עסקית מותאמת מתוכננת סביב תהליך עבודה, מודל נתונים או שילוב מערכות מסוים. אף אפשרות אינה טובה יותר באופן אוטומטי.", "ההחלטה הנכונה תלויה במידת ההתאמה בין התהליך העסקי לבין מה שהמוצרים הקיימים נועדו לבצע."] },
        { heading: "מתי תוכנת מדף היא בדרך כלל הבחירה הנכונה", paragraphs: ["אם הצורך נפוץ והמוצר הקיים כבר תומך בתהליך הדרוש, תוכנת מדף יכולה לצמצם את זמן ההטמעה ואת האחריות לתחזוקה. מוצרים ותיקים עשויים לכלול גם אבטחה, תמיכה, דוחות ואינטגרציות שעלות פיתוחם העצמאי גבוהה.", "אין סיבה לבנות תוכנה מותאמת רק כדי לשחזר יכולת סטנדרטית שכבר עובדת היטב."] },
        { heading: "מתי מערכת מותאמת הופכת לשימושית", paragraphs: ["מערכת מותאמת נעשית מתאימה יותר כאשר התהליך ייחודי, יש צורך לתאם בין כמה מערכות, העובדים נשענים על פתרונות עוקפים או שכלים סטנדרטיים דורשים שלבים ידניים קבועים. היא יכולה להתאים גם כשנדרשים ממשק, מודל הרשאות או לוגיקה תפעולית שמוצרים קיימים אינם מספקים בצורה נקייה.", "הערך משמעותי במיוחד כשהמערכת משקפת תהליך שיוצר בידול עסקי אמיתי או יעילות תפעולית."] },
        { heading: "בחנו את עלות הבעלות הכוללת", paragraphs: ["מחיר המנוי הוא רק חלק מעלות התוכנה. כלי מדף עשויים לדרוש כמה מנויים, עבודה ידנית או התאמות יקרות. מערכת מותאמת דורשת פיתוח, אחסון, תחזוקה ועדכונים עתידיים.", "ההשוואה צריכה לכלול את מאמץ ההטמעה, הניהול השוטף, עלויות החיבור, הדרכת המשתמשים ועלות העבודה הלא יעילה שנשארת לאחר הטמעת הפתרון."] },
        { heading: "השתמשו בתהליך החלטה מובנה", paragraphs: ["הגדירו קודם את התהליך, ואז בחנו מוצרים קיימים מול הדרישות בפועל. זהו אילו צרכים חיוניים, אילו הם העדפות ואילו ניתנים לשינוי. אם מוצר סטנדרטי עונה על דרישות הליבה ללא פתרונות עוקפים משמעותיים, הוא עשוי להיות הבחירה הטובה יותר.", "אם העסק עדיין זקוק לגשרים ידניים משמעותיים בין כלים, או שאינו יכול לייצג את תהליך הליבה שלו, מערכת עסקית מותאמת עשויה להתאים טוב יותר לטווח הארוך."] },
        { heading: "שאלות נפוצות", paragraphs: ["מתי כדאי לחברה לבנות מערכת עסקית מותאמת? כאשר תהליך הליבה ייחודי, תוכנה סטנדרטית יוצרת פתרונות עוקפים קבועים או שיש צורך לתאם כמה מערכות באמצעות לוגיקה מותאמת.", "האם תוכנה מותאמת תמיד יקרה יותר? לא תמיד, אך היא דורשת פיתוח ותחזוקה. ההשוואה הנכונה היא של עלות הבעלות הכוללת ולא רק של המחיר הראשוני.", "האם מערכת מותאמת יכולה להשתמש בתוכנות קיימות? כן. מערכות מותאמות פועלות לעיתים בין מוצרים קיימים ומספקות ממשק או תהליך עבודה מותאם שחוצה אותם."] },
      ],
      relatedArticleSlugs: ["identify-repetitive-business-processes-to-automate", "what-is-business-process-automation"],
      relatedServiceIds: ["business-systems", "web-apps"],
      relatedProjectIds: ["ap"],
      cta: { label: "בואו נדבר", href: "/contact/" },
    },
    {
      slug: "identify-repetitive-business-processes-to-automate",
      title: "איך לזהות תהליכים עסקיים חזרתיים שכדאי להפוך לאוטומטיים",
      summary: "מודל דירוג מעשי לזיהוי משימות עסקיות חזרתיות שכדאי להפוך לאוטומטיות לפי תדירות, זמן, טעויות, כללים, נתונים והשפעה עסקית.",
      published: true,
      publishedAt,
      author: "Nolanxt",
      metaTitle: "איך לזהות משימות עסקיות חזרתיות לאוטומציה | Nolanxt",
      metaDescription: "מודל מעשי לזיהוי משימות עסקיות חזרתיות שכדאי להפוך לאוטומטיות לפי תדירות, זמן, טעויות, כללים, נתונים והשפעה עסקית.",
      sections: [
        { heading: "הזדמנויות לאוטומציה נראות בדרך כלל בעבודה היומיומית", paragraphs: ["העובדים יודעים לעיתים אילו משימות חזרתיות עוד לפני ההנהלה. הם מעתיקים נתונים, משווים גיליונות, מעבירים מידע, משנים שמות לקבצים, מעדכנים את אותם שדות בכמה מערכות ושולחים את אותן התזכורות מדי יום.", "השלב הראשון הוא לתעד את המשימות האלה, במקום לבחור מיד תוכנת אוטומציה."] },
        { heading: "דרגו תדירות וזמן", paragraphs: ["משימה שנמשכת שתי דקות עדיין יכולה להיות יקרה אם היא מתבצעת מאות פעמים בחודש. תעדו את התדירות ואת זמן העבודה הפעיל שהיא דורשת. כללו גם את הזמן שמושקע בבדיקה שהמשימה הושלמה ובתיקון טעויות.", "כך מתקבל קו בסיס מציאותי לבחינת הערך של האוטומציה."] },
        { heading: "דרגו את בהירות הכללים ואת איכות הנתונים", paragraphs: ["אוטומציה עובדת בצורה הטובה ביותר כשהקלט זמין ואפשר לתאר את כללי ההחלטה. אם העובדים מסתמכים על ידע סמוי או על נתונים לא עקביים, ייתכן שצריך לסדר את התהליך לפני שמבצעים אוטומציה.", "שאלו אם אותו קלט מוביל בדרך כלל לאותה פעולה. אם כן, המשימה היא מועמדת טובה לאוטומציה דטרמיניסטית. אם נדרשת פרשנות, AI עשוי לסייע בחלק מהתהליך."] },
        { heading: "דרגו טעויות והשפעה עסקית", paragraphs: ["יש משימות שדורשות מעט זמן אך יוצרות סיכון משמעותי כשהן מבוצעות לא נכון. פספוס שיוך של ליד, שליחת חשבונית עם נתונים שגויים או אי־עדכון סטטוס לקוח עלולים להשפיע יותר מעלות העבודה עצמה.", "לכן מודל התעדוף צריך לכלול גם זמן וגם את משמעות הטעות."] },
        { heading: "צרו רשימת אוטומציות מדורגת", paragraphs: ["צרו רשימה של תהליכים אפשריים ודרגו כל אחד לפי תדירות, זמן, בהירות הכללים, זמינות הנתונים, שיעור הטעויות וההשפעה העסקית. התחילו בתהליך שמציע ערך ברור ומורכבות שניתן לנהל.", "הגישה הזו מונעת בחירה בפרויקטים רק לפי נראות או חידוש, ויוצרת מפת דרכים לאוטומציה שמבוססת על ראיות תפעוליות."] },
        { heading: "שאלות נפוצות", paragraphs: ["אילו משימות חזרתיות מתאימות ביותר לאוטומציה? משימות שמתבצעות לעיתים קרובות, משתמשות בנתונים מסודרים, פועלות לפי כללים ברורים ויוצרות עלויות זמן או טעויות שניתן למדוד.", "האם כדאי להפוך כל משימה חזרתית לאוטומטית? לא. משימות בנפח נמוך, תהליכים לא יציבים ומשימות שדורשות שיקול דעת משמעותי עשויים שלא להצדיק אוטומציה.", "איך מתעדפים הזדמנויות לאוטומציה? משתמשים במודל שמשלב תדירות, זמן, כללים, איכות נתונים, סיכון לטעויות והשפעה עסקית."] },
      ],
      relatedArticleSlugs: ["what-is-business-process-automation", "custom-business-system-vs-ready-made-software"],
      relatedServiceIds: ["business-systems"],
      relatedProjectIds: [],
      cta: { label: "בואו נדבר", href: "/contact/" },
    },
    {
      slug: "what-is-business-process-automation",
      title: "מהי אוטומציה של תהליכים עסקיים? מדריך מעשי לעסקים בצמיחה",
      summary: "הסבר מעשי על אוטומציה של תהליכים עסקיים, אילו תהליכי עבודה ניתן להפוך לאוטומטיים ואיך להתחיל בלי להחליף את המערכות הקיימות.",
      published: true,
      publishedAt,
      author: "Nolanxt",
      metaTitle: "מהי אוטומציה של תהליכים עסקיים? מדריך מעשי | Nolanxt",
      metaDescription: "למדו מהי אוטומציה של תהליכים עסקיים, אילו תהליכים ניתן להפוך לאוטומטיים ואיך להתחיל בלי להחליף את המערכות הקיימות.",
      sections: [
        { heading: "הגדרה של אוטומציה לתהליכים עסקיים", paragraphs: ["אוטומציה של תהליכים עסקיים היא שימוש בתוכנה, באינטגרציות ובלוגיקת תהליך כדי לבצע משימות עסקיות חזרתיות עם פחות התערבות ידנית. היא יכולה להעביר מידע, להפעיל פעולות, לעדכן מערכות, להקצות אחריות ולהודיע לאנשים לפי כללים שהוגדרו מראש.", "המטרה אינה להוציא אנשים מכל תהליך. המטרה היא להסיר עבודה ידנית שניתן למנוע מתהליכים שבהם תוכנה יכולה לבצע פעולות צפויות במהירות ובעקביות רבה יותר."] },
        { heading: "מה אפשר להפוך לאוטומטי", paragraphs: ["דוגמאות נפוצות כוללות קליטת לידים, עדכון CRM, יצירת מסמכים, ניתוב אישורים, התראות חשבונית, דוחות חוזרים, קליטת לקוחות, סיווג פניות תמיכה, יצירת משימות וסנכרון נתונים בין מערכות.", "דרך שימושית לזהות מועמדים היא לחפש עבודה שהעובדים מתארים כהעתקה, בדיקה, העברה, עדכון, תזכורת או הזזת מידע. הפעלים האלה מצביעים לעיתים קרובות על שלבים שאפשר להפוך לאוטומטיים."] },
        { heading: "איך אוטומציה עובדת בין מערכות קיימות", paragraphs: ["אוטומציה עסקית מודרנית בדרך כלל מחברת כלים במקום להחליף אותם. טופס באתר יכול להפעיל חיבור שיוצר איש קשר ב־CRM, משייך את הליד, שולח הודעה ויוצר משימת מעקב. אירוע במערכת הנהלת חשבונות יכול לעדכן דשבורד ולהודיע לצוות המתאים.", "APIs ו־Webhooks הם אבני בניין נפוצות. הם מאפשרים למערכות להעביר נתונים ואירועים כך שפעולה אחת תתחיל את השלב הבא בתהליך."] },
        { heading: "איפה AI משתלב באוטומציה של תהליכים עסקיים", paragraphs: ["אוטומציה מסורתית מתאימה ביותר כשהכללים מפורשים. AI נעשה שימושי כששלב דורש פרשנות, סיווג, סיכום או יצירה. לדוגמה, AI יכול לסווג פנייה נכנסת לפני שתהליך רגיל מנתב אותה לצוות המתאים.", "ארכיטקטורה חזקה משלבת לעיתים אוטומציה דטרמיניסטית עם AI רק במקומות שבהם הוא מוסיף ערך. החלטות קריטיות, הרשאות ופעולות בעלות השפעה גבוהה צריכות להישאר מבוקרות וניתנות למעקב."] },
        { heading: "איך מתחילים", paragraphs: ["תעדו תהליך אחד מתחילתו ועד סופו. הגדירו את נקודת ההתחלה, הנתונים הדרושים, המערכות המעורבות, ההחלטות, החריגים והתוצאה הסופית. לאחר מכן הגדירו קו בסיס, כגון הזמן המושקע, זמן התגובה, שיעור הטעויות או מספר השלבים הידניים.", "פרויקט ראשון שמוגדר היטב מספק ראיות. לאחר שהעסק מבין את הערך התפעולי ואת דרישות התחזוקה, אפשר להרחיב את האוטומציה לתהליכים נוספים בסיכון נמוך יותר."] },
        { heading: "שאלות נפוצות", paragraphs: ["מהי אוטומציה של תהליכים עסקיים במילים פשוטות? שימוש בתוכנה ובאינטגרציות כדי לבצע אוטומטית שלבים עסקיים חזרתיים לפי כללים מוגדרים.", "אילו תהליכים עסקיים הם הקלים ביותר לאוטומציה? תהליכים שחוזרים בתדירות גבוהה, משתמשים בנתונים מסודרים ופועלים לפי כללים ברורים הם בדרך כלל נקודת הפתיחה הקלה והבטוחה ביותר.", "האם אוטומציה של תהליכים עסקיים יכולה לעבוד עם תוכנה קיימת? כן. פרויקטים רבים נבנים סביב ה־CRM, האתר, כלי ההודעות, מסדי הנתונים והמערכות התפעוליות שכבר קיימים."] },
      ],
      relatedArticleSlugs: ["identify-repetitive-business-processes-to-automate", "custom-business-system-vs-ready-made-software"],
      relatedServiceIds: ["business-systems", "web-apps"],
      relatedProjectIds: [],
      cta: { label: "בואו נדבר", href: "/contact/" },
    },
  ],
};

export const priorityInsightTopics = insights.en.map((article) => article.title);

export function publishedInsights(lang: keyof typeof insights) {
  return insights[lang].filter((article) => article.published);
}
