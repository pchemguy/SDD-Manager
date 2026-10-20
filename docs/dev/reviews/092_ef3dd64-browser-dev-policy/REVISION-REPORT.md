# External browser policy revision campaign

## Opening

Campaign 092_ef3dd64 opens from published/read-back ef3dd64d322a5035bb65630a6a65994905136dec on parent revision/081_5b2442e-prerelease. Working branch revision/092_ef3dd64-browser-dev-policy, returning eventually to the same parent. The clean baseline, maximum 091 and collision-free allocation are verified. The [plan](REVISION-PLAN.md) owns selected actions and the [critical review](REVIEW-REPORT.md) records A-001 findings and technical-source limits.

The human selects root-policy promotion and generic project-policy handling, then adds critical review. Publish this opening before source changes; implement A-002 and verify A-003, retaining unselected review recommendations. Leave the child open/unmerged and parent 081 suspended. Version 0.15.1 and the parent's historical release-source/body/package association are not refreshed.

## A-001–A-002 — Review and selected promotion

Opening b602fa601d1d59c7be051762b218f87e63869d7f is published/read back. The critical review covers content and size, with five located findings and bounded checks of the policy's linked official documentation. The baseline has 1,226 words/9,411 bytes: one cohesive file is appropriate, but repetition and generic detail warrant compression. Review recommendations beyond selected externalization remain unimplemented.

The policy now lives at root [BROWSER_DEV_POLICY.md](../../../../BROWSER_DEV_POLICY.md), with concise root AGENTS guidance. Only five standalone text substitutions are made: title, apply trigger, two generic user-escalation references and removal of the unavailable recovery-module dependency. Substantive browser restrictions, examples and evidence limits are preserved. The promoted text has 1,225 words/9,360 bytes; it is not presented as the recommended shortening.

SDD no longer contains or references the policy or its fixed engine/isolation rules. sdd-implement explicitly discovers/follows project-defined browser development policies before selecting or using facilities, with aligned startup/recovery guidance. Testing and verification retain contract-driven coverage and evidence limits without a mandatory framework, browser matrix or policy filename. The source contract reflects external ownership. Package exclusion assertions are aligned; runtime scripts, manifest, CI, Windows policy and earlier closed records are unchanged.

## A-003 — Verification checkpoint

On Linux/Python 3.12.14, 139 support tests pass. The initial publisher invocation fails because its declared jsonschema dependency is absent (20 errors); this is an environment prerequisite, not a policy/source failure. Installing the declared jsonschema 4.26.0 requirement in a task-owned temporary virtual environment resolves it, and all 37 publisher tests pass. No system toolchain or /pyenv content is changed.

Source checks confirm exactly the selected standalone substitutions, no packaged policy references, preserved runtime/manifest/Windows policy and frozen campaign packages. Scoped Markdown/whitespace checks pass. Publish the source, verify its exact 153-file package, then publish final evidence and stop open/unmerged. No browser execution, live agent behavior, release refresh or installation is claimed.

## Verified source and stopping boundary

Source 5775a4e9045669380a2cf7fd721f71a5b68099e3 is published and exactly read back with confirmed publisher cleanup and exit 0. Its version 0.15.1 package validates against the pinned schema, contains exactly 153 expected files and rebuilds byte-identically. The 456805-byte archive has SHA-256 748499dab4e407b6db7df889c72614c33b385110088656915809e680a6939dc3, tied only to that exact source.

The archive excludes both external root policies and the former browser-policy module, contains no fixed browser-policy references and passes five extracted CLI help smokes. Scoped checks pass 424 local targets and 43 maintained fragments across 15 changed Markdown files, including 77 package-contained links. Runtime, manifest, CI, Windows policy and closed records are unchanged. No browser/framework installation, native/client trial, release-input refresh or plugin installation is claimed.

A-001–A-003 are verified for the selected promotion/review. F-001 is resolved and F-004's title/trigger portion is addressed; F-002/F-003 and the remaining composition/size recommendations are retained rather than applied without selection. Publish/read back this evidence checkpoint and stop on revision/092_ef3dd64-browser-dev-policy with campaign 092 open/unmerged and parent 081 suspended.

## A-004 — Selected policy and text revision

After published checkpoint 4ecc58cbca260e4f751eac19557157cb27b53c2b, the human authorizes continued text revision, specifically repetition, environment eligibility, Windows example execution and mandatory/optional separation. The human also changes browser selection: Chromium has priority when unspecified, Firefox is included and project documents may define different browser priorities/requirements during design. The existing plan records that accepted delta before editing.

The root policy now contains 762 words/5,766 bytes versus 1,225 words/9,360 bytes after promotion, about 38% fewer words. Binding selection/isolation rules precede a concise setup sequence, conditional Playwright guidance and task-selected verification/recovery. Redundant advice and command blocks are removed; setup sequences must use temporary shell files with failure handling and cannot continue past failed prerequisites. Eligibility requires an assigned binary location, known compatible origin/version and isolated state; opaque facilities are unavailable until established. Root AGENTS reflects the new defaults. No plugin or other policy is edited.

| Source contrast | Assessed instruction |
| --- | --- |
| Browser needed; none specified | Prioritize Chromium and include Firefox in the default environment; individual checks follow actual acceptance/matrix. |
| Project explicitly selects Firefox | Follow the documented selection rather than forcing Chromium priority. |
| Project specifies another browser | Its documented priority/requirement governs browser choice; dedicated isolation remains required. |
| Another browser is merely available | It remains prohibited by default; availability is not a project requirement. |
| Document planning or unrelated CLI task | No browser installation is required. |
| Tool/remote environment eligibility unknown | Establish binary identity, assignment and state isolation, or use another facility/report the affected browser work blocked. |
| Windows or other multi-command setup | Use a temporary shell file under the host policy, with explicit failure handling and no dependent tests after a failed prerequisite. |
| Required native/rendering evidence absent | Keep that acceptance claim blocked; preserve useful modeled/optional evidence separately. |

These eight contrasts are source assessments, not live-agent observations. F-002–F-005 are resolved in the critical review. The plugin, tests, publisher, CI and Windows policy are unchanged from the published A-001–A-003 checkpoint; its 176 test passes and exact 153-file package evidence retain their original source and are not claimed as fresh runs. Scoped documentation, policy consistency, preservation and whitespace checks verify this text-only delta. Publish/read back the revision and stop with campaign 092 open/unmerged and parent 081 suspended.

## A-005 — Closure selected

The human now requests closure. Published/read-back A-004 source b1e39e1a6604c8f1e6b2befa890c18b314ee27a0 completes all five focused review findings and the selected browser defaults. Inspection of the complete incoming difference confirms the accepted scope and unchanged earlier closed records. Fresh supervised remote readback confirms receiving parent revision/081_5b2442e-prerelease at ef3dd64d322a5035bb65630a6a65994905136dec with confirmed cleanup; local target agrees and the worktree is clean.

Publish this finalization checkpoint, then integrate the complete pinned child through an explicit two-parent merge. Check the merged support/publisher suites and scoped documentation/preservation; verify an exact committed child package separately. Record actual results and both parent tips in the containing integration evidence. Verified target publication and clean return establish closure. Keep the branch and campaign records; parent 081 remains open/suspended, with historical release inputs and no installation or release action.
