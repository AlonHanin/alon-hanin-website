import { services, integrationsNote } from "../data/services";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function ServicesSection() {
  const Integ = integrationsNote.icon;

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="שירותים"
          title="ארבע דרכים להתחיל, מטרה אחת."
          description="פחות כלים מפוזרים, פחות עבודה ידנית שחוזרת על עצמה."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ id, title, description, icon: Icon, examples }) => (
            <div
              key={id}
              className="rounded-xl border border-line bg-paper-raised p-7 transition-shadow duration-150 hover:shadow-[0_1px_2px_rgba(34,27,23,0.05),0_12px_28px_-10px_rgba(34,27,23,0.16)]"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-wine/10 text-wine">
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
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brass/10 text-brass">
            <Integ size={20} />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">
              {integrationsNote.title}
            </h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
              {integrationsNote.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
