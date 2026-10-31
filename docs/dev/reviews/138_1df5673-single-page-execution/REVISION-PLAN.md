# Single-page demo execution modes

Campaign **138_1df5673**. Ordinary revision; starting baseline/branch-off `1df5673fb6070bebac9e63f6f9f5e9fe0cb268dd`, creation parent and integration target main. Working branch: `revision/138_1df5673-single-page-execution`. No suspended parent.

## Accepted scope

Integrate the agreed direct-file versus HTTP(S) execution rules into Single Page Autodoc.md and Single Page Featured Autodoc.md under docs/demo/tetris/prompts/. Detect using location.protocol. File mode uses defaults/session memory and disables cookie and configuration-URL reads/writes; manual Save/Restore remains available when introduced, with restored settings applied only in memory. HTTP(S), including localhost, retains specified URL → cookie → default behavior when that capability is introduced. Verify both paths in the requested application work.

URL parameters can technically work in file URLs; disabling them is the selected application contract. Preserve feature staging, other gameplay/layout requirements, original non-single-page prompts, package version and closed campaign records. No generated application implementation or new release selected.

## Actions and checks

| Action | Outcome | Verification / stop |
| --- | --- | --- |
| V-001 | Add baseline dual-mode execution and mode-specific persistence/Restore qualifications in both prompts | Consistent rules, independently submitted feature requests retain necessary context, no premature capabilities, focused exact diff |
| V-002 | Finalize and close campaign | Current active links/Markdown, scoped preservation and relevant documentation checks; publish each commit, explicit verified main merge/readback and clean return |
