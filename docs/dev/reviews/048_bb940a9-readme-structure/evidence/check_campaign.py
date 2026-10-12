"""Verify campaign 048 source links, entry contracts and native reproducible ZIPs.

Read current committed source; write only this active campaign's check result.
No provider, client or live consumer operations occur.
"""
import ast
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import subprocess
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[5]
BASE = 'bb940a97bfa71a9791000fcc89557115be5861e6'
OUT = Path(__file__).parent


def git(*args):
    """Return native Git bytes from the established source root."""
    return subprocess.check_output(['git', '-C', str(ROOT), *args])


def load(name, relative):
    """Load a source helper without changing the target project."""
    spec = importlib.util.spec_from_file_location(name, ROOT / relative)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


source = git('rev-parse', 'HEAD').decode().strip()
publisher = load('publisher', '.github/scripts/release.py')
core = load('snapshot_core', 'acceptance/textstats/scripts/core.py')
manifest = publisher.validate_manifest(git('show', source + ':plugin.json'))
expected = publisher.tree_inventory(ROOT, source)
pinned, files = core.package(ROOT, {'plugin_revision': source, 'source_mode': 'committed'})
assert set(files) == set(expected)
assert 'PLUGIN.md' in files and 'AGENTS.md' not in files
assert 'unittest' not in files['PLUGIN.md'].decode()
notes = '# Verification fixture\n\nNative build only.\n'
data = {'source': source, 'notes_source': source, 'tag': 'v' + manifest['version'],
        'notes': notes, 'notes_sha256': hashlib.sha256(notes.encode()).hexdigest(),
        'publish': False, 'prerelease': False, 'make_latest': False, 'request_id': 'review-048'}
with tempfile.TemporaryDirectory() as temp:
    hashes = []
    for name in ('first', 'second'):
        outputs = publisher.build_package(ROOT, data, Path(temp) / name)
        hashes.append({n: hashlib.sha256(p.read_bytes()).hexdigest() for n, p in outputs.items()})
    assert hashes[0] == hashes[1]
    inventory = publisher.inspect_archive(ROOT, source, Path(temp) / 'first/sdd-manager.zip')
    with zipfile.ZipFile(Path(temp) / 'first/sdd-manager.zip') as archive:
        names = archive.namelist()
        assert archive.read('sdd-manager/PLUGIN.md') == files['PLUGIN.md']
        assert 'sdd-manager/AGENTS.md' not in names
        assert not any('/acceptance/' in n for n in names)
paths = git('ls-tree', '-r', '--name-only', source).decode().splitlines()
current = [p for p in paths if not p.startswith(('docs/dev/reviews/', 'docs/dev/features/', 'docs/dev/reports/'))
           and p not in {'EXPLORE_DRIVE_V1.md', 'EXPLORE_DRIVE_V2.md'}]
links = 0
for name in current:
    path = ROOT / name
    if path.suffix == '.py':
        assert ast.get_docstring(ast.parse(path.read_text())), name
    if path.suffix != '.md':
        continue
    body = re.sub(r'^```.*?^```[^\n]*', '', path.read_text(), flags=re.M | re.S)
    body = re.sub(r'`[^`\n]+`', '', body)
    for target in re.findall(r'!?\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)', body):
        target = target.strip('<>')
        if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', target):
            continue
        links += 1
        file = target.partition('#')[0]
        resolved = (path.parent / file).resolve() if file else path
        assert resolved.is_relative_to(ROOT) and resolved.exists(), (name, target)
readme = (ROOT / 'README.md').read_text()
old = git('show', BASE + ':README.md').decode()
assert re.findall(r'```mermaid.*?```', readme, re.S) == re.findall(r'```mermaid.*?```', old, re.S)
entry = (ROOT / 'PLUGIN.md').read_text()
assert len(set(re.findall(r'skills/(sdd-[^/]+)/SKILL.md', entry))) == 15
assert '## ChatGPT website approvals and host automatic review' not in readme
for name in ('README.md', 'PLUGIN.md', 'AGENTS.md', 'acceptance/TEXTSTATS.md'):
    body = (ROOT / name).read_text()
    assert not re.search(r'\n[ \t]*\n[ \t]*\n', body), name
    lines = body.splitlines()
    for i, line in enumerate(lines):
        if line.startswith('#'):
            assert i + 1 == len(lines) or lines[i + 1] == '', (name, i)
changed = git('diff', '--name-only', BASE, source).decode().splitlines()
assert not any(p.startswith(('docs/dev/reviews/', 'docs/dev/features/', 'docs/dev/reports/'))
               and not p.startswith('docs/dev/reviews/048_bb940a9-readme-structure/')
               and p != 'docs/dev/reviews/README.md' for p in changed)
git('diff', '--check', BASE, source, '--', '.',
    ':(exclude)docs/dev/reviews/048_bb940a9-readme-structure/evidence/*.log')
result = {'source': source, 'base': BASE, 'core_manifest_valid': True,
          'package_files': len(inventory), 'reproducible_build_hashes': hashes[0],
          'publisher_snapshot_inventory_agreement': True, 'plugin_entry_exact': True,
          'development_agents_and_acceptance_excluded': True,
          'current_local_links': links, 'four_diagrams_byte_identical': True,
          'all_15_skill_routes': True, 'entry_heading_blank_spacing': 'pass',
          'closed_records_unchanged': True,
          'limits': 'Static/native source checks; no Mermaid render, client or consumer/provider trial.'}
(OUT / 'campaign-checks.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
