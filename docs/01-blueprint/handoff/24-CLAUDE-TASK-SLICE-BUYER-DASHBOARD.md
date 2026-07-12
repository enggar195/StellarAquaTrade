# Claude Task Prompt — Slice AquaTrade Buyer Dashboard

## Objective

Implement the AquaTrade **Buyer Dashboard** inside the existing reusable Dashboard Application Shell.

This task covers only:

- Buyer Dashboard content;
- buyer-oriented KPI cards;
- trade and shipment charts;
- action-required table;
- recent Test XLM transaction summary;
- multilingual UI;
- Atomic Design and Storybook;
- responsive and accessible implementation.

Do **not** implement Exporter Dashboard, backend APIs, authentication, database integration, shipment integrations, escrow, or Mainnet.

---

## Prompt for Claude Code

```text
You are working inside the AquaTrade frontend repository.

The project already has:
- public Test XLM page;
- Login page;
- reusable Dashboard Application Shell;
- multilingual routing;
- Atomic Design component structure;
- Storybook.

Your task is to implement only the Buyer Dashboard content inside the existing Dashboard Shell.

Do not continue to Exporter Dashboard or another business module.

==================================================
1. READ DOCUMENTATION FIRST
==================================================

Read:

1. CLAUDE.md, if present
2. docs/README.md
3. docs/00-white-belt/00-LEVEL-1-SCOPE.md
4. docs/00-white-belt/01-ACCEPTANCE-CRITERIA.md
5. docs/01-blueprint/CLAUDE-START-HERE.md
6. docs/01-blueprint/architecture/06-KPI-DASHBOARD.md
7. docs/01-blueprint/ux-design/08-UX-STRATEGY.md
8. docs/01-blueprint/ux-design/09-INFORMATION-ARCHITECTURE.md
9. docs/01-blueprint/ux-design/12-SCREEN-REQUIREMENTS.md
10. docs/01-blueprint/ux-design/13-DESIGN-SYSTEM.md
11. docs/01-blueprint/handoff/18-IMPLEMENTATION-STANDARDS.md
12. docs/01-blueprint/handoff/23-CLAUDE-TASK-BUILD-DASHBOARD-SHELL.md
13. this task file

White Belt scope remains the highest-priority source of truth.

==================================================
2. PROTECT EXISTING PAGES
==================================================

Confirm before editing:

- /en/test-xlm, /id/test-xlm, /zh-CN/test-xlm still work;
- /en/login, /id/login, /zh-CN/login still work;
- /en/dashboard, /id/dashboard, /zh-CN/dashboard use the existing DashboardLayout;
- existing LanguageSwitcher, HelpTooltip, GlassCard, sidebar, topbar, table, and chart primitives are identified;
- Storybook and i18n setup are identified.

Do not:

- rewrite the Dashboard Shell;
- change Test XLM or Stellar/Freighter logic;
- add route protection;
- create fake authentication;
- duplicate shared components;
- add backend requests.

==================================================
3. ROUTES
==================================================

Use the existing routes:

- /en/dashboard
- /id/dashboard
- /zh-CN/dashboard

Render Buyer Dashboard content inside the existing DashboardLayout.

Do not create /buyer-dashboard.

Keep the prototype/demo indicator because no live backend is connected.

==================================================
4. PAGE PURPOSE
==================================================

The Buyer Dashboard must answer:

1. What requires attention now?
2. Which RFQs or trades are waiting for action?
3. Which shipments are moving or delayed?
4. Which arrival inspection is nearing its deadline?
5. Are there unresolved claims?
6. What recent Testnet activity exists?

Do not add decorative or generic analytics.

==================================================
5. PAGE STRUCTURE
==================================================

Render in this order:

1. Breadcrumb
2. Page header
3. Prototype-data disclosure banner
4. Critical action banner
5. Six KPI cards
6. Trade Activity line chart
7. Shipment Status donut chart
8. Action Required table
9. Recent Test XLM Transactions table

Desktop layout:

- KPI grid: six cards in one row on very wide screens, otherwise 3 × 2;
- analytics row: Trade Activity about 2/3 width, Shipment Status about 1/3;
- tables: full width.

==================================================
6. PAGE HEADER
==================================================

Titles:

- en: Buyer Dashboard
- id: Dasbor Pembeli
- zh-CN: 买家仪表板

Subtitles:

- en: Monitor RFQs, funding, shipments, arrival inspections, claims, and Testnet activity from one workspace.
- id: Pantau RFQ, pendanaan, pengiriman, inspeksi kedatangan, klaim, dan aktivitas Testnet dari satu ruang kerja.
- zh-CN: 在一个工作区中查看询价、资金、运输、到货检验、索赔和测试网活动。

Primary action:

- en: Create RFQ
- id: Buat RFQ
- zh-CN: 创建询价

RFQ is not implemented yet, so the action must be disabled or marked Coming Soon. Never navigate to a broken route.

==================================================
7. PROTOTYPE DATA DISCLOSURE
==================================================

Show a translated info banner:

- en title: Prototype data
- id title: Data prototipe
- zh-CN title: 原型数据

- en body: This dashboard uses deterministic sample data for frontend validation. It is not connected to live trade, shipment, claim, or payment services.
- id body: Dasbor ini menggunakan data contoh deterministik untuk validasi frontend. Data belum terhubung ke layanan perdagangan, pengiriman, klaim, atau pembayaran langsung.
- zh-CN body: 此仪表板使用确定性的示例数据进行前端验证，尚未连接实时贸易、运输、索赔或支付服务。

==================================================
8. CRITICAL ACTION BANNER
==================================================

Use this sample:

- en title: Arrival inspection due in 3 hours
- id title: Inspeksi kedatangan jatuh tempo dalam 3 jam
- zh-CN title: 到货检验将在 3 小时后到期

- en body: Trade TRD-2026-0042 was delivered and still requires inspection evidence.
- id body: Perdagangan TRD-2026-0042 telah diterima dan masih memerlukan bukti inspeksi.
- zh-CN body: 交易 TRD-2026-0042 已送达，仍需提交检验证据。

Action:

- en: Review inspection
- id: Tinjau inspeksi
- zh-CN: 查看检验

Arrival Inspection is not implemented yet. Keep this action disabled or use a safe Coming Soon interaction.

==================================================
9. EXACT KPI SET
==================================================

Create exactly six KPI cards. Every card must include a visible top-right ? tooltip.

1. Active RFQs
   - id: RFQ Aktif
   - zh-CN: 活跃询价
   - value: 4
   - supporting text:
     - en: Open or negotiating requests
     - id: Permintaan terbuka atau dalam negosiasi
     - zh-CN: 开放或协商中的请求
   - tooltip: Counts buyer RFQs that are open, awaiting responses, or under negotiation. The value comes from local prototype data.

2. Awaiting Funding
   - id: Menunggu Pendanaan
   - zh-CN: 等待资金
   - value: 2
   - unit: trades / perdagangan / 笔交易
   - supporting text:
     - en: Accepted trades not yet funded
     - id: Perdagangan diterima yang belum didanai
     - zh-CN: 已接受但尚未入资的交易
   - tooltip must state this is prototype workflow data, not live escrow.

3. Shipments In Transit
   - id: Pengiriman Dalam Perjalanan
   - zh-CN: 运输中的货件
   - value: 3
   - supporting text:
     - en: Departed and not yet delivered
     - id: Telah berangkat dan belum terkirim
     - zh-CN: 已出发但尚未送达
   - tooltip must state shipment events are sample data.

4. Arrival Inspection Due
   - id: Inspeksi Kedatangan Jatuh Tempo
   - zh-CN: 待完成到货检验
   - value: 1
   - supporting text:
     - en: Due in 3 hours
     - id: Jatuh tempo dalam 3 jam
     - zh-CN: 3 小时后到期
   - tooltip must explain the agreed inspection window and that policy data is prototype data.

5. Open Claims
   - id: Klaim Terbuka
   - zh-CN: 未结索赔
   - value: 1
   - supporting text:
     - en: Submitted and unresolved
     - id: Telah diajukan dan belum selesai
     - zh-CN: 已提交但尚未解决
   - tooltip must state no live mediator workflow is connected.

6. Trade Spend
   - id: Nilai Perdagangan
   - zh-CN: 交易支出
   - value: 12,450 XLM
   - badge:
     - en: TESTNET SAMPLE
     - id: CONTOH TESTNET
     - zh-CN: 测试网示例
   - supporting text:
     - en: Prototype value for selected period
     - id: Nilai prototipe untuk periode terpilih
     - zh-CN: 所选期间的原型数值
   - tooltip must state it is not real settlement and Testnet XLM has no monetary value.

Use one reusable KpiCard organism.

==================================================
10. TRADE ACTIVITY CHART
==================================================

Title:

- en: Trade Activity
- id: Aktivitas Perdagangan
- zh-CN: 交易活动

Chart type:

- line chart;
- two series;
- six months.

Exact data:

| Month | RFQs | Confirmed Trades |
| Jan | 3 | 1 |
| Feb | 5 | 2 |
| Mar | 4 | 2 |
| Apr | 7 | 3 |
| May | 6 | 3 |
| Jun | 8 | 4 |

Series labels:

- en: RFQs, Confirmed Trades
- id: RFQ, Perdagangan Terkonfirmasi
- zh-CN: 询价, 已确认交易

Card requirements:

- visible ? tooltip;
- legend;
- period selector: Last 6 months;
- unit: count;
- text summary for accessibility;
- loading, empty, and error states;
- Prototype data source label;
- no 3D effect or decorative chart styling.

==================================================
11. SHIPMENT STATUS CHART
==================================================

Title:

- en: Shipment Status
- id: Status Pengiriman
- zh-CN: 货件状态

Chart type:

- donut;
- four segments only.

Exact data:

- Preparing: 2
- In Transit: 3
- Arrived: 1
- Delayed: 1

Localized labels:

- id: Persiapan, Dalam Perjalanan, Tiba, Tertunda
- zh-CN: 准备中, 运输中, 已到达, 延误

Requirements:

- center total: 7;
- visible ? tooltip;
- legend;
- accessible text summary;
- loading, empty, and error states;
- delayed status represented by text and color;
- tooltip states this is not live airline/forwarder data.

==================================================
12. ACTION REQUIRED TABLE
==================================================

Title:

- en: Action Required
- id: Tindakan Diperlukan
- zh-CN: 待处理事项

Exact columns:

1. Priority
2. Reference
3. Exporter
4. Required Action
5. Deadline
6. Status
7. Action

Localized headers:

- id: Prioritas, Referensi, Eksportir, Tindakan, Batas Waktu, Status, Aksi
- zh-CN: 优先级, 参考编号, 出口商, 所需操作, 截止时间, 状态, 操作

Exact sample rows:

1.
- Priority: High
- Reference: TRD-2026-0042
- Exporter: PT Nusantara Aquatic Export
- Required Action: Complete arrival inspection
- Deadline: Today, 14:30 JST
- Status: Inspection Pending
- Action: Review

2.
- Priority: Medium
- Reference: TRD-2026-0048
- Exporter: BlueRiver Ornamental Fish
- Required Action: Complete Testnet funding evidence
- Deadline: Tomorrow, 10:00 JST
- Status: Awaiting Funding
- Action: Review

3.
- Priority: Medium
- Reference: RFQ-2026-0061
- Exporter: 3 invited exporters
- Required Action: Compare received quotations
- Deadline: 18 Jul 2026
- Status: 2 Responses
- Action: Compare

4.
- Priority: Low
- Reference: CLM-2026-0012
- Exporter: PT Nusantara Aquatic Export
- Required Action: Review exporter response
- Deadline: 19 Jul 2026
- Status: Negotiating
- Action: Review

Requirements:

- reusable DataTable;
- sticky header on desktop;
- horizontal scroll on small screens;
- priority and status use icon + text + semantic color;
- visible keyboard-accessible action;
- action must not navigate to broken pages;
- table wrapper has visible ? tooltip;
- all rows are clearly prototype data.

==================================================
13. RECENT TEST XLM TRANSACTIONS
==================================================

Title:

- en: Recent Test XLM Transactions
- id: Transaksi Uji XLM Terbaru
- zh-CN: 最近的 XLM 测试交易

Exact columns:

1. Time
2. Type
3. Recipient
4. Amount
5. Network
6. Status
7. Transaction Hash

Exact sample rows:

1.
- Time: 10:42
- Type: Test Payment
- Recipient: GABC...7XQ2
- Amount: 1.2500000 XLM
- Network: Testnet
- Status: Successful
- Transaction Hash: 8f31...c9a2

2.
- Time: Yesterday, 16:05
- Type: Test Payment
- Recipient: GB7N...P4K8
- Amount: 0.5000000 XLM
- Network: Testnet
- Status: Successful
- Transaction Hash: 3b91...d117

3.
- Time: 15 Jul, 09:14
- Type: Test Payment
- Recipient: GD44...2LM9
- Amount: 2.0000000 XLM
- Network: Testnet
- Status: Failed
- Transaction Hash: Not available

Requirements:

- clearly mark all data as prototype/sample;
- do not imply this is real wallet history;
- do not add a Send XLM form;
- failed transaction must not show a fake hash;
- include locale-aware Open Test XLM action;
- card has visible ? tooltip;
- tooltip explains actual wallet actions remain on the public Test XLM page.

==================================================
14. MOCK DATA STANDARD
==================================================

Use centralized typed deterministic mock data.

Recommended file:

src/features/buyer-dashboard/data/buyer-dashboard.mock.ts

Types:

- BuyerDashboardKpi
- TradeActivityPoint
- ShipmentStatusItem
- BuyerActionItem
- RecentTestTransaction

Rules:

- no random values;
- no unstable current-time generation;
- identifiers stay locale-neutral;
- labels/statuses use translation keys;
- mark data as prototype.

==================================================
15. ATOMIC DESIGN
==================================================

Reuse current shared components.

Only create missing reusable components.

Possible components:

Atoms:
- MetricValue
- PriorityIndicator
- TestnetScopeBadge

Molecules:
- ActionStatus
- TransactionStatus
- PrototypeDataNote

Organisms:
- KpiCard
- ChartCard
- CriticalActionBanner
- BuyerActionTable
- RecentTransactionTable

Page:
- BuyerDashboardPage

Do not create another DashboardLayout.
Do not duplicate GlassCard, DataTable, HelpTooltip, LanguageSwitcher, or StatusBadge.

==================================================
16. STORYBOOK
==================================================

Create/update stories for:

- KpiCard
- ChartCard
- CriticalActionBanner
- BuyerActionTable
- RecentTransactionTable
- PriorityIndicator
- TransactionStatus
- PrototypeDataBanner

Required variants:

KpiCard:
- ActiveRFQs
- AwaitingFunding
- InspectionDue
- TradeSpendTestnet
- Loading
- Empty

ChartCard:
- TradeActivity
- ShipmentStatus
- Loading
- Empty
- Error

BuyerActionTable:
- Default
- Empty
- MobileOverflow
- LongIndonesianText
- SimplifiedChinese

RecentTransactionTable:
- Default
- SuccessAndFailure
- Empty

Locale variants:

- English
- BahasaIndonesia
- SimplifiedChinese

Use the actual i18n provider.

==================================================
17. RESPONSIVE DESIGN
==================================================

Large desktop:

- fluid content width up to about 1600 px;
- six KPI cards in one row if readable;
- otherwise 3 × 2;
- analytics 2/3 + 1/3.

Medium desktop:

- KPI 3 × 2;
- charts side-by-side only while readable.

Tablet:

- KPI two columns;
- charts may stack;
- tables horizontally scroll.

Mobile:

- KPI one column or safe compact two-column layout;
- charts stack;
- tables use horizontal scroll or accessible card-list adaptation;
- no page-level horizontal overflow;
- at least 16 px content padding.

==================================================
18. MINOR SHELL REFINEMENTS ALLOWED
==================================================

Small safe refinements are allowed:

- expanded sidebar about 240–260 px;
- collapsed sidebar about 72–80 px;
- prevent label truncation in expanded state;
- sidebar text about 13–14 px;
- card body about 14 px;
- card title about 15–16 px;
- page title about 26–30 px;
- content width fluid up to about 1600 px;
- reduce visual dominance of Coming Soon badges;
- keep topbar responsive.

Do not redesign the shell or change its information architecture.

==================================================
19. TOOLTIP STANDARD
==================================================

Every KPI card, chart card, table card, and summary banner/card must have a visible ? help icon.

Support:

- hover;
- keyboard focus;
- mobile tap;
- Escape close;
- visible focus ring;
- localized content;
- accessible label.

Do not hide required actions inside tooltips.

==================================================
20. ACCESSIBILITY
==================================================

Required:

- semantic heading hierarchy;
- chart text summaries;
- correct table headers;
- status shown by text + icon, not color only;
- keyboard-accessible actions;
- visible focus state;
- accessible tooltips;
- Testnet scope communicated as text;
- horizontal table scrolling remains keyboard reachable;
- reduced motion respected.

==================================================
21. TESTS
==================================================

Add tests where practical for:

- Buyer Dashboard renders in en, id, and zh-CN;
- exactly six KPI cards render;
- Trade Spend contains Testnet sample disclosure;
- action table has the exact columns;
- transaction table has the exact columns;
- failed transaction has no fake hash;
- disabled actions do not navigate to broken routes;
- locale-aware Test XLM link works;
- tooltip controls are accessible;
- prototype-data banner renders;
- no Exporter Dashboard content renders;
- no backend request occurs;
- mock data remains deterministic.

Do not remove or weaken existing tests.

==================================================
22. QUALITY COMMANDS
==================================================

Run:

pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook

Do not report completion while any command is failing.

==================================================
23. ACCEPTANCE CRITERIA
==================================================

Routes:
- [ ] /en/dashboard renders Buyer Dashboard
- [ ] /id/dashboard renders Buyer Dashboard
- [ ] /zh-CN/dashboard renders Buyer Dashboard
- [ ] Test XLM remains public
- [ ] Login remains available

Content:
- [ ] prototype-data banner exists
- [ ] critical inspection banner exists
- [ ] exactly six KPI cards exist
- [ ] Trade Activity line chart exists
- [ ] Shipment Status donut chart exists
- [ ] Action Required table exists
- [ ] Recent Test XLM Transactions exists

Exact KPI values:
- [ ] Active RFQs = 4
- [ ] Awaiting Funding = 2 trades
- [ ] Shipments In Transit = 3
- [ ] Arrival Inspection Due = 1
- [ ] Open Claims = 1
- [ ] Trade Spend = 12,450 XLM
- [ ] Trade Spend is clearly Testnet sample data

Architecture:
- [ ] typed deterministic mock data is centralized
- [ ] existing DashboardLayout is reused
- [ ] shared components are not duplicated
- [ ] Atomic Design is followed
- [ ] Storybook stories exist

I18n:
- [ ] English exists
- [ ] Bahasa Indonesia exists
- [ ] Simplified Chinese exists
- [ ] no new hardcoded user-facing strings
- [ ] locale switch preserves /dashboard

Responsive:
- [ ] large desktop is fluid
- [ ] medium desktop is readable
- [ ] tablet works
- [ ] mobile works
- [ ] no page-level horizontal overflow

Scope:
- [ ] no Exporter Dashboard created
- [ ] no backend/API integration
- [ ] no real authentication
- [ ] no escrow
- [ ] no Mainnet values
- [ ] no broken routes

Quality:
- [ ] lint passes
- [ ] typecheck passes
- [ ] tests pass
- [ ] production build passes
- [ ] Storybook build passes

==================================================
24. FINAL REPORT FORMAT
==================================================

Report:

1. Documentation read
2. Existing page protection check
3. Implementation plan
4. Files created
5. Files modified
6. Components reused
7. New reusable components
8. Mock-data types and files
9. Translation keys added
10. Storybook stories created
11. Tests created or updated
12. Commands run and results
13. Large desktop validation
14. Medium desktop validation
15. Tablet validation
16. Mobile validation
17. Accessibility validation
18. Known limitations
19. Confirmation that Exporter Dashboard was not started

Do not continue to Exporter Dashboard after completing this task.
```

---

## Recommended Placement

```text
aquatrade-fe/
└── docs/
    └── 01-blueprint/
        └── handoff/
            └── 24-CLAUDE-TASK-SLICE-BUYER-DASHBOARD.md
```

## Recommended Claude Command

```text
Read and execute:

docs/01-blueprint/handoff/24-CLAUDE-TASK-SLICE-BUYER-DASHBOARD.md

Reuse the existing Dashboard Shell.
Protect Login and Test XLM.
Do not continue to Exporter Dashboard.
```
