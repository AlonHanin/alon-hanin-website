import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { nav, hero, langToggle } from "../data/siteContent";
import { site } from "../config/site";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./Container";
import { CTAButton } from "./Button";
import { Avatar } from "./Avatar";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  // Close the mobile panel automatically if the viewport grows past the
  // breakpoint where it's shown, so it can't be left open behind the scenes.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = nav[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft/80 bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3.5">
        <a
          href="#home"
          className="flex items-center gap-3 font-display text-xl font-bold text-ink"
        >
          <Avatar size={52} />
          <span>{site[lang].name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.slice(1, -1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={langToggle[lang].aria}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Languages size={14} />
            {langToggle[lang].label}
          </button>
          <CTAButton href="#contact" variant="primary" className="text-[0.85rem]">
            {hero[lang].ctaPrimary}
          </CTAButton>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={langToggle[lang].aria}
            className="inline-flex h-10 items-center gap-1 rounded-md px-2 text-xs font-semibold text-ink-soft"
          >
            <Languages size={16} />
            {langToggle[lang].label}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-line-soft bg-paper-raised md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.slice(1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-ink/[0.04] hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
