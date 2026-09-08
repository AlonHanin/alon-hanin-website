import { hero } from "../data/siteContent";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";
import { HeroVisual } from "../components/HeroVisual";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(110,31,58,0.06),_transparent_65%)]"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="mb-6 inline-block rounded-full border border-line bg-paper-raised px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft">
            {hero.eyebrow}
          </span>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            {hero.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="#contact" variant="primary">
              {hero.ctaPrimary}
            </CTAButton>
            <CTAButton href="#how-i-work" variant="secondary">
              {hero.ctaSecondary}
            </CTAButton>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
