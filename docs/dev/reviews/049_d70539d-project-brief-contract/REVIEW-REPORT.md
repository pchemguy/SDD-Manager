# PROJECT definition review report

## Campaign and evidence

- Campaign: `049_d70539d`; [review plan](REVIEW-PLAN.md).
- Starting/reviewed source: `d70539d93ba7df3595b93adfef1be8e9fc6d5d36`.
- Original opening: `0c9486f3a853f74f02b34ef7ea270cc30569d361`.
- Working branch: `revision/049_d70539d-project-brief-contract`; target: `main`.
- Evidence: current plugin/skill source and the human-supplied Jules Tetris conversation/artifact. No test repository, credentials, installed package or provider effects inspected. Actual clarification answers and Jules' installed source version were not supplied.
- State: focused review complete; source unchanged. One medium authoring/routing recommendation and two low editorial recommendations remain proposed. No implementation or integration authorized.

## Conclusion

PROJECT.md is explicitly intended to be a concise project brief. Jules' interpretation is consistent with that role; the sample is not evidence of an incorrect document type. The definition is distributed and the drafting procedure is less explicit than architecture/decomposition, however. Strengthen the initial-stage contract rather than replace the brief with a detailed specification.

The whole PROJECT document is the brief. In the supplied example, the internal Brief subsection contains only a one-sentence project summary; **Overview** is a clearer heading. This is an editorial improvement, not a schema or workflow violation.

## Source trace and coverage

| Inspected owner | Located definition or behavior | Assessment |
| --- | --- | --- |
| [sdd-design entry](../../../../skills/sdd-design/SKILL.md), ownership paragraph | PROJECT owns the concise project brief; architecture owns high-level design and decomposition owns logical boundaries. | Explicit type/owner and downstream distinction exist. |
| [architecture reference](../../../../skills/sdd-design/references/architecture.md), Document ownership | Brief covers purpose, users, principal outcomes, scope/non-goals, constraints and orienting terms; it is not operating instructions. | Strongest content definition is explicit, but located in a later-stage reference. |
| [exploration reference](../../../../skills/sdd-design/references/exploration.md), Decision state / Conversation / Handoff | Establish problem/users/outcomes/constraints/non-goals; distinguish facts, decisions, assumptions/questions; summarize decisions before architecture. | Good input/decision discipline, but no explicit PROJECT drafting/review/completion procedure. |
| [human review](../../../../skills/sdd-manage/references/human-document-review.md), Created-document checkpoints | PROJECT belongs to sdd-design; hold dependent architecture/other brief use; persist and present substantive analysis for acceptance. | Clear separate human checkpoint; clarification alone is not document acceptance. |
| [workflow catalog](../../../../skills/sdd-manage/references/workflows.md), preparation entry | Design owner supplies brief, architecture and decomposition; accepted inputs can be reused. | Preparation/stage ownership is coherent. |
| [sdd-specify entry](../../../../skills/sdd-specify/SKILL.md) and design boundaries | PROJECT owns brief; SPEC owns intended observable behavior and acceptance. | A capability list in the brief does not replace exact rules or acceptance in SPEC. |
| [feature incorporation](../../../../skills/sdd-integrate-feature/references/feature-incorporation.md), PROJECT integration | Incorporate purpose/users/scope/outcomes/constraints into the brief. | Maintenance meaning agrees with initial role. |
| [PLUGIN](../../../../PLUGIN.md), [README](../../../../README.md), [capability map](../../CAPABILITY-MAP.md) | Initial document sequence, human checkpoint and concise brief ownership. | Consistent navigation; no requirement that PROJECT become a large spec. |

The design entry's Document boundaries table omits PROJECT even though its ownership paragraph defines it. Its routing table offers exploration/architecture/decomposition, without an explicit create/revise/review PROJECT route. No prescribed internal Brief heading, fixed word count or exhaustive behavior contract was found in the inspected design sources.

## Findings and recommendations

### R-001 — Make the initial PROJECT authoring contract directly loadable

Priority: medium; type: instruction completeness/routing recommendation; confidence: confirmed by source inspection; status: proposed.

Location: sdd-design/SKILL.md routing and Document boundaries; exploration.md; architecture.md Document ownership.

The intended brief exists as a definition, but the strongest content list is in the architecture-stage reference. An agent following progressive disclosure at the first PROJECT stage can load exploration and never reach that later reference. Exploration describes conversational decisions and architecture readiness rather than how to turn accepted clarifications into the reviewable PROJECT artifact. This encourages agent-specific heading/detail choices; it does not establish that Jules chose the wrong document type.

Proposed bounded correction: add an explicit PROJECT create/revise/review route, with a small project-brief reference (or a clearly owned loadable subsection) covering purpose, inputs, scope/detail boundaries, adaptable content outline, decision/assumption handling and handoff. Include PROJECT in the document-boundary table. Use one canonical contract referenced from architecture rather than competing copies. Retain the design-docs persistence and separate human acceptance gate; do not add an administrative task or mandatory extra report.

Suggested definition: **PROJECT.md is the concise project brief that turns the initial description and clarified decisions into a reviewable statement of the project's purpose, intended users, desired outcomes, principal scope, non-goals and consequential constraints. It gives architecture and later specification a shared starting point, with material assumptions/open questions identified where needed.**

Recheck: an initial-stage agent can discover the definition without loading architecture; direct drafting and review requests route to it; an accepted Tetris seed yields a short brief without architecture blocks, exact behavioral contracts, phase plans or task lists. Confirm human acceptance still precedes dependent stages.

### R-002 — Use Overview for the sample's opening subsection

Priority: low; type: example/editorial recommendation; confidence: confirmed from the supplied artifact; status: proposed, not a plugin defect.

Location: supplied Tetris PROJECT, internal Brief heading.

The document is already a project brief; the opening subsection is its one-sentence summary. Rename it **Overview** (Summary is also defensible). Keep the project title as the root heading. If a short document needs no introduction subsection, its opening paragraph can follow the title directly. Do not impose a rigid heading schema; section purposes matter more than labels.

A useful adaptable organization is Overview, Users and scope, Goals, Non-goals, Constraints, and material Assumptions/open questions. Omit or combine headings when the content remains clear; a small project need not populate every possible section.

### R-003 — Distinguish intended outcomes from accepted technology constraints

Priority: low; type: sample/content-organization recommendation; confidence: based on visible text, with clarification provenance incomplete; status: proposed.

Location: supplied Brief/Goals statements naming HTML/CSS/JS, vanilla JavaScript and Canvas.

The sample repeats the technology choice in its opening and Goals. A playable browser game and smooth gameplay are outcomes; a chosen language/rendering technology is a high-level constraint or accepted choice. Prefer one concise Overview statement and a Constraints section for those choices when their acceptance is established. Keep principal feature scope in Goals or scope; put structural rationale/components in ARCHITECTURE and exact mechanics/acceptance in SPEC.

PROJECT can include consequential constraints or principal features: Canvas/vanilla JavaScript is appropriate here if chosen by the human. The lock-delay bullet can preserve an explicit distinguishing requirement at brief level without specifying the full timing/state/reset/error contract. Avoid using the brief's brevity to lose accepted requirements, or repeating their precise semantics as competing normative definitions downstream.

## Supplied Jules artifact assessment

| Element | Assessment |
| --- | --- |
| Browser Tetris purpose and intended audience | Appropriate brief-level orientation. Audience is proposed/inferred unless established by actual clarification. |
| Classic scope plus hold/ghost/7-bag/wall kicks/hard drop | Appropriate principal capability scope if accepted; classic versus modern wording can be clarified during brief review. |
| One-full-gravity-interval lock delay | Suitable important scope constraint; detailed semantics belong to SPEC. |
| Technology choices | Appropriate accepted constraints, without detailed architecture in PROJECT. |
| Multiplayer/backend leaderboards/mobile exclusions | Useful non-goals, but their actual acceptance cannot be reconstructed from the missing answers. Present them for confirmation or label assumptions; do not infer a violation solely from the excerpt. |
| Human review pause after PROJECT | Matches the documented created-document checkpoint in the supplied response. The excerpt does not establish later compliance. |
| Claimed commit, token storage and tracking configuration | Unverified operational claims, outside this artifact-definition review. No API/Git readback or token use was performed. |

No fixed document length is proposed. The sample is a reasonable small-project brief; adding detail solely to fill headings would not improve it. The question is whether architecture can proceed from confirmed purpose/scope/constraints, not whether PROJECT repeats SPEC.

## Verification, limits and next step

Inspected current source definitions and both sides of the design/specification and human-review handoffs; compared the supplied artifact conceptually without executing its prompts. Checked report headings/links, allowed Git paths and unchanged closed records. No source repair, runtime suite, Mermaid render, installed-client run, provider verification or external research was performed.

Publish this report and stop on the open review branch. If the recommendations are accepted, prepare a bounded revision plan principally for R-001, with R-002/R-003 as adaptable authoring/example guidance. The user-supplied test-project artifact is not authorized for edits. Keep the concise project-brief role, separate document owners and required human checkpoint.

## Accepted revision evidence

The human requested ready discovery from PLUGIN.md and authorized planning/execution. R-001–R-003 are addressed by V-001 in [REVISION-REPORT.md](REVISION-REPORT.md): one canonical brief reference, explicit plugin/design/workflow routes and adaptable Overview/constraint guidance. Baseline observations above remain retained. Source/static verification does not establish Jules or another consumer's actual future behavior.
