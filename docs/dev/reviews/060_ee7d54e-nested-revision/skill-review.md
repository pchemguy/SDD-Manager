# Review skill entries and references

## Scope and output

Review composition, organization, scope, ownership and instruction quality in `SKILL.md` and reference modules. Apply the criteria to the selected material and report actionable findings.

Establish the requested output and editing authority first. A review-only request produces findings and proposed revisions; it does not authorize repairs, installation or external operations. A focused review need not become a full-package audit. Inspect scripts, assets and external dependencies when an instruction claim depends on them; report uninspected behavior separately.

Apply Shared review criteria to both artifact types, then the relevant Skill entry review or Reference module review section. The review procedure and evidence requirements are shared.

## Shared review criteria

| Dimension | Assess |
| --- | --- |
| Purpose and scope | Does the artifact serve its stated capability or local responsibility? Do contents, assumptions and boundaries agree with that purpose? |
| Document structure | Do section jobs follow the agent's decisions? Is there a recognizable path from context to action and completion? Use headings where they improve navigation; do not impose them on every short artifact. Match the progression to a procedure, explanation, contract or example. |
| Paragraphs and steps | Does each unit have a controlling concern? Are prerequisites, explanations and exceptions grouped with the action they govern? Flag overload, topic drift and unexplained changes of scope. |
| Language and precision | Are conditions, actors, pronouns and terms unambiguous? Remove wording that adds no meaning; preserve identifiers, evidence, quantities, uncertainty and technical distinctions. |
| Duplication and ownership | Does repetition support lookup, sequence or a boundary, or reproduce another owner's procedure? Are shared rules maintained consistently and needed details at a clear destination? |
| Progressive discovery | Can the agent identify what to load next and why? Are necessary modules directly discoverable, available at the distribution boundary and sufficient when loaded under their stated prerequisites? |
| Authority and continuity | Are assessment and execution distinguished where relevant? Can sufficient existing context be reused? Are missing decisions, interrupted work and request changes handled without guessing authority? |
| Completion and evidence | Do instructions define observable outputs and the requested stop? Are planned, performed, verified, persisted and externally observed states distinguished where applicable? |

Length is a diagnostic signal, not a defect or an acceptance ceiling. Assess information needed by the intended models, including less capable or local models. A shorter entry or reference can lose necessary context or decision guidance. Report byte/word measures as such; token, cost or behavioral improvement claims require an identified method and evidence.

Identify the canonical owner of repeated guidance. Retain a short prerequisite or boundary when the expected reading context needs it or it prevents a consequential handoff error; consolidate repeated procedure that adds no condition, decision or protection. A relocation must preserve meaning, qualifications and discoverability.

## Skill entry review

Check that information required to choose the next module or respect an immediate constraint is available before that choice or action. A correct instruction discovered only after its dependent action is insufficient. Do not require every reference to be loaded at startup or make essential instructions depend on an unavailable custom entry.

| Material | Entry-level need | Supporting owner |
| --- | --- | --- |
| Purpose and activation | Supported capability, ordinary trigger intent and important scope exclusions | Metadata and entry agree with actual procedures |
| Inputs and starting state | Required context or readiness and the owner of missing-input recovery | Detailed inspection, intake or recovery procedure |
| Paths and variants | Conditions that distinguish the principal branches and their next instructions | Selected procedure or workflow module |
| Authority and completion | Consequential allowed effects, acceptance gates and stopping conditions | Detailed execution, verification and reporting procedures |
| Dependencies | Necessary facilities and what to do when an owner or tool is unavailable | Dependency-specific instructions; actual packaging and client evidence |

### Reference routing coverage

When a skill includes references, require a clearly identified routing section in `SKILL.md`, preferably a table. It must name and link every reference file, including nested reference modules, and provide the following selection information for each:

| Routing element | Review requirement |
| --- | --- |
| Reference | Explicit filename/path and a usable relative link; grouped rows must still identify every file individually |
| Purpose, scope and boundary | What the reference covers and the distinction from adjacent references or another workflow |
| Trigger/use conditions | Which requests, states, variants or prerequisites require loading it; identify unconditional use explicitly when applicable |

An agent must be able to determine which references are relevant to a request from `SKILL.md` alone, before reading their contents. A filename list, vague topic labels or instructions to inspect references to discover their applicability do not satisfy this criterion. A child reference’s local link does not replace its entry-level route.

Compare the complete reference inventory with the routing section to detect omissions. Then inspect each description against its target and assess representative requests using only the entry: selection should be justified by the stated scope and conditions, not guessed from filenames. Route completeness and selection clarity are separate from link validity and execution success.

## Reference module review

Review a reference’s local responsibility, reading context and module interfaces. Apply scope, continuity, output and stopping criteria according to its role: an executable sub-workflow needs operational boundaries; a terminology guide needs consistent definitions and useful coverage. Do not impose an execution sequence on explanatory material.

| Module concern | Assess |
| --- | --- |
| Local purpose and cohesion | Does the module cover a coherent procedure or subject? Do sections develop that purpose rather than accumulate unrelated instructions? Is a split justified by independent use or loading conditions, rather than length alone? |
| Scope and ownership | Are the module's decisions, effects or subject boundaries clear? Does it overlap or conflict with neighboring owners, or introduce a skill-wide rule without an appropriate entry/owner route? |
| Required context | Can it be understood with its documented parent/handoff and inputs? Are consequential assumptions or prerequisites available before use? Identify missing context without requiring every module to be independently self-contained. |
| Loading and onward routing | Can the caller determine when to load it? Does `SKILL.md` identify this module and its use conditions, and do local onward routes agree with that entry-level description? Are necessary resources and conditional child modules discoverable before their use? Avoid needless chains or loading unrelated material to find the selected path. |
| Result and return | For a procedure, are its result, stop and return/next owner clear? For guidance, contracts or examples, is the information sufficient for its intended decision or use, with illustrative content distinguished from operative instructions? |
| Shared content | Is reused guidance maintained by a clear owner? Does a local reminder protect a prerequisite or boundary, or copy a substantial procedure whose versions can diverge? |

Inspect the relevant caller and neighboring modules when a local change affects loading, shared state, scope or a handoff. Keep the review bounded: tracing that interface does not require auditing every reference or restarting the whole skill.

### Reference assessment contrasts

| Contrast | Inspect or observe |
| --- | --- |
| Reference used under its documented parent/handoff versus missing required context | Local instructions are sufficient for the stated reading boundary, or the missing prerequisite is identified; no reliance on an unseen authoring conversation |
| Coherent reference versus neighboring or child-module responsibility | Local scope, loading condition and shared ownership remain clear after splitting, merging or relocation |
| Procedure versus guidance, contract or example | Role-appropriate organization and output; no invented execution steps, global activation or completion duties |

## Review procedure

1. **Pin the brief and source.** Record the capability, selected entry/reference role, expected reading context, requested coverage, actual source and permitted effects. Identify applicable instructions, source owners and evidence limits. Respect project rules for retained history and protected material.
2. **Reverse-outline the text.** Identify the job of each section, paragraph and major step. Check the overall trajectory and selected dimensions above before proposing local edits.
3. **Trace consequential instructions.** For an entry with references, compare its routing section against the complete reference inventory and assess selection from the entry alone. Follow relevant routes and handoffs on both sides. Compare a repeated or relocated clause with its owner, loading condition and independently loaded context. Verify destinations preserve removed qualifiers before shortening either the entry or a reference.
4. **Assess representative contrasts.** Select cases that exercise the reviewed entry or module's important branches, boundaries and intended use. Reuse established cases when suitable; avoid tests that merely search for the revised wording.
5. **Verify supported properties.** Check metadata where required by the artifact format, resource paths, links/anchors and the applicable standalone or bundled distribution boundary with the owning structural tooling. Inspect actual output or behavior only when selected and authorized. Link validity does not establish client invocation or runtime support.
6. **Return actionable findings.** Give location/source, observation, consequence, confidence, priority, correction destination and objective recheck. Distinguish defects, recommendations and evidence gaps. Retain no-finding coverage, unresolved choices and unrun checks; do not present proposals as implemented repairs.

For an accepted revision, preserve technical meaning and scope, recheck affected owners/routes and review the resulting composition. Update affected navigation or projections without automatically enlarging every entry. Use the project's actual persistence and integration policy; this procedure introduces no Git, hosting or approval requirement of its own.

## Assessment contrasts and evidence

Adapt cases to the skill and selected artifact role; omit inapplicable ones with a reason. Use ordinary starting facts and paraphrased requests rather than fixed invocation syntax.

| Contrast | Inspect or observe |
| --- | --- |
| Intended use versus nearby out-of-scope use | Capability or local-purpose boundary; no invented output or dependency |
| Different supported variants | Explicit selection condition and relevant module, without loading unrelated branches |
| Request selecting a reference versus a nearby request outside its scope, with references unopened | Entry routing identifies the relevant file and boundary; no reference inspection needed to discover applicability |
| Sufficient context versus missing/stale input | Reuse or scoped recovery; unresolved consequential decisions remain unresolved |
| Assessment-only versus authorized changes | Appropriate effects and completion boundary |
| Successful path versus unavailable prerequisite or interrupted work | Concrete blocker/recovery and preservation of valid work |
| Requested partial result versus complete operation | Correct output, evidence and stop without unrequested continuation |

Source review establishes instruction coverage and consistency. A selected behavioral trial separately records the actual source/model, initial context, request, loaded instructions, observed actions, output and stop. Give a consumer only its ordinary task inputs and permitted instructions, not reviewer expectations. Correct routing is distinct from successful execution; structural checks are distinct from live acceptance. Qualify unavailable facilities and client-dependent behavior rather than claim universal support.
