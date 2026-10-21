# Demo prompts revision

## Identity and scope

- Campaign: 094_93e8f74; opened 2026-10-21.
- Starting baseline and branch-off: 93e8f74bf9bab9e9a75472351e9ae07b3c5e53bf.
- Creation parent, integration target and return: main.
- Working/publication branch: revision/094_93e8f74-demo-prompts on origin, pchemguy/SDD-Manager.
- Request: “Pull origin and open demo prompts revision campaign.”
- State: Open; selected prompt revisions V-001–V-007 are implemented below. Further revision scope remains pending.

## Starting context

The worktree was clean on main at published closure checkpoint 9c494b564b0605a2b236f3482612e2af29f22319. A bounded git pull --ff-only origin main advanced it to the starting baseline. The pulled commit adds 19 lines to the greenfield prompt template, introducing minimal and extended template sections. Preserve those incoming changes as the campaign baseline.

Complete remote head/tag discovery returned 111 rows; main matches the full baseline. Repository-wide directory and local/remote ref inspection found highest reserved sequence 093. Sequence 094 and the selected branch/directory are available; branch syntax is valid. Allocation inspected identities and paths without loading closed campaign contents.

Initial source navigation for the demo-prompts scope:

- [Tetris guide](../../../demo/tetris/README.md).
- [Calculator guide](../../../demo/calculator/README.md).
- [Greenfield project prompt template](<../../../../.agents/plugins/sdd-manager/assets/Greenfield Project Prompt Template.md>).

The exact revision targets and changes will follow the human's selected requirements. No review findings or revision plan are invented at opening. Source prompts, published release 0.15.1 and closed campaign records remain unchanged by this checkpoint.

## Persistence and next boundary

The opening updates this record, current campaign navigation and [HANDOFF](../../HANDOFF.md) on the revision branch. Opening checks pass: three selected files, 269 local links, Markdown spacing/fences, exact-diff preservation and git diff --cached --check; 260 frozen targets were existence-checked without loading. All other source is unchanged from the pulled baseline. Commit, publish and exactly read back the opening before stopping. The containing commit supplies the original campaign-opening identity; recover its actual SHA from Git.

Leave campaign 094 open on its working branch. No source revision, main integration, release or installation follows from this opening request. Next work requires the selected demo-prompt revision scope.

## V-001 — Name the conditional ghost-piece visibility feature

The human supplied an exact replacement for the Tetris guide's conditional ghost-piece visibility prompt. Apply that wording to the prompt admonition, preserving its paragraph break and behavior description. sdd-docs owns the guide edit; sdd-manage owns verification and publication. Recheck the exact replacement and surrounding-content preservation, then leave campaign 094 open.

Replaced the campaign-opening sentence with `Open a campaign to implement "conditional ghost-piece visibility" feature:` and moved the unchanged behavior description into its own paragraph. The change is confined to that prompt; adjacent explanation and acceptance guidance remain unchanged. This is an edit to a demo prompt, not execution of the campaign described by that prompt.

Verification passes: the guide equals its prior bytes with exactly the requested prompt replacement; surrounding content is preserved. The action changes only the guide and this report; Markdown checks and git diff --check pass. No runtime tests are needed for this wording-only change. Commit/publish/read back the action and keep the campaign open; all closed records and other prompts remain unchanged.

V-001 is published at 4bb903a716ddcec28b887b5359957a6558f17015. The push succeeded; two Git transport readbacks timed out with cleanup confirmed. Exact GitHub Git-ref API readback verified that same remote commit without another push.

## V-002 — Compose the penetrator prompt around the mechanic

The human requests a substantial compositional revision beginning exactly `Open a campaign to implement "penetrator" feature:` and clarifies that size is not the problem. Use the existing prompt's full substance; improve conceptual order and paragraph cohesion without treating shortening or expansion as the objective. sdd-docs and Technical Writing Assistant guide this focused editorial revision; sdd-manage owns persistence. No separate review campaign or game implementation is selected.

The revised prompt introduces penetration and valid locking first, then groups earning/storage/activation, visual feedback, and hard-drop/ghost interaction into coherent paragraphs. Preserve the four-line award, one-bonus quantity, three-bonus cap, hotkey activation, duration through lock, white-piece distinction, symbol counter and updates, deepest valid hard drop, matching ghost projection, bounds/non-overlap and preservation of occupied cells. Existing preparation questions continue to own unspecified activation, movement and locking details.

Editorial comparison confirms that the complete content inventory is retained and the required opening is exact. The guide outside this prompt is byte-identical to the preceding source; only the guide and this report change. Paragraph/admonition spacing and git diff --check pass. These are composition/fidelity checks, not game execution tests. Commit/publish/read back the action and leave campaign 094 open; other prompts and closed records remain unchanged.

## V-003 — Distinguish the penetrator feature from earned activations

The human corrects the framing: penetrator is the feature; the bonus is an earned opportunity to activate it. V-002 retained the mechanics but incorrectly made the bonus the introductory subject. Lead with penetrator mode and its behavior, then explain hotkey activation and the earned activation resource. Keep the required campaign-opening sentence.

Revised the prompt's first two paragraphs accordingly. Aligned the section heading, introductory explanation and release-boundary wording with the feature name, preserving the award/cap and gameplay requirements. Each bonus grants one activation; unspecified spending timing and other preparation questions remain for design. No other demo section or prompt is selected.

Terminology and substance checks pass: the feature is penetrator and each bonus grants one activation. No maintained demo/template reference uses the old heading anchor. The guide outside this section is byte-identical; only the guide and this report change, and git diff --check passes. Publish/read back the action and keep campaign 094 open. No game execution is claimed.

## V-004 — Polish the accepted penetrator prompt

The human supplies the complete prompt and authorizes polishing and committing it. Preserve its order: activation and penetration, hard-drop/ghost behavior, earned bonuses, then visual feedback. Replace the parenthetical prerequisite with a direct condition that a penetrator bonus must be available; retain the feature name, every gameplay requirement and the illustrative symbol. No new activation, movement or locking rules are selected.

V-003 publication is verified by exact remote-ref readback at c838b03a52411931b9db10a10de02ca79ff61da9, with confirmed cleanup. V-004 changes only the prompt and this record. Editorial fidelity, surrounding-content preservation and git diff --check pass; no runtime testing is needed for this prose-only edit. Commit, publish and read back the action; keep campaign 094 open.

## V-005 — Add the accepted all-inclusive project prompt

The human accepts the revised complete project description and requests a new Tetris guide section with a concise normal-text lead. Append it as an alternative to the staged prompts, preserving the accepted wording inside one `> [!NOTE] Prompt` block. Shift its title from level one to three and its six section headings from level two to four. The lead distinguishes its full target scope and default full-interval locking from the staged exercises above.

V-004 publication was verified at 4f6e63f4b3ab998d546123e1f814586c9c27c686. Editorial comparison confirms accepted-text fidelity. Structural checks pass for heading levels, continuous block quotation, preservation of the preceding guide and the two-file scope; git diff --check also passes. Only the guide and this record are selected; no game execution or runtime testing is required. Commit, publish and read back the addition; keep campaign 094 open.

## V-006 — Make the all-inclusive prompt ready to copy

The human supplies a complete opening for the all-inclusive prompt: invoke `$sdd-manager`, provide repository/token placeholders under a level-three credentials heading, and label the existing description with a level-three project-description heading. Apply that opening inside the existing note block and revise its lead to direct placeholder replacement. Preserve the accepted gameplay and configuration text; add a blank quoted line between the two credential fields for readable Markdown.

V-005 publication was verified at 307c240717974ece569f72373a56973c6c3587a8. Diff inspection confirms the requested opening, complete block quotation and unchanged description body; only the guide and this record change. git diff --check passes. Commit, publish and read back. No game implementation, runtime testing or campaign closure is selected.

## V-007 — Clarify the demo token setup

Add the human's standard fine-grained PAT guidance immediately before the full prompt: restrict repository access to the target repository and grant read/write permissions for Actions, Commit statuses, Contents, Issues, Pull requests and Workflows. Explain that individual workflows may require fewer permissions. This documents the supplied standard set rather than claiming every permission is always required; the copy-paste prompt remains unchanged.

V-006 publication was verified at 44f9eb6abf1afc59a68aa1b8334a477a732630a7. Diff inspection confirms the exact six-item list, repository restriction, qualification, unchanged prompt and two-file scope; git diff --check passes. Commit, publish and read back. Keep the campaign open; no credential value or runtime behavior changes.
