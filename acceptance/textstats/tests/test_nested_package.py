"""Nested Git source pinning, dirty path mapping and containment contracts."""
from pathlib import Path
import sys
from .support import Sandbox, git, SCRIPTS
sys.path.insert(0,str(SCRIPTS))
import core


class NestedPackage(Sandbox):
    def setUp(self):
        super().setUp()
        self.package=self.repo/core.PACKAGE_SUBDIR
        (self.package/'skills/demo').mkdir(parents=True)
        (self.package/'assets').mkdir()
        for name,data in {'plugin.json':b'{"name":"nested"}\n', 'README.md':b'Package README\n',
                          'PLUGIN.md':b'Package entry\n','LICENSE':b'License\n',
                          'skills/demo/SKILL.md':b'Original skill\n',
                          'assets/AI_DISCLOSURE.md':b'Template\n'}.items():
            (self.package/name).write_bytes(data)
        (self.repo/'README.md').write_text('Repository README\n')
        (self.repo/'plugin.json').write_text('{"name":"root-decoy"}\n')
        (self.repo/'AI_DISCLOSURE.md').write_text('Repository disclosure\n')
        git(self.repo,'add','.');git(self.repo,'commit','-m','nested source')
        self.head=git(self.repo,'rev-parse','HEAD').stdout.strip()
        self.options=dict(plugin_revision=self.head,source_mode='committed')

    def test_nested_selection_excludes_root_decoys_and_normalizes_names(self):
        provenance,files=core.package(self.repo,self.options)
        self.assertEqual(provenance['commit'],self.head)
        self.assertEqual(provenance['package_subdirectory'],core.PACKAGE_SUBDIR)
        self.assertEqual(files['README.md'],b'Package README\n')
        self.assertNotIn('AI_DISCLOSURE.md',files)
        self.assertEqual(files['assets/AI_DISCLOSURE.md'],b'Template\n')
        self.assertFalse(any(name.startswith('.agents/') for name in files))
        nested,_=core.package(self.package,self.options)
        self.assertEqual(nested,provenance)

    def test_committed_ancestors_reject_symlink_file_and_gitlink_without_root_fallback(self):
        for number, ancestor in enumerate(('.agents', '.agents/plugins')):
            for kind in ('symlink', 'file', 'gitlink'):
                with self.subTest(ancestor=ancestor, kind=kind):
                    source = self.root / ('ancestor-' + str(number) + '-' + kind)
                    git(self.root, 'clone', '--no-hardlinks', str(self.repo), str(source))
                    git(source, 'config', 'user.name', 'Fixture')
                    git(source, 'config', 'user.email', 'fixture@example.invalid')
                    path = source / ancestor
                    git(source, 'rm', '-r', '--', ancestor)
                    path.parent.mkdir(parents=True, exist_ok=True)
                    if kind == 'symlink':
                        foreign = self.root / ('foreign-' + str(number))
                        foreign.mkdir(exist_ok=True)
                        (foreign / 'plugin.json').write_text('EXTERNAL_SENTINEL')
                        path.symlink_to(foreign, target_is_directory=True)
                        git(source, 'add', ancestor)
                    elif kind == 'file':
                        path.write_text('Unsupported ancestor')
                        git(source, 'add', ancestor)
                    else:
                        git(source, 'update-index', '--add', '--cacheinfo', '160000,' + self.head + ',' + ancestor)
                    git(source, 'commit', '-m', 'unsupported ancestor')
                    for mode in ('committed', 'dirty'):
                        with self.subTest(mode=mode), self.assertRaisesRegex(core.Stop, 'package_mode_unsupported'):
                            core.package(source, dict(plugin_revision='HEAD', source_mode=mode))

    def test_ordinary_parent_directories_without_nested_package_preserve_root_layout(self):
        for number, parent in enumerate(('.agents', '.agents/plugins')):
            with self.subTest(parent=parent):
                source = self.root / ('standalone-' + str(number))
                git(self.root, 'clone', '--no-hardlinks', str(self.repo), str(source))
                git(source, 'config', 'user.name', 'Fixture')
                git(source, 'config', 'user.email', 'fixture@example.invalid')
                git(source, 'rm', '-r', '--', core.PACKAGE_SUBDIR)
                path = source / parent
                path.mkdir(parents=True, exist_ok=True)
                (path / 'unrelated.txt').write_text('Other agent configuration')
                git(source, 'add', '.'); git(source, 'commit', '-m', 'standalone package with ordinary parents')
                for mode in ('committed', 'dirty'):
                    info, files = core.package(source, dict(plugin_revision='HEAD', source_mode=mode))
                    self.assertEqual(info['package_subdirectory'], '.')
                    self.assertEqual(files['plugin.json'], b'{"name":"root-decoy"}\n')

    def test_dirty_edits_additions_deletions_and_modes_use_package_keys(self):
        committed,_=core.package(self.repo,self.options)
        (self.package/'skills/demo/SKILL.md').write_text('Changed skill\n')
        script=self.package/'skills/demo/run.sh';script.write_text('echo fixture\n');script.chmod(0o755)
        (self.package/'assets/AI_DISCLOSURE.md').unlink()
        (self.repo/'README.md').write_text('Unrelated root change\n')
        dirty,files=core.package(self.repo,dict(self.options,source_mode='dirty'))
        self.assertEqual(set(dirty['changed_package_paths']),{'skills/demo/SKILL.md','skills/demo/run.sh','assets/AI_DISCLOSURE.md'})
        self.assertEqual(dirty['package_file_modes']['skills/demo/run.sh'],'100755')
        self.assertNotIn('assets/AI_DISCLOSURE.md',files)
        self.assertEqual(files['README.md'],b'Package README\n')
        self.assertNotEqual(committed['fingerprint'],dirty['fingerprint'])
        original,files=core.package(self.repo,self.options)
        self.assertEqual(original,committed)
        self.assertEqual(files['skills/demo/SKILL.md'],b'Original skill\n')

    def test_dirty_package_root_symlink_is_rejected(self):
        foreign=self.root/'foreign';self.package.rename(foreign)
        self.package.symlink_to(foreign,target_is_directory=True)
        with self.assertRaisesRegex(core.Stop,'package_symlink_unsupported'):
            core.package(self.repo,dict(self.options,source_mode='dirty'))

    def test_committed_package_root_symlink_cannot_fall_back_to_decoy(self):
        foreign=self.root/'foreign';self.package.rename(foreign)
        self.package.symlink_to(foreign,target_is_directory=True)
        git(self.repo,'add','-A');git(self.repo,'commit','-m','unsupported package symlink')
        with self.assertRaisesRegex(core.Stop,'package_mode_unsupported'):
            core.package(self.repo,dict(self.options,plugin_revision='HEAD'))

    def test_present_nested_tree_without_manifest_cannot_fall_back(self):
        (self.package/'plugin.json').unlink()
        git(self.repo,'add','-A');git(self.repo,'commit','-m','missing nested manifest')
        with self.assertRaisesRegex(core.Stop,'package_unavailable'):
            core.package(self.repo,dict(self.options,plugin_revision='HEAD'))

    def test_prepare_dirty_patch_uses_git_paths_and_snapshot_uses_package_paths(self):
        (self.package/'skills/demo/SKILL.md').write_text('Changed skill\n')
        (self.repo/'README.md').write_text('Unrelated root change\n')
        values=dict(self.inputs,**dict(self.options,source_mode='dirty'))
        result=core.prepare(values,self.repo,self.root/'isolated')
        info=result['plugin_source'];snapshot=Path(info['snapshot_path'])
        self.assertEqual((snapshot/'README.md').read_bytes(),b'Package README\n')
        patch=Path(info['dirty_diff_path']).read_text()
        self.assertIn(core.PACKAGE_SUBDIR+'/skills/demo/SKILL.md',patch)
        self.assertNotIn('Unrelated root change',patch)
        self.assertEqual(info['changed_package_paths'],['skills/demo/SKILL.md'])

    def test_historical_root_notices_are_preserved_when_pinning_root_layout(self):
        source=self.root/'historical'
        git(self.root,'init','-b','main',str(source))
        git(source,'config','user.name','Fixture');git(source,'config','user.email','fixture@example.invalid')
        for name in ['plugin.json','SDD-MANAGER.md','AI_DISCLOSURE.md']:
            (source/name).write_text(name+' historical bytes\n')
        git(source,'add','.');git(source,'commit','-m','historical root source')
        info,files=core.package(source,dict(plugin_revision='HEAD',source_mode='committed'))
        self.assertEqual(info['package_subdirectory'],'.')
        self.assertEqual(files['AI_DISCLOSURE.md'],b'AI_DISCLOSURE.md historical bytes\n')
        self.assertEqual(files['SDD-MANAGER.md'],b'SDD-MANAGER.md historical bytes\n')
