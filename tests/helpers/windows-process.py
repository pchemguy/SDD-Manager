"""Source-only native Windows process identity and owner-death fixture.

PID reuse is legal immediately after a process is reaped. Compare creation times
when observing a recorded helper, and terminate through an opened process handle
only after matching that identity. This fixture neither enumerates processes nor
selects targets by name. It requires Python 3.11+ and no external packages.
"""
import ctypes
import json
import os
import sys
from ctypes import wintypes as w


def main():
    if os.name != 'nt':
        raise ValueError('windows_required')
    kernel = ctypes.WinDLL('kernel32', use_last_error=True)
    signatures = {
        'OpenProcess': ([w.DWORD, w.BOOL, w.DWORD], w.HANDLE),
        'GetProcessTimes': ([w.HANDLE] + [ctypes.POINTER(w.FILETIME)] * 4, w.BOOL),
        'WaitForSingleObject': ([w.HANDLE, w.DWORD], w.DWORD),
        'TerminateProcess': ([w.HANDLE, w.UINT], w.BOOL),
        'CloseHandle': ([w.HANDLE], w.BOOL),
    }
    for name, (arguments, result) in signatures.items():
        function = getattr(kernel, name)
        function.argtypes, function.restype = arguments, result
    action, *arguments = sys.argv[1:]
    if action not in ('query', 'terminate') or not arguments:
        raise ValueError('arguments')
    pids = arguments if action == 'query' else arguments[:1]
    values = []
    for raw in pids:
        pid = int(raw)
        if pid <= 0:
            raise ValueError('pid')
        handle = kernel.OpenProcess(0x1000 | 0x100000 | (1 if action == 'terminate' else 0), False, pid)
        if not handle:
            if ctypes.get_last_error() == 87 and action == 'query':
                values.append({'pid': pid, 'active': False, 'born': None})
                continue
            raise OSError('process_query_failed')
        try:
            times = [w.FILETIME() for _ in range(4)]
            if not kernel.GetProcessTimes(handle, *(ctypes.byref(value) for value in times)):
                raise OSError('process_query_failed')
            born = str((times[0].dwHighDateTime << 32) | times[0].dwLowDateTime)
            wait = kernel.WaitForSingleObject(handle, 0)
            if wait not in (0, 0x102):
                raise OSError('process_query_failed')
            if action == 'terminate':
                if len(arguments) != 2 or born != arguments[1] or wait != 0x102:
                    raise ValueError('process_identity_changed')
                if not kernel.TerminateProcess(handle, 1):
                    raise OSError('process_termination_failed')
            values.append({'pid': pid, 'born': born, 'active': wait == 0x102})
        finally:
            kernel.CloseHandle(handle)
    print(json.dumps(values, separators=(',', ':')))


if __name__ == '__main__':
    try:
        main()
    except (OSError, ValueError, IndexError):
        print('{"error":"native_process_fixture_failed"}')
        sys.exit(1)
