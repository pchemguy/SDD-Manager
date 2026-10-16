# Reviewed source inventory

- Reviewed baseline: `1b74644cb0b97e074cc407086be13b5597620b80`.
- Method: campaign-067 affected paths discovered by Git path diff from `80e175a`, without reading closed campaign contents; current source and necessary adjacent owners selected below.
- Coverage: 44 changed artifacts plus 12 adjacent inputs; 56 selected files.
- Depth: full text for selected Markdown/JSON; changed function and consequential caller/fixture inspection for executable helpers. Formal schema/publisher tests assess manifest conformance.
- Inventory is a review scope, not a claim that any unit has already passed.

| Unit | Artifact | Basis | Depth/state |
| --- | --- | --- | --- |
| U-001 | `.agents/plugins/sdd-manager/assets/AGENTS_TEMPLATE.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-001 | `.agents/plugins/sdd-manager/assets/DOCS_TASKS_TEMPLATE.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-001 | `.agents/plugins/sdd-manager/assets/SKILL_DISCOVERY_PROTOCOL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-001 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-001 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/repository-bootstrap.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-001 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/agent-orientation.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-001 | `.agents/plugins/sdd-manager/skills/sdd-orient/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-design/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-specify/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-plan/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-tasks/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-docs/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-verify/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/document-qc-gates.md` | Adjacent owner/tooling | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-conventions/references/development-document-qc.md` | Adjacent owner/tooling | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-report/references/object-drafts.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-002 | `.agents/plugins/sdd-manager/skills/sdd-report/references/completion-reports.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-forge/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-forge/references/github.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-forge/references/github-docs-preparation.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-forge/references/github-projection.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-forge/references/github-issue-lifecycle.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-forge/references/github-milestone-lifecycle.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/tracking-decision.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/phase-activation.md` | Adjacent owner/tooling | Reviewed: full selected text / consequential interfaces |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-conventions/references/backend-object-lifecycle.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/branch-management.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md` | Adjacent owner/tooling | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/coordination.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/examples.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-004 | `.agents/plugins/sdd-manager/skills/sdd-conventions/references/workflow-identity.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-005 | `.agents/plugins/sdd-manager/PLUGIN.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-005 | `.agents/plugins/sdd-manager/README.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-005 | `docs/dev/CAPABILITY-MAP.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-005 | `docs/dev/PLUGIN-CONTRACT.md` | Changed | Reviewed: full selected text / consequential interfaces |
| U-005 | `README.md` | Adjacent owner/tooling | Reviewed: full selected text / consequential interfaces |
| U-006 | `.github/scripts/release.py` | Changed | Pending |
| U-006 | `.github/tests/test_release.py` | Changed | Pending |
| U-006 | `.github/schemas/plugin.schema.json` | Adjacent owner/tooling | Pending |
| U-006 | `.github/requirements.txt` | Adjacent owner/tooling | Pending |
| U-006 | `acceptance/textstats/tests/test_package_docs.py` | Changed | Pending |
| U-006 | `acceptance/textstats/tests/test_catalog.py` | Adjacent owner/tooling | Pending |
| U-006 | `acceptance/textstats/scripts/core.py` | Adjacent owner/tooling | Pending |
| U-006 | `acceptance/textstats/EXECUTION.md` | Changed | Pending |
| U-006 | `acceptance/textstats/README.md` | Changed | Pending |
| U-006 | `acceptance/textstats/SETUP.md` | Changed | Pending |
| U-006 | `acceptance/textstats/cases/assessor/A-001.json` | Changed | Pending |
| U-006 | `acceptance/textstats/cases/assessor/A-001.md` | Changed | Pending |
| U-006 | `acceptance/textstats/cases/assessor/CHECKPOINTS.md` | Changed | Pending |
| U-006 | `acceptance/textstats/cases/assessor/MAIN-PREPARATION.md` | Changed | Pending |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-manage/references/credentials.md` | Adjacent pre-write authentication interface | Reviewed: full text |
| U-003 | `.agents/plugins/sdd-manager/skills/sdd-conventions/references/hosting-tokens.md` | Adjacent pre-write authentication interface | Reviewed: full text |

| U-004 | `.agents/plugins/sdd-manager/skills/sdd-implement/references/completion-and-checkpoints.md` | Adjacent implementation audit target | Reviewed: task contract, bounded audit and recovery interface |

## Exclusions

No live consumer/provider/installed-client execution, product task implementation, release publication, artwork redesign, unrelated reference audit or source repairs. Closed campaign 067 and older contents remain frozen; retained drafts are not current runtime owners. Credentials and provider bodies are not review inputs.
