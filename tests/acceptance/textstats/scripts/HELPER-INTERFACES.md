# Portable coordinator helper contracts

Python 3.11+ and Git are required. All helpers use `--inputs INPUTS.json --output NEW.json`; observation/assessment additionally require `--run-state RUN-STATE.json`. Paths resolve from the caller, not a historical checkout. Inputs/checkpoints must satisfy the existing strict version 1 schemas. Credentials are never inputs. Invalid values yield generic JSON on stdout, exit 2, and no output JSON; missing repository yields the exact question from SETUP before writes. Output paths are exclusive: choose a new attempt path instead of replacing evidence. Success writes version 1 JSON, exit 0. Failed deterministic checks retain assessment JSON, exit 1.

`preflight.py` is read-only except its explicitly requested observation file. It discovers one matching authorized remote (multiple matching remotes block), local/default branch, retained run records, actual remote refs and source identity. Unavailable remote readback is recorded. Capabilities default false for publication/API/agent/client facilities because read access cannot certify them. Helpers never authenticate, inspect credential stores, push, commit, invoke agents or run product workflows.

`prepare.py --workspace NEW_PATH` creates an isolated clone only when the path is absent and `run_id` is absent. A local checkout is cloned at committed HEAD; its original index/workfiles/instructions are preserved. Clone origin is set to the discovered authorized destination. Existing target contents and instructions are retained. Occupied run resources block. An initially empty dedicated remote receives only pinned vendor/provenance, new operating instructions and ignore rules; no author/integration branch/publication is guessed. Remote read/clone failure remains a prerequisite failure. Preparation is never a resume driver and contains no TextStats implementation.

Preflight/prepare optionally accept `--source-root CHECKOUT`; default is the package repository containing the helper. `plugin_revision` resolves to full SHA. Source package is `plugin.json` plus `skills/**` from Git objects: 97 current files, no historical review/dev/assessor artifacts or source credentials. `source_mode: dirty` is explicit, restricted to current source HEAD, and records exact working bytes, changed paths, package hashes, Git executable modes and a mode-sensitive fingerprint. Preparation records the snapshot, provenance manifest and tracked binary diff; untracked additions are represented by exact snapshot hashes. Package symlinks/submodules are unsupported and block pinning. Snapshot modes preserve executability. A provenance observation has extra diagnostic keys; copy only schema-allowed plugin_source keys into RUN-STATE.

## Observation and recovery

`observe.py` derives real HEAD/branch/parents, refs/worktrees, index entries `{path,mode,oid,stage}`, staged/unstaged/untracked/conflict paths, MERGE_HEAD and actual remote readback. `git.publication` is `published`, `unpublished` or `unknown`: exact destination equality or locally verifiable ancestor containment establishes publication; unreadable remote, detached/unborn state or unavailable remote ancestry remains unknown. Local tracking refs never establish publication. `reconciliation.effect` is `observed-published`, `not-observed-at-destination`, `unknown`, `unfinished` or `none`; `retry_safe` is always false because readback does not authorize replay. An uncertain API effect remains unknown pending exact hosted identity readback by the coordinator.

The observer writes a new adjacent `NEW.json.recovery/` export, never consumer Git/index/workfiles. Its manifest records HEAD/branch/parents, original tracked paths, full eligible index stages, pending files/deletions/modes/symlink targets, staged/unstaged patches, merge metadata (`MERGE_HEAD`, `MERGE_MSG`, `MERGE_MODE`, `ORIG_HEAD`), retained commit roots and artifact SHA-256s. Blob exports preserve index object identities; workfile content is binary-safe and separately hashed. A verified Git bundle includes named refs, HEAD and available merge/checkpoint/pending commit roots. Protected paths are omitted without reading their content; protected historical paths or unavailable required commit roots make the export incomplete. Recognizable secret content blocks evidence export with a generic cause. All recovery artifacts are `local-only` until an independently verified evidence publication contains them. Ignored noncredential workfiles and submodule working state are outside the export; retain them separately if required. `complete` describes the declared Git/index/nonignored-file export, not arbitrary machine state or credentials.

Restoration remains coordinator-owned: validate every artifact hash and path, clone/fetch into a new isolated workspace at recorded HEAD, import blob objects with `hash-object -w`, rebuild index with NUL-safe `update-index -z --index-info` stage records, restore workfiles separately, remove original tracked paths absent from retained index/workfiles and apply explicit deletions. Restore merge metadata only when recorded and required objects exist. Compare actual index stages, staged/unstaged diffs, file hashes/modes, HEAD and merge parents before continuing. Never restore over occupied work or treat partial exports as successful recovery. Self-tests actually reconstruct staged/unstaged/binary/symlink work, deletion intent and conflict state (including unreferenced incoming merge commit).

## Deterministic assessor contract

`assess.py` optionally accepts `--contract CONTRACT.json --evidence EVIDENCE.json`. No contract yields `status: "Not run"`. A supplied contract must contain a nonempty check array; missing/invalid evidence cannot pass. It reads actual Git/file/task evidence but executes no product commands. Independent assessors must capture real command results separately and retain their provenance; a JSON literal alone does not prove which command ran.

Contract version 1:

```json
{
  "schema_version": 1,
  "case_id": "A-004",
  "checks": [
    {"id": "cli", "kind": "literal", "key": "named-file", "expected": {"returncode": 0, "stdout": "lines=3 words=2\n", "stderr": ""}},
    {"id": "head", "kind": "git", "field": "head", "expected_ref": "checkpoint_refs.product_commit"},
    {"id": "owners", "kind": "task_ownership"}
  ],
  "required_agent_checks": ["Independently assess actual routing, scope, checks and assistance."]
}
```

`case_id` and `required_agent_checks` are optional, descriptive assessor context. Check IDs must be unique. Unknown contract/check/evidence fields fail. Kinds:

| Kind | Required fields and meaning |
| --- | --- |
| `literal` | `key`, `expected`: exact JSON equality including type, array order, stdout/stderr whitespace and exit code; bool differs from integer. |
| `git` | `field`, exactly one of `expected`/`expected_ref`; fields are `head`, `branch`, `parents`, `merge_heads`, `staged_paths`, `unstaged_paths`, `untracked_paths`, `conflict_paths`, `publication`, `remote_containment`. |
| `file` | Relative safe `path`; at least one of boolean `exists` or lowercase `sha256`. No absolute/escaping/protected/symlink paths. |
| `task_ownership` | No additional fields; parse active TASKS/FEATURE-TASKS checkbox/table owners and linked child lists, reject empty collections/duplicate IDs/malformed rows; exclude archive, feature and review history/vendor resources. |

Runtime `expected_ref` resolves exactly one existing schema-validated checkpoint field such as `checkpoint_refs.product_commit`, `checkpoint_refs.integration_commit` or `checkpoint_refs.merge_parents`; it never hardcodes historical identities and does not certify checkpoint freshness. Evidence shape is exactly `{"schema_version":1,"literals":{"named-file":{"returncode":0,"stdout":"lines=3 words=2\n","stderr":""}}}`. Literal keys and values are independently retained actual observations, not a case registry or consumer claims. No automated agent-case result is accepted.

Assessment shape: `{"schema_version":1,"status":"Checks passed"|"Checks failed"|"Not run","checks":[{"id":"...","status":"Passed"|"Failed","reason":"..."}],"agent_behavior_assessed":false,"required_agent_checks":[...]}`. Deterministic success never confers case Passed or full acceptance. Agent routing, ownership decisions, assistance, interruption/fresh-context behavior and causal diagnosis require independent assessment.

Run the complete nonempty support suite from the package root: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -v`. Tests use only disposable repositories and local bare remotes; no hosted writes occur.
