# Focused tracking-fidelity campaign

## Identity, authority and boundary

- Campaign: `038_d6218f1`; starting baseline `d6218f1458b3805ecd27f6be6942162ec4a815ed`.
- Working branch: `revision/038_d6218f1-tracking-fidelity`; parent and proposed eventual integration target: `revision/037_a6c42dd-prerelease-review`, explicitly selected by the human. Main is not the immediate target.
- Parent campaign 037 is suspended; its completed prerelease assessment, exact candidate and Open findings remain unchanged by this focused review.
- Product wording reviewed: current repository source at this baseline, equivalent to product source `a6c42dd754843abf9bafca7dee2aee9e733b046a`, version `0.15.0`. Parent campaign commits change review records only.
- Objective: review the explicit requested GitHub tracking decision, phase activation and implementation handoff against the supplied test result; propose bounded wording changes to improve agent fidelity.
- Authority: create and publish this focused campaign's evidence, review report and proposed revision plan. Source revisions, demo repository operations, live tracking writes, implementation, main merge and product release are outside this request.
- State: Focused review complete; [REVIEW-REPORT.md](REVIEW-REPORT.md) and [proposed REVISION-PLAN.md](REVISION-PLAN.md) are published campaign artifacts. Source revision is not accepted or executed. The prompt defines the review scope; no separate comprehensive review plan is required.

## Prompt-defined review criteria

| Criterion | Scope and question |
| --- | --- |
| C-001 | Does an explicit tracking request establish the decision immediately, separately from authentication and object creation? |
| C-002 | Must the manager load and apply phase activation before dispatching implementation, including first phase and direct implementation entry? |
| C-003 | Can unavailable-hosting/local-continuation wording be read as permission to bypass required initial or newly added task projection? |
| C-004 | Are actual object identities/associations carried through existing handoffs, with blockers, recovery and phase transitions visible? |
| C-005 | Do proposals preserve optional tracking choice, human document acceptance, partial-range boundaries, per-commit publication, single owners and no extra registry? |
| C-006 | Is the claimed cause distinguished from source evidence, and is improvement verified by behavior rather than keyword presence? |

Assess one focused unit across sdd-manage entry/tracking/activation/coordination/workflows/examples, sdd-implement entry/startup/completion, sdd-forge projection and shared backend lifecycle. Inspect current wording and both sides of the handoff. Use Technical Writing Assistant composition criteria for prominence, conditional clarity, referents and reader burden. No independent external research or live consumer execution is selected. Findings distinguish confirmed wording weakness from a reported consumer failure and unverified causal attribution.

Commit/push/read back this opening checkpoint before completing the focused report. Publish the report and proposed revision plan in the next checkpoint; stop before source revision. Proposed actions are not accepted or executed actions. No historical campaign compatibility review or repair is in scope.

## Supplied test result and provenance

Human supplied the following initial project request, follow-up and agent response on 2026-10-10. The credential is deliberately omitted from retained evidence. This is an imported conversation excerpt, not a native transcript or independently inspected repository result. Tested plugin commit/version, exact loaded references, tool attempts, actual hosted inventory and execution chronology are unknown. The agent names Phase 1–3 delivery; this review does not independently verify those deliveries or absent hosted objects. Do not infer current source identity from its reference filenames.

Initial request, credential redacted:

```text
Help me develop the following project using /sdd-manager.

Preliminary project description:

A classic browser-based Tetris game
GitHub repository: https://github.com/pchemguy/SDD-Manager-Demo-Tetris-ChatGPT-Jules-TS
GitHub token: [REDACTED]

Enable and maintain GitHub tracking for phase labels, milestones and task issues.
```

Follow-up:

```text
Why aren't you follow the GitHub progress tracking req (labels/milestone/issues)?
```

Agent response:

```text
I made a mistake in prioritization and execution. I ignored the GitHub tracking requirement because I failed to correctly integrate the sdd-manage phase-activation gate into my workflow.

When you initially authorized the project, you explicitly instructed:

"Enable and maintain GitHub tracking for phase labels, milestones and task issues."

According to the SDD Manager conventions (skills/sdd-manage/references/tracking-decision.md and skills/sdd-manage/references/phase-activation.md), I was required to establish this tracking decision before executing the first task of any phase. Specifically, the protocol dictates that I should have used sdd-forge to project the phase label, milestones, and task issues to GitHub, read back their associations, and then proceeded with local execution and verification.

Instead of adhering to that protocol, I treated the initial document generation (creating TASKS.md with its checkboxes) as the sole source of truth and immediately began executing the tasks locally. In my haste to deliver the functional milestones (Phase 1, Phase 2, and Phase 3), I bypassed the cross-cutting operation that links local task execution to the hosted tracker.

This was an oversight on my part. I treated the GitHub tracking as an optional add-on that could be deferred rather than a prerequisite gating mechanism for phase execution, which directly contradicted both your explicit instruction and the established sdd-manage workflow rules.
```

The explicit activation request is unambiguous in the supplied input. Token presence alone would be insufficient, but that is not this input. The response's retrospective rationale is a hypothesis; source review cannot establish what the agent loaded, why it omitted the operation or whether stronger wording would have prevented it.
