"""Read-only publisher probes; all candidate builds use disposable clones."""
import hashlib
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[5]
BASELINE = "8a534b21f6318f0b76b11a19783f7d40ca94d698"
spec = importlib.util.spec_from_file_location("publisher", ROOT / ".github/scripts/release.py")
publisher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(publisher)

def handoff(source, version):
    notes = "Comprehensive review build probe only.\n"
    return dict(source=source, notes_source=source, tag="v"+version, notes=notes,
                notes_sha256=hashlib.sha256(notes.encode()).hexdigest(), publish=False,
                prerelease=False, make_latest=False, request_id="review-072")

result = {"baseline": BASELINE}
with tempfile.TemporaryDirectory(prefix="sdd-072-build-") as temp:
    clone = Path(temp)/"candidate"
    subprocess.run(["git", "clone", "--quiet", "--shared", "--no-checkout", str(ROOT), str(clone)], check=True)
    subprocess.run(["git", "-C", str(clone), "checkout", "--quiet", "--detach", BASELINE], check=True)
    manifest = json.loads((clone/publisher.PACKAGE_SUBDIR/"plugin.json").read_text())
    paths = publisher.build_package(clone, handoff(BASELINE, manifest["version"]), Path(temp)/"build")
    raw = paths["sdd-manager.zip"].read_bytes()
    with zipfile.ZipFile(paths["sdd-manager.zip"]) as archive:
        members = [i for i in archive.infolist() if not i.is_dir()]
        result["package"] = dict(version=manifest["version"], files=len(members), bytes=len(raw),
                                 sha256=hashlib.sha256(raw).hexdigest(),
                                 comment=archive.comment.decode(), exact_members_verified=True)
    manifest["version"] = "0.15.0+build.1"
    publisher.validate_manifest(json.dumps(manifest).encode())
    try:
        publisher.validate_handoff(handoff(BASELINE, manifest["version"]))
    except ValueError as error:
        result["build_metadata_contrast"] = dict(core_schema="accepted", handoff="rejected", reason=str(error))
    else:
        raise AssertionError("Expected version-contract mismatch did not reproduce")
print(json.dumps(result, indent=2))
