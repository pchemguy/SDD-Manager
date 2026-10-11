"""Exercise shipped collection recipe and exact release-body Git mechanics."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[5]
recipe = re.search(r'```python\n(.*?)\n```', (ROOT / 'skills/sdd-forge/references/release-highlights.md').read_text(), re.S)[1]
results = []
with tempfile.TemporaryDirectory() as td:
    repo = Path(td)
    def git(*args):
        return subprocess.check_output(['git', '-C', td, *args], stderr=subprocess.PIPE).decode().strip()
    git('init', '-b', 'main'); git('config', 'user.name', 'Review fixture'); git('config', 'user.email', 'review@example.invalid')
    def commit(subject):
        git('commit', '--allow-empty', '-m', subject)
        return git('rev-parse', 'HEAD')
    def collect(**extra):
        env = {k: v for k, v in os.environ.items() if not k.startswith('RELEASE_')}
        env.update(extra)
        return subprocess.run(['python', '-c', recipe], cwd=td, env=env, capture_output=True, text=True)
    def passed(name, value):
        assert value, name
        results.append({'scenario': name, 'outcome': 'Passed'})
    first = commit('Initial fixture')
    initial = json.loads(collect().stdout)
    passed('Complete initial history uses null baseline and all identities', initial['release_commit'] is None and len(initial['commits']) == 1)
    git('tag', '-a', 'v1.0.0', '-m', 'Old release')
    git('switch', '-c', 'revision/100-fixture')
    child = commit('Deliver fixture capability')
    git('switch', 'main'); git('merge', '--no-ff', 'revision/100-fixture', '-m', 'Merge revision 100 — Fixture\n\nDelivered: first capability')
    prior = git('rev-parse', 'HEAD')
    git('switch', 'revision/100-fixture')
    amendment = commit('Amend fixture capability')
    git('switch', 'main'); git('merge', '--no-ff', 'revision/100-fixture', '-m', 'Merge revision 100 — Fixture amendment\n\nDelivered: cumulative first capability and amendment')
    target = git('rev-parse', 'HEAD'); git('tag', 'v1.1.0')
    out = json.loads(collect(RELEASE_PENDING_TAG='v1.1.0').stdout)
    passed('Pending tag excluded and annotated previous tag peeled', out['release_commit'] == first and out['release_tag'] == 'v1.0.0')
    passed('Side ancestry identities included', {child, amendment, prior, target} == {x['commit'] for x in out['commits']})
    by = {x['commit']: x for x in out['commits']}
    passed('Earlier same-campaign merge body deferred; latest retrieved', by[prior]['message_deferred'] and 'cumulative' in by[target]['message'])
    inc = json.loads(collect(RELEASE_PENDING_TAG='v1.1.0', RELEASE_ANALYZED_COMMIT=prior).stdout)
    passed('Increment contains only new ancestry; original baseline retained', inc['release_commit'] == first and {x['commit'] for x in inc['commits']} == {amendment, target})
    noop = json.loads(collect(RELEASE_PENDING_TAG='v1.1.0', RELEASE_ANALYZED_COMMIT=target).stdout)
    passed('Equal watermark produces empty increment', noop['commits'] == [])
    failed = collect(RELEASE_PENDING_TAG='v1.1.0', RELEASE_BASE_TAG='v1.1.0')
    passed('Pending-tag self-baseline rejected', failed.returncode != 0)
    git('tag', 'v0.9.0', child)
    failed = collect(RELEASE_PENDING_TAG='v1.1.0')
    passed('Side-history release tag requires explicit policy', failed.returncode != 0 and 'side-history' in failed.stderr)
    body = '## Release v1.1.0\n\nHighlights include Unicode: α.\n\n# Markdown remains literal\n'
    msg = repo / 'message.txt'; msg.write_text('Release v1.1.0\n\n' + body)
    git('commit', '--allow-empty', '--cleanup=verbatim', '-F', str(msg))
    release = git('rev-parse', 'HEAD')
    raw = subprocess.check_output(['git', '-C', td, 'cat-file', 'commit', release]).split(b'\n\n', 1)[1]
    actual_body = raw.split(b'\n\n', 1)[1]
    git('tag', '-a', 'v1.1.1', '-m', 'Fixture release')
    passed('Release commit preserves exact Markdown body and annotated tag source', actual_body == body.encode() and git('rev-parse', 'v1.1.1^{commit}') == release)
    results.append({'body_sha256': hashlib.sha256(actual_body).hexdigest(), 'release_source': release, 'limits': 'Disposable native Git recipe/mechanics; no editorial agent, remote push, notes persistence or provider execution.'})
(Path(__file__).parent / 'git-recipe-results.json').write_text(json.dumps(results, indent=2) + '\n')
print(json.dumps(results, indent=2))
