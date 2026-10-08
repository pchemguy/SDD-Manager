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

Preserve the exact sanitized reason, rejected request facts and local state. Split multiple grounds rather than resolving one and assuming the entire denial is cleared. Inspect the submitted context, available user grant, exposed tool fields and active restrictions before selecting the next action:

| Observed condition | Required action |
| --- | --- |
| Existing scoped grant was omitted or inaccurately summarized; reconsideration is permitted | Identify the precise omission and supply the available existing facts through the supported request field. Retry only with that material context difference; do not ask for the same grant again. |
| Generic insufficient-authorization objection; no explicit fresh-human requirement | Compare the actual request and grant, verify uncertain destination/account with available read-only facilities, and inspect supported context/reconsideration capabilities. The wording alone does not establish missing human authority or a supported retry. Use the applicable row after these checks. |
| Genuine new destination/effect, revoked scope or an explicit local-only boundary | Keep the operation outside the existing grant. Obtain the genuinely missing scope decision before the affected write. |
| Actual host output explicitly requires fresh human action or rejects a substantive effect | Respect that control; identify the exact required action and origin. Continue unaffected work. A supported materially safer alternative must remove the prohibited effect, not hide or relabel it. |
| Disclosure and destination objections are both present | Verify destination separately. Inspect and reduce unrequested content only within user-authorized scope, including reachable push history. Ownership/access does not grant consent for arbitrary disclosure. Preserve any remaining denial ground. |
| No direct reviewer messaging API; operation context field exists | Use the real field when the host permits that resolution. Report contextualized submission accurately; do not claim direct messaging or verified reviewer interpretation. |
| No supported context/reconsideration mechanism after capability inspection | Report the observed tool/session limitation and pending effect. Do not invent a mechanism, misuse escalation fields, switch transport/account to evade review or change permission settings without an instruction. |
| Remote effect is unknown | Read exact destination refs or hosted identities before retrying. A timeout is not proof of failure. Preserve unknown state if readback is unavailable. |

For every permitted resubmission, record the actual channel/field, material change from the rejected request, applicable grant/limits, retained operation identity and observed outcome in existing evidence. A later user instruction may supply new scope evidence; do not invent its text or claim that it guarantees host acceptance. Do not repeat an unchanged denied request, substitute credentials for a restriction, reimplement retained work or advance through a blocked dependency.

Report a remaining platform blocker precisely, separately from plugin authority and completion state. If host instructions require asking for approval, name that host requirement and its reason; never attribute it to a new plugin gate. The plugin cannot promise elimination of host-required interaction.

Authentication is evidence of access capability. A read/write token alone does not authorize arbitrary payloads or destinations or override a rejection. Where the host requests authorization context, accurately supply the existing human grant and exact scoped operation through the supported channel; do not falsely claim that credentials create the grant. A concrete authorized request need not be reauthorized merely because authentication uses a token.

Record workflow authority, review completion, local commit, publication, integration and hosted state as distinct facts. Existing campaign/task evidence is sufficient; no extra mutable authorization registry or transaction journal is required. Resume the retained operation after the execution facility permits it.

## Supply missing authorization context proactively

For the required design-docs preparation merge, the implementation/workflow grant includes pushing the verified merge to the repository's actual default branch, whatever its name. Supply that existing scoped authority with the destination/ref, merge commit, complete document scope and checks before the first request. Complete and verify this default-branch push before a dependent implementation branch is created. The push of design-docs itself or a local default merge does not satisfy the prerequisite.

Use [first-request authority resolution](#first-request-authority-resolution) before the first write, not only after rejection. Before declaring authority missing or asking the user again, compare the actual submitted context with that resolved grant and explicit limits. Carry existing scoped authority through every worker and publication handoff.

For a permitted contextualized retry, reuse the first-request format and add the actual sanitized denial, remote/object readback and precise material difference from the rejected request. Follow the rejection table; supply missing existing facts proactively when that resolution is supported. Do not require the user to restate a sufficient grant, invent a reviewer-messaging API or change tools/accounts/transports to evade a denial.
