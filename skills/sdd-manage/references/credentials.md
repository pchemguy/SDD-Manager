# Hosting credentials

Load this protocol only when accepting a hosting credential or coordinating a hosted operation that needs one. **sdd-manage** owns accepting, storing, retrieving, and supplying tokens; **sdd-forge** and its selected backend own provider-specific access checks. Ordinary local work needs no hosting token.

## Accept and store

- **Identity:** Associate the credential with its provider, account, repository scope, and intended operation when known. Do not infer account identity or permission from the token's presence.
- **Storage:** Store a user-provided token in an approved credential store outside the project, using its secure input facility. Prefer an available OS credential manager or established credential helper. Respect the user's established store; never invent a project-local token file.
- **Handling:** Keep tokens out of project files, ordinary handoffs, reports, command arguments, remote URLs, logs, shell history, and diagnostic output. Use a protected credential channel or process input supported by the selected tools; do not echo token values.
- **Unavailable store:** Report the storage blocker. Use a user-provided token transiently for its authorized operation when secure transfer is possible, but do not claim durable storage or silently choose another storage mechanism.

## Supply for an operation

1. Identify the provider, repository, and requested operation from the coordinated **sdd-forge** scope.
2. Retrieve a suitable credential from the approved store, or accept one explicitly provided for this operation. If none is available, ask the user for a suitable credential and explain the operation requiring it. Continue independent local work when possible.
3. Supply the token to **sdd-forge** through a protected credential mechanism, separate from the normal scope handoff. Report a tool capability blocker if secure transfer is unavailable.
4. Let the activated backend check access and interpret provider responses. Supplying a token does not authorize additional hosted operations.

A caller may provide a token directly to **sdd-forge**. That path does not imply the token has been stored by **sdd-manage**; coordinate storage when it is supplied to this coordinator for that purpose.

## Respond to an access escalation

- **Access403 context:** Receive the repository, endpoint, attempted operation, and access requirement or other provider-indicated cause from **sdd-forge**, without a credential in the report.
- **Resolution:** Check the approved store for a suitable credential. When none is available, escalate to the user. Explain a provider restriction requiring another remedy rather than assuming every 403 needs a replacement token.
- **Retry:** Supply a suitable credential when available; let the backend recheck access before retrying the affected operation. Stop on an unresolved restriction or repeated unchanged failure; do not retry indefinitely.
- **Report:** Return the attempted operation and unresolved access requirement, preserving successful independent results. Never expose the token or claim that replacement alone proved permission.

## Non-credential operational failures

Use the backend's classification for rate limits, service outages, offline states, invalid input, and uncertain writes. Do not escalate for a replacement token merely because a response is403 or an operation is unavailable. Return sanitized pending effects and retry timing; preserve successful local and hosted results. After uncertain mutations, backend reconciliation must establish actual state before retrying.
