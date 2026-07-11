# 13-DESIGN-SYSTEM.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Design System Identity

| Property | Value |
|---|---|
| Design Name | AquaTrade Oceanic Glass |
| Style | Enterprise glassmorphism with underwater depth |
| Font | Inter |
| Icon Library | Lucide |
| Chart Library | Recharts or Apache ECharts |
| Component Foundation | shadcn/ui + accessible custom glass components |
| Default Mode | Dark ocean gradient |
| Secondary Mode | Light frost glass |
| Primary UX Goal | Operational clarity, not visual spectacle |

## 2. Glassmorphism Guardrails

Glassmorphism must not reduce readability.

- Page background uses a controlled gradient, not a detailed photograph behind data.
- Primary content glass opacity: 0.72–0.88.
- Modal and form glass opacity: 0.88–0.96.
- Backdrop blur: 16–24 px.
- Card border: 1 px semi-transparent white.
- Text contrast must meet WCAG AA.
- Tables use a more opaque surface than KPI cards.
- Reduced-transparency preference receives solid-background fallbacks.
- No important information is conveyed only by blur, glow, or color.

## 3. Color Tokens

### Dark Ocean Theme

| Token | Value | Usage |
|---|---|---|
| `--aqt-bg-950` | `#03111F` | Deep page base |
| `--aqt-bg-900` | `#062033` | Main ocean gradient |
| `--aqt-navy` | `#0B2E46` | Sidebar and dense panels |
| `--aqt-cyan` | `#25C7D9` | Primary action and active state |
| `--aqt-teal` | `#2DD4BF` | Success and verified |
| `--aqt-blue` | `#4D8DFF` | Information and links |
| `--aqt-violet` | `#8B7CFF` | Under review and Web3 accents |
| `--aqt-amber` | `#F6B84A` | Warning and deadline |
| `--aqt-red` | `#FF6174` | Critical, overdue, rejected |
| `--aqt-text` | `#F4FAFF` | Primary text |
| `--aqt-text-muted` | `#AFC4D4` | Secondary text |
| `--aqt-glass` | `rgba(13, 43, 63, 0.78)` | Default card |
| `--aqt-glass-strong` | `rgba(8, 29, 44, 0.92)` | Forms, tables, modal |
| `--aqt-border` | `rgba(255,255,255,0.14)` | Glass border |

### Light Frost Theme

| Token | Value |
|---|---|
| `--aqt-light-bg` | `#EAF7FA` |
| `--aqt-light-glass` | `rgba(255,255,255,0.76)` |
| `--aqt-light-text` | `#092A3D` |
| `--aqt-light-muted` | `#536E7D` |
| `--aqt-light-border` | `rgba(13,70,90,0.14)` |

## 4. Typography

| Element | Size | Weight |
|---|---:|---:|
| Page title | 28 px | 700 |
| Section title | 20 px | 650 |
| Card title | 15–16 px | 600 |
| KPI value | 30–34 px | 700 |
| Body | 14 px | 400 |
| Table | 13–14 px | 400 |
| Helper / tooltip | 12–13 px | 400 |
| Badge | 11–12 px | 600 |

## 5. Layout

- Sidebar expanded: 260 px.
- Sidebar collapsed: 76 px.
- Topbar: 68 px.
- Content max width: 1600 px.
- Desktop page padding: 24 px.
- Mobile page padding: 16 px.
- Card radius: 18 px.
- Compact card radius: 14 px.
- Form control radius: 12 px.
- Grid gap: 16 px.
- Major section gap: 24 px.

## 6. Glass Card Specification

```css
background: rgba(13, 43, 63, 0.78);
border: 1px solid rgba(255,255,255,0.14);
border-radius: 18px;
backdrop-filter: blur(20px) saturate(130%);
box-shadow:
  0 18px 50px rgba(0,0,0,0.28),
  inset 0 1px 0 rgba(255,255,255,0.08);
```

Card header:

```text
[icon] Card Title                         [?]
       optional subtitle
```

The `?` control:

- 24 × 24 px circular ghost button;
- visible at all times, not hover-only;
- top-right of every card;
- `aria-label="Explain <card title>"`;
- focus ring 2 px cyan;
- tooltip arrow points to the icon;
- tooltip uses strong glass surface at minimum 0.94 opacity.

## 7. KPI Card

Structure:

- category icon;
- title;
- `?` help icon;
- main value;
- unit;
- trend or deadline;
- status chip;
- optional micro-sparkline;
- click affordance only when drill-down exists.

Do not place more than six KPI cards in one desktop row.

## 8. Chart Card

Required elements:

- title;
- `?` tooltip;
- period selector;
- chart;
- legend;
- unit;
- source/update time;
- no more than five series;
- empty and error state.

## 9. Data Table

- Strong glass background `rgba(8,29,44,0.92)`.
- Sticky header.
- 52–56 px row height.
- Horizontal scroll on small screens.
- First column sticky only when needed.
- Status uses text + color + icon.
- Row click opens a detail drawer; explicit action remains keyboard accessible.
- Table-card header also contains `?`.

## 10. Forms

- Use strong glass panels.
- Group fields by user task, not database structure.
- Required fields show `Required`, not only `*`.
- Helper text explains domain terms.
- Validation appears below the field.
- Dangerous or irreversible actions require a review step.
- Mobile evidence upload uses camera and gallery actions.

## 11. Status System

| Status Family | Color |
|---|---|
| Draft / Neutral | Slate |
| Open / Info | Blue |
| In Progress | Cyan |
| Under Review | Violet |
| Warning / Deadline | Amber |
| Verified / Approved / Completed | Teal |
| Rejected / Failed / Overdue | Red |
| Testnet | Violet outline with `TESTNET` label |

## 12. Tooltip Content Pattern

```text
What it means:
How it is calculated or sourced:
Why it matters / what to do:
Scope note: Testnet, estimated, official reference, or future feature.
```

Example:

> **Shipment Readiness**  
> Percentage of required fish allocation, documents, packing checks, and QC steps completed for this trade. It helps the operations team identify blockers before handover. This value is generated from AquaTrade workflow data and is not an airline readiness confirmation.

## 13. Motion

- Card hover elevation: 160 ms.
- Tooltip: fade/scale 120 ms.
- Drawer: 220 ms.
- No floating particle animation behind dense screens.
- Respect `prefers-reduced-motion`.

## 14. Accessibility Quality Gate

- Keyboard navigation across sidebar, cards, tooltips, tables, and drawers.
- Visible focus ring.
- Minimum body contrast 4.5:1.
- Chart information also available as text/table.
- Tooltips are supplementary; critical meaning is not available only inside a tooltip.
- Mobile touch target minimum 44 px for primary controls; help icon may visually be 24 px with 44 px hit area.


## 15. Multilingual Design Rules

- Components must accommodate at least 50% text expansion.
- Avoid fixed card heights where translated tooltip text can wrap.
- Do not force Chinese text to uppercase.
- Use normal Chinese tracking; wide uppercase tracking applies only to Latin-script eyebrow labels.
- Buttons may grow vertically on mobile instead of clipping labels.
- All tooltip containers support multiline content up to 320 px desktop and viewport-safe width on mobile.
- `<html lang>` must match `en`, `id`, or `zh-CN`.

## 16. Atomic Design and Storybook Rule

Reusable UI must follow:

```text
atoms → molecules → organisms → templates → pages
```

All atoms and reusable molecules require Storybook stories. Reusable organisms and templates should have stories where practical. Components sensitive to language length or script require `English`, `Indonesian`, and `SimplifiedChinese` stories.
