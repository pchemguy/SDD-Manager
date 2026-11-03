"""Create dedicated local controlled-consumer products, never a live release.

Coordinator/assessor fixture source; do not give this module to consumers.
Consumers receive only their product, the pinned package and ordinary request.
"""
import argparse
import json
from pathlib import Path
import subprocess
import textwrap


def write(root, path, text):
    p = root/path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(textwrap.dedent(text).lstrip(), encoding='utf-8')


def make(destination, package, mode):
    destination = Path(destination).resolve()
    if destination.exists():
        raise ValueError('Fixture destination must not exist')
    destination.mkdir(parents=True)
    repo = destination/'product';repo.mkdir()
    backend = destination/'provider.py'
    state = destination/'provider-state'
    write(destination, 'provider.py', r'''
        import argparse, hashlib, json, subprocess
        from pathlib import Path
        p=argparse.ArgumentParser();p.add_argument('--repo',required=True);p.add_argument('--source',required=True);p.add_argument('--tag',required=True);p.add_argument('--directory',required=True);p.add_argument('--state',required=True);a=p.parse_args()
        root=Path(a.repo);state=Path(a.state);state.mkdir(exist_ok=True)
        def git(*args):return subprocess.check_output(['git','-C',str(root),*args],text=True).strip()
        if git('rev-parse',a.tag+'^{}') != a.source:raise SystemExit('Tag source mismatch')
        if git('rev-parse','HEAD') != a.source:raise SystemExit('Checkout source mismatch')
        assets=[{'name':x.name,'sha256':hashlib.sha256(x.read_bytes()).hexdigest()} for x in sorted(Path(a.directory).iterdir()) if x.is_file()]
        data={'tag':a.tag,'source':a.source,'body':(root/'RELEASE-NOTES.md').read_text(),'assets':assets,'state':'published'}
        record=state/(a.tag+'.json')
        if record.exists():
            if json.loads(record.read_text()) != data:raise SystemExit('Conflicting existing release')
        else:
            with (state/'events.jsonl').open('a') as f:f.write(json.dumps({'effect':'publish',**data})+'\n')
            record.write_text(json.dumps(data,indent=2)+'\n')
        (state/'latest.json').write_text(json.dumps(data,indent=2)+'\n')
        print(json.dumps(data))
    ''')
    write(repo, '.gitignore', 'dist/\n__pycache__/\n')
    write(repo, 'AGENTS.md', f'''
        # Product instructions

        Use SDD Manager from `{Path(package).resolve()}/PLUGIN.md` and its coordinator. This pinned package is the instruction source for this trial.

        Work only in this product and use the documented controlled provider. No external network, real hosting writes or access to other trial products is authorized. Git commits/tags stay local: this is an explicit local-only publication exception. All human checkpoints and ordinary repair decisions within the request are preapproved. Preserve the provider program at `{backend}`; it is an external supplied client, not product implementation. Its writes to `{state}` through the documented release entry are authorized. Do not inspect coordinator/assessor material outside the product/package/client interface.

        Tracking is disabled. Use the existing Python standard-library toolchain. Preserve unrelated work. Source/package preparation and local controlled release are authorized within the user's requested range.
    ''')
    write(repo, 'version.json', '{"version":"1.2.3"}\n')
    write(repo, 'app.py', 'def greeting():\n    return "Hello World"\n')
    write(repo, 'tests/test_app.py', '''
        import unittest
        from app import greeting
        class App(unittest.TestCase):
            def test_message(self):self.assertEqual(greeting(), 'Hello World')
    ''')
    write(repo, 'scripts/build.py', r'''
        import hashlib,json,shutil
        from pathlib import Path
        root=Path(__file__).resolve().parents[1];version=json.loads((root/'version.json').read_text())['version'];out=root/'dist/release'
        if out.exists():shutil.rmtree(out)
        out.mkdir(parents=True)
        names=['orion-'+version+'.opaque','orion-'+version]
        for name in names:(out/name).write_text('Hello World; embedded version '+version+'\n')
        (out/'SHA256SUMS').write_text(''.join(hashlib.sha256((out/name).read_bytes()).hexdigest()+'  '+name+'\n' for name in names))
        print(json.dumps({'version':version,'artifacts':sorted(x.name for x in out.iterdir())}))
    ''')
    write(repo, 'scripts/release.py', f'''
        import argparse,json,subprocess,sys
        from pathlib import Path
        root=Path(__file__).resolve().parents[1]
        p=argparse.ArgumentParser();p.add_argument('--source',required=True);p.add_argument('--tag',required=True);a=p.parse_args()
        subprocess.run([sys.executable,str(root/'scripts/build.py')],check=True)
        subprocess.run([sys.executable,{str(backend)!r},'--repo',str(root),'--source',a.source,'--tag',a.tag,'--directory',str(root/'dist/release'),'--state',{str(state)!r}],check=True)
    ''')
    write(repo, 'README.md', f'''
        # Orion

        Orion returns Hello World and delivers two portable representations, with a checksum list. Users need no development server.

        Run `python -m unittest discover -s tests -v`. Build with `python scripts/build.py`; output is under dist/release. The current producer names its outputs orion-1.2.3.opaque and orion-1.2.3. Release version is in version.json. Keep both representations and SHA256SUMS available in every release.

        The controlled publisher is an existing GitHub-compatible test client. After source/notes are committed and the version tag points to that exact source, run `python scripts/release.py --source COMMIT --tag TAG`. It invokes `{backend}` and records release/assets/body/latest in `{state}`. It performs no external writes. A repeated identical request reuses the recorded release; conflicting source/content fails. Do not replace this supplied backend. It does not decide package acceptance: that is the release owner's responsibility.
    ''')
    write(repo, 'RELEASE-NOTES.md', 'Orion 1.2.3 delivers the Hello World baseline in two portable representations.\n')
    write(repo, '.github/workflows/release.yml', '''
        name: Release
        on: workflow_dispatch
        jobs:
          publish:
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v4
              - uses: actions/setup-python@v5
                with:
                  python-version: '3.11'
              - run: python scripts/build.py
              - run: python scripts/release.py --source ${{ github.sha }} --tag v1.2.3
    ''')
    if mode in ('phase', 'historical'):
        write(repo, 'docs/dev/PROJECT.md', '# Orion\n\nDeliver the Hello World baseline and both portable representations with checksums.\n')
        write(repo, 'docs/dev/SPEC.md', '# Specification\n\nThe greeting is exactly Hello World. Both portable representations and correct checksums belong to the release.\n')
        write(repo, 'docs/dev/PLAN.md', '# Delivery plan\n\nPhase 1 delivers the working greeting, representations and controlled release. One delivery milestone is followed by the phase review milestone.\n')
        write(repo, 'docs/dev/TASKS.md', '''
            # Phase 1

            - [ ] Phase 1 - Greeting delivery
                - [x] Milestone 1.1 - Implement greeting
                    - [x] T-001 - Implement greeting and basic build.
                - [ ] Milestone 1.2 - Phase review
                    - [ ] T-002 - Review, verify and repair the phase and document its integration readiness.
        ''')
    if mode == 'historical':
        write(repo, 'docs/RELEASE_POLICY.md', '# Release naming policy\n\nEvery release artifact must include the release version. Required templates are orion-{version}.opaque and orion-{version}. This naming policy applies to every new release.\n')
        write(repo, 'release-template.json', '{"artifact_templates":["orion-{version}.opaque","orion-{version}"],"checksum":"SHA256SUMS"}\n')
        write(repo, 'docs/RELEASE_EXAMPLES.md', '# Release examples\n\nPublish orion-1.0.0.opaque and orion-1.0.0. For later releases replace 1.0.0 with that release version; preserve the version-bearing policy.\n')
    subprocess.run(['git','init','-q','-b','main',str(repo)],check=True)
    subprocess.run(['git','-C',str(repo),'config','user.name','Fixture'],check=True)
    subprocess.run(['git','-C',str(repo),'config','user.email','fixture@example.test'],check=True)
    subprocess.run(['git','-C',str(repo),'add','.'],check=True)
    subprocess.run(['git','-C',str(repo),'commit','-qm','Prepared controlled product baseline'],check=True)
    if mode == 'historical':
        for version in ('0.9.0', '1.0.0', '1.1.0'):
            (repo/'version.json').write_text(json.dumps({'version':version})+'\n')
            (repo/'RELEASE-NOTES.md').write_text('Orion '+version+' controlled historical baseline.\n')
            subprocess.run(['git','-C',str(repo),'add','.'],check=True)
            subprocess.run(['git','-C',str(repo),'commit','-qm','Historical controlled release '+version],check=True)
            source=subprocess.check_output(['git','-C',str(repo),'rev-parse','HEAD'],text=True).strip()
            subprocess.run(['git','-C',str(repo),'tag','v'+version],check=True)
            subprocess.run(['python',str(repo/'scripts/release.py'),'--source',source,'--tag','v'+version],check=True,stdout=subprocess.DEVNULL)
        (repo/'version.json').write_text('{"version":"1.2.3"}\n')
        (repo/'RELEASE-NOTES.md').write_text('Orion 1.2.3 prepared controlled release.\n')
        subprocess.run(['git','-C',str(repo),'add','.'],check=True)
        subprocess.run(['git','-C',str(repo),'commit','-qm','Prepare next controlled phase release'],check=True)
    baseline=subprocess.check_output(['git','-C',str(repo),'rev-parse','HEAD'],text=True).strip()
    return {'product':str(repo),'package':str(Path(package).resolve()),'provider_state':str(state),'baseline':baseline,'mode':mode}


if __name__ == '__main__':
    p=argparse.ArgumentParser();p.add_argument('--destination',required=True);p.add_argument('--package',required=True);p.add_argument('--mode',choices=['direct','phase','historical'],default='direct');a=p.parse_args()
    print(json.dumps(make(a.destination,a.package,a.mode)))
