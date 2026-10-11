"""Inventory and validate current source/package; excludes closed records."""
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import subprocess
import tempfile
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parents[5]
OUT = Path(__file__).parent
SOURCE = '818d66f6baf8e3a324d29f3430d3bac3278f0dd2'

def git(*args):
    return subprocess.check_output(['git', '-C', str(ROOT), *args])

paths = git('ls-tree', '-r', '--name-only', SOURCE).decode().splitlines()
excluded = [p for p in paths if p.startswith(('docs/dev/reviews/', 'docs/dev/features/', 'docs/dev/reports/')) or p in ('EXPLORE_DRIVE_V1.md', 'EXPLORE_DRIVE_V2.md')]
current = [p for p in paths if p not in excluded]
inventory = [{'path': p, 'bytes': len(git('show', SOURCE + ':' + p)), 'sha256': hashlib.sha256(git('show', SOURCE + ':' + p)).hexdigest()} for p in current]
(OUT / 'source-inventory.json').write_text(json.dumps({'source': SOURCE, 'current': inventory, 'excluded_paths': excluded, 'exclusions': 'Closed campaign/feature/phase records and retained exploration transcripts; no current-validity assessment.'}, indent=2) + '\n')
spec = importlib.util.spec_from_file_location('publisher', ROOT / '.github/scripts/release.py')
publisher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(publisher)
expected = publisher.tree_inventory(ROOT, SOURCE)
with tempfile.TemporaryDirectory() as td:
    archive = Path(td) / 'sdd-manager.zip'
    git('archive', '--format=zip', '--prefix=sdd-manager/', '--output=' + str(archive), SOURCE, '--', *publisher.PACKAGE_PATHS)
    publisher.inspect_archive(ROOT, SOURCE, archive)
    raw = archive.read_bytes()
    with zipfile.ZipFile(archive) as z:
        manifest = json.loads(z.read('sdd-manager/plugin.json'))
        from jsonschema import Draft202012Validator
        schema = json.loads(Path('/tmp/042-plugin.schema.json').read_text())
        errors = [e.message for e in Draft202012Validator(schema).iter_errors(manifest)]
        assets = [v for k, v in manifest['extensions']['com.openai']['interface'].items() if k in ('composerIcon', 'composerIconDark', 'logo', 'logoDark')]
        assert all('sdd-manager/' + p.removeprefix('./') in z.namelist() for p in assets)
    package = {'files': len(expected), 'sha256': hashlib.sha256(raw).hexdigest(), 'schema_sha256': hashlib.sha256(Path('/tmp/042-plugin.schema.json').read_bytes()).hexdigest(), 'schema_errors': errors, 'assets_present': True, 'source_members_match': True}
links = []; issues = []
for name in current:
    path = ROOT / name
    if path.suffix == '.svg': ET.parse(path)
    if path.suffix != '.md': continue
    body = re.sub(r'^```.*?^```[^\n]*', '', path.read_text(), flags=re.M | re.S)
    for target in re.findall(r'!?\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)', body):
        target = target.strip('<>')
        if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', target): continue
        file, _, anchor = target.partition('#')
        resolved = (path.parent / file).resolve() if file else path
        item = {'from': name, 'target': target}
        if not resolved.is_relative_to(ROOT): item['issue'] = 'escape'
        elif not resolved.exists(): item['issue'] = 'missing'
        elif name.startswith('skills/') and str(resolved.relative_to(ROOT)) not in expected: item['issue'] = 'not-shipped'
        elif anchor and resolved.suffix == '.md':
            heads = re.findall(r'^#{1,6}\s+(.+)', resolved.read_text(), re.M)
            slugs = [re.sub(r'[^\w\- ]', '', h.lower()).replace(' ', '-') for h in heads]
            if anchor not in slugs: item['issue'] = 'anchor-needs-inspection'
        links.append(item)
        if 'issue' in item: issues.append(item)
(OUT / 'structural-checks.json').write_text(json.dumps({'source': SOURCE, 'current_files': len(current), 'package': package, 'local_links': len(links), 'link_issues': issues, 'skill_entries': len(list((ROOT / 'skills').glob('*/SKILL.md'))), 'limits': 'Inline Markdown links outside fenced examples; anchor slug checker is conservative; remote links and client loading are not executed.'}, indent=2) + '\n')
print(json.dumps({'current_files': len(current), 'package': package, 'links': len(links), 'issues': issues}, indent=2))
