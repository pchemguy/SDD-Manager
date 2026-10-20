@echo off

set "CLI=%*"
set "CLI=%CLI:~10,-1%"
set "CLI=%CLI:\"="%"

%CLI%
