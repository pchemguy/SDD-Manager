# Revision campaign exploration

## Campaign and entry

- Campaign: `073_a5bc041`.
- Starting baseline and full branch-off commit: `a5bc0410f726162397f53e3462e2915d7fa24f07`.
- Creation parent and eventual integration target: `main`.
- Working branch: `revision/073_a5bc041-exploration`.
- State: open; accepted exploration and revision plan executed; locally verified, open and unmerged.
- Request: “Open a explore stage revision campaign”.
- Coordinator: `sdd-manage`; exploration owner: `sdd-design`.

## Authorized scope and stopping boundary

Review and elaborate the exploratory stage as an agent-guided design subworkflow, primarily before PROJECT creation and reusable for features and later design stages. Inspect the current guidance and record requirements, assessment and proposed design. Distinguish user requirements from agent recommendations.

The human accepted the exploration and requested the [revision plan](REVISION-PLAN.md). The subsequent “Execute” request authorized the planned source revisions and verification. Stop at the published revision result before release or integration. Keep the campaign open and unmerged.

## Decisions and open questions

- User decision: start a new revision campaign at exploration.
- Repository evidence: entry main is clean and matches published `a5bc041`; campaign 072 is integrated.
- User-selected subject: proactive early exploration of a project or feature, with particular attention to terse initial descriptions and consequential high-level choices.
- The requirements and proposals below supersede the opening record's unspecified subject; no later-stage execution is preapproved.

## Evidence and continuation

The opening changes only this record and the branch-local [handoff](../../HANDOFF.md). Prior closed campaign records remain unchanged. Opening checks cover branch identity, baseline, owned diff, Markdown links and whitespace; they do not establish product or live-agent behavior. No source test suite is needed for this metadata-only opening.

Execution checkpoint: [revision report](REVISION-REPORT.md) records completed actions and local verification. Next eligible action: await human review or further direction; campaign remains unmerged.


## User requirements established during exploration

- Exploration is a dedicated sdd-design subworkflow, primarily before the project brief, reusable during later development-document design and feature preparation.
- Critically evaluate the initial problem/objective and proactively help the human understand reasonable directions, missing high-influence aspects and important alternatives.
- Adapt to terse seeds, broader supplied context, user preferences and project/feature scope. Recommend aligned choices while identifying consequential alternatives.
- Surface important technology and architecture decisions early when reasonably possible, including language/framework/runtime and browser rendering choices.
- Keep discussion high-level and proportionate. Feature exploration may need more technical precision when existing contracts or compatibility make it consequential.
- Use a concise set of common prompts and guidelines rather than an exhaustive universal questionnaire. Help establish enough direction for robust later agent decisions with less micromanagement and interruption.
- Specific examples are illustrative and non-exhaustive. They must not limit or bias workflow scope, domains, technologies, options or recommendations. Derive relevance and coverage from the actual objective and context, not resemblance to an example.

## Current-source assessment

Inspected source at campaign opening commit `87641d2706684dc9b059e923a70fcc5f126d1a94`:

- `sdd-design/SKILL.md` already routes clarification, alternatives and open questions to `references/exploration.md`. It permits conversational exploration and preserves separate document-creation authority.
- `sdd-design/references/exploration.md` already distinguishes facts, decisions, assumptions, delegated details and alternatives; it permits recommendations and focused questions.
- Its opening frames exploration as preparation for architecture and decomposition. Its design-surface examples emphasize interfaces, dependencies, lifecycle and verification. These do not adequately guide pre-brief problem framing or proactive discovery of foundational product/platform choices.
- `sdd-design/references/project-brief.md` correctly says a short seed may be insufficient, separates intent from structural design and allows consequential accepted technical choices in the brief. It does not itself supply the missing facilitation procedure.
- `sdd-manage/references/workflows.md` already places greenfield exploration at main-workflow entry and preserves later-stage entry with sufficient existing inputs.

Recommendation: strengthen the existing exploration module and its selective entry/handoff guidance; do not add a competing exploration owner or duplicate its procedure across composite workflows. This is a scoped source assessment, not a comprehensive review or observed agent-behavior result.

## Proposed subworkflow design for discussion

### Purpose and entry

Help turn an initial idea into a shared, coherent direction before drafting PROJECT. At a later design stage, resolve the specific uncertainty without restarting settled exploration. Feature exploration begins with accepted project context and examines the proposed change and its consequences.

Start from what the user already supplied. Identify missing consequential context, contradictions, hidden assumptions and meaningful alternatives; do not require the human to enumerate the design questions. Scale breadth to uncertainty, stakes and reversibility rather than description length alone. A terse but explicitly constrained demo can need little discussion.

### Common exploration lenses

Use these as an internal relevance scan, not a form to administer. Discuss only the aspects that can materially change direction, scope, user experience, feasibility or later autonomy.

| Lens | Useful high-level question | Decision consequence |
| --- | --- | --- |
| Problem and outcome | Who needs what result, in which situation, and what would make it useful? | Distinguishes the intended product from one assumed solution |
| Scope and use | What are the principal interactions/capabilities, exclusions and expected project breadth? | Exposes materially different interpretations without specifying every behavior |
| Environment and delivery | Where does it run, how is it used/distributed, and must it work offline or across devices? | Guides browser/native/server choices, deployment and external dependencies |
| Constraints and priorities | Which preferences, existing assets, skills, time/cost limits and quality priorities matter? | Makes recommendations fit the user and exposes real tradeoffs |
| Foundational choices | Which technology or structural choices would significantly change the experience or development approach? | Surfaces language/runtime/framework, rendering, local/server state and similar decisions when relevant |
| Risks and delegation | What uncertainty could invalidate the direction, and which remaining choices may the agent make later? | Separates necessary human choices, validation needs and safely delegated detail |

Do not turn every possible quality or technology into a compulsory question. Raise security, privacy, accessibility, persistence, integration or scale when the use context makes them consequential. Compare complete intended project scope with an initial delivery slice without forcing phase planning during exploration.

### Facilitation loop

1. Reflect the objective briefly and identify the most consequential uncertainty or tension; distinguish requirements from proposed interpretations.
2. Explain a small number of credible directions in plain language, their practical consequences and a context-aligned recommendation. State what makes an alternative worth considering; avoid option catalogues and generic pros/cons.
3. Ask a focused question or a small coherent group of questions where the answer materially changes the direction. Do not ask for information already supplied or require a choice that the user has explicitly delegated.
4. Incorporate the answer, test its consistency with the emerging direction and surface the next consequential gap. Revisit decisions only for new evidence or a changed objective.
5. Periodically synthesize confirmed direction, proposed assumptions, unresolved risks and delegated choices. Proceed when further conversation has little decision value; do not force a predetermined interview length.

A recommendation is not an accepted decision. Explicit delegation can authorize later agent choices within stated constraints; silence, document preapproval and broad execution authority do not establish missing requirements. Honor an explicit request to draft with clearly identified unresolved proposals rather than inventing acceptance or creating a compulsory extra approval gate.

### Appropriate technical depth

Explicitly label concrete examples as illustrative and non-exhaustive wherever they appear in the resulting guidance. Examples demonstrate how to reason; they do not define the supported project types, a required question sequence, preferred technologies or the complete decision space. Select relevant concerns and alternatives from the actual project context, including concerns absent from the examples. Apply the same qualification to assessment examples so they do not become a substitute for general workflow coverage.

Discuss purpose, consequences and reversibility before implementation mechanics. A choice belongs here when it changes principal scope, deployment, interaction model, constraints or the cost of changing direction. Defer package versions, directory trees, class/API shapes and detailed contracts unless the current question depends on them.

Separate decision axes. JavaScript/TypeScript are language choices; React concerns UI composition; Node.js may concern tooling or a server runtime; DOM/Canvas concerns rendering. Do not imply that browser development inherently requires React or a Node.js backend. Explain a Python-based browser direction only when credible for the use case, including its additional runtime/delivery implications. These are illustrative assessment contrasts, not prescribed stacks or an instruction to enumerate all choices for every browser game.

For a browser game, DOM/Canvas can warrant early discussion through interaction/rendering needs and accessibility, while exact drawing routines remain later design. An explicit established stack should narrow exploration unless a material conflict warrants challenging it. Existing architecture constrains feature options; surface changes to it rather than silently redesigning the project.

### Completion and handoff

The conversation is sufficiently developed for a project brief when purpose/use, principal scope, consequential constraints and high-impact directions are coherent, and material unresolved choices are explicitly identified with a resolution or deferral path. Not every architectural decision must be settled before PROJECT.

Distinguish decisions needed for the brief from those needed before ARCHITECTURE or later dependent work. Carry confirmed choices, rationale where consequential, open risks and delegated decision boundaries to the selected document owner. PROJECT retains intent and constraints; ARCHITECTURE retains structural rationale. A campaign record preserves exploration decisions until their authorized incorporation; no new mandatory exploration document, task list or per-turn handoff rewrite is proposed.

Exploration does not itself authorize document creation, code/prototype changes or advancement through an existing human checkpoint. Preserve the existing project-brief and architecture readiness gates.

## Proposed assessment contrasts

These are future verification cases, not executed acceptance results:

- Terse unconstrained browser-game seed: proactively clarify experience and context, then surface consequential rendering/technology choices without drafting the entire architecture.
- Same seed with explicit TypeScript/Canvas and offline constraints: reuse them, avoid a stack questionnaire and explore remaining significant gaps.
- Python preference for a browser product: assess the reason and delivery implications, recommend aligned credible options and explain consequential alternatives without pretending preference establishes feasibility.
- Systems-oriented seed: compare C/Rust/Go only if their deployment, resource, safety or ecosystem implications matter to the actual objective.
- Feature within an established architecture: explore the delta, compatibility and changed assumptions; avoid reopening settled project choices without cause.
- Later design uncertainty: resolve the selected issue at appropriate depth, then return to its document owner without replaying the initial interview.
- Human delegates technical details: retain constraints and decision boundaries, make eligible recommendations/choices and avoid repeated requests for micromanagement.
- Contradictory constraints or an uncertain central premise: explain the conflict and possible validation; do not present a guessed resolution as accepted.
- Well-specified seed or explicit draft request: keep exploration proportionate and preserve requested artifact scope, assumptions and existing approval gates.

## Open design points

- Proposed default: preserve one adaptable exploration module, with concise pre-brief guidance and later-stage/feature adaptations, rather than separate procedures with copied rules.
- Proposed default: no mandatory extra exploration artifact or new universal checkpoint; durable decisions use existing owning records and the established document chain.
- Subsequent revision planning should identify exact coordinator/brief/feature handoffs that need changes and assess their source guidance together. It should not expand into unrelated workflow repairs.


## Planning acceptance and reference boundaries

The human accepted this exploration and requested revision planning. References must balance meaningful scope and size: broad guidance stays shallow; detailed guidance stays narrow. Avoid tiny incomplete fragments, vague boundaries and overloaded files with separable workflows. The revision plan applies this to the existing exploration module, shallow caller routing and bounded document-owner handoffs. No new reference file is proposed by default.
