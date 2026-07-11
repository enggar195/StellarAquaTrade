import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Render a plain anchor (e.g. external) instead of a Next.js Link. */
  external?: boolean;
}

/** Inline aqua text link. Uses next/link for internal navigation. */
export function TextLink({ href, children, external = false, className, ...props }: TextLinkProps) {
  const classes = `aq-textlink${className ? ` ${className}` : ""}`;

  if (external) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
