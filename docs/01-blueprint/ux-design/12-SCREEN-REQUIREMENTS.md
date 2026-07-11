# 12-SCREEN-REQUIREMENTS.md
## AquaTrade — Cross-Border Ornamental Fish Trade Assurance
### Product Discovery & UX Blueprint

> **Source of Truth:** `discovery/00-RAW-SOURCE-DATA-CLEANED.md`  
> **Document Version:** 0.4 | **Date:** 2026-07-11  
> **Status:** Pre-validation blueprint — business flow must be validated with exporters, importers, logistics partners, and domain experts.

---

## 1. Usage

This document specifies the initial 25 MVP screens before high-fidelity design. Each screen includes exact components, example content, card-tooltip meaning, chart type, table fields, form fields, and state coverage.

**Global requirement:** Every visible information, KPI, chart, summary, policy, or status card includes a top-right `?` icon with a keyboard- and touch-accessible tooltip.

---

## 1. Login — `AQT-PG-01-06`

**Module:** Access  
**Target Role:** All users  
**Purpose:** Design the future company-authentication experience while keeping the current White Belt Test XLM route public.  
**Primary Action:** `Sign in — future business-MVP behavior`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Welcome Back | Secure access to AquaTrade | Explains that this form belongs to future business authentication. White Belt Test XLM remains publicly accessible and wallet connection happens on that page. |
| Platform Security | Protected company access | Explains the security measures visible to users, such as encrypted transport and session controls. |

### Required Components

- Split-screen auth layout
- Email field
- Password field
- Show password toggle
- Remember me checkbox
- Forgot password link
- Sign in button
- Create account link
- Product value panel

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- No table required.

### Form Fields

- Work email — email, required
- Password — password, required, minimum 8 characters

### Example Content

`buyer@oceanimport.jp / ••••••••`

### Required States

- Default
- Invalid credentials
- Account suspended
- Loading
- Success redirect

### UX Notes

Do not show wallet controls on this page. Follow the detailed working-port illustration in `handoff/17-DEVELOPER-HANDOFF.md`. During White Belt, treat this as a design/component prototype: do not implement fake authentication, do not store credentials, and do not gate the public Test XLM route.

---

## 2. Registration — `AQT-PG-01-07`

**Module:** Access  
**Target Role:** Buyer, Exporter, Breeder  
**Purpose:** Create an initial user account and choose the intended company role without forcing full verification at once.  
**Primary Action:** `Create account`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Account Type | Buyer / Importer or Exporter / Breeder | Explains how the selected account type changes onboarding questions and dashboard access. |
| What happens next? | Verify email → Company onboarding → Wallet connection | Sets expectations for the next steps after account creation. |

### Required Components

- Four-step progress indicator
- Role cards
- Personal information form
- Email verification notice
- Terms acceptance
- Password strength meter

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- No table required.

### Form Fields

- Account type — card selector, required
- Full name — text, required
- Work email — email, required
- Phone / WhatsApp — international phone
- Country — searchable select
- Password — required
- Confirm password — required
- Accept terms — checkbox required

### Example Content

`Aiko Tanaka, buyer@oceanimport.jp, Japan`

### Required States

- Default
- Email already registered
- Weak password
- Submission loading
- Email verification sent

### UX Notes

Role cards must include concise examples and a (?) tooltip. Keep the registration flow short; company data belongs to onboarding.

---

## 3. Company Onboarding Wizard — `AQT-PG-02-01`

**Module:** Company & Verification  
**Target Role:** Company owner / invited administrator  
**Purpose:** Collect the minimum company, trade, route, and verification data needed to operate safely.  
**Primary Action:** `Submit for verification`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Profile Completion | 72% complete | Shows how much required onboarding information is complete and which step remains. |
| Verification Readiness | 3 of 4 checks ready | Explains whether company identity, contact, trade role, and documents are ready for review. |
| Expected Review Time | 1–3 business days | Sets a transparent expectation; this is a product estimate, not a regulatory guarantee. |

### Required Components

- Five-step wizard
- Company identity form
- Trade role and markets
- Address and contacts
- Document upload
- Review summary
- Autosave indicator

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Uploaded document | Type | File name | Expiry | Status | Action`

### Form Fields

- Legal company name
- Trading name
- Company type
- Country
- Registration number
- Tax identifier optional
- Address
- Primary contact
- Trade role
- Export/import routes
- Primary airports
- Website
- Business document upload
- Terms declaration

### Example Content

`PT Nusantara Aquatic Export — Indonesia — Exporter — CGK to NRT/SIN`

### Required States

- Draft
- Incomplete required field
- Uploading
- Ready to submit
- Under review
- Revision requested

### UX Notes

Do not claim official verification by a government authority. Label the platform status as AquaTrade company verification.

---

## 4. Buyer Dashboard — `AQT-PG-04-01`

**Module:** Dashboard  
**Target Role:** Buyer / Importer  
**Purpose:** Show the buyer what requires attention today: quotations, funding, shipments, arrival inspection, and claims.  
**Primary Action:** `Create RFQ`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Active RFQs | 4 | Counts RFQs that are open, negotiating, or awaiting quotation selection. |
| Awaiting Funding | 2 trades | Counts accepted trades that cannot move to preparation until the agreed payment step is completed. |
| Shipments In Transit | 3 | Counts active shipments that have departed but are not yet delivered. |
| Arrival Inspection Due | 1 due in 3h | Highlights deliveries inside the inspection window; missing the deadline may affect claim eligibility. |
| Open Claims | 1 | Counts submitted claims not yet resolved. |
| Trade Spend | 12,450 XLM test equivalent | Shows trade value for the selected period; White Belt data must be labeled Testnet where applicable. |

### Required Components

- Role greeting
- Critical action banner
- Six KPI cards
- Trade activity trend chart
- Shipment status donut
- Action-required table
- Recent transaction list

### Charts

- Line chart — Trade activity by month: RFQs [3,5,4,7,6,8], confirmed trades [1,2,2,3,3,4]
- Donut chart — Shipment composition: Preparing 2, In transit 3, Arrived 1, Delayed 1

### Table / List Fields

- `Priority | Reference | Exporter | Required action | Deadline | Status | Action`

### Form Fields

- No primary form on this screen.

### Example Content

`TRD-2026-0042 — PT Nusantara Aquatic Export — Complete arrival inspection before 14:30 JST`

### Required States

- Default
- No active trades
- Partial data loading
- Network warning
- Critical deadline

### UX Notes

All dashboard cards have top-right (?) icons. Do not show generic charts; each chart must answer a decision question.

---

## 5. Exporter Dashboard — `AQT-PG-04-02`

**Module:** Dashboard  
**Target Role:** Exporter / Breeder  
**Purpose:** Prioritize buyer requests, batch availability, preparation work, documents, shipment readiness, and payment status.  
**Primary Action:** `Create Fish Batch`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Available Batches | 18 | Counts verified or sellable batches with remaining quantity. |
| New RFQs | 6 | Counts buyer requests that have not yet received a quotation. |
| Orders in Preparation | 3 | Counts funded or confirmed trades being prepared for shipment. |
| Documents Missing | 2 | Counts trade documents blocking shipment readiness. |
| Funds Secured | 8,500 XLM test | Shows test funds linked to active trades; never imply fiat settlement in White Belt. |
| Claims Awaiting Response | 1 | Counts buyer claims needing exporter response before the deadline. |

### Required Components

- Operations alert banner
- Six KPI cards
- Available quantity chart
- Preparation workload chart
- RFQ response table
- Upcoming shipment table

### Charts

- Horizontal bar — Available quantity by species: Betta 320, Guppy 480, Discus 85, Koi 140, Arowana 12
- Stacked bar — Orders by preparation stage: Allocation 2, Health docs 1, Packing 2, Ready 1

### Table / List Fields

- `RFQ ID | Buyer | Destination | Requested fish | Qty | Due date | Status | Action`

### Form Fields

- No primary form on this screen.

### Example Content

`RFQ-2026-0061 — Ocean Import Co. — Tokyo — Betta HMPK — 120 pcs`

### Required States

- Default
- No new RFQ
- Document blocker
- Shipment delay
- Loading

### UX Notes

Use export operations terminology. Keep revenue analytics secondary to fulfillment actions.

---

## 6. Test XLM — `AQT-PG-03-01`

**Module:** Stellar Wallet  
**Target Role:** Public White Belt participant; future Buyer, Exporter, Finance  
**Purpose:** Connect Freighter, verify Testnet, show XLM balance, and provide a safe Level 1 transaction entry point.  
**Primary Action:** `Connect Freighter / Send Test XLM`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Connected Wallet | GABC...7XQ2 | Shows the public Stellar address currently authorized in this browser. AquaTrade never asks for the secret key. |
| XLM Balance | 9,845.2500000 XLM | Shows native XLM available on the selected network. |
| Network | Stellar Testnet | Confirms transactions use Testnet funds with no real monetary value during White Belt. |
| Latest Transaction | Successful · 3 min ago | Shows the last transaction submitted from AquaTrade and its confirmation status. |

### Required Components

- Network badge
- Connect/disconnect control
- Address copy button
- Refresh balance
- Fund Testnet wallet
- Send payment form
- Transaction result card
- Explorer link

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Time | Type | Recipient | Amount | Network | Status | Transaction hash`

### Form Fields

- Recipient Stellar address — G..., required and valid
- Amount — decimal, >0, maximum 7 decimal places
- Trade reference — optional memo, max 28 bytes if used as text memo

### Example Content

`Send 1.2500000 XLM to GB...N4 for FISH-TRD-001`

### Required States

- Freighter not installed
- Disconnected
- Connecting
- Wrong network
- Account not funded
- Testnet funding in progress
- Testnet funding succeeded
- Testnet funding failed
- Insufficient spendable balance
- Awaiting signature
- Success
- User rejected
- Submission failed

### UX Notes

This page is the White Belt source of truth. Never store or request seed phrases. Clearly label direct payment versus future escrow.

---

## 7. Fish Batch List — `AQT-PG-06-01`

**Module:** Fish Batch Passport  
**Target Role:** Exporter, Breeder, QC  
**Purpose:** Manage sellable fish inventory as batches with availability, health, QC, and reservation status.  
**Primary Action:** `Create Fish Batch`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Total Active Batches | 24 | Counts non-archived batches currently managed by the company. |
| Available Quantity | 1,037 fish | Sum of remaining sellable quantity across available and partially reserved batches. |
| QC Pending | 3 | Counts batches that cannot be shared until internal QC is completed. |
| Reserved | 5 batches | Counts batches fully or partly reserved by confirmed trades. |

### Required Components

- KPI row
- Filter bar
- View toggle table/cards
- Batch table
- Quick preview drawer
- Bulk archive action

### Charts

- Donut — Batch status: Available 12, Partially reserved 4, Reserved 5, QC pending 3

### Table / List Fields

- `Batch ID | Species / Variety | Grade | Size | Available / Initial Qty | Origin | QC | Availability | Updated | Action`

### Form Fields

- No primary form on this screen.

### Example Content

`BAT-IDN-260701-014 — Betta splendens HMPK Super Red — A — 4.5–5 cm — 88/120`

### Required States

- Default
- No batches
- Filtered empty
- QC blocked
- Archive confirmation

### UX Notes

Batch IDs must be human-readable. Row click opens a detail drawer with media, health status, and reservation summary.

---

## 8. Create Fish Batch — `AQT-PG-06-02`

**Module:** Fish Batch Passport  
**Target Role:** Exporter, Breeder  
**Purpose:** Create a standardized batch record with commercial, origin, health, media, and availability information.  
**Primary Action:** `Save & Submit for QC`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Batch Identity | Species, variety, origin, and source | Explains the immutable reference fields used to identify the batch. |
| Commercial Profile | Grade, size, quantity, and visibility | Explains the information buyers use to assess suitability. |
| Health & Husbandry | Recent treatment and water-condition context | Provides operational context; it is not a substitute for an official health certificate. |
| Media Evidence | Photos and short videos | Helps buyers verify representative appearance before quotation. |

### Required Components

- Four-section stepper
- Autosave
- Media uploader
- Quantity calculator
- Preview panel
- Submit confirmation

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- No table required.

### Form Fields

- Source breeder
- Species
- Scientific name read-only
- Variety/strain
- Batch date
- Country/region of origin
- Initial quantity
- Available quantity
- Grade
- Size range
- Gender composition
- Age group
- Health condition
- Last treatment
- Feeding notes
- Water temperature
- pH
- TDS optional
- Photo upload
- Video upload
- Visibility

### Example Content

`Betta HMPK Super Red, Grade A, 120 pcs, 4.5–5 cm, Kediri, Indonesia`

### Required States

- Draft
- Validation error
- Uploading media
- QC submission
- Saved

### UX Notes

Use progressive disclosure. Do not require every husbandry field for MVP; distinguish required, recommended, and optional.

---

## 9. Fish Batch Detail — `AQT-PG-06-04`

**Module:** Fish Batch Passport  
**Target Role:** Exporter, Buyer, QC  
**Purpose:** Provide a complete operational and buyer-facing view of one batch.  
**Primary Action:** `Share Batch / Reserve Quantity`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Availability | 88 of 120 fish available | Shows remaining quantity after active reservations. |
| Quality Status | QC Passed | Shows the latest internal quality review, reviewer, and date. |
| Health Summary | No active issue reported | Summarizes recorded health and treatment information, not an official health certification. |
| Buyer Interest | 3 inquiries | Counts open inquiries or RFQs referencing this batch. |

### Required Components

- Hero media gallery
- Batch identity header
- KPI cards
- Tabbed content
- Availability history
- Buyer inquiry list
- Action drawer

### Charts

- Area chart — Available quantity over 30 days: 120,120,110,100,88

### Table / List Fields

- `Date | Event | Quantity change | Available balance | Reference | Actor`

### Form Fields

- No primary form on this screen.

### Example Content

`BAT-IDN-260701-014 · Betta HMPK Super Red · Grade A`

### Required States

- Available
- Partially reserved
- Reserved
- QC pending
- Suspended
- Archived

### UX Notes

Buyer sees only approved fields. Exporter/QC sees operational tabs and edit history.

---

## 10. Fish Batch Passport / QR View — `AQT-PG-06-08`

**Module:** Fish Batch Passport  
**Target Role:** Buyer, Exporter, Logistics verifier  
**Purpose:** Present a compact, shareable, QR-accessible batch summary with verification signals.  
**Primary Action:** `Download Passport / Copy Share Link`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Batch Verification | Record active | Explains that the AquaTrade batch record exists and shows its latest verified update. |
| Document Proof | 2 verified references | Counts document references whose stored hash and latest file version match. |
| Origin | Kediri, Indonesia | Shows the declared source location and source organization. |
| Current Trade Status | Available | Shows whether the batch is available, reserved, or sold. |

### Required Components

- Passport header
- QR code
- Representative image
- Identity facts
- Verification timeline
- Document proof list
- Share controls

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Proof type | Reference | Issuer / uploader | Verified at | Hash status`

### Form Fields

- No primary form on this screen.

### Example Content

`Passport AQT-BAT-IDN-260701-014`

### Required States

- Public-safe view
- Authenticated extended view
- Expired share link
- Record suspended

### UX Notes

Never expose private treatment details, buyer names, or full official documents on a public QR page.

---

## 11. RFQ List — `AQT-PG-08-01`

**Module:** RFQ  
**Target Role:** Buyer, Exporter  
**Purpose:** Track buyer requests and exporter response obligations.  
**Primary Action:** `Create RFQ`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Open RFQs | 8 | Counts requests still accepting or evaluating quotations. |
| Awaiting My Response | 3 | For exporters, counts invited RFQs without a submitted quotation. |
| Negotiating | 2 | Counts RFQs with active quotation revision or counter-offer. |
| Closing Soon | 1 | Counts RFQs whose response deadline is within 24 hours. |

### Required Components

- Role-aware KPI cards
- Status tabs
- Filter bar
- RFQ table
- RFQ preview drawer

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `RFQ ID | Buyer / Requester | Destination | Requested items | Target arrival | Response deadline | Responses | Status | Action`

### Form Fields

- No primary form on this screen.

### Example Content

`RFQ-2026-0061 — Ocean Import Co. — Tokyo NRT — 120 Betta HMPK — 2026-08-15`

### Required States

- Buyer view
- Exporter view
- No RFQs
- Deadline warning
- Expired

### UX Notes

The same page changes primary action and columns based on role; do not mix buyer-private data across companies.

---

## 12. Create RFQ — `AQT-PG-08-02`

**Module:** RFQ  
**Target Role:** Buyer / Importer  
**Purpose:** Capture buyer demand clearly enough for exporters to produce comparable quotations.  
**Primary Action:** `Publish RFQ`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Trade Route | Japan · NRT | Explains destination constraints that affect documents, packing, freight, and lead time. |
| Requested Items | 2 item lines | Shows how many species or batch requirements are included. |
| Required Documents | 4 selected | Shows requested compliance or commercial document references. |
| Response Deadline | 5 days | Shows how long invited exporters have to respond. |

### Required Components

- Three-step RFQ wizard
- Item repeater
- Route selector
- Document checklist
- Exporter invitation
- Summary review

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Item | Species / Variety | Grade | Size | Quantity | Preferred batch | Action`

### Form Fields

- RFQ title
- Destination country
- Destination airport
- Requested arrival date
- Response deadline
- Species
- Variety
- Preferred grade
- Size range
- Quantity
- Batch-specific toggle
- Packing request
- Required documents
- DOA policy preference
- Special notes
- Invite exporters

### Example Content

`August Japan Betta Shipment — NRT — 120 HMPK Super Red + 80 Yellow Fancy`

### Required States

- Draft
- No matching exporter
- Validation error
- Published
- Cancelled

### UX Notes

Provide helper text for domain terms. Allow private invitation first; public RFQ can remain future scope.

---

## 13. RFQ Detail — `AQT-PG-08-03`

**Module:** RFQ  
**Target Role:** Buyer, invited Exporter  
**Purpose:** Provide one source of truth for requested items, route, required documents, responses, and activity.  
**Primary Action:** `Submit Quotation / Compare Responses`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Response Deadline | 3d 6h remaining | Shows the remaining time for exporters to submit a valid quotation. |
| Invited Exporters | 5 | Counts companies invited by the buyer. |
| Quotations Received | 2 | Counts valid quotation responses available to the buyer. |
| Requested Quantity | 200 fish | Sums all requested item quantities. |

### Required Components

- RFQ header
- KPI cards
- Requested item table
- Trade route card
- Document requirement card
- Response list
- Activity timeline

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Item | Species / Variety | Grade | Size | Qty | Notes`

### Form Fields

- No primary form on this screen.

### Example Content

`RFQ-2026-0061 — August Japan Betta Shipment`

### Required States

- Open
- Negotiating
- Accepted
- Expired
- Cancelled
- Exporter not invited

### UX Notes

Buyer sees all responses; each exporter sees only its own response and public RFQ details.

---

## 14. Create Quotation — `AQT-PG-09-02`

**Module:** Quotation  
**Target Role:** Exporter  
**Purpose:** Build a transparent quotation that separates fish, packing, documents, freight, platform, and risk assumptions.  
**Primary Action:** `Submit Quotation`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Fish Subtotal | 1,680 XLM test equivalent | Shows the subtotal of item unit prices before service and logistics charges. |
| Estimated Freight | 420 XLM test equivalent | Shows the exporter-entered freight estimate and assumptions. |
| Total Quote | 2,300 XLM test equivalent | Shows the calculated total. During Testnet, all payment values must be labeled test values. |
| Quote Validity | Valid for 5 days | Shows the deadline before the quotation requires revision. |

### Required Components

- RFQ summary
- Quotation item editor
- Cost breakdown
- Shipment estimate
- Policy section
- Live total sidebar
- Preview

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Item | Requested Qty | Offered Qty | Unit price | Subtotal | Batch source | Action`

### Form Fields

- Unit price per item
- Available quantity
- Substitution rule
- Packing cost
- Health/document cost
- Freight estimate
- Insurance optional
- Platform fee display
- Currency/asset
- Quote expiry
- Estimated shipment date
- Arrival window
- DOA policy
- Payment terms
- Notes

### Example Content

`120 Betta HMPK × 9 XLM + services and freight`

### Required States

- Draft
- Quantity unavailable
- Expired RFQ
- Calculation error
- Submitted

### UX Notes

Calculations must be deterministic and visible. Do not hide fees. Testnet values are prototypes, not commercial exchange-rate claims.

---

## 15. Quotation Detail — `AQT-PG-09-03`

**Module:** Quotation  
**Target Role:** Buyer, Exporter  
**Purpose:** Review a complete commercial offer, compare assumptions, negotiate revisions, and accept a quotation.  
**Primary Action:** `Accept Quotation / Revise`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Quoted Total | 2,300 XLM test equivalent | Shows the complete quotation total and selected payment asset. |
| Estimated Arrival | 15 Aug 2026 | Shows the exporter's proposed arrival date based on current assumptions. |
| DOA Coverage | Up to 10% with evidence | Summarizes the proposed claim policy; full policy remains visible below. |
| Validity | Expires in 3 days | Shows how long the buyer can accept this quotation. |

### Required Components

- Quotation header
- Cost summary cards
- Item table
- Cost breakdown waterfall
- Policy cards
- Revision comparison
- Action panel

### Charts

- Waterfall chart — Fish 1,680 + Packing 120 + Documents 80 + Freight 420 + Platform 0 = 2,300

### Table / List Fields

- `Item | Batch | Offered Qty | Unit price | Subtotal | Availability`

### Form Fields

- No primary form on this screen.

### Example Content

`QUO-2026-0048 from PT Nusantara Aquatic Export`

### Required States

- Submitted
- Counter-offer
- Revised
- Accepted
- Rejected
- Expired

### UX Notes

Clearly differentiate quoted data, buyer counter-offer, and accepted terms.

---

## 16. Trade Order List — `AQT-PG-10-01`

**Module:** Trade Order  
**Target Role:** Buyer, Exporter, Operations  
**Purpose:** Track confirmed trades by lifecycle stage, risk, and next required action.  
**Primary Action:** `Open Trade`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Active Trades | 7 | Counts non-completed, non-cancelled trades. |
| Awaiting Funding | 2 | Counts trades accepted by both parties but not yet funded. |
| Preparing Shipment | 3 | Counts trades in allocation, documents, or packing. |
| At Risk | 1 | Counts trades with overdue action, missing document, or shipment delay. |

### Required Components

- Lifecycle tabs
- KPI cards
- Advanced filters
- Trade table
- Risk preview drawer

### Charts

- Funnel — Accepted 10, Funded 8, Preparing 6, Shipped 4, Completed 3

### Table / List Fields

- `Trade ID | Buyer | Exporter | Route | Value | Current stage | Next action | Deadline | Risk | Action`

### Form Fields

- No primary form on this screen.

### Example Content

`TRD-2026-0042 — Ocean Import Co. ↔ PT Nusantara Aquatic Export — CGK→NRT`

### Required States

- Active
- At risk
- Completed
- Cancelled
- No trades

### UX Notes

Use lifecycle language, not order-status ambiguity. Show which party owns the next action.

---

## 17. Trade Order Detail — `AQT-PG-10-04`

**Module:** Trade Order  
**Target Role:** Buyer, Exporter, Operations, Finance  
**Purpose:** Act as the operational command page for one agreed trade.  
**Primary Action:** `Complete Next Action`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Trade Value | 2,300 XLM test equivalent | Shows the accepted commercial total for the trade. |
| Funding Status | Test payment recorded | Shows current Level 1 payment evidence; future versions will distinguish escrow funding. |
| Shipment Readiness | 76% | Aggregates required allocation, documents, packing, and QC checks. |
| Arrival Claim Window | 6 hours after delivery | Shows the agreed period for buyer inspection and evidence submission. |

### Required Components

- Trade header
- Lifecycle progress bar
- KPI cards
- Next-action banner
- Two-column workspace
- Item summary
- Document readiness
- Payment summary
- Shipment summary
- Timeline

### Charts

- Radial progress — Shipment readiness 76%

### Table / List Fields

- `Item | Batch | Ordered Qty | Allocated Qty | Packed Qty | Status`

### Form Fields

- No primary form on this screen.

### Example Content

`TRD-2026-0042 · Japan Betta Shipment`

### Required States

- Awaiting approval
- Awaiting funding
- Preparing
- Ready to ship
- Shipped
- Inspection pending
- Claimed
- Completed

### UX Notes

Primary CTA changes by role and state. Never present an action to an unauthorized party.

---

## 18. Trade Timeline — `AQT-PG-10-06`

**Module:** Trade Order  
**Target Role:** Buyer, Exporter, Operations, Mediator  
**Purpose:** Provide an auditable chronology of commercial, document, shipment, payment, and claim events.  
**Primary Action:** `Export Timeline`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Current Stage | Preparing shipment | Explains the active lifecycle stage. |
| Last Activity | Document verified 2h ago | Shows the most recent meaningful event. |
| Next Deadline | Packing QC due 18 Jul | Shows the nearest required action deadline. |
| Event Integrity | 24 recorded events | Counts application and blockchain-linked events available for this trade. |

### Required Components

- Stage filter
- Actor filter
- Vertical timeline
- Event detail drawer
- Evidence link
- Blockchain proof chip

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- No table required.

### Form Fields

- No primary form on this screen.

### Example Content

`2026-07-15 10:42 — Health certificate reference verified — Maya Pratama`

### Required States

- Default
- No events
- Filtered
- Event proof unavailable
- Exporting

### UX Notes

Events must identify actor, timestamp, source, and related record. Do not imply all events are on-chain.

---

## 19. Payment Summary — `AQT-PG-11-01`

**Module:** Payment & Escrow  
**Target Role:** Buyer, Exporter, Finance  
**Purpose:** Future business-MVP trade-level payment evidence and settlement overview. This is not a second White Belt send page.  
**Primary Action:** `View Payment Evidence / View Transaction`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Agreed Trade Value | 2,300 XLM test equivalent | Shows the accepted trade amount from the quotation. |
| Testnet Payment Sent | 1.2500000 XLM | Shows the actual White Belt Testnet transaction, which has no real monetary value. |
| Payment Mode | Direct Testnet Payment | Clarifies that this version is not an escrow and does not secure the full trade value. |
| Transaction Status | Successful | Shows confirmation from Stellar Testnet and links to the transaction hash. |

### Required Components

- Phase disclosure banner
- Payment cards
- Transaction evidence
- Link to the public Test XLM page when demonstration evidence is needed
- Future escrow roadmap panel
- Reconciliation note

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Time | Sender | Recipient | Amount | Network | Mode | Status | Hash`

### Form Fields

- No send form on this screen. Testnet transfers are performed only on `Test XLM`.

### Example Content

`1.2500000 XLM sent on Testnet for TRD-2026-0042`

### Required States

- No transaction
- Awaiting wallet
- Awaiting signature
- Success
- Failed
- Wrong network

### UX Notes

This future business-MVP page must never misrepresent Testnet payment as commercial settlement. It may reference Test XLM evidence, but must not duplicate its send form or appear in White Belt navigation. Future escrow controls appear as labeled roadmap placeholders only.

---

## 20. Document Requirement Checklist — `AQT-PG-12-06`

**Module:** Documents  
**Target Role:** Exporter, Buyer, Document Verifier, Operations  
**Purpose:** Track every required commercial, health, origin, packing, and logistics document for a trade.  
**Primary Action:** `Upload Document`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Required Documents | 7 | Counts documents configured for this trade and route. |
| Verified | 4 | Counts uploaded document versions approved by the authorized verifier. |
| Action Required | 2 | Counts missing or rejected documents blocking readiness. |
| Expiring Soon | 1 | Counts documents approaching expiry before the planned shipment date. |

### Required Components

- Readiness progress bar
- KPI cards
- Requirement table
- Upload drawer
- Version history drawer
- Verification action

### Charts

- Donut — Document status: Verified 4, Under review 1, Missing 1, Rejected 1

### Table / List Fields

- `Requirement | Applies to | Reference | Latest file | Expiry | Verification status | Blocking | Action`

### Form Fields

- Document type
- Reference number
- Issuer
- Issue date
- Expiry date
- File upload
- Notes

### Example Content

`Health Certificate Reference — Under review — HC-IDN-2026-00812`

### Required States

- Missing
- Uploaded
- Under review
- Verified
- Rejected
- Expired
- Replaced

### UX Notes

AquaTrade stores references and files but does not claim to issue official certificates. Show document access restrictions.

---

## 21. Packing Checklist — `AQT-PG-13-04`

**Module:** Pre-Shipment & Packing  
**Target Role:** Exporter, Packing operator, QC  
**Purpose:** Confirm that allocated fish are prepared, bagged, boxed, labeled, and evidenced before handover.  
**Primary Action:** `Submit Packing for QC`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Allocated Fish | 200 / 200 | Confirms the ordered quantity has been assigned to specific batches. |
| Bags Prepared | 20 | Shows the planned number of sealed fish bags. |
| Boxes Prepared | 4 | Shows the planned export boxes and total gross weight. |
| Checklist Completion | 82% | Shows completed mandatory packing checks before QC approval. |

### Required Components

- Preparation progress
- KPI cards
- Checklist grouped by stage
- Bag and box table
- Evidence uploader
- QC sign-off panel

### Charts

- Progress ring — 82% checklist completion

### Table / List Fields

- `Box | Bag range | Species | Qty | Gross weight | Label | Evidence | Status`

### Form Fields

- Fasting completed
- Last feed timestamp
- Treatment completed
- Water prepared
- Bag count
- Fish per bag
- Oxygen confirmed
- Double-bag confirmed
- Labels attached
- Box number
- Weight
- Dimensions
- Temperature logger optional
- Photos/videos

### Example Content

`BOX-01 — Bags 01–05 — Betta HMPK — 50 fish — 7.8 kg`

### Required States

- Draft
- Incomplete mandatory item
- Ready for QC
- Revision requested
- Approved

### UX Notes

Checklist items need clear evidence rules. Use large tap targets for mobile packing operations.

---

## 22. Shipment Detail — `AQT-PG-14-03`

**Module:** Logistics  
**Target Role:** Buyer, Exporter, Logistics, Operations  
**Purpose:** Show shipment identity, route, schedule, AWB, boxes, handover status, delay risk, and delivery evidence.  
**Primary Action:** `Update Shipment Status`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Shipment Status | In Transit | Shows the latest confirmed logistics milestone. |
| Flight | GA874 · CGK→HND | Shows the planned or actual primary flight segment. |
| Boxes | 4 | Shows total export boxes associated with the trade. |
| ETA | 16 Aug · 07:25 JST | Shows the latest estimated arrival time and timezone. |
| Delay Risk | Low | Summarizes schedule deviation and missing-event risk. |

### Required Components

- Shipment header
- Route map/timeline
- KPI cards
- Flight segments
- Box summary
- AWB document
- Status update drawer
- Delay banner

### Charts

- No chart required. Do not add decorative charts.

### Table / List Fields

- `Segment | From | To | Flight | Planned departure | Actual departure | Planned arrival | Status`

### Form Fields

- Forwarder
- Airline
- Origin airport
- Destination airport
- Flight number
- Departure time
- Arrival time
- Master AWB
- House AWB
- Box count
- Weight
- Tracking link
- Status notes

### Example Content

`SHP-2026-0037 · CGK → HND → NRT · MAWB 126-12345675`

### Required States

- Booked
- Picked up
- At origin
- Departed
- In transit
- Arrived
- Delayed
- Delivered

### UX Notes

Show all times with timezone labels. Do not imply live airline integration when updates are manual.

---

## 23. Shipment Timeline — `AQT-PG-14-04`

**Module:** Logistics  
**Target Role:** Buyer, Exporter, Logistics, Operations  
**Purpose:** Provide an event-by-event logistics view with planned versus actual time.  
**Primary Action:** `Add Logistics Event`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Progress | 5 of 8 milestones | Shows how many configured logistics milestones are complete. |
| Schedule Variance | +35 minutes | Shows actual versus planned timing for the most relevant milestone. |
| Latest Location | Haneda cargo terminal | Shows the latest declared event location. |
| Next Milestone | Transfer to NRT | Shows the next expected logistics event. |

### Required Components

- Horizontal route strip
- Vertical logistics timeline
- Planned vs actual labels
- Evidence chips
- Event editor drawer

### Charts

- Gantt-like timeline — planned versus actual milestone timing

### Table / List Fields

- No table required.

### Form Fields

- Event type
- Timestamp
- Timezone
- Location
- Source
- Notes
- Attachment

### Example Content

`Arrived HND 07:58 JST, planned 07:25 JST, +33 min`

### Required States

- On schedule
- Delayed
- Missing event
- Delivered

### UX Notes

Manual and integrated events must be visually distinguished by source badge.

---

## 24. Start Arrival Inspection — `AQT-PG-15-02`

**Module:** Arrival Inspection  
**Target Role:** Buyer / Importer QC  
**Purpose:** Guide the buyer through timestamped unboxing and fish-condition evidence inside the agreed claim window.  
**Primary Action:** `Submit Inspection`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Inspection Window | 4h 12m remaining | Shows remaining time to submit arrival evidence under the agreed trade policy. |
| Expected Quantity | 200 fish | Shows the final packed quantity expected at arrival. |
| Boxes Received | 4 / 4 | Confirms physical box count before fish-level inspection. |
| Current Finding | 3 DOA · 6 stressed | Updates automatically from entered inspection counts. |

### Required Components

- Countdown banner
- Four-step mobile wizard
- Box condition
- Bag condition
- Fish count grid
- Evidence capture
- Summary and declaration

### Charts

- Stacked bar — Condition counts: Healthy 191, Stressed 6, DOA 3

### Table / List Fields

- `Item / Batch | Expected | Healthy | Stressed | DOA | Missing | Mismatch`

### Form Fields

- Delivery timestamp
- Box received count
- Box damage
- Seal condition
- Bag leakage
- Water condition
- Healthy qty
- Stressed qty
- DOA qty
- Missing qty
- Species mismatch qty
- Grade mismatch qty
- Photo/video evidence
- Notes
- Declaration checkbox

### Example Content

`BAT-IDN-260701-014 — Expected 120 — Healthy 115 — Stressed 3 — DOA 2`

### Required States

- Not started
- In progress
- Evidence uploading
- Accepted
- Accept with issue
- Claim required
- Window expired

### UX Notes

Optimize for mobile camera usage. Preserve timestamps and never allow submitted evidence to be silently overwritten.

---

## 25. Claim Detail — `AQT-PG-16-03`

**Module:** DOA Claim & Dispute  
**Target Role:** Buyer, Exporter, Mediator  
**Purpose:** Provide a fair, evidence-based workspace for claim review, response, negotiation, and resolution.  
**Primary Action:** `Respond to Claim / Record Resolution`

### Required Cards and Tooltip Meaning

| Card | Example Value | Tooltip Meaning |
|---|---|---|
| Claimed Quantity | 3 DOA + 1 missing | Shows the quantity and category submitted by the buyer. |
| Claimed Value | 45 XLM test equivalent | Shows the calculated value under the agreed quotation terms; Testnet values remain non-commercial. |
| Response Deadline | 18h remaining | Shows how long the exporter has to respond under the configured policy. |
| Requested Resolution | Partial refund | Shows the buyer's requested outcome; it is not yet an approved decision. |

### Required Components

- Claim header
- KPI cards
- Evidence gallery
- Inspection comparison
- Policy reference
- Response panel
- Negotiation history
- Mediator decision area
- Resolution summary

### Charts

- Comparison bar — Expected 200, Healthy 191, Stressed 6, DOA 3, Missing 0

### Table / List Fields

- `Affected item | Expected | Buyer finding | Exporter accepted | Disputed | Value`

### Form Fields

- Exporter response
- Accepted quantity
- Rejected quantity
- Reason
- Counter resolution
- Mediator notes
- Final resolution
- Refund/release amount
- Replacement reference

### Example Content

`CLM-2026-0012 for TRD-2026-0042`

### Required States

- Submitted
- Under exporter review
- Negotiating
- Mediation required
- Approved
- Partially approved
- Rejected
- Resolved

### UX Notes

Separate facts, claims, responses, and final decision. Every decision must show actor, timestamp, and rationale.

---


## 26. Cross-Screen Internationalization Requirement

All 25 MVP screens must support:

- English (`en`)
- Bahasa Indonesia (`id`)
- Simplified Chinese (`zh-CN`)

All page titles, descriptions, buttons, field labels, placeholders, tooltips, validation messages, cards, table headers, chart legends, status text, empty states, and accessibility labels use semantic translation keys.

The login page must include a language switcher. The authenticated shell must include the same reusable language switcher in the topbar.

The screen formerly called `Wallet Overview` is now named `Test XLM` and combines all White Belt wallet and transaction functions in one page.
