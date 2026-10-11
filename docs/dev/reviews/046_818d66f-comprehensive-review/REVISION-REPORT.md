# Comprehensive review revision report

## Scope and state

Execution of the [revision plan](REVISION-PLAN.md) authorized on 2026-10-11. Working branch: `revision/046_818d66f-comprehensive-review`; target: `main`; product baseline: `f4741d709d5969772124a071d6d7ad60f8aeb697`. Original review source and rebase provenance remain in the [review report](REVIEW-REPORT.md). State: executing; no integration or closure claimed.

## V-001 — Portable manifest release guard

Added an unmodified pinned canonical schema with source/date/hash attribution, explicit `jsonschema==4.26.0` development dependency and offline validation with an empty reference registry. The publisher reads the exact candidate Git object, validates before output creation/provider construction and then applies the existing tag/version contract. Both CI jobs install the dependency; README and schema contributor guidance identify local prerequisites. Validation files remain outside the skill package; `com.openai` object values remain valid without a fabricated namespace minimum or interface semantics.

Meaningful missing/wrong schema, unknown root, invalid name/type/author/extension fixtures reject before package artifacts. A valid OpenAI namespace passes even with an invalid uncommitted working-tree manifest, proving committed-source selection. [Initial failing tests](evidence/v001-red.log) reproduced the absent guard. [Final publisher suite](evidence/v001-green.log): 29 passed, Linux/Python 3.12.14 with the declared validator available in a temporary dependency directory. `git diff --check` passed. CI wiring was inspected; hosted CI and Python 3.11 were not executed.

R-003: locally verified correction, pending coherent candidate/merged-state recheck. No provider access occurred. R-001/R-002 remain Open; R-004 component work pending, consumer/client execution deferred.

## V-002 — Implementation entry ordering

README prose and Mermaid now show prerequisite orientation, outstanding publication/readback, an explicit publication gate, then the bounded task audit and range selection/tracking. A publication failure and an invalid closing boundary each stop the affected path while preserving work. Native task publication still precedes continuation; the integration audit remains at the full eligible boundary.

Source trace checked the retained unpublished commit plus malformed closing-boundary scenario: publication/readback precedes audit rejection; no next task starts. Owner startup instructions and diagram agree. Diagram source and `git diff --check` passed; no Mermaid renderer was available, so fresh rendered readability is unverified. R-002: source recheck passed, pending coherent candidate assessment. No workflow behavior or closed record changed.

## V-003 — Canonical feature design filenames

Corrected capability-map entries to `FEATURE_ARCHITECTURE.md` and `FEATURE_DECOMPOSITION.md`. Compared the map with README and design-owner architecture/decomposition guidance; all use the established underscore names. `git diff --check` passed. No file rename, workflow change or historical edit occurred. R-001: source recheck passed, pending coherent candidate assessment.

## V-004 — Release acceptance and separate client scenarios

Added A-028–A-033 with six isolated scenario groups, unique consumer requests, independent assessor contracts/guides, predecessor/variant declarations and detailed release controls. Coverage includes highlights-only versus complete preparation, no-op/human curation, matching-version stale coverage/wrong version/missing provenance, genuine failed save/fresh continuation, native release commit/tag/provider body agreement and reconciled retries. Controlled/live-provider and optional installed-client evidence remain distinct. A-031 failure does not gate A-032 positive publication. A-027 keeps its identity and runs last; optional A-033 does not gate required work.

Updated catalog/harness/schema case ranges, coordinator/recovery/diagnostic/variant maps, README and developer capability map. Historical 27-case runtime results remain historical; current 33 cases inherit no passes. The DSL-consumability fixture now includes synthetic notes solely to exercise new file checks, not consumer behavior.

Catalog CLI static validation passed for 33 cases. [Catalog/handoff/capture regressions](evidence/v004-catalog-tests.log): 24 passed. Initial generic DSL checks exposed missing synthetic note fixture setup; the fixture was corrected without weakening contracts. `git diff --check` passed. No consumer, installed-client or provider scenario executed. R-004: component scenarios implemented; evidence capture/support extension and coherent checks pending.
