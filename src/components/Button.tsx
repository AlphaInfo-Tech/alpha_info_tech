import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";

const shells: Record<Variant, string> = {
  primary: "bg-ink text-white",
  secondary: "bg-surface-dim text-ink border border-black/10",
};

const iconBoxes: Record<Variant, string> = {
  primary: "bg-gradient-to-br from-accent-400 to-accent-600 text-white",
  secondary: "bg-white text-ink border border-black/10",
};

function Content({ variant, children }: { variant: Variant; children: ReactNode }) {
  return (
    <>
      <span className="px-6 py-3 text-sm font-semibold">{children}</span>
      <span
        className={`flex h-full items-center justify-center px-3 ${iconBoxes[variant]}`}
      >
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </span>
    </>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-stretch overflow-hidden rounded-lg transition-transform duration-150 hover:-translate-y-0.5 ${shells[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <Content variant={variant}>{children}</Content>
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      <Content variant={variant}>{children}</Content>
    </button>
  );
}
