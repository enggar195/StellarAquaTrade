import type { Dictionary } from "../get-dictionary";

export const en: Dictionary = {
  navigation: {
    testXlm: "Test XLM",
  },
  languageSwitcher: {
    label: "Language",
    ariaChange: "Change language",
  },
  common: {
    explain: "Explain {title}",
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
