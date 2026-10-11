# Pinned plugin manifest schema

`plugin.schema.json` is the unmodified Agent Plugins 1.0.0 schema from [the canonical endpoint](https://agent-plugins.org/schemas/1.0.0/plugin.schema.json), retrieved and compared with the published endpoint on 2026-10-11. Attribution: Agent Plugins project. SHA-256: `0a4aad95ce337878ad38802ebf0daa3fde76abe3f65400c86bcbb1ec0b3ab883`.

The publisher validates exact committed candidate bytes before package output or provider access. The validator uses this local schema with remote resolution disabled. Extension objects are opaque; this does not validate OpenAI presentation semantics or client loading. Updating schema bytes requires deliberate provenance/hash and contract-test updates.

From repository root, install development dependencies before publisher tests or local release builds:

```text
python -m pip install -r .github/requirements.txt
python -m unittest discover -s .github/tests -v
```

Both release CI jobs install the same dependency. Schema and validator tooling are outside the installed plugin package. Python 3.11+ is supported; dependency installation can use a prepared local package cache for offline development.
