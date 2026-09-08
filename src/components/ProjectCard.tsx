import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectImage } from "./ProjectImage";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  const { lang } = useLanguage();
  const Arrow = lang === "he" ? ArrowUpLeft : ArrowUpRight;

  return (
    <article className={`group overflow-hidden rounded-2xl border border-line bg-paper ${project.featured ? "grid lg:grid-cols-[0.9fr_1.1fr]" : "flex flex-col"}`}>
      <div className={`flex min-w-0 flex-col items-start p-6 sm:p-9 ${project.featured ? "lg:justify-center lg:p-10" : "flex-1"}`}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-accent">{project.category}</span>
          {project.status === "in-development" && (
            <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-ink-soft">
              {lang === "he" ? "בפיתוח" : "In development"}
            </span>
          )}
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          <bdi>{project.name}</bdi>
        </h3>
        <p className="mt-3 text-pretty font-display text-lg font-semibold leading-snug text-ink">
          {project.headline}
        </p>
        <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-ink-soft">
          {project.solution}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          {project.capabilities.map((capability) => (
            <li key={capability} className="flex items-center gap-2 text-xs text-ink-soft">
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              {capability}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          aria-haspopup="dialog"
          aria-label={lang === "he" ? `הצצה לפרויקט ${project.name}` : `Explore ${project.name}`}
          className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-accent/30 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent hover:text-accent-deep"
        >
          {lang === "he" ? "הצצה לפרויקט" : "Explore project"}
          <Arrow size={17} aria-hidden />
        </button>
      </div>
      <div className={project.featured ? "min-w-0 border-t border-line-soft lg:border-t-0 lg:border-s" : "order-first border-b border-line-soft"}>
        <ProjectImage project={project} />
      </div>
    </article>
  );
}
