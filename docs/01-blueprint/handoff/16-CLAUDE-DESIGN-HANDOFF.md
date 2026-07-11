# 16-CLAUDE-DESIGN-HANDOFF.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Objective

Claude Code will be used to create the high-fidelity design implementation. The documentation is designed so Claude does not have to decide which data, chart, field, card, or label belongs on a page.

## 2. Required Reading Order

```text
../00-white-belt/00-LEVEL-1-SCOPE.md
→ ../00-white-belt/01-ACCEPTANCE-CRITERIA.md
→ README.md
→ discovery/00-RAW-SOURCE-DATA-CLEANED.md
→ discovery/01-SOLUTION-BRIEF.md
→ discovery/02-MODULE-MAP.md
→ discovery/04-ROLES-PERMISSIONS.md
→ ux-design/08-UX-STRATEGY.md
→ ux-design/11-PAGE-INVENTORY.md
→ ux-design/12-SCREEN-REQUIREMENTS.md
→ ux-design/13-DESIGN-SYSTEM.md
→ ux-pilot/14-UX-PILOT-MASTER-PROMPT.md
→ selected block in ux-pilot/15-UX-PILOT-SCREEN-PROMPTS.md
```

## 3. Standard Claude Command

```text
Read all required AquaTrade blueprint documents in the prescribed order.
Implement only page <PAGE CODE / PAGE NAME>.
Use the exact components, labels, chart type, table columns, sample data, state handling, and tooltip content documented for that page.
Use the Oceanic Enterprise Glassmorphism design system.
Every card must include the visible ? tooltip control.
Do not create backend integration or new business rules.
Use typed local mock data and reusable components.
Run lint, typecheck, tests, Storybook build, and production build before completion.
```

## 4. Reusable Components Claude Should Create

- `AppShell`
- `RoleSidebar`
- `Topbar`
- `GlassCard`
- `CardHelpTooltip`
- `KpiCard`
- `ChartCard`
- `StatusBadge`
- `NetworkBadge`
- `DataTable`
- `DetailDrawer`
- `PageHeader`
- `ActionBanner`
- `EmptyState`
- `ErrorState`
- `LoadingSkeleton`
- `Timeline`
- `EvidenceUploader`
- `MobileStickyActionBar`

## 5. `CardHelpTooltip` Contract

```ts
type CardHelpTooltipProps = {
  title: string;
  meaning: string;
  source?: string;
  action?: string;
  scopeNote?: string;
};
```

The component must:

- render a visible `?`;
- support mouse, keyboard, touch;
- use a portal;
- preserve focus;
- close on Escape;
- expose accessible labels;
- never contain essential action controls.

## 6. Quality Gate

- No generic placeholder cards.
- No lorem ipsum.
- No unlisted charts.
- No card without `?`.
- No Testnet value presented as real settlement.
- No `crypto` visual clichés.
- No secret key input.
- No inaccessible low-contrast glass.
- No layout overflow at 375 px.
- Lint, typecheck, test, and build pass.


## 7. Mandatory Reading Update

Before implementation, Claude must also read:

- `handoff/17-DEVELOPER-HANDOFF.md`
- `handoff/18-IMPLEMENTATION-STANDARDS.md`

These documents contain the binding Atomic Design, Storybook, multilingual, login illustration, and Test XLM navigation rules.


## 8. Active White Belt Rule

`/{locale}/test-xlm` is public. Login is a future UI prototype and must not block Level 1 review. Use the three `docs/00-white-belt` files as the highest-priority scope and acceptance source.
