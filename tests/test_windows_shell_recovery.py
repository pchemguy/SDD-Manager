"""Controlled native CMD contracts, distinct from live client activation.

Only Windows executes the supplied batch adapter. Each case tests LF and CRLF
package bytes, in temporary paths containing spaces, using a process-local PATH.
No real PowerShell executable, user profile, repository or global setting changes.
"""
import os
from pathlib import Path
import subprocess
import tempfile
import unittest


ASSET = Path(__file__).resolve().parents[1] / '.agents/plugins/sdd-manager/assets/PowerShell.cmd'


@unittest.skipUnless(os.name == 'nt', 'Requires native Windows CMD; Linux is not runtime evidence')
class WindowsShellRecovery(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix='sdd shell probe ')
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.bin = self.root / 'user bin'
        self.work = self.root / 'project root'
        self.bin.mkdir()
        self.work.mkdir()
        self.cmd = Path(os.environ['SystemRoot']) / 'System32/cmd.exe'
        self.assertTrue(self.cmd.is_file())
        self.environment = dict(os.environ, PATH=str(self.bin) + os.pathsep + os.environ['PATH'])

    def install_variants(self):
        """Exercise the distributed text under both native checkout endings."""
        canonical = ASSET.read_bytes().replace(b'\r\n', b'\n')
        for ending in (b'\n', b'\r\n'):
            (self.bin / 'PowerShell.cmd').write_bytes(canonical.replace(b'\n', ending))
            yield ending

    def invoke(self, command, prefix=()):
        """Pass one command-string argument through the documented launcher form.

        Trusted fixture commands are written literally in an isolated CMD driver.
        Explicit outer /s /c quoting handles the driver's spaced absolute path;
        executable selects native CMD without Python's implicit shell selection.
        """
        driver = self.work / 'probe driver.cmd'
        lines = ['@echo off', *prefix, 'PowerShell -Command "' + command + '"']
        driver.write_bytes(('\r\n'.join(lines) + '\r\n').encode('ascii'))
        return subprocess.run(
            '"' + str(self.cmd) + '" /d /s /c ""' + str(driver) + '""',
            executable=str(self.cmd), cwd=self.work, env=self.environment,
            capture_output=True, text=True, timeout=15, check=False,
        )

    def test_path_resolution_and_expanded_cmd_probe(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('cmd /d /c echo SDD_CMD_PROBE_%SystemDrive%', ['where PowerShell'])
                self.assertEqual(result.returncode, 0, result.stderr)
                lines = result.stdout.strip().splitlines()
                self.assertTrue(Path(lines[0]).samefile(self.bin / 'PowerShell.cmd'), lines[0])
                self.assertIn('SDD_CMD_PROBE_' + os.environ['SystemDrive'], lines)
                self.assertNotIn('%SystemDrive%', result.stdout)

    def test_all_single_quotes_become_double_quotes(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                quoted = self.invoke("echo 'SDD QUOTE'")
                self.assertEqual(quoted.returncode, 0, quoted.stderr)
                self.assertEqual(quoted.stdout.strip(), '"SDD QUOTE"')
                literal = self.invoke("echo O'Brien")
                self.assertEqual(literal.returncode, 0, literal.stderr)
                self.assertEqual(literal.stdout.strip(), 'O"Brien')

    def test_nonzero_command_status_is_preserved(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('cmd /d /c exit 7')
                self.assertEqual(result.returncode, 7, result.stdout + result.stderr)

    def test_quote_conversion_changes_quoted_redirection(self):
        """Retain the observed limitation of the human-selected assignment."""
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke("cmd /d /c 'echo SDD_STDERR 1>&2'")
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                self.assertEqual(result.stdout.strip(), 'SDD_STDERR')
                self.assertEqual(result.stderr.strip(), '')

    def test_command_separators_execute_once(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('echo SDD_FIRST & echo SDD_SECOND')
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                self.assertEqual([line.strip() for line in result.stdout.splitlines()], ['SDD_FIRST', 'SDD_SECOND'])

    def test_literal_exclamation_marks_are_preserved(self):
        self.environment['SDD_BANG'] = 'UNINTENDED_EXPANSION'
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('echo SDD!SDD_BANG!')
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                self.assertEqual(result.stdout.strip(), 'SDD!SDD_BANG!')


if __name__ == '__main__':
    unittest.main()
