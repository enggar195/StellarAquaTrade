# AquaTrade Documentation

## Current Stage

AquaTrade is currently implementing Stellar White Belt Level 1. The active public application page is `/{locale}/test-xlm`.

## Folder Roles

```text
docs/
├── 00-white-belt/   # current binding scope and acceptance criteria
└── 01-blueprint/    # future product, UX, design, and implementation guidance
```

## Reading Order

1. `00-white-belt/00-LEVEL-1-SCOPE.md`
2. `00-white-belt/01-ACCEPTANCE-CRITERIA.md`
3. `01-blueprint/CLAUDE-START-HERE.md`
4. `01-blueprint/README.md` and its prescribed order
5. `00-white-belt/02-ROADMAP.md`

## Precedence

White Belt scope and acceptance criteria override future blueprint features. Backend, database, worker, authentication, smart contract, escrow, shipment, and claims remain future scope unless explicitly activated.

## Current Navigation

| Locale | Route | Label |
|---|---|---|
| English | `/en/test-xlm` | Test XLM |
| Bahasa Indonesia | `/id/test-xlm` | Uji XLM |
| Simplified Chinese | `/zh-CN/test-xlm` | XLM 测试 |

The Test XLM page is public and must not require application login.
