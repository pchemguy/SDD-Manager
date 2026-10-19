# Documentation design tracking revision

## Campaign and opening

- Campaign: 078_425b3ee; opened 2026-10-19.
- Full starting baseline/branch-off: 425b3eef464e74bd940d061b07cf103c5bc17d4c.
- Working/publication branch: revision/078_425b3ee-docs-design-tracking on origin, pchemguy/SDD-Manager.
- Creation parent, eventual integration and return target: main at the starting baseline above.
- Human instruction: “Open a revision on docs design tracking.”
- State: Open locally; publication pending. Campaign initialization only. Specific concerns, accepted changes and execution scope remain to be established.

## Intended concern and boundaries

The topic is documentation design/preparation tracking in SDD Manager. Relevant existing owners include the coordinator's [main preparation](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md), [tracking selection](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/tracking-decision.md) and forge's [documentation tracking lifecycle](../../../../.agents/plugins/sdd-manager/skills/sdd-forge/references/github-docs-preparation.md), with DOCS_TASKS and docs-main as possible affected interfaces. These are navigation candidates, not a completed assessment or a decision about the desired revision.

Opening authorizes this branch, record and current navigation/handoff, with publication under standing repository authority. No plugin behavior, template, script, tracked task status or hosted label/milestone/issue is changed. No review findings, revision plan or execution results are invented before their scope is defined. Keep references bounded by workflow responsibility and use abstract illustrative examples if later needed. Earlier closed campaign packages remain frozen and outside routine content loading/validation.

## Observed setup and publication

The selected checkout was clean on main at the full baseline. Repository-wide path/ref discovery and complete connected GitHub branch enumeration found the highest reserved sequence 077 and no 078 collision. Connected GitHub exact-ref readback confirms main still points to the baseline. Existing repository skill discovery and unchanged governing workflow instructions are reused; sdd-manage coordinates, with sdd-report/conventions supplying record and identity rules. Reporting: Standard after setup.

Shell Git lookup was bounded and timed out; a separate unauthenticated HTTPS reachability probe also timed out, with no configured credential helper observed. No credential replacement or persistent authentication configuration was attempted. The connected GitHub service remains usable. Connected Git-data tree creation was attempted after native tree/diff checks and explicitly rejected with HTTP 403, Resource not accessible by integration. No hosted branch was created through that mechanism. The opening is retained on its local revision branch; ordinary Git publication/readback remains pending through the established destination. Preserve the commit and resolve actual transport/access before advancing repository work. This does not change SDD Manager workflow source or assume permission can be repaired by replacing credentials.

## Next boundary

Retain this open campaign, finish its pending publication/readback when access permits, and await the human's concrete concerns or requested assessment. Then establish the affected scope and any needed revision plan before dependent repairs. This opening does not authorize implementation, integration, closure, a product task range or a release. Git provides the eventual opening commit identity; this record cannot contain its own future SHA or prove its own later publication.

## Accepted continuation and finalized plan

The opening commit is 6d81a9e3b759c88362f6c861e62a8560d54aab7e. GitHub connectivity recovered; ordinary Git push and exact remote-ref readback verified that commit on the recorded campaign branch. The earlier publication-pending statements above describe the opening checkpoint, not the current transport state.

The human's documentation-tracking direction and current “Finalize revision plan and execute” instruction establish the [revision plan](REVISION-PLAN.md): fixed `sdd-docs-main` title and plain-text milestone description, nine predefined issue definitions in bundled JSON, existing-script consumption, workflow documentation and verification. Source inspection at the opening commit confirms `github-docs-preparation.md` and `projection-input.mjs` currently specify/render `docs-main` with a milestone HTML marker, while standard documentation briefs/dependencies are still agent-authored. This is source evidence; no demo object has been modified or independently verified for this campaign.

Execute V-001–V-003 after this plan checkpoint is published. Keep the campaign open on its revision branch at completion; no campaign merge, release or demo tracking operation is selected.

## Revision execution evidence

### V-001 — Predefined content and enforced projection

Implemented the bundled `assets/DOCS_TRACKING_TEMPLATE.json`: one fixed milestone and nine complete ordered briefs, with explicit task dependencies and first-approval/QC/publication conditions. Docs drafting binds the actual repository/source and copies these fields with false eligibility. Validation rejects changed content and source-name/order disagreement. Phase semantics remain agent-authored. The native milestone is exactly `sdd-docs-main`, with no milestone HTML marker. Existing same-identity titles/markers are conflict candidates, preventing duplicate creation; the utility does not rename or overwrite them.

Updated bounded transport validation, actual package-snapshot coverage and native CI path triggers for both definition assets. New contracts exercise complete drafts, preview without a credential, resumed checked/CRLF sources, content/source disagreement, fixed title and clean description, exact reuse and conflicting/duplicate existing identities.

Observed on Linux, Node v24.19.0 and Python 3.12.14:

- `node --test tests/forge-project.test.mjs tests/forge-close.test.mjs`: 77 passed, zero failures/skips; final projection-only rerun after the last code adjustment: 38 passed.
- `python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats`: 139 passed, including exact definition-asset snapshot bytes and dirty/pinned separation.
- `python -m unittest discover -s .github/tests`: 37 passed; declared jsonschema 4.26.0 is installed.
- `git diff --check`: passed. Source/fixture tests used synthetic provider data; no live tracking mutation or installed-client test occurred. Native Windows/Node 22 matrix evidence remains pending until this action is published.

V-001 is locally verified; this action commit and its publication are recovered from Git before V-002 begins. Plan checkpoint 0b70980a3045b276a814e203982d0600f0772b1e was pushed and verified by exact branch-ref readback.

#### Native CI recheck and fixture correction

V-001 commit 9be2b8632a762102d7b1ed6674bca904275acaa3 was pushed/read back before documentation integration. [Completion run 39219422135](https://github.com/pchemguy/SDD-Manager/actions/runs/39219422135) passed. [Projection run 39219422136](https://github.com/pchemguy/SDD-Manager/actions/runs/39219422136) passed both Linux jobs but failed both Windows jobs in two new CRLF fixtures. Windows job 117950962345 reports `unsupported_source_format` at the resumed-source fixtures: they converted already-CRLF checkout text a second time, producing CR-CR-LF. A local reproduction confirms canonical CRLF parses all nine tasks and double conversion fails. Production parsing is unchanged.

Corrected both fixture conversions to normalize either LF or CRLF into one CRLF. `node --test --test-name-pattern='docs content|native docs draft' tests/forge-project.test.mjs` passes both affected tests locally. This is a V-001 verification correction before V-002 is committed; owned documentation changes remain separate and uncommitted. Native matrix success remains pending until the correction is published and observed.

Correction commit bac4b95154fd479bb7c202b9fd16fe0054360016 is pushed and verified by exact branch-ref readback. Its [projection workflow 39220066956](https://github.com/pchemguy/SDD-Manager/actions/runs/39220066956) now reports completed/success; final verification will inspect job-level results and the integrated documentation candidate.

### V-002 — Workflow and documentation integration

Updated the canonical main-preparation and GitHub lifecycle owners to consume the same definition JSON before target writes, retaining actual eligibility, source review, first approvals and merge-before-milestone closure. The input-authoring guide owns definition/envelope fields, fixed-content validation, source conflict/resume behavior and the distinction between predefined documentation dependencies and agent-authored implementation dependencies. The existing CLI guide covers title, runtime assets and conflict/readback behavior. No extra reference fragment was created.

Aligned the package entry, manager/forge entries, backend route, shared lifecycle/identity summaries, project guidance and DOCS task templates, README/projection diagrams, completion-report guidance, source plugin contract and assessor expectations. Native-title mentions use `sdd-docs-main`; logical CLI/request kind and internal parent ID remain `docs-main`. Issue metadata remains distinct from the plain-text milestone description. Other authenticated clients consume the same predefined fields. Current skill capability metadata remains appropriate; no client presentation or installation change is selected.

Observed checks on the changed current documentation:

- Seven selected documentation/illustrative projection contracts passed with `node --test --test-name-pattern='docs|documented illustrative' tests/forge-project.test.mjs`.
- Checked 358 local links across 22 changed Markdown documents: paths/anchors exist and packaged links remain inside the package. Heading separation, changed JSON parsing and `git diff --check` passed. Inspected the changed lists/examples and owning handoffs for coherent scope and gates.
- Current definitions carry no repository-specific game choices or target links to nonexistent documents. All earlier closed campaign packages remain outside the edit/check scope. No live preparation objects were changed.

V-002 is ready for its action commit/publication. V-003 retains integrated package/regression/native checks and the final open-campaign checkpoint.

### V-003 — Integrated verification and open-campaign checkpoint

V-002 commit and tested source: 03dbab90c5ae7b8a616d65d1029a6199e986d300. Its push and exact remote-ref readback were verified before this action. All accepted actions are implemented and verified; campaign 078 remains **open**, with explicit closure/integration as the next human boundary. Main remains at the recorded starting baseline. No merge, release, installation or demo tracking mutation occurred.

| Check | Observed result at the integrated candidate |
| --- | --- |
| Local projection/completion runtime | `node --test tests/forge-project.test.mjs tests/forge-close.test.mjs`: 77 passed; zero failures, cancellations or skips, Linux Node v24.19.0. |
| Support suite | `python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats`: 139 passed, Python 3.12.14. |
| Publisher suite | `python -m unittest discover -s .github/tests`: 37 passed; declared jsonschema 4.26.0 installed. |
| [Projection matrix 39220479512](https://github.com/pchemguy/SDD-Manager/actions/runs/39220479512) | Job-level API readback: Linux Node 22/24 and Windows CMD Node 22/24 all completed/success. |
| [Completion matrix 39220479489](https://github.com/pchemguy/SDD-Manager/actions/runs/39220479489) | Job-level API readback: Linux Node 22/24 and Windows CMD Node 22/24 all completed/success. |
| Exact committed package | Pinned offline manifest schema passed. Built and inspected all 152 package files, including the definition JSON, 15 skill entries and 78 references; development/acceptance/test files remain excluded. Every archive member equals its committed Git blob. |
| Reproducible package | Two independent archives of the candidate are byte-identical; SHA-256 `bc41f5de78802772efa5fd5600ecbc668158baf300b0033897e5d31224613ec0`. Temporary verification artifacts were not published as a release. |
| Scope and composition | Full baseline-to-candidate diff contains 35 paths, with no earlier closed campaign or feature package changes. Current links/anchors, package containment, heading/list/code-block composition and whitespace checks pass. Existing lifecycle and input-authoring references retain separate cohesive responsibilities; no new reference fragment. |

Source review of both coordinator/backend handoffs confirms the K-04/K-15 distinctions: tracking selection precedes enabled projection, verified projection precedes target writes, and a decline/resumed policy is preserved. Fixed content/false flags do not accept future documents or override pending human decisions. DOCS first approvals remain separate from current validity, and final issue completion precedes the published documentation merge and milestone closure. Conflicting source/object identities block rather than cause duplicate creation or source overwrite. These are inspected-source conclusions, not live consumer observations.

Final action changes only this active campaign's status/evidence, index and HANDOFF. The verified package/runtime bytes are unchanged from the candidate above; Git recovers the final evidence commit and subsequent push/readback. Earlier access and failed-CI observations remain retained with their actual corrections and rechecks. No accepted action remains unresolved. Live provider tracking mutation and installed-agent behavior were not exercised; synthetic/native contracts and source/package verification establish only their stated scope.
