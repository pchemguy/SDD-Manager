# AGENTS template rollback result

Campaign **143_0989331**, starting main/branch-off **0989331ddc01fd5687043b37a2b294af2836de78**, working branch revision/143_0989331-restore-agents-template-links, eventual return target main. The human directly authorized this focused rollback; the [plan](REVISION-PLAN.md) retains its scope and stopping boundary.

## V-001 — Restore the prior template

Restored .agents/plugins/sdd-manager/assets/AGENTS_TEMPLATE.md exactly from 6aa9950fd81dc8f64b50da507431effd7dfda4e4^, undoing only that file's change in the prerelease repair commit. The four policy references are again Markdown links to .agents/plugins/sdd-manager/assets/; the added package-root lookup paragraph is removed. Other template wording remains byte-identical to that selected earlier blob.

| Check | Observed result |
| --- | --- |
| Exact selected-source restoration | Bytes equal git show 6aa9950f^:.agents/plugins/sdd-manager/assets/AGENTS_TEMPLATE.md; Git blob 3dada5ea7f73323b8c70ae0579afd877b5163d8e. |
| Restored navigation | All five Markdown links resolve from the intended checkout/project root, including the four policy assets and copied discovery protocol. |
| Package scope | Only AGENTS_TEMPLATE.md differs within the plugin package. |
| Source/runtime scope | No code, tests, manifest, release notes or workflow changes. Runtime suites are unnecessary for this exact prose rollback; no new tests mirror the text. |

Whitespace, active campaign links and exact five-path scope checks pass. The navigation index preserves its entire earlier byte prefix; no prior closed campaign path changed. No installed-client/consumer trial is claimed; the result is the explicitly requested historical restoration.

## Persistence and stop

The opening commit includes the verified rollback and its evidence. Publication/readback follows that commit before completion is reported. The campaign remains open on its revision branch; main integration, closure and another release are pending a later request. Published v0.16.2 and closed campaign records are retained.

## V-002 — Rule second within the release section

Moved the exact supplied artifact-name paragraph from first to second within PLUGIN.md Release preparation and publication, immediately after highlights/complete-message routing and before authorized-release guidance. Its wording, formatting and link are unchanged. The document opening and every byte outside that section are preserved.

Source checks pass: the section has exactly the same three paragraphs in order 2, 1, 3 relative to the prior revision; complete Markdown block and link multisets are identical; the canonical packaging target/anchor exists; AGENTS_TEMPLATE.md remains restored blob 3dada5ea7f73323b8c70ae0579afd877b5163d8e. This changes order only. README/capability projections and all section anchors retain the same meaning and targets, so no projection edit or runtime suite is required. Whitespace, active record links, owned scope and closed-record preservation are checked before publication.

Opening/V-001 commit 9704001e6bb97ec1e6cd1ff04d508ca2157d505e is published/read back. Publish/read back V-002 through the connector, then stop on the same revision branch with the campaign open. Main integration, closure and release remain unselected.

## V-003 — Closure verification and finalization

The human has explicitly requested closure, patch bump and release, superseding earlier open-only checkpoints. Both source actions are published/read back: opening/V-001 **9704001e6bb97ec1e6cd1ff04d508ca2157d505e**, V-002 **bdd7c0aa5ab24a9ccca0cf29911ff3147a9a41bd**. The exact opening pointer and original main branch-off baseline remain unchanged.

Fresh [closure verification](closure-verification.json) on clean bdd7c0aa passes **202 tests**: python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v reports 140 passed; python -m unittest discover -s .github/tests -v reports 62 passed. Python 3.12.14/Linux used PYTHONDONTWRITEBYTECODE=1 and the declared jsonschema dependency available through /tmp/sdd141-pydeps. The existing plugin validator exits 0 with 69 known bundled sibling-reference warnings. Exact template bytes/five intended root-relative targets, second release-section paragraph/permutation and unchanged outside bytes/block/link inventories, owned scope, whitespace and prior closed-record preservation all pass. Runtime/CI/test sources remain unchanged.

The [independent recheck](INDEPENDENT-RECHECK.md) finds no source defect and concludes ready for closure-record finalization and explicit main integration. This is focused source/layout evidence; no fresh client/consumer trial or native-runtime rerun is claimed. There is no unresolved source action. Current campaign records and navigation are now finalized for the closing merge; the prior open-only text above remains an accurately dated checkpoint, superseded by this explicit current authority.

Publish/read back this finalization before the two-parent completion merge into main from its recorded parent 0989331ddc01fd5687043b37a2b294af2836de78. Verify merged package/support/runtime object identities and deliberately reconcile main HANDOFF/navigation. Only successful target publication/readback and return to main establish closure. The requested 0.16.3 bump/release follow closure on main; version, tag, publisher and hosted/download/latest effects are pending at this finalization snapshot. Retain those actual outcomes under docs/dev/reports/releases/ without later editing this closed campaign.
