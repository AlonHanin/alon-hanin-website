import { useLanguage } from "../i18n/LanguageContext";
import type { Project } from "../types";
import { ProjectGallery } from "./ProjectGallery";
import { CTAButton } from "./Button";
import { TechnologyBadge } from "./TechnologyBadge";

export function ProjectStory({ project, inDialog = false, titleId }: { project: Project; inDialog?: boolean; titleId?: string }) {
  const { lang } = useLanguage();
  const he = lang === "he";
  const Heading = inDialog ? "h2" : "h1";
  const Subheading = inDialog ? "h3" : "h2";
  return <div className={`project-story ${inDialog ? "project-story-dialog" : ""}`}>
    {inDialog && <ProjectGallery project={project} />}
    <div className={inDialog ? "project-story-content" : ""}>
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <p className="font-semibold text-accent"><bdi>{project.name}</bdi></p>
      {project.status === "in-development" && <span className="rounded-full bg-paper-raised px-3 py-1 text-xs text-ink-soft">{he ? "בפיתוח" : "In development"}</span>}
    </div>
    <Heading id={titleId} className="mt-3 text-pretty font-display text-2xl font-bold sm:text-3xl">{project.category}</Heading>
    <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{project.solution}</p>
    {!inDialog && <ProjectGallery project={project} />}
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <section><Subheading className="font-semibold">{he ? "האתגר" : "The challenge"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</p></section>
      <section><Subheading className="font-semibold">{he ? "מה פיתחתי" : "What I built"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.scope}</p></section>
    </div>
    <section className="mt-6 border-t border-line-soft pt-5">
      <Subheading className="text-sm font-semibold">{he ? "בתוך המערכת" : "Inside the product"}</Subheading>
      <ul className="mt-3 flex flex-wrap gap-2">{project.capabilities.map((item) => <li key={item} className="rounded-lg bg-paper-raised px-3 py-2 text-sm text-ink-soft">{item}</li>)}</ul>
    </section>
    {project.stack.length > 0 && <section className="mt-6 border-t border-line-soft pt-5">
      <Subheading className="text-sm font-semibold">{he ? "טכנולוגיות בפרויקט" : "Technologies used"}</Subheading>
      <ul className="mt-3 flex flex-wrap gap-2.5">{project.stack.map((item) => <TechnologyBadge key={item} name={item} />)}</ul>
    </section>}
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-raised p-5">
      <p className="font-medium">{he ? "יש לכם תהליך דומה שצריך לפשט?" : "Have a similar workflow to simplify?"}</p>
      <CTAButton href="/contact/">{he ? "נדבר על הפרויקט שלכם" : "Let's discuss your project"}</CTAButton>
    </div>
    </div>
  </div>;
}
