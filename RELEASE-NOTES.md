SDD Manager 0.15.3 adds explicit documentation-design modes, retained multipass decisions and more proportionate milestone reviews. Release publication now requires an exact release commit on the repository's default branch.

## Compatibility and upgrade notes

The package retains its single manifest and 15 skills. Supervised HTTPS Git publication requires Node.js 22+, Python 3.11+ and native Git on Windows 10+ or Linux with the process facilities documented in the package guide. The optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own build and test requirements.

New documentation preparation keeps task definitions and checkboxes in `DOCS_TASKS.md`, with control, decisions and evidence in `DOCS_PREPARATION.md`. Existing projects follow the documented adoption and identity-preserving hosted-content reconciliation procedure; the utilities do not silently overwrite conflicting issues. Checkpoint preapproval does not waive technical checks, persistence or required tracking.

## Highlights

- **Documentation modes:** interactive/onepass remains the default. Autodoc retains the initial project-brief approval, preapproves subsequent document checkpoints and stops after TASKS, before package QC. Human-controlled multipass and predefined autoloop use non-destructive resets that revise retained documents and reopen the same documentation task issues.
- **Reliable multipass continuity:** preparation records retain titled scope passes, per-pass resolutions, decision provenance and cross-scope concerns. Strict multipass preserves earlier delivery ranges by default; small changes may amend a fitting earlier range only with explicit permission for flexible multipass. Project documents describe the product and its delivery, while preparation mechanics stay in workflow records.
- **Proportionate milestone reviews:** new task generation omits a standalone milestone-review task when there are fewer than four implementation tasks or only one implementation milestone in the phase. The final implementation task then owns the milestone review and report. The special phase-review milestone and required verification remain unchanged; accepted explicit-review task hierarchies remain supported.
- **Manual AI provenance:** initialization creates the separate `design-docs/ai-logs` scaffold by default, unless explicitly overridden. Conversation recording remains manual and optional, and historical transcripts are clearly non-authoritative.
- **Default-branch releases:** release tags identify either a direct default-branch release commit or the release merge from a designated primary development branch. The publisher verifies first-parent provenance, exact source/version agreement, notes and asset bytes. Campaign-prepared release documents may be placed in their final locations during the release commit.
- **Clearer guidance:** six focused README diagrams illustrate preparation, checkpoints, modes and delivery workflows. The Tetris guide links standalone interactive, autodoc and autoloop prompts. Documentation reviews also corrected task-audit scope, retained-note guidance, credential guidance and browser verification wording.

## Installation

Download [`sdd-manager.zip`](https://github.com/pchemguy/SDD-Manager/releases/download/v0.15.3/sdd-manager.zip) and its [`SHA-256 checksum`](https://github.com/pchemguy/SDD-Manager/releases/download/v0.15.3/sdd-manager.zip.sha256). Verify the checksum, extract the package and use your agent client's supported loading mechanism. Load PLUGIN.md or the coordinator explicitly when required; automatic discovery depends on the client. See the [package guide](https://github.com/pchemguy/SDD-Manager/blob/v0.15.3/.agents/plugins/sdd-manager/README.md).

## Validation and limitations

The comprehensive prerelease review passed 327 distinct local tests: 138 Node utility contracts, 139 support tests and 50 publisher tests on Linux with Node.js 24.22.1 and Python 3.12.14. Four CI workflows passed all 14 Linux/Windows jobs across Node.js 22 and 24, including the native Windows shell contracts. Seven Windows-only cases were skipped locally and are not counted as local passes.

Package checks cover the exact 158-file inventory and five extracted CLI help commands. These results do not establish installed-client discovery, autonomous agent compliance, live target-project workflow acceptance or newly rendered diagrams. Demo guides and standalone browser/shell policies remain source-repository documents. SDD Manager remains an experimental, learning-by-doing project.
