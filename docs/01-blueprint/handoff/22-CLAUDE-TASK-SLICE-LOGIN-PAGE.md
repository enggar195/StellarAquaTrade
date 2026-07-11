# Claude Task Prompt — Slice AquaTrade Login Page

## Objective

Create the AquaTrade login page as a high-fidelity, multilingual, reusable frontend slice while preserving the already-working public **Test XLM** page.

This task is focused only on:

- reusable Atomic Design components;
- Storybook coverage;
- multilingual UI;
- responsive split-screen login page;
- premium port illustration;
- accessibility and reduced motion.

This task must **not** implement real authentication, backend integration, session management, or route protection.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

The existing White Belt Test XLM page has already been moved and must remain public and unchanged.

Your task is to implement only the AquaTrade Login page and the reusable frontend components required by that page.

Do not continue to Buyer Dashboard, Exporter Dashboard, or other business pages in this task.

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
7. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
8. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
9. docs/01-blueprint/handoff/17-FRONTEND-ATOMIC-DESIGN-AND-LOGIN-PROMPT.md, if present
10. This task file

Treat White Belt scope as the highest priority.

==================================================
2. PROTECT EXISTING TEST XLM
==================================================

Before modifying code:

- inspect the current Test XLM routes;
- confirm /en/test-xlm, /id/test-xlm, and /zh-CN/test-xlm exist;
- confirm root routing behavior;
- identify shared components already used by Test XLM;
- identify current i18n implementation;
- identify current Storybook setup.

Do not:

- change Stellar SDK logic;
- change Freighter integration;
- change XLM transaction logic;
- change Horizon or Friendbot integration;
- gate Test XLM behind Login;
- redirect Test XLM to Login;
- rename XLM to XML;
- merge Login and Test XLM into one page.

The Test XLM page must remain publicly accessible.

==================================================
3. LOGIN ROUTES
==================================================

Create:

- /en/login
- /id/login
- /zh-CN/login

The Login page is currently a frontend UI prototype.

Do not create authentication middleware.

Do not create a fake authenticated session.

Do not persist entered passwords.

Do not store credentials in localStorage, sessionStorage, cookies, or mock databases.

Do not redirect users as if authentication succeeded.

==================================================
4. INTERNATIONALIZATION
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
- preserve /login when language changes;
- update html lang correctly;
- place the reusable LanguageSwitcher on the page;
- use semantic translation keys;
- translate:
  - page labels;
  - heading;
  - body text;
  - fields;
  - placeholders;
  - validation messages;
  - card tooltips;
  - accessibility labels;
  - trust notes;
  - feature chips.

Recommended namespaces:

- auth
- common
- navigation
- tooltip
- validation

==================================================
5. ATOMIC DESIGN — MANDATORY
==================================================

Build reusable components before composing the page.

Use or adapt the repository structure:

src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── features/
│   └── auth/
└── app/
    └── [locale]/
        └── (public)/
            └── login/
                └── page.tsx

Do not implement the entire page as one monolithic component.

Recommended components:

ATOMS
- LogoMark
- Button
- IconButton
- Input
- Label
- Checkbox
- TextLink
- Chip
- Badge
- TooltipTrigger
- GradientHeading

MOLECULES
- FormField
- PasswordField
- HelpTooltip
- CardHeaderWithHelp
- RememberForgotRow
- FeatureChipRow
- LanguageSwitcher
- InfoLineItem
- LoginHelperNote

ORGANISMS
- GlassCard
- ProductBrandBlock
- AnimatedPortHero
- ShowcasePanel
- LoginFormCard
- TestnetInfoCard
- TrustNoteCard
- AuthIntroBlock
- AuthRightColumn

TEMPLATE
- AuthSplitLayout

PAGE COMPOSITION
- LoginPage

Reuse existing components when suitable.
Do not duplicate an existing Button, Input, Tooltip, LanguageSwitcher, or GlassCard component.

==================================================
6. STORYBOOK — MANDATORY FOR REUSABLE COMPONENTS
==================================================

Use the existing Storybook setup.

Create stories for at least:

- Button
- Input
- PasswordField
- Checkbox
- Chip
- HelpTooltip
- CardHeaderWithHelp
- GlassCard
- LanguageSwitcher
- FeatureChipRow
- LoginFormCard
- TestnetInfoCard
- TrustNoteCard
- AuthSplitLayout
- AnimatedPortHero, when practical

Required locale-sensitive story variants:

- English
- BahasaIndonesia
- SimplifiedChinese
- LongIndonesianText
- ChineseTooltip

Other useful variants:

- Default
- Focused
- Error
- Disabled
- Loading
- ReducedMotion
- Mobile

Use actual i18n providers in stories rather than hardcoded translated text.

If Storybook is not configured, report that before proceeding.
Do not silently skip it.

==================================================
7. PAGE LAYOUT
==================================================

Create a single-viewport full-height split-screen page.

Desktop:

- left showcase: approximately 55%;
- right interactive panel: approximately 45%;
- full viewport height;
- no unnecessary page scrolling.

Mobile/tablet narrow layout:

- stack vertically;
- interactive/login section appears first;
- showcase becomes a banner below;
- remove the vertical seam/divider;
- allow natural height when needed;
- keep the form usable at 320–375 px width.

==================================================
8. LEFT SHOWCASE PANEL
==================================================

The left section must be full-bleed.

Do not place the entire showcase inside a bordered hero card.

TOP BRAND BLOCK

Show:

- AquaTrade logo;
- product name: AquaTrade Pay;
- subtitle:
  STELLAR TESTNET · WHITE BELT L1

MIDDLE BACKGROUND ILLUSTRATION

Create a premium animated night-port illustration integrated into the full left section.

The main focus must be:

- one large majestic sea container ship;
- large hull;
- stacked colorful containers;
- bridge/superstructure;
- funnel with soft smoke;
- mast, small flag, and radar.

The port ambience must be clearly visible:

- quay/container cranes or CC operating;
- RTG equipment in the container yard;
- visible terminal lights and container stacks;
- a cargo aircraft flying in the sky.

Secondary atmospheric details:

- moon;
- stars;
- waves;
- rising bubbles;
- subtle underwater depth;
- limited fish or faint whale silhouette.

The illustration must feel:

- premium;
- calm;
- cinematic;
- high-tech;
- global logistics;
- not cartoonish;
- not toy-like;
- not overly busy.

MOTION

Use subtle organic motion:

- slow ship bobbing;
- slight horizontal drift;
- soft wave movement;
- gentle bubbles;
- subtle crane/terminal activity where practical;
- slow cargo aircraft movement.

Prefer lightweight SVG, layered CSS, or a similarly efficient implementation.

Do not use autoplay video.

Respect prefers-reduced-motion.

For reduced motion:

- stop or greatly simplify decorative animation;
- keep the composition visually complete.

Mark the decorative illustration as hidden from assistive technology.

BOTTOM VALUE BLOCK

Use:

Tagline:
Trusted cross-border fish trade, powered by transparent workflow and Stellar Testnet learning.

Description:
AquaTrade helps exporters and international buyers coordinate ornamental fish batches, documents, shipments, and payment learning flows in one calm, traceable workspace.

Feature chips:

- Fish Batch Passport
- RFQ & Quotation
- Shipment Tracking
- Arrival Inspection
- DOA Claim
- Testnet Payment

All text must come from translation keys.

SCRIMS

Add:

- top dark fading scrim;
- bottom dark fading scrim;

The scrims must keep text readable without hiding the illustration.

==================================================
9. RIGHT INTERACTIVE PANEL
==================================================

Use a vertically centered content area.

Maximum content width:

- approximately 500 px.

Content order:

1. language switcher;
2. eyebrow;
3. large heading;
4. subtitle;
5. LoginFormCard;
6. TestnetInfoCard;
7. TrustNoteCard.

Suggested English copy:

Eyebrow:
SECURE ACCESS

Heading:
Sign in to your trade workspace

Subtitle:
Access your AquaTrade account, review your trade activity, and continue your Stellar Testnet White Belt journey.

All content must be translated.

==================================================
10. GLASSMORPHISM
==================================================

Use Oceanic Enterprise Glassmorphism.

Base colors:

- #04101a
- #0a1c2e
- #22d3ee
- #7de3f4
- #6366f1

Glass card guidance:

- dark translucent surface;
- backdrop blur around 16–24 px;
- thin semi-transparent border;
- subtle inner highlight;
- soft deep shadow;
- radius around 18 px;
- readable WCAG-conscious contrast.

Do not create bright white frosted cards that clash with the dark theme.

Global background may include:

- subtle cyan radial glow;
- subtle indigo/purple radial glow;
- faint grid;
- restrained bubbles.

==================================================
11. COLUMN SEAM
==================================================

Do not use a hard vertical divider.

Create a refined transition:

- illustration fades softly at the right edge;
- ocean color bleeds slightly into the interactive panel;
- add a subtle aqua-to-indigo hairline glow;
- keep the transition professional and restrained.

Remove this effect in stacked/mobile layout.

==================================================
12. CARD HELP TOOLTIPS
==================================================

Every card must have a visible top-right ? help icon.

At minimum:

- LoginFormCard
- TestnetInfoCard
- TrustNoteCard

Tooltip behavior:

- mouse hover;
- keyboard focus;
- mobile tap;
- Escape closes;
- visible focus ring;
- portal rendering if needed to avoid clipping;
- aria-label:
  Explain <card title>

Tooltip meaning examples:

LOGIN FORM
Explains that this form is AquaTrade account authentication UI and is separate from Stellar wallet signing. Real authentication is not connected in the current frontend slicing stage.

TESTNET INFO
Explains that the active White Belt network is Stellar Testnet, Testnet XLM has no monetary value, and current payment scope is a direct Testnet transfer rather than escrow.

TRUST NOTE
Explains that AquaTrade never asks for a seed phrase or secret key, and Freighter wallet connection happens on the public Test XLM page.

All tooltip content must be localized.

==================================================
13. LOGIN FORM
==================================================

Fields:

- Work Email
- Password

Controls:

- show/hide password;
- Remember me;
- Forgot password?;
- Sign in;
- Create account link.

Placeholders:

- name@company.com
- Enter your password

Required client-side states:

- default;
- focused;
- validation error;
- invalid email;
- empty password;
- loading visual state;
- disabled state;
- prototype submission information state.

Important:

- do not call a real authentication API;
- do not fake a successful login;
- do not create a fake token;
- do not store credentials;
- do not redirect as if login succeeded.

On valid form submission:

- prevent default;
- show a localized neutral informational message such as:
  “Authentication service will be connected in a future business-MVP phase.”
- keep the entered password only in component memory until the component unmounts;
- do not log form values.

==================================================
14. TESTNET INFO CARD
==================================================

Display:

- Network: Stellar Testnet
- Program Stage: White Belt L1
- Payment Scope: Direct Testnet XLM
- Future Scope: Smart-contract escrow

This card is informational only.

Use status badges where appropriate.

Do not add a wallet-connect button here.

Wallet interaction belongs to Test XLM.

==================================================
15. TRUST NOTE CARD
==================================================

Show:

- No seed phrase required
- Wallet connection happens on Test XLM
- Testnet only — no real asset value

Use a compact glass card.

==================================================
16. NAVIGATION RELATIONSHIP
==================================================

The Login page must include a visible link to the public Test XLM page.

Localized destination remains:

- /en/test-xlm
- /id/test-xlm
- /zh-CN/test-xlm

Changing language from Login must preserve /login.

Do not change the root route away from the current White Belt decision unless existing project documentation explicitly says otherwise.

==================================================
17. ACCESSIBILITY
==================================================

Required:

- semantic form element;
- explicit labels;
- proper autocomplete attributes;
- password visibility button with accessible name;
- keyboard navigation;
- visible focus state;
- language switcher accessible name;
- help icons keyboard accessible;
- decorative illustration aria-hidden;
- reduced motion support;
- adequate contrast;
- no essential information available only through animation or tooltip;
- no flags as the only language indicator.

Recommended autocomplete:

- email: username
- password: current-password

==================================================
18. PERFORMANCE
==================================================

Requirements:

- avoid autoplay video;
- avoid large blocking assets;
- optimize SVG/illustration layers;
- avoid excessive blur surfaces;
- use transform/opacity for animation;
- avoid layout-thrashing animation;
- lazy-load non-critical decorative assets when appropriate;
- keep the login interaction responsive.

==================================================
19. TESTS
==================================================

Add tests where practical for:

- all three login routes render;
- language switch preserves /login;
- form validation;
- password visibility toggle;
- prototype submission message;
- no credential persistence;
- link to Test XLM uses the current locale;
- help tooltip keyboard interaction;
- reduced-motion behavior where testable;
- translation keys exist for core Login content.

Do not remove or weaken existing Test XLM tests.

==================================================
20. QUALITY COMMANDS
==================================================

Run:

pnpm lint
pnpm typecheck
pnpm test
pnpm build

Also run:

pnpm build-storybook

Do not report completion while any command is failing.

==================================================
21. ACCEPTANCE CRITERIA
==================================================

The task is complete only when:

ROUTES
- [ ] /en/login works
- [ ] /id/login works
- [ ] /zh-CN/login works
- [ ] Test XLM remains publicly accessible
- [ ] Login does not gate Test XLM

ARCHITECTURE
- [ ] Atomic Design is used
- [ ] reusable components are not duplicated
- [ ] route page is thin
- [ ] no monolithic page component
- [ ] Storybook stories exist for reusable components

DESIGN
- [ ] desktop split is approximately 55/45
- [ ] single-viewport desktop layout
- [ ] left showcase is full-bleed
- [ ] container ship is the main visual focus
- [ ] CC/container cranes are visible
- [ ] RTG equipment is visible
- [ ] cargo aircraft is visible
- [ ] top and bottom scrims preserve readability
- [ ] right side uses premium glassmorphism
- [ ] seam is soft, not a hard divider
- [ ] mobile stacking puts Login first
- [ ] seam is removed on mobile

CONTENT
- [ ] AquaTrade Pay branding is visible
- [ ] Stellar Testnet · White Belt L1 is visible
- [ ] translated login content exists
- [ ] Testnet information card exists
- [ ] trust note exists
- [ ] Login has a locale-aware Test XLM link
- [ ] every card has a visible ? tooltip

SECURITY
- [ ] no real authentication is claimed
- [ ] no fake session/token is created
- [ ] credentials are not persisted
- [ ] no seed phrase or secret key input exists
- [ ] form values are not logged

ACCESSIBILITY
- [ ] keyboard navigation works
- [ ] focus indicators are visible
- [ ] tooltips are accessible
- [ ] illustration is decorative to screen readers
- [ ] reduced motion is respected
- [ ] contrast is acceptable

QUALITY
- [ ] lint passes
- [ ] typecheck passes
- [ ] tests pass
- [ ] production build passes
- [ ] Storybook build passes

==================================================
22. FINAL REPORT FORMAT
==================================================

Report:

1. Documentation read
2. Existing Test XLM protection check
3. Implementation plan
4. Files created
5. Files modified
6. Components reused
7. New atoms
8. New molecules
9. New organisms
10. New templates
11. Routes created
12. Translation keys added
13. Storybook stories created
14. Tests created or updated
15. Commands run and results
16. Responsive validation
17. Accessibility validation
18. Reduced-motion validation
19. Known limitations
20. Confirmation that Dashboard was not started

Do not continue to Dashboard after completing Login.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 22-CLAUDE-TASK-SLICE-LOGIN-PAGE.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/22-CLAUDE-TASK-SLICE-LOGIN-PAGE.md

Protect the existing public Test XLM page.
Do not continue to Dashboard.
```
