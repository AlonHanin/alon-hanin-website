import { useLanguage } from "../i18n/LanguageContext";
import type { Project } from "../types";
import { ProjectGallery } from "./ProjectGallery";
import { CTAButton } from "./Button";

export function ProjectStory({ project, inDialog = false, titleId }: { project: Project; inDialog?: boolean; titleId?: string }) {
  const { lang } = useLanguage();
  const he = lang === "he";
  const Heading = inDialog ? "h2" : "h1";
  const Subheading = inDialog ? "h3" : "h2";
  return <div className="project-story">
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <p className="font-semibold text-accent"><bdi>{project.name}</bdi></p>
      {project.status === "in-development" && <span className="rounded-full bg-paper-raised px-3 py-1 text-xs text-ink-soft">{he ? "בפיתוח" : "In development"}</span>}
    </div>
    <Heading id={titleId} className="mt-3 text-pretty font-display text-2xl font-bold sm:text-3xl">{project.category}</Heading>
    <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{project.solution}</p>
    <ProjectGallery project={project} />
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <section><Subheading className="font-semibold">{he ? "האתגר" : "The challenge"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</p></section>
      <section><Subheading className="font-semibold">{he ? "מה פיתחתי" : "What I built"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.scope}</p></section>
    </div>
    <section className="mt-6 border-t border-line-soft pt-5">
      <Subheading className="text-sm font-semibold">{he ? "בתוך המערכת" : "Inside the product"}</Subheading>
      <ul className="mt-3 flex flex-wrap gap-2">{project.capabilities.map((item) => <li key={item} className="rounded-lg bg-paper-raised px-3 py-2 text-sm text-ink-soft">{item}</li>)}</ul>
    </section>
    {project.stack.length > 0 && <details className="mt-4 border-b border-line-soft pb-3"><summary className="cursor-pointer py-3 text-sm font-medium">{he ? "טכנולוגיות בפרויקט" : "Technologies used"}</summary><ul className="flex flex-wrap gap-2 py-2">{project.stack.map((item) => <li key={item} className="rounded-md bg-paper-raised px-3 py-1 font-mono text-xs"><bdi>{item}</bdi></li>)}</ul></details>}
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-raised p-5">
      <p className="font-medium">{he ? "יש לכם תהליך דומה שצריך לפשט?" : "Have a similar workflow to simplify?"}</p>
      <CTAButton href="/contact/">{he ? "נדבר על הפרויקט שלכם" : "Let's discuss your project"}</CTAButton>
    </div>
    {inDialog && <a href={`/work/${project.id}/`} className="mt-3 inline-flex min-h-11 items-center text-sm text-accent underline">{he ? "לעמוד הפרויקט" : "Go to project page"}</a>}
  </div>;
}
