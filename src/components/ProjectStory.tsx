import { useLanguage } from "../i18n/LanguageContext";
import type { Project } from "../types";
import { ProjectGallery } from "./ProjectGallery";
import { CTAButton } from "./Button";
import { TechnologyBadge } from "./TechnologyBadge";
import { services } from "../data/services";

export function ProjectStory({ project, inDialog = false, titleId }: { project: Project; inDialog?: boolean; titleId?: string }) {
  const { lang } = useLanguage();
  const he = lang === "he";
  const Heading = inDialog ? "h2" : "h1";
  const Subheading = inDialog ? "h3" : "h2";
  const relatedService = services[lang].find((service) => service.id === project.relatedServiceId);
  const technologies = [...new Set([...project.stack, ...(project.integrations ?? [])])];
  return <div className={`project-story ${inDialog ? "project-story-dialog" : ""}`}>
    {inDialog && <ProjectGallery project={project} />}
    <div className={inDialog ? "project-story-content" : ""}>
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <p className="font-semibold text-accent"><bdi>{project.name}</bdi></p>
      {project.status === "in-development" && <span className="rounded-full bg-paper-raised px-3 py-1 text-xs text-ink-soft">{he ? "בפיתוח" : "In development"}</span>}
    </div>
    <Heading id={titleId} className="mt-3 text-pretty font-display text-2xl font-bold sm:text-3xl">{project.category}</Heading>
    <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{project.headline}</p>
    {!inDialog && <ProjectGallery project={project} />}
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <section><Subheading className="font-semibold">{he ? "הבעיה" : "Problem"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</p></section>
      <section><Subheading className="font-semibold">{he ? "המערכת והפתרון" : "System / Solution"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.solution}</p></section>
      <section><Subheading className="font-semibold">{he ? "דרך היישום" : "Implementation approach"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.scope}</p></section>
      {project.result && <section><Subheading className="font-semibold">{he ? "התוצאה והמצב הנוכחי" : "Result and current status"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.result}</p></section>}
      {project.existingWorkflow && <section><Subheading className="font-semibold">{he ? "תהליך העבודה הקודם" : "Existing workflow"}</Subheading><p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.existingWorkflow}</p></section>}
      {project.requirements && project.requirements.length > 0 && <section><Subheading className="font-semibold">{he ? "דרישות" : "Requirements"}</Subheading><ul className="mt-2 list-disc space-y-1 ps-5 text-sm leading-relaxed text-ink-soft">{project.requirements.map((item) => <li key={item}>{item}</li>)}</ul></section>}
    </div>
    <section className="mt-6 border-t border-line-soft pt-5">
      <Subheading className="text-sm font-semibold">{he ? "בתוך המערכת" : "Inside the product"}</Subheading>
      <ul className="mt-3 flex flex-wrap gap-2">{project.capabilities.map((item) => <li key={item} className="rounded-lg bg-paper-raised px-3 py-2 text-sm text-ink-soft">{item}</li>)}</ul>
    </section>
    {technologies.length > 0 && <section className="mt-6 border-t border-line-soft pt-5">
      <Subheading className="text-sm font-semibold">{he ? "טכנולוגיות וחיבורים בפרויקט" : "Technologies and integrations"}</Subheading>
      <ul className="mt-3 flex flex-wrap gap-2.5">{technologies.map((item) => <TechnologyBadge key={item} name={item} />)}</ul>
    </section>}
    {project.architectureDiagram && <section className="mt-6 border-t border-line-soft pt-5">
      <Subheading className="text-sm font-semibold">{he ? "תרשים ארכיטקטורה או תהליך" : "Architecture or process diagram"}</Subheading>
      <figure className="mt-3 overflow-hidden rounded-xl border border-line bg-paper-raised p-3">
        <img src={project.architectureDiagram.src} alt={project.architectureDiagram.alt} width={project.architectureDiagram.width} height={project.architectureDiagram.height} loading="lazy" decoding="async" className="h-auto w-full object-contain" />
        {project.architectureDiagram.caption && <figcaption className="mt-2 text-center text-xs text-muted">{project.architectureDiagram.caption}</figcaption>}
      </figure>
    </section>}
    {relatedService && <p className="mt-5 text-sm text-ink-soft">
      {he ? "תחום שירות רלוונטי: " : "Related service: "}
      <a href={`/services/#${relatedService.id}`} className="font-semibold text-accent underline underline-offset-4">{relatedService.title}</a>
    </p>}
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-raised p-5">
      <p className="font-medium">{he ? "יש לכם תהליך דומה שצריך לפשט?" : "Have a similar workflow to simplify?"}</p>
      <CTAButton href={project.cta?.href ?? "/contact/"}>{project.cta?.label ?? (he ? "נדבר על הפרויקט שלכם" : "Let's discuss your project")}</CTAButton>
    </div>
    </div>
  </div>;
}
