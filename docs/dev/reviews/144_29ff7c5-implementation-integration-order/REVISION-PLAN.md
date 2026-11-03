# Implementation integration guidance order

Campaign **144_29ff7c5**, ordinary focused revision opened from main **29ff7c5e8c8665a60e1978234e3054a466e7d99e** on revision/144_29ff7c5-implementation-integration-order. Creation parent and eventual integration target are main; no suspended parent. Campaigns through 143 remain closed/frozen.

## Accepted revision

The human requested a new revision campaign and supplied the exact replacement for sdd-implement/references/completion-and-checkpoints.md, Integrate the completed boundary. Use the four supplied paragraphs verbatim, in their supplied order: workflow/phase gates, feature incorporation, artifact-name release guard, then explicit integration/reporting/stopping. Each paragraph remains one unwrapped line. No separate review stage or new requirement is inferred.

| Action | Work | Acceptance |
| --- | --- | --- |
| V-001 | Replace the selected section body with the human-supplied text. | Exact four-paragraph text/order; all content outside the section unchanged; complete block/link multisets preserved; existing feature-delivery link resolves; whitespace, active record links and closed-record preservation pass. |

## Publication and stop

Commit the verified change with its campaign evidence, publish/read back through the GitHub connector and stop on this revision branch with the campaign open. Closure/main integration, version bump and release remain outside this request. The [revision report](REVISION-REPORT.md) owns actual results and limits.
