# 10-USER-FLOWS.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. End-to-End Trade Flow

```text
[Company Verified]
       ↓
[Exporter Publishes Batch] ← [Buyer Creates RFQ]
       ↓                         ↓
       └────── [Quotation] ──────┘
                    ↓
            [Terms Accepted]
                    ↓
             [Trade Created]
                    ↓
      [Direct Testnet Payment Evidence]
           Future: [Escrow Funded]
                    ↓
        [Documents + Allocation]
                    ↓
          [Packing + QC Approval]
                    ↓
             [Shipment Events]
                    ↓
           [Arrival Inspection]
             ↙              ↘
       [Accepted]          [Claim]
           ↓                  ↓
   Future release      Response / mediation
                              ↓
                Refund / replacement / release
```

## 2. White Belt Flow

```text
Open public application
→ Connect Freighter
→ Confirm Testnet
→ Display public address and XLM balance
→ Enter recipient and amount
→ Build transaction
→ User signs in Freighter
→ Submit to Testnet
→ Show success/failure
→ Show transaction hash
→ Refresh balance
```

## 3. Batch-to-RFQ Flow

```text
Exporter creates batch draft
→ uploads representative media
→ adds health and commercial context
→ internal QC passes batch
→ batch becomes available
→ buyer views private catalog or creates RFQ
→ exporter references batch in quotation
```

## 4. Packing-to-Shipment Flow

```text
Trade funded/confirmed
→ fish quantity allocated
→ documents satisfy route checklist
→ packing plan created
→ fasting/treatment checks completed
→ bags and boxes recorded
→ evidence uploaded
→ QC approves readiness
→ shipment booking and AWB entered
→ handover/departure events recorded
```

## 5. Arrival and Claim Flow

```text
Shipment marked delivered
→ claim-window countdown starts
→ buyer records box and fish condition
→ counts reconcile
→ buyer accepts
OR
→ buyer submits issue with evidence
→ claim created
→ exporter responds
→ agreement reached or mediator assigned
→ resolution recorded
```

## 6. Required Validation Questions at Each Gate

| Gate | Validation Question |
|---|---|
| Batch available | Who is authorized to publish and what makes a batch sellable? |
| Quotation accepted | Which costs and policy terms become binding? |
| Trade funded | What payment evidence is sufficient in each phase? |
| Shipment ready | Which documents and packing checks are truly blocking? |
| Delivered | Which event starts the inspection window? |
| Claim submitted | What minimum evidence and quantity reconciliation are required? |
| Resolution | How are refund, replacement, and partial release calculated? |


## 7. Language Selection Flow

```text
First visit
→ detect browser locale
→ use en/id/zh-CN when supported, otherwise English
→ user selects language
→ preserve current route
→ save cookie
→ after login persist to user profile
```

Do not switch language while a Freighter signature request is active. Complete or cancel the signature flow first.
