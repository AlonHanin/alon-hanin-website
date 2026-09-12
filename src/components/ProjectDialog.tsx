import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectStory } from "./ProjectStory";

export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const { lang } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  useEffect(() => {
    const element = dialog.current;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollPosition = { top: window.scrollY, left: window.scrollX, behavior: "instant" as const };
    element?.showModal();
    close.current?.focus({ preventScroll: true });
    return () => { element?.close(); opener?.focus({ preventScroll: true }); window.scrollTo(scrollPosition); };
  }, []);
  return <dialog ref={dialog} aria-labelledby={titleId} className="project-dialog border border-line bg-paper text-ink shadow-xl backdrop:bg-navy/65 backdrop:backdrop-blur-sm"
    onCancel={(event) => { event.preventDefault(); onClose(); }}
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    }}
    onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], summary, [tabindex="0"]')].filter((element) => element.getClientRects().length > 0);
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
    <div className="project-dialog-close-layer sticky top-0 z-20 h-0">
      <button ref={close} type="button" onClick={onClose} aria-label={lang === "he" ? "סגירת הפרויקט" : "Close project"} className="project-dialog-close flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/70 bg-white/90 text-navy shadow-md backdrop-blur"><X size={21} aria-hidden /></button>
    </div>
    <ProjectStory project={project} inDialog titleId={titleId} />
  </dialog>;
}
