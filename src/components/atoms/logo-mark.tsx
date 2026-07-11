export interface LogoMarkProps {
  size?: number;
  className?: string;
}

/** AquaTrade droplet logo mark. Decorative — labeling belongs to the brand block. */
export function LogoMark({ size = 46, className }: LogoMarkProps) {
  return (
    <span
      className={`brand-mark${className ? ` ${className}` : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 4 11 4 16a8 8 0 0 0 16 0c0-5-8-14-8-14Z" />
      </svg>
    </span>
  );
}
