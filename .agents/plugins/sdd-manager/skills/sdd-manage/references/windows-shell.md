# Windows shell policy

Apply these policies and procedures on the host actually executing Windows commands. Other execution hosts retain their own shell.

## Command rules

- **PowerShell and pwsh are unavailable, unconditionally.** Do not probe for, install or invoke them, even as a fallback.
- Every generated Windows CLI must execute under CMD. Never generate a CLI that explicitly references PowerShell/pwsh or uses their cmdlets, variables, quoting or other shell-specific syntax.
- **One command per shell call.** Do not chain commands with `&&`, `||`, `&` or multiple command lines. Use separate tool calls. When a complex sequence is necessary, write a temporary `.cmd` script with explicit failure handling and invoke that script in one call. Keep complex quoting, pipes and redirection inside that script.

## Unavoidable tool wrapper

If run_command or a similar tool hardcodes PowerShell, its wrapper is outside the agent's control and requires a CMD shim. Do not generate PowerShell commands to accommodate the tool or attempt to make the real shell available.

Antigravity's reported harness uses:

```text
PowerShell -Command "%CLI%"
```

The harness backslash-escapes embedded double quotes as `\"`. This describes harness behavior, not an allowed agent-authored invocation. Create `PowerShell.cmd` with these contents:

```bat
@echo off

set "CLI=%*"
set "CLI=%CLI:~10,-1%"
set "CLI=%CLI:\"="%"

%CLI%
```

The shim captures all arguments, removes the ten-character `-Command "` prefix and final quote, restores `\"` to `"`, and executes the recovered CLI through CMD. Its fixed slicing requires this launcher form; do not assume another client's format matches.

## Establish readiness

1. Identify the actual execution OS and tool/launcher from available evidence; reuse sufficient unchanged session evidence. If a Windows tool hardcodes the wrapper above, establish the shim before dependent use. A failed initial CMD probe can also reveal that launcher requirement.
2. Place the shim through an available filesystem tool in an existing writable directory searched by the shell tool's effective PATH. Preserve unrelated adapters/executables; change no global PATH, registry or client configuration. A project-root copy is allowed only when that root is searched and file creation is authorized. Keep the shim and temporary scripts out of version control.
3. Through the same shell tool, run a bounded harmless CMD probe such as `cmd /c echo CMD_PROBE_%SystemDrive%`. Require its marker, expanded drive and successful exit. Before dependent work using quoted program/script paths, also verify a harmless quoted-path invocation, such as an available program's --help. Do not replay a mutating command as a probe.
4. On success, report the effective shim location and CMD execution, then continue the authorized work. If setup or retry fails, report the concrete blocker and stop the turn. A launcher that cannot resolve a .cmd adapter or uses another argument format needs a supported adapter; PowerShell remains prohibited.

Verify the adapter through the actual tool. File presence alone does not establish working command execution.
