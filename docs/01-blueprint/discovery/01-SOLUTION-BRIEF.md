# 01-SOLUTION-BRIEF.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Solution Identity

| Field | Value |
|---|---|
| Solution Code | AQT-SOL-001 |
| Solution Name | AquaTrade |
| Product Category | Cross-border ornamental fish trade assurance |
| Product Model | B2B, multi-company, multi-role, hybrid Web3 |
| Initial Network | Stellar Testnet |
| Long-term Network | Stellar Mainnet after security and market-fit checkpoints |
| Core UI | English, Bahasa Indonesia, and Simplified Chinese |
| Current Program Scope | White Belt Level 1 + future business roadmap |
| Design Language | Oceanic Enterprise Glassmorphism |
| Primary Channels | Responsive web, mobile-first operational flows |

---

## 2. One-Line Purpose

> **AquaTrade helps ornamental fish exporters and international buyers coordinate trustworthy batches, quotations, documents, packing, shipment, arrival inspection, claims, and Stellar-based payments in one traceable workflow.**

## 3. Product Positioning

AquaTrade is not initially a public marketplace. It is a private B2B transaction workspace. The product should first prove that one exporter and one importer can complete a structured trade with consistent data and evidence.

## 4. Solution Scope

### Phase WB — White Belt

- public access without application login;
- Freighter connect/disconnect
- Stellar Testnet network guard
- XLM balance
- direct native-XLM test payment
- transaction result and hash
- public repository and deployment

### Phase MVP — Business Validation

- company onboarding;
- buyer/exporter dashboards;
- fish batch passport;
- RFQ and quotation;
- trade order;
- document checklist;
- packing checklist;
- shipment detail and timeline;
- arrival inspection;
- manual DOA claim;
- notifications and audit events.

### Phase Contract — Meaningful Web3

- trade smart contract;
- authorized buyer/exporter/mediator roles;
- escrow funding;
- acceptance and release;
- refund or partial refund;
- claim state;
- immutable contract events;
- selected document hashes.

### Phase Production

- Mainnet pilot;
- security review;
- event ingestion and reconciliation;
- real users and real-world interaction;
- asset/on-ramp/off-ramp partner validation;
- monitoring and incident procedures.

## 5. Key Product Differentiators

1. Fish-batch passport designed for living ornamental products.
2. Packing and arrival evidence linked to an agreed claim policy.
3. Trade lifecycle built around cross-border operational reality.
4. Direct path from a simple White Belt payment dApp to meaningful escrow.
5. Enterprise-grade auditability without putting sensitive documents on-chain.
6. UI prompts designed at component and data-field level for deterministic Claude output.

## 6. Non-Goals for Initial MVP

- issuing government health or quarantine certificates;
- replacing customs, quarantine, airline, or banking systems;
- building a decentralized exchange;
- creating a new stablecoin;
- public anonymous marketplace;
- automatic AI health diagnosis;
- full logistics API integration;
- production Mainnet escrow before review.

## 7. Success Criteria

| Stage | Success Signal |
|---|---|
| White Belt | Public app completes wallet, balance, Testnet XLM transaction, and evidence checklist |
| UX Validation | Exporter and buyer can explain the prototype flow without facilitation |
| Business MVP | One realistic trade simulation reaches arrival and claim/acceptance |
| Contract MVP | Unauthorized action, double release, and invalid state transitions are prevented |
| User Traction | Approved users complete real interactions after mentor checkpoint |
| Production | Monitored Mainnet pilot with documented incident and reconciliation procedures |


## 8. Confirmed Language and Navigation Standard

| Area | Standard |
|---|---|
| Supported languages | English, Bahasa Indonesia, Simplified Chinese |
| Locale codes | `en`, `id`, `zh-CN` |
| Default/fallback | English |
| White Belt primary menu | Test XLM |
| Localized menu | Test XLM · Uji XLM · XLM 测试 |
| Canonical page route | `/{locale}/test-xlm` |
| Page scope | Wallet connect/disconnect, network guard, XLM balance, Testnet funding help, send XLM, result, transaction hash |

This page remains a direct Testnet transfer experience and must never be described as escrow. It must be publicly accessible for reviewer testing and must not depend on backend authentication.


## 9. Product Naming Boundary

- **AquaTrade** is the long-term cross-border ornamental-fish trade platform.
- **AquaTrade Pay** is the White Belt-facing Testnet learning experience and visual identity used on the current public dApp.
- The names may coexist, but UI copy must not imply that White Belt already provides production trade settlement or escrow.
