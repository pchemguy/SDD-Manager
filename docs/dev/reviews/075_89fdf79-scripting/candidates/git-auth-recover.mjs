import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

const token = fs.readFileSync('gh.tkn', 'utf8').trim();
if (!token) {
  throw new Error('gh.tkn is empty');
}

function runGit(args, options = {}) {
  const res = spawnSync('git', args, {
    encoding: 'utf8',
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: '0',
      GCM_INTERACTIVE: 'never',
    },
    ...options,
  });
  return res;
}

// 1. Override system `credential.helper=helper-selector` in local .git/config with `wincred`
runGit(['config', '--local', '--replace-all', 'credential.helper', '']);
runGit(['config', '--local', '--add', 'credential.helper', 'wincred']);

// 2. Store credential for github.com in wincred via protected stdin (never in args/logs)
const credInput = [
  'protocol=https',
  'host=github.com',
  'username=x-access-token',
  `password=${token}`,
  '',
  '',
].join('\n');

const storeRes = runGit(['credential-wincred', 'store'], { input: credInput });
if (storeRes.status !== 0) {
  console.error('credential-wincred store failed:', storeRes.stderr);
  process.exit(1);
}
console.log('Stored GitHub HTTPS credential in wincred via protected stdin.');

// 3. Push with GIT_TERMINAL_PROMPT=0
const pushArgs = process.argv.slice(2);
if (pushArgs.length > 0) {
  const pushRes = runGit(pushArgs);
  if (pushRes.stdout) process.stdout.write(pushRes.stdout);
  if (pushRes.stderr) process.stderr.write(pushRes.stderr);
  if (pushRes.status !== 0) {
    process.exit(pushRes.status ?? 1);
  }
}
