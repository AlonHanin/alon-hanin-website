import { howIWork } from "../data/siteContent";
import { processSteps } from "../data/process";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function ProcessSection() {
  const { lang } = useLanguage();
  const t = howIWork[lang];
  const steps = processSteps[lang];

  return (
    <section id="how-i-work" className="border-y border-line-soft bg-paper-raised/60 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.headline} />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-5 sm:gap-6">
          {steps.map(({ step, title, description }, i) => (
            <li key={step} className="relative">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-5 hidden h-px w-full bg-[repeating-linear-gradient(90deg,var(--color-line)_0_6px,transparent_6px_11px)] sm:block"
                  style={{ insetInlineStart: "calc(50% + 24px)" }}
                />
              )}
              <span className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-paper">
                {step}
              </span>
              <h3 className="font-display text-base font-bold text-ink">
                {title}
              </h3>
              <p className="mt-1.5 max-w-[26ch] text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-14 border-t border-line-soft pt-8 text-balance font-display text-xl font-medium leading-snug text-accent sm:text-2xl">
          {t.highlight}
        </p>
      </Container>
    </section>
  );
}
