# Workflow authorization and publication

Use the actual human request, standing session instructions, accepted scope and observed repository identities. Carry their authorization through the complete selected workflow. Do not turn an authorized push into a new review request or ask the human to authorize the same effect again.

## Review and execution boundaries

A review assesses its selected source, records findings and finishes at the review report commit. The reviewer does not own publication, integration or implementation of proposed repairs. A review-only request permits its requested report and commit; source repairs require implementation authorization.

The coordinating workflow owns publication after the review commit. Full preparation, implementation, feature, steering and revision workflows include their prescribed commits, pushes, eligible integration and target publication unless the human explicitly requests a local-only or earlier stopping boundary. Publishing a committed review report remains part of the complete workflow; the reviewer's assessment ends at its result commit. Per-unit report checkpoints still publish before dependent workflow work when required.

Keep ownership explicit: sdd-implement owns task completion/publication and issue-closure coordination; sdd-steer owns its amendment workflow; sdd-manage coordinates other scoped changes, report publication and eligible integration. Preserve the workflow's integration gate: partial main-phase work pushes and pauses; only a complete verified phase integrates by default.

## Authorized effects

Within the established repository, branch, range and permitted content, the selected full workflow authorizes:

- Scoped commits and normal pushes of completed work and required evidence checkpoints.
- Verified integration at the workflow's eligible boundary and publication of the established target.
- Required maintained hosting operations for the active scope, including completion evidence and issue/milestone reconciliation when hosting is already enabled.

Apply explicit human limits, including preparation-only, pause, local-only, unmerged-branch, selected paths, destinations and stopping boundaries. Do not widen a review into source repairs, publish unrelated changes, force-push, or select a destination from a branch prefix. A new repository, unrequested external disclosure or destructive operation needs its own authority. A repeated authorization question is not justified solely because an authorized operation publishes work.

## Execute publication directly

Perform the established Git push through the normal Git execution tool with existing authentication as part of the authorized full workflow. Content verification and required code review finish before the result commit; the execution owner then publishes. Do not add a redundant plugin approval stage or reopen completed content review solely because a push is due. This ownership rule does not classify or suppress the host's automatic review of the tool request.

Before the first publication request, perform [first-request authority resolution](#first-request-authority-resolution). Preserve its grant, limits and concrete operation facts through coordinator/worker handoffs rather than requiring each worker to rediscover permission. A handoff conveys existing authorization; it does not create new authorization.

## First-request authority resolution

1. Resolve the actual repository/workflow request, standing session publication instructions, accepted scope and explicit limits. A token supplied with that request provides access for the accompanying authorized workflow; carry the combined request from the start. A bare token without an accompanying scope is not arbitrary publication authority. Keep optional hosted tracking confirmation separate.
2. Inspect the complete pending payload, including earlier commits reachable by the push. Include only the requested work and required scoped evidence. Using conversation material as input does not request retaining or publishing a conversation copy. Remove unrequested material within the authorized scope before publication; do not hide denied content behind a renamed file or changed transport.
3. Resolve the exact operation, observed destination/ref, commit or hosted object, owned content and checks. Verify an uncertain destination/account through available read-only facilities when needed; existing verified facts need not be reprobed before every push.
4. Inspect the exposed operation tool's fields and active host restrictions. Supply the existing authority and concrete operation facts through supported request context before the first write. A normal tool request may carry context without offering direct reviewer messaging. Use only fields actually documented by that tool; do not invent an approval API, misuse an escalation question as consent submission, or change permission settings to avoid review.
5. Execute the scoped operation. Retain the actual channel/field used and observed outcome in existing evidence. Text included in a request proves inclusion, not that a reviewer recognized it as authority or allowed the action. Do not claim a context-free command, user-facing commentary or a credential handed approval to a reviewer.

Use this compact format in the supported request field; omit secrets and unnecessary conversation text:

```text
Authority: current repository/workflow request and applicable standing publication grant; explicit limits.
Operation: normal push / eligible integration publication / confirmed hosted transition.
Destination: verified repository and ref, or exact hosted identity.
Payload: full commit or concrete object delta; owned paths/content; pending-history scope.
Verification: actual checks and relevant destination/effect readback.
Channel: actual tool and supported context field; interpretation unverified until observed.
```

Use an exact short instruction only when it is available and useful; otherwise give a truthful scoped summary. Do not export the conversation to prove authority. A later continuation carries its new instruction alongside existing grants, retained operation identity and previous outcomes; it does not retroactively prove what an earlier reviewer received.

## Platform rejection and interrupted effects

Read this policy before deciding that an operation needs authorization, before requesting additional approval, and when reconciling a rejection. In ChatGPT, automatic review is a separate host agent/control monitoring requests that cross its sandbox boundaries. Similar controls may exist in other systems. It is not a plugin skill or workflow stage; its decision does not redefine pushes as outside the complete workflow. This policy cannot disable, circumvent or override host controls. Do not promise that plugin wording or a website setting removes tool-request review.

1. Preserve the rejected operation, exact stated reason and local state. Read the actual destination/ref or hosted identity before any retry where the effect may be unknown.
2. Distinguish missing workflow authority from platform execution denial. Reuse the actual human authorization already present; do not describe it as absent or present a redundant approval request as a plugin requirement.
3. Where a supported operation channel accepts context, supply the concrete scope/evidence to resolve a demonstrable mismatch. Do not manufacture a new plugin approval stage. Retry only when new evidence, changed conditions or a platform-supported authorization resolution permits it.
4. Do not repeat an unchanged denied request, change tools/transports/accounts to evade a denial, or replace credentials for a policy restriction. Retain existing commits and pending hosted identities; do not reimplement or advance through a blocked dependency.
5. Report a remaining platform blocker precisely, separately from the plugin's authorization and completion state. If the host explicitly requires additional human confirmation, identify that requirement and its origin. Do not claim that the plugin requires approval already supplied by the user.

Authentication is evidence of access capability. A read/write token alone does not authorize arbitrary payloads or destinations or override a rejection. Where the host requests authorization context, accurately supply the existing human grant and exact scoped operation through the supported channel; do not falsely claim that credentials create the grant. A concrete authorized request need not be reauthorized merely because authentication uses a token.

Record workflow authority, review completion, local commit, publication, integration and hosted state as distinct facts. Existing campaign/task evidence is sufficient; no extra mutable authorization registry or transaction journal is required. Resume the retained operation after the execution facility permits it.

## Supply missing authorization context proactively

For the required design-docs preparation merge, the implementation/workflow grant includes pushing the verified merge to the repository's actual default branch, whatever its name. Claim that existing scoped authority explicitly when the supported operation channel requires context, and supply the destination/ref, merge commit, document scope and checks below. Complete and verify this default-branch push before a dependent implementation branch is created. The push of design-docs itself or a local default merge does not satisfy the prerequisite.

Use [first-request authority resolution](#first-request-authority-resolution) before the first write, not only after rejection. Before declaring authority missing or asking the user again, compare the actual submitted context with that resolved grant and explicit limits. Carry existing scoped authority through every worker and publication handoff.

For a reviewer request or rejection citing absent context, prepare the supported request context with these concrete facts:

| Fact | Required content |
| --- | --- |
| Operation and needed authority | Normal verified commit push, eligible integration, or confirmed hosted lifecycle operation; identify which effect is requested. |
| Destination | Established repository/ref or exact hosted object identity. |
| Payload | Exact commit and owned paths/content scope, or concrete object projection/state transition. |
| Existing user grant | Relevant current request/standing instruction, plus optional-capability confirmation when applicable; never include a token value. |
| Verification and denial | Applicable observed checks, exact stated rejection reason and actual remote/object readback. |
| Supported response | Available operation-context/reconsideration mechanism and the changed contextual facts. |

When the denial demonstrably concerns missing context and the supported channel permits reconsideration, supply this context and attempt the contextualized operation proactively. Do not require the user to restate an already sufficient grant. If no such channel exists, report its absence and preserve the pending effect; do not invent a reviewer-messaging API. A revoked grant, genuine policy restriction or explicit host demand for additional human confirmation remains a blocker under the preceding rejection procedure. Never repeat an unchanged denial or change tools/accounts/transports to evade it.
