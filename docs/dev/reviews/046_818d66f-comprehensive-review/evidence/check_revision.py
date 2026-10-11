"""Check current revision scope, offline manifest and actual reproducible package.

Exclude closed record contents from validity checks; inspect Git path diffs only.
No consumer, client, hosted CI or release effects occur here.
"""
import ast
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[5]
BASE = 'f4741d709d5969772124a071d6d7ad60f8aeb697'
CAMPAIGN = 'docs/dev/reviews/046_818d66f-comprehensive-review/'
OUT = Path(__file__).parent


def git(*args):
    """Return native Git output from the established source repository."""
    return subprocess.check_output(['git', '-C', str(ROOT), *args])


source = git('rev-parse', 'HEAD').decode().strip()
changed = git('diff', '--name-only', BASE, 'HEAD').decode().splitlines()
assert all(p.startswith(('acceptance/textstats/', '.github/', CAMPAIGN))
           or p in {'README.md', 'AGENTS.md', 'docs/dev/CAPABILITY-MAP.md', 'docs/dev/reviews/README.md'}
           for p in changed), changed
spec = importlib.util.spec_from_file_location('publisher', ROOT / '.github/scripts/release.py')
publisher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(publisher)
manifest = publisher.validate_manifest(git('show', source + ':plugin.json'))
notes = '# Verification fixture\n\nLocal build only.\n'
data = {'source': source, 'notes_source': source, 'tag': 'v' + manifest['version'],
        'notes': notes, 'notes_sha256': hashlib.sha256(notes.encode()).hexdigest(),
        'publish': False, 'prerelease': False, 'make_latest': False, 'request_id': 'review-046'}
with tempfile.TemporaryDirectory() as temp:
    hashes = []
    for name in ('first', 'second'):
        files = publisher.build_package(ROOT, data, Path(temp) / name)
        hashes.append({n: hashlib.sha256(p.read_bytes()).hexdigest() for n, p in files.items()})
    assert hashes[0] == hashes[1]
    inventory = publisher.inspect_archive(ROOT, source, Path(temp) / 'first/sdd-manager.zip')
paths = git('ls-tree', '-r', '--name-only', source).decode().splitlines()
current = [p for p in paths if not p.startswith(('docs/dev/reviews/', 'docs/dev/features/', 'docs/dev/reports/'))
           and p not in {'EXPLORE_DRIVE_V1.md', 'EXPLORE_DRIVE_V2.md'}]
issues = []
links = 0
for name in current:
    path = ROOT / name
    if path.suffix == '.py':
        tree = ast.parse(path.read_text())
        assert ast.get_docstring(tree), name
    if path.suffix != '.md': continue
    body = re.sub(r'^```.*?^```[^\n]*', '', path.read_text(), flags=re.M | re.S)
    body = re.sub(r'`[^`\n]+`', '', body)
    for target in re.findall(r'!?\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)', body):
        target = target.strip('<>')
        if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', target): continue
        links += 1
        file = target.partition('#')[0]
        resolved = (path.parent / file).resolve() if file else path
        if not resolved.is_relative_to(ROOT) or not resolved.exists():
            issues.append({'from': name, 'target': target})
assert not issues, issues
for name in changed:
    path = ROOT / name
    if path.suffix != '.md' or not path.exists(): continue
    lines = path.read_text().splitlines()
    for i, line in enumerate(lines):
        if line.startswith('#'): assert i + 1 == len(lines) or lines[i + 1] == '', (name, i)
git('diff', '--check', BASE, 'HEAD', '--', '.', ':(exclude)' + CAMPAIGN + 'evidence/*.log')
result = {'source': source, 'base': BASE, 'closed_records_unchanged': True,
          'core_manifest_valid': True, 'package_files': len(inventory),
          'reproducible_build_hashes': hashes[0], 'current_files': len(current),
          'resolved_current_local_links': links, 'confirmed_link_issues': issues,
          'python_module_syntax_and_docstrings': 'pass', 'changed_heading_spacing': 'pass',
          'diff_whitespace': 'source pass; original raw test logs excluded',
          'limits': 'Local native build/source checks only; no runtime acceptance or hosted/client execution.'}
(OUT / 'revision-checks.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
