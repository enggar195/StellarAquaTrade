import type { ReactNode } from "react";

import { IconButton } from "@/components/atoms/icon-button";

export interface TopbarActionProps {
  label: string;
  children: ReactNode;
  /** Show a small non-live indicator dot (clearly a prototype placeholder). */
  indicator?: boolean;
  onClick?: () => void;
}

/** A topbar icon action (notifications, etc.). Placeholder — never live. */
export function TopbarAction({ label, children, indicator = false, onClick }: TopbarActionProps) {
  return (
    <span className="topbar-action-wrap">
      <IconButton className="topbar-action" label={label} onClick={onClick}>
        {children}
      </IconButton>
      {indicator && <span className="topbar-action-dot" aria-hidden="true" />}
    </span>
  );
}
