import type { Project, ProjectStatus } from "../types";

const statusStyles: Record<ProjectStatus, string> = {
  פעיל: "bg-brass/10 text-brass",
  בפיתוח: "bg-wine/10 text-wine",
  אקדמי: "bg-ink/[0.06] text-ink-soft",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-paper-raised p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.category}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <dl className="mt-5 flex flex-col gap-4 text-[0.92rem] leading-relaxed">
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted">
            הבעיה
          </dt>
          <dd className="mt-1 text-ink-soft">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-muted">
            הפתרון
          </dt>
          <dd className="mt-1 text-ink-soft">{project.solution}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.capabilities.map((c) => (
          <li
            key={c}
            className="rounded-full border border-line-soft px-3 py-1 text-xs text-ink-soft"
          >
            {c}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2 border-t border-line-soft pt-4">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md bg-ink/[0.045] px-2.5 py-1 text-xs font-medium text-ink-soft"
          >
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}
