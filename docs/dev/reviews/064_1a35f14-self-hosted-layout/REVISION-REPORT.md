# Nested package restructuring opening

Campaign **064_1a35f14**, baseline `1a35f14682050297d5a4a9f97eb4921ea35be048`; branch `revision/064_1a35f14-self-hosted-layout`, target main. State: **Open; plan prepared**. The human requested the nested package layout, assets-only packaged notices with root repository copies, package license copy and complete READMEs at both levels. See the [revision plan](REVISION-PLAN.md).

Verified refreshed main and a clean worktree. Sequence 064 follows maximum directory/ref reservation 063; no parent campaign is associated. Existing root/assets notices are byte-identical and bootstrap already selects assets templates. The package publisher and TextStats source selectors currently assume repository-root package paths and require explicit remapping. Internal sibling-relative links should retain their topology.

Proposed README ownership: full canonical packaged README with a deterministic checked root projection that rebases relative links, retaining complete content at both locations. No source files moved or tooling changed in this opening. Loading/registration and active instruction updates are explicitly excluded; user controls reload. Closed records remain frozen.

Check opening/plan/index links, spacing, owned paths and Git whitespace; commit/push/read back the opening before further work. No support/publisher execution or live trial is needed for record-only setup.

## README scope refinement

The human requested an explicit README statement that the plugin source package lives at `.agents/plugins/sdd-manager/` and is intended for agents to load when developing SDD Manager, with separate agent installation remaining optional. The earlier dual-full-README/generated-root proposal is superseded: the plan now selects an abbreviated root introduction linking to the full package README and contributor guidance. No README generation/link-rewriting helper or sync-specific CI is selected. Distinguish checkout source paths from installed package layout and do not claim automatic loading. Source restructuring remains pending.

## Execution authority and A-001

The human commanded execution after the README refinement. Establish `.agents/plugins/sdd-manager` as this repository's package root and retain the Git checkout root for provenance, development files and target-project operations. Full README belongs to the package; the root entry is abbreviated. Root repository notices and license remain; only assets templates and a package-root LICENSE ship. Intended package inventory is 132 files (the prior 134 minus two package-root notices).

TextStats will retain support for a portable package at an explicitly supplied checkout root, including historical committed layouts, while preferring the nested package when present in the selected Git tree. Record the selected package subdirectory in provenance, normalize emitted names to package-relative paths and use that same mapping for dirty capture. The native publisher targets this repository's fixed nested layout. No automatic loading or instruction reload policy is added.

A-002/A-003/A-004 will form one coupled source checkpoint: moving the tree without adapting publishers, snapshots and navigation would leave a deliberately broken intermediate layout. Inspect/test independent fixture paths before publishing that checkpoint; committed-candidate and full regression checks follow it. Record any failed checks truthfully and do not claim completion until final verification.

## A-002/A-003/A-004 — Coupled source checkpoint

Relocated the complete package to `.agents/plugins/sdd-manager/`, retained full package README and authored the abbreviated root README with explicit local-source intent/optional separate installation. Preserved root repository notices/license; package notices exist only in assets and package LICENSE is byte-identical. All skill/assets bytes are unchanged. Current source/acceptance/demo/release-guide/contract links are rebased; closed records and transcripts remain frozen. No loading config or instruction-reload policy was introduced.

Publisher reads the committed subtree and archives its portable contents. TextStats separates Git root from selected package root, records optional `package_subdirectory`, normalizes snapshot/hash/mode/changed keys, maps dirty patches back to Git paths and rejects malformed nested roots/symlinks. Historical or standalone root-layout sources remain supported, including original root-notice paths; no old snapshot is rewritten. Updated provenance schema/contracts and meaningful fixtures.

Prepublication checks: 30 publisher fixture tests and ten focused snapshot/boundary tests passed on Python 3.12.14. One new fixture initially had a duplicate keyword setup error; corrected the test invocation, then reran successfully. All skills/assets bytes and license equality checked; affected current Markdown links/spacing and Git whitespace passed. Full committed-candidate suites/archive/snapshot validation follow publication; source execution remains in progress, not yet closed.

## A-005 — Candidate verification

Committed candidate `776be7ba87a76318d9708b4a561d4e8da7b42135` passed all 134 support tests and 30 publisher tests on Python 3.12.14 with pinned jsonschema 4.26.0. Seven new nested-source tests cover committed/dirty mapping, added/deleted/mode-changed files, root decoys, missing nested manifest, committed/dirty symlink roots, preparation patch paths and preserved historical root notices. Existing package-boundary fixtures verify nested manifest placement, license equality and assets-only notices.

Native pinned manifest/exact archive and TextStats committed snapshot agree on 132 package files; package names omit the repository prefix. All 505 local links/anchors across 95 packaged Markdown documents pass. All 675 local links/anchors across 109 affected current/active documents pass. Skills/assets are byte-identical to baseline, package/root license bytes match and root repository notices remain unchanged. All fifteen coordinator references retain their routing. Closed campaign and transcript contents are untouched. No client loading/installation/reload, live acceptance, hosted tracking or release operation was performed.

Final source review retained these results and clarified the new helper docstrings for checkout/package roots, normalized outputs and error boundaries; no behavior changed. Publish/read back this qualification before exact final candidate/merged rechecks. Remaining work is final records, verified explicit integration/publication and clean main return.
