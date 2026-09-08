import { about } from "../data/siteContent";
import { Container } from "../components/Container";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-line-soft bg-paper-raised/60 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <span className="mb-3 block font-body text-xs font-semibold tracking-[0.14em] text-wine">
            {about.eyebrow}
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.2] text-ink sm:text-4xl">
            {about.headline}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>

        <dl className="flex flex-col gap-0 overflow-hidden rounded-xl border border-line bg-paper-raised">
          {about.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col gap-1 px-6 py-5 ${i !== about.facts.length - 1 ? "border-b border-line-soft" : ""}`}
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
