"use client";

import { usePathname } from "next/navigation";

import { NavigationSectionLabel } from "@/components/molecules/navigation-section-label";
import { SidebarNavItem } from "@/components/molecules/sidebar-nav-item";
import { NAVIGATION, navItemHref, type Role } from "@/features/dashboard-shell/navigation";
import { useI18n } from "@/i18n/i18n-context";

export interface RoleNavigationProps {
  role: Role;
  collapsed?: boolean;
  onNavigate?: () => void;
}

/**
 * Renders the sidebar navigation for a role from the typed config. Resolves
 * localized labels, active state (by pathname), and the collapsed/coming-soon
 * tooltip text. No duplicated JSX — the config drives everything.
 */
export function RoleNavigation({ role, collapsed = false, onNavigate }: RoleNavigationProps) {
  const { dict, locale } = useI18n();
  const pathname = usePathname();
  const nav = dict.navigation;

  return (
    <nav className="role-nav" aria-label={dict.accessibility.sidebar}>
      {NAVIGATION[role].map((section) => (
        <div className="nav-section" key={section.sectionKey}>
          <NavigationSectionLabel label={nav.sections[section.sectionKey]} collapsed={collapsed} />
          <ul className="nav-list">
            {section.items.map((item) => {
              const href = navItemHref(item, locale);
              const label = nav[item.labelKey];
              const comingSoon = item.status === "coming-soon";
              const active = href !== null && pathname === href;
              const tip = collapsed ? label : comingSoon ? dict.dashboard.comingSoonTooltip : undefined;
              return (
                <li key={item.labelKey}>
                  <SidebarNavItem
                    label={label}
                    icon={item.icon}
                    href={href ?? undefined}
                    active={active}
                    comingSoon={comingSoon}
                    comingSoonTooltip={dict.dashboard.comingSoonTooltip}
                    collapsed={collapsed}
                    tip={tip}
                    onNavigate={onNavigate}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
