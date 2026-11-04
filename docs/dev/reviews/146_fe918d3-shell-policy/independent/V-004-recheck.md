# V-004 independent recheck — R-001 and R-002

**Verdict: accepted for source/test closure of both findings.** R-001 and R-002 are resolved in the reviewed repair, and no new finding was identified in this bounded delta. Current-source Windows CI qualification remains pending publication; this is not whole-campaign or release acceptance.

## Reviewed state and coverage

Repository `/workspace/scratch/f5adda9293ed/SDD-Manager`, base HEAD `4214546ae1092803581e5667a95b029b7fcc92f3`, with four coordinator-owned dirty paths. I read the complete pending diff across the production module, public guide and both test files, then checked the affected schema/native-run/evidence paths, shared text validator and projection description contract. The original comprehensive native-tools source review remains the basis for unchanged code. All four path digests matched both coordinator GREEN metadata records before and after my targeted run. No source/Git mutation, real credential read, publication, subagent or full-suite rerun occurred.

## R-001 — resolved

At `forge-close.mjs:32`, milestoneInput now accepts `text(value.description, 16000, true)` while retaining explicit null. That same validator covers the selected milestone and every predecessor. The existing text helper still rejects empty text, invalid UTF-8, disallowed controls, reserved opening-marker text and excess UTF-8 bytes. validateRequest preserves the description string exactly; managedMilestone retains exact hosted comparison. LF is the explicit completion input contract, consistent with projection's normalized output. CRLF descriptions remain rejected rather than silently rewritten; the updated guide and negative test make that choice reviewable.

The projection regression sends the actual rendered milestone descriptions to completion validation for task mode and phase-review selected/predecessor mode. The native completion regression uses real Git/root/token/lock preflight and synthetic HTTP for task, delivery milestone and phase-review predecessor closure, then asserts completed state and unchanged descriptions. Independent expected outcome strings and actual selected/predecessor state checks establish the original defect rather than merely mirroring a helper call. The null/UTF-8/marker/control/size negative test retains the existing protection boundary. No remaining R-001 defect was found.

## R-002 — resolved

At `forge-close.mjs:40`, taskInput rejects `@{`, the forbidden literal-branch sequence behind previous-checkout expansion. validateRequest runs before createContext, acquireLock and protectedToken, and applies taskInput to both task mode and all milestone tasks. The existing native `git check-ref-format --branch` check remains for other malformed literal names; accepted branch text is not evaluated and rewritten by the fix.

The native regression creates actual checkout history, independently shows that Git expands `@{-1}` and `@{-2}`, then verifies public/native run rejects each with invalid_task, zero HTTP calls and no lock left behind. The source ordering establishes that credentials and locking were never reached. Positive cases create literal slash/Unicode branches and assert the exact independently constructed evidence comment. An invalid `phase/not..literal` still fails the native syntax gate with zero HTTP calls. No remaining R-002 defect was found.

## Evidence and limits

I independently executed only the four focused new regressions with:

```text
node --test "--test-name-pattern=projected multiline|native multiline|milestone description validation|checkout shorthand" tests/forge-close.test.mjs tests/forge-project.test.mjs
```

Result: **4 passed, 0 failed, 0 skipped**, exit 0. Exact argv, source digests and log are retained in `/tmp/sdd146-v4-independent-targeted.json` and `/tmp/sdd146-v4-independent-targeted.log`.

I inspected the coordinator's RED log and metadata: the three intended old-production failures are two invalid_milestone errors plus one missing shorthand rejection. I inspected the coordinator's GREEN logs/metadata: completion **42 passed** and projection **52 passed**, with zero failures/skips and the same four source/test/doc digests reviewed here. Those full runs were executed by the coordinator; I did not rerun them.

This recheck uses Linux/Node 24 with real local Git/filesystem/token/lock eligibility and injected synthetic HTTP. It establishes no current repaired-source native Windows/Node 22 pass, live GitHub authentication/mutation, installed-agent routing or live acceptance result. Those limits do not reopen either confirmed source defect; they remain separate qualification evidence. The shared exact-content, ordinary protected input, no-clobber, locking and mutation/readback behavior outside this repair retain their original review limits. No new task, parser expansion, redesign or acceptance requirement is proposed.

## Source identity

| Reviewed path | SHA-256 |
| --- | --- |
| `.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.md` | `c495aeff3233fb6a4cf8c7f9a85c6367516c484e0dd2b979de929ed900313024` |
| `.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.mjs` | `62617ef417b3c5795c276494934f3c6ae3ef97508f7431762b87736d1c862813` |
| `tests/forge-close.test.mjs` | `80458234a780187f52d0b7fcdcaa70b70d8957cf4e097a95c791e9a080789471` |
| `tests/forge-project.test.mjs` | `9f86594df0d5ee30a7fc3da2e0375b708ccb1b0c7e64bc465acfb6b42f147444` |

The compact companion `/tmp/sdd146-v4-recheck.json` records the same verdict, per-path scope, exact digests and evidence attribution. The coordinator retains repair publication, native CI qualification, other findings and final campaign/release readiness.
