"""Controlled naming-gate repair trial; no provider calls or general validator."""
from pathlib import Path
import hashlib
import importlib.util
import json
import re
import tempfile

VERSION_NAME = re.compile(r"(?:^|[-_.])v?\d+\.\d+\.\d+(?=[-_.]|$)", re.I)


def gate(directory, required):
    """Apply this fixture's independent stable-name and exact-byte contract."""
    if len(required) != len(set(required)):
        raise ValueError("variant name collision")
    if any(VERSION_NAME.search(name) for name in required):
        raise ValueError("release version in declared asset name")
    actual = sorted(p.name for p in directory.iterdir() if p.is_file())
    if any(VERSION_NAME.search(name) for name in actual):
        raise ValueError("release version in actual asset name")
    if set(actual) != set(required) | {"SHA256SUMS"}:
        raise ValueError("actual inventory differs from independent contract")
    entries = {}
    for line in (directory / "SHA256SUMS").read_text().splitlines():
        digest, name = line.split("  ", 1)
        if name in entries:
            raise ValueError("duplicate checksum name")
        entries[name] = digest
    if set(entries) != set(required):
        raise ValueError("checksum filenames differ")
    for name, digest in entries.items():
        if hashlib.sha256((directory / name).read_bytes()).hexdigest() != digest:
            raise ValueError("checksum bytes differ")


def reject(directory, required):
    try:
        gate(directory, required)
    except ValueError as error:
        return str(error)
    raise AssertionError("bad fixture was accepted")


def sums(directory, names):
    (directory / "SHA256SUMS").write_text("".join(
        hashlib.sha256((directory / name).read_bytes()).hexdigest()
        + "  " + name + "\n" for name in names))


def main():
    outcomes = {}
    with tempfile.TemporaryDirectory(prefix="sdd134-") as temp:
        root = Path(temp)
        (root / "index.html").write_text("<!doctype html><title>Tetris</title>")
        script = root / "package.py"
        script.write_text('''from pathlib import Path
import hashlib
VERSION = "0.5.0"
def build(root):
    output = root / "dist" / VERSION
    output.mkdir(parents=True, exist_ok=True)
    artifact = output / ("tetris-v" + VERSION + ".html")
    artifact.write_bytes((root / "index.html").read_bytes())
    (output / "SHA256SUMS").write_text(hashlib.sha256(artifact.read_bytes()).hexdigest() + "  " + artifact.name + "\\n")
    return output
''')
        docs = root / "README.md"
        docs.write_text("Download tetris-v0.5.0.html; use its versioned release URL.")

        def build():
            spec = importlib.util.spec_from_file_location("fixture_package", script)
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            return module.build(root)

        output = build()
        outcomes["versioned_actual_with_valid_hash"] = reject(output, ["tetris.html"])
        outcomes["self_approved_bad_expected_set"] = reject(output, ["tetris-v0.5.0.html"])
        before = hashlib.sha256(script.read_bytes()).hexdigest()
        script.write_text(script.read_text().replace(
            '("tetris-v" + VERSION + ".html")', '"tetris.html"'))
        docs.write_text("Download tetris.html via /releases/latest/download/tetris.html.")
        # Remove only this owned generated candidate; do not rename its old upload.
        for item in output.iterdir():
            item.unlink()
        output = build()
        gate(output, ["tetris.html"])
        assert before != hashlib.sha256(script.read_bytes()).hexdigest()
        assert (output / "tetris.html").read_bytes() == (root / "index.html").read_bytes()
        assert "tetris-v" not in docs.read_text()
        outcomes["producer_docs_repair_rebuild"] = "pass; checksum names and bytes agree"
        outcomes["variant_collision"] = reject(output, ["tetris.html", "tetris.html"])
        (output / "tetris.html").write_text("changed after checksumming")
        outcomes["stale_checksum_bytes"] = reject(output, ["tetris.html"])
        for item in output.iterdir():
            item.unlink()
        names = ["project2.html", "project-windows-x64.zip", "project-linux-arm64.tar.gz",
                 "project-chromium.zip", "project-firefox.zip"]
        for name in names:
            (output / name).write_bytes(b"controlled fixture bytes; not an installable package")
        sums(output, names)
        gate(output, names)
        outcomes["stable_numeric_identity_and_real_variants"] = "pass; naming/checksum check only"
    print(json.dumps({"scope": "controlled local gate trial; no live publisher or agent acceptance",
                      "outcomes": outcomes}, indent=2))


if __name__ == "__main__":
    main()
