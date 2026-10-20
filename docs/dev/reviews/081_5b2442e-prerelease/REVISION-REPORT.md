# Prerelease preparation evidence — SDD Manager 0.15.1

## Context

Campaign 081_5b2442e; starting source 5b2442e3315da91bcbc8ccd0efc14c0c59106b27, verified published main after campaign 080 closure. [Preparation plan](REVISION-PLAN.md), [review plan](REVIEW-PLAN.md), [review report](REVIEW-REPORT.md). Working/publication branch revision/081_5b2442e-prerelease; main is recorded parent/return. Human authorizes preparation and patch bump, not product release publication. State: P-001–P-004 and U-001–U-003 complete; campaign remains open at the prepared-candidate checkpoint. Exact candidate ddb86fc926ddc2cfbd15946946c75a9c3672645d was published/read back. Opening b3878d4a442a6a53328b1afe46b2d58ba148ae89 and U-002 report checkpoint 335aae310427cd76c5e9c0eb81e7334942ca37be were also published and exactly read back; final checkpoint publication is required before stopping.

## Actions

| Action | Current result | Verification / persistence |
| --- | --- | --- |
| P-001 | Canonical version 0.15.0 → 0.15.1; all other manifest bytes/fields retained. | Pinned offline core schema passed and manifest diff inspected. The containing published commit supplies the initial exact candidate SHA. |
| P-002 / U-001 | Complete current inventory and exact-byte reuse assessment; one phrase polished without policy change. | 154 files / 15 entries / 79 refs; 15 presentations, schema, 1,042 links / 269 fragments and structural validation passed (48 existing warnings). The containing published U-001 commit updates the candidate pin. |
| P-002 / U-002 | Candidate runtime/package assessment complete; 0.15.1 archive/checksum prepared. | 139 support / 37 publisher tests passed; two exact 154-file builds identical; four extracted CLI smokes passed. Matching recent native CI reused with explicit provenance. Build SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25. |
| P-002 / U-003 | Complete range and readiness assessment; no required defect. | All 150 selected identities accounted for: ten latest complete integration summaries cover 146; four direct changes assessed separately. Reverts/merge deltas reconciled; earlier cumulative bodies deferred without losing identity coverage. |
| P-003 | Complete 0.15.1 message, curated checkpoint, notes snapshot and build-only handoff prepared. | Root notes remain tracked; original body matched prior release. Atomic replacement, exact body/hash equality, publisher validation and candidate archive inspection passed. No dispatch or product publication. |
| P-004 | Final reports, continuation handoff and index prepared; stop with 081 open after exact publication. | Scoped links/style, immutable package/hash, source agreement, frozen-record preservation and clean publication checks; actual checkpoint SHA recovered from Git. |

## Prepared outputs and source association

| Item | Exact identity / retained form |
| --- | --- |
| Candidate | ddb86fc926ddc2cfbd15946946c75a9c3672645d; manifest 0.15.1; 154 shipped files |
| Previous release | v0.15.0 → 2be233c7ec02be131917ceb16d6a16dc7d407d57; complete coverage through candidate |
| Complete notes | Tracked root RELEASE-NOTES.md and identical [campaign snapshot](RELEASE-NOTES.md); 5,165 UTF-8 bytes; SHA-256 9620c1768831bc7480624216b8eb74f91ef745d255b3114cee065342c8440c82 |
| Build-only transfer | [RELEASE-HANDOFF.json](RELEASE-HANDOFF.json); 5,552 bytes; actual validator passed; exact source/body; publish, prerelease and make_latest false |
| ZIP | sdd-manager.zip; 449,132 bytes; SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25 |
| Checksum asset | sdd-manager.zip.sha256; SHA-256 e75cf68b0fae55b52949b3ba6f73e8f7557d25aecdb84b9fc641532231fd64e5 |

Local prepared outputs are together at /workspace/scratch/46b31bb4dff6/081-package-0.15.1; the source-bound publisher can reconstruct the ZIP/checksum if those local files are unavailable. Matching complete notes and handoff are retained there as well. The ignored/untracked .release-highlights.md holds the validated baseline/candidate watermark and curated highlights; keep it until actual published-body consumption. The tracked snapshots and range accounting preserve reconstructible context for a fresh environment.

All current package/runtime/test/tooling bytes still equal the pinned candidate. Later source-only notes/evidence commits do not change its identity or artifact hash. This is preparation for stable version 0.15.1, not a selected prerelease publication: the false channel/latest flags make no future publication decision. A future release request must select those policies, reconcile the exact intervening history, refresh coverage through the final release commit, rebind/rebuild, then verify tag/body and provider assets under the existing workflow.

## Final verification and limits

Current checks confirmed exact root/snapshot/JSON UTF-8 body and source agreement, valid build-only schema/size, core manifest agreement, all archive members and both retained asset hashes. No v0.15.1 tag exists. Git path/object comparison confirms closed campaign/feature/steering records are unchanged from the opening main baseline; no closed contents were loaded for routine validation. Final scoped current documentation audit found 220 Markdown files, 1,048 local links and 269 heading fragments without unresolved targets or style candidates. The index's separate 234-link navigation check also passed; frozen targets were existence-checked without loading their contents.

The candidate's 139 support and 37 publisher tests passed freshly. Recent unchanged utility sources reuse 106 Linux passes plus separately source-matched native CI; no failed required check was waived. Structural validation retains 0 errors/48 existing warnings. Actual installed-client/autonomous consumer/live-provider trials and Antigravity/local Codex activation were not run. There are no unresolved required defects from the selected review, and no new requirement is inferred from those unrun evidence classes.

## Stop

Publish/read back this final checkpoint and stop on revision/081_5b2442e-prerelease. Campaign 080 remains closed on main; 081 remains open, with preparation complete. No integration/closure of 081, release marker/tag, publishing dispatch, hosted release or installation follows from this request. Recover the containing checkpoint's actual SHA and remote containment from Git rather than embedding a self-referential future identity.

## Nested authentication revision

The preparation checkpoint was published and exactly read back at d0d7438bf1e6ec850870cfc43be32573c784dc0c. The subsequent human request opens child [082_d0d7438](../082_d0d7438-auth-helper/REVISION-REPORT.md) from that checkpoint to revise the authentication helper. Campaign 081 remains open; its execution is suspended while the child owns the focused scope. The child's creation parent, integration target and return branch are revision/081_5b2442e-prerelease, not main.

Retain the candidate and previous preparation results for their recorded source. No helper change is made at child opening. After a later authorized child integration, reassess affected prerelease inputs/evidence, refresh source/body/package association as needed, and return control at this preparation boundary. Child completion supplies no automatic parent continuation or release authority.

The child's [focused review](../082_d0d7438-auth-helper/REVIEW-REPORT.md) subsequently reproduced the Git-generated GIT_DIR rejection through actual local HTTPS Git transport and identified three related diagnostic/coverage findings. Those helper bytes also occur in this candidate. Earlier successful tests/builds remain evidence for their stated checks; current authentication-workflow readiness now requires resolving/reassessing the known defect and missing transport coverage. No repair, child integration or parent resumption has occurred.

## Authentication child result and retained parent boundary

Child [082](../082_d0d7438-auth-helper/REVISION-REPORT.md) completed its accepted plan: verified Git-generated helper context with Windows ACL propagation, safe helper diagnostics, independent push/readback summaries, real native HTTPS regressions and aligned script/coordinator documentation. All four focused findings are Verified. Evidence includes 37 authentication / 39 completion / 40 projection local contracts, all four native Windows/Linux Node 22/24 jobs per affected utility, 139 support / 37 publisher passes, and a reproducible exact 154-file 0.15.1 verification package at child source 94e972684d59aac16b30bdc03847f9b861c0bd0a. Actual child integration/publication and return are established by the containing explicit parent merge and Git state.

The original prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d, notes/handoff association and archive hashes above remain historical evidence. The child changes shipped helper/documentation bytes, so they no longer represent the current package. The known helper defect is resolved by the child's observed checks; parent release readiness still requires reviewing intervening history, refreshing complete notes coverage and source/body/handoff association, rebuilding the exact selected final source and applying the existing release gates when continuation is selected. Root notes and retained preparation snapshots were not rewritten by the child.

Campaign 081 stays open and suspended after the child's verified return. No automatic preparation continuation, main merge, release marker/tag, publisher dispatch, hosted release or installation is authorized by child completion.

## Nested PLAN and layout checkpoint revision

Authentication child 082 was explicitly integrated, published and exactly read back at df52d0bba5c0872a06d3277951624091dcab6b5c, with the worktree clean on this parent. The human subsequently requested a new nested revision: “PLAN and layout have distinct checkpoints.” Child [083_df52d0b](../083_df52d0b-plan-layout-checkpoints/REVISION-REPORT.md) opens from that published checkpoint on revision/083_df52d0b-plan-layout-checkpoints. Its creation parent, integration target and return branch are revision/081_5b2442e-prerelease.

Campaign 081 remains open and its preparation execution stays suspended. The new child records the desired separate checkpoints and current explicit source rules; no source repair, release-input refresh or parent continuation is selected by this opening. After a later authorized child integration, retain the original parent preparation boundary and reassess affected candidate/message/package association when continuation is selected. Campaign 082 and earlier closed packages remain frozen.

The human subsequently clarified and authorized the focused 083 repair: retain the ordinary per-document checkpoint definitions, remove redundant commentary and normalize affected tracking wording. No approvals are combined or removed. Current execution/evidence stays with child 083; this changes neither parent suspension nor release authority.

## Checkpoint wording child completion boundary

Child [083](../083_df52d0b-plan-layout-checkpoints/REVISION-REPORT.md) completed its focused wording repair at published source 345aba7b34d003db1dac0faa27df51a140cfd1e4. Ordinary checkpoint definitions are retained, redundant commentary removed and DOCS task wording normalized; the projection contract now checks complete task-content transfer. Evidence includes 216 local test passes, all four native projection jobs and an exact reproducible 154-file 0.15.1 verification package. The human selected child closure; actual integration/publication and return are established by the containing explicit parent merge and Git state.

Keep 081 open and suspended. Both child amendments change shipped bytes relative to the earlier prepared candidate; its original history coverage, notes/handoff association and package hashes remain historical and require refresh on a separately selected continuation. The child verification builds do not replace release preparation or authorize publication/installation.

## Nested Windows shell probe revision

After verified child 083 integration/publication at e034a38bcdd6f18fd028af1f831730fe9e558587, the human selected focused child [084_e034a38](../084_e034a38-windows-shell-probe/REVISION-REPORT.md): remove ` /d` from the documented Windows shell probe and complete the full campaign. The child branches from and returns to revision/081_5b2442e-prerelease. Parent 081 remains open and its preparation execution suspended; existing release-source/body/package association is not refreshed by this opening or child closure. Campaign 083 and earlier packages remain frozen.

## Windows shell probe child completion boundary

Child [084](../084_e034a38-windows-shell-probe/REVISION-REPORT.md) changes the documented probe and its matching existing native test invocation to `cmd /c echo SDD_CMD_PROBE_%SystemDrive%`. Whole-file comparisons establish the exact two replacements; the adapter, other fixture commands, workflow and version/release inputs are preserved. Syntax, focused links/style and frozen-path checks pass. Exact committed source 4befe7b5f061286f317a1abaaf2149472342f026 yields identical 154-file verification archives, SHA-256 e316818cbd71dcb31444f780087b61dcc3f2e112228cadaf39792c51fc7488b9.

Linux discovery skipped all six native cases. The [source-matched Windows run](https://github.com/pchemguy/SDD-Manager/actions/runs/39282149988) remained queued during reported Actions degradation. The human directed “bail out on github test”; the child's documented plan adjustment ends CI waiting and completes this bounded source revision using passing static/package evidence. Native execution remains unverified; no pass, client activation or refreshed release readiness is claimed. Actual child closure requires the containing explicit parent merge's verified publication and confirmed return. Keep 081 open and suspended with its release-source/body/package association still requiring refresh.

## Nested token access cleanup

Child 084 was explicitly integrated, published and exactly read back at fd8dec8e2440601827d6d640b439857451040018, with clean return to this parent. The human subsequently selected new child [085_fd8dec8](../085_fd8dec8-token-access/REVISION-REPORT.md) to remove the token-file ACL machinery and complete the full revision through closure. The child branches from and returns to revision/081_5b2442e-prerelease. Parent 081 remains open/suspended; no release-input refresh or preparation continuation follows. Campaign 084 and earlier packages remain frozen.

## Token access cleanup child completion boundary

Child 085 removes Windows ACL/identity inspection and the corresponding POSIX ownership/mode gate from the shared token reader, updates all callers, removes obsolete diagnostics/fixtures and aligns workflow/CLI/contributor guidance. Ordinary OS read access suffices; token containment/type/identity, ignore/untracked status, format, protected transfer/output, destination/context checks and locks remain. No replacement strict mode or permission repair is introduced.

Published source 9aad014ee1b1417dc2ed17994fd021233241fcf3 passes 34 recovery, 38 completion, 39 projection, 139 support and 37 publisher tests (287 total). Ordinary-readable-token regressions include an observed RED/GREEN and local native HTTPS transport. Its exact 154-file verification package passes the pinned manifest schema and four extracted CLI smokes; identical rebuild SHA-256 aecee1e2ba8e4e87708c883898845544a4d65120dc6e40ede0ca6a8dc8adec42. No fresh Windows/hosted CI or installed-client/live-provider result is claimed; no hosted test waiting follows the human's instruction. Actual child closure requires the containing explicit parent merge's verified publication and confirmed return. Keep 081 open/suspended; prior candidate/message/handoff/package inputs remain historical and require separate refresh.

## Nested browser guidelines definition

Child 085 was explicitly integrated, published and exactly read back at 65c7d37f10c9eba2082c31c956a41acf9f1dbdf4, with clean return to this parent. The human subsequently selected nested child [086_65c7d37](../086_65c7d37-browser-guidelines/REVISION-REPORT.md) to define guidelines for targets requiring a browser. The child branches from and eventually returns to revision/081_5b2442e-prerelease. Its current scope is opening, assessment and proposed definition/plan; package-source execution or closure is not selected by opening alone. Keep parent 081 open/suspended and its release-source/body/package association historical. Campaign 085 and earlier packages remain frozen.

## Browser environment child completion boundary

The human accepted dedicated environment-contained Chromium by default and Firefox when required, then authorized plan revision/execution. Child 086 implements the shared setup/isolation/allowlist procedure and routes normal readiness, testing, verification, failure recovery and direct coordinator browser-facility selection to it. Existing personal/system installations and all other browsers are excluded. Conditional Playwright guidance uses compatible managed Chromium/patched Firefox and matching contained install/run paths. Required coverage and native/rendering evidence remain explicit; agent browser availability does not certify the project harness.

Published source 976b2e7ce1d2f527bbffbaee981dafacdd96f9b0 passes 139 support and 37 publisher tests. Thirteen source contrasts and package/link/composition checks pass; the exact reproducible 154-file verification archive has SHA-256 06db2ffbce6c09fc54d84622e84e237beb9a2d9e296b4af163beaa8f85af9be3. No browser execution, native Windows/client trial or hosted-test result is claimed. Actual child closure requires the containing explicit parent merge's verified publication and confirmed return. Keep 081 open/suspended with release-source/body/package inputs requiring separately selected refresh; this verification build is not refreshed release preparation.

## Nested deterministic Git authentication campaign

Child 086 was explicitly integrated, published and exactly read back at 745467a3929b23c6539d6319af451fbe9a6726e6, with clean return to this parent. The human requested a nested campaign for a deterministic solution to a Git credential process that can remain stuck indefinitely. New child [087_745467a](../087_745467a-git-auth-supervision/REVIEW-REPORT.md) branches from and returns to revision/081_5b2442e-prerelease. Its opening assesses the supplied selector-process screenshot, current first-attempt/recovery boundary and a safe native offline stalled-helper probe, then prepares the [revision plan](../087_745467a-git-auth-supervision/REVISION-PLAN.md).

The human confirmed that the token is fine and accepted bypassing inherited selectors when a supplied eligible token is selected. Remaining proposed work covers one scripted first-attempt entry point, whole-operation deadline, owned process cleanup, safe diagnostics/readback and native Windows/Linux regression coverage. This checkpoint does not claim an implemented repair, Windows result or child closure. Keep 081 open/suspended and its existing release-source/body/package association historical; 086 and earlier closed records remain frozen.

## Deterministic Git publication child completion boundary

The human selected execution of child [087_745467a](../087_745467a-git-auth-supervision/REVISION-REPORT.md). It delivers the canonical supervised first-attempt HTTPS push/readback entry, immediate eligible-token routing, shared total deadline, Windows Job Object/Linux subreaper cleanup, same-repository credential sources and secret-safe outcomes, with shallow integration across publication, credentials, implementation, steering and token conventions. Node 22+, Python 3.11+ and native Git are explicit prerequisites. The supplied token remains unchanged and successfully published/read back the checkpoints through that path.

Verified source 7b3f5278f0cebbc0c87a09a2882c5861dfcdabe9 passed all 48 contracts in the four native Windows CMD/Linux Node 22/24 jobs, with three additional owner-death repetitions per Windows job. Local support/publisher checks passed 139/37; the exact reproducible 156-file package has SHA-256 714983766f715cb65a47af7c4f203f0af6d5e5c591ce503819cd56f2b87ee078. Prior diagnostic failures/fixture repairs and actual evidence limits are retained in the child, without claiming a live Antigravity/desktop trial. Child closure requires the containing verified published two-parent merge and clean return. Parent 081 remains open/suspended; release inputs/version/installation are not advanced.

## Nested campaign 088

Parent remains open/suspended at 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. The human selected a new focused docs-main convenience revision, [088 plan](../088_7d37ca7-docs-projection-convenience/REVISION-PLAN.md), on revision/088_7d37ca7-docs-projection-convenience, returning to this parent. It does not resume prerelease work or refresh candidate-specific release inputs.

Nested 088 delivered the request-free docs-main entry, origin/default-document selection, bootstrap fallback, explicit eligibility and aligned existing docs. Complete incoming child is 7ebeb6f42d9dd2013d7affa37f441a80d980e65b; refreshed parent remains 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. Final child source passed both Windows CMD/Linux Node 22/24 matrices; local 84 projection/completion, 139 support and 37 publisher tests and exact package checks passed. [Child execution](../088_7d37ca7-docs-projection-convenience/REVISION-REPORT.md) retains provenance and limits. The containing explicit merge, merged-state checks, exact target publication and clean return establish child closure. Parent remains suspended; no release candidate inputs were refreshed.

Prospective merged-state verification for 088 passed all 84 projection/completion tests (Linux Node 24.19.0, zero failures/skips). The merged authored package matches native-verified bcecba2 exactly; 389 local link targets and 13 maintained fragments passed scoped checks across 11 changed Markdown files. Closed historical packages remain unchanged.

## Nested campaign 089 opening

At published parent 8e719ce965526dbbae266009ff8c1114b7d70a80, the human requested a new Windows shell handling revision campaign and then specified “No proposals yet.” [089 opening](../089_8e719ce-windows-shell-handling/REVISION-REPORT.md) records the new branch revision/089_8e719ce-windows-shell-handling, returning eventually to this parent. Opening/persistence only is selected; scope, proposals, planning and source execution await further direction. Parent 081 remains open/suspended and release preparation stays unchanged.

The subsequent human requirements selected the CMD-only Windows shell policy and exact replacement adapter. The child implemented and verified them at published source 76ecc64b674ac627308203974a85a4cc7d2f3e35: both Windows CMD Node 22/24 jobs passed seven native contracts; 139 support/37 publisher checks and exact package validation passed. [089 execution](../089_8e719ce-windows-shell-handling/REVISION-REPORT.md) retains scope, RED/GREEN evidence and limits. Child 089 remains open and unmerged, awaiting further direction; this parent remains suspended, without release preparation changes.

## Windows shell handling child completion boundary

The human accepted child 089's full-file revision and requested closure. It delivers standalone general Windows P&P, CMD defaults with explicit project-specific precedence, one command per call, actual-tool probing, error-triggered recovery, the exact replacement shim, CWD/PATH placement and repository .gitignore handling. Current callers, native fixtures and CI are aligned; the policy's full wording and section order were reviewed and revised.

Published incoming child 476947767c3a645a11320aac4cdaba4d80c3af84 integrates into refreshed parent 8e719ce965526dbbae266009ff8c1114b7d70a80 without conflicts. Final authored source e5853e9b99cf15cafdfc596ac97d273b9db72d1c passed seven native Windows CMD tests on each of Node 22/24 and exact reproducible 156-file package checks. The prospective merged state passes 139 support and 37 publisher tests on Linux/Python 3.12.14; its package/runtime/test/CI bytes match that verified source. The child report retains detailed hashes, scoped checks and evidence limits. The containing explicit merge, exact target publication and confirmed parent return establish closure; no live Antigravity/Codex activation is claimed. Keep 081 open/suspended with release inputs historical and requiring separately selected refresh.

Child 089 is now closed through explicit parent merge 735814e0740d7727c2aba0175335bf81d793d6d6, published and exactly read back with confirmed publisher cleanup. Both parents are verified, scoped documentation checks pass and the worktree returned cleanly to this parent branch. Retain the child branch and frozen records. This restores campaign 081's paused context without resuming prerelease work; version 0.15.1 and historical release-source/body/package association are unchanged.

The human subsequently reopened eligible campaign 089 from parent checkpoint d7fa983f731a38bf5fca41102ee418b6af336358 for action A-008: default CMD/direct execution, possible Git Bash availability and mandatory /c or -c when a wrapper is used. Execution and reclosure are authorized; parent 081 remains open/suspended. The reopened child retains its identity and return target, with no release-input refresh or parent continuation.

Published amendment d5adfc3cf98d89dd655c21ba7cd4add6c4f93795 implements A-008, including the human's clarifications that command lines remain CMD-only and Bash commands require bash -c because the shim executes through CMD. Existing CMD-only summaries and the exact shim/probe/recovery boundaries are preserved. Its exact reproducible 156-file package, five extracted CLI help checks and scoped documentation checks pass; runtime and earlier evidence retain their recorded sources. The prospective merge into refreshed parent d7fa983 has no conflicts and restores this parent context. Actual target publication and reclosure remain pending; 081 stays open/suspended.

Amended child 089 is closed again through explicit merge 204d7e91b1d0e40d1fb53c61cb024f21452e417f, published and exactly read back with confirmed cleanup. Both parents, clean return and merged-state scoped documentation checks are verified. Its cumulative integration summary retains original scope/provenance and separates A-008. Parent 081 remains open/suspended; no release-preparation continuation or refresh follows.

## Nested GitHub CLI backend revision

At published parent b238a66a3e7542af6bd7b3d3a966effd056406d5, the human selected child [090_b238a66](../090_b238a66-github-cli-backend/REVISION-REPORT.md) to explicitly permit available gh usage for supported GitHub operations and define existing or provided/saved-token authentication. Execution and closure are authorized. It branches from and returns to revision/081_5b2442e-prerelease; parent 081 remains open/suspended and its release inputs remain historical. All earlier closed records, including 089, stay frozen.

Child source 3dd79c6b86ac055f2d991870bdc43a88fc4fc678 is published/read back and delivers the canonical GitHub CLI subsection with shallow forge/credential/README routes. It supports suitable existing authentication or protected operation-scoped GH_TOKEN supply and preserves identity, pagination, readback, recovery and supervised Git publication. The exact reproducible 156-file package and five extracted CLI help checks pass; prospective merged-state checks pass 139 support/37 publisher tests and scoped documentation checks. gh is absent locally, so no live CLI authentication or hosted-mutation trial is claimed. The merge has no conflicts and restores this parent scope; verified target publication/return establishes closure without prerelease resumption.
