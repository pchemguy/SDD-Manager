# Prerelease preparation evidence — SDD Manager 0.15.1

## Context

Campaign 081_5b2442e; starting source 5b2442e3315da91bcbc8ccd0efc14c0c59106b27, verified published main after campaign 080 closure. [Preparation plan](REVISION-PLAN.md), [review plan](REVIEW-PLAN.md), [review report](REVIEW-REPORT.md). Working/publication branch revision/081_5b2442e-prerelease; main is recorded parent/return. Human authorizes preparation and patch bump, not product release publication. State: P-001 metadata change verified; publish/read back before review. Opening b3878d4a442a6a53328b1afe46b2d58ba148ae89 was published and exactly read back.

## Actions

| Action | Current result | Verification / persistence |
| --- | --- | --- |
| P-001 | Canonical version 0.15.0 → 0.15.1; all other manifest bytes/fields retained. | Pinned offline core schema passed and manifest diff inspected. The containing published commit supplies the initial exact candidate SHA. |
| P-002–P-004 | Pending | No candidate package/message readiness yet |

## Stop

Publish/read back the opening before P-001. Leave this campaign open at a published prepared-candidate checkpoint; retain exact source/body/package identities and unrun client/provider boundaries.
