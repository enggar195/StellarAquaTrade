import type { Dictionary } from "../get-dictionary";

export const en: Dictionary = {
  navigation: {
    sections: {
      primary: "Overview",
      supply: "Supply",
      trade: "Trade",
      operations: "Operations",
      management: "Management",
      configuration: "Configuration",
      monitoring: "Monitoring",
      web3: "Web3",
      system: "System",
    },
    dashboard: "Dashboard",
    operationsDashboard: "Operations Dashboard",
    fishCatalog: "Fish Catalog",
    fishBatches: "Fish Batches",
    privateCatalog: "Private Catalog",
    rfqs: "RFQs",
    quotations: "Quotations",
    tradeOrders: "Trade Orders",
    packing: "Packing",
    shipments: "Shipments",
    arrivalInspection: "Arrival Inspection",
    claims: "Claims",
    companies: "Companies",
    documentVerification: "Document Verification",
    masterData: "Master Data",
    systemConfiguration: "System Configuration",
    auditMonitoring: "Audit & Monitoring",
    notifications: "Notifications",
    companyProfile: "Company Profile",
    testXlm: "Test XLM",
  },
  languageSwitcher: {
    label: "Language",
    ariaChange: "Change language",
  },
  common: {
    explain: "Explain {title}",
  },
  dashboard: {
    prototypeLabel: "Prototype Workspace",
    workspaceName: "AquaTrade Workspace",
    roleLabel: "Buyer",
    userName: "Demo User",
    userRole: "Buyer · Prototype",
    pageTitle: "Dashboard",
    breadcrumbHome: "Home",
    bannerTitle: "Prototype application shell",
    bannerBody:
      "This is the reusable AquaTrade application frame. Business dashboard modules (metrics, tables, charts) will be added in the next slicing tasks — no live data is connected yet.",
    comingSoon: "Coming soon",
    comingSoonTooltip: "This module belongs to a future implementation phase and is not available yet.",
    collapseSidebar: "Collapse sidebar",
    expandSidebar: "Expand sidebar",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    notifications: "Notifications",
    notificationsNote: "Notifications are a prototype placeholder — no live alerts.",
    companySwitcher: "Workspace",
    userMenu: "Account",
    shellStatus: {
      title: "Shell status",
      body: "The application frame, navigation, responsive layout, and multilingual support are ready. Business data is not connected yet.",
      tooltip:
        "The application frame, navigation, responsive layout, and multilingual support are available, while business data is not yet connected.",
    },
    availableNow: {
      title: "Available now",
      tooltip: "Frontend modules that are currently implemented and safe to access.",
      items: ["Login UI", "Test XLM", "Multilingual navigation", "Responsive application shell"],
    },
    comingNext: {
      title: "Coming next",
      tooltip: "Buyer and Exporter dashboard content will be built in separate slicing tasks.",
      items: ["Buyer Dashboard", "Exporter Dashboard"],
    },
  },
  accessibility: {
    primaryNav: "Primary",
    sidebar: "Sidebar navigation",
    mobileMenu: "Mobile navigation",
    breadcrumb: "Breadcrumb",
  },
  auth: {
    eyebrow: "Secure access",
    heading: "Sign in to your trade workspace",
    subtitle:
      "Access your AquaTrade account, review your trade activity, and continue your Stellar Testnet White Belt journey.",
    brand: {
      name: "AquaTrade Pay",
      subtitle: "Stellar Testnet · White Belt L1",
    },
    showcase: {
      tagline:
        "Trusted cross-border fish trade, powered by transparent workflow and Stellar Testnet learning.",
      description:
        "AquaTrade helps exporters and international buyers coordinate ornamental fish batches, documents, shipments, and payment learning flows in one calm, traceable workspace.",
      chips: [
        "Fish Batch Passport",
        "RFQ & Quotation",
        "Shipment Tracking",
        "Arrival Inspection",
        "DOA Claim",
        "Testnet Payment",
      ],
    },
    form: {
      title: "Sign in",
      emailLabel: "Work email",
      emailPlaceholder: "name@company.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      showPassword: "Show password",
      hidePassword: "Hide password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      signIn: "Sign in",
      signingIn: "Signing in…",
      noAccount: "New to AquaTrade?",
      createAccount: "Create account",
      prototypeMessage:
        "Authentication service will be connected in a future business-MVP phase.",
    },
    testnet: {
      title: "Testnet information",
      networkLabel: "Network",
      networkValue: "Stellar Testnet",
      stageLabel: "Program stage",
      stageValue: "White Belt L1",
      scopeLabel: "Payment scope",
      scopeValue: "Direct Testnet XLM",
      futureLabel: "Future scope",
      futureValue: "Smart-contract escrow",
    },
    trust: {
      title: "Trust note",
      items: [
        "No seed phrase required",
        "Wallet connection happens on Test XLM",
        "Testnet only — no real asset value",
      ],
    },
    testXlmLink: "Open the public Test XLM page",
    tooltips: {
      loginForm:
        "This form is AquaTrade account authentication UI and is separate from Stellar wallet signing. Real authentication is not connected in the current frontend slicing stage.",
      testnetInfo:
        "The active White Belt network is Stellar Testnet. Testnet XLM has no monetary value, and the current payment scope is a direct Testnet transfer rather than escrow.",
      trustNote:
        "AquaTrade never asks for a seed phrase or secret key. Freighter wallet connection happens on the public Test XLM page.",
    },
  },
  validation: {
    emailRequired: "Enter your work email.",
    emailInvalid: "Enter a valid email address.",
    passwordRequired: "Enter your password.",
  },
};
