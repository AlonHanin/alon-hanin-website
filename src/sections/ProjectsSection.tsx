import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { ProjectCollection } from "../components/ProjectCollection";

export function ProjectsSection() {
  const { lang } = useLanguage();
  const visible = projects[lang].filter((project) => project.published);
  return (
    <section id="projects" className="bg-paper-raised/50 py-10 sm:py-16">
      <Container>
        <p className="text-xs font-semibold text-accent">{lang === "he" ? "תיק עבודות" : "Portfolio"}</p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{lang === "he" ? "עבודות נבחרות" : "Selected work"}</h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">{lang === "he" ? "מערכות, אפליקציות ואתרים שפיתחתי. בחרו פרויקט להצצה בתהליך ובתוצאה." : "Systems, apps and websites I've built. Explore a project to see the work behind it."}</p>
        <ProjectCollection items={visible} />
      </Container>
    </section>
  );
}
