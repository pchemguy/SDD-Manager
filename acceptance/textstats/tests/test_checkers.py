import json
try:
    from .support import Sandbox, git
except ImportError:
    from support import Sandbox, git

class CheckerTests(Sandbox):
    def assess(self, checks, evidence=None):
        contract=self.root/'contract.json'
        contract.write_text(json.dumps({'schema_version':1,'checks':checks}))
        extra=['--contract',contract]
        if evidence is not None:
            path=self.root/'evidence.json'
            path.write_text(json.dumps(evidence))
            extra+=['--evidence',path]
        return self.invoke('assess',state=self.state,extra=extra)

    def test_literal_output_channel_and_status_sensitivity(self):
        expected={'returncode':0,'stdout':'lines=3 words=2\n','stderr':''}
        checks=[{'id':'cli','kind':'literal','key':'named-file','expected':expected}]
        evidence={'schema_version':1,'literals':{'named-file':expected}}
        data,_=self.ok(self.assess(checks,evidence))
        self.assertEqual(data['status'],'Checks passed')
        self.assertFalse(data['agent_behavior_assessed'])
        for field,value in [('stdout','wrong\n'),('stderr','warning\n'),('returncode',1)]:
            actual=dict(expected,**{field:value})
            p,data,_=self.assess(checks,{'schema_version':1,'literals':{'named-file':actual}})
            self.assertNotEqual(p.returncode,0)
            self.assertEqual(data['status'],'Checks failed')

    def test_empty_or_invalid_evidence_cannot_pass(self):
        for evidence in [{},{'schema_version':1,'literals':{}},{'schema_version':1,'literals':{'x':1},'agentPassed':True}]:
            p,_,_=self.assess([{'id':'x','kind':'literal','key':'x','expected':1}],evidence)
            self.assertNotEqual(p.returncode,0)
        p,_,_=self.assess([])
        self.assertNotEqual(p.returncode,0)

    def test_git_evidence_reads_actual_state(self):
        data,_=self.ok(self.assess([{'id':'clean','kind':'git','field':'staged_paths','expected':[]}]))
        (self.repo/'owned.txt').write_text('changed\n')
        git(self.repo,'add','owned.txt')
        p,data,_=self.assess([{'id':'clean','kind':'git','field':'staged_paths','expected':[]}])
        self.assertNotEqual(p.returncode,0)
        self.assertEqual(data['checks'][0]['status'],'Failed')

    def test_task_ownership_excludes_historical_evidence_and_rejects_duplicates(self):
        dev=self.repo/'docs/dev'
        dev.mkdir(parents=True)
        (dev/'TASKS.md').write_text('- [ ] T-1 implement\n')
        history=dev/'reviews/old'
        history.mkdir(parents=True)
        (history/'TASKS.md').write_text('- [ ] T-1 historical\n')
        self.ok(self.assess([{'id':'ownership','kind':'task_ownership'}]))
        (dev/'FEATURE-TASKS.md').write_text('- [ ] T-1 duplicate\n')
        p,data,_=self.assess([{'id':'ownership','kind':'task_ownership'}])
        self.assertNotEqual(p.returncode,0)
        self.assertEqual(data['status'],'Checks failed')

    def test_empty_task_collection_and_path_escape_fail(self):
        p,_,_=self.assess([{'id':'ownership','kind':'task_ownership'}])
        self.assertNotEqual(p.returncode,0)
        p,_,_=self.assess([{'id':'file','kind':'file','path':'../outside','exists':False}])
        self.assertNotEqual(p.returncode,0)

    def test_without_contract_is_not_run(self):
        data,_=self.ok(self.invoke('assess',state=self.state))
        self.assertEqual(data['status'],'Not run')
        self.assertFalse(data['agent_behavior_assessed'])

    def test_boolean_is_not_integer_and_validated_runtime_ref_binding(self):
        p,data,_=self.assess([{'id':'type','kind':'literal','key':'x','expected':True}],{'schema_version':1,'literals':{'x':1}})
        self.assertNotEqual(p.returncode,0)
        self.state['checkpoint_refs']['product_commit']=git(self.repo,'rev-parse','HEAD').stdout.strip()
        self.ok(self.assess([{'id':'head','kind':'git','field':'head','expected_ref':'checkpoint_refs.product_commit'}]))
        p,_,_=self.assess([{'id':'bad','kind':'git','field':'head','expected_ref':'checkpoint_refs.missing'}])
        self.assertNotEqual(p.returncode,0)
        p,_,_=self.assess([{'id':'both','kind':'git','field':'head','expected_ref':'checkpoint_refs.product_commit','expected':'x'}])
        self.assertNotEqual(p.returncode,0)
