interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 block font-body text-xs font-semibold tracking-[0.14em] text-wine">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-bold leading-[1.15] text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}
