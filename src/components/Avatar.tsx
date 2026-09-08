/** A closer crop of the hero portrait, legible at navigation sizes. */
export function Avatar({ size = 34 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full p-[2px]"
      style={{
        width: size,
        height: size,
        backgroundImage:
          "conic-gradient(from 210deg, var(--color-accent-2), var(--color-accent-light), var(--color-accent), var(--color-accent-deep), var(--color-accent-2))",
      }}
    >
      <span className="relative block h-full w-full overflow-hidden rounded-full border-2 border-paper bg-accent">
        <img
          src="/alon-portrait.jpg"
          alt="Alon Hanin"
          width={size}
          height={size}
          className="absolute left-0 top-0 h-full w-full origin-[47%_10%] scale-[2.3] object-cover"
        />
      </span>
    </span>
  );
}
