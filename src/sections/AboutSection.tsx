import { about } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";

export function AboutSection() {
  const { lang } = useLanguage();
  const t = about[lang];

  return (
    <section id="about" className="border-y border-line-soft bg-paper-raised/60 py-9 sm:py-14">
      <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <span className="mb-3 block font-body text-xs font-semibold tracking-[0.14em] text-accent">
            {t.eyebrow}
          </span>
          <h2 className="text-balance font-display text-2xl font-bold leading-[1.2] text-ink sm:text-3xl">
            {t.headline}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {t.paragraphs.map((p) => (
              <p key={p} className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>

        <dl className="flex flex-col gap-0 overflow-hidden rounded-xl border border-line bg-paper-raised">
          {t.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col gap-1 px-6 py-5 ${i !== t.facts.length - 1 ? "border-b border-line-soft" : ""}`}
            >
              <dt className="text-xs font-semibold tracking-wide text-muted">
                {fact.label}
              </dt>
              <dd className="font-display text-lg font-bold text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
