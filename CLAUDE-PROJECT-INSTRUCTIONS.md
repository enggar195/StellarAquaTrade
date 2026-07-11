# AquaTrade — Project Instructions for Claude

Merge these instructions into the repository root `CLAUDE.md`; do not overwrite unrelated existing rules.

1. Read `docs/00-white-belt/00-LEVEL-1-SCOPE.md`.
2. Read `docs/00-white-belt/01-ACCEPTANCE-CRITERIA.md`.
3. Read `docs/01-blueprint/CLAUDE-START-HERE.md`.
4. Follow Atomic Design and reuse similar components.
5. Add Storybook stories for all atoms and reusable molecules, plus important organisms/templates.
6. Support `en`, `id`, and `zh-CN` through semantic translation keys.
7. Use one public White Belt page: `/{locale}/test-xlm`.
8. Do not gate Test XLM behind Login. Login is a future business-MVP design prototype while backend authentication is out of scope.
9. Do not describe direct Testnet payment as escrow.
10. Never request or store a secret key or seed phrase.
11. Every information-bearing card includes the visible `?` help tooltip.
12. Run lint, typecheck, tests, Storybook build, and production build.
