# Claude Task Prompt — Move Existing White Belt Page to Test XLM

## Objective

Move the current working AquaTrade White Belt page into a dedicated, locale-aware **Test XLM** page without changing or breaking its existing Stellar behavior.

This is a **safe migration and routing task**, not a redesign task.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

Your task is to safely move the current working White Belt page into a dedicated locale-aware Test XLM route while preserving all existing behavior.

Do not start Login, Dashboard, or other business pages in this task.

==================================================
1. READ PROJECT DOCUMENTATION FIRST
==================================================

Read these files before changing code:

1. docs/README.md
2. docs/00-white-belt/00-LEVEL-1-SCOPE.md
3. docs/00-white-belt/01-ACCEPTANCE-CRITERIA.md
4. docs/00-white-belt/02-ROADMAP.md
5. docs/01-blueprint/CLAUDE-START-HERE.md
6. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
7. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
8. CLAUDE.md, if it exists

Treat the White Belt scope and acceptance criteria as the highest-priority source of truth.

==================================================
2. INSPECT THE CURRENT IMPLEMENTATION
==================================================

Before modifying files, inspect and report:

- current route that renders the working White Belt page;
- current page/component file;
- current wallet-related hooks and services;
- current Freighter integration;
- current Stellar SDK usage;
- current Horizon/Testnet configuration;
- current balance-fetch logic;
- current Friendbot funding logic;
- current payment form and schema;
- current transaction-signing and submission flow;
- current transaction result component;
- current tests;
- current i18n implementation, if any;
- current Storybook configuration, if any.

Do not guess the existing structure.

Create a short migration plan based on the actual repository before editing.

==================================================
3. PRESERVE CURRENT WORKING BEHAVIOR
==================================================

The current page is already working.

Preserve the following behavior exactly:

- Freighter detection;
- wallet connect;
- app-side wallet disconnect;
- Stellar Testnet network validation;
- connected public G-address display;
- native XLM balance retrieval and display;
- Friendbot/Testnet funding;
- recipient-address validation;
- positive amount validation;
- maximum seven XLM decimal places;
- transaction construction;
- signing inside Freighter;
- submission to Stellar Testnet;
- success feedback;
- failure feedback;
- user-rejected-signature feedback;
- transaction hash display;
- explorer link;
- balance refresh after transaction, if currently implemented.

Do not alter business logic unless a change is strictly required for routing.

Do not:

- rewrite the Stellar integration;
- change SDK versions;
- replace Freighter libraries;
- change environment-variable names;
- change Horizon or RPC URLs;
- change transaction-building logic;
- change payment validation behavior;
- implement escrow;
- implement backend authentication;
- implement database integration;
- add a worker;
- gate Test XLM behind Login;
- rename XLM to XML;
- redesign the existing White Belt interface in this task.

==================================================
4. TARGET ROUTES
==================================================

Create these routes:

- /en/test-xlm
- /id/test-xlm
- /zh-CN/test-xlm

Canonical feature route:

- /test-xlm within the locale segment

The current root page must redirect safely to:

- /en/test-xlm

Do not create authentication middleware or redirect Test XLM to Login.

==================================================
5. MENU AND LOCALIZED LABELS
==================================================

Create one primary White Belt navigation menu:

Translation key:

navigation.testXlm

Labels:

- en: Test XLM
- id: Uji XLM
- zh-CN: XLM 测试

Do not create separate primary navigation menus for:

- Wallet
- Balance
- Payment
- Transaction

These remain sections inside one Test XLM page.

==================================================
6. TARGET COMPONENT STRUCTURE
==================================================

Adapt the exact paths to the repository if aliases or conventions differ, but target this structure:

src/
├── app/
│   ├── page.tsx
│   └── [locale]/
│       └── (public)/
│           └── test-xlm/
│               └── page.tsx
│
├── features/
│   └── test-xlm/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── schemas/
│       ├── types/
│       └── test-xlm-page.tsx
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
└── i18n/

Important:

- The route page must remain thin.
- Existing Stellar logic must remain in its current hooks/services where possible.
- Do not move code only for cosmetic folder conformity if doing so adds risk.
- Prefer extracting the existing page composition into:
  src/features/test-xlm/test-xlm-page.tsx
- Reuse current components instead of recreating them.

Expected thin route example:

import { TestXlmPage } from "@/features/test-xlm/test-xlm-page";

export default function Page() {
  return <TestXlmPage />;
}

Adjust async locale handling to the actual Next.js version and existing project conventions.

==================================================
7. INTERNATIONALIZATION
==================================================

Supported locales:

- en
- id
- zh-CN

Default and fallback locale:

- en

Requirements:

- preserve the active Test XLM route when changing language;
- add a reusable language switcher;
- display language names:
  - English
  - Bahasa Indonesia
  - 简体中文
- do not use flags as the only language indicator;
- update the html lang attribute correctly;
- use translation keys for all newly introduced shell, menu, and language-switcher text;
- do not force a risky full translation rewrite of stable Stellar components in this migration task;
- if the project already has i18n, extend the current implementation;
- if no i18n exists, introduce the smallest stable locale-routing setup needed for these three routes.

Do not hardcode the new menu labels in page components.

==================================================
8. ATOMIC DESIGN AND STORYBOOK
==================================================

All newly introduced shared UI must follow Atomic Design.

Likely new reusable components:

Atoms:
- IconButton
- LocaleBadge, if needed

Molecules:
- LanguageSwitcher
- NavigationItem

Organisms:
- PublicHeader or PublicNavigation, only if required

Templates:
- PublicPageLayout or TestXlmLayout, only if genuinely reusable

Do not refactor the entire existing White Belt page into Atomic Design during this task.

Create Storybook stories for newly introduced reusable components when Storybook is already configured or can be added without destabilizing the migration.

Minimum useful stories:

LanguageSwitcher:
- English
- BahasaIndonesia
- SimplifiedChinese
- Open
- KeyboardFocus

NavigationItem:
- Default
- Active
- Disabled
- LongLabel

If Storybook is not currently configured, report that clearly. Do not turn Storybook setup into the main scope of this migration unless project documentation explicitly requires it now.

==================================================
9. SAFE MIGRATION SEQUENCE
==================================================

Use this sequence:

1. Identify and preserve the current working page.
2. Extract or reuse its page composition as TestXlmPage.
3. Create the new locale-aware Test XLM route.
4. Confirm the new English route renders the existing page.
5. Add Indonesian and Simplified Chinese route handling.
6. Add localized Test XLM navigation.
7. Add root redirect to /en/test-xlm.
8. Run all existing tests.
9. Run a production build.
10. Only after the new route is proven working, remove obsolete duplicate route code if safe.

Do not delete the original working implementation before the new route compiles and tests pass.

==================================================
10. REQUIRED TESTS
==================================================

Preserve all current tests.

Add tests where practical for:

- root redirect target;
- supported locale validation;
- localized Test XLM menu labels;
- language switch preserving /test-xlm;
- TestXlmPage rendering;
- no Login redirect for the Test XLM route.

Do not mock away the existing validation-schema tests.

Manual regression checklist:

- open /en/test-xlm;
- open /id/test-xlm;
- open /zh-CN/test-xlm;
- connect Freighter;
- disconnect Freighter;
- display Testnet network state;
- display G-address;
- display XLM balance;
- fund an unfunded Testnet account;
- submit a successful Testnet XLM transaction;
- display transaction hash;
- reject a signature and verify a clear error;
- refresh the page and verify the route remains valid;
- change locale and verify the Test XLM page remains active.

==================================================
11. REQUIRED QUALITY COMMANDS
==================================================

Run:

pnpm lint
pnpm typecheck
pnpm test
pnpm build

If Storybook already exists, also run:

pnpm build-storybook

Do not report completion if any command fails.

If a command fails:

- diagnose it;
- fix only issues related to this migration;
- report unrelated pre-existing failures separately.

==================================================
12. ACCEPTANCE CRITERIA
==================================================

The task is complete only when:

- [ ] /en/test-xlm renders the current White Belt functionality
- [ ] /id/test-xlm renders the same functionality
- [ ] /zh-CN/test-xlm renders the same functionality
- [ ] root redirects to /en/test-xlm
- [ ] Test XLM is public and not Login-gated
- [ ] Freighter detection still works
- [ ] wallet connect still works
- [ ] wallet disconnect still works
- [ ] wrong-network handling still works
- [ ] XLM balance still works
- [ ] Friendbot funding still works
- [ ] Testnet payment still works
- [ ] user rejection is handled
- [ ] transaction success/failure is displayed
- [ ] transaction hash and explorer link are displayed
- [ ] one localized Test XLM menu exists
- [ ] there are no separate Wallet/Balance/Payment primary menus
- [ ] locale switching preserves the page
- [ ] new shared UI follows Atomic Design
- [ ] relevant Storybook stories exist when Storybook is available
- [ ] lint passes
- [ ] typecheck passes
- [ ] tests pass
- [ ] production build passes

==================================================
13. FINAL REPORT FORMAT
==================================================

At completion, report:

1. Repository inspection summary
2. Migration plan used
3. Files created
4. Files moved
5. Files modified
6. Files removed, if any
7. Routes created
8. Translation keys added
9. Components reused
10. New reusable components
11. Storybook stories created
12. Tests added or updated
13. Commands run and results
14. Manual regression results
15. Existing behavior intentionally preserved
16. Risks or unresolved issues

Do not continue to Login, Dashboard, or any other page after completing this task.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 21-CLAUDE-TASK-MOVE-EXISTING-PAGE-TO-TEST-XLM.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/21-CLAUDE-TASK-MOVE-EXISTING-PAGE-TO-TEST-XLM.md

Do not continue to Login or Dashboard.
```
