"use client";

import { useState, type ReactNode } from "react";

import { AppSidebar } from "@/components/organisms/app-sidebar";
import { AppTopbar } from "@/components/organisms/app-topbar";
import type { Crumb } from "@/components/organisms/breadcrumbs";
import { MobileNavigationDrawer } from "@/components/organisms/mobile-navigation-drawer";
import type { Role } from "@/features/dashboard-shell/navigation";

export interface DashboardLayoutProps {
  role: Role;
  breadcrumbs: Crumb[];
  children: ReactNode;
}

/**
 * Reusable authenticated-application frame: sidebar + topbar + mobile drawer +
 * content. Owns only the shell UI state (sidebar collapse, mobile drawer). No
 * auth, no data.
 */
export function DashboardLayout({ role, breadcrumbs, children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={`dashboard-shell${collapsed ? " sidebar-collapsed" : ""}`}>
      <AppSidebar role={role} collapsed={collapsed} onToggleCollapse={() => setCollapsed((value) => !value)} />

      <div className="shell-main">
        <AppTopbar breadcrumbs={breadcrumbs} onOpenDrawer={() => setDrawerOpen(true)} />
        <main className="shell-content" id="main-content">
          {children}
        </main>
      </div>

      <MobileNavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} role={role} />
    </div>
  );
}
