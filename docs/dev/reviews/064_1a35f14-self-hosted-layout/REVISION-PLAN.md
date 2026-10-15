# Nested plugin source restructuring plan

## Campaign and scope

Campaign **064_1a35f14**, starting baseline `1a35f14682050297d5a4a9f97eb4921ea35be048`; branch `revision/064_1a35f14-self-hosted-layout`, target main. The human requested opening this restructuring campaign. State: **Plan prepared; source restructuring not yet executed**. Companion: [revision report](REVISION-REPORT.md).

Move the distributable source into `.agents/plugins/sdd-manager/` while retaining source development, acceptance, CI, campaign records and root repository documents outside it. This is a source/package refactor, not a change in SDD workflow obligations.

Explicit exclusions: plugin registration, installation, discovery automation, marketplace/config files, host/client loading guarantees and active instruction updating/reloading. Reload remains human-controlled; this campaign adds no immediate or automatic adoption mechanism. Independent acceptance stays pinned to its selected source. No live acceptance, release publication or hosted task operation is selected.

## Package and repository layout

| Location | Responsibility |
| --- | --- |
| `.agents/plugins/sdd-manager/plugin.json` | Sole package manifest; remove repository-root manifest rather than retain a second discovery authority |
| `.agents/plugins/sdd-manager/PLUGIN.md` | Packaged agent entry |
| `.agents/plugins/sdd-manager/skills/` | Canonical bundled skills and references; preserve internal relative structure |
| `.agents/plugins/sdd-manager/assets/` | Canonical package assets, project prompt, AI_DISCLOSURE.md and SDD-MANAGER.md templates |
| `.agents/plugins/sdd-manager/LICENSE` | Complete package license copy; repository-root LICENSE remains available |
| `.agents/plugins/sdd-manager/README.md` | Full package README, proposed canonical authored copy |
| Root README.md | Abbreviated repository introduction, explicit package-source location/intended use and links to full package README and contributor guidance |
| Root AGENTS.md, acceptance/, docs/, .github/ | Source-only development, verification, evidence and publishing tools |
| Root AI_DISCLOSURE.md and SDD-MANAGER.md | Retained repository copies; absent from package root |

Existing assets notice templates and root copies are currently byte-identical. Preserve the root repository notices and keep template bytes under package assets only. Audit every reference to distinguish **packaged template source** from **target repository output**: bootstrap must continue creating/reusing target-root notices, not assets notices in consumer projects. Do not blanket-replace target paths.

## README audiences and source accessibility

Keep the full user-facing README inside `.agents/plugins/sdd-manager/`. Use a short independently authored root README for repository entry: project identity/purpose, explicit source-package location/intended use, a prominent relative link to the full README and appropriate contributor/verification navigation. Prefer this useful abbreviated introduction over a bare redirect. No synchronized duplicate prose, README generator, link-rewriting helper or freshness pipeline is needed.

Include this clear statement in the root README and reflect it in the full README's source/development guidance:

> The plugin source package is in `.agents/plugins/sdd-manager/`. It is intended to be available for agents to load from this checkout when working on SDD Manager itself. A separate agent installation remains an option; this layout does not configure automatic loading.

Use a working relative link to `.agents/plugins/sdd-manager/README.md` in the root introduction. The full README retains package-relative links that work in the checkout and extracted distributable, with repository URLs for source-only development guidance. Its statement about the source location must distinguish the repository checkout from an installed/extracted package, rather than imply `.agents/` exists inside every package. Loading/registration and user-controlled reload remain out of scope; the README documents intent and alternatives, not a client loading guarantee.

## Ordered actions

1. **A-001 — Establish root contracts and source mapping.** Record Git repository root versus nested package root and package-relative artifact paths. Load the source plugin contract before affected entry/boundary edits. Establish distinct root/package README audiences and license/notice ownership and intended package inventory. Preserve sibling-relative skill links and consumer project-root paths.
2. **A-002 — Relocate package and reconcile references.** Move the package contents as a unit; omit package-root notice copies, retain root repository copies, place LICENSE in both required locations. Update root contributor/acceptance navigation, current source/docs/demo references and literal source locations. Preserve closed campaign records and transcript history; they are not current link-maintenance targets. No new loading policy or instruction-refresh behavior.
3. **A-003 — Refactor publisher and snapshot roots.** Keep commit identity rooted in Git while reading nested package paths. Emit the same portable archive root `sdd-manager/` with `plugin.json` immediately inside, stripping the source `.agents/plugins/sdd-manager/` prefix. TextStats snapshots, hashes and mode fingerprints use package-relative paths; track dirty Git paths through an explicit mapping and retain source/commit provenance. Update actual CLI contracts, schemas/provenance fields and fixture expectations where necessary; do not silently reinterpret old evidence or rebuild frozen snapshots. Keep native pinned schema validation and exact-byte/mode/containment checks.
4. **A-004 — Establish README entries and source checks.** Keep full documentation in the package README and author the abbreviated root entry with the explicit package-source location/intended agent use, optional separate installation and prominent full-README link. Update source navigation; verify package-contained README links and source-root navigation. Check license copies and notice sources/consumer outputs with appropriate independent fixtures. No README generator or sync-specific CI is selected.
5. **A-005 — Verify and finalize.** Run support/publisher suites with declared dependencies under the established supported Python; exercise committed and dirty nested snapshots, exclusions, exact archive bytes/modes and root/full-README navigation. Check affected current links, package links, Git whitespace, case/path correctness and no incidental closed-record edits. Publish each action checkpoint and remote readback before further work. At authorized complete integration, explicitly merge into refreshed main, verify merged state, publish/read back and return clean main before closure.

## Evidence and acceptance

- A fresh checkout has a complete package/full README at the new path and an abbreviated root README with working context-appropriate links and explicit source-package location/intended agent use.
- No root plugin.json or package-root AI_DISCLOSURE.md/SDD-MANAGER.md remains; required root repository notice copies remain and package assets templates are present.
- Native archive and TextStats package inventory agree on the new intended package contents; source-only scripts/instructions/campaigns/AI logs and root repository copies do not leak into it.
- Committed and explicitly selected dirty snapshots retain exact source identity, package-relative paths, bytes and executable modes; source symlink/escape protections remain effective.
- Inter-skill links remain within the package; target-repository Git and docs/dev paths retain their meaning.
- Root README supplies a short repository entry; package README owns full user documentation. Both clearly distinguish local source use from optional separate installation without claiming automatic loading; no generation/sync mechanism is required.
- Live loading and instruction refresh are not tested or claimed. Test success establishes only the exercised source/tooling contracts.

This plan records the revised README approach and bounded revision queue. The opening request does not mean these changes or their checks have already executed. Publish this opening/plan and stop on the campaign branch for review of the restructuring approach.
