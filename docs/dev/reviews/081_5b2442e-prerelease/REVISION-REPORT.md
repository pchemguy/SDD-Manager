# Prerelease preparation evidence — SDD Manager 0.15.1

## Context

Campaign 081_5b2442e; starting source 5b2442e3315da91bcbc8ccd0efc14c0c59106b27, verified published main after campaign 080 closure. [Preparation plan](REVISION-PLAN.md), [review plan](REVIEW-PLAN.md), [review report](REVIEW-REPORT.md). Working/publication branch revision/081_5b2442e-prerelease; main is recorded parent/return. Human authorizes preparation and patch bump, not product release publication. State: P-001 and U-001–U-002 complete; exact candidate ddb86fc926ddc2cfbd15946946c75a9c3672645d published/read back. Opening b3878d4a442a6a53328b1afe46b2d58ba148ae89 was published and exactly read back.

## Actions

| Action | Current result | Verification / persistence |
| --- | --- | --- |
| P-001 | Canonical version 0.15.0 → 0.15.1; all other manifest bytes/fields retained. | Pinned offline core schema passed and manifest diff inspected. The containing published commit supplies the initial exact candidate SHA. |
| P-002 / U-001 | Complete current inventory and exact-byte reuse assessment; one phrase polished without policy change. | 154 files / 15 entries / 79 refs; 15 presentations, schema, 1,042 links / 269 fragments and structural validation passed (48 existing warnings). The containing published U-001 commit updates the candidate pin. |
| P-002 / U-002 | Candidate runtime/package assessment complete; 0.15.1 archive/checksum prepared. | 139 support / 37 publisher tests passed; two exact 154-file builds identical; four extracted CLI smokes passed. Matching recent native CI reused with explicit provenance. Build SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25. |
| P-002 / U-003; P-003–P-004 | Pending | Release range/message/handoff and final checkpoint pending |

## Stop

Publish/read back the opening before P-001. Leave this campaign open at a published prepared-candidate checkpoint; retain exact source/body/package identities and unrun client/provider boundaries.
