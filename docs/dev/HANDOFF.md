# SDD Manager handoff

Campaign **120 — demo prompts** is open after the requested replay, review and prompt repairs. Standard reporting; no suspended parent. [Review](reviews/120_cccb2bb-demo-prompts/REVIEW-REPORT.md) owns replay provenance; the [revision report](reviews/120_cccb2bb-demo-prompts/REVISION-REPORT.md) records all three findings verified.

## Scope and decisions

The human requested pulling origin, opening a new campaign on main tip, rebasing the last 119 commit and reviewing it. The subsequent request “Fix all issues in all prompts” authorizes the repairs and their publication. Merge, closure and release are not selected. Preserve all closed records and the original published 119 branch.

## Git context

Working branch: revision/120_cccb2bb-demo-prompts. Creation parent, eventual integration/return: main on origin, pchemguy/SDD-Manager. Full baseline: cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa. Source commit: f1c5ba1eb5b13911b48a36ead278b229a9a9d879; replay/opening commit: ce4d4ac08b74fae1d1d6f77ede9c3183ad925a8e, exactly published and read back. Replay is patch/blob identical and conflict-free.

## Findings and stopping point

V-001 resolves R-001–R-003 across the applicable prompts. The full-project variants require session-only configuration before persistence; Featured uses campaign terminology; Multipass retains correct pass terminology. Complete campaign whitespace and changed-document link checks pass. Source and evidence belong to the containing repair commit; publish and verify exact remote readback, then stop with campaign 120 open. See the revision report for checks and limits.
