# Asset and AI-log relocation revision

Campaign **063_d6b8b77**, baseline `d6b8b77554be6fb6c69613e12d239de2a90818f7`; branch `revision/063_d6b8b77-relocate-assets-and-logs`, target main. State: **Executing accepted refactor**. The human request defines the scope; no separate review stage is needed. See the [revision plan](REVISION-PLAN.md).

Refreshed origin/main, verified clean eligible worktree and repository-wide sequence/ref names. Identified two root EXPLORE_DRIVE logs and the root project prompt, current demo/bootstrap/README references, native release package selectors and TextStats selectors/contracts/fixtures. Closed records remain untouched. Publish/read back this opening/plan before relocation.

## A-001 — Relocation and affected references

Moved both EXPLORE_DRIVE logs to docs/ai-logs/ and the project prompt to assets/, preserving filenames and exact prompt bytes. Log edits are limited to the four existing README/capability-map link destinations; transcript content and pre-existing illustrative plan links remain unchanged. Updated README, demo and bootstrap links, release/TextStats selectors, snapshot contracts and existing fixture assertions. Fixtures now assert the assets prompt is retained and its old root path plus AI logs are excluded. No closed campaign was edited. Git whitespace and owned diff inspected; publish/read back before final verification.

## A-002 — Verification and final boundary

Candidate `e9c142efdfae9a9f708351855d0f8b30f07bdac0` passed all 30 publisher tests on Python 3.12.14 with declared jsonschema 4.26.0. The first 127-test support run had one secret-screening error in `test_render_uses_only_request_and_actual_current_state`; no relocation fixture failed. The isolated failing test then passed, and the complete unchanged-source rerun passed all 127 tests. The exact intermittent cause is unconfirmed; no unrelated secret-screening or fixture code was changed. Retain the initial failure as a check limitation rather than claiming every attempt passed.

Native committed manifest/archive and independent TextStats snapshot inventories agree at 134 files. Both retain exact original prompt bytes under assets/ and exclude the old root path and AI logs. Package entry/reference/README checks passed 503 local links/anchors across 92 documents; the relocated prompt has no local links and passed spacing checks. Eight affected current/active documents passed 70 links/anchors and heading/consecutive-blank checks. Four adjusted log destinations resolve; log bytes differ only by those replacements. Pre-existing transcript example links were not repaired or treated as current product guidance.

Current Markdown links, publisher/snapshot selectors, contracts and fixture expectations use the new assets path; root originals are absent. Negative old-root/excluded-log assertions are intentional. Closed campaign files and historical references remain unchanged. Git whitespace and full owned diff checks passed. No model/client acceptance or release/provider operation was performed.

A-001/A-002 are complete within scope. Final explicit two-parent main integration, merged checks, target publication/readback and clean return establish closure. Preserve original opening `3103b813492d3de3fcbcc2c4f4ce0b68f46d1cf2` and baseline `d6b8b77554be6fb6c69613e12d239de2a90818f7`; record actual source/target parents and merged checks in the integration summary.
