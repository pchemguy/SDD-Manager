"""Publisher contracts: real Git/ZIP fixtures and controlled provider boundaries."""
import copy
import hashlib
import importlib.util
import json
import os
import sys
from unittest import mock
from pathlib import Path
import subprocess
import tempfile
import unittest
import zipfile
import warnings

SCRIPT = Path(__file__).parents[1] / 'scripts' / 'release.py'
if SCRIPT.exists():
    spec = importlib.util.spec_from_file_location('publisher', SCRIPT)
    publisher = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(publisher)
else:
    publisher = None


def handoff(**changes):
    notes = '## Changes\n\nHuman section — $(touch SHOULD_NOT_EXIST)\n'
    data = dict(source='a' * 40, tag='v0.15.0', notes_source='a' * 40,
                notes=notes, notes_sha256=hashlib.sha256(notes.encode()).hexdigest(),
                publish=False, prerelease=False, make_latest=False, request_id='trial-001')
    data.update(changes)
    return data


class Contract(unittest.TestCase):
    def setUp(self):
        self.assertIsNotNone(publisher, 'Selected publisher implementation is absent')


class HandoffTests(Contract):
    def test_curated_multiline_bytes_survive(self):
        data = handoff()
        self.assertEqual(publisher.validate_handoff(data), data)
        self.assertFalse(Path('SHOULD_NOT_EXIST').exists())

    def test_invalid_inputs_stop(self):
        for changes in ({'source': 'main'}, {'notes_source': 'b'*40},
                        {'notes_sha256': '0'*64}, {'notes': ''},
                        {'notes': '---\nx: y\n---\nbody'}, {'notes': 'x'*60001},
                        {'publish': 'false'}, {'unknown': 'value'},
                        {'tag': 'v0.15.0;evil'}, {'prerelease': True, 'make_latest': True}):
            with self.subTest(changes=list(changes)), self.assertRaises(ValueError):
                publisher.validate_handoff(handoff(**changes))

    def test_build_metadata_tags_and_malformed_metadata(self):
        for tag in ('v0.15.0+build.1', 'v0.15.0-rc.1+build.001'):
            with self.subTest(tag=tag):
                data = handoff(tag=tag)
                self.assertEqual(publisher.validate_handoff(data), data)
        for tag in ('v0.15.0+', 'v0.15.0+build..1', 'v0.15.0+build.',
                    'v0.15.0+build_1', 'v0.15.0+build+1', 'v0.15.0+build 1'):
            with self.subTest(invalid_tag=tag), self.assertRaises(ValueError):
                publisher.validate_handoff(handoff(tag=tag))

    def test_missing_field_stops(self):
        data=handoff(); del data['notes_source']
        with self.assertRaises(ValueError): publisher.validate_handoff(data)


class PackageTests(Contract):
    def setUp(self):
        super().setUp()
        self.tmp = tempfile.TemporaryDirectory(); self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)/'repo'; self.root.mkdir()
        self.package=self.root/publisher.PACKAGE_SUBDIR; self.package.mkdir(parents=True)
        def git(*args):
            return subprocess.check_output(['git','-C',str(self.root),*args], text=True).strip()
        self.git=git
        git('init','-q'); git('config','user.name','Fixture'); git('config','user.email','fixture@example.test')
        manifest=json.dumps({"$schema":"https://agent-plugins.org/schemas/1.0.0/plugin.schema.json", "name":"sdd-manager", "version":"0.15.0"}).encode()
        for name in ('LICENSE','README.md','PLUGIN.md','assets/Greenfield Project Prompt Template.md',
                     'assets/SDD-MANAGER.md','assets/AI_DISCLOSURE.md',
                     'assets/AGENTS_TEMPLATE.md','assets/DOCS_TASKS_TEMPLATE.md','assets/HANDOFF_TEMPLATE.md','assets/SKILL_DISCOVERY_PROTOCOL.md',
                     'assets/icon.svg','skills/sample/SKILL.md',
                     'skills/sdd-manage/scripts/git-auth-recover.mjs',
                     'skills/sdd-manage/scripts/git-auth-recover.md',
                     'skills/sdd-manage/scripts/protected-token.mjs',
                     'skills/sdd-forge/scripts/forge-close.mjs',
                     'skills/sdd-forge/scripts/forge-close.md',
                     'skills/sdd-forge/scripts/github-client.mjs',
                     'skills/sdd-forge/scripts/forge-runtime.mjs',
                 'skills/sdd-forge/scripts/projection-input.mjs',
                 'skills/sdd-forge/scripts/forge-project.mjs',
                 'skills/sdd-forge/scripts/forge-project-draft.mjs',
                 'skills/sdd-forge/scripts/forge-project.md',
                 'skills/sdd-forge/scripts/forge-project-input.md',
                     'plugin.json','docs/excluded.md','docs/ai-logs/EXPLORE_DRIVE_V1.md','AGENTS.md'):
            p=(self.root if name.startswith('docs/') or name=='AGENTS.md' else self.package)/name; p.parent.mkdir(parents=True,exist_ok=True)
            p.write_bytes(manifest if name.endswith('plugin.json') else (name+'\n').encode())
        (self.root/'README.md').write_text('Repository introduction must not ship\n')
        (self.root/'AI_DISCLOSURE.md').write_text('Repository disclosure\n')
        (self.root/'SDD-MANAGER.md').write_text('Repository notice\n')
        git('add','.'); git('commit','-qm','fixture'); self.sha=git('rev-parse','HEAD')
        self.data=handoff(source=self.sha,notes_source=self.sha)
        self.out=Path(self.tmp.name)/'output'; self.out.mkdir()

    def test_build_metadata_requires_exact_committed_version(self):
        path = self.package / 'plugin.json'
        manifest = json.loads(path.read_text())
        for version in ('0.15.0+build.1', '0.15.0-rc.1+build.2'):
            with self.subTest(version=version):
                manifest['version'] = version
                path.write_text(json.dumps(manifest))
                self.git('add', str(path.relative_to(self.root)))
                self.git('commit', '-qm', 'fixture build metadata version')
                source = self.git('rev-parse', 'HEAD')
                data = handoff(source=source, notes_source=source, tag='v' + version)
                files = publisher.build_package(self.root, data, self.out)
                with zipfile.ZipFile(files['sdd-manager.zip']) as archive:
                    self.assertEqual(json.loads(archive.read('sdd-manager/plugin.json'))['version'], version)
                with self.assertRaisesRegex(ValueError, 'Tag does not match candidate manifest version'):
                    publisher.build_package(self.root, dict(data, tag='v' + version + '.different'), self.out)

    def test_archive_matches_exact_tree_and_exclusions(self):
        paths=publisher.build_package(self.root,self.data,self.out)
        self.assertEqual(set(paths),{'sdd-manager.zip','sdd-manager.zip.sha256'})
        with zipfile.ZipFile(paths['sdd-manager.zip']) as z:
            self.assertNotIn('sdd-manager/docs/excluded.md',z.namelist())
            self.assertNotIn('sdd-manager/docs/ai-logs/EXPLORE_DRIVE_V1.md',z.namelist())
            self.assertNotIn('sdd-manager/Greenfield Project Prompt Template.md',z.namelist())
            self.assertEqual(z.read('sdd-manager/assets/Greenfield Project Prompt Template.md'),b'assets/Greenfield Project Prompt Template.md\n')
            self.assertEqual(z.read('sdd-manager/README.md'),b'README.md\n')
            self.assertEqual(z.read('sdd-manager/PLUGIN.md'),b'PLUGIN.md\n')
            self.assertNotIn('sdd-manager/AGENTS.md',z.namelist())
            self.assertNotIn('sdd-manager/AI_DISCLOSURE.md',z.namelist())
            self.assertNotIn('sdd-manager/SDD-MANAGER.md',z.namelist())
            self.assertIn('sdd-manager/assets/AI_DISCLOSURE.md',z.namelist())
            self.assertFalse(any('/.agents/' in name for name in z.namelist()))
        raw=paths['sdd-manager.zip'].read_bytes()
        self.assertEqual(paths['sdd-manager.zip.sha256'].read_text(),hashlib.sha256(raw).hexdigest()+'  sdd-manager.zip\n')

    def test_preparation_assets_are_exact_and_missing_assets_block_build(self):
        assets = ('AGENTS_TEMPLATE.md', 'DOCS_TASKS_TEMPLATE.md', 'HANDOFF_TEMPLATE.md', 'SKILL_DISCOVERY_PROTOCOL.md')
        paths = publisher.build_package(self.root, self.data, self.out)
        with zipfile.ZipFile(paths['sdd-manager.zip']) as zipped:
            for name in assets:
                self.assertEqual(zipped.read('sdd-manager/assets/' + name),
                                 (self.package / 'assets' / name).read_bytes())
                self.assertNotIn('sdd-manager/' + name, zipped.namelist())
        for name in assets:
            with self.subTest(missing=name):
                path = self.package / 'assets' / name
                original = path.read_bytes()
                path.unlink()
                self.git('add', '-u'); self.git('commit', '-qm', 'missing preparation asset')
                source = self.git('rev-parse', 'HEAD')
                with self.assertRaisesRegex(ValueError, 'Required package path is absent: assets/' + name):
                    publisher.build_package(self.root, dict(self.data, source=source, notes_source=source),
                                            self.out / name)
                path.write_bytes(original)
                self.git('add', '.'); self.git('commit', '-qm', 'restore preparation asset')

    def test_utility_resources_are_exact_and_required(self):
        names = ('skills/sdd-manage/scripts/git-auth-recover.mjs',
                 'skills/sdd-manage/scripts/git-auth-recover.md',
                 'skills/sdd-manage/scripts/protected-token.mjs',
                 'skills/sdd-forge/scripts/forge-close.mjs',
                 'skills/sdd-forge/scripts/forge-close.md',
                 'skills/sdd-forge/scripts/github-client.mjs',
                 'skills/sdd-forge/scripts/forge-runtime.mjs',
                 'skills/sdd-forge/scripts/projection-input.mjs',
                 'skills/sdd-forge/scripts/forge-project.mjs',
                 'skills/sdd-forge/scripts/forge-project-draft.mjs',
                 'skills/sdd-forge/scripts/forge-project.md',
                 'skills/sdd-forge/scripts/forge-project-input.md')
        paths = publisher.build_package(self.root, self.data, self.out)
        with zipfile.ZipFile(paths['sdd-manager.zip']) as archive:
            for name in names:
                self.assertEqual(archive.read('sdd-manager/' + name),
                                 (self.package / name).read_bytes())
        for name in names:
            with self.subTest(missing=name):
                path = self.package / name
                original = path.read_bytes()
                path.unlink()
                self.git('add', '-u'); self.git('commit', '-qm', 'missing recovery resource')
                source = self.git('rev-parse', 'HEAD')
                with self.assertRaisesRegex(ValueError, 'Required package path is absent'):
                    publisher.build_package(self.root, dict(self.data, source=source, notes_source=source), self.out)
                path.write_bytes(original)
                self.git('add', '.'); self.git('commit', '-qm', 'restore recovery resource')

    def test_rebuild_preserves_commit_metadata_across_archive_times(self):
        executable = self.package / 'skills/sample/run.sh'
        executable.write_text('echo fixture\n'); executable.chmod(0o755)
        self.git('add', '.'); self.git('commit', '-qm', 'executable package member')
        self.sha = self.git('rev-parse', 'HEAD')
        self.data = dict(self.data, source=self.sha, notes_source=self.sha)
        real_git = publisher.git
        archive_times = iter(('2001-01-01T00:00:00Z', '2031-01-01T00:00:00Z'))

        def clocked_git(root, *args):
            # Only tree-object archives use the build clock. Model two builds
            # without sleeping; commit-object archives keep their own timestamp.
            if args[0] == 'archive' and self.sha + ':' + publisher.PACKAGE_SUBDIR in args:
                args = (args[0], '--mtime=' + next(archive_times), *args[1:])
            return real_git(root, *args)

        with mock.patch.object(publisher, 'git', side_effect=clocked_git):
            with mock.patch.dict(os.environ, TZ='Pacific/Honolulu'):
                first = publisher.build_package(self.root, self.data, self.out / 'first')
            with mock.patch.dict(os.environ, TZ='Asia/Tokyo'):
                second = publisher.build_package(self.root, self.data, self.out / 'second')
        self.assertEqual(first['sdd-manager.zip'].read_bytes(), second['sdd-manager.zip'].read_bytes())
        self.assertEqual(first['sdd-manager.zip.sha256'].read_bytes(), second['sdd-manager.zip.sha256'].read_bytes())
        from datetime import datetime, timezone
        stamp = int(self.git('show', '-s', '--format=%ct', self.sha))
        expected = datetime.fromtimestamp(stamp, timezone.utc).timetuple()[:6]
        with zipfile.ZipFile(first['sdd-manager.zip']) as zipped:
            for item in zipped.infolist():
                self.assertEqual(item.date_time[:5], expected[:5])
                self.assertEqual(item.date_time[5], expected[5] // 2 * 2)
            self.assertEqual(zipped.comment.decode(), self.sha)
            self.assertTrue(zipped.getinfo('sdd-manager/skills/sample/run.sh').external_attr >> 16 & 0o111)

    def test_cli_rebuild_hash_guard_accepts_same_source_and_rejects_stale_hash(self):
        paths = publisher.build_package(self.root, self.data, self.out / 'build')
        digest = hashlib.sha256(paths['sdd-manager.zip'].read_bytes()).hexdigest()
        event = self.out / 'event.json'
        event.write_text(json.dumps({'inputs': {'handoff': json.dumps(self.data)}}))
        command = [sys.executable, str(SCRIPT.resolve()), '--event', str(event),
                   '--root', str(self.root), '--output', str(self.out / 'publish'),
                   '--expected-sha256']
        env = dict(os.environ, GITHUB_REPOSITORY='fixture/repo', GITHUB_TOKEN='')
        same = subprocess.run([*command, digest], capture_output=True, text=True, env=env)
        self.assertEqual(same.returncode, 0, same.stderr)
        stale = subprocess.run([*command, '0' * 64], capture_output=True, text=True, env=env)
        self.assertNotEqual(stale.returncode, 0)
        self.assertIn('Publisher rebuild differs from verified build job', stale.stderr)

    def test_package_content_change_changes_archive_hash(self):
        first = publisher.build_package(self.root, self.data, self.out / 'first')
        before = hashlib.sha256(first['sdd-manager.zip'].read_bytes()).hexdigest()
        (self.package / 'README.md').write_text('Changed package content\n')
        self.git('add', '.'); self.git('commit', '-qm', 'changed content')
        source = self.git('rev-parse', 'HEAD')
        second = publisher.build_package(self.root, dict(self.data, source=source, notes_source=source), self.out / 'second')
        self.assertNotEqual(before, hashlib.sha256(second['sdd-manager.zip'].read_bytes()).hexdigest())

    def test_missing_plugin_entry_stops_before_package_outputs(self):
        (self.package/'PLUGIN.md').unlink()
        self.git('add','-u'); self.git('commit','-qm','missing plugin entry')
        source=self.git('rev-parse','HEAD')
        with self.assertRaisesRegex(ValueError, 'Required package path is absent: PLUGIN.md'):
            publisher.build_package(self.root,dict(self.data,source=source,notes_source=source),self.out)
        self.assertEqual(list(self.out.iterdir()),[])

    def test_invalid_manifest_stops_before_package_outputs(self):
        original=json.loads((self.package/'plugin.json').read_text())
        mutations=[{'$schema': None}, {'$schema': 'https://invalid.test/schema'},
                   {'skills': './skills'}, {'name': 'Uppercase'}, {'name': 'bad--name'},
                   {'version': 1}, {'author': {'unknown': 'value'}},
                   {'extensions': {'com.openai': False}}]
        for changes in mutations:
            value=dict(original, **changes)
            if value.get('$schema') is None: value.pop('$schema')
            (self.package/'plugin.json').write_text(json.dumps(value))
            self.git('add',publisher.PACKAGE_SUBDIR+'/plugin.json'); self.git('commit','-qm','invalid manifest')
            sha=self.git('rev-parse','HEAD')
            with self.subTest(changes=changes), self.assertRaisesRegex(ValueError, 'manifest'):
                publisher.build_package(self.root,handoff(source=sha,notes_source=sha),self.out)
            self.assertEqual(list(self.out.iterdir()), [])

    def test_namespaced_manifest_uses_committed_candidate(self):
        value=json.loads((self.package/'plugin.json').read_text())
        value['extensions']={'com.openai': {'interface': {'displayName': 'Fixture'}}}
        (self.package/'plugin.json').write_text(json.dumps(value))
        self.git('add',publisher.PACKAGE_SUBDIR+'/plugin.json'); self.git('commit','-qm','namespaced extension')
        sha=self.git('rev-parse','HEAD')
        (self.package/'plugin.json').write_text('{}')
        paths=publisher.build_package(self.root,handoff(source=sha,notes_source=sha),self.out)
        self.assertIn('sdd-manager.zip',paths)

    def test_wrong_checkout_or_version_stops(self):
        for changes in ({'source':'a'*40,'notes_source':'a'*40},{'tag':'v9.9.9'}):
            with self.subTest(changes=changes), self.assertRaises(ValueError):
                publisher.build_package(self.root,dict(self.data,**changes),self.out)

    def test_obsolete_manifest_is_excluded(self):
        legacy=self.root/'.codex-plugin/plugin.json'
        legacy.parent.mkdir(); legacy.write_text('{}')
        self.git('add','.'); self.git('commit','-qm','obsolete file')
        sha=self.git('rev-parse','HEAD')
        paths=publisher.build_package(self.root,handoff(source=sha,notes_source=sha),self.out)
        with zipfile.ZipFile(paths['sdd-manager.zip']) as z:
            self.assertFalse(any('/.codex-plugin/' in name for name in z.namelist()))
            self.assertIn('sdd-manager/plugin.json',z.namelist())

    def test_legacy_only_package_cannot_replace_root_manifest(self):
        legacy=self.root/'.codex-plugin/plugin.json'
        legacy.parent.mkdir(); legacy.write_bytes((self.package/'plugin.json').read_bytes())
        (self.package/'plugin.json').unlink()
        self.git('add','-A'); self.git('commit','-qm','legacy only')
        sha=self.git('rev-parse','HEAD')
        with self.assertRaises(ValueError):
            publisher.build_package(self.root,handoff(source=sha,notes_source=sha),self.out)

    def test_actual_archive_tampering_stops(self):
        paths=publisher.build_package(self.root,self.data,self.out)
        for bad_name in ('sdd-manager/README.md','sdd-manager/../escape'):
            with self.subTest(name=bad_name):
                bad=self.out/'bad.zip'
                with zipfile.ZipFile(paths['sdd-manager.zip']) as original, zipfile.ZipFile(bad,'w') as z:
                    for item in original.infolist():
                        if not item.is_dir(): z.writestr(item.filename,original.read(item.filename))
                    with warnings.catch_warnings():
                        warnings.filterwarnings('ignore', message='Duplicate name:', category=UserWarning)
                        z.writestr(bad_name,b'wrong')
                with self.assertRaises(ValueError): publisher.inspect_archive(self.root,self.sha,bad)


class Provider:
    """Controlled external boundary, independent of publisher decisions."""
    def __init__(self):
        self.source='a'*40; self.release=None; self.latest=19; self.events=[]; self.bytes={}; self.fail_upload=False
    def tag_source(self,tag): self.events.append('tag'); return self.source
    def latest_id(self): self.events.append('latest'); return self.latest
    def find_release(self,tag): self.events.append('read'); return copy.deepcopy(self.release)
    def get_release(self,release_id):
        self.events.append('read-id')
        if self.release is None or self.release['id'] != release_id: return None
        return copy.deepcopy(self.release)
    def create_draft(self,data):
        self.events.append('create')
        self.release=dict(id=23,tag_name=data['tag'],name='SDD Manager '+data['tag'],body=data['notes'],draft=True,prerelease=data['prerelease'],assets=[])
        return copy.deepcopy(self.release)
    def upload(self,release,name,raw):
        self.events.append('upload:'+name)
        if self.fail_upload: raise OSError('controlled upload failure')
        asset=dict(id=len(self.bytes)+1,name=name,size=len(raw),state='uploaded')
        self.bytes[asset['id']]=raw; self.release['assets'].append(asset)
    def download(self,asset): self.events.append('download'); return self.bytes[asset['id']]
    def publish(self,release,data):
        self.events.append('publish'); self.release['draft']=False
        if data['make_latest']: self.latest=self.release['id']


class LifecycleTests(Contract):
    def setUp(self):
        super().setUp(); self.api=Provider(); self.files={'sdd-manager.zip':b'archive','sdd-manager.zip.sha256':b'checksum'}
    def run_release(self,**changes): return publisher.reconcile_release(self.api,handoff(publish=True,**changes),self.files)
    def test_first_publish_uploads_before_publish_and_reads_back(self):
        result=self.run_release()
        self.assertFalse(result['draft']); self.assertEqual(self.api.latest,19)
        self.assertLess(self.api.events.index('upload:sdd-manager.zip.sha256'),self.api.events.index('publish'))
        self.assertTrue(any(x in ('read', 'read-id') for x in self.api.events[self.api.events.index('publish')+1:]))
    def test_fresh_publish_survives_lagging_release_inventory(self):
        # The provider acknowledges creation, but its global inventory lags.
        self.api.find_release=lambda tag: None
        result=self.run_release()
        self.assertFalse(result['draft'])
        self.assertEqual(self.api.events.count('create'),1)
        self.assertEqual(set(a['name'] for a in result['assets']),set(self.files))
    def test_missing_acknowledged_release_stops_without_recreating(self):
        self.api.get_release=lambda release_id: None
        with self.assertRaises(ValueError): self.run_release()
        self.assertEqual(self.api.events.count('create'),1)
        self.assertFalse(any(x.startswith(('upload','publish')) for x in self.api.events))
    def test_direct_read_cannot_substitute_another_release_identity(self):
        original=self.api.get_release
        def wrong(release_id):
            release=original(release_id); release['id']=99; return release
        self.api.get_release=wrong
        with self.assertRaises(ValueError): self.run_release()
        self.assertEqual(self.api.events.count('create'),1)
        self.assertFalse(any(x.startswith(('upload','publish')) for x in self.api.events))
    def test_complete_rerun_has_no_mutation(self):
        self.run_release(); self.api.events=[]; self.run_release()
        self.assertFalse(any(x.startswith(('create','upload','publish')) for x in self.api.events))
    def test_partial_draft_uploads_only_missing(self):
        self.api.create_draft(handoff()); self.api.upload(self.api.release,'sdd-manager.zip',b'archive'); self.api.events=[]
        self.run_release()
        self.assertNotIn('upload:sdd-manager.zip',self.api.events)
        self.assertIn('upload:sdd-manager.zip.sha256',self.api.events)
    def test_upload_failure_retains_draft(self):
        self.api.fail_upload=True
        with self.assertRaises(OSError): self.run_release()
        self.assertTrue(self.api.release['draft']); self.assertNotIn('publish',self.api.events)
    def test_wrong_tag_stops_before_mutation(self):
        self.api.source='b'*40
        with self.assertRaises(ValueError): self.run_release()
        self.assertNotIn('create',self.api.events)
    def test_conflicting_body_foreign_duplicate_starter_and_bytes_stop(self):
        for kind in ('body','foreign','duplicate','starter','bytes'):
            with self.subTest(kind=kind):
                self.api=Provider(); self.api.create_draft(handoff())
                self.api.upload(self.api.release,'sdd-manager.zip',b'archive')
                if kind=='body': self.api.release['body']='foreign'
                if kind=='foreign': self.api.upload(self.api.release,'foreign',b'x')
                if kind=='duplicate': self.api.release['assets'].append(copy.deepcopy(self.api.release['assets'][0]))
                if kind=='starter': self.api.release['assets'][0]['state']='starter'
                if kind=='bytes': self.api.bytes[1]=b'changed'
                self.api.events=[]
                with self.assertRaises(ValueError): self.run_release()
                self.assertFalse(any(x.startswith(('create','upload','publish')) for x in self.api.events))
    def test_build_only_has_no_provider_calls(self):
        publisher.reconcile_release(self.api,handoff(),self.files)
        self.assertEqual(self.api.events,[])
    def test_latest_readback_detects_unexpected_change(self):
        original=self.api.publish
        def changed(release,data): original(release,data); self.api.latest=88
        self.api.publish=changed
        with self.assertRaises(ValueError): self.run_release()
    def test_opt_in_latest_is_verified(self):
        self.run_release(make_latest=True); self.assertEqual(self.api.latest,23)
    def test_uncertain_upload_is_not_blindly_replayed(self):
        original=self.api.upload
        def uncertain(release,name,raw): original(release,name,raw); raise OSError('response lost after effect')
        self.api.upload=uncertain
        with self.assertRaises(OSError): self.run_release()
        self.assertTrue(self.api.release['draft']); self.api.upload=original; self.api.events=[]
        self.run_release(); self.assertNotIn('upload:sdd-manager.zip',self.api.events)


class AdapterTests(Contract):
    def setUp(self):
        super().setUp()
        self.assertTrue(hasattr(publisher, 'GitHub'), 'Actual provider adapter is absent')

    def test_annotated_tag_is_peeled(self):
        replies=[{'object':{'type':'tag','sha':'b'*40}}, {'object':{'type':'commit','sha':'a'*40}}]
        calls=[]
        def request(method,path,**kwargs): calls.append((method,path)); return replies.pop(0)
        api=publisher.GitHub('owner/repo', request=request)
        self.assertEqual(api.tag_source('v0.15.0'),'a'*40)
        self.assertIn('/git/tags/',calls[1][1])

    def test_complete_assets_are_paginated(self):
        calls=[]
        def request(method,path,**kwargs):
            calls.append(path)
            if '/releases?' in path: return [dict(id=23,tag_name='v0.15.0',assets=[])]
            if '&page=1' in path: return [dict(id=i,name=str(i)) for i in range(100)]
            return [dict(id=101,name='last')]
        api=publisher.GitHub('owner/repo',request=request)
        self.assertEqual(len(api.find_release('v0.15.0')['assets']),101)
        self.assertTrue(any('page=2' in path for path in calls))

    def test_missing_lookup_and_transport_failure_are_distinct(self):
        api=publisher.GitHub('owner/repo',request=lambda *a,**k:None)
        self.assertIsNone(api.tag_source('v0.15.0'))
        with self.assertRaises(ValueError): api.find_release('v0.15.0')

    def test_direct_release_read_uses_acknowledged_id_and_complete_assets(self):
        calls=[]
        def request(method,path,**kwargs):
            calls.append((method,path))
            if path.endswith('/releases/23'): return dict(id=23,tag_name='v0.15.0',assets=[])
            if '&page=1' in path: return [dict(id=i,name=str(i)) for i in range(100)]
            return [dict(id=101,name='last')]
        api=publisher.GitHub('owner/repo',request=request)
        self.assertTrue(hasattr(api,'get_release'), 'Direct acknowledged-ID readback is absent')
        self.assertEqual(len(api.get_release(23)['assets']),101)
        self.assertEqual(calls[0],('GET',api.base+'/releases/23'))
        self.assertTrue(all(method=='GET' for method,path in calls))
        self.assertTrue(any('page=2' in path for method,path in calls))

    def test_body_and_upload_are_structured_data(self):
        calls=[]
        def request(method,path,**kwargs): calls.append((method,path,kwargs)); return {'id':23}
        api=publisher.GitHub('owner/repo',request=request)
        api.create_draft(handoff()); api.upload({'id':23},'sdd-manager.zip',b'actual')
        self.assertEqual(calls[0][2]['data']['body'],handoff()['notes'])
        self.assertTrue(calls[0][2]['data']['draft'])
        self.assertEqual(calls[1][2]['data'],b'actual')
        self.assertTrue(calls[1][1].startswith('https://uploads.github.com/'))

    def test_event_handoff_is_read_as_data(self):
        self.assertTrue(hasattr(publisher, 'read_event'), 'Workflow event reader is absent')
        with tempfile.TemporaryDirectory() as directory:
            event=Path(directory)/'event.json'
            event.write_text(json.dumps({'inputs':{'handoff':json.dumps(handoff())}}))
            self.assertEqual(publisher.read_event(event),handoff())


if __name__=='__main__': unittest.main()
