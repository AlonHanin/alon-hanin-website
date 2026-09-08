import { FileSpreadsheet, MessageCircle, Mail, StickyNote, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const scattered = [
  { id: "excel", icon: FileSpreadsheet, rotate: -6, x: "6%", y: "0%", delay: "0ms" },
  { id: "whatsapp", icon: MessageCircle, rotate: 4, x: "58%", y: "6%", delay: "90ms" },
  { id: "email", icon: Mail, rotate: -3, x: "0%", y: "42%", delay: "180ms" },
  { id: "notes", icon: StickyNote, rotate: 7, x: "62%", y: "46%", delay: "270ms" },
];

const copy = {
  en: {
    labels: { excel: "Excel", whatsapp: "WhatsApp", email: "Email", notes: "Notes" },
    system: "Your system",
    rows: ["Customers", "Orders", "Tasks"],
  },
  he: {
    labels: { excel: "Excel", whatsapp: "WhatsApp", email: "מייל", notes: "פתקים" },
    system: "המערכת שלך",
    rows: ["לקוחות", "הזמנות", "משימות"],
  },
};

export function HeroVisual() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative h-56">
        {scattered.map(({ id, icon: Icon, rotate, x, y, delay }) => (
          <div
            key={id}
            className="absolute flex animate-[settle_0.7s_ease-out_backwards] items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white/80 backdrop-blur-sm"
            style={{
              insetInlineStart: x,
              top: y,
              transform: `rotate(${rotate}deg)`,
              animationDelay: delay,
            }}
          >
            <Icon size={16} className="text-accent-light" />
            {t.labels[id as keyof typeof t.labels]}
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_24px_48px_-12px_rgba(47,111,237,0.35)] backdrop-blur-md">
        <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent-light to-accent-2" />
        <div className="flex items-center gap-2 px-5 pt-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent-light">
            <Check size={14} />
          </span>
          <span className="font-display text-base font-bold text-white">
            {t.system}
          </span>
        </div>
        <ul className="flex flex-col gap-2.5 px-5 py-4">
          {t.rows.map((row) => (
            <li
              key={row}
              className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white/75"
            >
              <span>{row}</span>
              <span className="h-2 w-2 rounded-full bg-accent-2" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
