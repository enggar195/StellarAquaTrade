import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export type Role = "buyer" | "exporter" | "admin";

export const ROLES: Role[] = ["buyer", "exporter", "admin"];

/** Prototype default role — no real authorization is implemented. */
export const DEFAULT_ROLE: Role = "buyer";

export type NavStatus = "active" | "coming-soon";

export type NavIconName =
  | "dashboard"
  | "catalog"
  | "batch"
  | "rfq"
  | "quotation"
  | "order"
  | "packing"
  | "shipment"
  | "inspection"
  | "claim"
  | "xlm"
  | "notification"
  | "company"
  | "companies"
  | "document"
  | "masterData"
  | "config"
  | "audit";

/** Item label keys (all keys of navigation except the `sections` group). */
export type NavLabelKey = Exclude<keyof Dictionary["navigation"], "sections">;
export type SectionKey = keyof Dictionary["navigation"]["sections"];

/** Active items link to an existing route; coming-soon items do not navigate. */
export type NavRoute = "dashboard" | "exporter-dashboard" | "fish-batches" | "test-xlm";

const ROUTE_PATHS: Record<NavRoute, string> = {
  dashboard: "dashboard",
  "exporter-dashboard": "exporter/dashboard",
  "fish-batches": "exporter/fish-batches",
  "test-xlm": "test-xlm",
};

export interface NavItem {
  labelKey: NavLabelKey;
  icon: NavIconName;
  status: NavStatus;
  route?: NavRoute;
}

export interface NavSection {
  sectionKey: SectionKey;
  items: NavItem[];
}

const active = (labelKey: NavLabelKey, icon: NavIconName, route: NavRoute): NavItem => ({
  labelKey,
  icon,
  status: "active",
  route,
});

const soon = (labelKey: NavLabelKey, icon: NavIconName): NavItem => ({
  labelKey,
  icon,
  status: "coming-soon",
});

const TEST_XLM = active("testXlm", "xlm", "test-xlm");

/**
 * Role-aware navigation configuration. Data-driven (not duplicated JSX) so the
 * shell can render any role and future items flip from coming-soon to active by
 * changing this config only.
 */
export const NAVIGATION: Record<Role, NavSection[]> = {
  buyer: [
    { sectionKey: "primary", items: [active("dashboard", "dashboard", "dashboard")] },
    {
      sectionKey: "trade",
      items: [
        soon("fishCatalog", "catalog"),
        soon("rfqs", "rfq"),
        soon("quotations", "quotation"),
        soon("tradeOrders", "order"),
      ],
    },
    {
      sectionKey: "operations",
      items: [soon("shipments", "shipment"), soon("arrivalInspection", "inspection"), soon("claims", "claim")],
    },
    { sectionKey: "web3", items: [TEST_XLM] },
    { sectionKey: "system", items: [soon("notifications", "notification"), soon("companyProfile", "company")] },
  ],
  exporter: [
    { sectionKey: "primary", items: [active("dashboard", "dashboard", "exporter-dashboard")] },
    {
      sectionKey: "supply",
      items: [active("fishBatches", "batch", "fish-batches"), soon("privateCatalog", "catalog")],
    },
    {
      sectionKey: "trade",
      items: [soon("rfqs", "rfq"), soon("quotations", "quotation"), soon("tradeOrders", "order")],
    },
    {
      sectionKey: "operations",
      items: [soon("packing", "packing"), soon("shipments", "shipment"), soon("claims", "claim")],
    },
    { sectionKey: "web3", items: [TEST_XLM] },
    { sectionKey: "system", items: [soon("notifications", "notification"), soon("companyProfile", "company")] },
  ],
  admin: [
    { sectionKey: "primary", items: [active("operationsDashboard", "dashboard", "dashboard")] },
    {
      sectionKey: "management",
      items: [
        soon("companies", "companies"),
        soon("documentVerification", "document"),
        soon("shipments", "shipment"),
        soon("claims", "claim"),
      ],
    },
    { sectionKey: "configuration", items: [soon("masterData", "masterData"), soon("systemConfiguration", "config")] },
    { sectionKey: "monitoring", items: [soon("auditMonitoring", "audit")] },
    { sectionKey: "web3", items: [TEST_XLM] },
  ],
};

/** Resolve an item's locale-aware href, or null for coming-soon items. */
export function navItemHref(item: NavItem, locale: Locale): string | null {
  if (item.status !== "active" || !item.route) return null;
  return `/${locale}/${ROUTE_PATHS[item.route]}`;
}
