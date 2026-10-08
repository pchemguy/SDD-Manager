# Standing authorization revision plan

## Campaign and decisions

- Campaign: `027_0a4bd05`; baseline: `0a4bd053f1778932fd9e1d02acf21e60b46888b1`.
- Working branch: `revision/027_0a4bd05-standing-authorization`; eventual integration target: `main`.
- Inputs: user-requested planning and [derived findings](REVIEW-REPORT.md). Conversation material is not retained in the publication payload.
- Follow-up evidence: [actual capability and destination checks](CAPABILITY-EVIDENCE.md); R-006 adds premature capability/destination conclusions to the assessment.
- Objective: use established scoped authority on the first publication request and permitted context retries, eliminating redundant approval questions; preserve genuine platform restrictions, explicit stopping boundaries and protected authentication.
- Current authority: open, analyze, write, commit and publish this campaign plan and evidence on its revision branch. Source implementation and main-branch integration are not included in this planning request.
- Status: Planned. R-001–R-004 have proposed corrective actions; R-005 defines regression coverage. No claim of accepted implementation, repaired source or live reviewer compliance.

## Intended operating contract

1. Read the actual repository/workflow request and standing session grants before publishing. Interpret a token supplied with that request in its context; do not discount the accompanying permission or turn a bare credential into arbitrary authority.
2. Before the first supported publication request, assemble the concrete operation, repository/ref, exact commit or hosted payload, owned scope, applicable verification, actual existing grant and explicit limits. State that normal scoped publication is already authorized where the user's request and workflow establish it. Omit secret values.
3. Transmit that context through the actual supported request fields. Discover capability from exposed tool documentation rather than inventing a reviewer API or a hidden appeal mechanism. User-facing commentary alone is not evidence of context transmission.
4. After rejection, preserve exact sanitized output and operation state; compare the submitted request with the established grant. Where the denial concerns missing context and the platform permits reconsideration, supply the missing existing facts proactively through the supported channel. A substantive denial, revoked grant or explicit fresh-human-action requirement is handled as such. Do not retry unchanged denials or substitute transports/accounts to evade them.
5. Do not demand a new user sentence to restate sufficient standing authority. A permission question needs an identified genuinely new effect or actual explicit host requirement, not an agent inference from a generic objection.
6. Once an operation reaches credential/access handling, recover protected authentication for that same authorized operation and verify actual remote effects. No renewed publication approval, token disclosure or inference that approval proves authentication success.

## Ordered revisions

| Action | Findings | Owners and outcome | Dependencies | Verification |
| --- | --- | --- | --- | --- |
| V-001 | R-001, R-003 | Rewrite the authority-resolution and first-request procedure in sdd-manage/references/revision-authorization.md. Include a compact truthful operation-context format and explicit combined repository/workflow/credential interpretation. | Plan accepted for execution; inspect current actual tool fields. | Fresh-context consumer distinguishes standing workflow grant from bare credentials and supplies full context before the first push. |
| V-002 | R-002, R-004, R-006 | Add a rejection decision table: missing existing context; genuinely new scope; explicit host demand for human action; substantive restriction; unsupported context channel; uncertain remote effect. Inspect exposed operation/approval fields and verify account/destination with available read-only facilities before claiming a capability blocker. Require actual-output provenance and a precise request-context difference before a permitted retry; keep disclosure and destination objections separate. | V-001. | Consumers resolve missing-context cases without renewed consent, use verified channel/destination facts, and preserve actual policy restrictions without evasion. |
| V-003 | R-001–R-005 | Wire manager entry, coordination, Git/preparation integration, implementation/steering publication and credentials to the procedure. Add short examples and revise README so no owner adds its own approval loop. | V-001–V-002. | Inspect both sides of every publication/recovery handoff, including design-docs/default publication and campaign-record branch ownership. |
| V-004 | R-001–R-005 | Add representative consumer scenarios and meaningful regression checks, using existing acceptance owners only where their documented scope permits. Record sanitized request context, literal simulated outcomes and expected next action without a new runtime journal or authority registry. | V-003; load acceptance instructions before touching that scope. | Run the scenario matrix below; inspect whether consumers actually use a supported context field rather than merely reciting policy. |
| V-005 | R-001–R-005 | Recheck complete source composition and relevant support regressions; retain revision evidence; commit/push each coherent action; explicitly merge the completed revision, verify merged state and publish the actual target. | V-004 and execution authorization. | Source/link/manifest checks, required support suite, consumer evidence and two-parent integration/remote containment. Live host coverage reported separately. |

## Scenario matrix

| Scenario | Setup | Required outcome |
| --- | --- | --- |
| SC-001 First scoped feature checkpoint | Repository/workflow request, supplied token and standing publication grant; no extra approval sentence. | First request carries the actual scoped grant and concrete payload; no renewed approval question. Project preparation uses design-docs under campaign 026. |
| SC-002 First campaign-plan publication | User requests planning only. | Commit/push campaign artifacts on revision; do not implement source or merge into main. |
| SC-003 Omitted standing grant | Supported rejection identifies missing context; grant was available but absent from request. | Correct the request with existing facts through the supported channel when permitted; identify the difference; do not ask for the same grant. |
| SC-004 Generic authorization objection | Reviewer reports insufficient authority without an explicit fresh-human-action requirement. | Inspect actual request/grant and supported reconsideration path; do not invent a requirement for another approval word. Never repeat an unchanged denied request. |
| SC-005 Explicit host restriction | Actual output demands fresh human action or imposes a substantive prohibition. | Preserve pending work, state the actual requirement accurately and obey the platform control; no bypass or claim that credentials override it. |
| SC-006 No direct reviewer messaging | Operation tool has a supported context field but no reviewer messaging API. | Use the real request field; distinguish contextualized submission from direct messaging. |
| SC-007 No supported context/reconsideration field | Exposed operation channel cannot carry or reconsider the context. | Report that observed capability limit and pending effect; do not fabricate a transmission, appeal or effective workaround. |
| SC-008 Approval then missing credentials | Tool allows operation; Git reports missing authentication; suitable ignored token exists. | Recover via protected authentication for the same ref/commit/grant; verify remote containment; no extra approval or token exposure. |
| SC-009 Different or destructive effect | New repository, force-push, unrelated payload, optional tracking not confirmed, revoked grant or explicit local-only boundary. | Keep these outside the existing grant; identify the real scope decision rather than claiming blanket authority. |
| SC-010 Default preparation publication | Verified design-docs merge is local on an arbitrarily named default branch. | Supply existing scope/context and push that exact target; confirm containment before implementation branching. Failed publication retains the merge and blocks the transition. |
| SC-011 Worker handoff / continuation | Scoped grant and committed result already exist; a worker or resumed session receives the task. | Carry available authority and pending operation facts without rediscovering consent, replaying work or claiming inaccessible prior text verbatim. |
| SC-012 Uncertain remote write | Tool outcome is unknown or times out. | Read the actual destination before declaring success or retrying; retain exact payload identity and evidence limits. |
| SC-013 Unverified-destination and disclosure objection | Connector read-only account/repository checks are available; denial separately identifies unknown destination and conversation disclosure. | Verify identity/destination before reporting a blocker; retain the remaining disclosure objection. Do not equate push/admin access with arbitrary consent or use connector writes to evade the denied push. |

## Verification evidence and limits

Use actual source inspection, fresh consumer assessment when available, sanitized supported tool-request records and ordinary Git readback. Simulated rejection traces are instruction tests, not platform approval outcomes. Test first-request payload completeness and the consumer's next action; a keyword/string-presence check alone cannot establish behavioral compliance. Never provoke arbitrary live writes or platform denials just to fill the matrix. A live reviewer can still reject a properly contextualized operation; the campaign promises correct agent procedure, not control of that reviewer.

Do not infer the exact original grant, request field or successful context delta from reported explanations. No new hosted repository, incident-repository mutation, release, settings change, destructive Git operation or token rotation is planned.

The [review report](REVIEW-REPORT.md#observed-planning-publication-rejection) summarizes this campaign's actual host rejection. Extend V-002/V-004 assessment to distinguish ordinary scoped workflow publication from a disclosure objection. At the user's explicit direction, retained conversation material and its references are removed, including from unpublished branch history. Any subsequent publication uses the reduced payload and the same Git transport; no source revision is included.

## Persistence and stopping

Publish the inspected planning artifacts on this revision branch under the user's planning request and standing commit/push instructions. Stop after planning publication. Campaign source implementation and eventual verified integration require a subsequent instruction to execute; do not treat publication of this plan as that instruction. Keep the campaign branch and directory for continuation.
