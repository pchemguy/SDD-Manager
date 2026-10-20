# Windows shell policy

Apply these policies and procedures on the host actually executing Windows commands. Other execution hosts retain their own shell.

These are general policies. If the target project specifically targets PowerShell or defines explicit project-specific shell policies, those requirements override the corresponding general rules below.

## Command rules

- **Treat PowerShell and pwsh as unavailable.** Do not probe for, install or invoke them, even as a fallback.
- Every generated Windows CLI must execute under CMD. Never generate a CLI that explicitly references PowerShell/pwsh or uses their cmdlets, variables, quoting or other shell-specific syntax.
- **One command per shell call.** Do not chain commands with `&&`, `||`, `&` or multiple command lines. Use separate tool calls. When a complex sequence is necessary, write a temporary `.cmd` script with explicit failure handling and invoke that script in one call. Keep complex quoting, pipes and redirection inside that script.

## Probe and recover

1. Identify the actual execution OS from available environment evidence. On Windows, call the actual shell/terminal tool with `echo CMDPROBE%SystemDrive%`. Inspect output, error and exit status. Require a successful exit and `CMDPROBE` followed by the expanded system drive; literal `%SystemDrive%` is not a pass.
2. If the probe succeeds, continue the authorized work. Before dependent work using quoted program/script paths, verify a harmless quoted-path invocation, such as an available program's --help. Reuse sufficient unchanged session evidence.
3. If the probe fails with a PowerShell-related error, such as a missing executable or PowerShell launch/execution failure, recover with the shim below. For another failure, report the actual blocker and stop.
4. Place `PowerShell.cmd` in the shell tool's **current working directory (CWD)** or an existing writable directory on its effective **PATH**, using an available filesystem tool. Preserve unrelated adapters/executables; change no global PATH, registry or client configuration. Keep the shim and temporary scripts out of version control.
5. Retry `echo CMDPROBE%SystemDrive%` through the same shell tool. On success, report the effective shim location and CMD execution, verify any needed quoted-path invocation, then continue. If setup or retry fails, report the blocker and stop the turn. Do not replay a mutating command as a probe.

## Tool wrapper and shim

run_command or a similar tool may internally invoke PowerShell, outside the agent's control. If the probe fails with a PowerShell-related error, create the `PowerShell.cmd` shim below and repeat the probe.

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

A launcher that cannot resolve a .cmd adapter or uses another argument format remains blocked. File presence alone does not establish working command execution; verify through the actual tool.
