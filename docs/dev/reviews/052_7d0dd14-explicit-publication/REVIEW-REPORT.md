# Commit-step publication clarity review

## Campaign and scope

- Campaign: `052_7d0dd14`; baseline: `7d0dd1422bb399f46d9ea30f5381e5e956bc1934`.
- Working branch: `revision/052_7d0dd14-explicit-publication`; target: `main`.
- Human requested persisting the preceding read-only audit, planning and executing remediation. Current source was inspected; no runtime compliance was tested.

## Assessment

The canonical per-commit publication rule requires every workflow-owned commit to be pushed and remotely verified before further work or another commit, including direct focused calls. Task closing steps, review units/actions, steering, merges and release commits already state the push/readback boundary explicitly. User-directed local-only/deferred publication remains a scoped exception. The issue is local clarity, not an absent global obligation.

### R-001 — Make document completion publication explicit

Priority: medium; status: accepted for revision.

The preimplementation paragraph in sdd-design, sdd-specify, sdd-plan and sdd-tasks says Commit project documents and required QC reports there, then discusses a later default-branch merge. The local document commit should name its own push/readback before handoff rather than leave this implicit in linked preparation/shared policy.

### R-002 — Make PROJECT and human-review persistence explicit

Priority: medium; status: accepted for revision.

Project-brief Create or revise step 5 says persist the reviewable artifact; human-document-review step 1 similarly persists before presentation. Explicitly require commit, push and remote containment at this completed-document boundary, before presentation/handing off. Preserve the distinct pending human acceptance gate and local-only exception; successful publication does not accept the document.

### R-003 — Make orientation-checkpoint publication explicit

Priority: low; status: accepted for revision.

Agent-orientation Preserve and reconcile step 4 persists affected guidance with its owning checkpoint without naming publication locally. Keep orientation in that same owned checkpoint and make its push/readback explicit, without creating an extra administrative commit.

## Preservation and proposed correction

Use one concise local instruction: commit, push and verify remote containment before handing off or advancing. Link canonical per-commit policy for scoped exceptions/recovery. Do not copy the full policy into every step or change commit ownership, authorization, task atomicity, human decisions or branch eligibility. Existing explicit boundaries remain unchanged. Draft-only reporting, read-only checks and ignored release-note preparation must not acquire unwanted commits/pushes.

## Evidence and limits

Inspected canonical Git publication, coordinator/PLUGIN rules, artifact owners, PROJECT/human review, orientation, task/review/steering/integration and release ownership. Text searches discovered candidates; commit metadata/code examples were not treated as commit instructions. Closed records were not current-validity targets. No files were changed by the preceding audit; this record persists its findings. Execution is separately authorized in the same current request.
