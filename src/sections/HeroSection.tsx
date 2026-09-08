import { hero } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";
import { HeroVisual } from "../components/HeroVisual";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = hero[lang];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,111,237,0.28),transparent),radial-gradient(ellipse_40%_40%_at_85%_20%,rgba(56,208,224,0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            {t.eyebrow}
          </span>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            {t.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="#contact" variant="primary">
              {t.ctaPrimary}
            </CTAButton>
            <CTAButton
              href="#how-i-work"
              variant="secondary"
              className="border-white/20 text-white hover:border-white/40 hover:bg-white/[0.06]"
            >
              {t.ctaSecondary}
            </CTAButton>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
