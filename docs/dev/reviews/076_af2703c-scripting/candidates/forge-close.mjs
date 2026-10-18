import fs from 'node:fs';

const OWNER = 'pchemguy';
const REPO = 'SDD-Manager-Demo-Tetris-Hybrid-V1';
const BASE_URL = `https://api.github.com/repos/${OWNER}/${REPO}`;

const token = fs.readFileSync('gh.tkn', 'utf8').trim();
if (!token) throw new Error('Empty token in gh.tkn');

async function ghFetch(path, options = {}) {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    throw new Error(`GitHub API ${options.method || 'GET'} ${path} failed (${res.status}): ${typeof data === 'string' ? data : JSON.stringify(data)}`);
  }
  return data;
}

async function main() {
  const [, , mode, id, payloadFile] = process.argv;
  if (mode === 'task') {
    const payload = JSON.parse(fs.readFileSync(payloadFile, 'utf8'));
    const issues = (await ghFetch('/issues?state=all&per_page=100')).filter((i) => !i.pull_request);
    const marker = `<!-- sdd-forge:task-id=${id} -->`;
    const matches = issues.filter((i) => (i.body && i.body.includes(marker)) || i.title.startsWith(`[${id}]`));
    if (matches.length !== 1) {
      throw new Error(`Expected exactly 1 issue for ${id}, found ${matches.length}`);
    }
    const issue = matches[0];
    await ghFetch(`/issues/${issue.number}/comments`, {
      method: 'POST',
      body: JSON.stringify({ body: payload.comment }),
    });
    if (issue.state !== 'closed') {
      await ghFetch(`/issues/${issue.number}`, {
        method: 'PATCH',
        body: JSON.stringify({ state: 'closed', state_reason: 'completed' }),
      });
    }
    const readback = await ghFetch(`/issues/${issue.number}`);
    if (readback.state !== 'closed') {
      throw new Error(`Readback failed: issue #${issue.number} is ${readback.state}`);
    }
    console.log(`Closed and verified issue #${readback.number} (${id}): ${readback.html_url}`);
  } else if (mode === 'milestone') {
    const milestones = await ghFetch('/milestones?state=all&per_page=100');
    const matches = milestones.filter((m) => m.title.startsWith(`sdd-${id}-`));
    if (matches.length !== 1) {
      throw new Error(`Expected exactly 1 milestone for ${id}, found ${matches.length}`);
    }
    const ms = matches[0];
    const openIssues = await ghFetch(`/issues?milestone=${ms.number}&state=open&per_page=100`);
    if (openIssues.length > 0) {
      throw new Error(`Cannot close milestone #${ms.number}: ${openIssues.length} open issues remain`);
    }
    if (ms.state !== 'closed') {
      await ghFetch(`/milestones/${ms.number}`, {
        method: 'PATCH',
        body: JSON.stringify({ state: 'closed' }),
      });
    }
    const readback = await ghFetch(`/milestones/${ms.number}`);
    if (readback.state !== 'closed' || readback.open_issues !== 0) {
      throw new Error(`Readback failed: milestone #${ms.number} state=${readback.state} open_issues=${readback.open_issues}`);
    }
    console.log(`Closed and verified milestone #${readback.number} (${readback.title})`);
  } else {
    throw new Error(`Unknown mode: ${mode}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
