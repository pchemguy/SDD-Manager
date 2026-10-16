# Prerelease preparation revision report

## Campaign and result

- Campaign: `070_891a0ad`; [revision plan](REVISION-PLAN.md).
- Starting and initial tested source: `891a0ad69dce859e3622750c51201d6c26127499`.
- Working branch: `revision/070_891a0ad-prerelease-preparation`; target: main.
- State: closure prepared; the subsequent human request authorizes integration and release. Campaign closure takes effect on verified main publication, before product publication.

## Retained preparation

The initial release-preparation turn produced ignored local notes, readiness, package/checksum and verification logs. It made no commit or push. The follow-up requests a prerelease revision campaign with durable documents; this campaign tracks the complete root [RELEASE-NOTES.md](../../../../RELEASE-NOTES.md) and retains [readiness](RELEASE-READINESS.md) with its evidence.

| Action | Delivered record | Verification and limits |
| --- | --- | --- |
| V-001 | Root notes become tracked; campaign plan, report, readiness and exact initial verification outputs are retained; review index gains this open campaign. | Notes retain the initial complete body and SHA-256. Evidence identifies the actual tested source. Packaged source and older closed records remain unchanged. The campaign commit and origin branch establish persistence; publication is checked after the commit rather than asserted in advance. |
| V-002 | Accepted release/closure decision recorded; final records and index prepared for explicit main integration. | Published opening `925ae9533f0fe30de67dd9a49dd727733920b5a1` was read back at origin. Its exact-source native ZIP rebuilt identically with SHA-256 `43fb65b5c31ca6397c9112d1c026eafbcaa626af557e7985c5f095f1181c3d2c`; package/tooling bytes match the tested starting source. Merged checks, integration and product effects are verified at their respective later boundaries. |

Initial candidate verification passed 137 support tests and 34 publisher tests, static validation of all 33 catalog cases, pinned core schema validation and byte-identical native package builds. The author validator reported zero errors and 46 plugin-contained cross-skill advisories. Exact commands, environment, hashes and limits are in the readiness record; raw support/publisher/author outputs and the build observation are in evidence/.

## Composition and continuation

This is documentation persistence, with no package, workflow, manifest or acceptance-tooling changes. Preserve the initial package/source pairing; later campaign commits add records and the tracked notes. Refresh the local highlights watermark through the published tip after accounting for that bookkeeping. The retained notes need no editorial change solely because their persistence advances Git history.

V-001 was committed and pushed as `925ae9533f0fe30de67dd9a49dd727733920b5a1`, with exact remote readback. It kept the campaign open and performed no main merge, release marker, tag, Actions dispatch or provider write.

The human then requested “Make release and close campaign.” V-002 prepares closure on main and the release handoff. The integration commit records actual merged-state verification, parents and publication boundary; the release commit/tag and hosted workflow are subsequent release operations. No successful future effect is asserted here. Leave the retained campaign unchanged after verified main publication.

## Remaining work and limits

The human's release request clears the preparation review stop. At this record's preparation, hosted CI and local Python 3.11 were not run; the release workflow supplies a later CI check. Installed-client discovery/routing and fresh live consumer/provider acceptance remain out of scope. Before product publication, refresh coverage through the final source, preserve exact notes bytes in its release commit and GitHub body, tag that commit and rebuild/read back the actual published assets. Report those later effects from Git/provider evidence rather than modifying this closed record.
