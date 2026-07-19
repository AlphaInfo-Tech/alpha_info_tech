import type { ReactNode } from "react";

export type IconProps = {
  className?: string;
  size?: number;
};

const GRADIENT_ID = "ai-icon-accent-gradient";

/**
 * Shared shell: every icon references the same static gradient id.
 * Safe because all instances use identical stops/coordinates, so
 * duplicate ids across icons on one page resolve to an equivalent
 * gradient regardless of which element the browser picks.
 */
export function GradientIcon({
  size = 28,
  className = "",
  children,
}: IconProps & { children: (gradientId: string) => ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={GRADIENT_ID} x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="var(--color-accent-400)" />
          <stop offset="100%" stopColor="var(--color-accent-600)" />
        </linearGradient>
      </defs>
      {children(GRADIENT_ID)}
    </svg>
  );
}
