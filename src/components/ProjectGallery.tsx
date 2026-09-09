import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";

export function ProjectGallery({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const id = useId();
  const rtl = lang === "he";
  const count = project.images.length;
  useEffect(() => {
    const container = track.current;
    if (!container) return;
    const align = () => container.scrollTo({ left: (rtl ? -1 : 1) * activeRef.current * container.clientWidth, behavior: "instant" });
    align();
    const observer = new ResizeObserver(align);
    observer.observe(container);
    return () => observer.disconnect();
  }, [rtl]);
  if (!count) return null;

  function go(index: number) {
    const container = track.current;
    if (!container) return;
    const next = Math.max(0, Math.min(count - 1, index));
    activeRef.current = next;
    // No autoplay or animated scrolling; native touch scrolling remains available.
    container.scrollTo({ left: (rtl ? -1 : 1) * next * container.clientWidth, behavior: "instant" });
    setActive(next);
  }

  const Previous = rtl ? ChevronRight : ChevronLeft;
  const Next = rtl ? ChevronLeft : ChevronRight;
  return (
    <section aria-label={lang === "he" ? `תמונות הפרויקט ${project.name}` : `${project.name} images`} aria-roledescription={lang === "he" ? "גלריית תמונות" : "carousel"}
      className="mt-6 overflow-hidden rounded-xl border border-line bg-paper-raised">
      <div id={id} ref={track} role="group" dir={rtl ? "rtl" : "ltr"} tabIndex={count > 1 ? 0 : undefined}
        aria-label={lang === "he" ? "תמונות הפרויקט. אפשר לעבור עם מקשי החצים או להחליק." : "Project images. Use arrow keys or swipe to navigate."}
        className="gallery-track flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
        onScroll={(event) => {
          const current = Math.min(count - 1, Math.round(Math.abs(event.currentTarget.scrollLeft) / event.currentTarget.clientWidth));
          activeRef.current = current;
          setActive(current);
        }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft") { event.preventDefault(); go(active + (rtl ? 1 : -1)); }
          if (event.key === "ArrowRight") { event.preventDefault(); go(active + (rtl ? -1 : 1)); }
          if (event.key === "Home") { event.preventDefault(); go(0); }
          if (event.key === "End") { event.preventDefault(); go(count - 1); }
        }}
      >
        {project.images.map((image, index) => (
          <div key={image.src} role="group" aria-roledescription={lang === "he" ? "תמונה" : "slide"} aria-label={`${index + 1} / ${count}`} aria-hidden={index !== active}
            className="flex w-full min-w-full snap-start items-center justify-center p-3 sm:p-6">
            <img src={image.src} alt={image.alt} width={image.width} height={image.height}
              loading={index === 0 ? "eager" : "lazy"} decoding="async" draggable={false}
              className="h-[clamp(15rem,40svh,23rem)] w-full select-none object-contain sm:h-[24rem]" />
          </div>
        ))}
      </div>
      <div className="border-t border-line bg-paper px-4 py-3">
        <p className="text-center text-sm leading-relaxed text-ink-soft">{project.images[active]?.caption}</p>
        {count > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2">
            <button type="button" onClick={() => go(active - 1)} disabled={active === 0} aria-controls={id} aria-label={lang === "he" ? "התמונה הקודמת" : "Previous image"}
              className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-line text-ink hover:bg-paper-raised disabled:opacity-40"><Previous size={22} aria-hidden /></button>
            <p aria-live="polite" aria-atomic="true" className="min-w-0 text-center text-sm text-ink-soft">
              {lang === "he" ? `תמונה ${active + 1} מתוך ${count}` : `Image ${active + 1} of ${count}`}
            </p>
            <button type="button" onClick={() => go(active + 1)} disabled={active === count - 1} aria-controls={id} aria-label={lang === "he" ? "התמונה הבאה" : "Next image"}
              className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-line text-ink hover:bg-paper-raised disabled:opacity-40"><Next size={22} aria-hidden /></button>
          </div>
        )}
      </div>
    </section>
  );
}
