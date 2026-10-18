# Scripting integration campaign

## Campaign and entry

- Campaign: `075_89fdf79`; state: open, intake/exploration before candidate evaluation.
- Full starting baseline/branch-off commit: `89fdf79637e59c558b3a265d5e458c22e58d49b7`.
- Working branch: `revision/075_89fdf79-scripting`.
- Creation parent/eventual integration target: `main`; no suspended parent campaign.
- Human request: open a scripting revision campaign to evaluate several agent-created scripts for SDD Manager integration and potentially assess additional candidates.
- Coordinator: sdd-manage. Select focused owners from each script's actual responsibility; scripts are not a new core workflow.

## Objective and scope

Assess supplied scripts for useful integration into SDD Manager, including adaptation, consolidation, replacement by existing capabilities or rejection. Consider other potential scripting candidates where concrete recurring work or failure evidence justifies investigation. Do not assume every agent-created script should become a shipped dependency.

Candidate files, their original tasks and observed results have not yet been supplied in this campaign. Identify exact sources/provenance and inspect them before attributing behavior or selecting repairs. Do not infer that scripts mentioned in unrelated earlier discussions are the intended candidates.

The opening checkpoint establishes campaign records/navigation and HANDOFF only. Stop after publication/readback, pending candidate input. Evaluation can then be scoped to the actual material; source repairs, candidate execution with project/host effects, package integration, release and merge are not authorized by opening alone.

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

No candidate review, execution, finding or integration-readiness result exists yet. No script is accepted, rejected or promised for publication. Potential additional candidates should be supported by current workflow evidence and prioritized against actual benefit and maintenance cost.

Opening checks cover branch/baseline identity, owned paths, whitespace and current links; no product/support suite or live acceptance is needed for this metadata-only checkpoint. Preserve previous closed campaign objects unchanged.

Next eligible action: receive the scripts or exact paths and their intended purposes, then establish the bounded candidate assessment and evidence plan. A later revision plan follows actual findings/accepted directions; do not manufacture repairs in advance.
