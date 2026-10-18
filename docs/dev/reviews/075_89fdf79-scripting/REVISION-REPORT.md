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

Run 39136157909 established native icacls /save emits UTF-16LE without a BOM (prefix `670068002e0074006b006e00`, decoding to the synthetic filename). The prior UTF-8 fallback was wrong. The metadata decoder now accepts observed BOM-less UTF-16LE, BOM-marked UTF-16LE and strict UTF-8; malformed/extra records still block. The diagnostic was replaced by a native parse assertion and pure encoding/malformed-record regression. Full source support checks passed 139/139; catalog validation passed 33 static cases. Windows success remains pending the corrected matrix.

Checkpoint 99ae03b passes 26 Linux tests and exact reproducible 141-file archive checks, offline manifest validation and 630 packaged local links. Its run 39136405837 passes both Linux jobs; Windows now parses the native export and rejects its DACL with token_permissions. The synthetic fixture policy assertion retains the full non-secret DACL/SID on failure to distinguish an ineligible fixture grant from unsupported principal representation before changing policy. No protection requirement has been relaxed.

The follow-up isolated review confirmed both original findings fixed at 99ae03b, then exposed Git's additional outer-slash normalization. Native captures establish literal leading-slash removal before single decoding, followed by decoded trailing-slash trimming; encoded leading and internal slashes must remain significant. Expanded native credential tests failed on an accepted trailing-slash URL before correction, then exercise seven encoded/slash variants through the utility's actual URL-scoped config. Root-only and malformed/control paths block; the pinned network URL remains unchanged.

Run 39136619577 established the remaining Windows representation issue: the current native local account ends in RID 500 and icacls represents its grant as SDDL alias LA, alongside SYSTEM/Administrators. Policy now recognizes LA/LG only after native whoami identity matches this computer and the current user's built-in account RID; a domain account with the same RID and an unrelated local user remain rejected. This resolves a representation mismatch without accepting an additional principal. Tests cover native policy plus local/domain ambiguity. Credential config context now uses Git's normalized credential path (with significant encoded/internal slashes retained), while network destination remains the exact pinned URL; inherited broken URL helpers are covered for all seven variants.

Run 39136978316 passes Linux Node 22/24 and 24/27 tests in each native Windows job. Native ACL, repository/protection, CLI and controlled operation checks now pass; only three Git-launched credential helper cases fail. A disposable synthetic script copy adds entry-path/environment-key and sanitized code/stage diagnostics in tests to isolate the native launch boundary. It reads no real token and adds no product diagnostic mode. The isolated reviewer rechecked 629b451 and independently confirmed all six outer-slash cases and preserved foreign-VCS rejection with no material regression in that scope.
