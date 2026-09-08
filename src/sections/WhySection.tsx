import { why } from "../data/siteContent";
import { differentiators } from "../data/differentiators";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function WhySection() {
  const { lang } = useLanguage();
  const t = why[lang];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.headline} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {differentiators[lang].map(({ id, title, description, icon: Icon }) => (
            <div key={id} className="flex flex-col gap-3 bg-paper-raised p-7">
              <Icon size={22} className="text-accent" />
              <h3 className="font-display text-base font-bold text-ink">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
