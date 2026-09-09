import { Home, LayoutGrid, BriefcaseBusiness, MessageCircle, Languages } from "lucide-react";
import { site } from "../config/site";
import { navigation, normalizePath } from "../config/routes";
import { langToggle } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./Container";
import { Avatar } from "./Avatar";

const icons = { home: Home, services: LayoutGrid, work: BriefcaseBusiness, contact: MessageCircle };

export function Nav() {
  const { lang, toggleLang } = useLanguage();
  const path = normalizePath(window.location.pathname);
  const active = (key: string) => key === "home" ? path === "/" : path.startsWith(`/${key}/`);
  const label = lang === "he" ? "ניווט ראשי" : "Main navigation";

  return (
    <>
      <a href="#main-content" className="fixed start-4 top-2 z-[70] -translate-y-24 rounded-lg bg-paper p-3 text-accent shadow-lg focus:translate-y-0">
        {lang === "he" ? "דלג לתוכן" : "Skip to content"}
      </a>
      <header className="sticky top-0 z-50 border-b border-line-soft bg-paper/95 backdrop-blur-md">
        <Container className="flex min-h-16 items-center justify-between gap-3 py-2 md:py-3">
          <a href="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
            <Avatar size={40} />
            <span>{site[lang].name}</span>
          </a>
          <nav className="desktop-nav hidden items-center gap-5 lg:gap-8 md:flex" aria-label={label}>
            {navigation.map((item) => (
              <a key={item.key} href={item.path} aria-current={active(item.key) ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-sm font-medium transition-colors hover:text-accent ${active(item.key) ? "text-accent" : "text-ink-soft"}`}>
                {item.label[lang]}
              </a>
            ))}
          </nav>
          <button type="button" onClick={toggleLang} aria-label={langToggle[lang].aria}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-semibold text-ink-soft hover:border-accent/40 hover:text-accent">
            <Languages size={16} aria-hidden />{langToggle[lang].label}
          </button>
        </Container>
      </header>
      <nav aria-label={label} className="mobile-nav fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-line bg-paper/95 px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        {navigation.map((item) => {
          const Icon = icons[item.key as keyof typeof icons];
          return (
            <a key={item.key} href={item.path} aria-current={active(item.key) ? "page" : undefined}
              className={`flex min-h-12 min-w-16 flex-1 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-medium ${active(item.key) ? "bg-accent/8 text-accent" : "text-ink-soft"}`}>
              <Icon size={19} aria-hidden />
              {item.key === "contact" ? (lang === "he" ? "יצירת קשר" : "Contact") : item.label[lang]}
            </a>
          );
        })}
      </nav>
    </>
  );
}
