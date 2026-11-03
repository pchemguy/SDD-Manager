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
