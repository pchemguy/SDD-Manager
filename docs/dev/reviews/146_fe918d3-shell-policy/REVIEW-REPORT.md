# Comprehensive prerelease review

Campaign **146_fe918d3**, reviewed product baseline **e9eff0962321c0240eb32e35b4c1b7b1025e0669**, intended release 0.16.5. [Plan](REVIEW-PLAN.md) and [inventory](REVIEW-INVENTORY.json) govern coverage. State: U-001/U-002 assessed; three confirmed accepted defects await repair, U-003 remains pending. Existing exact-source native Windows run 41781528334 passes fourteen tests on Node 22 and 24, distinct from this comprehensive review.

| Unit | State | Scope |
| --- | --- | --- |
| U-001 | Reviewed; no confirmed defect | 178/178 current paths, independent source coverage and structure checks |
| U-002 | Reviewed; R-001–R-003 accepted | 184/184 paths; 346 local passes, 14 Linux skips and qualified native matrices |
| U-003 | Pending | Publisher/package/composition |

Canonical findings and source-specific rechecks are appended as assessed. Earlier closed records remain frozen. No fresh installed-client/live consumer claim.

## U-001 — Product instructions, documentation and assets

Reviewed product source **e9eff0962321c0240eb32e35b4c1b7b1025e0669** from clean published planning checkpoint **60b092420b30086482027d1b65a0ccadf5233db3**. Complementary independent reviews inspect all **178/178** assigned paths: [entry/workflow report](independent/U-001-entry-review.md) and [62-path coverage](independent/U-001-entry-coverage.json), plus [focused docs/assets report](independent/U-001-docs-review.md) and [116-path coverage](independent/U-001-docs-coverage.json). Every assigned observed hash matches the baseline inventory; no path is silently omitted.

No confirmed source defect. Inspected direct/contextual routing and all fifteen owner entries, coordinator modes/approvals, preparation/tracking, single-task persistence and recovery, selected feature incorporation, phase/revision integration, stops/parent return, current contracts/guides/templates/demos and diagram semantics. Accepted exact paragraph ordering and target-root AGENTS-template links are preserved as controlling choices. The documentation scan examines 439 relative links and manually resolves expected generated-target/example cases; no unexpected missing target/anchor remains.

[Coordinator structure evidence](evidence/U-001-structure.json) passes all 178 pinned hashes, fifteen skills/YAML metadata files, seventeen SVG parses and two PNG decodes/dimensions. Plugin validation exits 0 with 69 existing bundled-cross-skill/client-dependence warnings. Project policy assets are not directly activated/linked by plugin/skill entries or workflow references. Earlier closed records remain unchanged by path/object comparison. The docs reviewer visually inspects the identical PNG pixels; SVG source/XML is inspected, while rasterization is unavailable because the rsvg-convert delegate is absent. Markdown/Mermaid source semantics are assessed without a rendering pass.

### Recommendation disposition

**REC-DOC-001 — Optional package-availability navigation in README.** Low-priority enhancement suggested by the docs reviewer, not a confirmed contract defect or release blocker. Deferred: current README intentionally presents local source/loading, while the retained release notes already give package/download/import guidance; adding a new installation section is optional editorial scope rather than a required repair for this candidate. No declined human acceptance is inferred and no source requirement is invented.

### Limits and next unit

These are source/metadata/documentation checks, not fresh-agent routing/compliance, installed-client discovery/rendering, native helper behavior, live provider or TextStats consumer acceptance. Independent reports retain every considered-but-unjudged behavior and reason. No runtime suite is run in U-001. Publish/read back this consolidated checkpoint before starting U-002; whole-product readiness remains pending.

## U-002 — Runtime tools, tests and acceptance harness

Reviewed source **e9eff0962321c0240eb32e35b4c1b7b1025e0669** at clean published checkpoint **ff0251adf848101454d5b53407edd0fee5316ad5**. Independent [native-tools review](independent/U-002-native-review.md) / [24-path coverage](independent/U-002-native-coverage.json) and [acceptance review](independent/U-002-acceptance-review.md) / [160-path coverage](independent/U-002-acceptance-coverage.json) account for all **184/184** assigned paths and matching hashes. Runtime implementation and tests were inspected independently of passing counts.

Fresh [local execution evidence](evidence/U-002-execution.json) at that checkpoint passes **346** tests: support 140, publisher 62, Git/auth/publication 54, forge completion 39 and projection 51, on Linux/Python 3.12.14/Node 24.22.1/Git 2.51.1. Fourteen native-Windows tests are collected and explicitly skip on Linux. No failed/cancelled local tests or ignored source changes remain.

[Actual native CI evidence](evidence/U-002-native-ci.json) records fourteen successful jobs. Core Git/completion/projection matrices at published source fbd8baabbf09eb2e50fe6f3c890392939f74d3c3 run Linux/Windows and Node 22/24; exact relevant runtime/test/helper/template/workflow objects equal the reviewed product source. These are qualified prior runs, not fresh executions at the review checkpoint. Shell run 41781528334 at exact source e9eff0962321c0240eb32e35b4c1b7b1025e0669 passes fourteen quoted/unquoted tests on each Node 22/24 job. Controlled/synthetic/native evidence does not establish live provider or consumer acceptance.

### Canonical confirmed findings

| Finding | Priority / confidence | Located evidence and consequence | Accepted bounded correction / objective recheck |
| --- | --- | --- | --- |
| R-001 | P2 / high | forge-close.mjs:32 uses single-line milestone description validation, rejecting multiline descriptions accepted/emitted by projection; public CLI returns invalid_milestone before provider access. | Match bounded multiline description input semantics, retain exact identity/control/length/marker checks; cover projected multiline task/milestone/predecessor handoffs and dependent/native regressions. |
| R-002 | P3 / high | forge-close.mjs:310 accepts @{-1} via Git's expanding --branch mode; actual native public run posts that shorthand as durable branch evidence and closes the synthetic issue. | Require a valid literal branch association without silently rewriting it; reject checkout shorthand before provider effects, retain ordinary slash/Unicode branches and invalid-name tests. |
| R-003 | P2 / high | core.py:577–581/639–734 exports stage entries without semantic flags, so complete intent-to-add restoration changes unstaged addition into staged empty-file addition; trial_control.py:53–61 similarly misses assume-unchanged drift and resumes the next mutation. | Preserve supported semantic flag intent and restoration, or explicitly refuse unsupported completeness/continuation; recheck staged/unstaged/status semantics and reject held flag-only drift before later commands, preserving ordinary/conflict recovery. |

All three are accepted under the human's confirmed-fix authority and remain **unrepaired/unverified** at this review checkpoint. [Native reproductions](evidence/U-002-native-reproductions.json) retain actual parser/CLI/public-run observations using isolated real Git roots and injected HTTP only. The acceptance report retains two independently observed temporary-Git reproductions: complete:true restoration changes status from unstaged addition to AM, and a Held receipt with flag-only drift resumes to Completed. Source checkout and real credentials/provider state were untouched.

### Coverage and limits

No additional confirmed defect or optional native/acceptance requirement was found. Source coverage includes credential/root/common-dir protections, deterministic publication, process trees/deadlines/readback, API capability/pagination/retry, projection/completion locks and identity, shell wrapper scenarios, TextStats role separation, all 33 scenario pairs, schemas, capture/recovery/checkpoint/receipt controls and independent expected-value tests. Per-path no-finding records and every considered-but-unjudged behavior remain in the independent outputs.

No fresh installed-client/consumer, live GitHub write, arbitrary launcher/OS fault or general cross-machine index backup is claimed. R-003 is demonstrated for intent-to-add and assume-unchanged; other modes require explicit supported handling or conservative refusal rather than an unsupported opaque-index guarantee. Publish/read back this report before starting U-003, then repair/recheck the accepted findings before final acceptance.
