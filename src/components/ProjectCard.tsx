import { useState } from "react";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectCover } from "./ProjectCover";
import { ProjectDialog } from "./ProjectDialog";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const Arrow = lang === "he" ? ArrowUpLeft : ArrowUpRight;
  return (
    <>
    <article className="project-card min-w-0 snap-start overflow-hidden rounded-xl border border-line bg-paper transition-shadow hover:shadow-md">
      <button type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}
        className="flex h-full w-full cursor-pointer flex-col text-start">
        <ProjectCover project={project} />
        <div className="flex min-w-0 flex-1 flex-col p-5">
          <h3 className="text-pretty font-display text-lg font-bold leading-snug text-ink">{project.category}</h3>
          <div className="mt-4 border-t border-line-soft pt-3">
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-ink"><bdi>{project.name}</bdi></p>
            {project.status === "in-development" && <span className="rounded-full bg-paper-raised px-2 py-1 text-[10px] text-ink-soft">{lang === "he" ? "בפיתוח" : "In development"}</span>}
          </div>
          </div>
          <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-2 text-sm font-semibold text-accent">
            {lang === "he" ? "לסיפור הפרויקט" : "Explore the project"}<Arrow size={17} aria-hidden />
          </span>
        </div>
      </button>
    </article>
    {open && <ProjectDialog project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
