"""Default-branch release eligibility using real Git graphs and provider reads."""
import subprocess
import tempfile
import io
from pathlib import Path
from urllib.parse import unquote
from unittest import mock

from test_release import Contract, Provider, handoff, publisher


class PublicationGateTests(Contract):
    def test_ineligible_source_stops_before_any_release_mutation(self):
        api = Provider()
        def reject(source):
            raise ValueError('Source is outside default first-parent history')
        api.verify_release_source = reject
        with self.assertRaisesRegex(ValueError, 'first-parent'):
            publisher.reconcile_release(api, handoff(publish=True), {})
        self.assertFalse(any(x.startswith(('create', 'upload', 'publish')) for x in api.events))

    def test_build_only_needs_no_default_branch_access(self):
        api = Provider()
        api.verify_release_source = lambda source: self.fail('Build-only consulted provider')
        self.assertIsNone(publisher.reconcile_release(api, handoff(), {}))
        self.assertEqual(api.events, [])

    def test_unavailable_provenance_retains_draft_without_mutation(self):
        api = Provider()
        api.create_draft(handoff())
        api.events = []
        def unavailable(source):
            raise OSError('Controlled metadata outage')
        api.verify_release_source = unavailable
        with self.assertRaises(OSError):
            publisher.reconcile_release(api, handoff(publish=True), {})
        self.assertTrue(api.release['draft'])
        self.assertEqual(api.events, [])

    def test_repository_metadata_read_preserves_request_scope(self):
        api = publisher.GitHub('fixture/repo')
        opener = mock.Mock()
        opener.open.return_value = io.BytesIO(b'{"default_branch":"trunk"}')
        with mock.patch('urllib.request.build_opener', return_value=opener):
            self.assertEqual(api.request('GET', api.base)['default_branch'], 'trunk')
            for method, url in (('POST', api.base), ('GET', api.base + '-foreign')):
                with self.assertRaises(ValueError):
                    api.request(method, url)
        self.assertEqual(opener.open.call_count, 1)


class DefaultBranchGraphTests(Contract):
    def setUp(self):
        super().setUp()
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.git('init', '-q', '-b', 'trunk')
        self.git('config', 'user.name', 'Fixture')
        self.git('config', 'user.email', 'fixture@example.test')
        self.git('commit', '-q', '--allow-empty', '-m', 'Initial')
        self.initial = self.git('rev-parse', 'HEAD')
        self.git('switch', '-q', '-c', 'development')
        self.git('commit', '-q', '--allow-empty', '-m', 'Feature')
        self.side = self.git('rev-parse', 'HEAD')
        self.git('switch', '-q', 'trunk')
        self.git('commit', '-q', '--allow-empty', '-m', 'Default work')
        self.direct = self.git('rev-parse', 'HEAD')
        self.git('merge', '-q', '--no-ff', 'development', '-m', 'Release v1.0.0')
        self.merge = self.git('rev-parse', 'HEAD')
        self.default = 'trunk'
        self.calls = []
        self.api = publisher.GitHub('fixture/repo', request=self.request)

    def git(self, *args):
        return subprocess.check_output(['git', '-C', str(self.root), *args], text=True).strip()

    def request(self, method, url, **kwargs):
        self.calls.append((method, url))
        self.assertEqual(method, 'GET', 'Provenance must be read-only')
        path = unquote(url.removeprefix(self.api.base))
        if path == '':
            return {'default_branch': self.default}
        if path == '/git/ref/heads/' + self.default:
            return {'ref': 'refs/heads/' + self.default,
                    'object': {'type': 'commit', 'sha': self.git('rev-parse', self.default)}}
        if path.startswith('/git/commits/'):
            sha = path.rsplit('/', 1)[1]
            record = self.git('rev-list', '--parents', '-n', '1', sha).split()
            return {'sha': record[0], 'parents': [{'sha': x} for x in record[1:]]}
        self.fail('Unexpected provider path: ' + path)

    def test_direct_commit_and_development_merge_qualify(self):
        for source in (self.direct, self.merge):
            with self.subTest(source=source):
                result = self.api.verify_release_source(source)
                self.assertEqual(result['default_branch'], 'trunk')
                self.assertEqual(result['default_head'], self.merge)

    def test_advanced_default_preserves_pinned_release_merge(self):
        self.git('commit', '-q', '--allow-empty', '-m', 'Later work')
        later = self.git('rev-parse', 'HEAD')
        result = self.api.verify_release_source(self.merge)
        self.assertEqual(result['default_head'], later)
        self.assertNotEqual(result['default_head'], self.merge)

    def test_side_history_reachability_does_not_qualify(self):
        self.git('merge-base', '--is-ancestor', self.side, 'trunk')
        with self.assertRaisesRegex(ValueError, 'first-parent'):
            self.api.verify_release_source(self.side)

    def test_merge_in_wrong_direction_does_not_qualify(self):
        self.git('switch', '-q', 'development')
        self.git('merge', '-q', '--no-ff', 'trunk', '-m', 'Wrong direction')
        wrong = self.git('rev-parse', 'HEAD')
        with self.assertRaisesRegex(ValueError, 'first-parent'):
            self.api.verify_release_source(wrong)

    def test_actual_default_name_is_provider_owned_and_encoded(self):
        self.git('branch', '-m', 'trunk', 'release/stable')
        self.default = 'release/stable'
        result = self.api.verify_release_source(self.merge)
        self.assertEqual(result['default_branch'], self.default)
        self.assertTrue(any('release%2Fstable' in url for _, url in self.calls))

    def test_missing_or_substituted_metadata_blocks(self):
        original = self.request
        for kind in ('repository', 'branch', 'commit', 'substituted', 'ref'):
            with self.subTest(kind=kind):
                def request(method, url, **kwargs):
                    item = original(method, url, **kwargs)
                    if kind == 'repository' and url == self.api.base:
                        return {}
                    if kind == 'branch' and '/git/ref/' in url:
                        return None
                    if kind == 'ref' and '/git/ref/' in url:
                        item['ref'] = 'refs/heads/foreign'
                    if '/git/commits/' in url:
                        if kind == 'commit':
                            return None
                        if kind == 'substituted':
                            item['sha'] = 'f' * 40
                    return item
                self.api.request = request
                with self.assertRaises(ValueError):
                    self.api.verify_release_source(self.direct)
        self.api.request = original

    def test_invalid_source_and_cyclic_history_fail_closed(self):
        with self.assertRaises(ValueError):
            self.api.verify_release_source('trunk')
        self.assertEqual(self.calls, [])
        original = self.request
        def cycle(method, url, **kwargs):
            item = original(method, url, **kwargs)
            if '/git/commits/' in url:
                item['parents'] = [{'sha': item['sha']}]
            return item
        self.api.request = cycle
        with self.assertRaises(ValueError):
            self.api.verify_release_source(self.direct)
        self.assertLess(len(self.calls), 10)

    def test_distant_history_has_a_finite_read_bound(self):
        calls = []
        def request(method, url, **kwargs):
            calls.append(url)
            if url == self.api.base:
                return {'default_branch': 'trunk'}
            if '/git/ref/' in url:
                return {'ref': 'refs/heads/trunk', 'object': {'type': 'commit', 'sha': f'{2000:040x}'}}
            sha = url.rsplit('/', 1)[1]
            return {'sha': sha, 'parents': [{'sha': f'{int(sha, 16)-1:040x}'}]}
        self.api.request = request
        with self.assertRaisesRegex(ValueError, 'bound'):
            self.api.verify_release_source('f' * 40)
        self.assertLessEqual(len(calls), 1002)
