# 04-ROLES-PERMISSIONS.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Role Definitions

| Role | Primary Responsibility |
|---|---|
| Buyer / Importer | Creates RFQ, reviews quotations, accepts trade, connects wallet, inspects arrival, submits claim. |
| Exporter | Creates batches, responds to RFQ, prepares documents/packing/shipment, responds to claims. |
| Breeder / Supplier | Supplies source and batch data to exporter; may create batches under exporter governance. |
| QC / Inspector | Reviews batch condition, packing readiness, and evidence. |
| Logistics / Forwarder | Updates booking, AWB, route, timestamps, and delivery events. |
| Document Verifier | Reviews configured document requirements and latest versions. |
| Mediator | Reviews evidence and records a dispute decision. |
| Finance / Approver | Monitors payment evidence, future escrow, release/refund, and reconciliation. |
| Platform Admin | Manages users, companies, policy, master data, configuration, and audit monitoring. |

## 2. Permission Matrix

Legend: `C` Create · `R` Read · `U` Update · `A` Approve/Decide · `—` No access

| Capability | Buyer | Exporter | Breeder | QC | Logistics | Verifier | Mediator | Finance | Admin |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Own company profile | R/U | R/U | R/U | R | R | R | R | R | C/R/U/A |
| Fish batch | R | C/R/U | C/R/U | R/A | R | R | R | R | C/R/U/A |
| RFQ | C/R/U | R | R | — | — | — | — | R | C/R/U/A |
| Quotation | R/A | C/R/U | R | — | R | — | — | R | C/R/U/A |
| Trade agreement | R/A | R/A | R | R | R | R | R | R/A | C/R/U/A |
| Wallet / own transaction | C/R/U | C/R/U | C/R/U | — | — | — | — | R | R |
| Document upload | R | C/R/U | C/R/U | R | C/R/U | R/A | R | R | C/R/U/A |
| Packing checklist | R | C/R/U | C/R/U | R/A | R | R | R | R | C/R/U/A |
| Shipment events | R | R/U | R | R | C/R/U | R | R | R | C/R/U/A |
| Arrival inspection | C/R/U/A | R | R | R | R | R | R | R | C/R/U/A |
| Claim | C/R/U | R/U | R | R | R | R | R/A | R/A | C/R/U/A |
| Policy/configuration | R | R | R | R | R | R | R | R | C/R/U/A |
| Cross-company audit log | — | — | — | — | — | — | scoped R | scoped R | R |

## 3. Tenant and Data-Visibility Rules

1. A user sees only companies and trades they are authorized to access.
2. Exporters cannot see competing exporters' quotations.
3. Buyers can compare quotations only for their own RFQs.
4. Public batch passport fields are explicitly whitelisted.
5. Full health, identity, and official documents are never public by default.
6. A mediator receives access only after assignment to a dispute.
7. Admin access is audited and should not silently modify immutable evidence.
8. Wallet signatures are performed by the wallet owner, not by the backend.

## 4. MVP Role Consolidation

For early validation:

- Exporter may also act as internal QC.
- Buyer may also act as finance approver.
- Platform Admin may act as mediator.
- Logistics events may be entered by exporter operations.
- Document verifier may be exporter operations or platform admin.

The UI must still label the acting responsibility so later separation does not require redesigning the workflow.


## 5. Locale Preference Permission

Every user may change their own language preference. Company administrators cannot silently override a user's personal locale. Before authentication, the preference is stored in a cookie; after authentication, it is persisted to the user profile and synchronized across devices.
