#!/usr/bin/env python3
"""Capture release bytes and native Git facts; never perform release actions.

Provider data is supplied readback, not fetched or independently authenticated
by this helper. Behavioral, freshness and provider-class judgments remain with
the independent assessor. No expected release body or consumer answer is loaded.
"""
import argparse
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / 'scripts'))
import core


def public_bytes(path):
    """Read an explicit regular UTF-8 evidence file, rejecting links and secrets.

    Args:
        path: Assessor-selected notes, baseline or provider readback file.

    Returns:
        bytes: Exact screened contents; decoding never normalizes newlines.

    Raises:
        ValueError: The path is protected, linked or not a regular file.
        OSError: Reading fails.
        UnicodeDecodeError: Data is not UTF-8.
        core.Stop: Recognizable sensitive content must not be exported.
    """
    path = Path(path).absolute()
    if core.protected(str(path)) or not path.is_file() or any(p.is_symlink() for p in [path, *path.parents]):
        raise ValueError('Evidence must be an explicit regular public-safe file')
    raw = core.clean_bytes(path.read_bytes())
    raw.decode('utf-8')
    return raw


def capture(product_root, *, baseline=None, release_commit=None, tag=None,
            provider_readback=None):
    """Observe note preservation or complete native release-body agreement.

    Args:
        product_root: Existing Git worktree containing root RELEASE-NOTES.md.
        baseline: Optional independent pre-operation note snapshot.
        release_commit: Exact full lowercase release commit SHA.
        tag: Established tag name; resolved explicitly under refs/tags.
        provider_readback: Supplied normalized public-safe JSON readback with body,
            target_commit, evidence_class, state and release_id. The last three
            release arguments must be supplied together.

    Returns:
        tuple: Version 1 literal evidence and separate command/hash provenance.
        Neither result establishes independent consumer or provider acceptance.

    Raises:
        ValueError: Partial/invalid source or readback identity, or non-Git root.
        OSError, UnicodeDecodeError, core.Stop: Invalid/unsafe evidence input.
        subprocess.CalledProcessError: Required native Git observation fails.
    """
    root = Path(product_root).resolve()
    journal = []

    def git(*args):
        command = ['git', '-C', str(root), *args]
        result = subprocess.run(command, capture_output=True, check=True)
        journal.append({'arguments': list(args), 'returncode': result.returncode})
        return core.clean_bytes(result.stdout)

    git('rev-parse', '--show-toplevel')
    notes = public_bytes(root / 'RELEASE-NOTES.md')
    literals = {'notes_readable': True}
    provenance = {'schema_version': 1, 'agent_behavior_assessed': False,
                  'notes_sha256': hashlib.sha256(notes).hexdigest(), 'commands': journal}
    if baseline is not None:
        previous = public_bytes(baseline)
        literals['notes_unchanged'] = notes == previous
        provenance['baseline_sha256'] = hashlib.sha256(previous).hexdigest()
    release_arguments = [release_commit, tag, provider_readback]
    if any(value is not None for value in release_arguments):
        if any(value is None for value in release_arguments):
            raise ValueError('Commit, tag and provider readback are required together')
        if not re.fullmatch(r'[0-9a-f]{40}', str(release_commit)):
            raise ValueError('Release commit must be a full lowercase SHA')
        git('check-ref-format', 'refs/tags/' + tag)
        raw_commit = git('cat-file', 'commit', release_commit)
        message = raw_commit.split(b'\n\n', 1)[1]
        subject, separator, body = message.partition(b'\n\n')
        target = git('rev-parse', '--verify', 'refs/tags/' + tag + '^{commit}').decode().strip()
        raw_readback = public_bytes(provider_readback)
        readback = json.loads(raw_readback)
        fields = {'body', 'target_commit', 'evidence_class', 'state', 'release_id'}
        if (not isinstance(readback, dict) or set(readback) != fields
                or not isinstance(readback['body'], str)
                or not re.fullmatch(r'[0-9a-f]{40}', str(readback['target_commit']))
                or readback['evidence_class'] not in {'controlled', 'live-provider'}
                or readback['state'] not in {'draft', 'published'}
                or type(readback['release_id']) is not int or readback['release_id'] <= 0):
            raise ValueError('Invalid normalized provider readback')
        provider_body = readback['body'].encode('utf-8')
        literals.update(commit_body_matches_notes=bool(separator) and body == notes,
                        release_subject_matches=subject == ('Release ' + tag).encode(),
                        tag_matches_commit=target == release_commit,
                        provider_body_matches_notes=provider_body == notes,
                        provider_source_matches=readback['target_commit'] == release_commit,
                        provider_published=readback['state'] == 'published')
        literals['release_agreement'] = all(literals[key] for key in (
            'commit_body_matches_notes', 'release_subject_matches', 'tag_matches_commit',
            'provider_body_matches_notes', 'provider_source_matches', 'provider_published'))
        provenance.update(release_commit=release_commit, peeled_tag_commit=target,
                          commit_body_sha256=hashlib.sha256(body).hexdigest(),
                          provider_body_sha256=hashlib.sha256(provider_body).hexdigest(),
                          provider_readback_sha256=hashlib.sha256(raw_readback).hexdigest(),
                          provider_evidence_class=readback['evidence_class'],
                          provider_release_id=readback['release_id'],
                          provider_limit='Supplied readback; independent origin/class assessment required')
    core.no_secret(provenance)
    return {'schema_version': 1, 'literals': literals}, provenance


def main():
    """Write new literal/provenance files; occupied output paths stay unchanged."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--product-root', type=Path, required=True)
    parser.add_argument('--baseline', type=Path)
    parser.add_argument('--release-commit')
    parser.add_argument('--tag')
    parser.add_argument('--provider-readback', type=Path)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--provenance', type=Path, required=True)
    args = parser.parse_args()
    try:
        if args.output.resolve() == args.provenance.resolve() or any(
                p.exists() or p.is_symlink() for p in (args.output, args.provenance)):
            raise ValueError('Capture outputs must be distinct new paths')
        evidence, provenance = capture(args.product_root, baseline=args.baseline,
                                      release_commit=args.release_commit, tag=args.tag,
                                      provider_readback=args.provider_readback)
        core.write_new(args.provenance, provenance)
        core.write_new(args.output, evidence)
        return 0
    except (ValueError, OSError, core.Stop, subprocess.CalledProcessError):
        print(json.dumps({'error': 'Release capture failed; prior evidence retained'}))
        return 2


if __name__ == '__main__':
    raise SystemExit(main())
