import Link from "next/link";

import { NavIcon } from "@/components/atoms/nav-icon";
import { ComingSoonBadge } from "@/components/molecules/coming-soon-badge";
import type { NavIconName } from "@/features/dashboard-shell/navigation";

export interface SidebarNavItemProps {
  label: string;
  icon: NavIconName;
  href?: string;
  active?: boolean;
  comingSoon?: boolean;
  comingSoonLabel?: string;
  /** Explanation shown for coming-soon items (also the a11y title). */
  comingSoonTooltip?: string;
  collapsed?: boolean;
  /** Hover/focus bubble text (label when collapsed; explanation for coming-soon). */
  tip?: string;
  /** Close handler for the mobile drawer (fired on activating a real link). */
  onNavigate?: () => void;
}

/**
 * A single sidebar navigation row. Active items are real locale-aware links;
 * coming-soon items are focusable but non-navigating and safely disabled. The
 * label is always in the DOM (visually hidden when collapsed) so the accessible
 * name is correct in every state.
 */
export function SidebarNavItem({
  label,
  icon,
  href,
  active = false,
  comingSoon = false,
  comingSoonLabel,
  comingSoonTooltip,
  collapsed = false,
  tip,
  onNavigate,
}: SidebarNavItemProps) {
  const className = [
    "sidebar-item",
    active ? "active" : "",
    comingSoon ? "is-coming-soon" : "",
    collapsed ? "collapsed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="sidebar-item-icon">
        <NavIcon name={icon} />
      </span>
      <span className="sidebar-item-label">{label}</span>
      {comingSoon && !collapsed && comingSoonLabel && <ComingSoonBadge label={comingSoonLabel} />}
      {tip && (
        <span className="sidebar-tip" aria-hidden="true">
          {tip}
        </span>
      )}
    </>
  );

  if (href && !comingSoon) {
    return (
      <Link href={href} className={className} aria-current={active ? "page" : undefined} onClick={onNavigate}>
        {inner}
      </Link>
    );
  }

  return (
    <span className={className} role="link" aria-disabled="true" tabIndex={0} title={comingSoonTooltip}>
      {inner}
    </span>
  );
}
