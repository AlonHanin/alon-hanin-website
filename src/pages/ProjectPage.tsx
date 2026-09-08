import { useLanguage } from "../i18n/LanguageContext";
import type { Project } from "../types";
import { Container } from "../components/Container";
import { ProjectImage } from "../components/ProjectImage";
import { CTAButton } from "../components/Button";

export function ProjectPage({ project }: { project: Project }) {
  const { lang } = useLanguage();
  return (
    <article className="py-8 sm:py-14">
      <Container className="max-w-5xl">
        <a href="/work/" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent">{lang === "he" ? "← לכל העבודות" : "← All projects"}</a>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="text-sm text-ink-soft">{project.category}</p>
          {project.status === "in-development" && <span className="rounded-full bg-paper-raised px-3 py-1 text-xs text-accent">{lang === "he" ? "בפיתוח" : "In development"}</span>}
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-5xl"><bdi>{project.name}</bdi></h1>
        <p className="mt-3 max-w-2xl text-pretty text-xl leading-snug">{project.headline}</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-line"><ProjectImage project={project} expanded /></div>
        {project.images[0] && <a href={project.images[0].src} target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center text-xs font-medium text-accent">{lang === "he" ? "פתיחת התמונה בגודל מלא ↗" : "Open full-size image ↗"}</a>}
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">{project.solution}</p>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          <div><dt className="font-semibold">{lang === "he" ? "הצורך" : "The need"}</dt><dd className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</dd></div>
          <div><dt className="font-semibold">{lang === "he" ? "העבודה שלי" : "My contribution"}</dt><dd className="mt-2 text-sm leading-relaxed text-ink-soft">{project.scope}</dd></div>
        </dl>
        {project.stack.length > 0 && <details className="mt-6 border-y border-line-soft py-3"><summary className="cursor-pointer py-2 text-sm font-medium">{lang === "he" ? "טכנולוגיות בפרויקט" : "Technologies used"}</summary><ul className="flex flex-wrap gap-2 py-3">{project.stack.map((item) => <li key={item} className="rounded-md bg-paper-raised px-3 py-1 font-mono text-xs"><bdi>{item}</bdi></li>)}</ul></details>}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-raised p-5">
          <p className="font-medium">{lang === "he" ? "צריכים פתרון דומה לעסק שלכם?" : "Need something similar for your business?"}</p>
          <CTAButton href="/contact/">{lang === "he" ? "בואו נדבר" : "Let's talk"}</CTAButton>
        </div>
      </Container>
    </article>
  );
}
