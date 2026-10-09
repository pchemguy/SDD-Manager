# Git release highlights revision results

## Scope and result

Campaign `032_a64f6b7` implements the accepted [revision plan](REVISION-PLAN.md), authorized by the subsequent “Execute” instruction. Starting default source: `a64f6b7f0f6861343fa7aab4bbede685bd5ca63d`; branch: `revision/032_a64f6b7-release-highlights`; integration target: `main` in `pchemguy/SDD-Manager`. Source version remains **0.15.0**, with both manifests unchanged and synchronized. No product release/tag or CI dispatch is part of execution.

The new shared forge [Git highlights workflow](../../../../skills/sdd-forge/references/release-highlights.md) runs before provider selection. It selects the release-tag baseline on the accepted release line, collects full messages and identities including merged commits, and maintains an ignored `.release-highlights.md` with YAML baseline/coverage identities. Incremental updates preserve curation and handle reverts; final notes contain only its Markdown body. GitHub consumers require explicit notes transfer and published-body readback before owned-draft cleanup.

## Completed revisions

| Action | Implemented outcome |
| --- | --- |
| V-001 | Shared forge route precedes provider/authentication; manager/report/verify entry points and handoffs recognize local-only highlights without TASKS. |
| V-002 | Focused reference supplies exact Git selection/range rules and an executable Python 3 standard-library JSON collection recipe. Annotated/lightweight tags, pending-tag exclusion, channel/side-history ambiguity and full merged messages are explicit. |
| V-003 | Minimal front matter, ownership/ignore checks, ancestry/tag validation, pending-only updates, no-op curation, atomic saves and truthful watermarks are specified. Chunk checkpoints must cover complete ancestry ranges. |
| V-004 | Reporting curates outcomes and assembles body-only notes; GitHub release/workflow references refresh the exact source, transfer notes to one publisher, reconcile body readback and retain/delete only under the selected boundary. |
| V-005 | Current README, skill entries, forge presentation and manager examples expose the capability. Version and package metadata remain unchanged. |
| V-006 | Local fixtures and support checks completed; final package/navigation and explicit integration/publication evidence are recorded below as they occur. |

This is an agent instruction workflow with an inline collection recipe, not a new hosted backend, autonomous editor, CLI command or runtime draft-management framework. The repository’s existing tag-only release publisher has no curated-notes transfer mechanism; it was not dispatched or replaced here. A future release request following the new guidance must establish/extend that transfer before triggering it.

## Verification

Environment: Python **3.12.14**, the established available runtime; baseline compatibility remains Python 3.11. The reproducible [local fixture script](verify_fixtures.py) extracts and runs the actual shipped recipe in disposable local Git repositories. It neither accesses a provider nor uses credentials.

| Check | Observed result and scope |
| --- | --- |
| `python -B docs/dev/reviews/032_a64f6b7-release-highlights/verify_fixtures.py` | **16 passed**: 14 real Git/range/clone cases and two explicit local file-mechanics demonstrations. |
| `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` | **113 passed**. Support/tooling regression coverage; no live TextStats acceptance campaign. |
| Existing `quick_validate.py` on forge/manage/report/verify | **Four passed**. Skill entry metadata/format checks. |
| Agent Package Author strict validators/inspector | Inspected 15 skills; baseline strict inspection reports 13 errors, current inspection 14 (the added bundled route). Strict portable-package validation rejects this repository’s manifest/schema and bundled cross-skill links, including the new manager-to-forge route. The normal repository skill checks pass; full standalone skill/Agent Plugins 1.0 conformance is not claimed. This campaign does not migrate the existing package format. |
| Navigation / preservation | 123 current local Markdown links pass; 80 links to closed records excluded. 254 retained document paths have unchanged Git object identities. Package build awaits committed-source verification. |

### Scenario assessment

The following distinguishes executed mechanics from an assessment of the current instructions. Fixed fixture decisions and prose are demonstrations, not independent agent/provider behavior.

| Planned scenario | Evidence / result |
| --- | --- |
| Annotated/lightweight tags | Actual recipe returns identical peeled identities/ranges. |
| Nonrelease/prerelease/unrelated tags | Actual recipe excludes them; a lower version nearer on ancestry wins over a larger older tag. Side-history/multiple qualifying tags block until explicit selection. |
| Merged branch messages | Actual recipe includes branch commits and merge; repeated subjects retain distinct IDs and full bodies. |
| Initial release | Actual recipe returns null tag/base and all reachable messages for complete history. |
| Shallow/missing objects | Real depth-one clone and absent explicit tag fail without usable partial JSON. Other unavailable-history discovery follows the reference’s blocking contract. |
| Empty/no-op range | Actual range is empty; source requires byte-preserving no-op rather than regeneration. |
| Valid increment | Actual Git recipe commands return only the pending commit; ancestor checks succeed. Local atomic replacement demonstrates saving a new watermark after completion. |
| Revert/superseding work | Actual increment contains full revert text; source requires revising/removing old claims. Semantic editing is assessed from instructions, not run by a fresh agent. |
| Malformed/moved/diverged checkpoint | Actual tag peel detects a move and ancestry guard rejects divergence. Malformed YAML/deleted tags are blocking source conditions; no shipped YAML parser is claimed/tested. |
| Human edits/discarded bullet | Source retains cuts; fixed local body demonstrates preserving edits during a save, not autonomous editorial correctness. |
| Interrupted/truncated collection | Local interrupted candidate leaves prior bytes untouched; source forbids checkpoint advancement on incomplete output and arbitrary merge-graph chunk boundaries. |
| Multiple release lines | Source requires scope/ownership resolution or separate paths; branch name alone does not validate ancestry. |
| Release source advances | Source mandates validated pending-only refresh through the final exact source, excludes the pending tag and pins the prior baseline on retries. |
| Final message assembly | Local body extraction excludes YAML and JSON transfer preserves multiline bytes/human section. Source requires insertion once and reconciliation with existing notes. |
| Ignored draft / CI | Real fresh clone lacks ignored draft. Source requires declared, source-associated transfer before dispatch/tag push; no live Actions transfer was run. |
| Draft/failed/uncertain/missing readback | Source preserves drafts. Fixed local decision matrix demonstrates retention; no provider failure was induced. |
| Published body / cleanup | Source requires actual body readback; local owned-file deletion is idempotent. No hosted consumption/cleanup is claimed. |
| Tracked/foreign/explicit retention | Source preserves files; fixed local decision matrix covers these conditions. |

## Evidence limits

No fresh independent consumer or assessor, installed-client run, live release, Actions execution or hosted notes transfer/readback was performed. Fixtures prove the recipe’s deterministic Git mechanics and the demonstrated filesystem operations; they do not prove agent curation, YAML validation by a consumer, publisher execution or provider cleanup. Current cross-skill loading follows the repository’s bundled dependency convention and is not a promise of isolated standalone discovery. Private credentials and raw commit dumps are absent from retained evidence.

## Persistence and stopping point

Source/evidence checkpoint is being prepared on the revision branch. Finish current navigation/package checks and this report before merging the complete tip with the required two-parent boundary. The merge commit records pinned parents and merged-state verification; remote containment establishes publication. Retain the campaign branch. Stop after verified ordinary campaign/default-branch publication, with version 0.15.0 and no product release.
