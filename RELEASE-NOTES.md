SDD Manager 0.15.0 strengthens coordinated development from initial project preparation through bounded implementation and release preparation. This release adds tracked documentation tasks, a shared plugin entry, configurable reporting and exact-source release packaging.

## Compatibility and upgrade notes

- The complete source package now lives at `.agents/plugins/sdd-manager/` in the repository. Release archives retain the portable `sdd-manager/` root; use that package directory rather than the repository root for installation.
- `plugin.json` is the sole package manifest. The legacy `.codex-plugin` manifest is removed, and OpenAI presentation metadata is under `extensions.com.openai.interface`.
- `PLUGIN.md` is the shared agent entry, with `sdd-manage` as coordinator. Explicit loading may be necessary because `PLUGIN.md` is a project convention. The coordinator and individual skill entries remain usable without it; instruction reload remains user-controlled.
- The new `AGENTS_TEMPLATE.md` defaults to GitHub tracking for documentation preparation and implementation. Users can change that policy by instruction or by editing the copied AGENTS.md. Existing project instructions are preserved; this template default does not enable tracking for every plugin invocation.

## Highlights

- **Tracked main documentation preparation.** `DOCS_TASKS.md` covers initialization, seven document approvals and final package QC. When tracking is enabled, create and verify the native `docs-main` milestone and all nine issues before repository modifications. Initialization preserves existing AGENTS, disclosure, usage and discovery files, copies missing files, and pauses for the user when only some files already existed.
- **Explicit human and publication checkpoints.** Each necessary new development document has its own acceptance boundary, including separate PLAN and layout checkpoints. Scoped future preapproval is supported. First approval completes the documentation task in the accepted-document commit, followed by push/readback and issue closure; later revisions preserve that first-approval status. Final documentation integration is published before milestone closure and the implementation checkpoint.
- **Clearer workflow selection and reporting.** The coordinator distinguishes whole-project, feature and revision work, recovers existing context and reassesses workflow switches. Minimal, Standard and Explicit reporting profiles control detail. Composite workflow setup and recovery explicitly announce the active profile and subsequent reporting level.
- **Bounded implementation and recovery.** Task-closing commits carry one task's verified result, evidence and completion checkbox under a leading task ID. Publication and continuation audits preserve human-requested ranges. Known-invalid completion can receive an authorized forward correction without rewriting history or requiring blanket reapproval. Verification findings return to the active authorized owner.
- **Complete release preparation.** Prepare a retained root `RELEASE-NOTES.md`, or request highlights alone. Incremental Git coverage uses integration summaries with direct-change, nested-campaign and revert checks. Release execution verifies freshness and uses the same complete Markdown in the release commit and GitHub body.
- **Exact-source GitHub packaging and publication.** The publisher validates committed manifests against the pinned core schema, builds deterministic version-free ZIP/checksum assets and verifies archive bytes. A structured handoff binds notes to the source. Draft/asset reconciliation, rebuild hash checks and published-state readback support interrupted release recovery.

## Other changes

- PROJECT has an explicit brief contract, with routing to its design guidance. README presents human-facing workflows and diagrams; PLUGIN.md provides agent routing and checkpoint summaries.
- Nested and reopened revision campaigns preserve original provenance, suspended parent boundaries and frozen completed records.
- Bundled assets include AGENTS, DOCS_TASKS, discovery-protocol and greenfield-prompt templates. Tetris and Calculator guides illustrate phased development, feature work and checkpoint steering.
- TextStats coverage now includes 33 catalog cases, with additional release-message, checkpoint, tracking and recovery assessment contracts and support regressions.

## Installation and package

The prepared assets are `sdd-manager.zip` and `sdd-manager.zip.sha256`. Verify the checksum, extract the archive and load the extracted `sdd-manager/` package using the agent client's supported mechanism. The package includes its full README, PLUGIN.md, all 15 skills, bundled assets and LICENSE. In a source checkout, use `.agents/plugins/sdd-manager/`; separate installation remains optional.

See the [package README](https://github.com/pchemguy/SDD-Manager/blob/891a0ad69dce859e3622750c51201d6c26127499/.agents/plugins/sdd-manager/README.md) for usage and workflow examples.

## Validation and limitations

Local validation passed 137 TextStats support tests and 34 publisher tests on Linux/Python 3.12.14. Core manifest validation passes. The author validator reports zero errors and 46 advisories for references between bundled skills; those advisories retain a client-portability consideration.

Current-candidate hosted CI, installed-client discovery/routing and live agent/provider acceptance were not run during this preparation. Local checks do not establish those outcomes. SDD Manager remains experimental.
