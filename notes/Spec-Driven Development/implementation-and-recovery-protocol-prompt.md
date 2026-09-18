## Implementation and Recovery Protocol

Use this protocol whenever implementing a project from scratch, applying a feature or revision to an existing codebase, or resuming an interrupted implementation run.

This protocol operationalizes tasks defined under the **SPEC and PLAN Strategy**. It does not redefine project architecture, specification ownership, plan decomposition, or task scope. The main SPEC, PLAN, layout documents, and their child documents remain authoritative for those concerns.

### 1. Required operating model

Execute exactly one PLAN task at a time as a recoverable transaction.

Each task transaction shall:

1. Identify its complete intended scope before modifying project files.
2. Preserve the baseline state of every target path.
3. Modify only declared paths.
4. Update implementation, tests, and development documentation together.
5. Pass all required verification.
6. Record completion durably.
7. Create one task commit when operating in a Git repository.
8. Remove recovery data only after completion is durable.

Do not begin another task while the current task is incomplete, unverified, uncommitted where Git is available, or not cleaned up.

Use these repository-root operational paths unless the project explicitly defines equivalents:

```text
IMPLEMENTATION_LOG.jsonl
.implementation-state/
└── <task-id>/
    ├── manifest.json
    └── backup/
        └── <repository-relative paths>
```

`IMPLEMENTATION_LOG.jsonl` is an append-only journal for the current implementation campaign. `.implementation-state/` contains temporary recovery data and shall not be committed. In a Git repository, exclude it locally, preferably through `.git/info/exclude`, without changing the project-wide `.gitignore` solely for this purpose.

This protocol assumes exclusive write ownership of every path declared by an active task. If another agent or the user may be editing any of those paths concurrently, stop and coordinate ownership before proceeding.

Do not place `.orig`, `.bak`, or similar backup copies beside production files unless the project explicitly requires that alternative. Adjacent backups may interfere with imports, tests, packaging, or broad Git staging.

### 2. Campaign modes and document selection

An implementation campaign is either `initial` or `feature`.

#### Initial campaign

Use `initial` mode when both temporary feature documents are absent:

```text
docs/dev/FEATURE-SPEC.md
docs/dev/FEATURE-PLAN.md
```

Read and execute the main documentation tree, beginning with:

```text
docs/dev/SPEC.md
docs/dev/PLAN.md
docs/dev/layout.md              # when present
docs/dev/PROJECT.md             # when present
```

Also read the focused child documents governing the selected task.

#### Feature campaign

Use `feature` mode when both temporary feature documents are present:

```text
docs/dev/FEATURE-SPEC.md
docs/dev/FEATURE-PLAN.md
```

Read the main SPEC, PLAN, layout, and relevant child documents as the current baseline. Read the feature documents as the intended delta. Feature documents take precedence only where they explicitly revise the baseline.

If exactly one feature document is present, or the feature documents conflict with the main documentation without explicitly defining a revision, stop and ask the user.

#### Existing campaign

If the implementation log already contains a campaign record, that record is authoritative for resumption. Confirm that its mode and document paths agree with the repository. Do not silently start a different campaign or replace an active log.

The first valid line of a new campaign log shall be a record such as:

```json
{"event":"campaign","at":"2026-09-18T07:40:00Z","mode":"feature","spec":"docs/dev/FEATURE-SPEC.md","plan":"docs/dev/FEATURE-PLAN.md","baseline_spec":"docs/dev/SPEC.md","baseline_plan":"docs/dev/PLAN.md"}
```

Use the log only for the current campaign. A new campaign may replace the previous completed campaign log after confirming that no task or recovery data remains active. Git history preserves earlier campaign logs in Git repositories.

### 3. Project instruction sources

Before planning or modifying a task, locate and read all applicable project instruction sources:

- the repository-root `AGENTS.md`, when present;
- any more deeply nested `AGENTS.md` files whose directory scopes contain anticipated task targets;
- `docs/dev/PROJECT.md`, when present;
- every relevant file referenced by those documents.

Follow references far enough to obtain all requirements applicable to the task, including coding style, supported language and dependency versions, architectural and import restrictions, required tools and commands, generated-file policies, testing conventions, and completion checks. Resolve relative references from the directory containing the referring document unless that document defines another rule.

Treat applicable instructions from these sources as mandatory throughout preparation, implementation, verification, recovery, and Git operations. Incorporate their required commands and checks into the task's declared verification. Do not substitute familiar tooling or generic conventions for project-specific requirements.

`AGENTS.md` instructions may be hierarchical and directory-scoped. Determine which instructions apply to every anticipated target. When task scope expands into another directory, discover and read any newly applicable `AGENTS.md` files and referenced instructions before preparing or modifying the added path.

If an applicable instruction source is missing, unreadable, internally contradictory, or conflicts with another governing document and no explicit precedence rule resolves the conflict, stop and ask the user. Do not guess which requirement to ignore.

### 4. Task states

A task progresses through these states:

```text
STARTED → PREPARED → COMPLETED → COMMITTED → CLEANED
```

- `STARTED`: the task and intended file operations have been declared, but no target has been modified.
- `PREPARED`: every target baseline has been captured and verified; target modification may begin.
- `COMPLETED`: implementation, documentation, tests, and fixes are complete and verified.
- `COMMITTED`: in a Git repository, a matching task commit durably contains the completed work and log records.
- `CLEANED`: the task recovery directory has been removed and the task scope contains no uncommitted residue.

`COMMITTED` and `CLEANED` normally do not require additional journal records. Detect `COMMITTED` from Git using the task identifier in the commit message. Detect `CLEANED` from the absence of the task recovery directory. This avoids bookkeeping-only commits.

An incomplete task may instead reach `REVERTED`, meaning its entire recorded scope has been restored to the prepared baseline and its recovery directory has been removed.

### 5. Start every session with recovery inspection

Before selecting or implementing a new task:

1. Locate the project root and the authoritative development documents.
2. Determine whether the directory is a Git repository.
3. Inspect `IMPLEMENTATION_LOG.jsonl`, `.implementation-state/`, and, when applicable, Git status and recent task commits.
4. Identify the latest campaign and latest task state.
5. Read the project instruction sources applicable to the current or recovered task scope.
6. Apply the recovery procedure in section 11 before modifying any project file.
7. Confirm that no earlier task remains active.

Recovery takes precedence over new implementation. Never continue with the next PLAN task merely because the partially completed files appear plausible.

If the final JSONL line is clearly truncated by an interrupted append, treat the preceding valid lines as authoritative only when the recovery directory makes the state unambiguous. Preserve the evidence and ask the user if interpretation is uncertain. Corruption before the final line is always an escalation condition.

### 6. Preflight for a new task

After recovery is complete:

1. Read the active PLAN or FEATURE-PLAN and identify the next incomplete task in its declared order.
2. Read every SPEC, PLAN, layout, and feature section governing that task, together with the applicable project instruction sources defined in section 3.
3. Inspect the relevant code and tests without modifying them.
4. Define one concise task scope and the complete anticipated file-operation set.
5. Classify every target operation as `modify`, `create`, `delete`, or `rename`.
6. Identify the targeted unit tests, affected dependent tests, and integration tests required for completion.
7. Generate a unique task identifier using a UTC timestamp and semantic slug, for example:

   ```text
   20260918T074215Z-cli-input-handling
   ```

In a Git repository:

- Record the current `HEAD`.
- Inspect the working tree and index before starting.
- Do not silently include pre-existing changes in the task.
- If a planned target already has uncommitted changes not produced by the active protocol, stop and ask the user unless the user has explicitly authorized those bytes as the task baseline.
- Unrelated existing changes may remain, but do not modify, stage, revert, or commit them.

Do not use repository-wide reset, checkout, clean, or equivalent destructive recovery commands. All preparation, restoration, staging, and committing shall be limited to declared task paths.

### 7. Declare and prepare the task

Perform the following steps in order.

#### 7.1 Append `STARTED`

Before modifying any project target, append one `started` record containing:

- task identifier;
- PLAN task reference;
- concise scope;
- anticipated path and operation list;
- required verification;
- Git `HEAD`, when applicable;
- a baseline fingerprint or equivalent read-only baseline description for the anticipated paths.

Example:

```json
{"event":"started","at":"2026-09-18T07:42:15Z","task":"20260918T074215Z-cli-input-handling","plan":"docs/dev/FEATURE-PLAN.md#cli-input","scope":"Add validated CLI key bindings","files":[{"path":"src/tetris/cli.py","operation":"modify"},{"path":"tests/test_cli.py","operation":"modify"},{"path":"docs/dev/spec/frontends/cli.md","operation":"modify"}],"baseline_fingerprint":"sha256:…","git_head":"abc1234","verification":["pytest tests/test_cli.py","pytest tests/test_application_api.py"]}
```

#### 7.2 Create the manifest and backups

Create `.implementation-state/<task-id>/manifest.json`. For every operation, record enough information to restore the exact baseline:

- repository-relative path;
- intended operation;
- whether the path initially existed;
- baseline content hash when applicable;
- file type and relevant mode or executable state;
- backup path when applicable;
- both source and destination baselines for a rename.

Copy every existing target into the task backup tree while preserving its bytes and relevant metadata. Verify each backup against the recorded baseline hash.

A minimal manifest has this form:

```json
{"version":1,"task":"20260918T074215Z-cli-input-handling","files":[{"path":"src/tetris/cli.py","operation":"modify","existed":true,"type":"file","mode":"0644","sha256":"…","backup":"backup/src/tetris/cli.py"},{"path":"tests/test_cli.py","operation":"modify","existed":true,"type":"file","mode":"0644","sha256":"…","backup":"backup/tests/test_cli.py"}]}
```

Operation requirements:

- `modify`: back up the existing path.
- `create`: record that the path was absent; do not create it yet.
- `delete`: back up the existing path.
- `rename`: record and preserve the baseline state of both source and destination.

Back up symlinks as symlinks rather than silently dereferencing them. Preserve executable bits and other metadata required for correct restoration.

#### 7.3 Append `PREPARED`

Only after the complete manifest and every required backup have been verified, append a `prepared` record containing the task identifier, manifest location, manifest version, and manifest hash.

```json
{"event":"prepared","at":"2026-09-18T07:43:00Z","task":"20260918T074215Z-cli-input-handling","manifest":".implementation-state/20260918T074215Z-cli-input-handling/manifest.json","manifest_version":1,"manifest_sha256":"…"}
```

Do not modify any declared project target before this record exists.

#### 7.4 Expanding scope after preparation

If implementation reveals that another path must change:

1. Do not modify the new path.
2. Discover and read any project instructions newly applicable to the expanded scope.
3. Append a `scope-extension-started` record identifying the additional operation.
4. Capture and verify its baseline exactly as for the original paths.
5. Update and re-hash the manifest with a new version.
6. Append another `prepared` record for the new manifest version.
7. Only then modify the additional path.

If a path was already modified before being declared and backed up, stop and ask the user. Do not fabricate a baseline from the modified file.

### 8. Implement the task

After `PREPARED`:

1. Modify only paths in the latest prepared manifest.
2. Implement the smallest complete change described by the selected PLAN task.
3. Keep the implementation aligned with the active SPEC, PLAN, layout, and feature documents.
4. Add or update tests covering the changed behavior and relevant boundary cases.
5. Update the main development documents wherever the task changes the complete current project state.
6. During feature work, also update FEATURE-SPEC and FEATURE-PLAN when implementation reveals an approved design correction. Do not silently diverge from either document set.
7. Keep unrelated user changes intact.

Recognized disposable outputs created automatically by approved tools—such as ignored test caches or compiler scratch files—do not need to become task targets. They must remain outside tracked source and documentation, must not be staged, and should be cleaned when appropriate. Unexpected generated files or modifications to non-disposable paths are undeclared changes and must be investigated.

If the implementation exposes an architectural contradiction, missing decision, or scope expansion larger than the current bounded task, stop implementation. Restore the task or obtain user direction before revising the architecture or PLAN.

Do not begin a second PLAN task to make the current one pass. Necessary fixes within the current task's declared behavior belong to the current transaction; unrelated work belongs to a later task.

### 9. Verify and complete the task

Do not record completion until all required work is finished.

#### 9.1 Inspect the resulting scope

- Compare changed paths with the latest manifest.
- Confirm that every change belongs to the declared task.
- Confirm that no undeclared path was modified.
- Review the resulting diff, including tests and documentation.
- Confirm that the implementation, SPEC, PLAN, layout, and active feature documents are mutually consistent.

#### 9.2 Run verification

Run, in this order:

1. Unit tests directly associated with every changed implementation file or component.
2. Unit tests for components dependent on the changed behavior.
3. Relevant integration tests.
4. Any linting, type checking, build, packaging, or format checks required by the project or PLAN.
5. Broader phase-level or full-suite verification when the task completes a phase or campaign.

Fix every failure caused by the task and repeat the affected verification until it passes. Do not weaken tests, remove valid assertions, or alter unrelated behavior merely to obtain a green result.

If a required check cannot be executed, the task is not complete. Report the blocker. During a controlled stop, restore the incomplete task and append `reverted` unless the user explicitly directs that the prepared state be retained for a known continuation.

#### 9.3 Append `COMPLETED`

After all required checks pass, append a `completed` record containing:

- task identifier;
- concise result summary;
- exact verification commands and successful outcomes;
- final manifest version;
- whether this completes a phase or campaign.

```json
{"event":"completed","at":"2026-09-18T08:06:00Z","task":"20260918T074215Z-cli-input-handling","summary":"Added validated configurable CLI key bindings","manifest_version":1,"verification":[{"command":"pytest tests/test_cli.py","result":"passed"},{"command":"pytest tests/test_application_api.py","result":"passed"}],"phase_complete":false,"campaign_complete":false}
```

The `completed` record must be appended before Git staging or backup removal.

### 10. Commit and clean up

#### 10.1 Git repository

After `COMPLETED`:

1. Stage only the paths declared by the latest manifest and `IMPLEMENTATION_LOG.jsonl`.
2. Include declared deletions and renames explicitly.
3. Never stage `.implementation-state/` or backup files.
4. Do not use broad staging such as `git add -A`, `git add .`, or `git commit -a` when unrelated changes exist or may exist.
5. Inspect the staged diff and confirm that it contains the complete task and nothing else.
6. Commit once for the task. Use a concise subject and this exact trailer:

   ```text
   Task: <task-id>
   ```

7. Confirm that a commit containing the trailer exists and that all declared task changes are committed.
8. Remove `.implementation-state/<task-id>/`.
9. Confirm that no declared task path remains modified or staged.

Do not amend, squash, rebase, push, or otherwise rewrite or publish commits unless the user explicitly requests it.

If staging or committing fails, preserve the recovery directory and treat the task as completed but not committed. Do not begin another task.

#### 10.2 Non-Git project

After `COMPLETED`:

1. Reconfirm the successful verification recorded in the log.
2. Remove `.implementation-state/<task-id>/`.
3. Confirm that no backup artifacts remain for the task.

The completion record is the durable terminal evidence when Git is unavailable.

### 11. Recovery procedure

Apply the following rules at the beginning of every run.

#### No active task

If the latest task is completed, committed when required, and cleaned, select the next PLAN task. If no task has started in the current campaign, begin with campaign selection and preflight.

If the latest task is `REVERTED`, confirm that its recovery directory is gone and its entire scope matches the recorded baseline, then restart the same PLAN task with a new task identifier.

#### `STARTED` without `PREPARED`

No target should have been modified.

1. Inspect the planned paths and any partial recovery directory.
2. Confirm from the recorded baseline, Git state, and available hashes that no planned target changed after `STARTED`.
3. Remove incomplete recovery preparation.
4. Append a `reverted` record explaining that preparation was incomplete.
5. Restart the task with a new task identifier.

If any planned target changed or the baseline cannot be established confidently, stop and ask the user.

#### `PREPARED` without `COMPLETED`

Treat the task as interrupted and revert its entire latest prepared manifest before doing new work.

1. Validate the manifest hash and all required backups.
2. Restore `modify` and `delete` paths from their backups.
3. Remove `create` paths that were absent in the baseline.
4. Restore both source and destination baselines for `rename` operations.
5. Restore recorded file types and relevant modes.
6. Verify restored paths against their baseline hashes.
7. Remove the task recovery directory.
8. Append a `reverted` record with the reason `interrupted-before-completion`.
9. In Git, confirm that the task scope matches its recorded pre-task state without altering unrelated changes.
10. Restart the task with a new task identifier.

Restoration is all-or-nothing. Do not continue from apparently useful partial edits unless the user explicitly overrides this recovery rule.

#### `COMPLETED` in a Git repository

Search Git history for a commit containing the exact `Task: <task-id>` trailer.

- If the matching commit exists and contains the declared task changes, remove the matching leftover recovery directory and proceed.
- If no matching commit exists, inspect the manifest and diff, rerun the recorded verification, and commit the exact completed task if it remains valid.
- If re-verification fails or the diff is inconsistent, preserve the recovery data and either restore the entire task baseline and restart or ask the user when restoration could discard work of uncertain origin.
- If a matching task commit exists but the log lacks `COMPLETED`, the protocol was violated. Stop and ask the user rather than automatically reverting committed work.

#### `COMPLETED` without Git

Rerun or otherwise reconfirm the recorded verification before removing leftover recovery data. If the result is inconsistent with the completion record, preserve the backups and ask the user or restore the complete task baseline.

#### Unexpected recovery data

Recovery data associated with the latest completed task may be removed only after its completion and, where applicable, matching commit are verified.

If backup directories or backup-like files exist outside the current or latest completed task scope, do not delete them automatically. Stop and report them to the user.

Likewise, stop and ask the user when:

- multiple tasks appear active;
- a manifest or backup is missing or corrupted;
- an undeclared file was modified;
- a target contains changes that may belong to the user or another agent;
- the log, Git history, and recovery directory disagree;
- restoration would overwrite work whose origin is uncertain.

### 12. Phase and campaign completion

When a task completes a named PLAN phase, run the phase-level verification required by that subplan before setting `phase_complete` to `true`.

When completing an initial campaign:

- confirm that every current PLAN task is implemented;
- run the project-level acceptance and full verification required by the PLAN;
- confirm that SPEC, PLAN, layout, implementation, and tests describe the same complete project state;
- mark `campaign_complete` in the final task's completion record and commit.

When completing a feature campaign, the final task shall also:

1. Integrate the settled feature requirements into the appropriate main SPEC nodes.
2. Integrate the final implementation structure and from-scratch tasks into the main PLAN nodes.
3. Update shared documents such as `layout.md` and their children.
4. Remove superseded main-document content.
5. Delete `FEATURE-SPEC.md` and `FEATURE-PLAN.md` as declared task operations.
6. Run the complete verification required for the affected project scope.
7. Record `campaign_complete: true` and commit the complete integration.

The main documentation must describe the resulting project from scratch. The completed feature must not require the deleted feature documents or implementation log for comprehension.

### 13. Journal rules

`IMPLEMENTATION_LOG.jsonl` shall contain one valid JSON object per physical line.

- Append records; do not edit or reorder records within an active campaign.
- Keep records concise. Store detailed per-file backup metadata in `manifest.json`.
- Use repository-relative paths with a consistent separator.
- Use UTC timestamps and stable task identifiers.
- Never place secrets, credentials, or large file contents in the log.
- The log records execution state, not architectural requirements or a narrative diary.
- A task identifier identifies an execution transaction; it is not a substitute for meaningful SPEC or PLAN decomposition.

At minimum, support these events:

```text
campaign
started
prepared
scope-extension-started
completed
reverted
```

### 14. Non-negotiable safety rules

- Recover or resolve the current task before starting another.
- Never modify a target before its baseline is prepared.
- Never modify an undeclared path.
- Never claim completion while required checks are failing or unexecuted.
- Never remove recovery data before completion is durable and any required task commit exists.
- Never commit unrelated user changes.
- Never use broad destructive Git or filesystem operations for task recovery.
- Never guess when the log, backups, filesystem, or Git history disagree; preserve evidence and ask the user.
- Never leave a knowingly incomplete task in place during a controlled stop when it can be safely restored.

The intended steady state after every completed task is: documentation and implementation agree, required tests pass, one task commit exists when Git is available, no task backup remains, and the next task can begin from a known baseline.
