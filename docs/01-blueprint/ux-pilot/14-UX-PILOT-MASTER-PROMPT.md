# 14-UX-PILOT-MASTER-PROMPT.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Purpose

This is the mandatory master context for Claude Code / Claude Design. It prevents the model from inventing page content, generic dashboards, decorative charts, or unsupported Web3 claims.

## 2. Master Prompt Block

```text
=== AQUATRADE — MASTER DESIGN CONTEXT ===

PRODUCT
Name: AquaTrade
Type: B2B hybrid Web3 application
Domain: Cross-border ornamental fish trade assurance
Primary users: Buyer/Importer, Exporter, Breeder, QC, Logistics, Verifier, Mediator, Finance, Admin
Current program stage: Stellar White Belt plus future product roadmap
Important truth: White Belt uses a direct native-XLM Testnet payment. Do not label it escrow. Testnet XLM has no monetary value.

VISUAL DIRECTION
Use “Oceanic Enterprise Glassmorphism”.
The interface must feel calm, trustworthy, global, and operational.
Do not make it look like a crypto trading terminal, gaming UI, NFT marketplace, or generic admin template.
Use a dark deep-ocean gradient background with subtle cyan/teal light fields.
Do not use a detailed photo behind tables.
Use Inter font and Lucide icons.

GLASS SURFACES
Default card: rgba(13,43,63,0.78), backdrop blur 20px, 1px rgba(255,255,255,0.14) border, radius 18px.
Dense table/form/modal: rgba(8,29,44,0.92).
Primary text: #F4FAFF.
Muted text: #AFC4D4.
Primary cyan: #25C7D9.
Success teal: #2DD4BF.
Info blue: #4D8DFF.
Review violet: #8B7CFF.
Warning amber: #F6B84A.
Critical red: #FF6174.

GLOBAL SHELL
Desktop sidebar: 260px translucent dark glass, collapsible to 76px.
Topbar: 68px glass surface.
Content padding: 24px desktop, 16px mobile.
Sidebar content changes by role.
Topbar includes page title, global search, Testnet/Mainnet network badge where relevant, notifications, company switcher, and user menu.

CARD TOOLTIP — MANDATORY
Every information card, KPI card, chart card, summary card, policy card, form section card, and table wrapper card MUST include a visible circular “?” icon in the top-right.
The icon must be keyboard focusable and have aria-label “Explain <card title>”.
Hover or focus opens a tooltip; mobile tap toggles it.
Tooltip explains:
1. what the card represents;
2. how data is calculated or sourced;
3. why it matters or what action to take;
4. whether it is Testnet-only, estimated, declared, platform-verified, official reference, or future scope.
Do not omit the tooltip icon from any card.

PAGE STRUCTURE
1. Breadcrumb
2. Page header: title, short purpose, primary actions
3. Critical alert or next-action banner if needed
4. KPI or context cards
5. Main workflow content
6. Related table/timeline/evidence
7. Detail drawer or action panel
8. Persistent mobile action bar for operational tasks

CHART RULES
Do not invent decorative charts.
Use:
- line/area for time trends;
- horizontal bar for category comparison;
- donut for one-time composition with maximum 5 segments;
- funnel for trade lifecycle;
- radial or linear progress for readiness;
- waterfall for quotation cost composition;
- stacked bar for expected versus condition counts;
- Gantt-like timeline for planned versus actual shipment milestones.
Every chart includes title, unit, period, legend, source/update time, empty state, error state, and “?” tooltip.

TABLE RULES
Tables use strong glass.
Sticky header.
Each table specification must use the exact columns supplied in the page prompt.
Status is shown with text, icon, and semantic color.
Row click may open a detail drawer, but a visible keyboard-accessible action must remain.
Never reveal another company's private data.

WEB3 RULES
Freighter signs user transactions.
Never request or store seed phrases or secret keys.
Show network prominently.
Separate connected wallet, app account, and company identity.
Separate direct payment, payment evidence, and escrow.
Show transaction state: preparing, awaiting signature, submitting, success, rejected, failed.
Show transaction hash and explorer action after success.
Do not imply that all application events or documents are on-chain.

DOMAIN RULES
Use Fish Batch, RFQ, Quotation, Trade Order, Packing Checklist, Shipment, Arrival Inspection, DOA Claim.
AquaTrade manages official-document references and files; it does not issue government certificates.
Use realistic global B2B sample data:
Exporter: PT Nusantara Aquatic Export, Indonesia
Buyer: Ocean Import Co., Japan
Route: CGK → HND/NRT
Batch: BAT-IDN-260701-014
RFQ: RFQ-2026-0061
Quotation: QUO-2026-0048
Trade: TRD-2026-0042
Shipment: SHP-2026-0037
Claim: CLM-2026-0012

RESPONSIVE RULES
Desktop: dashboards, comparison tables, documents, quotation.
Mobile: wallet, packing, shipment evidence, arrival inspection, claim evidence.
No horizontal form overflow.
Use bottom sticky CTA on mobile for task completion.

STATES
Every screen must include or design for:
loading, empty, error, permission denied, stale data, success, and primary business states specified in the screen prompt.

DELIVERABLE
Generate a high-fidelity responsive page.
Use the exact page components, fields, columns, chart types, sample values, labels, actions, and tooltip text supplied after this master context.
Do not add modules or generic cards not listed.
=== END MASTER DESIGN CONTEXT ===
```

## 3. Claude Code Implementation Instruction

Claude must first read:

1. `discovery/00-RAW-SOURCE-DATA-CLEANED.md`
2. `discovery/01-SOLUTION-BRIEF.md`
3. `discovery/04-ROLES-PERMISSIONS.md`
4. `ux-design/12-SCREEN-REQUIREMENTS.md`
5. `ux-design/13-DESIGN-SYSTEM.md`
6. the relevant prompt in `ux-pilot/15-UX-PILOT-SCREEN-PROMPTS.md`

It must not infer database fields, API payloads, or business rules that are not documented. It may create local mock data only from the examples defined in the relevant screen prompt.


## 4. Mandatory Addendum — Atomic Design, Storybook, i18n, Test XLM

```text
COMPONENT ARCHITECTURE
Build repeatable UI through Atomic Design: atoms, molecules, organisms, templates, pages.
Do not duplicate similar components inside individual pages.
All atoms and reusable molecules require Storybook stories. Add stories for important reusable organisms and templates where practical.

INTERNATIONALIZATION
Support English (en), Bahasa Indonesia (id), and Simplified Chinese (zh-CN).
Do not hardcode user-facing text.
Use semantic translation keys.
Provide a reusable language switcher on login and authenticated topbar.
Add Storybook locale variants for components affected by text length or script.

WHITE BELT NAVIGATION
Use one primary menu and page named Test XLM.
Localized labels: Test XLM / Uji XLM / XLM 测试.
Canonical route pattern: /{locale}/test-xlm, for example /en/test-xlm.
This page includes Freighter, wallet connect/disconnect, network guard, balance, funding help, send Test XLM, result, and transaction hash.
The Test XLM route is public and must not require application login. Do not create separate top-level Wallet, Balance, or Payment menus for White Belt.
Do not use Test XML.
```


## 5. Current-Scope Guard

The login page is a future business-MVP design prototype. Do not implement fake authentication and do not block public White Belt access. The active submission route is `/{locale}/test-xlm`.
