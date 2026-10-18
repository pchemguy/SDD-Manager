# Script candidate review

## Campaign, candidate and evidence

- Campaign: `075_89fdf79`; full starting baseline: `89fdf79637e59c558b3a265d5e458c22e58d49b7`.
- Current source at assessment: opening commit `fc381bd8b0ec46ccbf4f1e5dc78d5095cfd80bbb`; packaged instructions unchanged from baseline.
- Candidate C-001: [git-auth-recover.mjs](candidates/git-auth-recover.mjs), supplied directly in chat, preserved as review evidence. No provenance beyond the supplied source or original execution result was supplied.
- Scope: behavior, integration ownership, Windows/Linux portability and bounded correction direction. No candidate execution, real credential read, helper write, source integration or release selected.
- Evidence: static source inspection; `node --check` passed on Linux with Node v24.19.0. This parses the file without running its top-level credential/configuration operations. Windows execution and live GitHub authentication unrun.
- Recommendation: Adapt; not ready to ship unchanged. Deterministic credential supply is a useful candidate for the existing coordinator-owned recovery procedure, not a new core workflow.

## What it does

1. Reads and trims `gh.tkn` relative to the current working directory and throws if the resulting string is empty.
2. Creates a Git process wrapper using an argument array, captured UTF-8 output, inherited environment, disabled terminal prompts and GCM interaction setting. No Node shell is requested.
3. Replaces all repository-local `credential.helper` values with an empty reset, then appends `wincred`. This intentionally masks inherited general helper values without editing the system configuration itself. The local settings persist after the process exits.
4. Constructs an HTTPS credential description for github.com and x-access-token, then calls `git credential-wincred store` with the token on stdin. It checks only that command's numeric status and prints a storage-success message on zero.
5. If additional CLI arguments exist, passes them directly to Git, prints captured output and exits nonzero on failure. Despite the variable/comment naming, these can specify any Git subcommand; the script does not insert `push`.

It does not remove `gh.tkn`, prove token validity, establish API-client authentication, resolve the intended push URL/ref or verify remote containment. Invoking it with no trailing command still changes config and stores the credential. Importing it executes those top-level effects; it currently is a CLI script rather than a safely importable library module.

## Existing SDD fit

Canonical owners: `sdd-manage/references/credentials.md`, shared `sdd-conventions/references/hosting-tokens.md`, and the manager's Git publication/recovery procedure. Their observed-auth-failure trigger, eligible repository/token identity, effective ignore/untracked/protection checks, main-preparation pre-write gate, scoped recovery and separate Git/API authentication remain authoritative.

A helper can implement a bounded credential-transfer mechanism under those procedures. The coordinator should choose the mode and validate preconditions; sdd-implement or the coordinating Git owner retains the exact authorized push and remote readback. Do not make helper mutation a pre-push ceremony or treat successful credential storage as publication. Node is a possible implementation runtime, not currently a universal SDD consumer prerequisite; adoption needs an explicit supported runtime and unavailable-runtime result.

## Findings

| Finding | Priority | Located observation and consequence | Bounded correction |
| --- | --- | --- | --- |
| R-001 | High | Hardcoded local `wincred` configuration plus direct `credential-wincred store` cannot provide native Linux support. Even on Windows, actual Git/helper/session capability is assumed before permanent mutation. Failure can leave unusable config behind. | Inspect effective helper setup and actual capability before effects. Reuse a suitable existing mechanism; select a verified persistent helper or a separately defined transient mode. Do not treat an OS name as proof of usable credential storage. |
| R-002 | High | Both config results are ignored. A failed first or second call can leave a changed helper list or proceed with unchanged config; a later store failure leaves earlier mutations. `res.error`/`signal` are never checked and no timeout is set. | Centralize process result checks, including spawn/timeout/signal errors and bounded output. Prefer invocation-scoped configuration. For selected permanent changes, preserve exact prior multivalues and implement bounded failure recovery without overwriting concurrent/unrelated config. |
| R-003 | High | Repository-wide helper replacement changes authentication for all remotes in that repository. The stored github.com credential has no repository path; host-level matching can affect other repositories using the same credential store/context. | Resolve the authorized effective HTTPS destination, host, account and path; scope helper configuration and credential context. If repository path isolation is intended, use consistent path context and useHttpPath behavior. Do not silently change remote URL/transport or assume an HTTPS PAT fixes SSH. |
| R-004 | High | `readFileSync('gh.tkn')` trusts the current directory. There is no resolved eligible root, effective ignore/untracked/protection validation, symlink handling or single-line credential validation. Internal newline/NUL bytes can violate the credential protocol. | Bind all Git operations to an explicit validated repository/worktree and selected token file under existing SDD rules. Check exclusion/protection before reading; handle absent/unreadable files. Accept ordinary terminal newline endings, reject invalid internal control bytes, and keep values out of diagnostics. |
| R-005 | Medium | `process.argv.slice(2)` is an unrestricted Git-command runner. No origin/push-url/ref/repository or operation guard ties it to the failed authorized operation. | Prefer a focused credential-recovery API/CLI returning a structured result. Let the existing Git owner retry the exact authorized operation; if an optional runner is retained, define and enforce its destination/ref/operation contract rather than accept arbitrary Git arguments. |
| R-006 | Medium | Store acknowledgement is the only success criterion when no command follows. It proves neither target authentication nor permission; even a successful push lacks independent remote containment readback. Raw helper/Git stderr is printed without secret-aware handling. | Separate configured/stored, credential accepted, operation completed and remote verified states. Return sanitized failures, operation identity and uncertain effects. Keep verification with the existing publication owner; never print credential-fill output or raw secret-bearing structures. |
| R-007 | Medium | Top-level token/config/store effects make importing the candidate unsafe and constrain tests. Runtime, Git executable selection, process timeout/buffering and platform wrapper behavior are unspecified. | Keep pure selection/credential-description logic testable, isolate CLI effects, and define supported Node/Git/runtime behavior. Preserve direct executable spawning and argument arrays; validate paths with spaces/Unicode and headless/noninteractive cases on both platforms. |

These are source findings, not claims that every hypothesized error has occurred. SDD preconditions may be enforced by a caller, but an integrated script needs an explicit caller/tool contract so they cannot be silently skipped.

## Windows and Linux design direction

| Environment | Suitable direction and conditions |
| --- | --- |
| Windows with a usable credential store | Preserve an appropriate existing helper; verified wincred or Git Credential Manager can support persistent recovery. Native `git.exe` can be launched directly by Node without PowerShell. Do not replace configuration solely because a different helper name is observed. |
| Linux with a working secret service or configured manager store | Use the selected installed helper, with its storage prerequisites verified. GCM is cross-platform but has no default Linux store. Secret Service requires a reachable D-Bus session and provider; an unlocked store/session can matter in headless use. |
| Linux/container/remote session without a usable persistent store | A supported transient Git credential mechanism can read the existing protected token file for the exact operation without installing extra permanent stores or rewriting repository config. Define helper/ASKPASS selection, context restriction, cleanup and missing-capability behavior. |

The portable front end for a configured credential helper is Git's `credential approve` protocol rather than one helper-specific store executable. It still requires selecting/validating the intended helper: blindly approving to all configured helpers can invoke an unwanted store, and zero status alone does not establish usable persistence or authentication. Where persistence is intended, distinguish the SDD token file from the helper's separate storage.

For a transient route, use an explicitly selected request-scoped helper or ASKPASS channel, scoped configuration and no token in command-line arguments, URLs, environment values or helper source. Store only paths/configuration in launcher arguments. Test platform-aware launchers; a POSIX shell script/shebang is not a universal Windows executable. If a Windows launcher is needed, honor CMD-based operation without introducing a PowerShell prerequisite. A helper protocol implementation can validate host/path rather than depend on parsing a localized password prompt.

Do not automatically substitute Git's plaintext `store` helper for Linux support. The protected ignored token file is already an explicit SDD convention; silently adding another plaintext credential database widens storage and maintenance without solving portability. Noninteractive flags also do not by themselves guarantee every third-party helper, keyring or network operation is noninteractive and bounded.

## Recommended assessment before adoption

- Native Windows CMD and Linux, including a headless environment with no keyring; record actual Node/Git versions and available helper/storage prerequisites.
- Config inheritance/reset, existing URL-specific credentials, multivalues, alternate worktrees/remotes, push URL divergence and concurrent config changes.
- Missing/empty/unreadable/tracked/unignored token, symlink/out-of-scope path, standard CRLF/LF endings, invalid internal control bytes and protected credential transfer.
- Missing Git/helper, each config/store failure boundary, timeout/signal/oversized output, locked/unavailable storage and no partial permanent config damage.
- Synthetic canary credential never appears in argv, returned diagnostics or logs; use controlled fake helpers before any selected live test.
- Successful storage with invalid/no remote permission, successful authorized operation, uncertain push and separate containment readback; no duplicate or automatic expanded effects.

No corrected implementation, permanent helper choice, default transient mechanism or Node dependency is accepted by this assessment. Further candidate comparison can inform a shared, small recovery primitive before a revision plan is selected.

## Documentation checked

Primary documentation accessed 2026-10-18:

- [Git credential contexts, helper reset and path matching](https://git-scm.com/docs/gitcredentials).
- [Git credential front end and line-based protocol](https://git-scm.com/docs/git-credential).
- [Git credential helper/platform inventory](https://git-scm.com/doc/credential-helpers).
- [Git Credential Manager storage prerequisites and Linux setup](https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/credstores.md).
- [Node child-process spawnSync API](https://nodejs.org/api/child_process.html#child_processspawnsynccommand-args-options).

## Persistence and limits

The supplied script is retained unchanged under candidates/ as source evidence, outside the distributable package. Only syntax validation, source inspection and documentation checks were performed; no real gh.tkn was read by the candidate and no credential helper/config/remote was changed by it. Campaign records/navigation are the only authored changes. Source integration and live cross-platform acceptance remain pending.
