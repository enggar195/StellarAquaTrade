# Claude Task Prompt — Slice AquaTrade Fish Batch List

## Objective

Implement the AquaTrade **Fish Batch List** page for the Exporter workspace by reusing the existing Dashboard Shell, Ocean Ambience, Atomic Design components, multilingual system, Storybook foundation, and established responsive behavior.

This task is limited to the Fish Batch List page.

Do not continue to:

- Create Fish Batch;
- Edit Fish Batch;
- Fish Batch Detail;
- Fish Batch Passport;
- Fish Batch QC;
- Fish Batch Health Record;
- Batch Reservation History;
- RFQ, Quotation, Trade, Packing, Shipment, or Claim pages.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

Existing foundation:

- public Test XLM page;
- Login page;
- Buyer Dashboard;
- Exporter Dashboard;
- reusable DashboardLayout;
- OceanAmbienceBackground;
- Atomic Design structure;
- multilingual routing for en, id, zh-CN;
- Storybook;
- reusable KpiCard, ChartCard, DataTable, GlassCard, HelpTooltip, LanguageSwitcher, Sidebar, Topbar, StatusBadge, and responsive mobile shell.

Your task is to implement only the Fish Batch List page.

Do not continue to Create Fish Batch or Fish Batch Detail in this task.

==================================================
1. READ PROJECT DOCUMENTATION FIRST
==================================================

Read:

1. CLAUDE.md, if it exists
2. docs/README.md
3. docs/00-white-belt/00-LEVEL-1-SCOPE.md
4. docs/00-white-belt/01-ACCEPTANCE-CRITERIA.md
5. docs/01-blueprint/CLAUDE-START-HERE.md
6. docs/01-blueprint/discovery/01-SOLUTION-BRIEF.md
7. docs/01-blueprint/discovery/02-MODULE-MAP.md
8. docs/01-blueprint/discovery/03-FUNCTION-GROUPS.md
9. docs/01-blueprint/discovery/04-ROLES-PERMISSIONS.md
10. docs/01-blueprint/discovery/07-GLOSSARY.md
11. docs/01-blueprint/ux-design/08-UX-STRATEGY.md
12. docs/01-blueprint/ux-design/09-INFORMATION-ARCHITECTURE.md
13. docs/01-blueprint/ux-design/10-USER-FLOWS.md
14. docs/01-blueprint/ux-design/11-PAGE-INVENTORY.md
15. docs/01-blueprint/ux-design/12-SCREEN-REQUIREMENTS.md
16. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
17. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
18. docs/01-blueprint/handoff/26-CLAUDE-TASK-SLICE-EXPORTER-DASHBOARD.md
19. this task file

White Belt scope remains the highest-priority source of truth.

==================================================
2. PROTECT EXISTING IMPLEMENTATION
==================================================

Before editing, confirm:

- Test XLM still works in en, id, and zh-CN;
- Login still works in en, id, and zh-CN;
- Buyer Dashboard still works;
- Exporter Dashboard still works;
- mobile topbar at 390x844 does not overlap;
- OceanAmbienceBackground is reusable;
- existing sidebar role configuration supports exporter navigation;
- existing DataTable, KpiCard, ChartCard, StatusBadge, HelpTooltip, GlassCard, and drawer components are reusable;
- Storybook and i18n providers are available.

Do not:

- rewrite Dashboard Shell;
- rewrite Exporter Dashboard;
- rewrite Buyer Dashboard;
- change Test XLM or Freighter/Stellar logic;
- change Login behavior;
- add backend/API/database integration;
- add authentication or role authorization;
- implement escrow or Mainnet;
- duplicate shared components.

==================================================
3. TARGET ROUTES
==================================================

Create:

- /en/exporter/fish-batches
- /id/exporter/fish-batches
- /zh-CN/exporter/fish-batches

Update the exporter navigation item:

- Fish Batches

so it becomes an active locale-aware link instead of Coming Soon.

Do not change other future menu items.

Do not create:

- /create
- /new
- /[batchId]

in this task.

==================================================
4. PAGE PURPOSE
==================================================

The Fish Batch List page must help an exporter:

1. see how many fish batches are active;
2. understand total available quantity;
3. identify batches waiting for QC;
4. identify reserved or partially reserved batches;
5. search and filter batches;
6. compare batch availability;
7. preview one batch without leaving the list;
8. understand which actions are available now versus future scope.

The page must feel like an operational supply-management workspace.

Do not make it look like a public consumer catalog.

==================================================
5. PAGE STRUCTURE
==================================================

Use this order:

1. Breadcrumb
2. Page Header
3. Prototype Data Banner
4. Four KPI Cards
5. Batch Status Composition Chart
6. Search and Filter Toolbar
7. View Toggle
8. Fish Batch Table
9. Quick Preview Drawer
10. Table Footer / Result Summary
11. Locale-aware Test XLM shortcut if already standard in exporter pages

Recommended desktop layout:

- KPI row: four cards;
- status chart and compact summary: one row;
- toolbar: full width;
- table: full width;
- preview drawer: right side, approximately 420–520 px.

==================================================
6. PAGE HEADER
==================================================

Title:

EN:
Fish Batches

ID:
Batch Ikan

ZH-CN:
鱼批次

Subtitle:

EN:
Manage sellable fish inventory, availability, QC status, origin, and reservations by batch.

ID:
Kelola inventori ikan siap jual, ketersediaan, status QC, asal, dan reservasi berdasarkan batch.

ZH-CN:
按批次管理可销售鱼类库存、可用数量、质检状态、来源和预留情况。

Primary action:

EN:
Create Fish Batch

ID:
Buat Batch Ikan

ZH-CN:
创建鱼批次

Because Create Fish Batch is not yet implemented:

- show the action as disabled or Coming Soon;
- include a visible lock or future-scope indicator;
- include a localized tooltip;
- do not link to a broken route.

Tooltip:

EN:
Fish Batch creation will be implemented in the next slicing phase.

ID:
Pembuatan Batch Ikan akan diterapkan pada tahap slicing berikutnya.

ZH-CN:
鱼批次创建功能将在下一阶段实现。

==================================================
7. PROTOTYPE DATA BANNER
==================================================

EN:
Prototype inventory data
This page uses deterministic sample batch data for frontend validation. It is not connected to live stock, breeder, QC, reservation, or trade services.

ID:
Data inventori prototipe
Halaman ini menggunakan data batch contoh deterministik untuk validasi frontend. Data belum terhubung ke stok, breeder, QC, reservasi, atau layanan perdagangan langsung.

ZH-CN:
原型库存数据
此页面使用确定性的示例批次数据进行前端验证，尚未连接实时库存、养殖方、质检、预留或贸易服务。

==================================================
8. KPI CARDS — EXACT SET
==================================================

Create exactly four KPI cards.

1. Total Active Batches
   ID: Total Batch Aktif
   ZH-CN: 活跃批次总数
   Value: 24
   Supporting: Non-archived batches currently managed

2. Available Quantity
   ID: Kuantitas Tersedia
   ZH-CN: 可用数量
   Value: 1,037
   Unit: fish / ikan / 尾
   Supporting: Sellable quantity across active batches

3. QC Pending
   ID: Menunggu QC
   ZH-CN: 待质检
   Value: 3
   Supporting: Batches blocked from buyer visibility

4. Reserved
   ID: Direservasi
   ZH-CN: 已预留
   Value: 5
   Unit: batches / batch / 个批次
   Supporting: Fully reserved by active trades

Every KPI card:

- reuse KpiCard;
- semantic icon;
- visible top-right ? tooltip;
- equal height;
- localized labels;
- loading, empty, and error stories.

==================================================
9. BATCH STATUS COMPOSITION CHART
==================================================

Card title:

EN:
Batch Status Composition

ID:
Komposisi Status Batch

ZH-CN:
批次状态构成

Chart type:

- donut chart.

Exact deterministic data:

- Available: 12
- Partially Reserved: 4
- Reserved: 5
- QC Pending: 3

Localized labels:

EN:
- Available
- Partially Reserved
- Reserved
- QC Pending

ID:
- Tersedia
- Sebagian Direservasi
- Direservasi
- Menunggu QC

ZH-CN:
- 可用
- 部分预留
- 已预留
- 待质检

Center total:
24

Center label:
ACTIVE BATCHES / BATCH AKTIF / 活跃批次

Requirements:

- no more than four segments;
- clear legend;
- accessible text summary;
- visible ? tooltip;
- loading, empty, and error states;
- reduced-motion support;
- no 3D effect.

==================================================
10. SEARCH AND FILTER TOOLBAR
==================================================

Required controls:

1. Search input
2. Availability status filter
3. QC status filter
4. Species filter
5. Origin filter
6. Grade filter
7. Reset filters
8. View toggle
9. Result count

Search placeholder:

EN:
Search Batch ID, species, variety, or origin

ID:
Cari ID Batch, spesies, varietas, atau asal

ZH-CN:
搜索批次编号、鱼种、品系或来源

Search fields:

- batch ID;
- species;
- variety;
- origin;
- source breeder/company.

Availability options:

- All Availability
- Available
- Partially Reserved
- Reserved

QC options:

- All QC Statuses
- Passed
- Pending
- Revision Required

Species options:

- All Species
- Betta splendens
- Poecilia reticulata
- Symphysodon
- Cyprinus rubrofuscus
- Scleropages formosus

Origin options:

- All Origins
- Kediri, East Java
- Blitar, East Java
- Tulungagung, East Java
- Bogor, West Java
- Pontianak, West Kalimantan

Grade options:

- All Grades
- Grade A
- Grade B
- Premium
- Show Grade

Reset label:

EN:
Reset Filters

ID:
Atur Ulang Filter

ZH-CN:
重置筛选

Use client-side deterministic filtering only.

==================================================
11. VIEW TOGGLE
==================================================

Provide:

- Table View
- Card View

Labels:

EN:
- Table
- Cards

ID:
- Tabel
- Kartu

ZH-CN:
- 表格
- 卡片

Default:
Table View

Preserve filter state when switching views.

==================================================
12. FISH BATCH TABLE — EXACT COLUMNS
==================================================

Card title:

EN:
Fish Batch Inventory

ID:
Inventori Batch Ikan

ZH-CN:
鱼批次库存

Exact columns:

1. Batch ID
2. Species / Variety
3. Grade
4. Size
5. Available / Initial Qty
6. Origin
7. QC
8. Availability
9. Updated
10. Action

==================================================
13. EXACT DETERMINISTIC BATCH DATA
==================================================

Create exactly eight prototype rows.

1.
BAT-IDN-260701-014
Betta splendens
HMPK Super Red
Grade A
4.5–5 cm
88 / 120
Kediri, East Java
Nusantara Betta Farm
QC Passed
Partially Reserved
11 Jul 2026 · 14:20 WIB

2.
BAT-IDN-260704-006
Poecilia reticulata
Mosaic Mix
Premium
3–3.5 cm
240 / 240
Tulungagung, East Java
AquaGuppy Indonesia
QC Passed
Available
11 Jul 2026 · 10:05 WIB

3.
BAT-IDN-260706-003
Symphysodon
Assorted Grade A
Grade A
8–10 cm
60 / 75
Bogor, West Java
BlueDisc Hatchery
QC Passed
Partially Reserved
10 Jul 2026 · 17:45 WIB

4.
BAT-IDN-260708-011
Cyprinus rubrofuscus
Kohaku Mix
Show Grade
12–15 cm
0 / 40
Blitar, East Java
Blitar Koi Center
QC Passed
Reserved
10 Jul 2026 · 09:30 WIB

5.
BAT-IDN-260709-002
Scleropages formosus
Super Red
Premium
18–20 cm
8 / 12
Pontianak, West Kalimantan
Kapuas Arowana Farm
QC Pending
Available
9 Jul 2026 · 16:10 WIB

6.
BAT-IDN-260710-009
Betta splendens
Yellow Fancy HMPK
Grade B
4–4.5 cm
150 / 150
Kediri, East Java
Nusantara Betta Farm
QC Revision Required
Available
9 Jul 2026 · 11:25 WIB

7.
BAT-IDN-260711-004
Poecilia reticulata
Blue Grass
Grade A
3.5–4 cm
180 / 200
Tulungagung, East Java
AquaGuppy Indonesia
QC Passed
Partially Reserved
8 Jul 2026 · 15:40 WIB

8.
BAT-IDN-260712-001
Betta splendens
Black Samurai HMPK
Premium
4.5–5 cm
0 / 100
Kediri, East Java
Dragon Betta House
QC Passed
Reserved
8 Jul 2026 · 08:50 WIB

==================================================
14. TABLE BEHAVIOR
==================================================

Requirements:

- reuse DataTable;
- sticky header;
- sortable:
  - Batch ID
  - Grade
  - Available quantity
  - Updated
- result count;
- horizontal scroll on smaller screens;
- row hover;
- IDs visually distinct;
- QC and availability use text + icon + color;
- action:
  View Preview;
- row/action opens Quick Preview Drawer;
- do not navigate to detail page;
- visible ? tooltip on table card.

==================================================
15. CARD VIEW
==================================================

Each card shows:

- local deterministic media placeholder;
- Batch ID;
- species;
- variety;
- grade;
- size;
- available / initial quantity;
- origin;
- QC badge;
- availability badge;
- updated time;
- visible ? tooltip;
- View Preview action.

Do not use random external image URLs.

==================================================
16. QUICK PREVIEW DRAWER
==================================================

Desktop width:
approximately 440–520px

Mobile:
full-screen or nearly full-screen sheet

Content:

1. Batch identity
2. Representative media placeholder
3. Species and variety
4. Grade and size
5. Available / initial quantity
6. Origin
7. Source breeder/company
8. QC status
9. Availability status
10. Updated timestamp
11. Visibility note
12. Reservation summary
13. Future actions

Visibility rules:

- QC Passed:
  Eligible for private buyer visibility when availability permits.
- QC Pending:
  Not buyer-visible until internal QC is completed.
- Revision Required:
  Not buyer-visible until QC revision is resolved.

Reservation examples:

- Partially Reserved:
  32 of 120 reserved
- Reserved:
  all initial quantity reserved
- Available:
  0 reserved

Drawer actions:

- Open Full Detail — disabled / Coming Soon
- Edit Batch — disabled / Coming Soon
- Archive — disabled / future scope

Do not implement destructive actions.

==================================================
17. BUSINESS DISPLAY RULES
==================================================

Availability states:

- Available
- Partially Reserved
- Reserved

QC states:

- Passed
- Pending
- Revision Required

Rules:

- QC Passed + Available:
  buyer-visible candidate
- QC Passed + Partially Reserved:
  remaining quantity may be buyer-visible
- QC Passed + Reserved:
  no remaining sellable quantity
- QC Pending:
  never buyer-visible
- Revision Required:
  never buyer-visible until resolved

Do not merge QC and availability into one field.

==================================================
18. MOCK DATA STANDARD
==================================================

Use centralized typed deterministic data.

Recommended:

src/features/fish-batches/data/fish-batches.mock.ts

Types:

- FishBatchListItem
- FishBatchQcStatus
- FishBatchAvailabilityStatus
- FishBatchGrade
- FishBatchFilterState
- FishBatchStatusComposition
- FishBatchPreview

No random or Date.now-dependent values.

==================================================
19. ATOMIC DESIGN
==================================================

Reuse existing components.

Potential new components:

Atoms:
- BatchId
- QuantityValue
- SpeciesScientificName
- GradeBadge

Molecules:
- BatchQuantity
- BatchQcStatus
- BatchAvailabilityStatus
- BatchIdentity
- BatchVisibilityNote
- BatchFilterGroup

Organisms:
- FishBatchFilterToolbar
- FishBatchTable
- FishBatchCardGrid
- FishBatchPreviewDrawer
- BatchStatusCompositionCard

Page:
- FishBatchListPage

Do not create another DashboardLayout.
Do not duplicate DataTable, Drawer, KpiCard, ChartCard, HelpTooltip, StatusBadge, or OceanAmbienceBackground.

==================================================
20. STORYBOOK
==================================================

Create stories for:

- BatchId
- BatchQuantity
- BatchQcStatus
- BatchAvailabilityStatus
- FishBatchFilterToolbar
- FishBatchTable
- FishBatchCardGrid
- FishBatchPreviewDrawer
- BatchStatusCompositionCard

Required variants:

- Passed
- Pending
- RevisionRequired
- Available
- PartiallyReserved
- Reserved
- Default
- Filtered
- Empty
- Loading
- Error
- MobileOverflow
- LongIndonesianText
- SimplifiedChinese
- MobileFullScreen

Use actual i18n providers.

==================================================
21. RESPONSIVE DESIGN
==================================================

Validate:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 390 × 844
- 360 × 800
- 320 × 568

Mobile requirements:

- preserve fixed topbar behavior;
- no overlap among burger, Testnet, language, avatar;
- header action below title;
- filters collapse into a mobile filter sheet or stacked controls;
- table may default to card view at small breakpoints;
- preview drawer becomes full-screen;
- no page-level horizontal overflow;
- touch targets remain accessible.

==================================================
22. OCEAN AMBIENCE
==================================================

Reuse OceanAmbienceBackground.
Do not create another background or bubble system.
Keep table readability strong.
Respect reduced motion.

==================================================
23. ACCESSIBILITY
==================================================

Required:

- semantic page title;
- table headers;
- form labels;
- accessible segmented view toggle;
- keyboard sorting;
- drawer focus trap;
- Escape closes drawer;
- focus returns to trigger;
- text + icon + color for statuses;
- keyboard-accessible horizontal scrolling;
- localized aria-labels;
- reduced-motion support.

==================================================
24. TESTS
==================================================

Add tests for:

- all three routes render;
- exactly four KPI cards;
- exact KPI values;
- exact donut composition;
- exact table columns;
- exact eight rows;
- search by Batch ID;
- search by variety;
- availability filter;
- QC filter;
- reset filter;
- view toggle preserves filters;
- QC Pending is not buyer-visible;
- Revision Required is not buyer-visible;
- Reserved has zero available quantity;
- preview drawer opens and closes;
- Escape closes drawer;
- focus returns to trigger;
- no broken detail route;
- Create Fish Batch does not navigate;
- exporter navigation item is active;
- Buyer and Exporter dashboards remain intact;
- mobile topbar remains non-overlapping.

Do not remove existing tests.

==================================================
25. QUALITY COMMANDS
==================================================

Run:

pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook

Do not report completion while any command fails.

==================================================
26. FINAL REPORT
==================================================

Report:

1. Documentation read
2. Existing-page protection check
3. Implementation plan
4. Files created
5. Files modified
6. Components reused
7. New components
8. Mock-data types/files
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
19. Confirmation that Create Fish Batch and Fish Batch Detail were not started

Do not continue to Create Fish Batch after this task.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 27-CLAUDE-TASK-SLICE-FISH-BATCH-LIST.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/27-CLAUDE-TASK-SLICE-FISH-BATCH-LIST.md

Reuse the existing Dashboard Shell and Ocean Ambience.
Protect Buyer Dashboard, Exporter Dashboard, Login, and Test XLM.
Do not continue to Create Fish Batch or Fish Batch Detail.
```
