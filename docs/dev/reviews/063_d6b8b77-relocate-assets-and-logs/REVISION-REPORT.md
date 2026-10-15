# Asset and AI-log relocation revision

Campaign **063_d6b8b77**, baseline `d6b8b77554be6fb6c69613e12d239de2a90818f7`; branch `revision/063_d6b8b77-relocate-assets-and-logs`, target main. State: **Executing accepted refactor**. The human request defines the scope; no separate review stage is needed. See the [revision plan](REVISION-PLAN.md).

Refreshed origin/main, verified clean eligible worktree and repository-wide sequence/ref names. Identified two root EXPLORE_DRIVE logs and the root project prompt, current demo/bootstrap/README references, native release package selectors and TextStats selectors/contracts/fixtures. Closed records remain untouched. Publish/read back this opening/plan before relocation.

## A-001 — Relocation and affected references

Moved both EXPLORE_DRIVE logs to docs/ai-logs/ and the project prompt to assets/, preserving filenames and exact prompt bytes. Log edits are limited to the four existing README/capability-map link destinations; transcript content and pre-existing illustrative plan links remain unchanged. Updated README, demo and bootstrap links, release/TextStats selectors, snapshot contracts and existing fixture assertions. Fixtures now assert the assets prompt is retained and its old root path plus AI logs are excluded. No closed campaign was edited. Git whitespace and owned diff inspected; publish/read back before final verification.
