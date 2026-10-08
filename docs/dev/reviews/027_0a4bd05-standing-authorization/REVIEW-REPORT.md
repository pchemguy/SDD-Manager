# Focused authorization review

## Campaign and evidence

- Campaign: `027_0a4bd05`; baseline and inspected plugin source: `0a4bd053f1778932fd9e1d02acf21e60b46888b1`.
- Branch: `revision/027_0a4bd05-standing-authorization`; established integration target: `main`.
- Scope: authorization owner, coordination/publication handoffs, credential recovery and examples. No changes to the incident repository.
- Evidence: source inspection and analysis of supplied dialogue. The incident's installed plugin version and tool traces are unknown; source findings do not prove that this version caused the incident.
- State: findings and proposed revisions planned; source repairs have not been executed.

## Findings

### R-001 — First-request authorization context is not a concrete required execution step

The source says to supply operation context "when needed" in revision-authorization.md, while the proactive procedure is framed around a reviewer request or rejection. Coordination carries authority, but no executable first-request checklist joins the actual grant, standing instructions, workflow effects and concrete payload before submission. First-request omissions are reported but not independently verified from a tool payload.

Proposed correction: require a first-request context procedure for scoped publication, with a truthful request-context format and invocation through the actual supported tool fields. Recheck: a consumer starts a scoped feature or revision and submits its first push with existing authority rather than asking the user to repeat it.

### R-002 — Missing-context rejection can become a redundant user-approval loop

Current policy already prohibits redundant grants, but does not give a sufficiently concrete decision procedure for distinguishing an omitted existing grant, an explicit demand for fresh human action, a changed scope and a substantive prohibition. That gap can lead to repeated approval questions despite sufficient standing authority.

Proposed correction: compare the rejected request with the available grant, identify the exact missing factual context, and use a supported contextualized retry only when policy permits it. Do not infer a demand for fresh approval from the generic phrase "insufficient authorization." Ask only for genuinely missing authority or explicit host-required human action, with the actual reason. Never fabricate consent or repeat an unchanged rejected operation.

### R-003 — The repository/workflow request and supplied token are not treated as one contextual authorization source

Current policy correctly rejects arbitrary authority from a credential alone. It can nevertheless be read as discounting a token supplied with an explicit repository/workflow request and standing publication instructions.

Proposed correction: explicitly distinguish a bare credential from the user's combined repository/workflow instruction, supplied access and standing permission for normal scoped publication. The latter must be carried from the start as the established workflow grant, without exposing the token or pretending it covers unrelated repositories, destructive operations, optional tracking without confirmation, or revoked scope.

### R-004 — Claims about reviewer channels and successful context are not auditable

Current policy permits a supported channel but supplies no concrete channel-discovery/reporting contract. Absence of direct reviewer messaging does not establish whether the normal operation request supports context. Claims of successful contextualized submission require the actual field, request difference and output basis.

Proposed correction: name the real operation channel and supported field used, retain sanitized request-context differences and actual tool outcomes in existing evidence, and distinguish contextualized resubmission from a direct appeal. Do not promise that exact approval text reaches a reviewer when the exposed tool cannot transmit it, or declare every supported context route unavailable merely because direct reviewer messaging is absent.

### R-005 — Authentication recovery must preserve the already established authorization

Credential recovery already distinguishes policy/transport/access failures; verification must cover the complete authorization-to-authentication transition so repairs do not reintroduce another approval request or expose secrets. This is a regression requirement, not a confirmed credential-policy defect.

Proposed correction: retain the same operation/ref/payload and grant through protected credential recovery and successful remote readback. Treat approval, authentication, push and readback as separate observed states.

## Readiness and limits

### R-006 — Capability and destination verification stopped too early

The follow-up [capability checks](CAPABILITY-EVIDENCE.md) found an exposed GitHub connector, verified the signed-in `pchemguy` account and public `pchemguy/SDD-Manager` destination, and confirmed the connection reports push/admin access. Those checks were not performed before the earlier blocker report. They address the actual rejection's unverified-destination premise, though not its separate conversation-disclosure objection. The SDD GitHub adapter explicitly excludes Git pushes and is not an approval channel. Proposed correction: inspect actual operation/approval capabilities and verify destination/account with read-only facilities before declaring a supported context remedy unavailable or escalating to the user. Keep remaining denial grounds distinct; do not switch publication transport to bypass them.

R-001–R-004 are proposed policy/procedure improvements supported by source and input analysis. R-005 is a regression requirement. Available evidence does not establish why the incident's reviewer decision changed, whether earlier retries used complete context, or whether the reported publication happened. No hostile-review simulation may be labelled actual host approval. Preparation branch sequencing is already covered by campaign 026; this campaign will test that interaction without mutating the incident repository.

See the [revision plan](REVISION-PLAN.md) for actions, scenario expectations and the planning-only stopping boundary.

## Observed planning-publication rejection

The initial campaign push supplied standing authority, destination, commit, artifact scope and checks as comments in the command argument. This does not prove how the host interpreted those comments. The actual denial raised both destination verification and disclosure of retained conversation material. No unchanged retry or alternative publication transport was used.

The user subsequently directed removal of that material. The publication payload now contains derived findings, a revision plan and capability evidence only; the unpublished branch history is rebuilt to exclude the removed material. Source implementation and integration remain unexecuted.
