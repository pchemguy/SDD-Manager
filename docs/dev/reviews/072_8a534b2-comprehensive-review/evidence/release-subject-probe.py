"""Reproduce capture overconstraint with disposable native Git release objects."""
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[5]
spec = importlib.util.spec_from_file_location("release_capture", ROOT/"acceptance/textstats/cases/assessor/release_capture.py")
capture = importlib.util.module_from_spec(spec)
spec.loader.exec_module(capture)
results = []
with tempfile.TemporaryDirectory(prefix="sdd-072-subject-") as temp:
    for index, subject in enumerate(("Release 0.15.0", "Release v0.15.0")):
        root = Path(temp)/str(index)
        root.mkdir()
        def git(*args):
            return subprocess.check_output(["git", "-C", str(root), *args], stderr=subprocess.PIPE).decode().strip()
        git("init", "-q")
        git("config", "user.name", "Fixture")
        git("config", "user.email", "fixture@example.invalid")
        notes = b"SDD Manager 0.15.0\n\nVerified fixture body.\n"
        (root/"RELEASE-NOTES.md").write_bytes(notes)
        message = Path(temp)/(str(index)+"-message.txt")
        message.write_bytes(subject.encode()+b"\n\n"+notes)
        git("add", "RELEASE-NOTES.md")
        git("commit", "--cleanup=verbatim", "-F", str(message))
        commit = git("rev-parse", "HEAD")
        git("tag", "v0.15.0")
        provider = Path(temp)/(str(index)+"-provider.json")
        provider.write_text(json.dumps(dict(body=notes.decode(), target_commit=commit,
            evidence_class="controlled", state="published", release_id=1)))
        evidence, _ = capture.capture(root, release_commit=commit, tag="v0.15.0", provider_readback=provider)
        results.append(dict(subject=subject, literals=evidence["literals"]))
assert results[0]["literals"]["commit_body_matches_notes"]
assert not results[0]["literals"]["release_agreement"]
assert results[1]["literals"]["release_agreement"]
print(json.dumps(dict(baseline="8a534b21f6318f0b76b11a19783f7d40ca94d698", results=results,
                     limit="Native Git and supplied controlled readback only; no agent/provider execution"), indent=2))
