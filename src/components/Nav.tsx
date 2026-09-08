import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, hero } from "../data/siteContent";
import { site } from "../config/site";
import { Container } from "./Container";
import { CTAButton } from "./Button";

export function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile panel automatically if the viewport grows past the
  // breakpoint where it's shown, so it can't be left open behind the scenes.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft/80 bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3.5">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-lg font-bold text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-sm font-bold text-paper">
            א
          </span>
          <span>{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="ניווט ראשי">
          {nav.slice(1, -1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton href="#contact" variant="primary" className="text-[0.85rem]">
            {hero.ctaPrimary}
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="ניווט למובייל"
          className="border-t border-line-soft bg-paper-raised md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.slice(1).map((item) => (
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
