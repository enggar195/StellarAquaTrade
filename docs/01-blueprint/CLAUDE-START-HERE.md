# CLAUDE-START-HERE.md

First read `../00-white-belt/00-LEVEL-1-SCOPE.md` and `../00-white-belt/01-ACCEPTANCE-CRITERIA.md`. Then read `README.md` and every blueprint document in the prescribed order.

Binding implementation rules:

1. Use Atomic Design.
2. Reuse similar components.
3. Add Storybook stories for all atoms and reusable molecules.
4. Support `en`, `id`, and `zh-CN`; do not hardcode user-facing text.
5. Use one White Belt menu/page named Test XLM.
6. The login showcase uses the documented container ship, port CC, RTG, and cargo-aircraft illustration.
7. Every information-bearing card has a visible `?` tooltip.
8. Never request a Stellar secret key or seed phrase.
9. Never describe direct Testnet payment as escrow.
10. Run lint, typecheck, tests, Storybook build, and production build.

11. The localized Test XLM route is public: `/{locale}/test-xlm`. Do not gate White Belt review behind application login.
12. The login screen is a future business-MVP UI prototype until authentication backend scope is explicitly activated.
13. `AquaTrade` is the future product platform; `AquaTrade Pay` is the White Belt-facing payment learning experience.
