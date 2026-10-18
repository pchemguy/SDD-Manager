# Authentication recovery revision report

## Campaign and state

- Campaign: `075_89fdf79`; [plan](REVISION-PLAN.md), [original review](REVIEW-REPORT.md), [candidate](candidates/git-auth-recover.mjs).
- Baseline: `89fdf79637e59c558b3a265d5e458c22e58d49b7`; opening: `fc381bd8b0ec46ccbf4f1e5dc78d5095cfd80bbb`.
- Human authorized plan and execution; plan published as `073980557f3e5f96dab50051aa65cdf5408c3994` before implementation.
- Working branch: `revision/075_89fdf79-scripting`; parent/eventual target: main.
- State: executing; no merge, release or real-token/live-provider test selected.

## Action evidence

| Action / findings | Delivered scope | Checks and limits |
| --- | --- | --- |
| V-001 / R-001–07 | Import-safe Node transient helper/CLI, explicit repository/destination/ref contract, token/ACL validation, no persistent configuration, exact readback and sanitized public results. | Test-first missing-module failure recorded, then 14 tests pass on Linux Node v24.19.0. Native Git helper protocol passes with synthetic token and quoted/Unicode paths; controlled push/readback covers uncertainty and one-push bound. An initial native test exposed Git check-ignore rejecting global literal-pathspec mode; localized literal matching fixes it. No Windows/live provider result yet. |
| V-002 / R-001–07 | Reviewed and strengthened scope validation, stdin framing, Azure-style SID handling and older-object readback. Added Windows/Linux Node 22/24 read-only CI; native Git URL-scoped reset coverage and negative process cases. | 21 tests pass on Linux Node v24.19.0. Windows/native store and hosted CI results are not inferred; CI is a separate observed check when available. No real token/provider effects in tests. |
| V-003 / R-001–07 | Added professional exported API/effect/error comments and a bounded companion CLI guide. Credentials/Git entry routes the optional utility after actual auth failure, preserving pre-write and publication gates. | Syntax and 21 tests retained; docs distinguish DACL versus ownership checks, exact ref matching versus token permission, readback versus tag peeling, and unavailable facilities. No universal Node dependency or persistent helper mutation. |

Each action's containing commit identifies its checkpoint; publish/read back before further action work. Original candidate remains unchanged and outside the shipped package.


## Native Windows correction during V-004

Hosted run 39135370475 passed Linux Node 22/24 but failed both Windows jobs, including repository-root validation before credential use. The root cause is comparing canonical path strings for identity: Windows accepts equivalent case/short-path spellings that need not stringify identically. Root and token-parent validation now compares actual directory device/inode identity. A native Windows alternate-case regression accompanies the unchanged cross-platform tests. V-004 remains in progress until actual native readback verifies the correction; no Windows pass is inferred from Linux.

An isolated forward review loaded the coordinator, credential guide, utility and tests without campaign answers. It reconstructed the intended recovery/readback workflow, passed the original 21 tests, and reproduced two additional defects using disposable synthetic fixtures: Git decodes percent-encoded paths before helper matching, and `remote.NAME.vcs` can replace HTTPS transport with an external helper. Both new regression tests failed before correction. Matching now decodes validated UTF-8 paths once, rejects decoded controls/malformed encoding, and preflight rejects any configured foreign-VCS override before push/readback effects. No real token or provider operation was used by the reviewer.

Corrective checkpoint b520f4f passed 24 Linux tests and its two hosted Linux jobs. Hosted run 39135960942 advances through repository validation on Windows but fails at the native icacls export-record check. A source-only diagnostic test now records encoding/record prefixes from an explicitly synthetic fixture ACL, never token bytes, to establish the actual Windows representation before correction. This checkpoint also adds required script/guide archive membership and snapshot byte/exclusion contracts plus the contributor test entry. Publisher prerequisites were missing locally: the documented pinned requirements were installed, then all 37 publisher tests passed. V-004 remains incomplete pending Windows correction and full verification.
