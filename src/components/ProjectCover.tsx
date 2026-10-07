import type { Project } from "../types";
import { CalendarDays, Globe, LayoutDashboard, Mail, Users } from "lucide-react";

export function ProjectCover({ project }: { project: Project }) {
  if (!project.images.length) {
    const clinic = project.visual === "clinic";
    const Icon = clinic ? LayoutDashboard : Globe;
    return <div aria-hidden="true" className={`project-cover project-cover-${project.visual}`}>
      <div className="project-cover-orbit" />
      <div className="relative flex w-full flex-col items-center gap-4 px-6 text-center text-ink">
        <Icon size={36} strokeWidth={1.3} />
        <span className="font-display text-2xl font-bold"><bdi>{project.name}</bdi></span>
        {clinic ? <div className="flex items-center gap-5 text-accent"><Users size={20} /><CalendarDays size={20} /><Mail size={20} /></div> : <span className="text-sm tracking-widest text-ink-soft" dir="ltr">ornis.co.il</span>}
      </div>
    </div>;
  }
  const phone = project.visual === "green" || project.visual === "wine";
  const images = phone ? project.images.slice(0, 2) : [project.images[project.visual === "bi" ? 1 : 0] ?? project.images[0]];
  return <div aria-hidden="true" className={`project-cover project-cover-${project.visual}`}>
    <div className="project-cover-orbit" />
    <div className={phone ? "project-cover-phones" : "project-cover-browser"}>
      {images.filter(Boolean).map((image) => <div key={image.src} className={phone ? "project-cover-device" : "project-cover-screen"}>
        {!phone && <div className="project-cover-chrome"><i /><i /><i /><span>{project.name}</span></div>}
        <img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" decoding="async" draggable={false} />
      </div>)}
    </div>
  </div>;
}
