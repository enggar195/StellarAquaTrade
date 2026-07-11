"use client";

import { UserIdentity } from "@/components/molecules/user-identity";
import { useI18n } from "@/i18n/i18n-context";

/** User identity shown in the topbar. Prototype — no real authenticated session. */
export function UserMenuPlaceholder() {
  const { dict } = useI18n();
  return (
    <div
      className="topbar-identity user"
      aria-label={`${dict.dashboard.userMenu} — ${dict.dashboard.prototypeLabel}`}
      title={dict.dashboard.prototypeLabel}
    >
      <UserIdentity name={dict.dashboard.userName} role={dict.dashboard.userRole} />
    </div>
  );
}
