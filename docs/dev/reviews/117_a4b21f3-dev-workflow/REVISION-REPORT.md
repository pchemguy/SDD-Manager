# Development environment guidance revision report

Campaign **117_a4b21f3**, baseline/branch-off `a4b21f36a3e7c675964ed5b572253e5f6f9ea0c4`. Branch `revision/117_a4b21f3-dev-workflow`; creation parent/eventual return **main** on origin, pchemguy/SDD-Manager. [Revision plan](REVISION-PLAN.md). Original opening `4583df6988cf875157dab4f09774651cf4afa17e`; planning checkpoint `a6dc8ee091e203ddd09bd939ccb82522f2479317`, both published/readback verified. Human **Execute** authorizes this revision; closure is not selected.

## Delivered A-002/A-003

The existing implementation environment-recovery owner now routes selected Playwright setup/recovery and observed Vite worker-loading failures to two focused packaged modules. Its entry row includes capability setup; verification consults the same modules for checks without acquiring repair authority. PLUGIN.md and the coordinator entry remain unchanged. Technology examples do not select browser/platform coverage.

BROWSER_DEV_POLICY.md remains standalone and outside the package, retaining browser priorities/defaults, isolation, trust/security and accepted coverage. Reusable Playwright operations move into references/environment/playwright.md. The attachment becomes references/environment/vite-worker-loading.md with reported incident provenance, stage diagnosis, an illustrative version-sensitive development workaround and regression proof. Neither recipe depends on a root-policy filename or a campaign record.

| Original content | Current owner and preservation |
| --- | --- |
| Browser selection, environment isolation and general setup | External policy; original sections preserved except the introductory scope sentence. |
| Browser evidence table and general recovery limits | External policy; original section preserved exactly. |
| Pinned runner, managed revisions, dedicated location and headless/full distinction | Policy retains its choices/constraints; Playwright module provides commands/configuration. Examples use the project's selected targets. |
| Download diagnosis, official-image resolution/extraction and Firefox content-process recovery | Packaged Playwright module; all three detailed section bodies preserved exactly, with heading levels changed for their new home. |
| Repeated session/rendering/teardown and finite operation/process budgets | Policy retains the requirement; module supplies the execution sequence and active-workflow evidence return. |
| Attached Vite case, entry/import/WASM/protocol separation, development-only route and optimizer distinction | Packaged Vite module; incident versions remain reported provenance, paths/factory are illustrative and current documented options precede an internal route. |
| Native/model separation, failing baseline/fix/removal, real worker/data and production controls | Vite module; platform/browser scope follows accepted claims, timings derive from the actual application budget. |

## Verification before source publication

Tested candidate: planning checkpoint `a6dc8ee091e203ddd09bd939ccb82522f2479317` plus the six source files delivered above, prior to their action commit. Linux, Node 24.22.1, Python 3.12.14; existing isolated verification environment with declared jsonschema 4.26.0. No global toolchain changes.

- **139 support tests pass:** python -B -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v.
- **50 publisher tests pass:** python -B -m unittest discover -s .github/tests -v.
- **Content and syntax checks pass:** preserved external policy sections and all three detailed recovery sections; selective implementation/verification routes; no packaged root-policy filename dependency; all three JavaScript-compatible fenced examples parse with node --check. Existing implementation/verification UI metadata still describes the same capabilities and is unchanged.
- **Fresh-context planning check:** one child received only skill locations, five raw contexts and read-only limits, without expected diagnoses or campaign records. Its plans excluded technology modules for pure CLI work; diagnosed Playwright HTML downloads without claiming runtime success; treated a Vite HTML entry as bootstrap failure; diagnosed a WASM-only 404 separately; and distinguished modeled regression sensitivity from unavailable native Windows evidence. This is observed instruction-use/planning evidence, not execution of the application or target-client discovery.

Current Markdown/link/style and frozen-record checks precede the action commit. A-004's exact committed-package inspection follows its push/readback. Runtime utility/Windows CI, browser provisioning and native Vite reproduction are not needed for this instruction-only revision and are not claimed. The attachment's application trials remain supplied evidence, not fresh results from this campaign.

## Boundary

Publish/read back the coherent A-002/A-003 source and evidence before package work. Complete A-004 and refresh HANDOFF with its outcome, publish/read back and pause on this campaign branch. No default-branch integration, campaign closure, version bump, release or new campaign is selected.
