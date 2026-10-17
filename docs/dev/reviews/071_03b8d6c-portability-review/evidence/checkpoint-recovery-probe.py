"""Disposable native Git contrasts; this is not an agent/client acceptance run."""
import argparse
import json
from pathlib import Path
import subprocess
import tempfile


def git(root, *args, check=True):
    return subprocess.run(['git', '-C', str(root), *args], check=check,
                          capture_output=True, text=True)


def write(root, name, text):
    path = root / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text)


def commit(root, message):
    git(root, 'add', '.')
    git(root, 'commit', '-m', message)
    return git(root, 'rev-parse', 'HEAD').stdout.strip()


def ancestor(root, source, target):
    return git(root, 'merge-base', '--is-ancestor', source, target, check=False).returncode == 0


def run():
    with tempfile.TemporaryDirectory(prefix='sdd-071-checkpoints-') as directory:
        base = Path(directory)
        remote, source = base / 'origin.git', base / 'source'
        git(base, 'init', '--bare', '--initial-branch=main', str(remote))
        git(base, 'init', '--initial-branch=main', str(source))
        git(source, 'config', 'user.name', 'Fixture')
        git(source, 'config', 'user.email', 'fixture@example.invalid')
        git(source, 'remote', 'add', 'origin', str(remote))
        write(source, 'AGENTS.md', '# Instructions\n\nRead docs/dev/HANDOFF.md.\n')
        write(source, 'docs/dev/HANDOFF.md', '# Checkpoint\n\nMain: no active range.\n')
        main = commit(source, 'Initial main checkpoint')
        git(source, 'push', 'origin', 'main')
        git(source, 'branch', 'legacy-a', main)
        git(source, 'branch', 'legacy-b', main)

        phase = 'phase/1-calculator'
        git(source, 'switch', '-c', phase)
        write(source, 'docs/dev/HANDOFF.md',
              f'# Checkpoint M1\n\nParent: main\nBase: {main}\n'
              'Range: M2; later decisions: DECISIONS.md.\n')
        write(source, 'docs/dev/TASKS.md', '- [x] M1\n- [ ] T2\n')
        checkpoint = commit(source, 'Milestone review checkpoint M1')
        write(source, 'work.py', 'value = 2\n')
        write(source, 'docs/dev/TASKS.md', '- [x] M1\n- [x] T2\n')
        commit(source, 'Task after checkpoint; handoff unchanged')
        write(source, 'docs/dev/DECISIONS.md', 'Later decision: stop after T2; preapproval revoked.\n')
        phase_tip = commit(source, 'Persist later range decision')

        feature = 'feature/071-calculator-toggle'
        git(source, 'switch', '-c', feature)
        feature_handoff = (f'# Feature checkpoint\n\nParent: {phase}\nBase: {phase_tip}\n'
                           'Stage: paused for human review.\n')
        write(source, 'docs/dev/HANDOFF.md', feature_handoff)
        feature_start = commit(source, 'Feature entry checkpoint')
        child = 'revision/072-toggle-correction'
        git(source, 'switch', '-c', child)
        write(source, 'child-result.md', '# Child result\n\nNative fixture correction.\n')
        write(source, 'docs/dev/HANDOFF.md',
              f'# Child checkpoint\n\nParent: {feature}\nBase: {feature_start}\n')
        child_tip = commit(source, 'Child final checkpoint')
        git(source, 'switch', feature)
        git(source, 'merge', '--no-ff', '--no-commit', child_tip)
        write(source, 'docs/dev/HANDOFF.md', feature_handoff + 'Child outcome: child-result.md.\n')
        merge = commit(source, 'Restore parent checkpoint at child merge')
        git(source, 'push', 'origin', phase, feature, child)

        default_clone, phase_clone, feature_clone = (base / n for n in ('default', 'phase', 'feature'))
        git(base, 'clone', str(remote), str(default_clone))
        git(base, 'clone', '--branch', phase, str(remote), str(phase_clone))
        git(base, 'clone', '--branch', feature, str(remote), str(feature_clone))
        paths = set(git(phase_clone, 'diff', '--name-only', checkpoint, 'HEAD').stdout.splitlines())
        refs = git(default_clone, 'for-each-ref', '--format=%(refname:short)', 'refs/remotes/origin').stdout.splitlines()
        feature_text = (feature_clone / 'docs/dev/HANDOFF.md').read_text()
        checks = {
            'default_clone_keeps_main_checkpoint': git(default_clone, 'branch', '--show-current').stdout.strip() == 'main'
                and 'no active range' in (default_clone / 'docs/dev/HANDOFF.md').read_text(),
            'unfinished_phase_and_feature_refs_are_discoverable':
                all('origin/' + name in refs for name in (phase, feature)),
            'phase_clone_keeps_older_milestone_handoff':
                (phase_clone / 'docs/dev/HANDOFF.md').read_text().startswith('# Checkpoint M1'),
            'path_history_recovers_checkpoint_commit':
                git(phase_clone, 'log', '-1', '--format=%H', '--', 'docs/dev/HANDOFF.md').stdout.strip() == checkpoint,
            'git_diff_recovers_intervening_results_and_decisions':
                {'work.py', 'docs/dev/TASKS.md', 'docs/dev/DECISIONS.md'} <= paths,
            'later_revocation_is_available_in_clone':
                'preapproval revoked' in (phase_clone / 'docs/dev/DECISIONS.md').read_text(),
            'child_is_integrated_in_its_recorded_parent': ancestor(source, child_tip, feature),
            'child_is_not_integrated_in_main_or_phase':
                not ancestor(source, child_tip, 'main') and not ancestor(source, child_tip, phase),
            'explicit_child_merge_retains_two_expected_parents':
                git(source, 'show', '-s', '--format=%P', merge).stdout.split() == [feature_start, child_tip],
            'merged_handoff_restores_parent_pause_and_child_result':
                'paused for human review' in feature_text and 'Child outcome: child-result.md.' in feature_text,
            'parent_and_branch_off_evidence_survive_transfer':
                f'Parent: {phase}\nBase: {phase_tip}' in feature_text,
            'two_named_legacy_parents_can_share_a_branch_off_commit':
                git(source, 'rev-parse', 'legacy-a').stdout.strip() == main
                and git(source, 'rev-parse', 'legacy-b').stdout.strip() == main
                and ancestor(source, 'legacy-a', phase_tip) and ancestor(source, 'legacy-b', phase_tip),
        }
        if not all(checks.values()):
            raise AssertionError(checks)
        return {'evidence_class': 'native', 'agent_or_client_trial': False,
                'git_version': git(source, '--version').stdout.strip(),
                'checks': checks, 'passed': len(checks),
                'checkpoint': checkpoint, 'phase_tip': phase_tip,
                'feature_tip': merge, 'child_tip': child_tip}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    result = json.dumps(run(), indent=2) + '\n'
    if args.output:
        with args.output.open('x') as stream:
            stream.write(result)
    else:
        print(result, end='')
