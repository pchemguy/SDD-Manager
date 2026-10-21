# Demo prompts revision

## Identity and scope

- Campaign: 094_93e8f74; opened 2026-10-21.
- Starting baseline and branch-off: 93e8f74bf9bab9e9a75472351e9ae07b3c5e53bf.
- Creation parent, integration target and return: main.
- Working/publication branch: revision/094_93e8f74-demo-prompts on origin, pchemguy/SDD-Manager.
- Request: “Pull origin and open demo prompts revision campaign.”
- State: Open; selected prompt revisions V-001 and V-002 are implemented below. Further revision scope remains pending.

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
