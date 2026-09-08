import { services, integrationsNote } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

const copy = {
  en: {
    eyebrow: "Services",
    title: "Four ways in, one goal.",
    description: "Fewer scattered tools, less manual work repeating itself.",
  },
  he: {
    eyebrow: "שירותים",
    title: "ארבע דרכים להתחיל, מטרה אחת.",
    description: "פחות כלים מפוזרים, פחות עבודה ידנית שחוזרת על עצמה.",
  },
};

export function ServicesSection() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const items = services[lang];
  const integ = integrationsNote[lang];
  const Integ = integ.icon;

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map(({ id, title, description, icon: Icon, examples }) => (
            <div
              key={id}
              className="rounded-xl border border-line bg-paper-raised p-7 transition-shadow duration-150 hover:shadow-[0_1px_2px_rgba(10,14,26,0.05),0_12px_28px_-10px_rgba(47,111,237,0.22)]"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <h3 className="font-display text-xl font-bold text-ink">
                {title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                {description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-full border border-line-soft px-3 py-1 text-xs text-muted"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-4 rounded-xl border border-dashed border-line px-7 py-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
            <Integ size={20} />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">
              {integ.title}
            </h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
              {integ.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
