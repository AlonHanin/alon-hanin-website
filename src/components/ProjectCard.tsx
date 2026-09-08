import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectImage } from "./ProjectImage";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const Arrow = lang === "he" ? ArrowUpLeft : ArrowUpRight;
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-line bg-paper transition-shadow hover:shadow-md">
      <a href={`/work/${project.id}/`} className="grid h-full grid-cols-[108px_minmax(0,1fr)] sm:grid-cols-1" aria-label={lang === "he" ? `לפרויקט ${project.name}` : `View ${project.name}`}>
        <ProjectImage project={project} compact />
        <div className="flex min-w-0 flex-col items-start justify-center p-4 sm:p-5">
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-ink"><bdi>{project.name}</bdi></h3>
            {project.status === "in-development" && <span className="rounded-full bg-paper-raised px-2 py-1 text-[10px] text-ink-soft">{lang === "he" ? "בפיתוח" : "In development"}</span>}
          </div>
          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-soft">{project.headline}</p>
          <span className="mt-3 inline-flex min-h-6 items-center gap-2 text-xs font-semibold text-accent">
            {lang === "he" ? "לפרויקט" : "View project"}<Arrow size={15} aria-hidden />
          </span>
        </div>
      </a>
    </article>
  );
}
