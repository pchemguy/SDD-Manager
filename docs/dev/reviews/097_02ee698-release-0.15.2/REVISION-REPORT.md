# Release preparation and outcome

Campaign 097_02ee698 executes the [release plan](REVISION-PLAN.md). Baseline: 02ee6987dd521832aa41cea6139d9b3255feba85. Branch: revision/097_02ee698-release-0.15.2; creation parent/integration/return: main. The requested version is 0.15.2, derived from canonical 0.15.1. A-001 and A-002 are complete: the release is published and verified. A-003 final integration/closure remains pending until verified main publication and clean return.

Comprehensive review 096 is closed through verified main merge 02ee6987dd521832aa41cea6139d9b3255feba85. Its [retained review](../096_4803b95-comprehensive-review/REVIEW-REPORT.md) and [revision result](../096_4803b95-comprehensive-review/REVISION-REPORT.md) establish the scoped pre-release assessment and evidence limits; they remain frozen. The optional prerelease-review reminder is already satisfied by that explicit completed review.

## A-001 — Version and complete release message

Provider preflight confirms latest stable v0.15.1, release ID 419146627, peeled source 52e9a03dcd1dd47e80b4549754165fc44da3b071; v0.15.2 has neither tag nor release. The complete Git range through opening 96bea9a4c7b0689b008dd562e16c14aa434e1224 contains 27 identities with parents/subjects. Assessed integration summaries for 094 (including nested 095 once) and 096, the direct greenfield-template change and the net source delta. Prior-release closure and review/release bookkeeping add no product highlight; no closed report contents were loaded for collection.

The manifest patch is 0.15.2. Tracked root RELEASE-NOTES.md now describes the prompt/template and source-only policy/documentation changes, preserving applicable requirements, installation and evidence limits. Its exact UTF-8 SHA-256 is 4eea3780414423a2318a65d14439a6d08bc6df2c7afa76c0e67fa57352419fb2. The ignored, untracked owned .release-highlights.md records the fixed prior baseline and analyzed source. The release commit must carry these same body bytes; inspect raw agreement, publish/read back and extend coverage to that exact commit before tagging. Package/provider completion remains pending.


## A-002 — Exact package, tag, CI and hosted verification

Release commit: 7b96e0a8b26510f2d110bcec3629181ed6f4f919. Its raw body exactly equals tracked root notes and the hosted body; the refreshed highlights checkpoint covers all 28 identities through that source. Annotated tag object 026c7378af9f1e4f7d12df4769281ad250b4ed6a is published/read back and peels to that same release commit. The canonical manifest and extracted package both declare 0.15.2.

Two exact-source builds are byte-identical, with all 153 members checked against Git; five extracted CLI help checks pass. Assets:

| Asset | Bytes | SHA-256 |
| --- | --- | --- |
| sdd-manager.zip | 456,985 | `6c40982e3ec35edeb0948a8b62d6d1345277b3008243e032c23326159819dca2` |
| sdd-manager.zip.sha256 | 82 | `0163df8cb3ea408c7f8443b08b1f46f1678ad817b66c0460075cb4e7d721a5f5` |

The existing publisher ran once with request sdd097-0152, workflow ref main at 02ee6987dd521832aa41cea6139d9b3255feba85 and the distinct pinned candidate above. [Run 39617616763](https://github.com/pchemguy/SDD-Manager/actions/runs/39617616763) completes successfully in both build and publish jobs. Downloaded CI logs confirm 139 support and 37 publisher tests and both matching asset hashes. Initial list/detail observations lagged job publication; exact final run readback establishes completion. A read-only log request returned HTTP 415 for its media type; correcting the temporary client's Accept header retrieved the logs without replaying a write or changing product code.

[SDD Manager v0.15.2](https://github.com/pchemguy/SDD-Manager/releases/tag/v0.15.2), release ID 419663596, is published stable and verified as latest. Independent API readback confirms exact tag source, body SHA-256 4eea3780414423a2318a65d14439a6d08bc6df2c7afa76c0e67fa57352419fb2, complete two-asset inventory and downloaded bytes matching the local package/checksum. Root RELEASE-NOTES.md remains tracked and retained. The owned ignored highlights checkpoint is deleted only after this verified body consumption.

No fresh native Windows, independent consumer/client, browser or diagram-rendering acceptance is claimed. Existing review limits remain explicit. No installation is selected.

## A-003 — Final integration boundary

Original opening: 96bea9a4c7b0689b008dd562e16c14aa434e1224. Original baseline and receiving main: 02ee6987dd521832aa41cea6139d9b3255feba85. Finalize current navigation/HANDOFF and publish/read back this evidence, then explicitly merge the full campaign into main. Verify unchanged release notes/version/package contents, source ancestry, prior closed-record preservation and clean worktree. The merge records both actual parents and checks; its verified publication and clean main return establish campaign closure. Preserve the release tag and revision branches; stop without further work.
