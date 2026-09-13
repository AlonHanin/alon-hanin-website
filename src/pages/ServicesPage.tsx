import { integrationsNote, services } from "../data/services";
import { processSteps } from "../data/process";
import { howIWork } from "../data/siteContent";
import { servicesFaq } from "../data/faq";
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
    faq: "לפני שמתחילים",
    contact: "נבדוק יחד מה מתאים לעסק שלכם",
    button: "בואו נדבר",
  },
  en: {
    title: "Digital solutions built around your business.",
    sub: "Start with the business need, then choose the right tools for the way you work.",
    audiences: ["For businesses bringing customers, orders and tasks together.", "For teams that need custom tools in the browser.", "For businesses building their presence and generating inquiries.", "For workflows that need to work on mobile and in the field."],
    more: "What's included?",
    process: "How we work together",
    faq: "Before we start",
    contact: "Let's find the right fit for your business",
    button: "Let's talk",
  },
};

export function ServicesPage() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const integration = integrationsNote[lang];
  const IntegrationIcon = integration.icon;
  const steps = processSteps[lang];
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
        <section id="integrations" className="mt-5 flex items-start gap-4 rounded-xl border border-dashed border-line p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
            <IntegrationIcon size={20} aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-lg font-bold">{integration.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{integration.description}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{integration.note}</p>
          </div>
        </section>
        <section id="how-i-work" className="mt-10 border-t border-line-soft pt-8">
          <h2 className="font-display text-2xl font-bold">{t.process}</h2>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ step, title, description }) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm text-paper">{step}</span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-line-soft pt-5 font-display text-lg font-medium text-accent">{howIWork[lang].highlight}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">{t.faq}</h2>
          <div className="mt-4 divide-y divide-line-soft">
            {servicesFaq[lang].map(({ question, answer }) => <details key={question} className="py-1"><summary className="cursor-pointer py-4 font-medium">{question}</summary><p className="max-w-3xl pb-4 text-sm leading-relaxed text-ink-soft">{answer}</p></details>)}
          </div>
          <a href="/insights/" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-accent underline underline-offset-4">{lang === "he" ? "למדריכים המעשיים" : "Read practical insights"}</a>
        </section>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-raised p-5"><p className="font-medium">{t.contact}</p><CTAButton href="/contact/">{t.button}</CTAButton></div>
      </Container>
    </div>
  );
}
