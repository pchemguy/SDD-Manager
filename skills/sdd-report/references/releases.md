# Package and release reporting

Use for package/workflow preparation results, release notes or actual release completion. Use current accepted package/release inputs and verification evidence; TASKS is needed only when task work supplies the scope. Drafting notes or a status report does not create a release.

## Preparation result

State the intended distributable and prepared behavior first. Report the selected source/version, accepted layout and variants, stable filenames/checksum convention, workflow/build files and actual performed checks. Identify unresolved package/build decisions and the exact stopping boundary. Distinguish a workflow file from an executed CI run, and a candidate ZIP from an uploaded release asset.

## Release notes

Explain delivered features/fixes and consequences for users. Include material compatibility changes, supported variants and necessary installation/update guidance. Use the requested release/tag and verified changes; generated notes can seed editing but do not prove coverage. Preserve human-authored notes. Do not copy internal campaign reports, transcripts, credential diagnostics or unsupported test claims into public release notes. Keep notes proportionate to the release.

## Release outcome

| Fact | Report from actual evidence |
| --- | --- |
| Identity | Repository, version/tag, exact source SHA and release ID/URL. |
| State | Draft, prerelease or published stable; actual latest selection, not assumed ordering. |
| Execution | Direct publication or workflow ID/ref/run URL and observed conclusion. |
| Assets | Expected and observed filenames, sizes/hashes/checksum URLs, tag-specific links and applicable stable latest links. |
| Verification | Actual build/package checks, CI conclusions, metadata readback and downloaded-byte verification with their separate limits. |
| Recovery | Successful effects, pending/unknown writes, conflicts and next supported action. |

For several assets, use a compact table of variant, filename, hash/checksum and download link. Do not describe private links as anonymously accessible, an absent platform asset as downloadable, or a draft/prerelease as latest stable. Declare completion only for the boundary supported by [release readback](../../sdd-forge/references/github-releases.md#read-back-and-report); a local archive or accepted dispatch remains preparation/pending execution.
