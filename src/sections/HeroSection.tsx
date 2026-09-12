import { hero } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";
import { showProjects } from "../config/site";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";
import { HeroVisual } from "../components/HeroVisual";
import { Avatar } from "../components/Avatar";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = hero[lang];
  return (
    <section id="home" className="relative overflow-hidden bg-ink py-8 sm:py-12 lg:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,111,237,0.25),transparent_70%)]" />
      <Container className="relative grid items-center gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-xs font-medium text-accent-light">{lang === "he" ? "פיתוח מערכות, אתרים ואפליקציות לעסקים" : "Business systems, websites & apps"}</p>
          <h1 className="text-balance font-display text-[2rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">{t.headline}</h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/75">
            {lang === "he" ? "אני אלון. אני בונה פתרונות שמרכזים את העבודה, מפשטים תהליכים ומותאמים לעסק שלכם." : "I'm Alon. I build digital solutions that bring your work together and simplify the way your business runs."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton href="/contact/">{t.ctaPrimary}</CTAButton>
            <CTAButton href={showProjects ? "/work/" : "/services/"} variant="secondary" className="border-white/25 text-white hover:bg-white/10">
              {showProjects ? (lang === "he" ? "לעבודות שלי" : "View my work") : (lang === "he" ? "לשירותים" : "Services")}
            </CTAButton>
          </div>
        </div>
        <div className="order-1 mx-auto leading-none sm:hidden"><Avatar size={48} /></div>
        <div className="order-1 mx-auto hidden w-[136px] sm:block lg:order-2 lg:w-full lg:max-w-[280px]"><HeroVisual /></div>
      </Container>
    </section>
  );
}
