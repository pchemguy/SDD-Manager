# Cross-platform development revision report

Campaign **126_8deae37**; baseline `8deae37156b4a372293a2ca4412006e36e744e16`; working branch `revision/126_8deae37-cross-platform-dev`; creation parent/return main. [Plan](REVISION-PLAN.md).

## V-001 — Unavailable native verification is out of scope

Implemented the human's rule in sdd-verify/check-selection with seven concise handoffs covering coordinator and implementation entries, environment recovery, specification acceptance, delivery planning, task derivation and release verification. Requested target artifacts remain in scope; unavailable native runtime testing is excluded by default, symmetrically for Windows-on-Linux, Linux-on-Windows and equivalent targets. No repeated waiver, VM or native-CI provisioning is required to continue. Only deliberate explicit human selection of native testing despite known unavailability overrides this default; agent-generated gates or ordinary document approvals do not supply it.

Feasible build/package/regression checks remain required, and an unproducible artifact is a build limitation rather than a native-test limitation. Completion, remaining implementation, integration and already authorized release may proceed on the actual in-scope evidence. Reports identify host/target/artifact/checks and native execution not tested, without claiming native compatibility. Existing agent-invented gates are corrected in active owning documents/evidence under current change authority, preserving task identities and historical results.

## Source verification

| Contrast | Instruction trace result |
| --- | --- |
| Windows package on Linux without Windows facility | Retain package/build checks; native Windows testing excluded; remaining authorized tasks continue. |
| Linux package on Windows without Linux facility | Same rule with host/target reversed. |
| Target native facility already available | Ordinary applicable native verification remains available; absence rule does not waive feasible required checks. |
| Native runtime unavailable but cross-build fails | Exclusion does not turn a failed build into a delivered artifact; diagnose the build independently. |
| Agent-generated PLAN/TASKS makes missing native execution a dependency | Correct the active gate through owners; preserve identities/evidence and continue without another waiver. |
| Human deliberately requires native execution despite known missing facility | Preserve that explicit override and its actual blocking boundary. |
| Release artifact inspected/cross-built without native execution | Authorized release may proceed with artifacts and feasible checks complete; label native execution not tested. |
| Remaining task range, unrelated failure or human stop | Native absence cannot stop the range; actual in-scope failures and requested stops still control. |

These are source/handoff assessments, not native runtime or independent consumer trials. All seven new links resolve to the canonical section. Frozen campaign files are unchanged and diff whitespace passes.

Local checks: 139 acceptance-support tests passed. Initial publisher run lacked declared jsonschema dependency (21 import errors among 50 cases); installed .github/requirements.txt into an isolated temporary dependency directory and reran all 50 publisher tests successfully. Total: 189 passing tests on Linux/Python 3.12.14. No executable helper changed, so Node/native-platform reruns were not selected.

The quoted demo application's repository was not selected or modified; this result changes SDD Manager guidance. Publish/read back the containing action commit. Campaign 126 remains open; no integration or release selected.
