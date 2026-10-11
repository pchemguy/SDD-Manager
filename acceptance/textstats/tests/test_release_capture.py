"""Release evidence sensitivity with disposable native Git; no consumer acceptance."""
import importlib.util
import json
from pathlib import Path
import subprocess
import unittest

from .support import Sandbox, git
from . import test_catalog as catalog_assets
ASSESSOR = catalog_assets.ASSESSOR
catalog = catalog_assets.catalog

SCRIPT = ASSESSOR / 'release_capture.py'
if SCRIPT.exists():
    spec = importlib.util.spec_from_file_location('release_capture', SCRIPT)
    capture = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(capture)
else:
    capture = None


class ReleaseCapture(Sandbox):
    def setUp(self):
        super().setUp()
        self.assertIsNotNone(capture, 'Release observation support is absent')
        self.body = b'# TextStats 1.0.0\n\nHuman material \xe2\x80\x94 retained.\n'
        (self.repo/'RELEASE-NOTES.md').write_bytes(self.body)
        self.before = self.root/'before.md'; self.before.write_bytes(self.body)
        message = self.root/'commit.txt'; message.write_bytes(b'Release v1.0.0\n\n'+self.body)
        git(self.repo,'add','RELEASE-NOTES.md')
        git(self.repo,'commit','--cleanup=verbatim','-F',str(message))
        self.sha = git(self.repo,'rev-parse','HEAD').stdout.strip()
        git(self.repo,'tag','-a','v1.0.0','-m','release')
        self.provider = self.root/'readback.json'
        self.readback = {'body':self.body.decode(),'target_commit':self.sha,
                         'evidence_class':'controlled','state':'published','release_id':1}
        self.provider.write_text(json.dumps(self.readback))

    def observe(self):
        return capture.capture(self.repo, baseline=self.before, release_commit=self.sha,
                               tag='v1.0.0', provider_readback=self.provider)

    def test_native_body_tag_and_controlled_readback_agree(self):
        evidence, provenance = self.observe()
        self.assertTrue(evidence['literals']['release_agreement'])
        self.assertTrue(evidence['literals']['notes_unchanged'])
        self.assertEqual(provenance['provider_evidence_class'],'controlled')
        self.assertFalse(provenance['agent_behavior_assessed'])
        self.assertNotIn('Human material',json.dumps(provenance))

    def test_changed_note_or_provider_body_fails_exact_bytes(self):
        for changed in ('notes','provider'):
            with self.subTest(changed=changed):
                (self.repo/'RELEASE-NOTES.md').write_bytes(self.body)
                value=dict(self.readback)
                if changed=='notes': (self.repo/'RELEASE-NOTES.md').write_bytes(self.body+b'\n')
                else: value['body']=value['body'].rstrip('\n')
                self.provider.write_text(json.dumps(value))
                evidence,_=self.observe()
                self.assertFalse(evidence['literals']['release_agreement'])

    def test_wrong_tag_or_unpublished_readback_fails(self):
        git(self.repo,'tag','-d','v1.0.0')
        git(self.repo,'tag','v1.0.0','HEAD^')
        evidence,_=self.observe(); self.assertFalse(evidence['literals']['release_agreement'])
        git(self.repo,'tag','-d','v1.0.0');git(self.repo,'tag','v1.0.0',self.sha)
        self.readback['state']='draft';self.provider.write_text(json.dumps(self.readback))
        evidence,_=self.observe();self.assertFalse(evidence['literals']['release_agreement'])

    def test_preservation_diff_and_missing_baseline_are_not_passes(self):
        self.before.write_bytes(self.body+b'previous human edit\n')
        evidence,_=capture.capture(self.repo,baseline=self.before)
        self.assertFalse(evidence['literals']['notes_unchanged'])
        evidence,_=capture.capture(self.repo)
        self.assertNotIn('notes_unchanged',evidence['literals'])
        self.assertNotIn('release_agreement',evidence['literals'])

    def test_symlink_and_sensitive_notes_are_rejected(self):
        notes=self.repo/'RELEASE-NOTES.md';notes.unlink();notes.symlink_to(self.before)
        with self.assertRaises(ValueError):capture.capture(self.repo)
        notes.unlink();notes.write_text('github_pat_'+'a'*40)
        with self.assertRaises(capture.core.Stop):capture.capture(self.repo)

    def test_missing_partial_or_malformed_source_evidence_is_rejected(self):
        with self.assertRaises(ValueError):capture.capture(self.repo,release_commit=self.sha)
        self.readback['target_commit']='main';self.provider.write_text(json.dumps(self.readback))
        with self.assertRaises(ValueError):self.observe()
        self.readback['target_commit']=self.sha;self.readback['evidence_class']='inspection'
        self.provider.write_text(json.dumps(self.readback))
        with self.assertRaises(ValueError):self.observe()

    def test_cli_preserves_occupied_evidence_without_new_output(self):
        import sys
        output=self.root/'capture.json';provenance=self.root/'provenance.json'
        provenance.write_text('original attempt')
        proc=subprocess.run([sys.executable,str(SCRIPT),'--product-root',str(self.repo),
                             '--output',str(output),'--provenance',str(provenance)],
                            capture_output=True,text=True)
        self.assertEqual(proc.returncode,2)
        self.assertEqual(provenance.read_text(),'original attempt')
        self.assertFalse(output.exists())

    def test_missing_literal_and_wrong_class_do_not_grade_acceptance(self):
        evidence, _=self.observe()
        path=self.root/'literal.json';path.write_text(json.dumps(evidence))
        result,code=catalog.core.assessment(self.inputs,self.state,ASSESSOR/'A-032.json',path)
        self.assertEqual(code,0);self.assertFalse(result['agent_behavior_assessed'])
        path.write_text(json.dumps({'schema_version':1,'literals':{}}))
        result,code=catalog.core.assessment(self.inputs,self.state,ASSESSOR/'A-032.json',path)
        self.assertEqual(code,1)
        cases={'A-032':catalog.validate_catalog()['A-032']}
        results={'A-032.controlled-provider':{'status':'Passed','agent_behavior_assessed':True,'evidence_class':'live-provider'}}
        self.assertFalse(catalog.campaign.coverage(cases,results)['required_ready'])


class ReleaseHandoff(Sandbox):
    bindings = catalog_assets.HandoffIntegrity.bindings
    def test_new_release_predecessor_requires_published_independent_assessment(self):
        value=self.bindings('A-030')
        text=catalog.render('A-032',value,bindings_root=self.repo,variant='controlled-provider')
        self.assertIn('Publish the current TextStats release',text)
        value['checkpoints'][0]['status']='Blocked'
        with self.assertRaises(ValueError):catalog.render('A-032',value,bindings_root=self.repo)

    def test_routing_variants_render_one_request_without_combined_objectives(self):
        value=self.bindings('A-013')
        for variant,request,absent in [
                ('highlights-only','Collect release highlights, then stop.','prepare a complete'),
                ('complete-message','Prepare a complete release message, then stop.','collect release highlights')]:
            value['current']['release_request']=request
            text=catalog.render('A-028',value,bindings_root=self.repo,variant=variant)
            self.assertIn(request,text)
            self.assertNotIn(absent,text.lower())
        value['current'].pop('release_request')
        with self.assertRaises(ValueError):catalog.render('A-028',value,bindings_root=self.repo,variant='core')

    def test_new_case_inputs_and_checkpoint_ids_validate_and_unknown_id_fails(self):
        value=dict(self.inputs,scope={'cases':['A-033']})
        catalog.core.validate(value, catalog.core.load(catalog.BUNDLE/'schemas/inputs.schema.json'))
        self.state['case_id']='A-033';catalog.core.validate(self.state, catalog.core.load(catalog.BUNDLE/'schemas/run-state.schema.json'))
        value['scope']['cases']=['A-034']
        with self.assertRaises(catalog.core.Stop):catalog.core.validate(value, catalog.core.load(catalog.BUNDLE/'schemas/inputs.schema.json'))
