"""Release names are checked even when an upload manifest agrees with them."""
import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('artifact_publisher', Path(__file__).parents[1] / 'scripts' / 'release.py')
publisher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(publisher)


class ReleaseAssetNames(unittest.TestCase):
    def test_matching_manifest_does_not_authorize_any_versioned_artifact(self):
        class Provider:
            def download(self, asset):
                return b'fixture bytes'
        data = {'tag': 'v1.2.3', 'notes': 'fixture', 'prerelease': False}
        for name in ('product-v1.2.3', 'product-1.2.3.unknown',
                     'product_1_2_3.blob', 'product-1-2-3.signature'):
            with self.subTest(name=name):
                release = {'tag_name': data['tag'], 'name': 'SDD Manager ' + data['tag'],
                           'body': data['notes'], 'prerelease': False,
                           'assets': [{'name': name, 'state': 'uploaded', 'size': 13}]}
                with self.assertRaises(ValueError):
                    publisher.verify_release(Provider(), release, data,
                                             {name: b'fixture bytes'}, complete=True)


class GateBeforeProvider(unittest.TestCase):
    def test_bad_candidate_stops_before_provider_access(self):
        import hashlib
        data = {'source': 'a'*40, 'notes_source': 'a'*40, 'tag': 'v1.2.3',
                'notes': 'fixture', 'notes_sha256': hashlib.sha256(b'fixture').hexdigest(),
                'publish': True, 'prerelease': False, 'make_latest': True,
                'request_id': 'naming-fixture'}
        with self.assertRaises(ValueError):
            publisher.reconcile_release(None, data, {'artifact-v1.2.3.unseen': b'x'})

    def test_stable_foreign_manifest_cannot_define_the_package_contract(self):
        import hashlib
        data = {'source': 'a'*40, 'notes_source': 'a'*40, 'tag': 'v1.2.3',
                'notes': 'fixture', 'notes_sha256': hashlib.sha256(b'fixture').hexdigest(),
                'publish': True, 'prerelease': False, 'make_latest': True,
                'request_id': 'inventory-fixture'}
        with self.assertRaises(ValueError):
            publisher.reconcile_release(None, data, {'foreign': b'x'})


if __name__ == '__main__':
    unittest.main()
