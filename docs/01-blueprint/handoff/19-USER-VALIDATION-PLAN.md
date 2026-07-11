# 19-USER-VALIDATION-PLAN.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Validation Goal

Validate the business flow before finalizing database entities, state machines, APIs, and smart contracts.

## 2. Participant Targets

| Participant | Minimum |
|---|---:|
| Ornamental fish exporter | 2 |
| Overseas buyer / importer | 2 |
| Breeder supplying exporter | 1 |
| Packing/QC operator | 1 |
| Freight/logistics partner | 1 |
| Domain or document specialist | 1 |

## 3. Prototype Scenario

```text
Buyer requests 200 ornamental fish for Japan
→ exporter quotes two batch allocations
→ both parties accept terms
→ Testnet payment evidence is recorded
→ exporter completes documents and packing
→ shipment departs and arrives
→ buyer records 3 DOA
→ buyer opens a partial-refund claim
→ exporter responds
→ mediator resolves the claim
```

## 4. Questions by Domain

### Buyer / Importer

- How do you currently find and assess exporters?
- Which batch fields determine whether you buy?
- Do you buy individual fish, lots, or mixed batch allocations?
- Which cost components must be visible in a quotation?
- What starts the DOA inspection window?
- What evidence is accepted for DOA, missing quantity, or mismatch?
- Would you fund a neutral escrow before shipment?
- When is replacement preferred over refund?

### Exporter

- How are batches created and split?
- Who decides grade, size, and available quantity?
- When does a quotation reserve stock?
- Which documents are blocking before shipment?
- What packing checks are essential?
- Who enters AWB and flight events?
- What types of claims are most disputed?
- Which payment risks are not solved by the current workflow?

### Logistics

- Which events are available and how quickly?
- What is manual versus API-generated?
- How are delays, transit, and handover documented?
- Which timestamp determines delivery?

### Payment / Web3

- Is direct wallet payment understandable?
- Which party should fund escrow?
- Which party can approve release?
- What happens if the buyer is unresponsive?
- What happens if shipment is delayed?
- Is a mediator acceptable?
- Which payment asset and conversion process are realistic?

## 5. Page-Level Validation Tasks

1. Create a batch.
2. Find its available quantity and QC status.
3. Create an RFQ.
4. Compare quotation cost and policy.
5. Identify the trade's next action.
6. Find which document blocks shipment.
7. Complete packing readiness.
8. Locate shipment ETA and delay.
9. Record arrival condition.
10. Submit and respond to a DOA claim.
11. Explain whether the payment shown is Testnet direct payment or escrow.

## 6. Evidence Capture

For every session record:

- participant role and market;
- task success/failure;
- time to complete;
- confusing label;
- missing data;
- unexpected business rule;
- requested feature;
- severity;
- proposed decision;
- owner;
- target document to update.

## 7. Database Freeze Gate

Do not finalize the ERD until:

- batch unit and reservation behavior are confirmed;
- quotation cost model is confirmed;
- trade state ownership is confirmed;
- document requirements have a route strategy;
- arrival count reconciliation is confirmed;
- claim evidence and resolution types are confirmed;
- future escrow state and authority are reviewed.


## 8. Multilingual Validation

Run the login and Test XLM tasks in all three languages. Confirm that Indonesian copy does not overflow and Chinese headings/tooltips remain readable. Ask users whether the translated terminology for wallet, Testnet, transaction, RFQ, shipment, and DOA is understandable in their trade context.
