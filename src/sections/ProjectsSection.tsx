import { projects } from "../data/projects";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="פרויקטים"
          title="כמה מערכות שנבנו בפועל."
          description="בלי לוגואים מומצאים ובלי המלצות מזויפות — פרויקטים אמיתיים, בכל שלב שהם נמצאים בו."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
