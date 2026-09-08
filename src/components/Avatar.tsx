/**
 * Instagram-style "story ring" avatar: a conic gradient in the site's blue
 * accent family, a thin paper-colored gap, then the photo itself with a
 * light color grade so its outdoor background sits with the site's cool
 * palette instead of clashing against it.
 */
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
      <span className="flex h-full w-full items-center justify-center rounded-full bg-paper p-[2px]">
        <img
          src="/avatar.jpg"
          alt="Alon Hanin"
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
          style={{ filter: "saturate(0.82) contrast(1.06) brightness(0.99) hue-rotate(-8deg)" }}
        />
      </span>
    </span>
  );
}
