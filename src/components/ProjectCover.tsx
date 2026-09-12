import type { Project } from "../types";

export function ProjectCover({ project }: { project: Project }) {
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
