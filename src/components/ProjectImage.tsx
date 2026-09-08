import type { Project } from "../types";

const backgrounds: Record<Project["visual"], string> = {
  wine: "bg-[#fbf7ff]",
  property: "bg-[#edf5f2]",
  green: "bg-[#f5faf5]",
  bi: "bg-[#edf3fc]",
  cats: "bg-[#faf3ee]",
};

export function ProjectImage({ project, expanded = false, compact = false }: { project: Project; expanded?: boolean; compact?: boolean }) {
  const image = project.images[0];
  if (!image) return null;

  if (compact) return (
    <div className={`flex min-h-36 items-center justify-center overflow-hidden p-2 sm:h-44 sm:p-4 ${backgrounds[project.visual]}`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="max-h-32 w-full object-contain sm:max-h-36" />
    </div>
  );

  return (
    <figure className={`flex h-full min-w-0 flex-col ${backgrounds[project.visual]}`}>
      <div className={`flex flex-1 items-center justify-center p-5 sm:p-8 ${expanded ? "min-h-0" : project.featured ? "min-h-[260px] lg:min-h-[400px]" : "min-h-[220px]"}`}>
        {project.visual === "wine" || project.visual === "green" ? (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className={`h-auto w-auto max-w-full object-contain ${expanded ? "max-h-[60vh]" : project.visual === "wine" ? "max-h-[340px]" : "max-h-[320px]"}`}
          />
        ) : (
          <div className="w-full overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_14px_35px_-20px_rgba(10,14,26,0.4)]">
            <div aria-hidden className="flex h-7 items-center gap-1.5 border-b border-ink/5 bg-white px-3" dir="ltr">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/10" />
            </div>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        )}
      </div>
      <figcaption className="px-5 pb-4 text-center text-[11px] leading-relaxed text-ink-soft sm:px-8">
        {image.caption}
      </figcaption>
    </figure>
  );
}
