# Prerelease preparation evidence — SDD Manager 0.15.1

## Context

Campaign 081_5b2442e; starting source 5b2442e3315da91bcbc8ccd0efc14c0c59106b27, verified published main after campaign 080 closure. [Preparation plan](REVISION-PLAN.md), [review plan](REVIEW-PLAN.md), [review report](REVIEW-REPORT.md). Working/publication branch revision/081_5b2442e-prerelease; main is recorded parent/return. Human authorizes preparation and patch bump, not product release publication. State: P-001–P-004 and U-001–U-003 complete; campaign remains open at the prepared-candidate checkpoint. Exact candidate ddb86fc926ddc2cfbd15946946c75a9c3672645d was published/read back. Opening b3878d4a442a6a53328b1afe46b2d58ba148ae89 and U-002 report checkpoint 335aae310427cd76c5e9c0eb81e7334942ca37be were also published and exactly read back; final checkpoint publication is required before stopping.

## Actions

| Action | Current result | Verification / persistence |
| --- | --- | --- |
| P-001 | Canonical version 0.15.0 → 0.15.1; all other manifest bytes/fields retained. | Pinned offline core schema passed and manifest diff inspected. The containing published commit supplies the initial exact candidate SHA. |
| P-002 / U-001 | Complete current inventory and exact-byte reuse assessment; one phrase polished without policy change. | 154 files / 15 entries / 79 refs; 15 presentations, schema, 1,042 links / 269 fragments and structural validation passed (48 existing warnings). The containing published U-001 commit updates the candidate pin. |
| P-002 / U-002 | Candidate runtime/package assessment complete; 0.15.1 archive/checksum prepared. | 139 support / 37 publisher tests passed; two exact 154-file builds identical; four extracted CLI smokes passed. Matching recent native CI reused with explicit provenance. Build SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25. |
| P-002 / U-003 | Complete range and readiness assessment; no required defect. | All 150 selected identities accounted for: ten latest complete integration summaries cover 146; four direct changes assessed separately. Reverts/merge deltas reconciled; earlier cumulative bodies deferred without losing identity coverage. |
| P-003 | Complete 0.15.1 message, curated checkpoint, notes snapshot and build-only handoff prepared. | Root notes remain tracked; original body matched prior release. Atomic replacement, exact body/hash equality, publisher validation and candidate archive inspection passed. No dispatch or product publication. |
| P-004 | Final reports, continuation handoff and index prepared; stop with 081 open after exact publication. | Scoped links/style, immutable package/hash, source agreement, frozen-record preservation and clean publication checks; actual checkpoint SHA recovered from Git. |

## Prepared outputs and source association

| Item | Exact identity / retained form |
| --- | --- |
| Candidate | ddb86fc926ddc2cfbd15946946c75a9c3672645d; manifest 0.15.1; 154 shipped files |
| Previous release | v0.15.0 → 2be233c7ec02be131917ceb16d6a16dc7d407d57; complete coverage through candidate |
| Complete notes | Tracked root RELEASE-NOTES.md and identical [campaign snapshot](RELEASE-NOTES.md); 5,165 UTF-8 bytes; SHA-256 9620c1768831bc7480624216b8eb74f91ef745d255b3114cee065342c8440c82 |
| Build-only transfer | [RELEASE-HANDOFF.json](RELEASE-HANDOFF.json); 5,552 bytes; actual validator passed; exact source/body; publish, prerelease and make_latest false |
| ZIP | sdd-manager.zip; 449,132 bytes; SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25 |
| Checksum asset | sdd-manager.zip.sha256; SHA-256 e75cf68b0fae55b52949b3ba6f73e8f7557d25aecdb84b9fc641532231fd64e5 |

Local prepared outputs are together at /workspace/scratch/46b31bb4dff6/081-package-0.15.1; the source-bound publisher can reconstruct the ZIP/checksum if those local files are unavailable. Matching complete notes and handoff are retained there as well. The ignored/untracked .release-highlights.md holds the validated baseline/candidate watermark and curated highlights; keep it until actual published-body consumption. The tracked snapshots and range accounting preserve reconstructible context for a fresh environment.

All current package/runtime/test/tooling bytes still equal the pinned candidate. Later source-only notes/evidence commits do not change its identity or artifact hash. This is preparation for stable version 0.15.1, not a selected prerelease publication: the false channel/latest flags make no future publication decision. A future release request must select those policies, reconcile the exact intervening history, refresh coverage through the final release commit, rebind/rebuild, then verify tag/body and provider assets under the existing workflow.

## Final verification and limits

Current checks confirmed exact root/snapshot/JSON UTF-8 body and source agreement, valid build-only schema/size, core manifest agreement, all archive members and both retained asset hashes. No v0.15.1 tag exists. Git path/object comparison confirms closed campaign/feature/steering records are unchanged from the opening main baseline; no closed contents were loaded for routine validation. Final scoped current documentation audit found 220 Markdown files, 1,048 local links and 269 heading fragments without unresolved targets or style candidates. The index's separate 234-link navigation check also passed; frozen targets were existence-checked without loading their contents.

The candidate's 139 support and 37 publisher tests passed freshly. Recent unchanged utility sources reuse 106 Linux passes plus separately source-matched native CI; no failed required check was waived. Structural validation retains 0 errors/48 existing warnings. Actual installed-client/autonomous consumer/live-provider trials and Antigravity/local Codex activation were not run. There are no unresolved required defects from the selected review, and no new requirement is inferred from those unrun evidence classes.

## Stop

Publish/read back this final checkpoint and stop on revision/081_5b2442e-prerelease. Campaign 080 remains closed on main; 081 remains open, with preparation complete. No integration/closure of 081, release marker/tag, publishing dispatch, hosted release or installation follows from this request. Recover the containing checkpoint's actual SHA and remote containment from Git rather than embedding a self-referential future identity.

## Nested authentication revision

The preparation checkpoint was published and exactly read back at d0d7438bf1e6ec850870cfc43be32573c784dc0c. The subsequent human request opens child [082_d0d7438](../082_d0d7438-auth-helper/REVISION-REPORT.md) from that checkpoint to revise the authentication helper. Campaign 081 remains open; its execution is suspended while the child owns the focused scope. The child's creation parent, integration target and return branch are revision/081_5b2442e-prerelease, not main.

Retain the candidate and previous preparation results for their recorded source. No helper change is made at child opening. After a later authorized child integration, reassess affected prerelease inputs/evidence, refresh source/body/package association as needed, and return control at this preparation boundary. Child completion supplies no automatic parent continuation or release authority.
