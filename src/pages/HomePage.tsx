import { LayoutDashboard, Globe, Smartphone, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { HeroSection } from "../sections/HeroSection";
import { Container } from "../components/Container";
import { ProjectCard } from "../components/ProjectCard";
import { CTAButton } from "../components/Button";
import { projects } from "../data/projects";
import { showProjects } from "../config/site";
import { useLanguage } from "../i18n/LanguageContext";

const services = {
  he: [
    { title: "מערכות לניהול העסק", text: "לקוחות, משימות ותהליכים במקום אחד.", icon: LayoutDashboard, hash: "business-systems" },
    { title: "אתרים שעובדים בשבילכם", text: "נוכחות מקצועית ודרך פשוטה לפנות.", icon: Globe, hash: "business-websites" },
    { title: "אפליקציות וכלים לצוות", text: "חיבור בין העובדים, הלקוחות והמערכת.", icon: Smartphone, hash: "mobile-apps" },
  ],
  en: [
    { title: "Business management systems", text: "Customers, tasks and workflows in one place.", icon: LayoutDashboard, hash: "business-systems" },
    { title: "Websites for your business", text: "A professional presence that makes contact easy.", icon: Globe, hash: "business-websites" },
    { title: "Apps & tools for your team", text: "Connecting staff, customers and your system.", icon: Smartphone, hash: "mobile-apps" },
  ],
};

export function HomePage() {
  const { lang } = useLanguage();
  const Arrow = lang === "he" ? ArrowUpLeft : ArrowUpRight;
  const featured = projects[lang].filter((p) => p.published && ["wineops", "ap"].includes(p.id));
  return (
    <>
      <HeroSection />
      <section className="py-9 sm:py-14">
        <Container>
          <h2 className="font-display text-2xl font-bold">{lang === "he" ? "במה אוכל לעזור?" : "How can I help?"}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {services[lang].map(({ title, text, icon: Icon, hash }) => (
              <a key={hash} href={`/services/#${hash}`} className="flex items-start gap-3 rounded-xl border border-line p-4 transition-colors hover:border-accent/40 sm:flex-col sm:p-5">
                <Icon size={22} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p></div>
              </a>
            ))}
          </div>
        </Container>
      </section>
      {showProjects && (
        <section className="border-y border-line-soft bg-paper-raised/60 py-9 sm:py-14">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-2xl font-bold">{lang === "he" ? "הצצה לעבודות שלי" : "A look at my work"}</h2>
              <a href="/work/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">{lang === "he" ? "לכל העבודות" : "All projects"}<Arrow size={16} aria-hidden /></a>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {featured.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </Container>
        </section>
      )}
      <section className="py-9 sm:py-14">
        <Container className="grid items-center gap-5 sm:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold">{lang === "he" ? "נעים להכיר, אני אלון." : "Hi, I'm Alon."}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">{lang === "he" ? "אני מגיע מעולמות הניהול והתפעול, עם תואר במערכות מידע. בכל פרויקט אני מתחיל בהבנת העסק — ובונה יחד איתכם את הפתרון שמתאים לו." : "With a background in leadership, operations and Information Systems, I start each project by understanding your business and building the right solution with you."}</p>
          </div>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            <CTAButton href="/contact/">{lang === "he" ? "בואו נדבר על העסק שלכם" : "Let's talk about your business"}</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
