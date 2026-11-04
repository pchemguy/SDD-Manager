SDD Manager **0.16.5** improves Windows wrapper handling, GitHub completion validation and source acceptance recovery controls.

## Highlights

- **Quoted and unquoted Windows wrappers.** The standalone CMD adapter accepts both outer-wrapper forms. Its policy closing now matches the embedded template, with fourteen native Windows tests covering both forms and LF/CRLF assets.
- **Multiline completion descriptions.** GitHub completion accepts the bounded LF multiline milestone descriptions produced by projection, including predecessor milestones, while retaining exact text and existing content checks.
- **Literal branch evidence.** Completion rejects previous-checkout shorthand such as `@{-1}` before credentials, locking or provider effects, preserving literal branch association in durable evidence.
- **Source recovery integrity.** Acceptance exports explicitly report incomplete recovery for intent-to-add, assume-unchanged or skip-worktree flags that stage records cannot restore. Paused operation snapshots detect flag-only drift and reject continuation before the next mutation.

## Compatibility and upgrade notes

The Windows adapter remains a standalone policy asset; importing the plugin does not install a host shim. Source acceptance receipts created with the former stage-only index digest require independent reconciliation before resume. Flagged recovery exports require retention of the original checkout/index and separate preservation of that intent; automatic flag restoration is not provided.

## Package and installation

The package contains 15 skills. Workflows using bundled supervised HTTPS Git publication require native Git, Node.js 22+ and Python 3.11+ on supported Windows or Linux hosts. Optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own toolchain requirements.

Download [sdd-manager.zip](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.5/sdd-manager.zip) and its [SHA-256 file](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.5/sdd-manager.zip.sha256). Verify the checksum, then import the archive through an Agent Plugins-compatible client or extract its sdd-manager directory for explicit source loading. PLUGIN.md is a non-standard composition entry; automatic discovery depends on the client.

Stable latest links: [package](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip) and [checksum](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip.sha256). Demo prompts, contributor evidence and acceptance tooling remain in the source repository, outside the distributable.

## Verification and limits

The comprehensive source review covers 384 current paths and resolves all three confirmed findings. Local release checks pass 142 support and 62 publisher tests. Native Windows/Linux Node.js 22/24 CI passes for unchanged runtime/test sources: fourteen shell tests, 42 completion tests and 52 projection tests in each applicable job. Exact-source package, checksum and complete artifact-name checks accompany publication.

These checks do not establish fresh-agent compliance, installed-client discovery or universal launcher/client compatibility. No fresh live TextStats or installed-client trial was run.
