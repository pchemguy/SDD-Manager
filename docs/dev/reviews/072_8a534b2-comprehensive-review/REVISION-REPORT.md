# Campaign 072 revision report

## Authority and baseline

The human requested planning and execution after the comprehensive review. [Revision plan](REVISION-PLAN.md) accepts R-001–R-004 within their bounded corrections. Original review remains evidence for `8a534b21f6318f0b76b11a19783f7d40ca94d698`; revision starts at `9279a389e3b06034c6fe04f433fc00fcc5f65365` on `revision/072_8a534b2-comprehensive-review`, returning to `main`.

State: V-001 complete; V-002–V-005 pending. Live acceptance and release operations are excluded.

## Actions and finding disposition

| Action | Finding | State | Evidence |
| --- | --- | --- | --- |
| V-001 | R-004 | Verified: local checker correction | Native version/tag subject regression plus retained body/tag/publication sensitivity; 15 focused tests pass. |
| V-002 | R-001 | Pending | Incoming synchronization versus completion integration. |
| V-003 | R-002 | Pending | Prospective template tracking choice before writes. |
| V-004 | R-003 | Pending | Build-metadata tag support and exact version equality. |
| V-005 | All | Pending | Coupled verification, explicit integration/publication and closure. |

The selected R-002/R-003 policy decisions are recorded in the plan. Existing review probes and failures remain unchanged. No prior closed record is reopened.

## V-001 — Observe release subjects without a hidden oracle

Removed exact `Release <tag>` spelling from mechanical agreement. Capture now retains the UTF-8 subject and its assessment limit in provenance; independent A-032 assessment checks it against the selected version/tag/project contract. Exact body bytes, peeled tag/source and published readback predicates remain required. Updated release scenario/common guidance and A-032 criteria without adding a consumer answer.

The new native Git contrast failed against baseline: `Release 1.0.0` produced false agreement, while the tag subject lacked the newly required provenance field (one behavioral failure and one missing-field error). [RED log](evidence/V-001-red.log). After correction, all 15 release-capture tests pass in 3.035s, including whitespace/newline, changed-body, wrong-tag and unpublished-readback negatives; [GREEN log](evidence/V-001-green.log). Command: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -p test_release_capture.py -v`. This is native helper/sensitivity evidence, not agent or provider acceptance.
