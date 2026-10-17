import json
import subprocess
import tempfile
from pathlib import Path

def git(where, *args):
    return subprocess.check_output(['git', '-C', str(where), *args], stderr=subprocess.PIPE, text=True).strip()

with tempfile.TemporaryDirectory(prefix='sdd-071-transport-') as temporary:
    base = Path(temporary)
    remote = base / 'origin.git'
    sender = base / 'sender'
    default = base / 'default-receiver'
    active = base / 'active-receiver'
    remote.mkdir(); sender.mkdir()
    git(remote, 'init', '--bare', '--initial-branch=main', '-q')
    git(sender, 'init', '--initial-branch=main', '-q')
    git(sender, 'config', 'user.name', 'Codex')
    git(sender, 'config', 'user.email', 'codex@openai.com')
    (sender / 'AGENTS.md').write_text('Read docs/dev/HANDOFF.md for current scope.\n')
    (sender / 'docs/dev').mkdir(parents=True)
    (sender / 'docs/dev/HANDOFF.md').write_text('No active implementation authorized.\n')
    (sender / '.gitignore').write_text('/local-evidence.log\n')
    git(sender, 'add', 'AGENTS.md', 'docs/dev/HANDOFF.md', '.gitignore')
    git(sender, 'commit', '-q', '-m', 'Establish fixture main')
    git(sender, 'remote', 'add', 'origin', str(remote))
    git(sender, 'push', '-q', 'origin', 'main')
    git(sender, 'switch', '-q', '-c', 'design-docs/main')
    (sender / 'docs/dev/HANDOFF.md').write_text('Prepare SPEC; stop for its human review.\n')
    git(sender, 'add', 'docs/dev/HANDOFF.md')
    git(sender, 'commit', '-q', '-m', 'Publish fixture active handoff')
    git(sender, 'push', '-q', 'origin', 'design-docs/main')
    (sender / 'unfinished.txt').write_text('Unpublished owned work\n')
    (sender / 'local-evidence.log').write_text('Ignored local evidence\n')
    git(base, 'clone', '-q', str(remote), str(default))
    git(base, 'clone', '-q', '--branch', 'design-docs/main', str(remote), str(active))
    checks = {
        'default_clone_starts_on_main': git(default, 'branch', '--show-current') == 'main',
        'default_clone_sees_main_handoff': (default / 'docs/dev/HANDOFF.md').read_text() == 'No active implementation authorized.\n',
        'active_remote_branch_is_discoverable': git(default, 'rev-parse', '--verify', 'origin/design-docs/main') == git(sender, 'rev-parse', 'HEAD'),
        'active_branch_clone_gets_published_handoff': (active / 'docs/dev/HANDOFF.md').read_text() == 'Prepare SPEC; stop for its human review.\n',
        'unpublished_work_does_not_transfer': not (active / 'unfinished.txt').exists(),
        'ignored_evidence_does_not_transfer': not (active / 'local-evidence.log').exists(),
    }
    assert all(checks.values()), checks
    result = {'kind': 'disposable native Git transport experiment', 'checks': checks,
              'agent_or_client_trial': False}
    Path('/tmp/071-portability-git-result.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result))
