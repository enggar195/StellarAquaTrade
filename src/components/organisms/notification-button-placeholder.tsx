"use client";

import { TopbarAction } from "@/components/molecules/topbar-action";
import { useI18n } from "@/i18n/i18n-context";

/** Non-live notifications placeholder. No real alerts, no unread counts. */
export function NotificationButtonPlaceholder() {
  const { dict } = useI18n();
  return (
    <TopbarAction label={`${dict.dashboard.notifications} — ${dict.dashboard.notificationsNote}`} indicator>
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    </TopbarAction>
  );
}
