"use client";

import { useEffect, useRef } from "react";

import { AppLogo } from "@/components/atoms/app-logo";
import { IconButton } from "@/components/atoms/icon-button";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
import { NetworkBadge } from "@/components/molecules/network-badge";
import { RoleNavigation } from "@/components/organisms/role-navigation";
import { productConfig } from "@/config/product";
import type { Role } from "@/features/dashboard-shell/navigation";
import { useI18n } from "@/i18n/i18n-context";

export interface MobileNavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  role: Role;
}

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Mobile navigation drawer. Traps focus while open, closes on Escape or
 * backdrop click, restores focus to the trigger on close, and closes after a
 * navigation. Kept inert while closed.
 */
export function MobileNavigationDrawer({ open, onClose, role }: MobileNavigationDrawerProps) {
  const { dict, locale } = useI18n();
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const list = () => (panel ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)) : []);
    list()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = list();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreRef.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`mobile-drawer-root${open ? " open" : ""}`}>
      <div className="mobile-drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        className="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={dict.accessibility.mobileMenu}
        inert={!open}
      >
        <div className="drawer-head">
          <AppLogo name={productConfig.name} />
          <IconButton label={dict.dashboard.closeMenu} onClick={onClose}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </IconButton>
        </div>
        <div className="drawer-scroll">
          <RoleNavigation role={role} onNavigate={onClose} />
        </div>
        <div className="drawer-foot">
          <NetworkBadge />
          <LanguageSwitcher
            locale={locale}
            label={dict.languageSwitcher.label}
            ariaChange={dict.languageSwitcher.ariaChange}
          />
        </div>
      </div>
    </div>
  );
}
