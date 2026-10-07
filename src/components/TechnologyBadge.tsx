import {
  Atom,
  Braces,
  CalendarDays,
  ChartNoAxesCombined,
  Code2,
  Database,
  DatabaseZap,
  FileSpreadsheet,
  HardDrive,
  Mail,
  Newspaper,
  PanelsTopLeft,
  PlugZap,
  Server,
  Smartphone,
  Table2,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const technologies: Record<string, { icon: LucideIcon; tone: string }> = {
  React: { icon: Atom, tone: "cyan" },
  TypeScript: { icon: Braces, tone: "blue" },
  Supabase: { icon: Zap, tone: "emerald" },
  PostgreSQL: { icon: Database, tone: "indigo" },
  Flutter: { icon: PanelsTopLeft, tone: "sky" },
  Dart: { icon: Smartphone, tone: "teal" },
  PHP: { icon: Server, tone: "violet" },
  MySQL: { icon: Database, tone: "orange" },
  "Power BI": { icon: ChartNoAxesCombined, tone: "yellow" },
  "Google Apps Script": { icon: Workflow, tone: "yellow" },
  "Google Sheets": { icon: Table2, tone: "green" },
  "Google Drive": { icon: HardDrive, tone: "lime" },
  "Google Calendar": { icon: CalendarDays, tone: "blue" },
  Gmail: { icon: Mail, tone: "orange" },
  API: { icon: PlugZap, tone: "teal" },
  Hostinger: { icon: Server, tone: "violet" },
  WordPress: { icon: Newspaper, tone: "blue" },
  phpMyAdmin: { icon: DatabaseZap, tone: "orange" },
  Excel: { icon: FileSpreadsheet, tone: "forest" },
  HTML5: { icon: Code2, tone: "orange" },
  CSS3: { icon: PanelsTopLeft, tone: "blue" },
  JavaScript: { icon: Braces, tone: "yellow" },
  Server: { icon: Server, tone: "slate" },
};

export function TechnologyBadge({ name }: { name: string }) {
  const technology = technologies[name] ?? { icon: Code2, tone: "slate" };
  const Icon = technology.icon;
  return (
    <li className="technology-badge">
      <span className={`technology-icon technology-icon-${technology.tone}`} aria-hidden="true">
        <Icon size={20} strokeWidth={1.9} />
      </span>
      <bdi>{name}</bdi>
    </li>
  );
}
