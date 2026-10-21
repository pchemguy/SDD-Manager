# Playwright recovery revision evidence

## Campaign and state

Campaign 095_000d2ec; [authorized plan](REVISION-PLAN.md). Full baseline: 000d2ec0ed7a3b06aa943300a5d475cf73e0a393. Working branch: revision/095_000d2ec-playwright-recovery. Parent/target/return: revision/094_93e8f74-demo-prompts; parent remains open and suspended. Opening 8ebaddc3be5aacecb1fc12c92949e7584196c391 was pushed and exactly read back, with supervisor cleanup confirmed.

## A-001 — Policy procedures

Expanded only the Playwright section of [BROWSER_DEV_POLICY.md](../../../../BROWSER_DEV_POLICY.md). It now owns installed-runner preflight, headless-shell selection, per-browser download diagnostics, official mirror/image recovery, platform/digest/layer-safe extraction, conditional process-local Firefox recovery and deadline-bounded execution verification. Browser selection, environment isolation and framework-neutral sections remain byte-identical. No plugin files or demo prompts changed.

The image route is an alternative official distribution, not a claim that all network failures can be bypassed. Extracted browsers retain host dependency requirements. Firefox's override explicitly reduces its internal content-process isolation and is limited to diagnosed dedicated environments and trusted local test content. Required full/headed browser checks remain required when project criteria select them.

### Fresh example execution

On Ubuntu 24.04 x86_64 with Node 24.19.0 and installed Playwright 1.56.1, a temporary harness extracted both JavaScript blocks from the actual edited policy. It applied the Chromium project's headless setting without channel/executable override and executed the Firefox launch block with its process-local environment setting. Dedicated browser root: /tmp/sdd-playwright-diagnostic/extracted/ms-playwright. Whole-process deadline: 30 seconds, followed by a 3-second kill bound; action/navigation deadlines: 5 seconds.

| Browser | Observed version | Fresh result |
| --- | --- | --- |
| Chromium default headless shell | 141.0.7390.37 | Two contexts/pages, keyboard text `test`, button text `OK`, Canvas RGBA [255, 0, 0, 255], PNG screenshot per cycle, context/browser teardown; exit 0. |
| Playwright Firefox with scoped override | 142.0.1 | Same two-cycle checks and successful teardown; exit 0. |

Command: `PLAYWRIGHT_BROWSERS_PATH=/tmp/sdd-playwright-diagnostic/extracted/ms-playwright timeout -k 3 30 node /tmp/sdd-playwright-diagnostic/policy-check.cjs`. The first harness invocation used a synchronous Function constructor for the snippet's await and failed before browser launch; correcting the temporary harness to AsyncFunction produced the results above without changing policy settings. Temporary outputs are corroborating session artifacts, not durable project dependencies.

The installed CLI's `install --dry-run --only-shell chromium firefox` exits 0 and selects chromium-headless-shell 1194, FFmpeg 1011 and Firefox 1495. This dry-run used the default cache only to inspect CLI selection; it installed nothing. Browser execution used the dedicated path above. `git diff --check` passes.

### Prior distribution and failure evidence

Earlier probes in this conversation, before campaign opening, used the same runner/host. CDN browser downloads returned HTML or 503. Official image `mcr.microsoft.com/playwright:v1.56.1-noble` provided amd64 manifest sha256:42f02d323c310069b4d54c94bd91a608966a486c3492c48ae0b1cea747ec5ca2 and browser layer sha256:44acc34a5cf7569816f1cbd047c04ba06ad8face9b0707ca096e78a7d1b856f3 (786741920 bytes); manifest/config/layer checksums were verified before selected browser extraction. Full Chromium failed a host-denied socket operation; Firefox without the override stalled at page creation with uid_map EPERM and child crashes. These prior observations motivate the procedures; the campaign did not repeat the large download or claim Docker execution.

## Verification limits and next step

Fresh checks establish the documented settings' environment capability on this host, not a target application's acceptance, headed/OS-window focus, security-sandbox coverage, other versions/OSes, native Windows or installed-agent compliance. The runtime override deliberately changes Firefox's internal security isolation. No release or installed-plugin update is selected.

A-001 is verified and published at bed4354cc88b6698064d25fdfd818ff9496541ba; exact remote readback matched and supervisor cleanup was confirmed.

## A-002 — Final composition and boundary review

The policy contains 1932 words, including its unchanged general sections. Detailed Playwright procedures remain one cohesive section: normal setup and mode selection precede diagnosis, optional image recovery, Firefox recovery and evidence. No separate thin reference, repeated skill policy or generic installer script was introduced. The added detail provides operational decisions and specific API/CLI/settings rather than promising an environment-independent repair.

| Scenario assessed against final source | Outcome |
| --- | --- |
| Fresh headless UI/screenshot requirement | Default shell configuration and explicit local CLI; no GUI/full-Chromium requirement inferred. |
| Existing compatible owned installation | Reuse permitted; repeated downloads unnecessary. |
| HTTP-200 HTML / 503 / first-browser failure | Bounded body/status evidence, separate browser diagnosis and official alternatives required. |
| CDN unavailable, registry accessible, no Docker | Version/platform/digest-verified selective extraction procedure; dependencies and layer semantics explicit. |
| Corrupt archive / active installation lock | Integrity and ownership diagnosis precedes retry/removal. |
| Full Chromium socket denied | Shell allowed only if accepted requirements permit; required full/headed coverage retained. |
| Firefox launch succeeds, page hangs | Page-stage logs and whole-process deadline; conditional scoped content-sandbox override. |
| Untrusted content or internal sandbox required | Override excluded; compatible authorized facility needed. |
| Smoke test passes | Actual application checks still required; no native focus/security/general-client claim. |
| Policy denial or repeat unchanged failure | No control bypass or indefinite retry; precise blocked capability and dependent scope retained. |

These are source walkthroughs, not fresh consumer-agent tests. The A-001 runtime evidence supplies the separate two-browser execution checks. Scoped validator passes for six allowed changed paths, 274 local link targets (existence only for historical targets), heading/fence separation, whitespace and byte-identical general-policy sections. Manual review confirms list spacing and continuation structure. Closed campaign records, plugin bytes, manifests, version and demo source are unchanged from the branch-off baseline.

A-002 review/finalization is complete; publish its containing checkpoint before integration. The final explicit merge must have refreshed parent 094 and the verified child tip as its two parents, rerun the scoped checks on the prospective result, restore open/suspended parent context, publish/read back and return through the parent's existing worktree. That merge's message and remote state supply actual integration/closure provenance without editing frozen child evidence afterward. No main merge or release is authorized by this campaign.
