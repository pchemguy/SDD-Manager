# Cross-agent continuity review plan

## Campaign and objective

- Campaign: `071_03b8d6c`; baseline `03b8d6c9e06f22bad62a00f53190e99f90386295`.
- Working branch/directory: `revision/071_03b8d6c-portability-review` / `docs/dev/reviews/071_03b8d6c-portability-review/`.
- Target: main, with no integration selected for this review.
- Request: assess whether another agent can continue an SDD project by reading/following AGENTS.md, with all necessary project context preserved in the repository; consider a handoff file.
- Scope: focused source review across startup, preparation, execution, checkpoint decisions, tracking, campaign/feature continuity and evidence ownership. Source/plugin changes and live acceptance are not authorized by this review request.
- [Review report](REVIEW-REPORT.md) records findings and recommendations. Keep the campaign open after publishing the assessment.

## Review questions

1. What can a receiver derive from Git, governing documents, task lists and retained reports?
2. Which human decisions, scope limits or pending operations cannot be reconstructed from those artifacts alone? Where are they required to be persisted and read?
3. Does AGENTS.md provide a complete startup path through plugin access, current workflow discovery, state validation and the next eligible owner?
4. What survives the same worktree, a clean checkout of the active branch, and a clone starting on the default branch? What happens with unpublished or concurrent work?
5. Would one maintained handoff record close the gaps without duplicating canonical documents, task state or hosted truth? What lifecycle and recovery rules would it need?

## Units and evidence

| Unit | Scope and owners | Outputs and checks |
| --- | --- | --- |
| U-001 | Target AGENTS/discovery templates, PLUGIN/coordinator/orientation, main preparation, implementation, human decisions and tracking. | Located inventory of recoverable versus chat/local-only context; findings with consequence, confidence and owner. Inspect both producer and receiver instructions. |
| U-002 | Branch/campaign/feature return, pending hosted/release operations, acceptance coverage and handoff alternatives. | Assess contrasts across stages/transfers/failure modes; define a bounded proposed continuity contract and correction queue, with unresolved choices explicit. |

Use current source and focused Agent Package Author portability/coordination criteria. Inventory inspected paths and depth in the report. Exclude frozen campaign contents, AI transcripts, unrelated content review, standards conformance, credential values and provider/client mutations. Identity/path discovery does not load old records. Inspect supporting acceptance contracts only for whether they cover this requested continuity boundary; do not run a live trial or claim consumer behavior from source inspection.

Representative contrasts include: preparation before/after approval, scoped future preapproval, bounded implementation, tracking declined or pending, interrupted owned/unrelated work, nested return without parent resumption, feature ownership transfer, uncertain hosted effects, missing/stale handoff, wrong branch/plugin source, parallel workflows, and post-completion cleanup. Distinguish safe blocking from successful autonomous continuation.

## Persistence and stopping

Commit/push this opening, then update and publish the report after each unit. Verify remote containment before further work or another commit. Check Markdown/links and the complete diff's allowed paths; retain every prior closed campaign unchanged. No runtime source changes are planned, so unrelated test-suite success is not substituted for this source review or cross-agent acceptance.

Return the published report and practical recommendation. Stop before implementing a handoff artifact/template or revising plugin instructions. No merge, campaign closure or release is selected.
