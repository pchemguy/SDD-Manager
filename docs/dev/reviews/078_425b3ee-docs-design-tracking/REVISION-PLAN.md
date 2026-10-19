# Documentation design tracking revision plan

## Campaign, decisions and scope

- Campaign: 078_425b3ee; starting baseline: 425b3eef464e74bd940d061b07cf103c5bc17d4c.
- Current source: 6d81a9e3b759c88362f6c861e62a8560d54aab7e, the published opening on `revision/078_425b3ee-docs-design-tracking`.
- Creation parent and eventual integration/return target: `main` at the starting baseline. No parent task execution is suspended.
- Owner: sdd-manage, with sdd-forge for hosted mechanics and sdd-report/conventions for retained evidence. [Revision report](REVISION-REPORT.md).
- Human direction: use the demo symptom to improve SDD Manager, rather than change the demo; fix the milestone title to `sdd-docs-main`, remove the milestone's HTML comment, predefine all documentation issue content and provide JSON consumed by the existing projection workflow. The current instruction authorizes finalizing this plan and executing it.
- State: V-001–V-003 executed and verified; authorized closure finalized at the main integration checkpoint. The revision report retains merged-state results, and Git/readback establishes the explicit merge and its publication. This is a directly accepted amendment; no separate review campaign or invented findings are required.

## Resulting contract

The logical preparation scope and CLI operation remain `docs-main`. Its native GitHub milestone has the exact title `sdd-docs-main` and a predefined plain-text description with no HTML marker. One bundled `assets/DOCS_TRACKING_TEMPLATE.json` defines that milestone and all nine ordered issue briefs, including stable DOCS IDs, exact names, dependencies, prerequisites, scope, acceptance and useful source descriptions. It contains no repository identity, credentials, runtime eligibility, progress or generated provider handles.

`assets/DOCS_TASKS_TEMPLATE.md` remains the human-readable local task owner. The JSON supplies hosted content; it is not another completion registry. The utility checks the source's nine IDs, names and order against the definitions and refuses disagreement. Standard docs-main drafting binds the real repository and source hash, copies the predefined content and leaves all runtime eligibility assertions false. Phase drafting still leaves project-specific semantics and dependencies to the agent. A resumed canonical DOCS_TASKS may supply actual source/completion evidence without regenerating or overwriting it; semantic customization that conflicts with standard definitions returns to the backend and coordinator.

The existing JSON request envelope, `--check`, protected credential, pagination, uncertain-write recovery, local locking and pre-write gate remain in force. The agent reviews outgoing content and establishes actual readiness; predefined text does not approve future documents. Issue identity/scope markers remain machine metadata under the existing issue lifecycle. Milestone identity uses the exact fixed title, with retained numeric associations and complete lookup. Existing conflicting preparation objects block creation rather than cause duplicates or automatic renaming.

## Ordered revisions

| Action | Outcome and affected owners | Dependencies | Objective checks |
| --- | --- | --- | --- |
| V-001 | Bundle complete JSON definitions; consume them in projection input/drafting/validation/rendering; enforce the fixed native milestone identity in lookup and transport; cover asset changes in native CI and package snapshots. Targets: assets, forge scripts, projection tests, affected package test and CI paths. | Published plan and current opening. | A generated docs request is content-complete with all flags false; unmodified definitions pass local preview and synthetic create/reuse/readback; altered/missing/reordered definitions, source mismatch and existing conflicting/duplicate milestones fail without writes. All nine briefs preserve real first-approval/QC/publication boundaries; the milestone has the exact title and no HTML. Phase behavior, completion capability limits, CRLF/native paths and outside-repository pre-write output stay covered. |
| V-002 | Integrate the fixed definition source into manager/forge handoffs, local task-template navigation, CLI/input docs, current package summaries and source acceptance guidance. Keep lifecycle detail with its existing owner and JSON/schema detail with input authoring; add no thin reference fragments. | V-001 published/read back. | All current native-title references agree; logical `docs-main` remains explicit where used as CLI/key. Standard docs content/dependencies require no agent invention. Other clients consume the same JSON. Resume/conflict handling, first-approval closure and merge-before-milestone closure remain coherent. No demo hosted objects change. |
| V-003 | Run coupled regressions, package/content checks and relevant native matrix inspection; finalize action evidence and HANDOFF on the campaign branch. | V-002 published/read back. | Projection and completion Node suites; support and publisher suites; affected current links/style and package inclusion; Windows CMD/Linux Node 22/24 matrix for the changed runtime; full campaign path diff excludes all earlier closed records. Distinguish source/synthetic/native evidence from live provider and installed-agent behavior. |

## Persistence, evidence and stop

Publish/read back this plan checkpoint before execution. For each coherent action, retain actual changes, checks, limits and disposition in the existing report, then commit/push/read back before advancing. Do not create a root TASKS owner or task IDs from action IDs. Preserve the opening's historical access observations; later Git readback now establishes its successful publication.

Only SDD Manager source, tests/CI, current supporting documentation, this active campaign and current HANDOFF/index are within scope. Existing closed packages remain byte-for-byte unchanged. No live tracking mutation, demo repair, release or installation is selected. Execution stopped on the verified published revision branch as requested. The human now authorizes closing this campaign: finalize its records, publish/read back the final branch checkpoint, explicitly merge into its recorded main parent, verify/publish/read back that target and return on main. Stop after campaign closure without starting another workflow.
