import { useState } from "react";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDialog } from "../components/ProjectDialog";

const copy = {
  en: {
    eyebrow: "Selected work",
    title: "Different needs. Working solutions.",
    description: "A closer look at systems, apps and websites I've built — from the interface to the processes behind it.",
    more: "More ways I put technology to work",
  },
  he: {
    eyebrow: "עבודות נבחרות",
    title: "צרכים שונים. פתרונות שנבנו בפועל.",
    description: "הצצה למערכות, אפליקציות ואתרים שפיתחתי — מהממשק ועד לתהליכים שמאחוריו.",
    more: "עוד עבודות, עוד יכולות",
  },
};

export function ProjectsSection() {
  const { lang } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const t = copy[lang];
  const visible = projects[lang].filter((project) => project.published);
  const selected = visible.find((project) => project.id === selectedId);

  return (
    <section id="projects" className="border-t border-line-soft bg-paper-raised/50 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="mt-10 flex flex-col gap-6">
          {visible.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedId} />
          ))}
        </div>
        <h3 className="mb-6 mt-12 font-display text-lg font-semibold text-ink">{t.more}</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {visible.filter((project) => !project.featured).map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedId} />
          ))}
        </div>
      </Container>
      <ProjectDialog project={selected} onClose={() => setSelectedId(null)} />
    </section>
  );
}
