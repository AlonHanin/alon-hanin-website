import { services } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";

const copy = {
  he: {
    title: "פתרונות דיגיטליים שמתאימים לעסק שלכם.",
    sub: "מתחילים בצורך העסקי ובוחרים את הכלים שיתאימו לעבודה בפועל.",
    audiences: ["לעסקים שרוצים לרכז לקוחות, הזמנות ומשימות.", "לצוותים שצריכים כלי עבודה מותאם בדפדפן.", "לעסקים שרוצים להציג את עצמם ולקבל פניות.", "לתהליכים שצריכים לעבוד גם מהנייד ובשטח."],
    more: "מה כולל הפתרון?",
    process: "איך עובדים יחד?",
    steps: [
      ["מיפוי ואפיון", "מבינים את העבודה היום ומגדירים את הבעיה, המשתמשים והיקף הפתרון."],
      ["בנייה ומשוב", "מפתחים בשלבים, רואים התקדמות ומשפרים יחד לאורך הדרך."],
      ["עלייה לאוויר", "בודקים, מטמיעים ומסבירים לצוות איך להשתמש במערכת."],
    ],
    faq: "לפני שמתחילים",
    questions: [
      ["אפשר להתחיל מתהליך קטן?", "כן. אפשר להתחיל בתהליך אחד ממוקד ולהרחיב את הפתרון בהמשך לפי הצורך."],
      ["אפשר לחבר למערכות קיימות?", "בודקים אילו מערכות כבר קיימות בעסק ואילו אפשרויות חיבור או ייבוא נתונים הן מציעות. לפי זה מגדירים מה אפשר לשלב."],
      ["איך נקבעים ההיקף ולוח הזמנים?", "אחרי שמבינים את הצורך, מגדירים את המסכים, התהליכים והחיבורים הדרושים. אלה הבסיס לתכנון העבודה וההצעה."],
    ],
    contact: "נבדוק יחד מה מתאים לעסק שלכם",
    button: "בואו נדבר",
  },
  en: {
    title: "Digital solutions built around your business.",
    sub: "Start with the business need, then choose the right tools for the way you work.",
    audiences: ["For businesses bringing customers, orders and tasks together.", "For teams that need custom tools in the browser.", "For businesses building their presence and generating inquiries.", "For workflows that need to work on mobile and in the field."],
    more: "What's included?",
    process: "How we work together",
    steps: [
      ["Understand & define", "Map the current workflow, the problem, the users and the scope of the solution."],
      ["Build & refine", "Develop in stages, review progress and improve with feedback along the way."],
      ["Launch & adopt", "Test, deploy and help the team learn how to use the system."],
    ],
    faq: "Before we start",
    questions: [
      ["Can we start with one small process?", "Yes. We can start with one focused workflow and expand the solution as needed."],
      ["Can you connect existing systems?", "We review the systems you already use and their integration and data-import options to determine what can be connected."],
      ["How are scope and timing defined?", "Once the need is clear, we define the screens, workflows and integrations required. These inform the work plan and proposal."],
    ],
    contact: "Let's find the right fit for your business",
    button: "Let's talk",
  },
};

export function ServicesPage() {
  const { lang } = useLanguage();
  const t = copy[lang];
  return (
    <div className="py-9 sm:py-16">
      <Container>
        <p className="text-xs font-semibold text-accent">{lang === "he" ? "שירותים" : "Services"}</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{t.sub}</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {services[lang].map(({ id, title, description, icon: Icon, examples }, index) => (
            <section id={id} key={id} className="rounded-xl border border-line bg-paper-raised p-5">
              <div className="flex items-start gap-3"><Icon size={22} className="mt-0.5 shrink-0 text-accent" aria-hidden /><h2 className="text-lg font-bold">{title}</h2></div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.audiences[index]}</p>
              <details className="mt-3">
                <summary className="cursor-pointer py-3 text-sm font-semibold text-accent">{t.more}</summary>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">{examples.map((item) => <li key={item} className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft">{item}</li>)}</ul>
              </details>
            </section>
          ))}
        </div>
        <section id="how-i-work" className="mt-10 border-t border-line-soft pt-8">
          <h2 className="font-display text-2xl font-bold">{t.process}</h2>
          <ol className="mt-5 grid gap-5 sm:grid-cols-3">
            {t.steps.map(([title, description], i) => (
              <li key={title} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm text-paper">{i + 1}</span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">{t.faq}</h2>
          <div className="mt-4 divide-y divide-line-soft">
            {t.questions.map(([question, answer]) => <details key={question} className="py-1"><summary className="cursor-pointer py-4 font-medium">{question}</summary><p className="max-w-3xl pb-4 text-sm leading-relaxed text-ink-soft">{answer}</p></details>)}
          </div>
        </section>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-raised p-5"><p className="font-medium">{t.contact}</p><CTAButton href="/contact/">{t.button}</CTAButton></div>
      </Container>
    </div>
  );
}
