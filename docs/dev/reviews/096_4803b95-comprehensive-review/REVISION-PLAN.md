# Accepted documentation revision

## Scope and inputs

Campaign 096_4803b95 retains baseline 4803b9518982a31b81ffd4acec863894ebd571a5, working branch revision/096_4803b95-comprehensive-review and main as creation parent/integration/return. The human authorizes planning and execution, followed by a separate patch release. [Review findings](REVIEW-REPORT.md#findings-and-revision-readiness) R-001 and R-002 are accepted; neither requires a product behavior change or new executable task IDs.

## Action A-001 — Correct current documentation

Owner: sdd-docs; sdd-manage owns persistence and integration.

1. Rename the Tetris gameplay-verification row from “Penetrator bonus feature” to “Penetrator feature” (R-001), leaving mechanics and accepted prompt text unchanged.
2. Add a concise root README link to BROWSER_DEV_POLICY.md for browser-based applications and browser extensions (R-002), beside the existing shell-policy guidance. Add no plugin policy reference.
3. Recheck exact source changes, maintained terminology, links, Markdown and package/closed-record preservation; retain the 308 local passes and seven Windows skips as pre-revision evidence. No new runtime tests are needed for these two prose changes; rerun only affected documentation checks.
4. Commit both source edits with the actual revision result and publish/read back before finalization.

## Finalization

Recheck the complete campaign delta and current package invariants. Refresh HANDOFF and index, record both findings verified, publish the final boundary and explicitly merge into refreshed main. Inspect the two parents, merged state, remote containment and clean return; closure freezes campaign records. Then open the separately requested release campaign and bump the actual manifest from 0.15.1 to 0.15.2, subject to verifying no intervening version change.

Preserve all other source, root policies, accepted prompts, existing release notes and closed campaign packages. No implementation, browser rerun, installed-plugin update or release publication is part of A-001. Actual release publication belongs to the next campaign.
