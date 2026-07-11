# 09-INFORMATION-ARCHITECTURE.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Global IA

```text
Public
├── Landing
├── How It Works
├── Buyer
├── Exporter
├── FAQ
└── Access

Authenticated
├── Dashboard
├── Company
├── Test XLM
├── Fish Supply
│   ├── Fish Batches
│   └── Private Catalog
├── Commercial
│   ├── RFQs
│   ├── Quotations
│   └── Trade Orders
├── Assurance
│   ├── Documents
│   ├── Packing
│   └── QC
├── Logistics
│   ├── Shipments
│   └── Arrival Inspections
├── Claims
├── Tasks & Notifications
├── Reports
└── Administration
```

## 2. Object-Centered Navigation

Primary objects:

- Company
- Fish Batch
- RFQ
- Quotation
- Trade
- Document
- Packing Plan
- Shipment
- Arrival Inspection
- Claim
- Wallet Transaction

Each object page should expose:

1. identity;
2. current state;
3. next action and owner;
4. key metrics;
5. related records;
6. timeline;
7. evidence;
8. permissions;
9. audit information.

## 3. MVP Sidebar

### Buyer Sidebar

- Buyer Dashboard
- RFQs
- Quotations
- Trade Orders
- Shipments
- Claims
- Test XLM
- Notifications

### Exporter Sidebar

- Exporter Dashboard
- Fish Batches
- Private Catalog
- RFQs
- Quotations
- Trade Orders
- Packing
- Shipments
- Claims
- Test XLM

### Admin Sidebar

- Operations Dashboard
- Companies
- Document Verification
- Shipments
- Claims
- Master Data
- Configuration
- Audit & Monitoring


## 4. Locale-Aware Navigation

```text
/en/login       /id/login       /zh-CN/login
/en/test-xlm    /id/test-xlm    /zh-CN/test-xlm
```

The White Belt navigation uses one top-level item:

| Locale | Label |
|---|---|
| English | Test XLM |
| Bahasa Indonesia | Uji XLM |
| Simplified Chinese | XLM 测试 |


## 5. White Belt Public Access Rule

`/en/test-xlm`, `/id/test-xlm`, and `/zh-CN/test-xlm` are public reviewer routes. Login is not a prerequisite for Level 1. When backend authentication is introduced later, the public White Belt demonstration path must remain available or a reviewer-safe demo route must be provided.
