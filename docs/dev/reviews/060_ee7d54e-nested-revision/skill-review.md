# Review skill entries and instruction modules

## Scope and output

Use for focused or comprehensive review of a skill's `SKILL.md` entry and its instruction modules. Assess whether an agent can recognize the capability, select relevant instructions, act within the requested scope and report a supported result. Review composition, organization, progressive loading and ownership alongside technical meaning.

Establish the requested output and editing authority first. A review-only request produces findings and proposed revisions; it does not authorize repairs, installation or external operations. A focused review need not become a full-package audit. Inspect scripts, assets and external dependencies when an instruction claim depends on them; report uninspected behavior separately.

## Entry and module responsibilities

The entry identifies purpose, activation conditions, required inputs, the principal path, consequential boundaries and when to load supporting material. Detailed procedures and reusable guidance belong in the relevant reference modules; scripts suit repeated deterministic operations, and assets hold reusable input/output material. These facilities are optional: a simple skill may need only its entry.

Keep the information required to choose the next module or respect an immediate constraint available before that choice or action. A correct instruction discovered only after its dependent action is insufficient. Do not require every reference to be loaded at startup or make essential instructions depend on an unavailable custom entry.

| Material | Entry-level need | Supporting owner |
| --- | --- | --- |
| Purpose and activation | Supported capability, ordinary trigger intent and important scope exclusions | Metadata and entry agree with actual procedures |
| Inputs and starting state | Required context or readiness and the owner of missing-input recovery | Detailed inspection, intake or recovery procedure |
| Paths and variants | Conditions that distinguish the principal branches and their next instructions | Selected procedure or workflow module |
| Authority and completion | Consequential allowed effects, acceptance gates and stopping conditions | Detailed execution, verification and reporting procedures |
| Dependencies | Necessary facilities and what to do when an owner or tool is unavailable | Dependency-specific instructions; actual packaging and client evidence |

The entry may own canonical instructions. A reference can repeat a short prerequisite or boundary when independently loaded instructions need it, or when it prevents a consequential handoff error. Explain the role of such reinforcement; consolidate repeated procedure that adds no condition, decision or protection. A relocation must preserve meaning, qualifications and discoverability.

## Review dimensions

| Dimension | Assess |
| --- | --- |
| Purpose and metadata | Does the description represent the principal capability and relevant activation distinctions? Do supported outputs and exclusions agree with the body? |
| Document structure | Do section jobs follow the agent's decisions? Is there a recognizable path from context to action and completion? Use headings where they improve navigation; do not impose them on every short entry. |
| Paragraphs and steps | Does each unit have a controlling concern? Are prerequisites, explanations and exceptions grouped with the action they govern? Flag overload, topic drift and unexplained changes of scope. |
| Language and precision | Are conditions, actors, pronouns and terms unambiguous? Remove wording that adds no meaning; preserve identifiers, evidence, quantities, uncertainty and technical distinctions. |
| Duplication and ownership | Does repetition support lookup, sequence or a boundary, or reproduce another owner's procedure? Are shared rules maintained consistently and needed details at a clear destination? |
| Progressive discovery | Can the agent identify what to load next and why? Are necessary modules directly discoverable, available at the distribution boundary and sufficient when loaded under their stated prerequisites? |
| Authority and continuity | Are assessment and execution distinguished where relevant? Can sufficient existing context be reused? Are missing decisions, interrupted work and request changes handled without guessing authority? |
| Completion and evidence | Do instructions define observable outputs and the requested stop? Are planned, performed, verified, persisted and externally observed states distinguished where applicable? |

Length is a diagnostic signal, not a defect or an acceptance ceiling. Assess information needed by the intended models, including less capable or local models. A shorter entry can lose necessary decision guidance. Report byte/word measures as such; token, cost or behavioral improvement claims require an identified method and evidence.

## Review procedure

1. **Pin the brief and source.** Record the capability, intended audience/model context, requested coverage, actual source and permitted effects. Identify applicable instructions, source owners and evidence limits. Respect project rules for retained history and protected material.
2. **Reverse-outline the text.** Identify the job of each section, paragraph and major step. Check the overall trajectory and selected dimensions above before proposing local edits.
3. **Trace consequential instructions.** Follow relevant routes and handoffs on both sides. Compare a repeated or relocated clause with its owner, loading condition and independently loaded context. Verify destinations preserve removed qualifiers before shortening the entry.
4. **Assess representative contrasts.** Select cases that exercise the actual capability's important branches, constraints and stop. Reuse established cases when suitable; avoid tests that merely search for the revised wording.
5. **Verify supported properties.** Check current-format metadata, resource paths, links/anchors and the applicable standalone or bundled distribution boundary with the owning structural tooling. Inspect actual output or behavior only when selected and authorized. Link validity does not establish client invocation or runtime support.
6. **Return actionable findings.** Give location/source, observation, consequence, confidence, priority, correction destination and objective recheck. Distinguish defects, recommendations and evidence gaps. Retain no-finding coverage, unresolved choices and unrun checks; do not present proposals as implemented repairs.

For an accepted revision, preserve technical meaning and scope, recheck affected owners/routes and review the resulting composition. Update affected navigation or projections without automatically enlarging every entry. Use the project's actual persistence and integration policy; this procedure introduces no Git, hosting or approval requirement of its own.

## Assessment contrasts and evidence

Adapt cases to the skill; omit inapplicable ones with a reason. Use ordinary starting facts and paraphrased requests rather than fixed invocation syntax.

| Contrast | Inspect or observe |
| --- | --- |
| Normal request versus nearby out-of-scope request | Capability recognition and scope boundary; no invented output or dependency |
| Different supported variants | Explicit selection condition and relevant module, without loading unrelated branches |
| Sufficient context versus missing/stale input | Reuse or scoped recovery; unresolved consequential decisions remain unresolved |
| Assessment-only versus authorized changes | Appropriate effects and completion boundary |
| Successful path versus unavailable prerequisite or interrupted work | Concrete blocker/recovery and preservation of valid work |
| Requested partial result versus complete operation | Correct output, evidence and stop without unrequested continuation |
| Directly loaded entry/module versus its documented parent handoff | Required context is available or its absence is handled; no reliance on an unseen authoring conversation |

Source review establishes instruction coverage and consistency. A selected behavioral trial separately records the actual source/model, initial context, request, loaded instructions, observed actions, output and stop. Give a consumer only its ordinary task inputs and permitted instructions, not reviewer expectations. Correct routing is distinct from successful execution; structural checks are distinct from live acceptance. Qualify unavailable facilities and client-dependent behavior rather than claim universal support.
