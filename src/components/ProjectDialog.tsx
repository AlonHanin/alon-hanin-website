import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectImage } from "./ProjectImage";
import { CTAButton } from "./Button";

export function ProjectDialog({ project, onClose }: { project: Project | undefined; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const { lang } = useLanguage();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !project) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-2xl border border-line bg-paper p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      {project && (
        <>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line-soft bg-paper/95 px-5 py-4 backdrop-blur-md sm:px-8">
            <div>
              <p className="text-xs font-medium text-accent">{project.category}</p>
              <h2 id={titleId} className="mt-1 font-display text-xl font-bold"><bdi>{project.name}</bdi></h2>
            </div>
            <button
              type="button"
              autoFocus
              onClick={onClose}
              aria-label={lang === "he" ? "סגירת פרטי הפרויקט" : "Close project details"}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:bg-paper-raised"
            >
              <X size={20} aria-hidden />
            </button>
          </div>
          <ProjectImage project={project} expanded />
          <div className="p-6 sm:p-8">
            <h3 className="text-pretty font-display text-xl font-bold">{project.headline}</h3>
            {project.status === "in-development" && (
              <p className="mt-2 text-sm font-medium text-accent">{lang === "he" ? "המוצר נמצא בפיתוח." : "This product is in development."}</p>
            )}
            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold text-accent">{lang === "he" ? "הצורך" : "The need"}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-accent">{lang === "he" ? "העבודה שלי" : "My contribution"}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{project.scope}</dd>
              </div>
            </dl>
            {project.stack.length > 0 && (
              <div className="mt-6 border-t border-line-soft pt-5">
                <p className="mb-3 text-xs font-semibold text-ink-soft">{lang === "he" ? "טכנולוגיות בפרויקט" : "Technologies used"}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item) => <li key={item} className="rounded-md bg-paper-raised px-3 py-1.5 font-mono text-xs text-ink-soft"><bdi>{item}</bdi></li>)}
                </ul>
              </div>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line-soft pt-6">
              <p className="text-sm font-medium">{lang === "he" ? "צריכים פתרון דומה לעסק שלכם?" : "Need something similar for your business?"}</p>
              <CTAButton href="#contact" onClick={onClose}>{lang === "he" ? "בואו נדבר" : "Let's talk"}</CTAButton>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
