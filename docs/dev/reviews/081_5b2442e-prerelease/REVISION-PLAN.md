# Prerelease preparation plan — SDD Manager 0.15.1

## Identity, authority and boundary

- Campaign: 081_5b2442e; opened 2026-10-19 after campaign 080 closed through verified published main merge 5b2442e3315da91bcbc8ccd0efc14c0c59106b27.
- Creation parent/integration/return: main at that full baseline. Working/publication branch: revision/081_5b2442e-prerelease on origin, pchemguy/SDD-Manager. No suspended parent workflow.
- Human instruction: open a prerelease campaign, prepare the next release and bump the patch version. Existing canonical version 0.15.0 selects 0.15.1. No new tag/release, publishing dispatch or installation selected.
- Complete remote enumeration returned 96 head/tag rows; shared campaign/path inventory has highest sequence 080. Sequence 081 is free; main readback matches baseline and v0.15.1 is absent. Git history is not shallow; local/remote v0.15.0 tag object agrees and peels to 2be233c7ec02be131917ceb16d6a16dc7d407d57.
- State: Planned; publish/read back before version/source changes. [Review plan](REVIEW-PLAN.md), [review report](REVIEW-REPORT.md), [preparation evidence](REVISION-REPORT.md).

## Ordered preparation

| Action | Outcome and owner | Prerequisites / verification |
| --- | --- | --- |
| P-001 | Bump only canonical plugin.json version to 0.15.1; retain its format and other metadata. Manage coordinates; forge/verify assess metadata/package agreement. | Published opening; core schema, unique version authority and actual diff. Commit/push/read back; its exact source becomes the initial candidate pin. |
| P-002 | Execute U-001–U-003 prerelease review with complete inventory, justified exact-byte evidence reuse, current candidate validation and no fabricated client/provider acceptance. | Published candidate. Report/publish each bounded review unit before the next. New required defects receive bounded correction/recheck within release preparation; consequential scope decisions return to the human. |
| P-003 | Prepare complete retained RELEASE-NOTES.md for 0.15.1 and validated Git highlights from the nearest qualifying first-parent release; review package and build-only structured handoff against an exact pinned candidate. | Passing selected review; complete history/tag/range accounting and preserved applicable human material. Packages/notes identify actual tested source and prepared state. No tag/publication implied. |
| P-004 | Finalize evidence/HANDOFF/index, verify publication and leave campaign open at the prepared-candidate checkpoint. | No unresolved required check; record source/body/archive hashes, remaining release execution steps and evidence limits. No campaign integration/closure selected here. |

## Source and artifact rules

Reuse current source instructions and exact current records. Campaign 080 and earlier packages are now frozen: consult only the specifically needed published provenance already available, and preserve them by path/object comparison. Their qualified evidence may be reused only after matching relevant bytes; do not invent a new live trial.

The plugin subtree is the distributable. Root contributor/acceptance/CI/review artifacts stay source-only. Bump the sole canonical manifest; do not rewrite historical version strings or install/reload a client package. The original CMD assignment remains controlling. Preserve current reference boundaries and examples' illustrative scope.

Release preparation uses the existing publisher and version-free sdd-manager.zip/checksum filenames. Root RELEASE-NOTES.md and the internal highlights checkpoint are already ignored/untracked; preserve existing note ownership/material and replace atomically. Retain a public-safe notes snapshot and coverage/source facts with campaign evidence so a future environment can reconstruct the handoff. Build outputs remain outside the shipped source inventory. Candidate pin, later evidence-only commits and a future final release commit/tag are distinct; a source advance requires rebind/rebuild and freshness verification before publication.

Each action/review-unit commit is pushed and exactly read back before further work. No T-task owner is invented. Stop with this campaign open and an accurate prepared-source checkpoint. A release request will apply the existing final message/commit/tag/readback gates.
