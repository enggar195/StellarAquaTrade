# Claude Task Prompt — Slice AquaTrade Exporter Dashboard

## Objective

Implement the AquaTrade **Exporter Dashboard** by reusing the existing Dashboard Shell, Ocean Ambience, Atomic Design components, multilingual system, and Storybook foundation.

This task is limited to the Exporter Dashboard. Do not continue to Fish Batch, RFQ Detail, Quotation, Packing, Shipment Detail, or Claim pages.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

Existing foundation:
- Test XLM page
- Login page
- Buyer Dashboard
- reusable DashboardLayout
- OceanAmbienceBackground
- i18n: en, id, zh-CN
- Atomic Design
- Storybook
- reusable KpiCard, ChartCard, DataTable, GlassCard, HelpTooltip, LanguageSwitcher

Implement only the Exporter Dashboard.

==================================================
1. READ FIRST
==================================================

Read:
1. CLAUDE.md
2. docs/README.md
3. docs/00-white-belt/00-LEVEL-1-SCOPE.md
4. docs/00-white-belt/01-ACCEPTANCE-CRITERIA.md
5. docs/01-blueprint/CLAUDE-START-HERE.md
6. docs/01-blueprint/ux-design/08-UX-STRATEGY.md
7. docs/01-blueprint/ux-design/09-INFORMATION-ARCHITECTURE.md
8. docs/01-blueprint/ux-design/12-SCREEN-REQUIREMENTS.md
9. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
10. docs/01-blueprint/architecture/06-KPI-DASHBOARD.md
11. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
12. docs/01-blueprint/handoff/24-CLAUDE-TASK-SLICE-BUYER-DASHBOARD.md
13. docs/01-blueprint/handoff/25-CLAUDE-TASK-ENHANCE-OCEAN-AMBIENCE.md
14. this task file

White Belt scope remains the highest-priority source of truth.

==================================================
2. PROTECT EXISTING PAGES
==================================================

Confirm before editing:
- /en/test-xlm, /id/test-xlm, /zh-CN/test-xlm work
- /en/login, /id/login, /zh-CN/login work
- Buyer Dashboard works
- mobile topbar at 390x844 does not overlap
- OceanAmbienceBackground is reusable
- shared dashboard components exist

Do not:
- rewrite Buyer Dashboard
- rewrite Dashboard Shell
- change Test XLM or Stellar/Freighter logic
- change Login behavior
- duplicate existing shared components
- add authentication, backend, database, escrow, or Mainnet logic

==================================================
3. ROUTES
==================================================

Create explicit prototype routes:
- /en/exporter/dashboard
- /id/exporter/dashboard
- /zh-CN/exporter/dashboard

Reason:
real role-based authentication is not implemented yet.

Do not create a fake authenticated exporter session.
Do not add production role switching.
Do not redirect Buyer Dashboard.

==================================================
4. PAGE PURPOSE
==================================================

The page must answer:
1. How many fish batches are available?
2. Which RFQs require a response?
3. Which orders are being prepared?
4. Which documents block shipment readiness?
5. What Testnet prototype funds are associated with active trades?
6. Which claims require exporter response?
7. Which shipments are approaching departure?

Do not add generic revenue analytics.

==================================================
5. PAGE STRUCTURE
==================================================

Order:
1. Breadcrumb
2. Page Header
3. Prototype Data Banner
4. Operational Alert Banner
5. Six KPI Cards
6. Available Quantity by Species chart
7. Preparation Workload chart
8. RFQs Awaiting Response table
9. Upcoming Shipments table
10. locale-aware Test XLM shortcut

Desktop:
- 6 KPI cards in one row when readable
- charts: 55% / 45%
- tables full width
- fluid content width up to ~1600px

==================================================
6. PAGE HEADER
==================================================

Title:
EN: Exporter Dashboard
ID: Dasbor Eksportir
ZH-CN: 出口商仪表板

Subtitle:
EN: Monitor available fish batches, buyer RFQs, order preparation, documents, shipments, claims, and Testnet activity.
ID: Pantau batch ikan yang tersedia, RFQ pembeli, persiapan pesanan, dokumen, pengiriman, klaim, dan aktivitas Testnet.
ZH-CN: 查看可用鱼批次、买家询价、订单准备、文件、运输、索赔和测试网活动。

Primary action:
EN: Create Fish Batch
ID: Buat Batch Ikan
ZH-CN: 创建鱼批次

The action must be disabled or Coming Soon because the page is not implemented.
Never navigate to a broken route.

==================================================
7. PROTOTYPE DATA BANNER
==================================================

EN:
Prototype data
This exporter dashboard uses deterministic sample data for frontend validation. It is not connected to live inventory, trade, logistics, claim, or payment services.

ID:
Data prototipe
Dasbor eksportir ini menggunakan data contoh deterministik untuk validasi frontend. Data belum terhubung ke inventori, perdagangan, logistik, klaim, atau layanan pembayaran langsung.

ZH-CN:
原型数据
此出口商仪表板使用确定性的示例数据进行前端验证，尚未连接实时库存、贸易、物流、索赔或支付服务。

==================================================
8. OPERATIONAL ALERT
==================================================

EN:
2 required documents are blocking shipment readiness
Trade TRD-2026-0051 is waiting for a verified health-document reference and packing list.

ID:
2 dokumen wajib menghambat kesiapan pengiriman
Perdagangan TRD-2026-0051 menunggu referensi dokumen kesehatan yang terverifikasi dan packing list.

ZH-CN:
2 份必需文件正在阻塞发运准备
交易 TRD-2026-0051 正在等待已验证的健康文件参考和装箱单。

Action:
EN: Review documents
ID: Tinjau dokumen
ZH-CN: 查看文件

Use disabled/Coming Soon behavior.

==================================================
9. EXACT KPI CARDS
==================================================

Create exactly six cards.

1. Available Batches
   ID: Batch Tersedia
   ZH-CN: 可用批次
   Value: 18
   Supporting: Verified or sellable fish batches

2. New RFQs
   ID: RFQ Baru
   ZH-CN: 新询价
   Value: 6
   Supporting: Buyer requests awaiting quotation

3. Orders in Preparation
   ID: Pesanan Dalam Persiapan
   ZH-CN: 准备中的订单
   Value: 3
   Supporting: Confirmed trades being prepared

4. Documents Missing
   ID: Dokumen Belum Lengkap
   ZH-CN: 缺失文件
   Value: 2
   Supporting: Blocking shipment readiness
   Tooltip must explain that AquaTrade records references and does not issue official certificates.

5. Funds Secured
   ID: Dana Terjamin
   ZH-CN: 已确认资金
   Value: 8,500
   Asset: XLM
   Badge:
   EN: TESTNET SAMPLE
   ID: CONTOH TESTNET
   ZH-CN: 测试网示例
   Tooltip must explain:
   - prototype Testnet value
   - not real commercial settlement
   - White Belt currently uses direct Testnet payment, not escrow

6. Claims Awaiting Response
   ID: Klaim Menunggu Respons
   ZH-CN: 待回复索赔
   Value: 1
   Supporting: Buyer claim requiring exporter action

Every card:
- reuse KpiCard
- semantic icon
- visible top-right ? tooltip
- equal height
- localized content
- loading/empty/error stories

==================================================
10. AVAILABLE QUANTITY BY SPECIES
==================================================

Title:
EN: Available Quantity by Species
ID: Kuantitas Tersedia per Spesies
ZH-CN: 按鱼种统计可用数量

Chart:
horizontal bar chart

Exact data:
- Betta: 320
- Guppy: 480
- Discus: 85
- Koi: 140
- Arowana: 12

Unit:
EN: fish
ID: ikan
ZH-CN: 尾

Requirements:
- clear value labels
- no 3D
- no decorative gradients
- accessible text summary
- visible ? tooltip
- prototype inventory source note
- loading, empty, error states
- reduced-motion support

==================================================
11. PREPARATION WORKLOAD
==================================================

Title:
EN: Preparation Workload
ID: Beban Kerja Persiapan
ZH-CN: 准备工作量

Chart:
stacked bar chart

Exact data:
- Allocation: 2
- Health Documents: 1
- Packing: 2
- Ready: 1

Translations:
ID:
- Alokasi
- Dokumen Kesehatan
- Packing
- Siap

ZH-CN:
- 分配
- 健康文件
- 包装
- 已准备

Requirements:
- legend
- total summary: 6 stage assignments
- accessible text summary
- visible ? tooltip
- loading, empty, error states
- reduced-motion support
- do not call it a real capacity forecast

==================================================
12. RFQS AWAITING RESPONSE TABLE
==================================================

Title:
EN: RFQs Awaiting Response
ID: RFQ Menunggu Respons
ZH-CN: 待回复询价

Exact columns:
1. RFQ ID
2. Buyer
3. Destination
4. Requested Fish
5. Quantity
6. Response Due
7. Status
8. Action

Rows:

1.
RFQ-2026-0061
Ocean Import Co.
Tokyo · NRT
Betta HMPK Super Red
120
Today, 17:00 WIB
New
Create Quote

2.
RFQ-2026-0064
Pearl Aquatics Pte. Ltd.
Singapore · SIN
Guppy Mosaic Mix
240
Tomorrow, 12:00 WIB
Reviewing
Review

3.
RFQ-2026-0067
DragonFish Trading Ltd.
Hong Kong · HKG
Arowana Super Red
8
20 Jul 2026
Clarification Needed
Review

4.
RFQ-2026-0069
BlueWave Ornamental GmbH
Frankfurt · FRA
Discus Assorted Grade A
60
21 Jul 2026
New
Create Quote

Behavior:
- reuse DataTable
- sticky header desktop
- horizontal scroll on smaller screens
- reference IDs visually distinct
- keyboard-accessible actions
- disabled/Coming Soon action
- no broken routes
- visible ? tooltip on table card

==================================================
13. UPCOMING SHIPMENTS TABLE
==================================================

Title:
EN: Upcoming Shipments
ID: Pengiriman Mendatang
ZH-CN: 即将发运

Exact columns:
1. Trade ID
2. Buyer
3. Route
4. Planned Departure
5. Readiness
6. Blocking Item
7. Status
8. Action

Rows:

1.
TRD-2026-0051
Ocean Import Co.
CGK → HND/NRT
22 Jul 2026 · 23:45 WIB
74%
2 documents
At Risk
Review

2.
TRD-2026-0053
Pearl Aquatics Pte. Ltd.
SUB → SIN
24 Jul 2026 · 09:15 WIB
88%
Packing QC
Preparing
Review

3.
TRD-2026-0056
BlueWave Ornamental GmbH
CGK → FRA
27 Jul 2026 · 01:20 WIB
100%
None
Ready
Review

Behavior:
- readiness uses text + accessible progress
- blocking item uses text + semantic icon
- status uses text + icon + color
- no broken routes
- visible ? tooltip
- mobile horizontal scroll or responsive cards

==================================================
14. TEST XLM SHORTCUT
==================================================

Action:
EN: Open Test XLM
ID: Buka Uji XLM
ZH-CN: 打开 XLM 测试

Routes:
- /en/test-xlm
- /id/test-xlm
- /zh-CN/test-xlm

Do not add Send XLM form to this dashboard.

==================================================
15. MOCK DATA
==================================================

Use centralized typed deterministic data.

Recommended:
src/features/exporter-dashboard/data/exporter-dashboard.mock.ts

Types:
- ExporterDashboardKpi
- SpeciesAvailabilityItem
- PreparationWorkloadItem
- ExporterRfqItem
- UpcomingShipmentItem

Rules:
- no random values
- no Date.now-dependent values
- locale-neutral business IDs
- translated labels/statuses through keys
- clearly marked prototype data

==================================================
16. ATOMIC DESIGN
==================================================

Reuse existing components first.

Only create missing reusable pieces, for example:
Atoms:
- ReadinessValue
- BlockingIndicator

Molecules:
- ShipmentReadiness
- DocumentBlocker
- ExporterRfqStatus

Organisms:
- ExporterRfqTable
- UpcomingShipmentTable
- ExporterOperationalAlert

Page:
- ExporterDashboardPage

Do not create another DashboardLayout.
Do not duplicate KpiCard, ChartCard, DataTable, HelpTooltip, or OceanAmbienceBackground.

==================================================
17. STORYBOOK
==================================================

Create stories for:
- ExporterOperationalAlert
- exporter KpiCard variants
- AvailableQuantityChart
- PreparationWorkloadChart
- ExporterRfqTable
- UpcomingShipmentTable
- ShipmentReadiness
- DocumentBlocker
- ExporterDashboardPage if supported

Required states:
- Default
- Loading
- Empty
- Error
- ReducedMotion
- MobileOverflow
- LongIndonesianText
- SimplifiedChinese

Locale variants:
- English
- BahasaIndonesia
- SimplifiedChinese

Use real i18n providers.

==================================================
18. RESPONSIVE
==================================================

Validate:
- 1920x1080
- 1440x900
- 1366x768
- 1024x768
- 768x1024
- 390x844
- 360x800
- 320x568

Rules:
- preserve fixed mobile topbar
- no overlap among burger, Testnet, language, avatar
- 2-column KPI grid around 390–480px
- 1-column at very narrow widths if necessary
- alert stacks vertically
- action moves below heading on mobile
- charts stack
- tables remain usable
- no horizontal page overflow

==================================================
19. OCEAN AMBIENCE
==================================================

Reuse OceanAmbienceBackground.
Do not create another bubble system.
Keep bubbles behind content.
Respect reduced motion.

==================================================
20. ACCESSIBILITY
==================================================

Required:
- semantic headings
- chart text summaries
- proper table headers
- status uses text + icon + color
- progress has accessible value
- keyboard-accessible actions
- visible focus
- localized aria-labels
- keyboard-accessible table scrolling
- reduced-motion support

==================================================
21. TESTS
==================================================

Add tests for:
- all three exporter routes render
- exactly six KPI cards
- Funds Secured says Testnet sample
- exact species data
- exact preparation data
- exact RFQ columns
- exact shipment columns
- readiness renders
- blockers render
- actions do not navigate to broken routes
- locale-aware Test XLM shortcut
- no backend request
- Buyer Dashboard remains intact
- mobile topbar still does not overlap

Do not remove existing tests.

==================================================
22. QUALITY COMMANDS
==================================================

Run:
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook

Do not report completion while any command fails.

==================================================
23. FINAL REPORT
==================================================

Report:
1. Documentation read
2. Existing-page protection check
3. Implementation plan
4. Files created
5. Files modified
6. Components reused
7. New components
8. Mock-data files/types
9. Routes created
10. Translation keys
11. Storybook stories
12. Tests
13. Command results
14. Desktop validation
15. Tablet validation
16. Mobile validation
17. Accessibility validation
18. Known limitations
19. Confirmation that Fish Batch and later pages were not started

Do not continue to Fish Batch List after this task.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 26-CLAUDE-TASK-SLICE-EXPORTER-DASHBOARD.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/26-CLAUDE-TASK-SLICE-EXPORTER-DASHBOARD.md

Reuse the Dashboard Shell and Ocean Ambience.
Protect Buyer Dashboard, Login, and Test XLM.
Do not continue to Fish Batch List.
```
