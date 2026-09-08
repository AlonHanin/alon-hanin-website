import { useLanguage } from "../i18n/LanguageContext";

export function HeroVisual() {
  const { lang } = useLanguage();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[28rem] isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-accent/25 blur-3xl"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-accent shadow-[0_24px_72px_-24px_rgba(47,111,237,0.55)] sm:border-[8px]">
        <img
          src="/alon-portrait.jpg"
          alt={lang === "he" ? "אלון חנין" : "Alon Hanin"}
          width={1254}
          height={1254}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-2 rounded-full border border-white/15"
        />
      </div>
    </div>
  );
}
