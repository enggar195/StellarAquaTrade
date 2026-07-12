import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { id } from "./dictionaries/id";
import { zhCN } from "./dictionaries/zh-CN";

/**
 * Localized copy for the shell, the Test XLM navigation, and the Login page
 * slice. The stable Stellar White Belt components keep their existing copy on
 * purpose — only newly introduced UI is translated here.
 */
export interface Dictionary {
  navigation: {
    /** Section group labels. */
    sections: {
      primary: string;
      supply: string;
      trade: string;
      operations: string;
      management: string;
      configuration: string;
      monitoring: string;
      web3: string;
      system: string;
    };
    dashboard: string;
    operationsDashboard: string;
    fishCatalog: string;
    fishBatches: string;
    privateCatalog: string;
    rfqs: string;
    quotations: string;
    tradeOrders: string;
    packing: string;
    shipments: string;
    arrivalInspection: string;
    claims: string;
    companies: string;
    documentVerification: string;
    masterData: string;
    systemConfiguration: string;
    auditMonitoring: string;
    notifications: string;
    companyProfile: string;
    testXlm: string;
  };
  languageSwitcher: {
    label: string;
    ariaChange: string;
  };
  common: {
    /** aria template, "{title}" is replaced with the card title. */
    explain: string;
  };
  dashboard: {
    prototypeLabel: string;
    workspaceName: string;
    roleLabel: string;
    userName: string;
    userRole: string;
    pageTitle: string;
    breadcrumbHome: string;
    bannerTitle: string;
    bannerBody: string;
    comingSoon: string;
    comingSoonTooltip: string;
    collapseSidebar: string;
    expandSidebar: string;
    openMenu: string;
    closeMenu: string;
    notifications: string;
    notificationsNote: string;
    companySwitcher: string;
    userMenu: string;
    shellStatus: { title: string; body: string; tooltip: string };
    availableNow: { title: string; tooltip: string; items: string[] };
    comingNext: { title: string; tooltip: string; items: string[] };
  };
  accessibility: {
    primaryNav: string;
    sidebar: string;
    mobileMenu: string;
    breadcrumb: string;
  };
  buyerDashboard: {
    title: string;
    subtitle: string;
    createRfq: string;
    prototypeBanner: { title: string; body: string };
    criticalBanner: { title: string; body: string; action: string };
    kpi: {
      activeRfqs: { label: string; support: string; tooltip: string };
      awaitingFunding: { label: string; support: string; tooltip: string };
      shipmentsInTransit: { label: string; support: string; tooltip: string };
      arrivalInspectionDue: { label: string; support: string; tooltip: string };
      openClaims: { label: string; support: string; tooltip: string };
      tradeSpend: { label: string; support: string; tooltip: string; badge: string };
    };
    units: { trades: string; xlm: string; count: string };
    charts: {
      loading: string;
      empty: string;
      error: string;
      period6m: string;
      currentStatus: string;
      tradeActivity: { title: string; tooltip: string; seriesRfqs: string; seriesConfirmed: string; summary: string; source: string };
      shipmentStatus: { title: string; tooltip: string; totalLabel: string; summary: string; source: string };
    };
    shipmentStatuses: { preparing: string; inTransit: string; arrived: string; delayed: string };
    months: { jan: string; feb: string; mar: string; apr: string; may: string; jun: string };
    actionTable: {
      title: string;
      tooltip: string;
      empty: string;
      invitedExporters: string;
      headers: {
        priority: string;
        reference: string;
        exporter: string;
        requiredAction: string;
        deadline: string;
        status: string;
        action: string;
      };
    };
    priorities: { high: string; medium: string; low: string };
    requiredActions: {
      completeArrivalInspection: string;
      completeFundingEvidence: string;
      compareQuotations: string;
      reviewExporterResponse: string;
    };
    actionStatuses: { inspectionPending: string; awaitingFunding: string; responses: string; negotiating: string };
    rowActions: { review: string; compare: string };
    relative: { today: string; tomorrow: string; yesterday: string };
    txTable: {
      title: string;
      tooltip: string;
      empty: string;
      openTestXlm: string;
      notAvailable: string;
      network: string;
      headers: {
        time: string;
        type: string;
        recipient: string;
        amount: string;
        network: string;
        status: string;
        hash: string;
      };
    };
    txType: { testPayment: string };
    txStatus: { successful: string; failed: string };
  };
  auth: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    brand: {
      name: string;
      subtitle: string;
    };
    showcase: {
      tagline: string;
      description: string;
      chips: string[];
    };
    form: {
      title: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      showPassword: string;
      hidePassword: string;
      rememberMe: string;
      forgotPassword: string;
      signIn: string;
      signingIn: string;
      noAccount: string;
      createAccount: string;
      prototypeMessage: string;
    };
    testnet: {
      title: string;
      networkLabel: string;
      networkValue: string;
      stageLabel: string;
      stageValue: string;
      scopeLabel: string;
      scopeValue: string;
      futureLabel: string;
      futureValue: string;
    };
    trust: {
      title: string;
      items: string[];
    };
    testXlmLink: string;
    tooltips: {
      loginForm: string;
      testnetInfo: string;
      trustNote: string;
    };
  };
  validation: {
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en,
  id,
  "zh-CN": zhCN,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Interpolate a "{title}"-style template (used for tooltip aria labels). */
export function formatTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}
