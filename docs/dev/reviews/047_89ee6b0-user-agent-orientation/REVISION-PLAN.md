# User-oriented agent entry revision plan

## Campaign and scope

- Campaign: `047_89ee6b0`; directory: `047_89ee6b0-user-agent-orientation`.
- Starting baseline: `89ee6b0584b448630509bc3433f3f386aac01015`.
- Working branch: `revision/047_89ee6b0-user-agent-orientation`; target: `main`.
- Authorization: human requested opening, planning and executing this focused revision on 2026-10-12. No separate review stage is required.
- Objective: make root AGENTS.md primarily an entry for using the plugin; relocate source verification and acceptance guidance to acceptance/AGENTS.md and make it discoverable from README.

## Accepted revision

| Action | Outcome and owners | Verification |
| --- | --- | --- |
| V-001 | Rewrite root AGENTS.md for package users; add acceptance/AGENTS.md for source verification and acceptance; align README and capability-map navigation. Preserve TextStats coordinator instructions and packaging boundaries. | Root contains no Python/unittest or source test commands; moved commands and prerequisites remain complete; relative source links and packaged links resolve; source-only entry is excluded from the archive; prior closed records remain unchanged. |

## Execution and persistence

Publish this opening/plan checkpoint before edits. Commit and publish the coupled document relocation with its revision report and scoped evidence. Verify the full delta and explicit two-parent merge into refreshed main, publish/read back the target, then stop. This repository has no owning executable TASKS for this amendment; V-001 is a campaign action, not a task ID.

## Limits

Documentation and instruction ownership only. Preserve runtime skill behavior, manifest, package inclusion rules and existing test/coordinator semantics. Do not run a live consumer/client/provider campaign. Use meaningful documentation and native package checks; inherited support-suite instructions remain available in the source-only entry.
