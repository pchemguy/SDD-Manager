# U-002 acceptance source review

The acceptance subarea has one confirmed P2 harness-integrity defect, R-003. All 160 assigned inventory paths were inspected and their SHA-256 hashes match the active inventory. This is a source review with two bounded synthetic native Git probes; it does not establish a fresh consumer acceptance pass.

## Boundary and source

Reviewed checkout: /workspace/scratch/f5adda9293ed/SDD-Manager, revision/146_fe918d3-shell-policy at ff0251adf848101454d5b53407edd0fee5316ad5. Product baseline: e9eff0962321c0240eb32e35b4c1b7b1025e0669. Parent main: fe918d39b6380b36b01128da30c70f93b99a9919. The active REVIEW-PLAN.md and REVIEW-INVENTORY.json govern this subreview. The acceptance tree has no delta between the product baseline and reviewed published checkpoint. Root AGENTS.md, acceptance/AGENTS.md and acceptance/textstats/AGENTS.md were explicitly read before scope inspection. The established discovery handoff of one nested 15-skill plugin and no standalone skills was reused.

Only U-002 acceptance source was assessed. U-003 publisher/package review was not started; consequential publisher/package handoffs were considered through acceptance declarations, snapshot helpers and support assertions. Closed campaigns <=145, retained release/manual transcript contents and credentials were not opened. No source edits, source checkout/index/ref changes, external writes, live consumer campaign, new hosted repository or projection were performed. The two probes used newly created synthetic repositories under /tmp and cleaned them afterward; neither supplied a consumer or independent agent grade.

The separate coverage JSON contains an explicit record for each of the160 paths: source commit, product baseline, inventory hash, observed hash, inspection method, assessed criteria, outcome and finding association. Repeated JSON literal arrays were inspected through exact comparisons with separately read expected suites; repeated independent criteria were compared against fully read guides. No file was accepted merely because it appeared in a count.

| Source group | Inspected paths |
| --- | ---: |
| Coordinator documents and input example |14|
| Case JSON contracts |33|
| Independent case guides |33|
| Shared assessor support and literal vectors |12|
| Catalog and release-artifact fixture generator |2|
| Consumer requests and continuation/preparation templates |38|
| Schemas |2|
| Harness scripts and interface contract |11|
| Support test sources |15|
| Total |160|

## R-003 — Semantic index flags are omitted from recovery exports and held snapshots

Severity: P2. Confidence: confirmed by located source and two independent native synthetic reproductions. Owner: acceptance harness/recovery controls. This is an acceptance-infrastructure defect; no failure of an unmodified live consumer or production skill was inferred.

At acceptance/textstats/scripts/core.py:577–581, observe_git retains only path, mode, object ID and stage from git ls-files --stage -z. export_recovery then treats that map as authoritative, exports workfile/blob data and sets complete from bundle/path/root eligibility at core.py:668–734. No semantic index flags are captured or used to qualify completeness. HELPER-INTERFACES.md:15–17 directs restoration through update-index -z --index-info followed by separate workfile restoration, and RECOVERY.md:9 requires exact index intent. The omitted intent-to-add flag changes the result of that documented restoration even when every retained stage entry matches.

At acceptance/textstats/scripts/trial_control.py:53–61, the held snapshot's index_sha256 hashes only git ls-files --stage -z. execute at lines89–93 authorizes automatic continuation when the saved and current snapshots match. An assume-unchanged flag mutation therefore escapes the promised changed-state refusal in TRIAL-CONTROLS.md, even though it changes index semantics between the original hold and resumed command.

### Native reproduction A: complete export changes intent-to-add

Environment: Linux, Git 2.51.1, available Python 3.12 runtime. In a fresh synthetic repository with committed tracked.txt and a local bare origin, pending.txt contained `intended unstaged content\n` and was added with `git add -N pending.txt`. The actual current-source core.observation helper exported recovery data. A separate clone was reconstructed exactly as the documented procedure specifies: import each retained blob, clear the new clone's index, feed NUL-delimited mode/object/stage/path entries to update-index -z --index-info, then restore retained workfile bytes/modes.

| Observation | Before export | After documented restoration |
| --- | --- | --- |
| Recovery complete | true | Export had claimed completeness |
| pending.txt mode/object/stage |100644 / e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 /0|Identical|
| Porcelain status |` A pending.txt`|`AM pending.txt`|
| Staged diff |Empty|Addition of an empty file|
| Unstaged diff |New file relative to /dev/null|Modification relative to indexed empty blob|
| Semantic debug flags |20004000|0|

The exported stage map is unchanged while both staged and unstaged diffs differ. Before the probe ended, the original synthetic source checkout's HEAD, refs, status, stage/debug output and file content still matched its pre-export observations. The source under review was unchanged throughout.

A reproducible source-local setup for the essential export and restoration is below. It uses only disposable /tmp repositories and invokes the actual reviewed core module. The observation is support evidence, not an acceptance grade.

```python
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile

source = Path('/workspace/scratch/f5adda9293ed/SDD-Manager')
spec = importlib.util.spec_from_file_location(
    'acceptance_core', source/'acceptance/textstats/scripts/core.py')
core = importlib.util.module_from_spec(spec)
spec.loader.exec_module(core)

def git(root, *args):
    return subprocess.check_output(
        ['git', '-C', str(root), *args], text=True,
        stderr=subprocess.DEVNULL)

with tempfile.TemporaryDirectory(dir='/tmp') as directory:
    root = Path(directory)
    repo, remote = root/'product', root/'remote.git'
    git(root, 'init', '--bare', str(remote))
    git(root, 'init', '-b', 'main', str(repo))
    git(repo, 'config', 'user.name', 'Synthetic Reviewer')
    git(repo, 'config', 'user.email', 'review@example.invalid')
    (repo/'tracked.txt').write_text('baseline\n')
    git(repo, 'add', '.')
    git(repo, 'commit', '-m', 'synthetic baseline')
    git(repo, 'remote', 'add', 'origin', str(remote))
    git(repo, 'push', '-u', 'origin', 'main')
    (repo/'pending.txt').write_text('intended unstaged content\n')
    git(repo, 'add', '-N', 'pending.txt')
    before = [git(repo, *a) for a in (
        ('status', '--porcelain'), ('diff', '--cached', '--binary'),
        ('diff', '--binary'), ('ls-files', '--stage'))]
    inputs = {'schema_version': 1, 'test_repository': str(remote),
              'local_checkout': str(repo), 'profile': 'local-only'}
    observed = core.observation(inputs, {'pending_operation': None,
        'checkpoint_refs': {}}, root/'observation.json')
    exported = Path(observed['recovery']['path'])
    manifest = json.loads((exported/'manifest.json').read_text())
    restored = root/'restored'
    git(root, 'clone', str(repo), str(restored))
    git(restored, 'read-tree', '--empty')
    for entry in manifest['index']:
        subprocess.run(['git', '-C', str(restored), 'hash-object', '-w',
            '--stdin'], input=(exported/'blobs'/entry['oid']).read_bytes(),
            capture_output=True, check=True)
    records = b''.join((f"{e['mode']} {e['oid']} {e['stage']}\t{e['path']}"
                       .encode() + b'\0') for e in manifest['index'])
    subprocess.run(['git', '-C', str(restored), 'update-index', '-z',
        '--index-info'], input=records, capture_output=True, check=True)
    for entry in manifest['workfiles']:
        path = restored/entry['path']
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes((exported/'files'/entry['sha256']).read_bytes())
        path.chmod(entry['mode'])
    after = [git(restored, *a) for a in (
        ('status', '--porcelain'), ('diff', '--cached', '--binary'),
        ('diff', '--binary'), ('ls-files', '--stage'))]
    print('complete:', observed['recovery']['complete'])
    print('same stage entries:', before[3] == after[3])
    print('same staged diff:', before[1] == after[1])
    print('same unstaged diff:', before[2] == after[2])
    print('statuses:', repr(before[0]), repr(after[0]))
```

Run with PYTHONDONTWRITEBYTECODE=1 to keep the source tree untouched. Actual output was complete:true, same stage entries:true, same staged diff:false, same unstaged diff:false, and the statuses shown above.

### Native reproduction B: held receipt accepts index-flag drift

A separate fresh synthetic repository committed tracked.txt. The actual trial_control.execute ran a caller-owned two-operation argv sequence: Python wrote first.txt, then a later Python operation was to write second.txt. Watched paths were tracked.txt, first.txt and second.txt; hold_after=1 produced Held. The initial ls-files -v display was `H tracked.txt`. While held, `git update-index --assume-unchanged tracked.txt` changed the display to `h tracked.txt` without changing any file bytes or stage entries. Calling trial_control.snapshot before and after returned exactly equal values. Calling execute with the identical actions/watches/receipt and resume=True returned Completed and actually created second.txt.

To reproduce the receipt portion after preparing an ordinary committed synthetic repository, load acceptance/textstats/scripts/trial_control.py using the same importlib pattern and invoke:

```python
import sys

actions = [
    [sys.executable, '-c',
     'from pathlib import Path; Path("first.txt").write_text("partial")'],
    [sys.executable, '-c',
     'from pathlib import Path; Path("second.txt").write_text("continued")'],
]
watched = ['tracked.txt', 'first.txt', 'second.txt']
receipt = root/'gate.json'
held = trial_control.execute(repo, actions, watched, receipt, hold_after=1)
before = trial_control.snapshot(repo, watched)
git(repo, 'update-index', '--assume-unchanged', 'tracked.txt')
after = trial_control.snapshot(repo, watched)
resumed = trial_control.execute(repo, actions, watched, receipt, resume=True)
print(held['status'], before == after, resumed['status'],
      (repo/'second.txt').exists())
```

Observed output: `Held True Completed True`. This demonstrates an accepted flag-only change; it does not demonstrate arbitrary receipt tampering, native process termination or a consumer's recovery decision.

### Impact, bounded correction and objective recheck

A coordinator can publish an export described as complete that cannot reproduce the retained staged/unstaged ownership intent. A later restorer may stage an unintended empty file. Separately, a cooperative continuation may execute remaining mutating commands after semantically significant index drift that its receipt does not detect. Existing tests compare stage entries and exercise ordinary staging, separate unstaged bytes, deletion, binary/symlink work, conflicts and merge roots; none covers these two flag cases.

Preserve the observed semantic flags through an explicit portable representation and corresponding restoration, or conservatively detect unsupported flagged state and mark the recovery export incomplete with precise retention guidance. For held receipts, include supported semantic flags in snapshot identity, or refuse such a state before authorizing automatic continuation. Existing successful ordinary stage/conflict/deletion behavior should remain supported. Do not silently promote the stage-only map to exact index equivalence.

Prefer a bounded explicit-state change over assuming that copying one opaque index file solves portability. Raw-index retention, if chosen, requires separate consideration of Git-resolved index locations and split-index shared data. Linked worktrees, split indexes, skip-worktree and other flags/extensions were not exercised here; this report neither certifies nor condemns those modes. A repair can explicitly reject unsupported modes rather than undertake a general Git-index backup feature.

Objective rechecks: the intent-to-add setup must either restore identical stage/status/staged-diff/unstaged-diff/semantic flag intent, or report incompleteness before any portability claim; the Held setup must reject the assume-unchanged drift before its second command runs. Add regression assertions against both semantic diffs, not only ls-files --stage. Run the declared 140-test support suite and affected new tests, retaining exact source/runtime/outcomes. These checks remain support evidence.

## No-finding source coverage

The remaining source inspection found no other confirmed located defect. The explicit per-path sidecar retains these no-finding outcomes rather than a count-only claim. In particular:

- Setup requires an explicit dedicated repository and reconciled identity before fixture writes; source is committed by default, dirty snapshots are explicit, and nested package/root fallback checks preserve package-relative bytes/modes/hashes and exclude development/assessor material.
- Coordinator/consumer/assessor roles, genuine observed interruption triggers, first versus assisted attempts, one-shot stops, missing prerequisites and retained unknown effects are distinguished. Ordinary consumer requests contain chosen product requirements, not assessor routing answers or completed historical identities.
- All 33 catalog pairs preserve actual starting versus reached refs, publication gates, stable task ownership and bounded feature/steering/phase scopes. Required controlled, optional live/native/client and historical unsplit evidence classes remain distinct. Source criteria and support helpers do not claim live passes.
- Literal expectations are separate from actual capture code. Raw command status/channels, fixture hashes, import origins and failed/partial provenance are retained; deterministic DSL results explicitly lack an independent agent grade. Manual criteria retain API/file/stdin lifetime, semantic document quality and lifecycle ordering beyond sample literals.
- Strict schemas and helper validation reject unknown configuration/contract fields, malformed identities/tasks/fences/tables, empty check/owner collections, unsafe paths and recognizable secret data. Pattern screening is documented as bounded rather than a universal secret detector.
- Actual ancestry/readback, explicit pending destination, unknown remote/API effects and no automatic replay are handled conservatively. Binary workfiles, separate ordinary index stages, deletion/conflict metadata, retained roots and local-only exports have meaningful support assertions, subject to R-003's semantic-flag limitation.
- Release capture compares exact note/native commit/provider bodies, newlines and peeled tag/source/publication facts. Provider origin, subject acceptability, freshness, actual filesystem faults and human-content quality retain independent judgment. Controlled naming fixtures remain separately selected synthetic trials.

The coordinator reported 140 support tests passing at the same ff0251ad checkpoint. I inspected all 15 support test source paths and did not duplicate that full suite. The two additional synthetic probes above failed the omitted invariants despite that passing existing suite. No support-test count was promoted to fresh consumer or provider acceptance.

## Considered but unjudged

Fresh consumers and independent assessors for A-001–A-033, document/human checkpoint behavior, actual tracking/closure/publication order and causal reliability were not run because no live acceptance campaign or dedicated destination was selected. The required versus optional facilities and all 16 preparation-presence combinations are source-defined scenarios, not observed passes.

Actual live GitHub authentication/API effects, real credential recovery, live-provider response loss, installed-client routing/activation, native uncontrolled kill and a complete cross-machine recovery campaign remain unjudged here. No credentials were read and no external writes were performed. Windows shell/native utility evidence belongs to the complementary U-002 reviewers/coordinator. Publisher/dependency/schema/license/CI and actual distributed release inventories belong to later U-003; only consequential acceptance handoffs were read here. Historical/runtime/release/manual transcript records remain frozen and were not revalidated. Index modes beyond observed intent-to-add and assume-unchanged remain explicit limits as stated under R-003.

## Subarea verdict

Complete 160-path source/hash coverage with one confirmed P2 finding, R-003. Correct and objectively recheck the export/held-snapshot index-flag family before accepting this subarea. No other source defect was confirmed, and no fresh consumer, installed-client or live-provider acceptance result is established. No additional recommendation is asserted as a release requirement.
