"""Exercise merge directions in disposable Git; this is not an agent trial."""
import copy
import json
from pathlib import Path
import subprocess
import tempfile

results = []
with tempfile.TemporaryDirectory(prefix="sdd-072-directions-") as temp:
    root = Path(temp)
    def git(*args, check=True):
        return subprocess.run(["git", "-C", str(root), *args], capture_output=True, text=True, check=check)
    def sha(ref="HEAD"):
        return git("rev-parse", ref).stdout.strip()
    def record(branch, parent, stage):
        return dict(workflow=branch, creation_parent=parent, branch_off=sha(), stage=stage,
                    stop="human checkpoint", pending=["remaining scoped work"])
    def commit(snapshot, name, text):
        (root/name).write_text(text)
        (root/"HANDOFF.json").write_text(json.dumps(snapshot, sort_keys=True))
        git("add", ".")
        git("commit", "-qm", name)
        return sha()
    def merge(source, receiver, purpose):
        before, incoming = sha(), sha(source)
        result = git("merge", "--no-ff", "--no-commit", incoming, check=False)
        assert result.returncode in (0, 1), result.stderr
        assert set(git("diff", "--name-only", "--diff-filter=U").stdout.splitlines()) <= {"HANDOFF.json"}
        retained = copy.deepcopy(receiver)
        retained["incorporated"] = incoming
        (root/"HANDOFF.json").write_text(json.dumps(retained, sort_keys=True))
        git("add", "HANDOFF.json")
        git("diff", "--check")
        git("commit", "-qm", purpose)
        assert git("show", "-s", "--format=%P", "HEAD").stdout.split() == [before, incoming]
        actual = json.loads((root/"HANDOFF.json").read_text())
        for key in ("workflow", "creation_parent", "branch_off", "stage", "stop", "pending"):
            assert actual[key] == receiver[key]
        results.append(dict(purpose=purpose, receiving=git("branch", "--show-current").stdout.strip(),
                            incoming=incoming, commit=sha(), retained_context=True, two_parents=True))
    git("init", "-q", "-b", "main")
    git("config", "user.name", "Fixture")
    git("config", "user.email", "fixture@example.invalid")
    initial = dict(workflow="main", creation_parent=None, branch_off=None, stage="project checkpoint",
                   stop="human checkpoint", pending=[])
    base = commit(initial, "baseline.txt", "initial")
    git("checkout", "-qb", "phase/1")
    phase = record("phase/1", "main", "incomplete phase")
    commit(phase, "phase.txt", "partial phase work")
    git("checkout", "-q", "main")
    preparation = commit(initial, "preparation.txt", "accepted preparation")
    git("checkout", "-q", "phase/1")
    merge("main", phase, "synchronize preparation into unfinished phase")
    assert (root/"phase.txt").exists() and (root/"preparation.txt").exists()
    git("checkout", "-qb", "feature/one")
    feature = record("feature/one", "phase/1", "feature complete")
    commit(feature, "feature.txt", "accepted feature result")
    git("checkout", "-q", "phase/1")
    merge("feature/one", phase, "complete feature into its phase parent")
    assert sha("main") == preparation
    assert git("cat-file", "-e", "main:phase.txt", check=False).returncode != 0
    assert git("merge-base", "--is-ancestor", preparation, "phase/1", check=False).returncode == 0
    git("checkout", "-qb", "revision/one", base)
    revision = record("revision/one", "main", "revision in progress")
    commit(revision, "revision.txt", "bounded revision")
    merge("main", revision, "synchronize default into existing revision")
    git("checkout", "-q", "main")
    merge("revision/one", initial, "complete revision into main")
    commit(initial, "later.txt", "published later main change")
    git("checkout", "-q", "revision/one")
    amendment = copy.deepcopy(revision)
    amendment["stage"] = "reopened amendment"
    merge("main", amendment, "synchronize refreshed target into reopened campaign")
    commit(amendment, "amendment.txt", "accepted amendment")
    git("checkout", "-q", "main")
    merge("revision/one", initial, "complete reopened amendment into original parent")
    assert git("merge-base", "--is-ancestor", "revision/one", "main", check=False).returncode == 0
print(json.dumps(dict(scenarios=results, incomplete_phase_stayed_unmerged=True,
    limit="Native Git/explicit fixture reconciliation only; no consumer or remote publication"), indent=2))
