"use client";

import { IconButton } from "@/components/atoms/icon-button";
import { Separator } from "@/components/atoms/separator";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
import { NetworkBadge } from "@/components/molecules/network-badge";
import { Breadcrumbs, type Crumb } from "@/components/organisms/breadcrumbs";
import { CompanySwitcherPlaceholder } from "@/components/organisms/company-switcher-placeholder";
import { NotificationButtonPlaceholder } from "@/components/organisms/notification-button-placeholder";
import { UserMenuPlaceholder } from "@/components/organisms/user-menu-placeholder";
import { useI18n } from "@/i18n/i18n-context";

export interface AppTopbarProps {
  breadcrumbs: Crumb[];
  onOpenDrawer: () => void;
}

/** Application topbar: mobile trigger + breadcrumbs (left); network, language, and placeholders (right). */
export function AppTopbar({ breadcrumbs, onOpenDrawer }: AppTopbarProps) {
  const { dict, locale } = useI18n();

  return (
    <header className="app-topbar">
      <IconButton className="mobile-menu-trigger" label={dict.dashboard.openMenu} onClick={onOpenDrawer}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </IconButton>

      <div className="topbar-breadcrumbs">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <div className="topbar-spacer" />

      <div className="topbar-network">
        <NetworkBadge />
      </div>
      <div className="topbar-lang">
        <LanguageSwitcher
          locale={locale}
          label={dict.languageSwitcher.label}
          ariaChange={dict.languageSwitcher.ariaChange}
        />
      </div>
      <NotificationButtonPlaceholder />
      <Separator orientation="vertical" className="topbar-sep" />
      <CompanySwitcherPlaceholder />
      <UserMenuPlaceholder />
    </header>
  );
}
