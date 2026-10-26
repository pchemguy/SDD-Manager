"""Controlled native CMD contracts, distinct from live client activation.

Windows CMD executes the root policy's embedded adapter through the reported Antigravity
harness, including backslash-escaped embedded double quotes. Cases use LF/CRLF
assets, isolated PATH and spaced paths. Node exercises real executable argv;
no real PowerShell executable or global setting is used. These fixtures model
the unavoidable harness, not agent-authored PowerShell commands.
"""
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[1]
POLICY = ROOT / '.agents/plugins/sdd-manager/assets/WINDOWS_SHELL_POLICY.md'
ADAPTER = POLICY.read_text(encoding='utf-8').split('```bat\n', 1)[1].split('```', 1)[0].encode('ascii')


@unittest.skipUnless(os.name == 'nt', 'Requires native Windows CMD; Linux is not runtime evidence')
class WindowsShellAdapter(unittest.TestCase):
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
        self.node = shutil.which('node')
        self.assertIsNotNone(self.node, 'Native argv contracts require Node on PATH')
        self.environment = dict(os.environ, PATH=str(self.bin) + os.pathsep + os.environ['PATH'])

    def install_variants(self):
        """Exercise the standalone policy's batch block under both checkout endings."""
        canonical = ADAPTER.replace(b'\r\n', b'\n')
        for ending in (b'\n', b'\r\n'):
            (self.bin / 'PowerShell.cmd').write_bytes(canonical.replace(b'\n', ending))
            yield ending

    def invoke(self, command, prefix=()):
        """Model the unavoidable harness; the supplied CLI itself is CMD syntax.

        Trusted fixture commands are written literally in an isolated CMD driver.
        Explicit outer /s /c quoting handles the driver's spaced absolute path;
        executable selects native CMD without Python's implicit shell selection.
        """
        driver = self.work / 'probe driver.cmd'
        escaped = command.replace('"', '\\"')
        lines = ['@echo off', *prefix, 'PowerShell -Command "' + escaped + '"']
        driver.write_bytes(('\r\n'.join(lines) + '\r\n').encode('ascii'))
        return subprocess.run(
            '"' + str(self.cmd) + '" /d /s /c ""' + str(driver) + '""',
            executable=str(self.cmd), cwd=self.work, env=self.environment,
            capture_output=True, text=True, timeout=15, check=False,
        )

    def test_path_resolution_and_expanded_cmd_probe(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('echo CMDPROBE%SystemDrive%', ['where PowerShell'])
                self.assertEqual(result.returncode, 0, result.stderr)
                lines = result.stdout.strip().splitlines()
                self.assertTrue(Path(lines[0]).samefile(self.bin / 'PowerShell.cmd'), lines[0])
                self.assertIn('CMDPROBE' + os.environ['SystemDrive'], lines)
                self.assertNotIn('%SystemDrive%', result.stdout)

    def test_apostrophes_and_single_quotes_are_preserved(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                quoted = self.invoke("echo 'SDD QUOTE'")
                self.assertEqual(quoted.returncode, 0, quoted.stderr)
                self.assertEqual(quoted.stdout.strip(), "'SDD QUOTE'")
                literal = self.invoke("echo O'Brien")
                self.assertEqual(literal.returncode, 0, literal.stderr)
                self.assertEqual(literal.stdout.strip(), "O'Brien")

    def test_nonzero_command_status_is_preserved(self):
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('cmd /c exit 7')
                self.assertEqual(result.returncode, 7, result.stdout + result.stderr)

    def test_quoted_node_script_and_arguments_survive_harness_escaping(self):
        script = self.work / 'scripts with spaces' / 'argv probe.mjs'
        script.parent.mkdir()
        script.write_text('process.stdout.write(JSON.stringify(process.argv.slice(2)));\n'
                          'process.stderr.write("SDD_STDERR\\n");\n', encoding='utf-8')
        output = self.work / 'output with spaces.json'
        command = f'"{self.node}" "{script}" --repo "{self.work}" --output "{output}" "O\'Brien"'
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke(command)
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                self.assertEqual(json.loads(result.stdout),
                                 ['--repo', str(self.work), '--output', str(output), "O'Brien"])
                self.assertEqual(result.stderr.strip(), 'SDD_STDERR')
                self.assertFalse(output.exists())

    def test_complex_sequence_runs_from_one_temporary_cmd_script(self):
        script = self.work / 'temporary sequence.cmd'
        script.write_bytes(b'@echo off\r\necho SDD_FIRST\r\necho SDD_SECOND\r\nexit /b 7\r\n')
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke(f'"{script}"')
                self.assertEqual(result.returncode, 7, result.stdout + result.stderr)
                self.assertEqual([line.strip() for line in result.stdout.splitlines()], ['SDD_FIRST', 'SDD_SECOND'])

    def test_actual_forge_helpers_start_with_quoted_paths(self):
        forge = ROOT / '.agents/plugins/sdd-manager/skills/sdd-forge/scripts'
        for ending in self.install_variants():
            for name in ['forge-project.mjs', 'forge-project-draft.mjs']:
                with self.subTest(ending=ending, script=name):
                    result = self.invoke(f'node "{forge / name}" --help')
                    self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                    self.assertIn('--repo', result.stdout)

    def test_literal_exclamation_marks_are_preserved(self):
        self.environment['SDD_BANG'] = 'UNINTENDED_EXPANSION'
        for ending in self.install_variants():
            with self.subTest(ending=ending):
                result = self.invoke('echo SDD!SDD_BANG!')
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                self.assertEqual(result.stdout.strip(), 'SDD!SDD_BANG!')


if __name__ == '__main__':
    unittest.main()
