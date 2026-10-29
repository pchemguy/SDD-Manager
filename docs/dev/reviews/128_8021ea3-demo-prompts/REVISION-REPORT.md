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

## V-006 — Full composition revision

Revised the Hello World prompt from the accepted composition review. Project introduction now states scope and platform coverage once. Baseline behavior is unchanged, with a sentence-case heading. Platforms owns delivery sequence, paired Chromium/Firefox delivery, per-platform-group releases, reusable-code preparation and preservation of earlier platforms. Delivery subsections focus on browser baseline, bundled Windows Electron runtime and bundled sidebar extensions. Conditional persistence/file adaptations and session-only semantics remain; removed absent cookie/URL and import/export examples. Design clarification now states preparation and material human-review timing. Release rules remain platform-neutral and require applicable packaged-artifact checks under project environment policies, explicit unavailable/unverified reporting and no unsupported verification claims.

Verified exact baseline preservation, unchanged invocation/credential sections, complete heading hierarchy/spacing, platform-neutral release requirements, paired extensions and sequential release obligations, shared-code/cumulative-platform requirements, conditional adaptation/storage/session semantics and removal of game-derived examples. Existing demo prompts outside this file are unchanged; diff whitespace passes. Documentation composition checks do not establish application runtime or agent acceptance. Publish/read back this action; campaign remains open.

## V-007 — Page/sidebar interaction and baseline layout

Added browser/Electron layout with the Hello World main panel centered independently of the right-hand settings panel, plus preparation of usable narrow-window behavior. Extension baseline now displays Hello World within the active ordinary webpage and the existing color radio buttons in the sidebar, with immediate updates to the associated page and preservation of website content/functionality. Application-neutral extension requirements now describe page-side/sidebar cooperation rather than placing the entire application in the sidebar. Preparation resolves supported pages, permissions, activation, communication, tab/navigation/sidebar lifecycle and unavailable pages; actions must target the intended page. Bundled runtimes, conditional storage, delivery sequence and release requirements remain.

Verified exact preservation outside the added layout and replaced extension paragraph; existing baseline behavior/defaults, platform-neutral release wording and platform grouping remain intact. Checked page/sidebar placement, centering/right-panel arrangement, associated-page updates, neutral platform wording, lifecycle coverage and Markdown spacing. Diff whitespace passes. No runtime extension testing or browser compatibility established by this documentation change. Publish/read back this action; campaign remains open.

## V-008 — Corrected page assumptions and preparation boundaries

Removed existing-page preservation requirements from Hello World layout and generic extension preparation. Baseline still places Hello World on the active webpage and its radio controls in the sidebar. Generic platform guidance now leaves page-side/sidebar responsibilities to application scope without assuming added page UI or layout changes; it introduces no form-filling, submission, content-reading or page-replacement requirements. Clarified independent centering where space permits and non-overlapping access in narrow windows, shared logic/UI components with isolated integration code, page association/state initialization/synchronization across lifecycle events, material decisions at applicable document-review checkpoints and concise reporting of actual/unavailable checks.

Verified unchanged Hello World behavior/defaults and platform phase/release grouping, removal of page-preservation assumptions, neutral page interaction, explicit state/checkpoint/layout wording and Markdown heading spacing. Corrected a case mismatch in the verification script before completing these checks. Diff whitespace passes. This documentation revision does not establish runtime behavior. Publish/read back this action; campaign remains open.

## V-009 — Separate verbatim baseline snapshot

Saved the supplied prompt as docs/demo/hello_world/prompts/Autodoc 3in1 Baseline.md without editorial changes. The current revised Autodoc 3in1.md remains unchanged. Verified exact saved UTF-8 content and independent byte equality with the same prompt previously published at 436b107, current-prompt preservation and diff whitespace. This is a retained prompt variant, not application implementation or verification. Publish/read back this action; campaign remains open.

## Final composition and integration boundary — 2026-10-29

V-001–V-009 are complete. Final scope: six Tetris prompts sequence browser delivery before Electron, with extensions last in the two 3in1 variants; both READMEs and the Tetris guide explain that sequence and ten cumulative passes. Added the reusable Hello World prompt with application-neutral release/platform guidance, baseline-specific browser/Electron and webpage/sidebar layouts, state/lifecycle preparation and scoped verification reporting. Retained the human's older prompt verbatim as a separate Baseline variant. Final V-008 wording supersedes page-preservation requirements from V-007; consistent Electron delivery headings supersede the intermediate shortening. Source/evidence publication separation during V-002 is retained transparently in its record.

At source 01a1e65d4a0c1803beafb7737c80f27c07d23d92, five package-documentation tests pass on Linux/Python. Final scope/closed-record path preservation, maintained relative links, all six Tetris platform-heading orders, pass/feature numbering, Hello World split UI/platform-neutral release instructions and byte-exact Baseline snapshot checks pass. A first heading-count assertion also counted a prose reference; the corrected heading-only check passes. Diff whitespace passes. This focused document campaign performed no comprehensive plugin review, live application/browser/Electron/extension execution, fresh-agent acceptance or release publication.

Fresh origin clone confirms main remains the original 8021ea34fb28d6b650b918ed6fd6f0d70a3f2da6 target and the complete source branch is published. The human selected closure: publish/read back this finalization, merge its exact verified tip with an explicit two-parent commit into main, verify matching trees and rerun scoped checks, publish/read back main and return cleanly. Retain the branch and freeze records after closure. The newly requested feature-brief revision begins separately from the published main integration; FEATURE.md remains a proposal for that campaign.
