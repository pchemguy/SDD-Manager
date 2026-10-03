import hashlib
import json
from pathlib import Path
import subprocess
try:
    from .support import Sandbox, git
except ImportError:
    from support import Sandbox, git

class RecoveryTests(Sandbox):
    def test_actual_staged_and_unstaged_intent_export_and_restore(self):
        (self.repo / 'owned.txt').write_text('staged\n')
        git(self.repo,'add','owned.txt')
        (self.repo / 'owned.txt').write_text('unstaged\n')
        (self.repo / 'new.bin').write_bytes(b'\x00pending\xff')
        (self.repo / 'link').symlink_to('owned.txt')
        data, _ = self.ok(self.invoke('observe', state=self.state))
        self.assertEqual(data['git']['staged_paths'], ['owned.txt'])
        self.assertEqual(data['git']['unstaged_paths'], ['owned.txt'])
        export = Path(data['recovery']['path'])
        manifest = json.loads((export/'manifest.json').read_text())
        restored = self.root/'restored'
        git(self.root,'clone',str(self.remote),str(restored))
        git(restored,'checkout','main')
        git(restored,'bundle','verify',str(export/'objects.bundle'))
        git(restored,'fetch',str(export/'objects.bundle'),'refs/heads/main')
        for entry in manifest['index']:
            blob = (export/'blobs'/entry['oid']).read_bytes()
            subprocess.run(['git','-C',str(restored),'hash-object','-w','--stdin'],input=blob,check=True,capture_output=True)
        raw = ''.join(f"{e['mode']} {e['oid']} {e['stage']}\t{e['path']}\n" for e in manifest['index'])
        git(restored,'read-tree','--empty')
        subprocess.run(['git','-C',str(restored),'update-index','--index-info'],input=raw,text=True,check=True,capture_output=True)
        for entry in manifest['workfiles']:
            path = restored/entry['path']
            path.parent.mkdir(parents=True,exist_ok=True)
            if path.exists() or path.is_symlink(): path.unlink()
            if entry['kind']=='symlink': path.symlink_to(entry['target'])
            else:
                content=(export/'files'/entry['sha256']).read_bytes()
                self.assertEqual(hashlib.sha256(content).hexdigest(),entry['sha256'])
                path.write_bytes(content)
                path.chmod(entry['mode'])
        self.assertEqual(git(restored,'ls-files','--stage').stdout,git(self.repo,'ls-files','--stage').stdout)
        self.assertEqual((restored/'owned.txt').read_text(),'unstaged\n')
        self.assertEqual((restored/'new.bin').read_bytes(),b'\x00pending\xff')
        self.assertEqual((restored/'link').readlink(),Path('owned.txt'))
        self.assertEqual(data['recovery']['publication'],'local-only')

    def test_deletion_and_conflict_stages_merge_parents_preserved(self):
        git(self.repo,'checkout','-b','other')
        (self.repo/'owned.txt').write_text('other\n')
        git(self.repo,'commit','-am','other')
        other=git(self.repo,'rev-parse','HEAD').stdout.strip()
        git(self.repo,'checkout','main')
        (self.repo/'owned.txt').write_text('main\n')
        git(self.repo,'commit','-am','main')
        git(self.repo,'merge','other',check=False)
        before=git(self.repo,'ls-files','--stage').stdout
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['git']['merge_heads'],[other])
        self.assertEqual(data['git']['conflict_paths'],['owned.txt'])
        manifest=json.loads((Path(data['recovery']['path'])/'manifest.json').read_text())
        self.assertEqual([e['stage'] for e in manifest['index']],[1,2,3])
        self.assertEqual(manifest['merge_heads'],[other])
        self.assertEqual(git(self.repo,'ls-files','--stage').stdout,before)

    def test_unpublished_commit_recognized_without_checkpoint_hint(self):
        (self.repo/'owned.txt').write_text('local\n')
        git(self.repo,'commit','-am','local')
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['git']['publication'],'unpublished')
        self.assertIn('existing commit',data['next_action'])

    def test_uncertain_push_reconciles_actual_destination_even_cursor_lags(self):
        head=git(self.repo,'rev-parse','HEAD').stdout.strip()
        self.state['pending_operation']={'kind':'push','status':'uncertain','description':'lost response','identity':{'branch':'main','commit':head}}
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['reconciliation']['effect'],'observed-published')
        self.assertFalse(data['reconciliation']['retry_safe'])

    def test_uncertain_api_effect_remains_unknown_no_replay(self):
        self.state['pending_operation']={'kind':'api','status':'uncertain','description':'lost response','identity':{'issue_number':3}}
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['reconciliation']['effect'],'unknown')
        self.assertFalse(data['reconciliation']['retry_safe'])

    def test_unavailable_remote_does_not_claim_unpublished(self):
        git(self.repo,'remote','set-url','origin',str(self.root/'gone.git'))
        values=dict(self.inputs,test_repository=str(self.root/'gone.git'))
        data,_=self.ok(self.invoke('observe',values,state=self.state))
        self.assertEqual(data['git']['publication'],'unknown')

    def test_protected_file_is_not_read_or_exported(self):
        (self.repo/'gh.tkn').write_text('SECRET_SENTINEL')
        (self.repo/'.gitignore').write_text('*.tkn\n')
        data,out=self.ok(self.invoke('observe',state=self.state))
        self.assertNotIn('SECRET_SENTINEL',out.read_text())
        exported=Path(data['recovery']['path'])
        self.assertFalse(any(b'SECRET_SENTINEL' in p.read_bytes() for p in exported.rglob('*') if p.is_file()))

    def test_secret_state_and_unknown_nested_field_fails_without_leak(self):
        for operation in [{'kind':'push','status':'uncertain','description':'github_pat_SECRET_SENTINEL'}, {'kind':'push','status':'uncertain','description':'lost','identity':{'token':'SECRET_SENTINEL'}}]:
            state=dict(self.state,pending_operation=operation)
            p,_,out=self.invoke('observe',state=state)
            self.assertNotEqual(p.returncode,0)
            self.assertNotIn('SECRET_SENTINEL',p.stdout+p.stderr)
            self.assertFalse(out.exists())

    def test_staged_deletion_and_unstaged_deletion_are_reconstructable(self):
        (self.repo/'unstaged.txt').write_text('retained baseline\n')
        git(self.repo,'add','unstaged.txt')
        git(self.repo,'commit','-m','second')
        git(self.repo,'rm','owned.txt')
        (self.repo/'unstaged.txt').unlink()
        data,_=self.ok(self.invoke('observe',state=self.state))
        manifest=json.loads((Path(data['recovery']['path'])/'manifest.json').read_text())
        self.assertEqual(data['git']['staged_paths'],['owned.txt'])
        self.assertEqual(data['git']['unstaged_paths'],['unstaged.txt'])
        self.assertNotIn('owned.txt',[e['path'] for e in manifest['index']])
        self.assertEqual(next(e['kind'] for e in manifest['workfiles'] if e['path']=='unstaged.txt'),'deleted')
        self.assertIn('owned.txt',manifest['tracked_paths'])
        export=Path(data['recovery']['path'])
        restored=self.root/'deleted-restore'
        git(self.root,'clone',str(self.repo),str(restored))
        git(restored,'checkout','main')
        git(restored,'read-tree','--empty')
        for entry in manifest['index']:
            subprocess.run(['git','-C',str(restored),'hash-object','-w','--stdin'],input=(export/'blobs'/entry['oid']).read_bytes(),check=True,capture_output=True)
        raw=''.join(f"{e['mode']} {e['oid']} {e['stage']}\t{e['path']}\n" for e in manifest['index'])
        subprocess.run(['git','-C',str(restored),'update-index','--index-info'],input=raw,text=True,check=True,capture_output=True)
        retained={e['path'] for e in manifest['workfiles'] if e['kind']!='deleted'}
        for name in manifest['tracked_paths']:
            if name not in retained and (restored/name).exists(): (restored/name).unlink()
        self.assertEqual(git(restored,'diff','--cached','--binary').stdout,git(self.repo,'diff','--cached','--binary').stdout)
        self.assertEqual(git(restored,'diff','--binary').stdout,git(self.repo,'diff','--binary').stdout)

    def test_remote_tip_with_unavailable_ancestry_remains_unknown(self):
        other=self.root/'other'
        git(self.root,'clone',str(self.remote),str(other))
        git(other,'checkout','main')
        git(other,'config','user.name','Fixture')
        git(other,'config','user.email','fixture@example.invalid')
        (other/'owned.txt').write_text('remote advance\n')
        git(other,'commit','-am','advance')
        git(other,'push','origin','main')
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['git']['publication'],'unknown')

    def test_index_conflict_export_restores_usable_merge_metadata(self):
        git(self.repo,'checkout','-b','other')
        (self.repo/'owned.txt').write_text('other\n')
        git(self.repo,'commit','-am','other')
        git(self.repo,'checkout','main')
        (self.repo/'owned.txt').write_text('main\n')
        git(self.repo,'commit','-am','main')
        incoming=git(self.repo,'rev-parse','other').stdout.strip()
        git(self.repo,'branch','-D','other')
        git(self.repo,'merge',incoming,check=False)
        data,_=self.ok(self.invoke('observe',state=self.state))
        export=Path(data['recovery']['path'])
        manifest=json.loads((export/'manifest.json').read_text())
        restored=self.root/'restored-conflict'
        git(self.root,'clone',str(self.remote),str(restored))
        git(restored,'fetch',str(export/'objects.bundle'),'refs/heads/main')
        git(restored,'checkout','-B','main',manifest['head'])
        for entry in manifest['index']:
            subprocess.run(['git','-C',str(restored),'hash-object','-w','--stdin'],input=(export/'blobs'/entry['oid']).read_bytes(),check=True,capture_output=True)
        git(restored,'read-tree','--empty')
        raw=''.join(f"{e['mode']} {e['oid']} {e['stage']}\t{e['path']}\n" for e in manifest['index'])
        subprocess.run(['git','-C',str(restored),'update-index','--index-info'],input=raw,text=True,check=True,capture_output=True)
        for entry in manifest['workfiles']:
            (restored/entry['path']).write_bytes((export/'files'/entry['sha256']).read_bytes())
        for name,content in manifest['merge_metadata'].items():
            path=Path(git(restored,'rev-parse','--git-path',name).stdout.strip())
            if not path.is_absolute(): path=restored/path
            path.write_text(content)
        self.assertEqual(git(restored,'ls-files','--stage').stdout,git(self.repo,'ls-files','--stage').stdout)
        self.assertEqual(git(restored,'diff','--binary').stdout,git(self.repo,'diff','--binary').stdout)
        self.assertEqual(git(restored,'rev-parse','MERGE_HEAD').stdout,git(self.repo,'rev-parse','MERGE_HEAD').stdout)
        self.assertTrue((restored/'.git/MERGE_MSG').exists())

    def test_parent_symlink_cannot_export_external_workfile_contents(self):
        nested=self.repo/'nested'
        nested.mkdir()
        (nested/'file.txt').write_text('baseline\n')
        git(self.repo,'add','nested')
        git(self.repo,'commit','-m','nested')
        (nested/'file.txt').unlink()
        nested.rmdir()
        foreign=self.root/'foreign'
        foreign.mkdir()
        (foreign/'file.txt').write_text('EXTERNAL_SENTINEL')
        nested.symlink_to(foreign,target_is_directory=True)
        p,data,out=self.invoke('observe',state=self.state)
        self.assertNotEqual(p.returncode,0)
        self.assertFalse(out.exists())
        self.assertNotIn('EXTERNAL_SENTINEL',p.stdout+p.stderr)

    def test_uncertain_push_explicit_ref_overrides_current_branch_publication(self):
        head=git(self.repo,'rev-parse','HEAD').stdout.strip()
        self.state['pending_operation']={'kind':'push','status':'uncertain','description':'lost response','identity':{'branch':'main','ref':'refs/heads/missing-target','commit':head}}
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['git']['publication'],'published')
        self.assertEqual(data['reconciliation']['effect'],'not-observed-at-destination')
        self.assertFalse(data['reconciliation']['retry_safe'])

    def test_uncertain_push_explicit_ref_with_unknown_ancestry_stays_unknown(self):
        head=git(self.repo,'rev-parse','HEAD').stdout.strip()
        other=self.root/'incoming-push'
        git(self.root,'clone',str(self.remote),str(other))
        git(other,'checkout','main')
        git(other,'config','user.name','Fixture')
        git(other,'config','user.email','fixture@example.invalid')
        (other/'owned.txt').write_text('remote advance\n')
        git(other,'commit','-am','advance')
        git(other,'push','origin','HEAD:refs/heads/other-target')
        self.state['pending_operation']={'kind':'push','status':'uncertain','description':'lost response','identity':{'branch':'main','ref':'refs/heads/other-target','commit':head}}
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['reconciliation']['effect'],'unknown')

    def test_uncertain_push_recorded_repository_mismatch_is_unknown(self):
        head=git(self.repo,'rev-parse','HEAD').stdout.strip()
        self.state['repository']={'identity':str(self.remote)}
        self.state['pending_operation']={'kind':'push','status':'uncertain','description':'lost response','identity':{'repository':str(self.root/'different.git'),'branch':'main','commit':head}}
        data,_=self.ok(self.invoke('observe',state=self.state))
        self.assertEqual(data['reconciliation']['effect'],'unknown')
