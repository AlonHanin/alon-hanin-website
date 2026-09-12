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
    <div className="project-dialog-bar sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line-soft bg-paper px-5 py-2">
      <span className="text-sm font-medium text-ink-soft">{lang === "he" ? "מבט על הפרויקט" : "Project overview"}</span>
      <button ref={close} type="button" onClick={onClose} aria-label={lang === "he" ? "סגירת הפרויקט" : "Close project"} className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-line bg-paper"><X size={21} aria-hidden /></button>
    </div>
    <div className="p-5 sm:p-8"><ProjectStory project={project} inDialog titleId={titleId} /></div>
  </dialog>;
}
