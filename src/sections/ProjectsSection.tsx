import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";

const copy = {
  en: {
    eyebrow: "Projects",
    title: "A few systems built in practice.",
    description: "No invented logos and no fake testimonials — real projects, wherever they currently stand.",
  },
  he: {
    eyebrow: "פרויקטים",
    title: "כמה מערכות שנבנו בפועל.",
    description: "בלי לוגואים מומצאים ובלי המלצות מזויפות — פרויקטים אמיתיים, בכל שלב שהם נמצאים בו.",
  },
};

export function ProjectsSection() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects[lang].map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
