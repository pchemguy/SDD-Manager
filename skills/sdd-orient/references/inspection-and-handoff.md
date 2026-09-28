# Inspection and handoff

Use this reference for read-only orientation. Collect enough evidence for the contemplated action; do not dump an entire monorepo into context.

## Project and authority

- Resolve the user-supplied path or current directory to a project root. In a monorepo, distinguish the governed subproject from the containing repository. When candidates are genuinely ambiguous, report them instead of choosing one silently.
- Read applicable root and more deeply scoped `AGENTS.md` files for anticipated paths. Follow their relevant references and project-designated instruction sources, including policies outside the project root when they apply.
- Identify contradictory or unreadable instructions and the exact affected action. Record rules for language, build, test, documentation, generated files, source ownership, and commit practices when relevant.
- Inspect `docs/dev/PROJECT.md` as the new project brief. In an existing repository, determine its actual role before applying that assumption: V1 used the same path for development instructions. Report mixed or legacy content, preserve its applicable instructions until explicitly migrated, and route its migration to a document revision workflow.

## Git evidence

Use Git's read-only commands or their equivalent on the host. For example, from the candidate project path:

```text
git rev-parse --is-inside-work-tree
git rev-parse --show-toplevel
git symbolic-ref --quiet --short HEAD
git rev-parse --verify HEAD
git status --porcelain=v1 --untracked-files=all
```

Distinguish a Git worktree from a bare repository, a Git directory outside the target project, or a path with no Git. Record branch or detached state; record an unborn HEAD explicitly. Note staged, unstaged, untracked, deleted, renamed, conflicted, and submodule changes where present. Scope status to the project and anticipated target paths without concealing relevant parent-level or shared files.

Do not assume dirty paths belong to the current task or the agent. Do not interpret clean status alone as proof that the intended work is finished or that documents agree. For the Git prerequisite to be met, the project must be inside a usable worktree; a missing HEAD, conflict, or ambiguous ownership is an additional blocker for ordinary mutation until a later workflow defines how to handle it.

## Project evidence

Look for present roots and referenced children; absence is a finding, not automatically a defect:

```text
docs/dev/PROJECT.md
docs/dev/ARCHITECTURE.md   docs/dev/architecture/
docs/dev/DECOMPOSITION.md  docs/dev/decomposition/
docs/dev/SPEC.md           docs/dev/spec/
docs/dev/PLAN.md           docs/dev/plan/
docs/dev/TASKS.md          docs/dev/tasks/
docs/dev/layout.md         docs/dev/layout/
docs/dev/FEATURE_ARCHITECTURE.md
docs/dev/FEATURE_DECOMPOSITION.md
docs/dev/FEATURE-SPEC.md  docs/dev/FEATURE-PLAN.md
docs/dev/verification-map.json
```

Also identify project-specific equivalents and possible V1 artifacts (`ROADMAP.md`, `IMPLEMENTATION_LOG.jsonl`, `.implementation-state/`). Never treat a V1 journal or recovery directory as authority to run old backup restoration. Report active or contradictory evidence and hand it to the future recovery workflow. Feature documents describe an intended delta; do not silently treat them as a complete current baseline.

Inspect relevant source, tests, manifests, and declared commands for building, focused checks, integration checks, documentation checks, and packaging. Note unavailable tools without installing dependencies or executing commands with side effects. Use project instructions over guessed defaults.

## Orientation report

Produce a concise human-readable handoff with these slots, using `none`, `unknown`, or `not inspected` distinctly:

```text
Target: project root; Git root; contemplated paths or workflow
Git: worktree eligibility; branch/detached/unborn; HEAD; relevant status and ownership
Instructions: applicable sources, scope, conflicts, and migration issues
Documents: main roots and relevant children; active feature/change documents
Execution evidence: TASKS/commits, legacy state, and any unresolved discrepancy
Tooling: relevant declared commands and environment limitations
Readiness: read-only possible; repository mutation eligible or blocked; reasons
Handoff: scoped facts for the next skill; unknowns and checks to repeat
```

This report is an observation at a particular repository state, not a lasting certificate or permission to mutate. Attribute factual claims to paths or Git output when the distinction matters. Do not invent completion states from checkboxes, timestamps, or file presence alone. The orchestrator must recheck stale facts and retain responsibility for authorization, workflow selection, and final validation.
