# Prerelease revision report

Campaign **121_a5bfe1a**; [plan](REVISION-PLAN.md), [review](REVIEW-REPORT.md). Main baseline: `a5bfe1a2e9c08424ebc3b4dd997f0150e68be11c`.

## V-001 — Campaign navigation

Repaired R-001: all index rows now form one contiguous table, followed by the explanatory prose. A before/after row-list comparison passes byte-for-byte, preserving row order and historical descriptions/links. No closed campaign record changed. `git diff --check` passes. The source-only index change does not alter package/runtime bytes; U-002 results remain applicable.
