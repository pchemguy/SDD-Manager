# Authentication recovery revision plan

## Campaign and authority

- Campaign: `075_89fdf79`; baseline: `89fdf79637e59c558b3a265d5e458c22e58d49b7`; original opening: `fc381bd8b0ec46ccbf4f1e5dc78d5095cfd80bbb`.
- Planning source: `9794b8a99a1ff128315b811a1305afcec16775a8`.
- Working branch: `revision/075_89fdf79-scripting`; creation parent/eventual target: main.
- Human authorized completion of this plan followed by execution, covering the script, code review, documentation and SDD workflow integration. No intermediate approval is needed; campaign merge/release remains unselected.
- Inputs: [candidate assessment](REVIEW-REPORT.md) and unchanged [supplied script](candidates/git-auth-recover.mjs). Accept R-001–R-007 for correction; retain original observations and attribute live-platform limits honestly.

## Design and ownership

Place the shipped script at `.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs`. The coordinator owns authentication recovery; plugin-root scripts would imply a broader unrelated owner. Preserve the candidate under campaign evidence, not the shipped package.

Implement one dependency-free Node.js 22+ ES module, safe to import, with JSDoc explaining exported contracts, effects, errors and security boundaries. A companion `git-auth-recover.md` beside it is justified for invocation, outcome semantics, Windows ACL requirements, runtime/failure recovery and test limits; keep normative workflow policy in credentials.md rather than duplicate it in code/docs.

Default to transient Git credential-helper protocol, not permanent wincred/libsecret configuration. Git launches the same script through its documented shell helper interface using the actual Node executable and quoted paths, including spaces/Unicode. No generated secret/helper files, vault installation, token in arguments/environment, PowerShell prerequisite or persistent Git config changes. Helper `get` supplies credentials only for the selected HTTPS host/path; `store`/`erase` are no-ops. The helper reuses the protected ignored token file and is active only in the selected Git invocation. This is the portable counterpart of ASKPASS without localized prompt parsing.

Persistent credential-store setup remains an existing alternative under credentials.md, not an automatic fallback or an additional script mode. Missing facilities return a concrete blocker rather than installing packages or silently introducing plaintext storage.

## CLI and behavior contract

Expose `push` and `readback` only, with explicit `--repo`, `--remote`, `--url`, `--ref` and `--expect`; optional root-relative `--token-file` defaults to gh.tkn and bounded `--timeout-ms`. No arbitrary Git command tail, forced push, deletion, multi-ref push, remote rewrite or SSH conversion. `--url` pins the coordinator's intended effective HTTPS push destination, including a distinct push URL. Ref must be one full heads/tags ref and expected value a full local object ID. Tags compare their actual ref object; release-source peeling remains the release owner's separate check.

Resolve a non-bare repository/worktree root, validate source ref and unique effective push URL, token containment/type, ignore and untracked status before reading. Reject symlink/out-of-root tokens and multiline/NUL or oversized content; accept normal terminal LF/CRLF. POSIX checks require current ownership and owner-only mode. Windows conservatively checks the token DACL using native whoami/icacls and parsed SDDL, allowing only current user, SYSTEM and Administrators; unsupported/ambiguous ACLs block rather than claim protection. Read-only ACL export metadata is temporary and cleaned; no credential material is copied there.

Use direct Git executable argument arrays; provide context-scoped helper reset/useHttpPath and disable credential prompts/HTTP redirects for the operation. Reject credential-bearing URLs, relocated Git environment and ambiguous destinations. Bound process time/output and sanitize all public failures: return no raw credential/helper/Git output. Preserve caller network/proxy settings except credential/trace channels that conflict with the selected mode. Check effective destination again before network effects.

`push` retries the one already-authorized operation once using an explicit source/ref and no follow-tags/submodule expansion, then reads back that exact push destination/ref. A push failure or timeout may still have remote effects; distinguish process failure, absent/different remote ref, unverified outcome and verified matching ref. No automatic re-push or claim of credential validity based on storage. `readback` performs no push. Coordinator/publication owner retains authorization, classification of original failure, interpretation of outcomes and separate release/tag contracts.

Return one versioned JSON result and documented exit codes. Main/CLI has no effects on import; helper protocol stdout is internal to Git and must never be logged. Do not claim full platform support from pure quoting/ACL fixtures.

## Ordered actions

| Action | Findings | Deliverable and dependencies | Recheck |
| --- | --- | --- | --- |
| V-001 | R-001–07 | Test-first script and source-only Node tests under `tests/git-auth-recover.test.mjs`; implement validated transient operation and helper contracts. | Import safety; protocol scoping; paths/ignore/permissions/token format; exact destination/ref; no persistent config; process/error/output handling; no arbitrary commands; scoped push/readback and uncertain outcomes. Synthetic secrets only. |
| V-002 | R-001–07 | Review/fix remaining code, expand native Git/helper and platform cases, add read-only Windows/Linux Node 22/24 CI definition under `.github/workflows/git-auth-recover.yml`. Depends V-001. | Linux actual helper calls and controlled operation scenarios; conservative Windows SDDL fixtures and native Windows tests configured. No real credentials/host mutations in tests. Record any unrun CI honestly. |
| V-003 | R-001–07 | Professional JSDoc, companion guide, credentials.md and Git workflow routing; short entry reference only if needed. Depends V-002. | Runtime optional to SDD; trigger only after actual auth failure and eligible preconditions; pre-write gate preserved; exact operation authority/readback; documented support limits/JSON/failure recovery. |
| V-004 | R-001–07 | Packaging/snapshot contracts retain script+guide, documentation navigation and source acceptance command; focused isolated skill-use/code assessment and full relevant suites. Depends V-003. | Exact archive bytes, synthetic tests, support/publisher and current links, no excluded-source dependency, raw assessment distinct from live provider evidence. |
| V-005 | R-001–07 | Final fixes/rechecks and report, finding dispositions, HANDOFF and index. Depends V-004. | All accepted findings covered, actual limits recorded, prior closed records unchanged, action commits pushed/read back, campaign remains open/unmerged. |

Each action commits source and evidence together and pushes/readbacks before advancing. Test-driven local iterations may occur inside an action; do not invent product task IDs. If a first implementation commit is used as a bounded partial checkpoint, record it as partial and keep the action incomplete until its tests pass; never publish a false completion.

## Validation and boundaries

Use Node's built-in test runner with isolated temporary repositories and canary credentials. Run the same suite under native Git on Linux and Windows in CI; use CMD for Windows run steps. Cover original helper/config-loss defects, no keyring, helper context mismatch, token/ACL failures, existing URL-scoped helpers, missing tools, timeout/signal/buffer errors, contradictory readback and no leaked token in argv/env/public JSON. Controlled Git calls and test doubles do not prove live GitHub authentication or unavailable Windows execution.

Run full support/publisher suites from acceptance/AGENTS.md, catalog and current link checks; require shipped script/guide presence in package contracts and exact committed archive validation. Add no Node package dependency, test-only files to the distributed plugin, product version bump or unrelated refactor. A narrow CI addition is source-only; no release workflow dispatch is selected.

Campaigns follow coherent objectives rather than file counts. This campaign's accepted execution unit is C-001 authentication recovery and its supporting code/docs/tests. Independently useful unrelated candidates should have separately scoped campaigns when introduced; do not reject necessary support files to enforce one-script-per-campaign.

When source work is complete, refresh HANDOFF with actual evidence and next boundary. Stop after verified publication on the current branch; no campaign merge, release, real credential alteration or live external push test is implied by these tests.

## Execution status

V-001–V-005 are complete under the selected scope. The [revision report](REVISION-REPORT.md) records original failures, native Windows/Linux corrections, finding dispositions, isolated review, package/full-suite evidence and limits. Final utility source is 58cd578; later checkpoint edits affect source-only campaign continuity. Campaign remains open/unmerged after publication; no scope expansion or release is implied.
