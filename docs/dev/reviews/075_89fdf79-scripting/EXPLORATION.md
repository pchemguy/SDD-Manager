# Scripting integration campaign

## Campaign and entry

- Campaign: `075_89fdf79`; state: accepted C-001 revision executed and verified, finalized for human-requested closure into main; further candidates unselected.
- Full starting baseline/branch-off commit: `89fdf79637e59c558b3a265d5e458c22e58d49b7`.
- Working branch: `revision/075_89fdf79-scripting`.
- Creation parent/eventual integration target: `main`; no suspended parent campaign.
- Human request: open a scripting revision campaign to evaluate several agent-created scripts for SDD Manager integration and potentially assess additional candidates.
- Coordinator: sdd-manage. Select focused owners from each script's actual responsibility; scripts are not a new core workflow.

## Objective and scope

Assess supplied scripts for useful integration into SDD Manager, including adaptation, consolidation, replacement by existing capabilities or rejection. Consider other potential scripting candidates where concrete recurring work or failure evidence justifies investigation. Do not assume every agent-created script should become a shipped dependency.

Candidate C-001, git-auth-recover.mjs, was supplied in chat and assessed in the [review report](REVIEW-REPORT.md). Its original execution results were not supplied; additional candidates remain pending. Identify exact sources/provenance and inspect them before attributing behavior or selecting repairs. Do not infer that scripts mentioned in unrelated earlier discussions are the intended candidates.

The human subsequently requested evaluation of C-001, including behavior, SDD fit and Windows/Linux portability. Publish that assessment and retain the supplied source; source repairs, candidate execution with project/host effects, package integration, release and merge are not authorized by opening alone.

## Intended assessment concerns

Use the following as adaptable criteria, not a fixed script catalogue or a commitment to automate every concern:

- Purpose and value: recurring work addressed, demonstrated pain/cost, appropriate deterministic automation versus agent judgment, and overlap with existing tooling.
- Correctness and limits: supported inputs, parsing/data contracts, false positives/negatives, error/exit semantics and reproducible evidence. Inspect code before selecting controlled execution.
- Effects and recovery: intended file/Git/host changes, scope boundaries, rerun behavior, partial/uncertain outcomes and compatibility with existing approval/publication rules.
- Portability and prerequisites: supported runtime/shell/platform, paths, dependency availability, offline use and installation burden. Distinguish tooling tested here from target-environment claims.
- Integration and ownership: canonical focused skill/workflow, loading/invocation trigger, user-facing contract, package-versus-source tooling boundary, tests/documentation and maintenance cost.
- Composition: cohesive responsibilities, substantial bounded modules and shallow routing; avoid brittle duplicated workflow logic or an overloaded general-purpose script.

Where an abstract illustration improves reasoning, label it illustrative and non-exhaustive. Supplied concrete scripts remain attributable evidence; do not let examples restrict domain, language or candidate scope.

## Evidence and next boundary

The first assessment recommended Adapt with seven findings and syntax-only evidence; its original candidate remains unchanged and is never used as the shipped executable. The human subsequently authorized the full revision plan and its execution. The [revision report](REVISION-REPORT.md) records the completed transient utility, workflow/code/companion documentation, native Windows/Linux Node 22/24 success, full source/package checks and honest live-provider limits. Previous closed campaign objects remain unchanged.

Current stop: publish/read back the executed revision checkpoint on the named campaign branch; leave it open/unmerged. Additional candidates, campaign closure/integration, release and real-token/live-provider tests require their own selected scope. No extra approval is needed for the already completed authorized work.


## Accepted execution scope

The human requested a full revision plan followed by execution for C-001, adding the transient recovery workflow, professional code/companion documentation and SDD routing. The [revision plan](REVISION-PLAN.md) defines the bounded script/supporting-file unit. Campaign scope follows a coherent change rather than one file per campaign; unrelated future candidates remain separately scoped. Integration/release is not selected.


## Closure boundary

The human subsequently requested closure after publication of a7e8fec. Complete the verified two-parent integration into recorded parent main, publish/read back and return to main's waiting context. The [closure record](REVISION-REPORT.md#authorized-closure) retains provenance and remaining confirmation. No additional scripting objective or release is selected.
