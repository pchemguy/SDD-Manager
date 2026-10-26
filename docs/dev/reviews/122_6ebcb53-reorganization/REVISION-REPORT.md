# Reorganization revision report

Campaign **122_6ebcb53**; baseline `6ebcb5318fc29ff3c369d55dade449f768f4bbce`; branch `revision/122_6ebcb53-reorganization`, parent/return main. [Plan](REVISION-PLAN.md).

## V-001 — AI-log reference relocation

Moved `skills/sdd-manage/references/initialization/ai-logs.md` to `skills/sdd-manage/references/ai-logs.md` within the plugin. Removed the now-empty initialization directory. Updated 11 maintained reference owners, including the package README, tracking JSON, workflow references, capability map and package-snapshot test. Adjusted the moved file’s asset and sibling links; exact comparison confirms all other procedural text is preserved.

Verification: 139 acceptance-support tests and 50 publisher tests passed on Linux/Python 3.12.14. All 791 package-local file links resolve. No obsolete path remains in maintained callers; closed campaign/history records retain their original paths and are unchanged. Diff whitespace passes. This is a source relocation, with no live agent trial or new release claimed.

The containing action commit is published with remote readback before further work. Campaign 122 remains open for further shuffling; no merge or release is selected.
