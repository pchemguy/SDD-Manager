# Campaign 072 revision report

## Authority and baseline

The human requested planning and execution after the comprehensive review. [Revision plan](REVISION-PLAN.md) accepts R-001–R-004 within their bounded corrections. Original review remains evidence for `8a534b21f6318f0b76b11a19783f7d40ca94d698`; revision starts at `9279a389e3b06034c6fe04f433fc00fcc5f65365` on `revision/072_8a534b2-comprehensive-review`, returning to `main`.

State: V-001–V-002 complete; V-003–V-005 pending. Live acceptance and release operations are excluded.

## Actions and finding disposition

| Action | Finding | State | Evidence |
| --- | --- | --- | --- |
| V-001 | R-004 | Verified: local checker correction | Native version/tag subject regression plus retained body/tag/publication sensitivity; 15 focused tests pass. |
| V-002 | R-001 | Verified: source/native directions | Explicit merge-purpose dispatch, receiving context and completion-only exits; six native two-parent contrasts pass. |
| V-003 | R-002 | Pending | Prospective template tracking choice before writes. |
| V-004 | R-003 | Pending | Build-metadata tag support and exact version equality. |
| V-005 | All | Pending | Coupled verification, explicit integration/publication and closure. |

The selected R-002/R-003 policy decisions are recorded in the plan. Existing review probes and failures remain unchanged. No prior closed record is reopened.

## V-001 — Observe release subjects without a hidden oracle

Removed exact `Release <tag>` spelling from mechanical agreement. Capture now retains the UTF-8 subject and its assessment limit in provenance; independent A-032 assessment checks it against the selected version/tag/project contract. Exact body bytes, peeled tag/source and published readback predicates remain required. Updated release scenario/common guidance and A-032 criteria without adding a consumer answer.

The new native Git contrast failed against baseline: `Release 1.0.0` produced false agreement, while the tag subject lacked the newly required provenance field (one behavioral failure and one missing-field error). [RED log](evidence/V-001-red.log). After correction, all 15 release-capture tests pass in 3.035s, including whitespace/newline, changed-body, wrong-tag and unpublished-readback negatives; [GREEN log](evidence/V-001-green.log). Command: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -p test_release_capture.py -v`. This is native helper/sensitivity evidence, not agent or provider acceptance.

## V-002 — Separate synchronization from completion

Git workflow guidance now establishes merge purpose before boundary checks. Completion retains the creation-parent/return requirement. Authorized incoming synchronization preserves the active receiver's identity, original parent, pending scope/decisions and HANDOFF; it does not require an unfinished phase to finish or authorize its outward merge. Both directions retain full incoming-diff inspection, verification, explicit two-parent persistence and publication. Synchronization messages identify actual incoming/receiving provenance rather than claim campaign closure.

Routed preparation propagation, existing-revision baseline incorporation and reopened catch-up explicitly to that purpose; continuity and examples carry the receiving-context rule. Updated the source contract/capability projection and added K-14. PLUGIN/coordinator entry loading and README's completion summary already route to these owners and need no duplicate procedure.

Source traces cover default preparation → active phase → feature creation/feature completion → phase, existing revision catch-up and reopened catch-up/final return. [Native fixture](evidence/V-002-native-git.py) and [result](evidence/V-002-native-git.json) execute six two-parent merges with deliberate receiver HANDOFF reconciliation, preserving branch-off/parent/scope/stage/stop; an unfinished phase stays outside main. The fixture verifies Git topology/state, not an agent interpreting the instructions or remote publication. Command: `PYTHONDONTWRITEBYTECODE=1 python docs/dev/reviews/072_8a534b2-comprehensive-review/evidence/V-002-native-git.py`.
