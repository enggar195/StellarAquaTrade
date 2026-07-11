import type { ReactNode } from "react";

export interface AuthSplitLayoutProps {
  showcase: ReactNode;
  panel: ReactNode;
}

/**
 * Full-height split-screen auth layout. Desktop: showcase left (~55%),
 * interactive panel right (~45%). Panel comes first in the DOM so the stacked
 * mobile layout shows Login first; `order` places the showcase left on desktop.
 */
export function AuthSplitLayout({ showcase, panel }: AuthSplitLayoutProps) {
  return (
    <div className="auth-split">
      <div className="auth-panel-col">{panel}</div>
      <div className="auth-showcase-col">{showcase}</div>
    </div>
  );
}
