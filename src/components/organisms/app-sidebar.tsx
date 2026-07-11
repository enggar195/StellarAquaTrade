"use client";

import { AppLogo } from "@/components/atoms/app-logo";
import { IconButton } from "@/components/atoms/icon-button";
import { StatusDot } from "@/components/atoms/status-dot";
import { RoleNavigation } from "@/components/organisms/role-navigation";
import { productConfig } from "@/config/product";
import type { Role } from "@/features/dashboard-shell/navigation";
import { useI18n } from "@/i18n/i18n-context";

export interface AppSidebarProps {
  role: Role;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

/** Desktop sidebar: brand, prototype badge, role navigation, collapse control. */
export function AppSidebar({ role, collapsed, onToggleCollapse }: AppSidebarProps) {
  const { dict } = useI18n();

  return (
    <aside className={`app-sidebar${collapsed ? " collapsed" : ""}`} aria-label={dict.accessibility.sidebar}>
      <div className="sidebar-head">
        <AppLogo name={productConfig.name} compact={collapsed} />
      </div>

      <div className="sidebar-proto" title={dict.dashboard.prototypeLabel}>
        <StatusDot tone="prototype" pulse />
        {!collapsed && <span>{dict.dashboard.prototypeLabel}</span>}
      </div>

      <div className="sidebar-scroll">
        <RoleNavigation role={role} collapsed={collapsed} />
      </div>

      <div className="sidebar-foot">
        <IconButton
          className="collapse-btn"
          label={collapsed ? dict.dashboard.expandSidebar : dict.dashboard.collapseSidebar}
          aria-expanded={!collapsed}
          onClick={onToggleCollapse}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </IconButton>
      </div>
    </aside>
  );
}
