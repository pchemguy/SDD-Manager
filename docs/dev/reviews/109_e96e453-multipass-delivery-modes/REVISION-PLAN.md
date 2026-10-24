# Revision plan: strict and flexible multipass delivery

## Campaign and authority

- Campaign: **109_e96e453**; directory: docs/dev/reviews/109_e96e453-multipass-delivery-modes/.
- Starting baseline and full branch-off: `e96e4536c399fe0c8cd03675b244d147ca4d78d3`.
- Working branch: revision/109_e96e453-multipass-delivery-modes; creation parent, eventual integration and return target: main on origin, pchemguy/SDD-Manager.
- Human request: open a revision campaign defining strict multipass by default and flexible multipass only with explicit permission, allowing small changes fitting earlier scope to enter the corresponding phase/task range.
- State: **Open; planned, not executed.** This checkpoint opens and publishes the campaign plan; source revision and closure remain pending. No parent is suspended. Standard reporting.
- Entry evidence: bounded fetch completed; local main and origin/main match the baseline; worktree clean, no unmerged workflow refs, highest allocated identity 108.

This is a directly requested revision, without a fabricated preceding review or finding IDs. The existing [mode owner](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/doc-design-modes.md) defines approval and loop control but does not restrict changes to delivery ranges established by earlier passes. [Delivery planning](../../../../.agents/plugins/sdd-manager/skills/sdd-plan/references/delivery-plan.md) requires bounded increments and rejects a universal one-phase-per-feature rule; the new policy must preserve both obligations.

## Requested behavior and interpretation

**Strict multipass is the default for every multipass variant.** A later documentation pass must not change the phases or tasks established by earlier passes. Preserve their identities, scope, placement, ordering, dependencies and exits, including constituent milestone boundaries. Route added capability into subsequent bounded delivery phases and their tasks. Earlier-pass ranges are retained planning inputs, not disposable drafts to regenerate from the cumulative specification. An early reset protects only ranges that already exist.

**Flexible multipass requires explicit human permission.** A small change that fits the scope of an earlier pass may be integrated into its corresponding phase/task range. Assess semantic fit, dependencies, increment size and verification effects; record the affected range and short rationale. This is limited permission, not unrestricted replanning or permission to enlarge the simplest usable baseline into the full product. Large or poorly fitting additions still need subsequent bounded increments.

These choices govern delivery-plan/task evolution independently of interactive/autodoc approval and human-controlled/autoloop continuation. Autoloop delegation, checkpoint preapproval and a cumulative scope sequence do not imply flexible permission. Retain the effective policy, its source and any scoped override in DOCS_PREPARATION and carry it into planning/task handoffs and reset/resume recovery.

Documentation passes still do not equal implementation phases: one pass may add several bounded phases. Product design and specification continue to describe the complete current scope. Strict preservation concerns earlier delivery commitments, not a ban on revising all product documents or implementing later changes in shared code. Keep preparation policy/history in DOCS_PREPARATION rather than narrating it in PLAN or other product documents. Do not silently change a protected range to resolve a discovered conflict; report its concrete effect and obtain the needed scoped direction. Neither policy authorizes rewriting completed implementation evidence or reopening completed work outside its existing amendment procedure.

## Ordered revisions

| Action | Outcome and bounded owners | Dependency | Recheck |
| --- | --- | --- | --- |
| A-001 | Define strict/flexible selection and authority in the existing doc-design mode reference; integrate retention and reset/resume behavior without another workflow, checkpoint or reference file. | Requested policy | Omitted selection is strict; explicit flexible permission is recovered with its scope; autoloop alone remains strict. |
| A-002 | Carry policy into delivery planning, task derivation and their relevant reviews through concise routing to the canonical rule. Preserve prior ranges in strict mode; bound eligible amendments in flexible mode. | A-001 | Compare prior and new PLAN/TASKS ranges; check IDs, scope, dependencies, exits and milestone associations; reject silent regeneration or retroactive completion edits. |
| A-003 | Add concise control retention to DOCS_PREPARATION_TEMPLATE; align existing PLUGIN/coordinator and packaged README mode summaries where necessary for prompt discovery. Keep procedural detail in its owner; review the plugin contract before entry edits. | A-001–002 | Effective selection and permission survive a later turn/reset; entry summaries agree without repeating procedures or coupling delivery policy to approval mode. |
| A-004 | Assess focused abstract scenarios, links/style, changed-owner composition and relevant support/publisher/package checks; retain actual evidence in REVISION-REPORT.md during execution. | A-001–003 | Strict small addition stays later; flexible fitting addition enters the named earlier range; flexible large addition stays bounded/later; no permission inferred from autoloop; missing prior ranges and scope conflicts handled honestly. |

## Verification and scope limits

Before source edits, load applicable authoring guidance. Inspect current owners on both sides of the coordinator → planning → task handoff. Select relevant existing assessment cases rather than creating prose-mirroring tests. Run the support suite for coherent instruction changes and publisher/exact-package checks if package sources change. Distinguish static or source-guided assessment from actual consumer, native-Windows, installed-client or hosted workflow acceptance; none is claimed at this opening.

No runtime, authentication, projection schema, fixed DOCS task definition, version, release, installation, demo-prompt or target-project changes are selected. Closed campaign records remain frozen. No new task list, decision journal, per-pass file or mandatory one-pass/one-phase mapping is planned. Revision artifacts stay on this branch; accepted execution will publish/read back each owned commit before further work and integrate only the complete verified authorized boundary by explicit two-parent merge. Opening this campaign does not close or integrate it.
