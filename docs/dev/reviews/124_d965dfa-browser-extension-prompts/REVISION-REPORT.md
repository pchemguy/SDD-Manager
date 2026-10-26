# Browser-extension demo prompts revision report

Campaign **124_d965dfa**; baseline `d965dfa86bb31e281c7d56018780429f1df8a16f`; branch `revision/124_d965dfa-browser-extension-prompts`; return main. [Plan](REVISION-PLAN.md).

## V-001 — Sidebar extension research

Integrated both supplied discussions in [BROWSER_EXTENSION.md](research/BROWSER_EXTENSION.md). Reconfirmed platform support online on 2026-10-26 using official Chrome, Chromium, Microsoft, Mozilla and Playwright documentation. Recorded API/manifest differences, shared-code adaptation, storage and cookie/URL decisions, panel lifecycle/focus/layout, background differences, packaged workers/WASM/CSP, permissions, actual-extension acceptance and signing/distribution boundaries. Fourteen official source links support the document; recommendations are distinguished from platform facts and accepted prompt scope.

Verified source coverage and Markdown whitespace. No extension built, installed or executed; no browser screenshots/runtime evidence claimed. No prompt changes or store publication. Publish/read back the containing action commit; campaign remains open.

## V-002 — Three-form Autodoc prompt

Created Autodoc_3in1.md from Autodoc.md. Replaced only the existing delivery paragraph with the exact supplied three-form requirement and one adjacent platform-adaptation paragraph. Extension persistence/file-operation guidance applies only when its capability is in the current increment; persistent-score storage is conditional, preserving the session leaderboard. Also addresses pause/reopen, cookie/URL and Save/Restore adaptations and narrow-sidebar layout at the platform definition.

Verified reversible replacement reproduces the source prompt exactly, original Autodoc.md matches its committed bytes, and diff whitespace passes. No implementation or browser runtime checks claimed. Publish/read back this action commit; campaign remains open.
