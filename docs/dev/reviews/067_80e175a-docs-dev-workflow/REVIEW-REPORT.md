# Template revision review

## Scope and source

- Campaign: `067_80e175a`; starting baseline: `80e175adb3b7a797fedea85e9f69046bfe05298d`.
- Reviewed source: `57551e665c2773c11946555fd814773fc9719280`.
- Focus: the user's AGENTS template revision since `6a32568`, checked against the campaign task template, discovery protocol and current coordinator instructions.
- Criteria: clear entry/loading instructions, correct terminology, section ownership, visible workflow obligations and concise reuse of canonical procedures.
- Evidence: source inspection only. No live agent trial, package validation or workflow execution.
- State: Review complete; recommendations proposed, draft repairs not executed.

## Findings

### R-001 — Correct the workflow name

**Location:** AGENTS_TEMPLATE.md, “Software-driven development” heading and opening sentence. **Priority:** Medium. **Status:** Open.

“Software-driven development” does not name the method provided by SDD Manager. Use “Specification-driven development” and describe the plugin as providing those workflows. Correct the opening grammar at the same time.

**Recheck:** Heading and opening use specification-driven development consistently with the plugin entry and project description.

### R-002 — Require coordinator loading for both plugin sources

**Location:** AGENTS_TEMPLATE.md, opening paragraph. **Priority:** Medium. **Status:** Open.

The paragraph instructs loading PLUGIN/coordinator only for the repository-local alternative. An installed plugin can be available without its coordinator instructions being loaded. Direct agents to load `sdd-manage` for coordinated work regardless of source, then identify the installed-plugin and repository-local loading alternatives. The local PLUGIN path should be explicit. If neither source is available, report that prerequisite rather than assume the workflow has been loaded.

**Suggested opening:**

> This project uses the SDD Manager plugin for specification-driven development. Load its `sdd-manage` coordinator entry before coordinated work. Use the installed plugin when available; otherwise load `.agents/plugins/sdd-manager/PLUGIN.md` and the coordinator entry it references. If neither source is available, report the missing plugin before dependent workflow work.

**Recheck:** Both installation cases reach an actually loaded coordinator; unavailable instructions do not produce an unsupported workflow claim. Repository discovery remains governed by its separate protocol.

### R-003 — Place the continuing obligation outside Initialization

**Location:** AGENTS_TEMPLATE.md, bold instruction under Initialization. **Priority:** Medium. **Status:** Open.

Human checkpoints, Git publication/integration and requested hosted operations apply throughout the workflow. Placing their general obligation under Initialization blurs that section's boundary. “All other workflows” also leaves applicability unclear: the requirement is to follow the selected workflow's obligations, rather than activate every capability.

Retain pronounced emphasis, move the statement into the opening workflow section, and use:

> **Follow the applicable SDD Manager workflows, including human checkpoints, Git publication and integration, and requested GitHub or equivalent backend tracking.**

Initialization can then remain solely the direct discovery-protocol instruction. The later checkpoint/publication/tracking sections supply the consequential reminders.

**Recheck:** Initialization has a single startup responsibility; the emphasized continuing rule remains early and applies across the selected workflow.

### R-004 — Give project-specific maintenance its own location

**Location:** AGENTS_TEMPLATE.md, second paragraph of the opening section. **Priority:** Low; editorial. **Status:** Open.

The instruction to maintain navigation and validated setup/check commands interrupts plugin loading guidance. Move it to a short final “Project guidance” section, where project-specific instructions can later accumulate without expanding the plugin entry paragraph. Preserve its requirement to use established facts.

**Recheck:** Opening is limited to plugin use/loading and the general obligation; project-specific maintenance has a clear destination.

## Composition assessment

Keep the dedicated Initialization, Human checkpoints, Commits and publication, and Requested tracking sections. Their distinct responsibilities support quick scanning. Split the long publication paragraph into general persistence and document-first-approval paragraphs; this is an editorial improvement, not an additional requirement.

The deleted preservation/recovery paragraph is already covered by coordinator and orientation procedures. The removed PLAN/layout distinction, document ownership explanation and native-milestone reminder also remain in their canonical instructions or the DOCS task draft. Their removal from this initial AGENTS template does not by itself require restoring them.

Do not expand the template into a second plugin entry or a copy of the preparation procedure. Retain the human checkpoint, first-approval, publication, integration and requested-tracking reminders because those are the explicitly selected emphases for this template.

## Coverage and limits

- Inspected the complete current AGENTS draft and its user's revision diff.
- Checked that the discovery instruction still links the supplied protocol and that the document-task draft still states first-approval completion and merge-before-milestone closure.
- No changes were supplied to DOCS_TASKS_TEMPLATE.md or SKILL_DISCOVERY_PROTOCOL.md in the pulled revision. They were checked as context, not subjected to a new comprehensive review.
- Four proposed findings: three clarity/terminology corrections and one editorial recommendation. No source repair or template replacement is included in this review checkpoint.
