# Windows shell policy revision

## Authority and scope

Campaign 089_8e719ce; original baseline 8e719ce965526dbbae266009ff8c1114b7d70a80; opening 17e5aa90c5b2edba9f2b8768ecf36cf62323e89b. Working branch revision/089_8e719ce-windows-shell-handling; creation parent/eventual return target revision/081_5b2442e-prerelease. Parent stays suspended.

The human's subsequent numbered requirements select this revision after the opening-only instruction: broaden and shorten the Windows reference, enforce unconditional CMD-only Windows policy and one command per shell call, require a shim for an unavoidable PowerShell harness, remove apostrophe conversion and use the supplied replacement shim exactly. Antigravity's reported harness form is `PowerShell -Command "%CLI%"`, with embedded double quotes escaped as `\"`. It is harness behavior, not an allowed agent-authored CLI. No implementation choice requires further clarification.

## Actions

| Action | Changes and completion evidence |
| --- | --- |
| A-001 | Replace the old native tests with cases for the reported escaped harness, quoted Node executable/script paths and arguments, unchanged apostrophes, output/status, literal exclamation marks and temporary CMD scripts. Observe failures against the old adapter on native Windows. Keep controlled tests separate from live Antigravity evidence. |
| A-002 | Rename windows-shell-recovery.md to windows-shell.md and rewrite it as a concise policy with bounded readiness/adapter placement. Use the human's exact shim. Update current entries, callers, source development contract/assessment, README, acceptance and CI paths; remove obsolete conversion notices and inline-chaining recommendations within the selected scope. Preserve historical closed records. |
| A-003 | Run native Windows CMD Node 22/24 contracts, support/publisher checks, scoped links/content review and exact package validation. Publish/read back each owned commit and finish this revision checkpoint on the child branch with a clean worktree. Keep campaign 089 open, without parent integration or closure. |
| A-004 | Apply the human's subsequent clarification that windows-shell.md is general Windows P&P. Remove plugin roles/workflow gates/cross-references and use a neutral probe marker. Include the exact shim inline so the policy is self-contained; keep plugin coordination in callers. Check standalone content, verbatim shim agreement and current links. Runtime source is unchanged; retain qualified native evidence without claiming a fresh run. Publish and leave the campaign open. |

No PowerShell installation, global PATH/client changes, demo modification, token/authentication change, release-input refresh, version bump, main merge, release or plugin installation is included. The policy is unconditional for Windows; actual execution OS still determines whether Windows rules apply. Detailed procedure stays in one cohesive reference; callers retain short pre-action gates and links. Ordinary non-Windows source verification does not establish Windows or live-client runtime behavior.
