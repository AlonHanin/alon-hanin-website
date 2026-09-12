import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectCard } from "./ProjectCard";

export function ProjectCollection({ items, featured = false }: { items: Project[]; featured?: boolean }) {
  const { lang } = useLanguage();
  const rtl = lang === "he";
  const track = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const id = useId();
  const step = () => {
    const element = track.current;
    return element ? (element.querySelector<HTMLElement>('.project-card')?.getBoundingClientRect().width ?? 0) + parseFloat(getComputedStyle(element).columnGap) : 0;
  };
  function go(index: number) {
    const next = Math.max(0, Math.min(items.length - 1, index));
    activeRef.current = next;
    track.current?.scrollTo({ left: (rtl ? -1 : 1) * next * step(), behavior: "instant" });
    setActive(next);
  }
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const align = () => element.scrollTo({ left: (rtl ? -1 : 1) * activeRef.current * step(), behavior: "instant" });
    align();
    const observer = new ResizeObserver(align);
    observer.observe(element);
    return () => observer.disconnect();
  }, [rtl]);
  const Previous = rtl ? ChevronRight : ChevronLeft;
  const Next = rtl ? ChevronLeft : ChevronRight;
  return <div className="mt-5 min-w-0">
    <div id={id} ref={track} dir={rtl ? "rtl" : "ltr"} role="group" aria-label={rtl ? "פרויקטים. במובייל אפשר להחליק או להשתמש בחצים." : "Projects. Swipe or use the arrows on mobile."}
      className={`project-collection gallery-track grid snap-x snap-mandatory grid-flow-col auto-cols-[88%] gap-4 overflow-x-auto overscroll-x-contain p-1 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible ${featured ? "" : "lg:grid-cols-3"}`}
      onScroll={(event) => { const distance = step(); if (distance) { const next = Math.min(items.length - 1, Math.round(Math.abs(event.currentTarget.scrollLeft) / distance)); activeRef.current = next; setActive(next); } }}>
      {items.map((project) => <ProjectCard key={project.id} project={project} />)}
    </div>
    {items.length > 1 && <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pe-1 ps-[88px] sm:hidden">
      <p className="text-xs text-ink-soft" aria-live="polite" aria-atomic="true">{rtl ? `פרויקט ${active + 1} מתוך ${items.length}` : `Project ${active + 1} of ${items.length}`}</p>
      <div className="flex gap-2">
        <button type="button" onClick={() => go(active - 1)} disabled={active === 0} aria-controls={id} aria-label={rtl ? "הפרויקט הקודם" : "Previous project"} className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-line bg-paper text-ink disabled:opacity-40"><Previous size={20} aria-hidden /></button>
        <button type="button" onClick={() => go(active + 1)} disabled={active === items.length - 1} aria-controls={id} aria-label={rtl ? "הפרויקט הבא" : "Next project"} className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-line bg-paper text-ink disabled:opacity-40"><Next size={20} aria-hidden /></button>
      </div>
    </div>}
  </div>;
}
