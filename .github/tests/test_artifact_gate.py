"""Public naming checker: all names, independent expectations and real CLI."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).resolve().parents[2] / '.agents/plugins/sdd-manager/skills/sdd-verify/scripts/release_assets.py'
spec = importlib.util.spec_from_file_location('artifact_gate', SCRIPT)
gate = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gate)


class ArtifactGate(unittest.TestCase):
    def test_arbitrary_formats_no_extension_and_faulty_expected_list(self):
        for suffix in ('', '.html', '.zip', '.whl', '.sig', '.unknown-format', '.sha256'):
            for marker in ('v1.2.3', '1_2_3', '1-2-3', 'v7', 'version-7'):
                name = 'artifact-' + marker + suffix
                with self.subTest(name=name), self.assertRaises(ValueError):
                    gate.check_names([name], [name], '1.2.3')

    def test_stable_names_and_legitimate_product_architecture_digits(self):
        names = ['tetris3d.html', 'tetris3d-windows-x64.zip', 'tetris3d-chromium.pkg',
                 'tetris3d-firefox.pkg', 'SHA256SUMS', 'signature', 'model2-x86_64.blob']
        for version in ('1.2.3', '2.0.0'):
            self.assertEqual(gate.check_names(names, names, version),
                             {'ok': True, 'complete': True, 'checked': 7})

    def test_previous_or_fullwidth_version_is_not_a_bypass(self):
        for name in ('artifact-0.4.2.bin', 'artifact-v\uff11.\uff12.\uff13'):
            with self.subTest(name=name), self.assertRaises(ValueError):
                gate.check_names([name], [name], '2.0.0')

    def test_inventory_missing_extra_and_colliding(self):
        for actual in ([], ['good', 'extra'], ['good', 'good'], ['good', 'GOOD']):
            with self.subTest(actual=actual), self.assertRaises(ValueError):
                gate.check_names(['good'], actual, '1.2.3')
        self.assertEqual(gate.check_names(['good'], [], '1.2.3', complete=False)['complete'], False)
        with self.assertRaises(ValueError):
            gate.check_names(['good'], ['bad-v1.2.3'], '1.2.3', complete=False)

    def test_every_directory_entry_reaches_gate_and_publisher_is_not_called(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp);out = root/'out';out.mkdir();contract = root/'expected.json'
            (out/'good').write_bytes(b'content');(out/'surprise-v1.2.3.unseen').write_bytes(b'x')
            contract.write_text(json.dumps(['good']))
            result = subprocess.run([sys.executable, str(SCRIPT), '--expected', str(contract),
                                     '--directory', str(out), '--version', '1.2.3'], capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertFalse(json.loads(result.stdout)['ok'])
            self.assertIn('surprise-v1.2.3.unseen', result.stdout)
            (out/'surprise-v1.2.3.unseen').unlink()
            for version in ('1.2.3', '2.0.0'):
                (out/'good').write_text('embedded version '+version)
                result = subprocess.run([sys.executable, str(SCRIPT), '--expected', str(contract),
                                         '--directory', str(out), '--version', version], capture_output=True, text=True)
                self.assertEqual(result.returncode, 0, result.stdout+result.stderr)
                self.assertEqual(json.loads(result.stdout)['checked'], 1)

    def test_provider_inventory_and_directory_contents_cannot_be_hidden(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp);(root/'nested').mkdir()
            with self.assertRaises(ValueError):
                gate.directory_names(root)
            (root/'nested').rmdir();(root/'real').write_bytes(b'x')
            try:
                (root/'link').symlink_to(root/'real')
            except OSError:
                return
            with self.assertRaises(ValueError):
                gate.directory_names(root)
