# Token access cleanup revision plan

## Scope and authority

Campaign 085_fd8dec8 branches from fd8dec8e2440601827d6d640b439857451040018 on revision/085_fd8dec8-token-access. Creation parent, integration target and return branch are revision/081_5b2442e-prerelease. The human requests a new campaign removing the token-file ACL machinery, followed by full execution and closure. Parent 081 stays open and suspended.

## Actions

| Action | Delivered scope | Verification |
| --- | --- | --- |
| V-001 | Remove mandatory Windows ACL/identity inspection, parsers, tool dependencies and diagnostics, plus the parallel POSIX ownership/mode gate. Simplify shared token reader callers and align ordinary-file test fixtures, affected utility regressions, workflow guidance and contributor documentation. No optional permission mode or replacement permission-repair procedure. | Observe a meaningful ordinary-readable-token regression failing before implementation; run Git recovery, completion and projection suites, including native local HTTPS transport. Preserve ignored/untracked contained regular-file checks, token format, secret-safe transport/output, destination/context validation and locking. Review current references for dangling requirements. |
| V-002 | Finalize evidence, verify the exact package and explicitly integrate/publish into parent 081 with its suspended handoff restored. | Focused source/doc review, support and publisher checks, links/style, actual committed package contents and frozen-record preservation; prospective merged-state checks, two-parent merge, exact target readback and confirmed clean return. |

## Persistence and limits

Publish/read back the opening/plan and every owned commit before advancing. This is directly accepted focused maintenance; no invented review phase or task IDs. Existing module names may remain where they also describe safe credential handling; remove obsolete behavior and claims rather than introduce a rename migration. Do not change real credential contents, file permissions, Git configuration or unrelated output/lock behavior.

Run local checks and inspect platform-neutral code/Windows CMD workflow definitions. Respect the human's ended GitHub-test wait: no hosted test polling, dispatch or wait is selected, and no fresh native Windows pass is claimed. Passing local checks establish their actual scope only.

Freeze 084 and all earlier closed packages. Close only 085 after its full explicit parent integration/publication/readback and return. Leave 081 open/suspended with release-source/body/package association requiring later refresh; no main merge, release/tag/dispatch, installation, version bump or parent preparation continuation.
