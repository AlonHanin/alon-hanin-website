import { useEffect, useId, useRef, useState } from "react";
import { Accessibility, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const storageKey = "site-accessibility";
const defaults = { scale: 100, contrast: false, links: false, motion: false, hidden: false };
function readSettings() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) ?? "null");
    return { scale: [100, 125, 150, 200].includes(value?.scale) ? Number(value.scale) : 100,
      contrast: value?.contrast === true, links: value?.links === true,
      motion: value?.motion === true, hidden: value?.hidden === true };
  } catch { return defaults; }
}

export function AccessibilityTools() {
  const { lang } = useLanguage();
  const he = lang === "he";
  const [settings, setSettings] = useState(readSettings);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${settings.scale}%`;
    root.dataset.a11yContrast = String(settings.contrast);
    root.dataset.a11yLinks = String(settings.links);
    root.dataset.a11yMotion = String(settings.motion);
    root.dataset.largeText = String(settings.scale > 100);
    try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch { /* Session still works without storage. */ }
  }, [settings]);

  function open() {
    restoreFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSettings((current) => ({ ...current, hidden: false }));
    dialog.current?.showModal();
    closeButton.current?.focus();
  }

  useEffect(() => {
    function openFromFooter() { open(); }
    window.addEventListener("open-accessibility", openFromFooter);
    return () => window.removeEventListener("open-accessibility", openFromFooter);
  }, []);

  return <>
    {!settings.hidden && <div className="accessibility-launcher fixed start-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[55] flex items-center gap-1 md:bottom-6">
      <button type="button" onClick={open} aria-label={he ? "פתיחת אפשרויות נגישות" : "Open accessibility options"}
        aria-haspopup="dialog" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-paper bg-accent-deep text-white shadow-lg">
        <Accessibility size={27} aria-hidden />
      </button>
      <button type="button" onClick={() => { setSettings((current) => ({ ...current, hidden: true })); document.querySelector<HTMLButtonElement>("#accessibility-restore")?.focus({ preventScroll: true }); }}
        aria-label={he ? "הסתרת כפתור הנגישות. ניתן להחזיר בתחתית האתר" : "Hide accessibility button. Restore it in the footer"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-sm"><X size={17} aria-hidden /></button>
    </div>}
    <dialog ref={dialog} aria-labelledby={titleId} aria-describedby={descriptionId}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled)')];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }}
      className="accessibility-dialog m-auto max-h-[85dvh] w-[min(28rem,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-line bg-paper p-5 text-ink shadow-xl backdrop:bg-navy/50"
      onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close(); } }}
      onClose={() => restoreFocus.current?.focus({ preventScroll: true })}>
      <div className="flex items-start justify-between gap-3">
        <h2 id={titleId} className="text-xl font-bold">{he ? "אפשרויות נגישות" : "Accessibility options"}</h2>
        <button ref={closeButton} type="button" onClick={() => dialog.current?.close()} aria-label={he ? "סגירת אפשרויות נגישות" : "Close accessibility options"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line"><X size={22} aria-hidden /></button>
      </div>
      <p id={descriptionId} className="mt-3 text-sm text-ink-soft">{he ? "התאימו את התצוגה לנוחותכם. ההעדפות נשמרות בדפדפן כשאפשר." : "Adjust the display to suit you. Preferences are saved in this browser when available."}</p>
      <label className="mt-5 flex flex-wrap items-center justify-between gap-3 font-medium">
        {he ? "גודל טקסט" : "Text size"}
        <select value={settings.scale} onChange={(event) => { const scale = Number(event.currentTarget.value); setSettings((current) => ({ ...current, scale })); }} className="min-h-11 rounded-lg border border-line bg-paper p-2">
          {[100, 125, 150, 200].map((size) => <option key={size} value={size}>{size}%</option>)}
        </select>
      </label>
      <div className="mt-4 grid gap-3">
        {([
          ["contrast", he ? "ניגודיות גבוהה" : "High contrast"],
          ["links", he ? "הדגשת קישורים בקו תחתון" : "Underline links"],
          ["motion", he ? "צמצום תנועה" : "Reduce motion"],
        ] as const).map(([key, label]) => <label key={key} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-line p-3">
          <input type="checkbox" checked={settings[key]} onChange={(event) => { const checked = event.currentTarget.checked; setSettings((current) => ({ ...current, [key]: checked })); }} className="h-5 w-5 shrink-0 accent-accent-deep" />{label}
        </label>)}
      </div>
      <button type="button" onClick={() => setSettings(defaults)} className="mt-4 min-h-11 rounded-lg border border-line px-4 font-medium">{he ? "איפוס ההעדפות" : "Reset preferences"}</button>
      <a href="/accessibility/" className="mt-4 block py-2 text-accent underline">{he ? "הצהרת נגישות ויצירת קשר" : "Accessibility statement & contact"}</a>
    </dialog>
  </>;
}
