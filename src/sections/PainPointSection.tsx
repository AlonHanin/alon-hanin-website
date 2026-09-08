import { AlertCircle } from "lucide-react";
import { painPoint } from "../data/siteContent";
import { Container } from "../components/Container";

export function PainPointSection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <span className="mb-3 block font-body text-xs font-semibold tracking-[0.14em] text-brass">
          {painPoint.eyebrow}
        </span>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold leading-[1.15] text-paper sm:text-4xl">
          {painPoint.headline}
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {painPoint.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-lg border border-paper/10 bg-paper/[0.04] px-5 py-4 text-paper/85"
            >
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-wine-soft"
                aria-hidden
              />
              <span className="text-[0.95rem] leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-xl text-pretty font-display text-xl font-medium leading-snug text-paper sm:text-2xl">
          {painPoint.transition}
        </p>
      </Container>
    </section>
  );
}
