# Package, workflow and release checks

Load for selected release/package acceptance. Use the requested boundary and the accepted [package contract](../../sdd-forge/references/github-packaging.md), not a guessed universal inventory. Verification assesses actual outputs and returns evidence; the coordinated work owner repairs files or performs publication. Local checks do not themselves authorize a live release.

| Claim | Evidence to obtain |
| --- | --- |
| Package layout/content | Inspect actual member names, duplicates, path/link safety, corruption and declared size limits; compare required members, intentional exclusions, entry points, applicable notices, versions and modes. Explain generated members through the build procedure. |
| Build/source identity | Resolve the exact source SHA/tag, runtime/dependencies and version source; run the declared build from that state into an owned output directory. Compare the candidate with supplied reference contents where relevant. |
| Usable package | Exercise installation/import/startup or another declared consumer check in a suitable controlled environment, without executing untrusted supplied archive scripts. Report unsupported platform coverage. |
| Reproducibility | Repeat under equivalent declared inputs and compare bytes/hashes when this claim is required. Matching inventories alone establish layout, not reproducibility. |
| Stable variants/checksums | Inspect the complete expected asset set, unique version-free names and exact-byte SHA-256 files. Include each promised platform variant. |
| Workflow validity | Check YAML plus available Actions validation, trigger/input/permission semantics, checkout identity, build-only effects, matrix collection, one publisher, concurrency and recovery. Parsing is not CI execution. |
| CI success | Identify actual run/ref/source, relevant job conclusions and expected built artifacts. Accepted dispatch, queued state or a success in an unrelated job is insufficient. |
| Hosted release | Read release/tag identity and source, state, complete asset names/sizes/digests, actual latest pointer and URLs. Follow the [release readback](../../sdd-forge/references/github-releases.md#read-back-and-report) procedure. |
| Download integrity | Download exact assets through supported access; compare bytes/hashes with the built files and checksum set. Report metadata-only coverage separately. |

Select positive and relevant failure/recovery checks proportionate to the changes: missing/extra members, unsafe ZIP entries, variant name collisions, absent latest assets, wrong source/version, missing permission, failed matrix build, partial draft upload, uncertain publication and published/immutable conflicts. Use disposable local fixtures or provider mocks where appropriate; mock lifecycle success is not live GitHub acceptance.

Before a hosted check, identify its authorized repository, operation and effects. Do not create a release, dispatch publication or modify immutable/settings policy merely to test instructions. If live CI, installation or download checks are unavailable, return their limits rather than fabricate coverage or declare them passed. Record tested state, actual commands/results and remaining work under [execution and evidence](execution-and-evidence.md).
