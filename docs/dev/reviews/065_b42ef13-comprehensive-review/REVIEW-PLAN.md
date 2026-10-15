# Comprehensive review plan

## Campaign and scope

Campaign `065_b42ef13`; baseline and reviewed source `b42ef135345b5f0376e8f6f484592e1ac5b38df2`. Working branch `revision/065_b42ef13-comprehensive-review`; eventual target `main`. Review requested on 2026-10-15 after the nested package refactor. This is an ordinary campaign with no active parent.

Review current package content, source instructions, documentation, release tooling, acceptance infrastructure and their interfaces. Emphasize Git-root/package-root/target-root distinctions, package completeness, link/routing preservation, committed and dirty snapshots, release archives and CI. Apply the source PLUGIN contract and Agent Package Author plugin/skill review criteria, including reference routing, ownership, human gates, publication, tracking, recovery and stops.

The only authorized source modification is adding `_agents` to .gitignore. Review artifacts/navigation are authorized. No findings remediation, merge or closure is selected. Closed campaign records and retained AI logs are frozen and excluded from content/link checks. Live client loading, agent acceptance trials, hosted side effects and actual release publication are unrun.

## Review units

| Unit | Scope | Criteria and contrasts | Evidence |
| --- | --- | --- | --- |
| U-001 | Refactor boundaries, metadata, README, PLUGIN and source guidance | Distinct roots; discoverable source and installed use; complete portable package; notices/licenses; no excluded local dependencies | Full boundary-document inspection, file inventory, path/link and pinned schema checks |
| U-002 | All skill entries and reference inventory; orchestration and workflow interfaces | Selection without loading all references; canonical owners; assessment/repair; main/feature/steer; HIL/publication/tracking/range stops and recovery | Entry inspection, per-file routing/structure coverage and selected consequential instruction traces; record depth honestly |
| U-003 | Native publisher, schema, workflows and publisher tests | Exact committed nested source; normalized archive; version/integrity; candidate/tooling separation; missing root, symlinks and decoys | Source/test inspection, full publisher suite and exact candidate archive checks |
| U-004 | TextStats helpers, schemas, instructions, fixtures and support tests | Nested/root snapshots, dirty changes/deletion/modes, provenance, isolation, reproducibility and acceptance evidence limits | Source inspection, full support suite, targeted adversarial probes and package parity |
| U-005 | Cross-project documentation, final coverage and revision queue | Current links and source paths; consistent results; no frozen-record edits; actionable owner/recheck for each finding | Current-document checks, Git diff, consolidated report |

Units follow this order. After each unit update and commit the report; push and verify the remote tip before any next unit or project work. Inspect all package inventory items structurally, inspect entry and boundary content, and identify reference content inspection depth and residual limits rather than claiming exhaustive behavioral proof.

## Results and stopping

Record located baseline evidence, confidence, consequence, correction owner and objective recheck under stable R IDs. Separate confirmed defects, recommendations and evidence gaps. Preserve no-finding coverage and all unrun checks. Return the complete review and proposed revision queue, leaving the campaign open for human review.
