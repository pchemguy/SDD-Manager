"""Actual package pinning retains user documentation and its dirty identity."""
import hashlib
from pathlib import Path, PurePosixPath
from .support import Sandbox, git


class PackageDocumentation(Sandbox):
    def test_nested_package_boundary_and_repository_license_copy(self):
        source = Path(__file__).resolve().parents[3]
        self.assertTrue((source / '.agents/plugins/sdd-manager/plugin.json').is_file())
        self.assertFalse((source / 'plugin.json').exists())
        self.assertFalse((source / '.agents/plugins/sdd-manager/.codex-plugin').exists())
        package=source/'.agents/plugins/sdd-manager'
        self.assertEqual((source/'LICENSE').read_bytes(),(package/'LICENSE').read_bytes())
        for notice in ['AI_DISCLOSURE.md','SDD-MANAGER.md']:
            self.assertTrue((source/notice).is_file())
            self.assertTrue((package/'assets'/notice).is_file())
            self.assertFalse((package/notice).exists())

    def test_notice_navigation_is_retained_in_committed_and_dirty_snapshots(self):
        source=self.root/'notice-package'
        git(self.root,'init','-b','main',str(source))
        git(source,'config','user.name','Fixture');git(source,'config','user.email','fixture@example.invalid')
        (source/'plugin.json').write_text('{"name":"fixture"}\n')
        readme=b'Development uses [SDD Manager](assets/SDD-MANAGER.md). See [disclosure](assets/AI_DISCLOSURE.md).\n'
        notice=b'# Usage\n\nSee [disclosure](AI_DISCLOSURE.md).\n'
        disclosure=b'# Disclosure\n\nMaintainer owns the published work.\n'
        (source/'README.md').write_bytes(readme)
        (source/'assets').mkdir()
        (source/'assets/SDD-MANAGER.md').write_bytes(notice)
        (source/'assets/AI_DISCLOSURE.md').write_bytes(disclosure)
        git(source,'add','.');git(source,'commit','-m','notice links')
        import sys
        from pathlib import Path
        sys.path.insert(0,str(Path(__file__).parents[1]/'scripts'))
        import core
        inputs={'plugin_revision':git(source,'rev-parse','HEAD').stdout.strip(),'source_mode':'committed'}
        committed,files=core.package(source,inputs)
        import re
        for owner in ['README.md','assets/SDD-MANAGER.md']:
            self.assertIn(owner,files)
            for target in re.findall(r'\]\(([^)]+)\)',files[owner].decode()):
                self.assertIn(str(PurePosixPath(owner).parent/target),files)
        self.assertEqual(files.get('assets/AI_DISCLOSURE.md'),disclosure)
        (source/'assets/AI_DISCLOSURE.md').write_bytes(disclosure+b'Updated notice.\n')
        dirty,files=core.package(source,dict(inputs,source_mode='dirty'))
        self.assertIn('assets/AI_DISCLOSURE.md',dirty['changed_package_paths'])
        self.assertEqual(files['assets/AI_DISCLOSURE.md'],disclosure+b'Updated notice.\n')
        self.assertNotEqual(dirty['fingerprint'],committed['fingerprint'])

    def test_committed_and_dirty_readme_and_license_are_packaged(self):
        source=self.root/'package-source'
        git(self.root,'init','-b','main',str(source))
        git(source,'config','user.name','Fixture');git(source,'config','user.email','fixture@example.invalid')
        manifest=b'{"name":"fixture","version":"1.0.0"}\n'
        (source/'plugin.json').write_bytes(manifest)
        (source/'README.md').write_bytes(b'Human package documentation\n')
        (source/'PLUGIN.md').write_bytes(b'Agent package orientation\n')
        (source/'AGENTS.md').write_bytes(b'Legacy package entry must not ship\n')
        (source/'assets').mkdir()
        (source/'assets/Greenfield Project Prompt Template.md').write_bytes(b'Project seed prompt\n')
        (source/'docs/ai-logs').mkdir(parents=True)
        (source/'docs/ai-logs/EXPLORE_DRIVE_V1.md').write_bytes(b'Source-only transcript\n')
        (source/'LICENSE').write_bytes(b'Fixture license\n')
        git(source,'add','.');git(source,'commit','-m','package documentation')
        committed,_=self.ok(self.invoke('preflight',extra=['--source-root',source]))
        hashes=committed['plugin_source']['package_hashes']
        self.assertNotIn('AGENTS.md',hashes)
        self.assertNotIn('Greenfield Project Prompt Template.md',hashes)
        self.assertNotIn('docs/ai-logs/EXPLORE_DRIVE_V1.md',hashes)
        (source/'AGENTS.md').write_bytes(b'Updated source development guidance\n')
        dev_only,_=self.ok(self.invoke('preflight',dict(self.inputs,source_mode='dirty'),extra=['--source-root',source]))
        self.assertEqual(dev_only['plugin_source']['fingerprint'],committed['plugin_source']['fingerprint'])
        self.assertNotIn('AGENTS.md',dev_only['plugin_source']['changed_package_paths'])
        self.assertEqual(hashes.get('README.md'),hashlib.sha256(b'Human package documentation\n').hexdigest())
        self.assertEqual(hashes.get('PLUGIN.md'),hashlib.sha256(b'Agent package orientation\n').hexdigest())
        self.assertEqual(hashes.get('assets/Greenfield Project Prompt Template.md'),hashlib.sha256(b'Project seed prompt\n').hexdigest())
        self.assertEqual(hashes.get('LICENSE'),hashlib.sha256(b'Fixture license\n').hexdigest())
        (source/'README.md').write_bytes(b'Updated package documentation\n')
        (source/'PLUGIN.md').write_bytes(b'Updated agent package orientation\n')
        (source/'assets/Greenfield Project Prompt Template.md').write_bytes(b'Updated project seed prompt\n')
        dirty,_=self.ok(self.invoke('preflight',dict(self.inputs,source_mode='dirty'),extra=['--source-root',source]))
        self.assertEqual(dirty['plugin_source']['package_hashes']['README.md'],hashlib.sha256(b'Updated package documentation\n').hexdigest())
        self.assertEqual(dirty['plugin_source']['package_hashes']['PLUGIN.md'],hashlib.sha256(b'Updated agent package orientation\n').hexdigest())
        self.assertEqual(dirty['plugin_source']['package_hashes']['assets/Greenfield Project Prompt Template.md'],hashlib.sha256(b'Updated project seed prompt\n').hexdigest())
        self.assertIn('README.md',dirty['plugin_source']['changed_package_paths'])
        self.assertIn('PLUGIN.md',dirty['plugin_source']['changed_package_paths'])
        self.assertIn('assets/Greenfield Project Prompt Template.md',dirty['plugin_source']['changed_package_paths'])
        self.assertNotEqual(dirty['plugin_source']['fingerprint'],committed['plugin_source']['fingerprint'])

    def test_preparation_templates_pin_exact_bytes_and_dirty_changes(self):
        import sys
        sys.path.insert(0, str(Path(__file__).parents[1] / 'scripts'))
        import core
        source = self.root / 'preparation-assets'
        git(self.root, 'init', '-b', 'main', str(source))
        git(source, 'config', 'user.name', 'Fixture')
        git(source, 'config', 'user.email', 'fixture@example.invalid')
        (source / 'plugin.json').write_text('{"name":"fixture"}\n')
        (source / 'assets').mkdir()
        names = ('AGENTS_TEMPLATE.md', 'DOCS_TASKS_TEMPLATE.md', 'SKILL_DISCOVERY_PROTOCOL.md')
        original = {name: ('Pinned ' + name + '\n').encode() for name in names}
        for name, data in original.items():
            (source / 'assets' / name).write_bytes(data)
        git(source, 'add', '.'); git(source, 'commit', '-m', 'preparation asset fixture')
        inputs = {'plugin_revision': git(source, 'rev-parse', 'HEAD').stdout.strip(),
                  'source_mode': 'committed'}
        pinned, files = core.package(source, inputs)
        for name, data in original.items():
            self.assertEqual(files['assets/' + name], data)
            self.assertNotIn(name, files)
            (source / 'assets' / name).write_bytes(data + b'Changed locally\n')
        still_pinned, files = core.package(source, inputs)
        self.assertEqual(pinned['fingerprint'], still_pinned['fingerprint'])
        for name, data in original.items():
            self.assertEqual(files['assets/' + name], data)
        dirty, files = core.package(source, dict(inputs, source_mode='dirty'))
        self.assertEqual(set(dirty['changed_package_paths']), {'assets/' + name for name in names})
        for name, data in original.items():
            self.assertEqual(files['assets/' + name], data + b'Changed locally\n')
        self.assertNotEqual(pinned['fingerprint'], dirty['fingerprint'])
