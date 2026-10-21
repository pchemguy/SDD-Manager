SDD Manager 0.15.1 strengthens repository-based continuation, guided exploration and bounded delivery. It adds deterministic HTTPS Git publication and source-bound GitHub tracking utilities, with clearer document checkpoints and project-policy handling.

## Compatibility and requirements

The package retains its single root manifest and 15 skills. Human document approval, task completion, publication and integration gates continue to apply. Repository handoffs preserve workflow context; credentials and ignored local files must be established separately in a new environment.

Supervised HTTPS Git publication requires Node.js 22+, Python 3.11+ and native Git on Windows 10+ or Linux with the process facilities documented in the package guide. The optional GitHub projection/completion utilities require Node.js 22+ and Git. Project build and test commands use the target project's declared tools.

Token-file input uses an ignored, untracked repository file and ordinary OS read access. Existing authenticated clients remain available where supported. Conflicting managed hosted content requires reconciliation; utilities preserve it rather than overwrite it automatically.

## Highlights

- **Repository-based continuation:** handoffs act as checkpoints, with later decisions recovered from current records and Git. Interrupted branches retain their recorded parents, return boundaries and pending human decisions. Incoming synchronization remains distinct from completed integration.
- **Guided exploration:** a dedicated design subworkflow critically evaluates terse objectives, surfaces influential product and architectural choices, recommends context-aligned options and records assumptions before the project brief. Detail adapts to project or feature scope; examples remain illustrative.
- **Bounded delivery:** every phase delivers a useful, testable functionality increment. Complete intended-version scope stays distinct from the simplest sensible initial slice, and later capabilities receive separate bounded increments.
- **Deterministic Git publication:** the supervised entry selects an eligible supplied token before inherited helpers and applies one total deadline to push, cleanup and exact readback. Windows Job Objects and Linux subreaping own descendant cleanup. Git-supplied helper context is validated separately from public input; safe diagnostics preserve process failures independently of remote state. Credential-helper configuration is not persisted.
- **Reviewed GitHub tracking:** source-bound JSON supports phase drafting, projection and completion with complete lookup and verified associations. Dependencies and substantive briefs remain agent-authored. Read-only reconciliation preserves uncertain-write boundaries rather than replaying mutations.
- **Main preparation convenience:** a single docs-main call uses origin and the repository's DOCS_TASKS by default, with bundled-template fallback only when that default document is absent. The predefined sdd-docs-main milestone and nine issue definitions retain their eligibility, first-approval, package-QC and published-integration gates.

## Other changes

An available GitHub CLI may perform supported operations with existing authentication or a protected provided/saved token. Implementation and verification honor project-defined browser policies and declared setup. Generated AGENTS guidance stays concise; detailed preparation procedures remain with their workflow owners.

Tracking validates phase associations, exact identities and complete inventories. Shared readers reject unsuitable input types promptly, including POSIX FIFOs. Publisher checks preserve complete version identifiers, exact source/body association and deterministic package contents.

## Installation and package preparation

Prepared assets are `sdd-manager.zip` and `sdd-manager.zip.sha256`. Verify the checksum, extract the package and use your agent client's supported loading mechanism. Load PLUGIN.md or the coordinator explicitly when required; automatic discovery depends on the client. See the [candidate package guide](https://github.com/pchemguy/SDD-Manager/blob/6d0b04a8c5edb36601c36c759e5ee0285ed2f9c4/.agents/plugins/sdd-manager/README.md).

These assets are prepared locally; this message does not identify published downloads. Release publication still requires the final source/message agreement, tag, workflow and asset-readback steps.

## Validation and limitations

The reviewed runtime passed 132 local Git/authentication and forge contracts on Linux/Node 24.19.0. The integrated state passed 139 source support and 37 publisher tests on Python 3.12.14: 308 passing tests across those scopes. Seven Windows-only shell contracts skipped on this host; no fresh native Windows result is claimed.

Two builds of the pinned candidate produced identical 153-file packages. Core schema, exact archive contents, presentation paths, SVG parsing and five extracted CLI help checks passed. Structural author validation reported no errors and 48 advisory warnings about bundled skill references.

These checks do not establish autonomous agent behavior, installed-client discovery, live-provider permissions, launcher activation or freshly rendered diagrams. Those trials were not performed for this candidate. SDD Manager remains an experimental, learning-by-doing project.
