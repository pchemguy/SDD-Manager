# Workflow authorization and publication

Use the actual human request, standing session instructions, accepted scope and observed repository identities. Carry their authorization through the complete selected workflow. Do not turn an authorized push into a new review request or ask the human to authorize the same effect again.

## Review and execution boundaries

A review assesses its selected source, records findings and finishes at the review report commit. The reviewer does not own publication, integration or implementation of proposed repairs. A review-only request permits its requested report and commit; source repairs require implementation authorization.

The coordinating workflow owns publication after the review commit. Full preparation, implementation, feature, steering and revision workflows include their prescribed commits, pushes, eligible integration and target publication unless the human explicitly requests a local-only or earlier stopping boundary. Publishing a committed review report is a workflow operation, not part of the review. Per-unit report checkpoints still publish before dependent workflow work when required.

Keep ownership explicit: sdd-implement owns task completion/publication and issue-closure coordination; sdd-steer owns its amendment workflow; sdd-manage coordinates other scoped changes, report publication and eligible integration. Preserve the workflow's integration gate: partial main-phase work pushes and pauses; only a complete verified phase integrates by default.

## Authorized effects

Within the established repository, branch, range and permitted content, the selected full workflow authorizes:

- Scoped commits and normal pushes of completed work and required evidence checkpoints.
- Verified integration at the workflow's eligible boundary and publication of the established target.
- Required maintained hosting operations for the active scope, including completion evidence and issue/milestone reconciliation when hosting is already enabled.

Apply explicit human limits, including preparation-only, pause, local-only, unmerged-branch, selected paths, destinations and stopping boundaries. Do not widen a review into source repairs, publish unrelated changes, force-push, or select a destination from a branch prefix. A new repository, unrequested external disclosure or destructive operation needs its own authority. A repeated authorization question is not justified solely because an authorized operation publishes work.

## Execute publication directly

Perform the established Git push through the normal Git execution tool with existing authentication. Do not invoke, route through or request any review skill, code-review workflow, approval-review skill or additional permission-review stage for a push. Content verification and any required code review finish before the result commit; publication follows under the execution owner's existing authority. The publication operation does not reopen that review.

Supply the actual human request, repository/ref, exact commit, content scope and applicable verification as operation context when needed. Preserve that context through coordinator/worker handoffs rather than requiring each worker to rediscover permission. A handoff conveys existing authorization; it does not create new authorization.

## Platform rejection and interrupted effects

Platform-enforced tool checks are outside the plugin's control. This policy neither invokes those checks nor disables, circumvents or overrides them. Do not promise that changing plugin instructions removes a platform rejection.

1. Preserve the rejected operation, exact stated reason and local state. Read the actual destination/ref or hosted identity before any retry where the effect may be unknown.
2. Distinguish missing workflow authority from platform execution denial. Reuse the actual human authorization already present; do not describe it as absent or present a redundant approval request as a plugin requirement.
3. Where a supported operation channel accepts context, supply the concrete scope/evidence to resolve a demonstrable mismatch. Do not invoke a review skill or manufacture a new approval stage. Retry only when new evidence, changed conditions or a platform-supported authorization resolution permits it.
4. Do not repeat an unchanged denied request, change tools/transports/accounts to evade a denial, or replace credentials for a policy restriction. Retain existing commits and pending hosted identities; do not reimplement or advance through a blocked dependency.
5. Report a remaining platform blocker precisely, separately from the plugin's authorization and completion state. If the host explicitly requires additional human confirmation, identify that requirement and its origin. Do not claim that the plugin requires approval already supplied by the user.

Record workflow authority, review completion, local commit, publication, integration and hosted state as distinct facts. Existing campaign/task evidence is sufficient; no extra mutable authorization registry or transaction journal is required. Resume the retained operation after the execution facility permits it.
