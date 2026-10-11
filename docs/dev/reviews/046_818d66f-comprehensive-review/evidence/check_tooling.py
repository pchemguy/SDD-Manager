"""Inspect YAML/entry metadata and reproduce publisher conformance omission."""
import hashlib
import importlib.util
import json
from pathlib import Path
import platform
import subprocess
import tempfile
import yaml
from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[5]
OUT = Path(__file__).parent
yaml_paths = [ROOT / '.github/workflows/release.yml', *sorted((ROOT / 'skills').glob('*/agents/openai.yaml'))]
for path in yaml_paths:
    assert isinstance(yaml.load(path.read_text(), Loader=yaml.BaseLoader), dict)
entries = []
for path in sorted((ROOT / 'skills').glob('*/SKILL.md')):
    metadata = yaml.safe_load(path.read_text().split('---', 2)[1])
    assert metadata['name'] == path.parent.name and isinstance(metadata['description'], str) and len(metadata['description']) <= 1024
    entries.append({'skill': metadata['name'], 'description_chars': len(metadata['description'])})
spec = importlib.util.spec_from_file_location('publisher', ROOT / '.github/scripts/release.py')
publisher = importlib.util.module_from_spec(spec); spec.loader.exec_module(publisher)
with tempfile.TemporaryDirectory() as td:
    root = Path(td) / 'fixture'; root.mkdir()
    def git(*args): return subprocess.check_output(['git', '-C', str(root), *args], stderr=subprocess.PIPE).decode().strip()
    git('init', '-b', 'main'); git('config', 'user.name', 'Review fixture'); git('config', 'user.email', 'review@example.invalid')
    for name in ('LICENSE', 'README.md', 'AGENTS.md', 'Greenfield Project Prompt Template.md', 'SDD-MANAGER.md', 'AI_DISCLOSURE.md', 'assets/icon.svg', 'skills/sample/SKILL.md'):
        path = root / name; path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text('Fixture content\n')
    manifest = {'name': 'sdd-manager', 'version': '0.15.0'}
    (root / 'plugin.json').write_text(json.dumps(manifest))
    git('add', '.'); git('commit', '-m', 'Nonconforming fixture')
    source = git('rev-parse', 'HEAD')
    notes = '## Release v0.15.0\n\nFixture message.\n'
    data = dict(source=source, notes_source=source, tag='v0.15.0', notes=notes, notes_sha256=hashlib.sha256(notes.encode()).hexdigest(), publish=False, prerelease=False, make_latest=False, request_id='review-conformance')
    built = publisher.build_package(root, data, Path(td) / 'output')
    errors = [e.message for e in Draft202012Validator(json.loads(Path('/tmp/042-plugin.schema.json').read_text())).iter_errors(manifest)]
    omission = {'fixture_manifest': manifest, 'canonical_schema_errors': errors, 'publisher_accepted': bool(built), 'outputs': sorted(built), 'provider_calls': 0, 'interpretation': 'Publisher checks exact bytes/version/inventory, but does not itself enforce portable manifest or skill-entry conformance. Current real candidate independently passes manifest checks.'}
with tempfile.TemporaryDirectory() as td:
    candidate = Path(td) / 'candidate'
    subprocess.run(['git', 'clone', '--quiet', '--shared', '--no-checkout', str(ROOT), str(candidate)], check=True)
    source = '818d66f6baf8e3a324d29f3430d3bac3278f0dd2'
    subprocess.run(['git', '-C', str(candidate), 'checkout', '--quiet', '--detach', source], check=True)
    notes = '## Release v0.15.0\n\nReview build-only fixture; no publication.\n'
    data = dict(source=source, notes_source=source, tag='v0.15.0', notes=notes, notes_sha256=hashlib.sha256(notes.encode()).hexdigest(), publish=False, prerelease=False, make_latest=False, request_id='review-build-only')
    event = Path(td) / 'event.json'; event.write_text(json.dumps({'inputs': {'handoff': json.dumps(data)}}))
    observations = []
    for n in range(2):
        output = Path(td) / ('build-' + str(n))
        proc = subprocess.run(['python', str(candidate / '.github/scripts/release.py'), '--event', str(event), '--root', str(candidate), '--output', str(output), '--build-only'], capture_output=True, text=True, check=True)
        observations.append(json.loads(proc.stdout))
    assert observations[0]['assets'] == observations[1]['assets']
    assert all(not x['published'] for x in observations)
    build = {'source': source, 'two_build_hashes_match': True, 'observation': observations[0], 'provider_calls': 0}
result = {'actual_build_only': build, 'python':  platform.python_version(), 'platform': platform.system(), 'yaml_documents_parsed': len(yaml_paths), 'skill_entries': entries, 'publisher_conformance_probe': omission, 'limits': 'YAML parsing is not Actions validation or CI execution; skill description/schema shape is not client activation.'}
(OUT / 'tooling-checks.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
