"""Exact-candidate package publisher; dispatch data never becomes shell code."""
import hashlib
import json
import re

FIELDS = {'source', 'tag', 'notes_source', 'notes', 'notes_sha256', 'publish',
          'prerelease', 'make_latest', 'request_id'}


def validate_handoff(data):
    """Validate source-associated curated notes and explicit publication policy."""
    if not isinstance(data, dict) or set(data) != FIELDS:
        raise ValueError('Handoff fields do not match the declared contract')
    if len(json.dumps(data, ensure_ascii=False).encode('utf-8')) > 60000:
        raise ValueError('Handoff exceeds the supported transfer size')
    for key in ('source', 'notes_source'):
        if not isinstance(data[key], str) or not re.fullmatch(r'[0-9a-f]{40}', data[key]):
            raise ValueError('Source must be a full lowercase commit SHA')
    if data['notes_source'] != data['source']:
        raise ValueError('Curated notes belong to a different source')
    for key in ('publish', 'prerelease', 'make_latest'):
        if type(data[key]) is not bool:
            raise ValueError('Publication policies must be Boolean')
    if data['prerelease'] and data['make_latest']:
        raise ValueError('A prerelease cannot be selected as latest')
    if not isinstance(data['tag'], str) or not re.fullmatch(r'v[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?', data['tag']):
        raise ValueError('Tag must be a version tag')
    if not isinstance(data['request_id'], str) or not re.fullmatch(r'[A-Za-z0-9_-]{1,80}', data['request_id']):
        raise ValueError('Invalid request correlation ID')
    notes = data['notes']
    if not isinstance(notes, str) or not notes.strip() or notes.lstrip().startswith('---') or '\x00' in notes:
        raise ValueError('Curated Markdown body is missing or contains control metadata')
    if hashlib.sha256(notes.encode('utf-8')).hexdigest() != data['notes_sha256']:
        raise ValueError('Curated notes digest differs')
    return data


PACKAGE_PATHS = ('assets', 'skills', '.codex-plugin', 'LICENSE', 'plugin.json',
                 'README.md', 'AGENTS.md', 'Greenfield Project Prompt Template.md',
                 'SDD-MANAGER.md', 'AI_DISCLOSURE.md')


def git(root, *args):
    import subprocess
    return subprocess.check_output(['git', '-C', str(root), *args])


def tree_inventory(root, source):
    """Enumerate only shipped committed regular files, retaining blob identities."""
    records = git(root, 'ls-tree', '-rz', source, '--', *PACKAGE_PATHS).split(b'\0')
    files = {}
    for record in filter(None, records):
        metadata, name = record.split(b'\t', 1)
        mode, kind, oid = metadata.decode('ascii').split()
        path = name.decode('utf-8')
        if mode not in ('100644', '100755') or kind != 'blob':
            raise ValueError('Package contains non-regular committed content')
        files[path] = oid
    for selected in PACKAGE_PATHS:
        if not any(path == selected or path.startswith(selected + '/') for path in files):
            raise ValueError('Required package path is absent: ' + selected)
    return files


def inspect_archive(root, source, archive):
    """Verify actual archive paths and every member against the pinned Git tree."""
    import stat
    import zipfile
    from pathlib import PurePosixPath
    expected = tree_inventory(root, source)
    seen = set(); folded = set()
    with zipfile.ZipFile(archive) as zipped:
        for item in zipped.infolist():
            path = PurePosixPath(item.filename)
            if '\\' in item.filename or path.is_absolute() or '..' in path.parts or not item.filename.startswith('sdd-manager/'):
                raise ValueError('Unsafe archive member')
            if item.filename in seen or item.filename.casefold() in folded:
                raise ValueError('Duplicate archive member')
            seen.add(item.filename); folded.add(item.filename.casefold())
            mode = item.external_attr >> 16
            if stat.S_ISLNK(mode): raise ValueError('Archive symlink is forbidden')
            if item.is_dir():
                directory = item.filename[len('sdd-manager/'):].rstrip('/')
                if directory and not any(p.startswith(directory + '/') for p in expected):
                    raise ValueError('Unexpected archive directory')
                continue
            name = item.filename[len('sdd-manager/'):]
            if name not in expected or zipped.read(item) != git(root, 'cat-file', 'blob', expected[name]):
                raise ValueError('Archive member differs from exact candidate')
        actual = {name[len('sdd-manager/'):] for name in seen if not name.endswith('/')}
        if actual != set(expected): raise ValueError('Archive inventory is incomplete')
    return expected


def build_package(root, data, output):
    """Build and verify exact committed bytes before any publisher access."""
    from pathlib import Path
    validate_handoff(data)
    source = data['source']
    if git(root, 'rev-parse', 'HEAD').decode().strip() != source:
        raise ValueError('Candidate checkout differs from selected source')
    manifest = git(root, 'show', source + ':plugin.json')
    if manifest != git(root, 'show', source + ':.codex-plugin/plugin.json'):
        raise ValueError('Legacy manifest differs from canonical manifest')
    if data['tag'] != 'v' + json.loads(manifest)['version']:
        raise ValueError('Tag does not match candidate manifest version')
    tree_inventory(root, source)
    output = Path(output); output.mkdir(parents=True, exist_ok=True)
    archive = output / 'sdd-manager.zip'
    git(root, 'archive', '--format=zip', '--prefix=sdd-manager/',
        '--output=' + str(archive.resolve()), source, '--', *PACKAGE_PATHS)
    inspect_archive(root, source, archive)
    if not archive.stat().st_size: raise ValueError('Package archive is empty')
    checksum = output / 'sdd-manager.zip.sha256'
    checksum.write_text(hashlib.sha256(archive.read_bytes()).hexdigest() + '  sdd-manager.zip\n', encoding='ascii')
    return {archive.name: archive, checksum.name: checksum}
