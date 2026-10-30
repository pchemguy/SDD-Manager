# Release artifact naming revision plan

## Campaign and accepted objective

- Campaign: 134_32cdec1; baseline 32cdec11b06694725cd192ced4a5fd8aaaa47c11.
- Branch: revision/134_32cdec1-release-artifact-names; creation parent and return target main; no suspended parent.
- Request: improve release artifact naming, require repairs to failing scripts/related code/docs, carry an authorized release through proper publication, execute revision and close campaign.
- Scope: SDD Manager's reusable release workflow instructions and their projections. The motivating demo is evidence, not a selected mutation target. No SDD Manager version bump or hosted product release is selected by this policy revision.
- State: Finalized for authorized closure; V-001/V-002 complete. [Evidence](REVISION-REPORT.md).

## Diagnosis

The current packaging contract already requires stable version-free filenames and conventional suffixes for actual variant dimensions. Release checks mention those names, but the publication checklist can validate an incorrect generated expected inventory against itself. The motivating single-page Tetris demo publishes tetris-v0.1.0.html through tetris-v0.5.0.html; its package.py directly builds that versioned basename despite the bundled naming contract. This establishes an observed violation, not proof of which instructions its agent loaded.

## Ordered actions

| Action | Owners and intended result | Verification |
| --- | --- | --- |
| V-001 | github-packaging, github-release-workflows, github-releases and sdd-verify release-checks: mandatory independent naming gate for all artifact formats; project-local deterministic prepublication check; repair/rebuild loop covering scripts, related code/tests/docs, exact source/notes/tag and hosted recovery. | Trace direct and CI publication, versioned raw HTML despite complete inventory/checksums, stable variant names, collision, wrong checksum, changed source after tag, existing published/immutable assets and narrow authority. Controlled local fixture demonstrates failing output, source/docs repair and passing rebuilt/checksummed output; no live release. |
| V-002 | Forge entry, coordinator release routing and full README: expose the gate before release effects, consistent repair ownership and completion requirements. Preserve optional prerelease review and existing stopping limits. | Both sides of handoffs, current links/structure, support/publisher tests and exact committed package/schema; scoped diff and prior closed-record preservation. |

## Required policy details

Names remain version-free and stable across releases, with platform/architecture/runtime/format suffixes only where real variants need distinction. Raw HTML is covered; do not force an archive or invent OS suffixes. Derive the naming contract independently of build output and the expected upload list. Under authorized release scope, fix producers/consumers, checksums, tests, documentation and latest URLs; publish/read back repaired source before rebuilding the pinned release candidate. Generate/reuse a deterministic project check and wire it before uploads/publication for every publisher route.

Do not merely rename one temporary upload, bless an invalid expected set, weaken checks or stop after reporting a routine repair. Refresh source-associated notes and release-commit/tag evidence after source edits. Never move an existing tag, silently clobber/delete assets or retroactively edit frozen records. Apply supported mutable-draft/published/immutable recovery, preserving requested effects and real human/policy limits. Publication requires all expected names and exact bytes to pass; final readback verifies the actual latest asset set and URLs.

## Persistence and closure

Commit source and action evidence together and publish/read back each checkpoint before proceeding. Finalize records/HANDOFF, explicitly merge the verified tip into refreshed main, verify merged state and target publication, return cleanly and freeze records. Do not claim controlled checks establish fresh-agent, installed-client or live-provider behavior.

## Completion

Both actions are complete and verified. [Final evidence](final-verification.json) records 189 passing regression tests, five affected final documentation checks, six controlled gate outcomes, structural/link checks and exact committed package/schema. Finalize and publish records, explicitly integrate the verified campaign tip into refreshed main, verify/publish/read back the target and return cleanly. No deferred action or further product release selected.
