@echo off
rem CMD adapter for PowerShell -Command and one command-string argument.
rem Every single quote becomes a double quote; use CMD-compatible commands.
rem Deployment contract: skills/sdd-manage/references/windows-shell-recovery.md.

set "CLI=%~2"
set "CLI=%CLI:'="%"

%CLI%
