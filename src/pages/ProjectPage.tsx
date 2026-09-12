import { useLanguage } from "../i18n/LanguageContext";
import type { Project } from "../types";
import { Container } from "../components/Container";
import { ProjectStory } from "../components/ProjectStory";

export function ProjectPage({ project }: { project: Project }) {
  const { lang } = useLanguage();
  return (
    <article className="py-8 sm:py-14">
      <Container className="max-w-5xl">
        <a href="/work/" className="mb-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent">{lang === "he" ? "← לכל העבודות" : "← All projects"}</a>
        <ProjectStory project={project} />
      </Container>
    </article>
  );
}
