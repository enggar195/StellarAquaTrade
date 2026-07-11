# Claude Task Prompt — Build AquaTrade Dashboard Application Shell

## Objective

Create the reusable AquaTrade authenticated-application shell that will be used by Buyer Dashboard, Exporter Dashboard, Admin Dashboard, and future business pages.

This task is focused only on:

- reusable application layout;
- responsive sidebar and topbar;
- multilingual navigation;
- role-aware menu configuration;
- active-route handling;
- mobile navigation;
- Storybook coverage;
- accessibility;
- safe integration with the existing Login and public Test XLM pages.

This task must **not** implement the final Buyer Dashboard metrics, Exporter Dashboard metrics, backend authentication, API integration, or real permissions.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

The existing Test XLM page and Login page already exist or are being implemented.

Your task is to build only the reusable AquaTrade Dashboard Application Shell.

Do not implement the final Buyer Dashboard or Exporter Dashboard content in this task.

==================================================
1. READ PROJECT DOCUMENTATION FIRST
==================================================

Read these files before changing code:

1. CLAUDE.md, if it exists
2. docs/README.md
3. docs/00-white-belt/00-LEVEL-1-SCOPE.md
4. docs/00-white-belt/01-ACCEPTANCE-CRITERIA.md
5. docs/01-blueprint/CLAUDE-START-HERE.md
6. docs/01-blueprint/ux-design/08-UX-STRATEGY.md
7. docs/01-blueprint/ux-design/09-INFORMATION-ARCHITECTURE.md
8. docs/01-blueprint/ux-design/11-PAGE-INVENTORY.md
9. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
10. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
11. docs/01-blueprint/handoff/22-CLAUDE-TASK-SLICE-LOGIN-PAGE.md, if present
12. This task file

Treat White Belt scope as the highest-priority source of truth.

==================================================
2. PROTECT EXISTING PAGES
==================================================

Before modifying code, inspect:

- existing Test XLM routes;
- existing Login routes;
- current i18n implementation;
- current Atomic Design component structure;
- current Storybook configuration;
- current routing conventions;
- current shared Button, Tooltip, LanguageSwitcher, Logo, GlassCard, and navigation components.

Do not:

- change Test XLM business logic;
- change Freighter integration;
- change XLM transaction behavior;
- gate Test XLM behind Login;
- create fake authentication;
- create fake tokens or sessions;
- remove the existing Login page;
- redesign Test XLM;
- duplicate components that already exist.

==================================================
3. TARGET ROUTES
==================================================

Create these dashboard-shell routes:

- /en/dashboard
- /id/dashboard
- /zh-CN/dashboard

The dashboard route is a frontend prototype shell.

Do not create real authentication middleware.

Do not redirect users from Dashboard to Login automatically unless a documented existing mechanism already exists and is explicitly safe.

Because backend authentication is not yet implemented, show a clear prototype-state label such as:

- Prototype Workspace
- Ruang Kerja Prototipe
- 原型工作区

Do not imply that a real authenticated session exists.

==================================================
4. APPLICATION SHELL RESPONSIBILITY
==================================================

The shell must provide:

- desktop sidebar;
- collapsible sidebar;
- mobile drawer navigation;
- topbar;
- breadcrumb area;
- page title area;
- content container;
- role-aware navigation configuration;
- language switcher;
- Testnet badge where relevant;
- notifications button placeholder;
- user/company menu placeholder;
- responsive behavior;
- active route indication;
- coming-soon state for unimplemented pages.

The shell must be reusable by future pages.

==================================================
5. ATOMIC DESIGN — MANDATORY
==================================================

Use or adapt the repository structure:

src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── features/
│   └── dashboard-shell/
└── app/
    └── [locale]/
        └── (app)/
            └── dashboard/
                └── page.tsx

Do not build the entire shell as one component.

Recommended components:

ATOMS
- AppLogo
- IconButton
- Badge
- StatusDot
- Separator
- AvatarFallback
- TooltipTrigger
- NavIcon

MOLECULES
- NavigationItem
- NavigationSectionLabel
- BreadcrumbItem
- TopbarAction
- CompanyIdentity
- UserIdentity
- LocaleMenuItem
- ComingSoonBadge
- NetworkBadge

ORGANISMS
- AppSidebar
- AppTopbar
- MobileNavigationDrawer
- Breadcrumbs
- PageHeader
- CompanySwitcherPlaceholder
- UserMenuPlaceholder
- NotificationButtonPlaceholder
- RoleNavigation

TEMPLATES
- DashboardLayout
- DashboardContentLayout

PAGE COMPOSITION
- DashboardShellPage

Reuse current LanguageSwitcher, GlassCard, Tooltip, Button, and Logo components when available.

==================================================
6. STORYBOOK — MANDATORY
==================================================

Use the existing Storybook setup.

Create stories for at least:

- NavigationItem
- NavigationSectionLabel
- ComingSoonBadge
- NetworkBadge
- CompanyIdentity
- UserIdentity
- Breadcrumbs
- PageHeader
- AppSidebar
- AppTopbar
- MobileNavigationDrawer
- DashboardLayout
- RoleNavigation

Required variants where applicable:

- Default
- Active
- Hover
- Disabled
- ComingSoon
- Collapsed
- Expanded
- Mobile
- English
- BahasaIndonesia
- SimplifiedChinese
- LongIndonesianText
- ChineseLabels
- KeyboardFocus

Use actual i18n providers in Storybook.

Do not hardcode translated labels only inside stories.

==================================================
7. INTERNATIONALIZATION
==================================================

Supported locales:

- en
- id
- zh-CN

Language names:

- English
- Bahasa Indonesia
- 简体中文

Requirements:

- use the existing i18n framework;
- do not hardcode user-facing text;
- preserve the current dashboard path when changing language;
- update html lang correctly;
- localize navigation labels;
- localize tooltip text;
- localize prototype-state text;
- localize mobile menu labels;
- localize accessibility labels.

Recommended namespaces:

- navigation
- dashboard
- common
- tooltip
- accessibility

==================================================
8. DASHBOARD SHELL VISUAL STYLE
==================================================

Use AquaTrade Oceanic Enterprise Glassmorphism.

The shell must feel:

- premium;
- calm;
- global;
- operational;
- high-tech;
- readable;
- not like a crypto exchange;
- not like a gaming dashboard.

Base styling:

- dark ocean background;
- navy translucent sidebar;
- subtle aqua/cyan highlights;
- restrained indigo glow;
- strong readable text contrast;
- soft glass borders;
- minimal decorative background noise.

Recommended layout:

- expanded sidebar: approximately 260 px;
- collapsed sidebar: approximately 76 px;
- topbar: approximately 68 px;
- content max width: approximately 1600 px;
- desktop content padding: 24 px;
- mobile content padding: 16 px.

==================================================
9. SIDEBAR REQUIREMENTS
==================================================

Desktop sidebar:

- fixed or sticky within viewport;
- full height;
- collapsible;
- logo and product name at top;
- navigation grouped by section;
- active route clearly visible;
- icon and label;
- tooltip for collapsed icon-only state;
- bottom section for Test XLM and settings/help placeholders;
- company or workspace identity area;
- prototype-state badge.

Collapsed sidebar:

- icons remain visible;
- labels hidden;
- active state remains visible;
- accessible tooltips show item labels;
- collapse control remains keyboard accessible.

Do not use a hard bright border.
Use a subtle glass boundary and glow.

==================================================
10. TOPBAR REQUIREMENTS
==================================================

Topbar must include:

Left side:
- mobile menu trigger;
- breadcrumb or current section;
- page title context.

Right side:
- network badge:
  Stellar Testnet
- language switcher;
- notifications placeholder button;
- company switcher placeholder;
- user menu placeholder.

Important:

- do not imply live notifications;
- do not imply real authenticated identity;
- placeholder menus must be explicitly labeled prototype/demo where necessary;
- no fake unread counts unless clearly marked as sample data.

==================================================
11. ROLE-AWARE NAVIGATION CONFIGURATION
==================================================

Create navigation as typed configuration, not duplicated JSX.

Recommended role type:

- buyer
- exporter
- admin

The shell must support role-based menu configuration.

Do not implement real authorization.

Use one clearly documented prototype/default role, preferably:

- buyer

A developer-only role-preview mechanism may be created in Storybook or local development configuration.

Do not expose a fake production role switcher unless the design explicitly labels it as prototype/demo.

==================================================
12. BUYER MENU CONFIGURATION
==================================================

Buyer navigation:

PRIMARY
- Dashboard

TRADE
- Fish Catalog
- RFQs
- Quotations
- Trade Orders

OPERATIONS
- Shipments
- Arrival Inspection
- Claims

WEB3
- Test XLM

SYSTEM
- Notifications
- Company Profile

Recommended canonical keys:

- navigation.dashboard
- navigation.fishCatalog
- navigation.rfqs
- navigation.quotations
- navigation.tradeOrders
- navigation.shipments
- navigation.arrivalInspection
- navigation.claims
- navigation.testXlm
- navigation.notifications
- navigation.companyProfile

==================================================
13. EXPORTER MENU CONFIGURATION
==================================================

Exporter navigation:

PRIMARY
- Dashboard

SUPPLY
- Fish Batches
- Private Catalog

TRADE
- RFQs
- Quotations
- Trade Orders

OPERATIONS
- Packing
- Shipments
- Claims

WEB3
- Test XLM

SYSTEM
- Notifications
- Company Profile

Recommended canonical keys:

- navigation.dashboard
- navigation.fishBatches
- navigation.privateCatalog
- navigation.rfqs
- navigation.quotations
- navigation.tradeOrders
- navigation.packing
- navigation.shipments
- navigation.claims
- navigation.testXlm
- navigation.notifications
- navigation.companyProfile

==================================================
14. ADMIN MENU CONFIGURATION
==================================================

Admin navigation:

PRIMARY
- Operations Dashboard

MANAGEMENT
- Companies
- Document Verification
- Shipments
- Claims

CONFIGURATION
- Master Data
- System Configuration

MONITORING
- Audit & Monitoring

WEB3
- Test XLM

Recommended canonical keys:

- navigation.operationsDashboard
- navigation.companies
- navigation.documentVerification
- navigation.shipments
- navigation.claims
- navigation.masterData
- navigation.systemConfiguration
- navigation.auditMonitoring
- navigation.testXlm

==================================================
15. IMPLEMENTED VS COMING SOON MENU STATE
==================================================

At this stage:

Implemented:
- Dashboard shell route
- Login
- Test XLM

Future/Coming Soon:
- Fish Catalog
- Fish Batches
- Private Catalog
- RFQs
- Quotations
- Trade Orders
- Packing
- Shipments
- Arrival Inspection
- Claims
- Companies
- Document Verification
- Master Data
- System Configuration
- Audit & Monitoring
- Company Profile
- Notifications

For future items:

- render a disabled or Coming Soon state;
- do not create misleading empty production pages;
- do not use href="#";
- do not navigate to broken routes;
- provide a translated tooltip explaining that the module belongs to a future implementation phase.

==================================================
16. TEST XLM NAVIGATION
==================================================

Test XLM remains an active and working link.

Locale-aware destinations:

- /en/test-xlm
- /id/test-xlm
- /zh-CN/test-xlm

Labels:

- Test XLM
- Uji XLM
- XLM 测试

Do not create separate Wallet, Balance, Payment, or Transaction menu items.

==================================================
17. DASHBOARD SHELL CONTENT AREA
==================================================

The dashboard route should show only a neutral shell-preview page.

Do not implement final dashboard KPI cards or charts.

Suggested preview content:

- page title:
  Dashboard
- prototype-state banner;
- short text explaining that business dashboard modules will be added in the next slicing task;
- one compact “Shell Status” card;
- one compact “Available Now” card listing:
  - Login UI
  - Test XLM
  - Multilingual navigation
  - Responsive application shell
- one compact “Coming Next” card listing:
  - Buyer Dashboard
  - Exporter Dashboard

Every information card must include a visible top-right ? tooltip.

Do not use real business numbers.

Do not invent trade metrics.

==================================================
18. CARD TOOLTIP REQUIREMENT
==================================================

Every information card in the dashboard-shell preview must have a visible ? icon.

Tooltips must support:

- hover;
- keyboard focus;
- mobile tap;
- Escape close;
- accessible label;
- visible focus ring.

Example tooltip meanings:

SHELL STATUS
Explains that the application frame, navigation, responsive layout, and multilingual support are available, while business data is not yet connected.

AVAILABLE NOW
Explains which frontend modules are currently implemented and safe to access.

COMING NEXT
Explains that Buyer and Exporter dashboard content will be built in separate slicing tasks.

==================================================
19. RESPONSIVE BEHAVIOR
==================================================

Desktop:

- expanded sidebar;
- collapsible state;
- topbar remains visible;
- content uses responsive max width.

Tablet:

- sidebar may collapse by default;
- topbar actions remain usable;
- long labels do not overflow.

Mobile:

- sidebar becomes a drawer;
- hamburger menu opens drawer;
- drawer closes after selecting an active route;
- Test XLM link remains available;
- language switcher remains available;
- topbar actions use accessible compact layout;
- no horizontal overflow;
- content padding approximately 16 px.

==================================================
20. ACCESSIBILITY
==================================================

Required:

- semantic nav element;
- accessible sidebar label;
- active route uses aria-current="page";
- collapse button has accessible name;
- mobile drawer traps focus;
- Escape closes drawer;
- focus returns to menu trigger;
- tooltips work by keyboard;
- icons are not the sole label in expanded state;
- collapsed icon-only navigation has accessible names;
- color is not the only active-state indicator;
- language switcher remains accessible;
- minimum touch targets;
- reduced-motion preference respected;
- adequate contrast.

==================================================
21. PERFORMANCE
==================================================

Requirements:

- do not overuse backdrop blur;
- use one main shell background layer;
- avoid unnecessary page-level animation;
- use transform for sidebar transition;
- respect reduced motion;
- avoid heavy decorative assets;
- keep navigation configuration static and typed;
- avoid rerendering the entire shell on trivial state changes.

==================================================
22. TESTS
==================================================

Add tests where practical for:

- /en/dashboard renders;
- /id/dashboard renders;
- /zh-CN/dashboard renders;
- locale switching preserves /dashboard;
- buyer menu configuration;
- exporter menu configuration;
- admin menu configuration;
- active route state;
- Test XLM link is locale-aware;
- Coming Soon items do not navigate;
- sidebar collapse behavior;
- mobile drawer open/close behavior;
- Escape closes mobile drawer;
- aria-current on active item;
- prototype-state label is visible;
- no final business KPI data is rendered.

Do not remove or weaken Test XLM or Login tests.

==================================================
23. QUALITY COMMANDS
==================================================

Run:

pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook

Do not report completion while any command is failing.

==================================================
24. ACCEPTANCE CRITERIA
==================================================

ROUTES
- [ ] /en/dashboard works
- [ ] /id/dashboard works
- [ ] /zh-CN/dashboard works
- [ ] Login remains available
- [ ] Test XLM remains public and working

ARCHITECTURE
- [ ] Atomic Design is used
- [ ] shell is reusable
- [ ] navigation is configuration-driven
- [ ] role menu types are explicit
- [ ] no monolithic shell component
- [ ] no duplicate LanguageSwitcher, Tooltip, Button, or Logo components

SIDEBAR
- [ ] expanded state works
- [ ] collapsed state works
- [ ] active route is visible
- [ ] collapsed items have accessible tooltips
- [ ] Coming Soon items are disabled safely
- [ ] Test XLM is an active locale-aware link

TOPBAR
- [ ] language switcher exists
- [ ] Stellar Testnet badge exists
- [ ] notification placeholder is clearly non-live
- [ ] company/user placeholders do not imply real authentication

RESPONSIVE
- [ ] desktop shell works
- [ ] tablet collapsed behavior works
- [ ] mobile drawer works
- [ ] no horizontal overflow
- [ ] focus management works

I18N
- [ ] English labels exist
- [ ] Indonesian labels exist
- [ ] Simplified Chinese labels exist
- [ ] language switch preserves dashboard route
- [ ] no new hardcoded user-facing labels

STORYBOOK
- [ ] navigation component stories exist
- [ ] sidebar stories exist
- [ ] topbar stories exist
- [ ] mobile drawer stories exist
- [ ] locale variants exist
- [ ] collapsed and expanded variants exist

SCOPE
- [ ] no real authentication added
- [ ] no backend/API integration added
- [ ] no Buyer Dashboard metrics added
- [ ] no Exporter Dashboard metrics added
- [ ] no fake trade data added

QUALITY
- [ ] lint passes
- [ ] typecheck passes
- [ ] tests pass
- [ ] production build passes
- [ ] Storybook build passes

==================================================
25. FINAL REPORT FORMAT
==================================================

Report:

1. Documentation read
2. Existing Login/Test XLM protection check
3. Implementation plan
4. Files created
5. Files modified
6. Components reused
7. New atoms
8. New molecules
9. New organisms
10. New templates
11. Navigation configuration created
12. Role configurations created
13. Routes created
14. Translation keys added
15. Storybook stories created
16. Tests created or updated
17. Commands run and results
18. Desktop validation
19. Tablet validation
20. Mobile validation
21. Accessibility validation
22. Known limitations
23. Confirmation that Buyer and Exporter dashboard content was not started

Do not continue to Buyer Dashboard or Exporter Dashboard after this task.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 23-CLAUDE-TASK-BUILD-DASHBOARD-SHELL.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/23-CLAUDE-TASK-BUILD-DASHBOARD-SHELL.md

Protect the existing Login and Test XLM pages.
Do not continue to Buyer Dashboard or Exporter Dashboard.
```
