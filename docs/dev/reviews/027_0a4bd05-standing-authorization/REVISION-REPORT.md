# Standing authorization revision results

## Scope and state

Campaign `027_0a4bd05` revises the first-request authorization procedure and its publication handoffs on `revision/027_0a4bd05-standing-authorization`, targeting `main`. Baseline is `0a4bd053f1778932fd9e1d02acf21e60b46888b1`. The user instructed execution of the retained [revision plan](REVISION-PLAN.md) after the reduced planning payload was rejected.

The sanitized plan commit `6b9c8f5d8b67f8002eea5f93ef4977b3b82ff05a` was then published through the same shell Git transport. Remote readback confirms that exact branch tip. The request included the new execution instruction and established destination/payload/checks in `exec_command.cmd`; the observed successful push does not establish which contextual fact changed the host decision. No dedicated reviewer message or interpretation of command comments was verified.

## Actions

| Action | Result | Recheck and limits |
| --- | --- | --- |
| V-001 | Implemented first-request resolution, combined scoped request/credential interpretation, concrete context format, real-field discovery and pending-history inspection in revision-authorization.md. | Inspected the procedure against standing grant, bare credential, planning-only and worker-continuation cases; whitespace passes. Behavioral consumer acceptance remains pending. |
| V-002 | Implemented an evidence-based rejection table distinguishing omitted grants, generic objections, new/revoked scope, explicit host requirements, separate disclosure/destination grounds, actual channel limits and unknown effects. | Checked each row against SC-003–SC-007 and SC-009/SC-012/SC-013; no generic objection automatically demands fresh consent or authorizes a retry. V-001 checkpoint published as `429131d`. |
| V-003 | Implemented manager entry, coordination, Git/default-preparation integration, implementation startup/completion, steering, credential recovery, examples and README handoffs to first-request resolution and denial classification. | Inspected both sides of publication/recovery handoffs. V-002 checkpoint published as `ee4329d`. Document links/anchors and complete-source scenario assessment follow in V-004. |
| V-004 | Pending. | Scenario assessment and meaningful regressions. |
| V-005 | Pending. | Composition, support suite, explicit integration and publication. |

## Evidence limits

Derived findings are retained; removed conversation material is absent from the publication tree and all pending branch history. No original incident operation trace is available. Source inspection, simulated scenarios, actual Git publication and fresh consumer behavior are separate evidence classes. No fresh consumer/assessor tool is exposed in this session; do not certify fresh isolation or live host behavior for unexecuted scenarios.
