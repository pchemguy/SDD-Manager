# Review skill entries and references

## Scope and output

Use for focused or comprehensive review of a skill's `SKILL.md` entry and reference modules. The entry organizes the capability and its loading paths; a reference supplies a bounded procedure, shared guidance, contract, example or other supporting material. Identify the artifact's role and expected reading context before assessing it. Review composition, organization, boundaries and technical meaning at both levels.

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

The entry may own canonical instructions. References can own their detailed procedures or shared guidance. A reference can repeat a short prerequisite or boundary when its expected reading context needs it, or when it prevents a consequential handoff error. Explain the role of such reinforcement; consolidate repeated procedure that adds no condition, decision or protection. A relocation must preserve meaning, qualifications and discoverability.

## Skill entry review

The entry identifies purpose, activation conditions, required inputs, the principal path, consequential boundaries and when to load supporting material. Detailed procedures and reusable guidance belong in the relevant reference modules; scripts suit repeated deterministic operations, and assets hold reusable input/output material. These facilities are optional: a simple skill may need only its entry.

Keep the information required to choose the next module or respect an immediate constraint available before that choice or action. A correct instruction discovered only after its dependent action is insufficient. Do not require every reference to be loaded at startup or make essential instructions depend on an unavailable custom entry.

| Material | Entry-level need | Supporting owner |
| --- | --- | --- |
| Purpose and activation | Supported capability, ordinary trigger intent and important scope exclusions | Metadata and entry agree with actual procedures |
| Inputs and starting state | Required context or readiness and the owner of missing-input recovery | Detailed inspection, intake or recovery procedure |
| Paths and variants | Conditions that distinguish the principal branches and their next instructions | Selected procedure or workflow module |
| Authority and completion | Consequential allowed effects, acceptance gates and stopping conditions | Detailed execution, verification and reporting procedures |
| Dependencies | Necessary facilities and what to do when an owner or tool is unavailable | Dependency-specific instructions; actual packaging and client evidence |

Metadata describes the skill’s capability and when it activates. Check its agreement with the body and supported procedures. The entry is the skill’s compositional root: it must make principal paths, conditional loading and consequential shared boundaries discoverable without requiring every module at startup.

## Reference module review

Review a reference’s local responsibility, reading context and module interfaces. Apply scope, continuity, output and stopping criteria according to its role: an executable sub-workflow needs operational boundaries; a terminology guide needs consistent definitions and useful coverage. Do not impose an execution sequence on explanatory material.

A reference does not normally act as the skill's compositional root. It need not advertise the entire capability, choose the whole workflow, repeat all shared gates or carry `SKILL.md` metadata. Assess its local responsibility and its relationship to the entry or calling module.

| Module concern | Assess |
| --- | --- |
| Local purpose and cohesion | Does the module cover a coherent procedure or subject? Do sections develop that purpose rather than accumulate unrelated instructions? Is a split justified by independent use or loading conditions, rather than length alone? |
| Scope and ownership | Are the module's decisions, effects or subject boundaries clear? Does it overlap or conflict with neighboring owners, or introduce a skill-wide rule without an appropriate entry/owner route? |
| Required context | Can it be understood with its documented parent/handoff and inputs? Are consequential assumptions or prerequisites available before use? Identify missing context without requiring every module to be independently self-contained. |
| Loading and onward routing | Can the caller determine when to load it? Are necessary resources and conditional child modules discoverable before their use? Avoid needless chains or loading unrelated material to find the selected path. |
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
3. **Trace consequential instructions.** Follow relevant routes and handoffs on both sides. Compare a repeated or relocated clause with its owner, loading condition and independently loaded context. Verify destinations preserve removed qualifiers before shortening either the entry or a reference.
4. **Assess representative contrasts.** Select cases that exercise the reviewed entry or module's important branches, boundaries and intended use. Reuse established cases when suitable; avoid tests that merely search for the revised wording.
5. **Verify supported properties.** Check metadata where required by the artifact format, resource paths, links/anchors and the applicable standalone or bundled distribution boundary with the owning structural tooling. Reference modules do not acquire frontmatter requirements merely because entries have them. Inspect actual output or behavior only when selected and authorized. Link validity does not establish client invocation or runtime support.
6. **Return actionable findings.** Give location/source, observation, consequence, confidence, priority, correction destination and objective recheck. Distinguish defects, recommendations and evidence gaps. Retain no-finding coverage, unresolved choices and unrun checks; do not present proposals as implemented repairs.

For an accepted revision, preserve technical meaning and scope, recheck affected owners/routes and review the resulting composition. Update affected navigation or projections without automatically enlarging every entry. Use the project's actual persistence and integration policy; this procedure introduces no Git, hosting or approval requirement of its own.

## Assessment contrasts and evidence

Adapt cases to the skill and selected artifact role; omit inapplicable ones with a reason. Use ordinary starting facts and paraphrased requests rather than fixed invocation syntax.

| Contrast | Inspect or observe |
| --- | --- |
| Intended use versus nearby out-of-scope use | Capability or local-purpose boundary; no invented output or dependency |
| Different supported variants | Explicit selection condition and relevant module, without loading unrelated branches |
| Sufficient context versus missing/stale input | Reuse or scoped recovery; unresolved consequential decisions remain unresolved |
| Assessment-only versus authorized changes | Appropriate effects and completion boundary |
| Successful path versus unavailable prerequisite or interrupted work | Concrete blocker/recovery and preservation of valid work |
| Requested partial result versus complete operation | Correct output, evidence and stop without unrequested continuation |

Source review establishes instruction coverage and consistency. A selected behavioral trial separately records the actual source/model, initial context, request, loaded instructions, observed actions, output and stop. Give a consumer only its ordinary task inputs and permitted instructions, not reviewer expectations. Correct routing is distinct from successful execution; structural checks are distinct from live acceptance. Qualify unavailable facilities and client-dependent behavior rather than claim universal support.
