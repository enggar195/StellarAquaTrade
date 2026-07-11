# 06-KPI-DASHBOARD.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. KPI Catalog

| Code | KPI | Definition | Primary Screen | Recommended Component |
|---|---|---|---|---|
| AQT-KPI-01 | Active RFQs | Count of RFQs in open/negotiating states | Buyer/Exporter Dashboard | KPI card |
| AQT-KPI-02 | Quotation Response Rate | RFQs answered ÷ invited RFQs | Exporter Analytics | Line + percentage |
| AQT-KPI-03 | Available Fish Quantity | Sum of available batch quantity | Exporter Dashboard | KPI + horizontal bar |
| AQT-KPI-04 | Shipment Readiness | Completed required readiness items ÷ total | Trade Detail | Radial progress |
| AQT-KPI-05 | On-Time Departure Rate | Shipments departed on or before threshold ÷ departed shipments | Shipment Analytics | Line |
| AQT-KPI-06 | Arrival DOA Rate | DOA quantity ÷ expected delivered quantity | Quality Analytics | Line + stacked bar |
| AQT-KPI-07 | Claim Rate | Trades with claims ÷ delivered trades | Quality Analytics | Line |
| AQT-KPI-08 | Average Claim Resolution Time | Resolved timestamp − submitted timestamp | Claims Dashboard | KPI + box/line |
| AQT-KPI-09 | Document Readiness | Verified non-expired required docs ÷ required docs | Document Checklist | Progress + donut |
| AQT-KPI-10 | Testnet Transaction Success Rate | Successful submitted transactions ÷ submitted Testnet transactions | White Belt evidence | KPI |
| AQT-KPI-11 | Active Wallets | Unique connected/verified wallets in period | Traction Dashboard | Line |
| AQT-KPI-12 | Completed Trade Flow | Trades reaching accepted or resolved state | Traction Dashboard | Funnel |

## 2. Chart Selection Rules

| Decision Question | Chart |
|---|---|
| How is a metric changing over time? | Line or area chart |
| Which category is larger? | Horizontal bar |
| What is the composition at one moment? | Donut, maximum 5 categories |
| How does a lifecycle convert? | Funnel |
| Planned versus actual logistics time? | Gantt-like timeline |
| Expected versus condition counts? | Stacked bar |
| How much of a checklist is complete? | Radial progress or linear progress |
| How is a quoted total composed? | Waterfall |

Do not use decorative charts. Every chart card includes:

- clear title;
- selected period;
- legend;
- units;
- empty and error states;
- `?` tooltip with metric definition, source, and why it matters.

## 3. Sample Dashboard Tooltips

| Card | Tooltip Content |
|---|---|
| Arrival Inspection Due | “Trades delivered within their inspection window and still awaiting buyer evidence. Act before the countdown reaches zero to preserve claim eligibility.” |
| Funds Secured | “Testnet or contract-linked funds associated with active trades. Testnet values have no monetary value and must not be treated as settlement.” |
| Shipment Readiness | “Percentage of required allocation, documents, packing, and QC items completed for this trade.” |
| DOA Rate | “Dead-on-arrival quantity divided by expected delivered quantity for the selected period. Excludes unverified or expired inspection submissions.” |


## 4. Multilingual KPI Presentation

KPI definitions and tooltips must be translated into all supported languages. Metric calculation remains language-neutral. Chart legends, axis labels, table headers, period selectors, empty states, and exported display labels must use translation keys. XLM values retain explicit precision and asset code in every language.
