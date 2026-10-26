# SDD Manager handoff

Campaign **122 — reorganization** is open on `revision/122_6ebcb53-reorganization`. Main creation/return baseline: `6ebcb5318fc29ff3c369d55dade449f768f4bbce`. No suspended parent. Standard reporting.

The human requested a new revision campaign for “some shuffling”. [Revision plan](reviews/122_6ebcb53-reorganization/REVISION-PLAN.md) retains the opening scope. V-001 is complete: the AI-log initialization reference moved up into sdd-manage/references/ai-logs.md, with callers and relative links updated. [Revision evidence](reviews/122_6ebcb53-reorganization/REVISION-REPORT.md) records verification for both actions. V-002 moved the Windows/browser policies into plugin assets and added the requested project template sections. Plugin entries, skills and workflow references must not link to these policies; the template supplies project-level links. Both policies are byte-identical; 189 support/publisher tests pass, and seven native Windows contracts skip on Linux.

Campaigns 120 and 121 are closed. Release v0.15.4 remains published and pinned to `3c0c64560d34397630c493c48cd938115eaed770`; [release outcome](reports/releases/v0.15.4.md) retains its evidence. Preserve all closed records and the release. Publish/read back the V-002 action commit, then await further reorganization instructions. Campaign remains open.
