import { AlertCircle } from "lucide-react";
import { painPoint } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";

export function PainPointSection() {
  const { lang } = useLanguage();
  const t = painPoint[lang];

  return (
    <section className="border-b border-line-soft py-20 sm:py-28">
      <Container>
        <span className="mb-3 block font-body text-xs font-semibold tracking-[0.14em] text-accent">
          {t.eyebrow}
        </span>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold leading-[1.15] text-ink sm:text-4xl">
          {t.headline}
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-lg border border-line bg-paper-raised px-5 py-4 text-ink-soft"
            >
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-accent-2"
                aria-hidden
              />
              <span className="text-[0.95rem] leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-xl text-pretty font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
          {t.transition}
        </p>
      </Container>
    </section>
  );
}
