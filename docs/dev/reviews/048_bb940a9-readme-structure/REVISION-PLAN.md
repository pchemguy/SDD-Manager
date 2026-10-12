# README structure revision plan

## Campaign and authority

- Campaign: `048_bb940a9`; baseline: `bb940a97bfa71a9791000fcc89557115be5861e6`.
- Working branch: `revision/048_bb940a9-readme-structure`; target: `main`.
- Human request: open campaign, first remove the ChatGPT website approvals and host automatic review section, then review remaining README for duplication, overlap and overload, including possible splits/merges.
- Evidence mode: repository text and editorial assessment; no independent research or external fact-checking.

## Ordered scope

| Action | Authorized work | Completion |
| --- | --- | --- |
| V-001 | Remove the complete named README section, preserving all remaining text. | Exact deletion, whitespace check, committed/published before review. |
| U-001 | Review remaining README section purposes, hierarchy, reader flow, repeated rules and mixed audiences; recommend bounded restructuring with located findings and a proposed outline. | Retained REVIEW-REPORT.md and concise chat findings, committed/published. |

Further restructuring is proposed only and requires acceptance before execution. Do not merge this open campaign merely to publish its findings. Preserve runtime skills, acceptance material and closed records.

## Immediate whitespace amendment

The human additionally requested checking and fixing multiple blank lines without deferral. V-002 collapses consecutive empty lines in the remaining README outside fenced blocks, preserving all text, diagrams and code. This cleanup is authorized now; the structural recommendations remain proposed.

## Expanded plugin-entry revision — 2026-10-12

The human requested planning a second revision building on this open campaign: split README.md into human-facing README.md and agent-facing PLUGIN.md, integrate the current root AGENTS.md content into PLUGIN.md, and replace that root file. Retain campaign identity, original opening `e79375d22ebf18d5d81c41be4a3a15ea9060083e` and completed V-001/V-002. Planning source: `19cf69d084fbd299e869f155115fb55b070c1536`. This expands the proposed revision scope; implementation of V-003–V-005 waits for acceptance.

### Document ownership decisions

| Document | Audience and canonical job | Content and boundaries |
| --- | --- | --- |
| README.md | Humans discovering and using SDD Manager | Purpose, setup/seed/demo requests, core workflow explanations and human-facing composite-workflow diagrams, concise operations/examples, package/use status, skill overview or reference navigation, license and related projects. Link PLUGIN.md for agent routing and operational detail. |
| PLUGIN.md | Agents using the composed plugin | Plugin entry, skill routing, definition/selection of composite and hybrid workflows, prerequisites and handoff/stop rules, project instruction precedence and persistence. Integrate root AGENTS.md's useful instructions. Link selected SKILL.md and owning references progressively instead of copying full manuals. |
| acceptance/TEXTSTATS.md | Humans locating TextStats testing and evidence | Small source-only replacement for README's Testing with TextStats section: purpose, coordinator entry, existing test-repository list, qualified historical evidence and current evidence limits; link the detailed TextStats README. |
| acceptance/AGENTS.md | Agents developing/verifying SDD Manager itself | Source orientation, declared checks/package prerequisites, development evidence and acceptance coordination; update its link to PLUGIN.md and package description. Explicitly load it for source work outside acceptance/. |
| acceptance/textstats/AGENTS.md | TextStats coordinators | Retain detailed setup, role isolation, evidence and execution protocol; adjust only source-package entry navigation if necessary. |

Remove SDD Manager's root AGENTS.md after its applicable content is represented in PLUGIN.md. This does not remove nested acceptance instructions or change the requirement to create/preserve AGENTS.md in projects developed with SDD Manager. Document the plugin-source/package distinction where current bootstrap/orientation guidance could otherwise recreate the removed file. Do not globally replace AGENTS.md identifiers or treat unrelated project instructions as package content.

PLUGIN.md is this plugin's explicit entry convention. Do not invent a standardized manifest entry field, SKILL.md front matter for it, automatic loading guarantees or a new client invocation mechanism. README tells users/agents to load it explicitly when the host does not expose it. Existing skill discovery metadata and sdd-manage coordination remain intact; client loading support requires separate observation.

### PLUGIN.md structure and routing contract

1. Purpose and use: the plugin composes weakly coupled capabilities; PLUGIN.md selects routes, skills own procedures, and their references supply progressive detail.
2. Entry/context: establish objective, current stage, authorized output and stopping boundary; use sdd-orient for project/Git/instruction state; resume sufficient existing inputs rather than replaying preparation.
3. Skill routing: a concise request/concern → owning skill → required entry link table covering all 15 skills. Compound/ambiguous workflow coordination goes through sdd-manage; a focused direct skill request retains that owner's prerequisites and selected boundary. Name handoffs and link their SKILL.md entries.
4. Composite/hybrid workflow definitions: explicit entry conditions, selected skill sequence/dependencies, artifact ownership, handoff state and human/verification/publication stops. Include main/greenfield or established-stage preparation plus bounded implementation; feature preparation/implementation/incorporation; focused/systematic review and accepted revision; checkpoint steering and separately requested continuation; release highlights/message/package/publication composition; selected independent maintenance/verification/reporting and optional hosted tracking. Hybrid means composing established stages/supporting capabilities for the actual request, not a new core workflow, branch prefix or permission grant.
5. Shared work boundaries: human document acceptance versus agent QC; target-project AGENTS.md precedence; stage/readiness gates; one-task closing commit and immediate publication; branch/integration/recovery and explicit stop rules. Link canonical owners rather than restating their detailed protocols.
6. Campaign records: operational identity/artifact/active-owner routing and frozen-record rules, with links to conventions/report owners. Keep historical campaign browsing/evidence navigation in human/source documentation.
7. Source-contributor pointer: explicit source-only acceptance/AGENTS.md link using a repository URL; no Python/unittest or source-suite details in the packaged composition entry.

Each composite route must name the owner of the next action, prerequisites to satisfy before it, outputs transferred and its stopping boundary. Define necessary stage ordering in the entry rather than supplying only a list of links. Load detailed owner references when that route is selected. Do not create an alternate workflow authority competing with sdd-manage's canonical references.

### Human-facing README and existing recommendations

Use the retained R-001–R-007 analysis with the following amended dispositions:

| Finding | Expanded treatment |
| --- | --- |
| R-001 | Keep a compact human document/checkpoint explanation and useful artifact map in README; put actionable dependency/routing gates in PLUGIN.md. Human acceptance and agent QC remain distinct in both audiences. |
| R-002 | Move detailed Branches and integration plus operational continuity rules into PLUGIN.md; retain a short explanation of partial-task/full-boundary behavior in human workflow coverage. |
| R-003 | Keep concise release request examples and user-visible outputs in README; route agent message/highlights/package/provider composition in PLUGIN.md, linking existing owners. Source publisher prerequisites remain in acceptance/AGENTS.md. |
| R-004 | Keep composite-workflow diagrams primarily in README, with concise human explanations. PLUGIN.md defines executable routing/handoffs in prose/tables; it need not duplicate the diagrams. |
| R-005 | Simplify onboarding; link the agent entry explicitly; retain package metadata once and keep host loading claims qualified. |
| R-006 | Move Testing with TextStats into acceptance/TEXTSTATS.md. README retains concise current status/limits and a source-document link; historical pinned evidence stays explicitly qualified in the dedicated document. |
| R-007 | Keep user request/capability lookup separate from agent skill routing. README can retain a concise skill overview with a PLUGIN.md link; avoid duplicating the full routing matrix. |

Review and revision records is split by purpose: identity/record locations, stage routing, persistence and closed-record handling go into PLUGIN.md with owner links. Human explanations of review versus authorized repair remain in README's workflow coverage; historical browsing/navigation goes into its references or source contributor navigation. General Markdown conventions are linked from PLUGIN.md, not repeated as a README editorial manual. All existing canonical requirements and evidence qualifications remain intact.

Proposed README order: introduction; getting started and agent-entry link; core workflows and ordinary requests; project documents/human checkpoints; composite workflow explanations/diagrams; concise release operations; package contents; status/limits and testing/contributor links; references, license and related projects. A separate lengthy branches/campaign-policy section is unnecessary after the agent-entry split.

### Ordered implementation actions

| Action | Coupled result and owners | Verification/exit |
| --- | --- | --- |
| V-003 | Establish the entry split: create PLUGIN.md and human README; integrate and remove root AGENTS.md. Update publisher PACKAGE_PATHS and TextStats snapshot PACKAGE_PATHS, their fixture/assertion contracts and package-interface documentation in the same coherent transition. Preserve target-project AGENTS.md bootstrap behavior. Owners: documentation, manage/routing, publisher and acceptance harness. | Routing covers all skills and defined composites with stage/handoff/stop boundaries; README/PLUGIN links agree; package requires/includes PLUGIN.md and no longer requires/ships root AGENTS.md; committed/dirty snapshot hashing and exact native ZIP checks pass; target AGENTS.md creation/preservation remains tested. |
| V-004 | Extract acceptance/TEXTSTATS.md; update acceptance/AGENTS.md, README, capability map and current package/entry references. Distinguish plugin-source entry from generated target-project AGENTS.md in affected orientation/bootstrap navigation. | TextStats history and evidence qualifications preserved; explicit source contributor loading remains discoverable; no broken current references to deleted package AGENTS.md; source-only links remain repository URLs in packaged docs; closed records unchanged. |
| V-005 | Reconcile all seven editorial recommendations with both audiences, review routing against canonical owners, consolidate report/evidence and verify the coherent candidate. | Meaningful publisher/support regressions, package and scoped composition/link/Markdown checks; no multiple blank-line runs outside literal blocks; immutable closed-record path checks; recorded source/environment and unrun client/provider limits. |

V-003 is intentionally coupled: the publisher currently rejects missing required package paths, so deleting AGENTS.md without changing both package contracts would publish an incomplete transition. Inspected affected contracts: .github/scripts/release.py; .github/tests/test_release.py; acceptance/textstats/scripts/core.py and HELPER-INTERFACES.md; test_preflight.py and test_package_docs.py. Target-side AGENTS.md in core initialization and target tests is a separate concern and remains intact.

### Acceptance and integration boundary

Before editing entry/package behavior, accept this expanded plan. Then publish each coherent action checkpoint before advancing, assess working-branch and prospective merged results, and explicitly integrate/publish the complete campaign into refreshed main only under the accepted execution scope. Retain original findings and completed deletion/blank-line evidence. Do not erase the campaign opening or renumber findings/actions.

Minimum rechecks: both declared support/publisher suites; positive packaged PLUGIN.md and exact bytes; negative missing required entry; absent old package AGENTS.md; unchanged acceptance exclusion; committed and dirty source snapshots; target AGENTS.md bootstrap/preservation; all selected skill links and representative composite routes; human approval/steering/partial-range boundaries; source-only navigation; Markdown spacing and prior closed-record preservation. Structural/source checks do not establish automatic PLUGIN.md discovery or live client behavior. No installation, live consumer/provider trial or product release is included in this planning scope.

## Execution steering — source-only root AGENTS.md

During execution the human requested retaining root AGENTS.md solely for SDD Manager development, excluded from the package. This supersedes the planned root-file deletion and no-recreation instruction above. PLUGIN.md absorbs the former user/workflow entry content; root AGENTS.md becomes a concise contributor entry routing to acceptance/AGENTS.md. Publisher and source snapshots include PLUGIN.md and exclude development AGENTS.md. Target-project AGENTS.md behavior remains unchanged. Negative checks cover exclusion even when source AGENTS.md exists.
