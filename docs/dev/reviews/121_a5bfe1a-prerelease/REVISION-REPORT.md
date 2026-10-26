# Prerelease revision report

Campaign **121_a5bfe1a**; [plan](REVISION-PLAN.md), [review](REVIEW-REPORT.md). Main baseline: `a5bfe1a2e9c08424ebc3b4dd997f0150e68be11c`.

## V-001 — Campaign navigation

Repaired R-001: all index rows now form one contiguous table, followed by the explanatory prose. A before/after row-list comparison passes byte-for-byte, preserving row order and historical descriptions/links. No closed campaign record changed. `git diff --check` passes. The source-only index change does not alter package/runtime bytes; U-002 results remain applicable.

## V-002 — Patch version and release-message preparation

Bumped the sole package manifest from 0.15.3 to 0.15.4 and refreshed tracked root RELEASE-NOTES.md. Previous stable baseline is first-parent tag v0.15.3 at `63f145f42303354a81677710c8fc93cdf1f67f48`. Complete non-shallow range inventory through `3ab17055aff708627f538ed7ee9dfe116e8a3cd8` contains 72 commit identities/parents/subjects. Latest cumulative integration summaries for campaigns 112–120 plus current net diffs account for inherited/repeated outcomes, direct prompt edits, guide moves and new environment modules; already-released 112 outcomes are excluded from new highlights.

Notes retain applicable compatibility, installation and experimental-status guidance while replacing stale highlights/version links. Internal highlights are locally ignored/untracked and retained until actual published-body readback. Manifest JSON and version-only delta pass inspection; exact committed package build follows this publication checkpoint in U-003. The source-only index repair and metadata version bump do not alter U-002 runtime/test bytes.
