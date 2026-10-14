# Coordinator contract revision plan

Campaign **060_ee7d54e**; nested under **059_937ec6c**. Starting baseline: `ee7d54ef5f8516cfcf6232366929e3eb64e5e3ab`; opening checkpoint: `1499773494f91f7504b1e974516b35e2b3737d91`. [Revision report](REVISION-REPORT.md). Branch: `revision/060_ee7d54e-nested-revision`; integration/return target: `revision/059_937ec6c-coordinator-entry-review`.

## Accepted scope

The human requested COORDINATOR-CONTRACT.md within this nested campaign. Create `docs/dev/COORDINATOR-CONTRACT.md`, titled “sdd-manage development contract,” using the parent review's proposed entry/module responsibility boundary and review program. It is source-only maintainer guidance, not a packaged runtime dependency or implementation of parent findings. Coordinator entry and references remain unchanged; no merge/closure selected.

## V-001 — Contract, discoverability and verification

Define purpose, coordinator responsibilities, essential entry gates, conditional module/skill ownership, recommended organization, composition/duplication review method and targeted entry/continuation/recovery contrasts. Preserve the distinction from PLUGIN-CONTRACT: the coordinator may own canonical orchestration guidance. Use existing owner links and scenarios; no new operational gate, size quota, workflow registry or duplicate procedure manual.

Link the contract from CAPABILITY-MAP's source-development navigation and root development AGENTS.md for future coordinator-entry/module-boundary edits. README already routes contributors to the capability map; no human workflow claim changes. Record actual changes and checks in this campaign's revision report/index. Check links/anchors, Markdown separation, claim/source alignment, package exclusion and unchanged coordinator/closed records. Full suites and live acceptance are unnecessary for this source-only documentation change. Commit/push/read back the result; leave child open and parent suspended.
