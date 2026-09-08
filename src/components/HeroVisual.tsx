import { FileSpreadsheet, MessageCircle, Mail, StickyNote, Check } from "lucide-react";

const scattered = [
  { label: "Excel", icon: FileSpreadsheet, rotate: -6, x: "6%", y: "0%", delay: "0ms" },
  { label: "WhatsApp", icon: MessageCircle, rotate: 4, x: "58%", y: "6%", delay: "90ms" },
  { label: "מייל", icon: Mail, rotate: -3, x: "0%", y: "42%", delay: "180ms" },
  { label: "פתקים", icon: StickyNote, rotate: 7, x: "62%", y: "46%", delay: "270ms" },
];

const rows = ["לקוחות", "הזמנות", "משימות"];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative h-56">
        {scattered.map(({ label, icon: Icon, rotate, x, y, delay }) => (
          <div
            key={label}
            className="absolute flex animate-[settle_0.7s_ease-out_backwards] items-center gap-2 rounded-lg border border-line bg-paper-raised px-3.5 py-2.5 text-sm text-ink-soft shadow-sm"
            style={{
              insetInlineStart: x,
              top: y,
              transform: `rotate(${rotate}deg)`,
              animationDelay: delay,
            }}
          >
            <Icon size={16} className="text-muted" />
            {label}
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[0_1px_2px_rgba(34,27,23,0.06),0_16px_32px_-8px_rgba(34,27,23,0.14)]">
        <div className="h-1.5 w-full bg-wine" />
        <div className="flex items-center gap-2 px-5 pt-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-wine/10 text-wine">
            <Check size={14} />
          </span>
          <span className="font-display text-base font-bold text-ink">
            המערכת שלך
          </span>
        </div>
        <ul className="flex flex-col gap-2.5 px-5 py-4">
          {rows.map((row) => (
            <li
              key={row}
              className="flex items-center justify-between rounded-md border border-line-soft bg-paper px-3.5 py-2.5 text-sm text-ink-soft"
            >
              <span>{row}</span>
              <span className="h-2 w-2 rounded-full bg-brass" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
