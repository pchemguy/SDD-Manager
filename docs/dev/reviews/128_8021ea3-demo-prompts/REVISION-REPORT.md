# Demo prompts revision report

Campaign **128_8021ea3**; baseline `8021ea34fb28d6b650b918ed6fd6f0d70a3f2da6`; branch `revision/128_8021ea3-demo-prompts`; return main. [Plan](REVISION-PLAN.md).

## V-001 — Browser first, Electron after layout

Changed the four standard prompts to deliver the browser app initially while designing shared logic/UI for future delivery platforms, including Electron. Added Windows Electron packaging after UI layout: a subsection in Interactive and Autodoc, Pass 10 in Multipass Autoloop, and Feature 9 in Featured Autodoc. The later addition retains browser use, shared code, bundled runtime assets and no separate Node/server at runtime, with Windows/browser assets in applicable releases. Updated both READMEs and the Tetris guide for staged platform delivery and ten cumulative passes.

Verification: reversing only the baseline replacement and new delivery section reproduces each prior prompt exactly; gameplay/layout and existing feature/pass content are preserved. Both 3in1 files match committed bytes unchanged. Pass sequence 1–10, feature sequence 1–9, current README claims/local links and diff whitespace pass. Documentation-only amendment; no runtime tests or application implementation claimed. The opening commit was successfully published with the supplied credential before this work. Publish/read back this action commit; campaign remains open.

V-001 wording follow-up: shortened the Interactive and Autodoc section heading to Windows Electron at the human’s request. Delivery requirements and sequence are unchanged. Verified exact heading-only prompt changes and diff whitespace.

V-001 consistency follow-up: standardized the Electron heading text as Windows Electron delivery across all four standard prompts, retaining the pass/feature prefixes where applicable. Verified all four headings and diff whitespace.

## V-002 — Sequential three-form delivery

Both 3in1 prompts begin with browser delivery and reusable logic/UI preparation for later Electron and extensions. Added Windows Electron delivery after layout, followed by Browser extension delivery as the final platform subsection; Featured Autodoc uses Feature 9 and Feature 10. Moved existing conditional persistence/file/lifecycle/layout adaptations into the final extension section and corrected its layout reference. Release-artifact requirements remain intact. Both READMEs and the Tetris guide explain the sequence.

Verified browser → layout → Electron → extensions ordering, one copy of each release/adaptation requirement, preserved gameplay and Feature 1–8 content, Feature 1–10 numbering and unchanged 2in1 files. The first strict preservation assertion detected the added Markdown separator before Feature 9; inspection confirmed only that required blank line differs, and the precise boundary comparison now passes. Source commit d515009 was already published before this evidence follow-up; the initial report write did not run after that assertion. Diff whitespace passes. No runtime tests required for prompt-only changes. Publish/read back this evidence checkpoint; campaign remains open.

## V-003 — Application-neutral three-form template with Hello World baseline

Added docs/demo/hello_world/prompts/Autodoc 3in1.md. Only Baseline MVP specifies the application: Hello World text and three stacked, mutually exclusive red/blue/green radio buttons with immediate color updates; red is the explicit initial selection/color. Preparation, platform adaptation and clarification sections are application-neutral. Persistence and file operations remain conditional on application scope. Browser, Windows Electron and browser extensions require successive phases and separate releases; Chromium and Firefox extensions are explicitly one platform delivered together in one phase/release.

Verified baseline controls/default/update requirements, absence of Hello World and game-specific wording outside Baseline MVP, platform section order, separate platform releases, paired extension delivery, conditional capability scope and heading spacing. Existing Tetris prompts and both READMEs are unchanged; diff whitespace passes. Documentation-only change; no application runtime or packaged-platform verification claimed. Publish/read back this action; campaign remains open.

## V-004 — Accepted draft structure and wording

Replaced the Hello World prompt structure with Baseline MVP Scope followed by Platforms. Browser app - baseline delivery, Windows Electron delivery and Browser extension delivery are sibling subsections under Platforms; reusable-code preparation now belongs to browser delivery. Clarified that radio selection changes the message's text color and that platform phases deliver a usable application on the added platform.

Verified the exact heading hierarchy and Markdown heading spacing, one copy of the moved preparation paragraph, unchanged version/release instructions and extension/clarification content, and diff whitespace. The change is confined to this prompt and active campaign evidence; no application runtime checks are claimed. Restored the published campaign branch from a fresh clone after workspace maintenance removed the previous checkout. Publish/read back this action; campaign remains open.

## V-005 — Platform-neutral release instructions

Moved browser → Windows Electron → extensions phase/release sequencing into the Platforms introduction, retaining Chromium and Firefox extensions as one platform delivered together. Removed the specific artifact list from Versioning and releases; that section retains versioning, releases after completed/verified/integrated phases, artifacts for every platform delivered by that phase, installation guidance and verification requirements.

Verified that Versioning and releases names no specific platform, the sequence appears exactly once under Platforms before its delivery subsections, and all other prompt bytes are preserved. Diff whitespace passes. Documentation-only change; no runtime verification claimed. Publish/read back this action; campaign remains open.
