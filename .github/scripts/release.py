"""Exact-candidate package publisher; dispatch data never becomes shell code."""
import hashlib
import json
import re

FIELDS = {'source', 'tag', 'notes_source', 'notes', 'notes_sha256', 'publish',
          'prerelease', 'make_latest', 'request_id'}


def validate_handoff(data):
    """Validate source-associated curated notes and explicit publication policy."""
    if not isinstance(data, dict) or set(data) != FIELDS:
        raise ValueError('Handoff fields do not match the declared contract')
    if len(json.dumps(data, ensure_ascii=False).encode('utf-8')) > 60000:
        raise ValueError('Handoff exceeds the supported transfer size')
    for key in ('source', 'notes_source'):
        if not isinstance(data[key], str) or not re.fullmatch(r'[0-9a-f]{40}', data[key]):
            raise ValueError('Source must be a full lowercase commit SHA')
    if data['notes_source'] != data['source']:
        raise ValueError('Curated notes belong to a different source')
    for key in ('publish', 'prerelease', 'make_latest'):
        if type(data[key]) is not bool:
            raise ValueError('Publication policies must be Boolean')
    if data['prerelease'] and data['make_latest']:
        raise ValueError('A prerelease cannot be selected as latest')
    if not isinstance(data['tag'], str) or not re.fullmatch(r'v[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?', data['tag']):
        raise ValueError('Tag must be a version tag')
    if not isinstance(data['request_id'], str) or not re.fullmatch(r'[A-Za-z0-9_-]{1,80}', data['request_id']):
        raise ValueError('Invalid request correlation ID')
    notes = data['notes']
    if not isinstance(notes, str) or not notes.strip() or notes.lstrip().startswith('---') or '\x00' in notes:
        raise ValueError('Curated Markdown body is missing or contains control metadata')
    if hashlib.sha256(notes.encode('utf-8')).hexdigest() != data['notes_sha256']:
        raise ValueError('Curated notes digest differs')
    return data
