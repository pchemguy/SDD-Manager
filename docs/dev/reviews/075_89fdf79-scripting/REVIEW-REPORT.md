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


## Reopened amendment A-001 — Background credential operation stall

### Source, request and evidence

- Original campaign observations/findings R-001–R-007 and their original closure remain unchanged. This focused amendment adds R-008; it does not reclassify earlier utility acceptance as evidence for a different outer workflow.
- Qualifying prior closure and reopening baseline: `115a51d5116da344f63d1475c7f8acbf19f97c25`. Reopening synchronization/analysis source: `c88afb8dbb7c99d444b14d7795f63fddb240ec78`; implementation unchanged from the closed campaign.
- Human requested reopening and analysis, then clarified: “Basically, when I ran the test, git credential had hung until I instructed agent to run diagnostics”. This makes automatic stall detection/diagnosis the primary concern. No duration, raw process/config trace, exact commands, effective credential chain, final remote ref or tested plugin commit was supplied.
- Scope: current coordinator/Git/credential instructions, utility selection/effects and the supplied account. The Windows installation, background task, Credential Manager contents and external demo repository were not inspected. A link to credentials.md does not pin its contents; a version label alone cannot identify the exact source revision.
- Checks: primary English Git documentation/source; four disposable Linux credential-protocol probes with synthetic helpers/values and no network; current 27-test utility suite. No real token, host credential store or external demo configuration was read or changed. No workflow/utility source repair is authorized by this analysis request.

Supplied excerpt, retained as reported evidence:

```markdown
### Push Diagnosis and Recovery

- **Root Cause:** The system Git configuration (`G:/ProgramsMisc/Anaconda/LLM-CLI/Anaconda/Library/etc/gitconfig`) set `credential.helper=helper-selector`. When `git push` ran inside a non-interactive background task, `git credential-helper-selector` blocked waiting for interactive credential selection/input, and Windows Credential Manager (`wincred`) did not yet hold a token entry for `https://github.com`.
- **Fix Applied:** Following `sdd-manage`'s **Hosting credentials** protocol ([`credentials.md`](file:///c:/Users/evgeny/Downloads/GH/SDD-Manager-Demo-Tetris-Hybrid-V1/.agents/plugins/sdd-manager/skills/sdd-manage/references/credentials.md)), I overrode `credential.helper` locally in `.git/config` to `wincred`, piped the token from [`gh.tkn`](file:///c:/Users/evgeny/Downloads/GH/SDD-Manager-Demo-Tetris-Hybrid-V1/.gitignore) into `git credential-wincred store` via protected `stdin` (never in CLI arguments, URLs, or logs), and ran `git push` with `GIT_TERMINAL_PROMPT=0`.
```

The fenced file URLs are quoted evidence, not accessible source files or active instructions here.

### Main conclusion and current-source finding

The human reports an execution-monitoring failure: the credential operation remained stalled until human intervention triggered diagnosis. A later recovery narrative explains an eventual remedy but does not establish that the agent managed the original pending operation adequately. A helper can remain interactive or nonresponsive without producing a 403 or another completed authentication failure.

| Finding | Priority / confidence | Located current evidence and consequence | Bounded correction and objective recheck |
| --- | --- | --- | --- |
| R-008 | High; confirmed current workflow coverage gap, with human-reported occurrence | `sdd-manage/references/credentials.md` Existing authentication first, `git-workflows.md` Publish each commit / Push authentication recovery, and `coordination.md` Persist repository changes trigger recovery on access/credential errors but define no explicit monitoring/deadline/no-progress transition for a pending Git/credential call. Coordinate environment recovery requires investigating a recognized blocker, without specifying how a silent pending call reaches it. The bundled utility's process timeout applies only after it is invoked. The initial existing-auth operation can therefore remain pending before the recovery path runs. | Preserve existing-auth-first, then require bounded observation/execution appropriate to the operation, automatic stall triage and owned-process/session reconciliation without a user diagnostic prompt. Distinguish quiet valid transfers, interactive helpers, transport failure and unknown remote effects. Recheck with a fresh consumer facing a non-returning helper before any authentication error: it must diagnose within the established bound, reconcile the pending attempt, use an eligible scoped recovery or report a concrete blocker, and verify the original ref before advancing. Also test a legitimately progressing long transfer and an uncertain prior push. |

This is broader than adding another timeout inside git-auth-recover.mjs. An already-running ordinary Git/background operation needs an owner and a transition into diagnosis; the current utility cannot retroactively monitor a process launched separately. General environment-recovery guidance is useful, but does not provide this explicit missing transition. The excerpt alone cannot establish which source revision or agent instructions governed the observed run, so it does not prove a violation of the newly shipped utility contract.

### Assessment of the diagnosis and applied fix

| Part of the account | Assessment |
| --- | --- |
| helper-selector waited for input | Technically plausible and consistent with the reported stall, but exact local causality is unverified here. Establish the Git executable/version/exec path and sanitized helper names/origins from the same background environment; another shell may use a different installation. A system config filename alone does not establish the complete effective chain or selected helper process. |
| wincred had no GitHub entry | Reported, not independently observed. That absence is a separate credential-availability fact; it does not by itself prove what caused the selector to wait or that another usable helper/session was absent. |
| local wincred “override” | Incomplete without exact commands/effective chain. Git helpers accumulate; an empty helper value resets inherited entries. A simple local wincred assignment can leave helper-selector first. The original candidate did use an empty reset, but this excerpt does not say whether that step was performed. Do not infer failure or success of the reset from this prose alone. |
| GIT_TERMINAL_PROMPT=0 | Useful for Git's terminal prompt, not a universal external-helper or GUI noninteraction switch. It is not an execution deadline. GCM_INTERACTIVE is likewise not a general switch for arbitrary helper implementations. |
| protected stdin to wincred store | Appropriate secret-transfer shape as reported, but it creates persistent Windows credential storage. It does not establish successful authentication/publication, safe token-file eligibility or a repository-specific credential context. Repo-local helper configuration and vault entry scope are separate facts. A host-only entry can be reused for other repository paths; path distinction needs consistent context handling. |
| publication/recovery evidence | No expected commit/ref, actual push status, remote readback, prior task disposition, helper process cancellation or config/store preservation evidence is shown. Missing evidence is not proof those checks were omitted, but the account cannot certify them. An uncertain background push must be reconciled before a second attempt; do not overlap retries. |
| gh.tkn hyperlink | The label points to `.gitignore`, not gh.tkn. This is a concrete reporting error, not evidence that the wrong file was read. Refer to the token by name without exposing contents; identify exclusion evidence separately. |

Primary bases: [Git credential contexts, helper reset and path handling](https://git-scm.com/docs/gitcredentials), [Git terminal-prompt environment scope](https://git-scm.com/docs/git), [Git prompt implementation](https://github.com/git/git/blob/master/prompt.c), and [wincred persistence implementation](https://github.com/git/git/blob/master/contrib/credential/wincred/git-credential-wincred.c), accessed 2026-10-18. These describe general behavior, not the exact Anaconda-distributed binary or installed selector in the reported run.

### Controlled observations

Linux Git 2.51.1 / Python 3.12.14 probes used a temporary repository, isolated system/global configuration files and disposable external helpers. Captured credential stdout stayed private; reported outputs contain only synthetic helper labels and booleans. The deliberate wait was bounded by a 0.8-second caller deadline; only that fixture's newly created process group was terminated. No provider request occurred.

| Probe | Actual outcome |
| --- | --- |
| System selector plus local-only replacement helper | Both selector then local helper ran, despite the higher-priority local value. |
| Explicit empty local reset followed by local helper | Only the selected local helper ran. |
| Waiting external helper with terminal prompts disabled and GCM_INTERACTIVE=never | The helper still waited and prevented the later helper from running; the fixture owner detected its deadline and terminated its owned group. This models generic helper blocking, not the user's installed selector implementation. |
| Command-local empty reset and selected helper, with the waiting inherited helper still configured | Only the selected helper ran, and persistent fixture config bytes remained unchanged. |

The existing utility suite passes 27/27 on Linux Node v24.19.0, with no failures/skips. Its native helper/reset tests and source confirm that eligible scoped use supplies request-local configuration and avoids the inherited helper chain. This retains the utility's established coverage; the new probes do not establish native Windows selector behavior, live-provider authentication or autonomous agent stall detection.

### Recommended revision direction and stopping boundary

1. Give the original authorized Git/credential operation a bounded lifecycle using supported runner/session facilities, without adding token searches before every push or imposing a universal short timeout on legitimate transfers. Set the observation/deadline from the operation and environment; no-output alone is insufficient proof of a hang. Do not poll unchanged state indefinitely.
2. On a stalled/suspected interactive operation, autonomously inspect safe process/session state and sanitized helper/executable provenance. Coordinate supported cancellation of only the owned pending attempt when necessary, retain the local commit and reconcile the exact remote ref before replay. If cancellation/readback is unavailable, report that concrete unresolved state promptly. Required credentials or a genuinely new scope decision can still need human input; running diagnostics does not need another grant.
3. When credential-helper blockage is established and existing protected token/runtime preconditions hold, select the bundled transient recovery path for the same destination/ref/object. Its reset and timeout solve the recovery attempt's helper problem without adding an OS-store entry. Preserve unavailable-runtime alternatives and host policy restrictions.
4. Make persistent helper/store setup an intentional, justified alternative within existing authority. State its scope/effects, preserve prior multivalues and credential context, and do not assume a blanket local assignment removes inherited helpers. This is a clarification recommendation; the current text permits existing helper facilities, and the excerpt does not establish which version or selection conditions applied.
5. Keep concise lifecycle evidence: original pending operation, bound/observation, diagnosis basis, owned-process disposition, selected recovery and exact publication readback. Keep fixes within existing Git/credential subworkflows with shallow routing; create no additional tiny reference or mandatory task log. Validate with an independent consumer stall scenario when available rather than treating protocol fixtures as agent behavior proof.

V-006 analysis is complete. R-008 is proposed for acceptance/planning; no correction has been implemented. Prior R-001–R-007 results remain historical and their scope is unchanged. Campaign A-001 remains open/unmerged after this report's verified publication. No external demo/credential/config repair or new live test is authorized.
