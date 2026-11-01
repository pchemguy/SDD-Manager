SDD Manager **0.16.1** makes library and component APIs explicit, supports optional model/API/contract documents within existing preparation checkpoints, and clarifies local execution of single-page demos.

## Highlights

- **Explicit API design.** Decomposition identifies provided and required external and cross-component internal APIs, their operations/types, providers/consumers, visibility and ownership. Precise behavior stays with SPEC and its canonical contracts.
- **Flexible design artifacts.** Keep models, API design and contracts inline or in linked child/peer documents. Model/API artifacts share documentation task 004; contract artifacts share 005. Planning, layout, tasks, feature incorporation and QC follow those owners without extra tasks or approval rounds. QC source identities include selected peers, so a peer-only change cannot escape the affected-readiness check.
- **Single-page execution modes.** Both single-page Tetris prompts distinguish direct local-file execution from HTTP(S). Local mode keeps settings in memory without reading/writing cookies or configuration URL parameters; manual Save/Restore remains available when introduced. HTTP(S) retains the specified persistence behavior.

## Package and installation

The package contains 15 skills. Supervised HTTPS Git publication requires Node.js 22+, Python 3.11+ and Git on supported Windows or Linux hosts; optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own toolchain requirements.

Download [sdd-manager.zip](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.1/sdd-manager.zip) and its [SHA-256 file](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.1/sdd-manager.zip.sha256). Verify the checksum, then import the archive through an Agent Plugins-compatible client or extract its sdd-manager directory for explicit source loading. PLUGIN.md is a non-standard composition entry; automatic discovery depends on the client.

Stable latest links: [package](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip) and [checksum](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip.sha256). Demo prompts and contributor evidence are in the source repository, outside the distributable.

## Verification and limits

Local verification covers 139 support tests, 50 publisher tests and 138 Node contracts, exact package/schema checks, current documentation links and eight rendered Mermaid diagrams. Seven native Windows shell cases are skipped locally on Linux. Runtime helpers, their tests and workflow code are unchanged by the API/QC instruction revisions.

These checks do not establish fresh-agent compliance, installed-client discovery or universal client compatibility. No generated demo application, Electron package or browser extension is included in this plugin release.
