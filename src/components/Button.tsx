import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-wine text-paper-raised hover:bg-wine-deep",
  secondary:
    "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  ghost: "text-ink-soft hover:text-ink",
};

export function CTAButton({
  variant = "primary",
  className = "",
  children,
  ...rest
}: CTAButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
