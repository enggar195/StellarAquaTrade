# 02-MODULE-MAP.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Module Architecture Overview

```text
AquaTrade
├── Access & Identity
├── Trade Discovery and Commercial Agreement
├── Fish Batch Assurance
├── Documents, Packing and Logistics
├── Arrival, Claims and Settlement
├── Stellar Wallet and Smart-Contract Layer
└── Administration, Analytics and Monitoring
```

## 2. Complete Module Map

| Code | Module | Purpose | Key Users | Target Phase |
|---|---|---|---|---|
| AQT-MOD-01 | Public Website & Access | Explain the product, attract qualified users, and provide secure access. | Buyer, Exporter, Public | MVP |
| AQT-MOD-02 | User, Company & Verification | Manage enterprise identity, company onboarding, team membership, and verification. | All authenticated roles, Admin | MVP |
| AQT-MOD-03 | Stellar Wallet & Web3 Account | Connect a user-controlled Stellar wallet and expose balances and transaction status. | Buyer, Exporter, Finance | WHITE BELT → SMART CONTRACT |
| AQT-MOD-04 | Dashboard & Work Center | Surface operational priorities, risks, and next actions by role. | Buyer, Exporter, Operations, Admin | MVP |
| AQT-MOD-05 | Ornamental Fish Master Data | Standardize species, varieties, grades, sizes, and packing references. | Exporter, QC, Admin | MVP |
| AQT-MOD-06 | Fish Batch Passport | Create a traceable commercial and health profile for each sellable fish batch. | Breeder, Exporter, Buyer, QC | MVP |
| AQT-MOD-07 | Private Product Catalog | Share available batches with approved buyers without starting as a public marketplace. | Exporter, Buyer | MVP |
| AQT-MOD-08 | Request for Quotation | Capture buyer demand and invite qualified exporters to respond. | Buyer, Exporter | MVP |
| AQT-MOD-09 | Quotation & Negotiation | Structure price, fees, shipment assumptions, and DOA policy before trade confirmation. | Buyer, Exporter | MVP |
| AQT-MOD-10 | Trade Order & Agreement | Convert an accepted quotation into a controlled trade agreement and state machine. | Buyer, Exporter, Operations | MVP |
| AQT-MOD-11 | Payment & Stellar Escrow | Manage test payments first, then milestone escrow, release, refund, and reconciliation. | Buyer, Exporter, Finance, Mediator | WHITE BELT → CONTRACT |
| AQT-MOD-12 | Health, Quarantine & Compliance Documents | Manage official-document references, versions, expiry, review, and tamper-evident hashes. | Exporter, Buyer, Verifier, Operations | MVP |
| AQT-MOD-13 | Pre-Shipment & Packing | Control fish allocation, fasting, treatment, bagging, boxing, evidence, and readiness. | Exporter, QC, Operations | MVP |
| AQT-MOD-14 | Logistics & Shipment Tracking | Track AWB, flight, box movement, delay, and delivery milestones. | Exporter, Buyer, Logistics, Operations | MVP |
| AQT-MOD-15 | Arrival Inspection | Capture timestamped unboxing evidence and fish condition within a defined claim window. | Buyer, Importer QC | MVP |
| AQT-MOD-16 | DOA Claim & Dispute | Resolve dead-on-arrival, mismatch, delay, and packing claims fairly and audibly. | Buyer, Exporter, Mediator | MVP → CONTRACT |
| AQT-MOD-17 | Communication & Collaboration | Keep trade, document, shipment, and claim discussions in context. | All trade participants | P2 |
| AQT-MOD-18 | Tasks, Alerts & Notifications | Drive time-sensitive action and escalation. | All authenticated roles | MVP |
| AQT-MOD-19 | Rating & Reputation | Build evidence-based buyer and exporter trust signals after completed trades. | Buyer, Exporter, Admin | P2 |
| AQT-MOD-20 | Finance & Settlement | Provide financial visibility, settlement records, refunds, and fee reporting. | Finance, Buyer, Exporter, Admin | P2 |
| AQT-MOD-21 | Reporting & Analytics | Measure trade, shipment, quality, DOA, payment, and user traction. | Management, Operations, Program reviewers | P2 |
| AQT-MOD-22 | Administration & Master Configuration | Control users, policies, fees, routes, document rules, and feature flags. | Admin | MVP |
| AQT-MOD-23 | Audit, Security & Blockchain Monitoring | Provide tamper-evident auditability and operational monitoring. | Admin, Security, Operations | P2 |

## 3. Dependency Order

```text
Identity and Company
    ↓
Fish Master and Batch Passport
    ↓
Catalog / RFQ
    ↓
Quotation
    ↓
Trade Agreement
    ↓
Payment Evidence / Future Escrow
    ↓
Documents + Packing
    ↓
Shipment
    ↓
Arrival Inspection
    ↓
Acceptance or Claim
    ↓
Settlement + Reputation + Analytics
```

## 4. MVP Boundary

The MVP design prototype prioritizes 25 pages. The remaining pages remain in the page universe so architecture and future navigation do not become dead ends. Database design must still be driven by validated workflows, not by creating one table per future page.


## 5. White Belt Module Consolidation

For the current White Belt application, `AQT-MOD-03` is presented to users as one menu and page: **Test XLM**.

```text
Test XLM
├── Testnet information
├── Freighter connection
├── Public wallet address
├── XLM balance
├── Testnet funding help
├── Send Test XLM
├── Transaction status
└── Transaction hash / explorer
```

Separate Wallet, Balance, Payment, and Transaction navigation items are not used at this stage. Future Escrow, Settlement, and Finance remain separate modules after smart-contract requirements are activated.


## 6. Active White Belt Boundary

Only `AQT-PG-03-01 — Test XLM` is active for the Level 1 submission. Login, registration, company onboarding, business dashboards, trade, shipment, and claim screens are future-product design artifacts and must not block or expand the public White Belt flow.
