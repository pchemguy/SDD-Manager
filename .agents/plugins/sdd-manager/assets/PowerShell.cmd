@echo off
rem CMD adapter for PowerShell -Command and one command-string argument.
rem Every single quote becomes a double quote; use CMD-compatible commands.
rem Deployment contract: skills/sdd-manage/references/windows-shell-recovery.md.

setlocal DisableDelayedExpansion
set "CLI=%~2"
rem Delay this substitution so inserted quotes cannot consume redirection here.
setlocal EnableDelayedExpansion
set "CLI=!CLI:'="!"
setlocal DisableDelayedExpansion

%CLI%
