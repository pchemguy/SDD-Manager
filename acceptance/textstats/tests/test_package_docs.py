"""Actual package pinning retains user documentation and its dirty identity."""
import hashlib
from .support import Sandbox, git


class PackageDocumentation(Sandbox):
    def test_committed_and_dirty_readme_and_license_are_packaged(self):
        source=self.root/'package-source'
        git(self.root,'init','-b','main',str(source))
        git(source,'config','user.name','Fixture');git(source,'config','user.email','fixture@example.invalid')
        (source/'.codex-plugin').mkdir()
        manifest=b'{"name":"fixture","version":"1.0.0"}\n'
        (source/'plugin.json').write_bytes(manifest)
        (source/'.codex-plugin/plugin.json').write_bytes(manifest)
        (source/'README.md').write_bytes(b'Human package documentation\n')
        (source/'LICENSE').write_bytes(b'Fixture license\n')
        git(source,'add','.');git(source,'commit','-m','package documentation')
        committed,_=self.ok(self.invoke('preflight',extra=['--source-root',source]))
        hashes=committed['plugin_source']['package_hashes']
        self.assertEqual(hashes.get('README.md'),hashlib.sha256(b'Human package documentation\n').hexdigest())
        self.assertEqual(hashes.get('LICENSE'),hashlib.sha256(b'Fixture license\n').hexdigest())
        self.assertEqual(hashes['plugin.json'],hashes['.codex-plugin/plugin.json'])
        (source/'README.md').write_bytes(b'Updated package documentation\n')
        dirty,_=self.ok(self.invoke('preflight',dict(self.inputs,source_mode='dirty'),extra=['--source-root',source]))
        self.assertEqual(dirty['plugin_source']['package_hashes']['README.md'],hashlib.sha256(b'Updated package documentation\n').hexdigest())
        self.assertIn('README.md',dirty['plugin_source']['changed_package_paths'])
        self.assertNotEqual(dirty['plugin_source']['fingerprint'],committed['plugin_source']['fingerprint'])
