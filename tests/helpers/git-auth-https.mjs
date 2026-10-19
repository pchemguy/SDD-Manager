/** Native HTTPS Git fixture, using a public test-only localhost key/certificate.
 * No external provider or credential is contacted. The caller supplies a
 * synthetic token and owns its client repository/protection. Server repositories,
 * processes and connections are cleaned by the owning node:test context.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import https from 'node:https';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

/** Capture a native process with finite time/output bounds; never log its data. */
export function capture(executable, args, { timeout = 30000, ...options } = {}) {
  return new Promise(resolve => {
    const child = spawn(executable, args, { windowsHide: true, ...options });
    let stdout = '', stderr = '', error;
    const timer = setTimeout(() => { error = { code: 'ETIMEDOUT' }; child.kill('SIGKILL'); }, timeout);
    const collect = key => chunk => {
      if (key === 'stdout') stdout += chunk; else stderr += chunk;
      if (Buffer.byteLength(stdout) + Buffer.byteLength(stderr) > 1024 * 1024) {
        error = { code: 'ENOBUFS' }; child.kill('SIGKILL');
      }
    };
    child.stdout.on('data', collect('stdout')); child.stderr.on('data', collect('stderr'));
    child.on('error', value => { error = { code: value.code }; });
    child.on('close', (status, signal) => { clearTimeout(timer); resolve({ status, signal, stdout, stderr, error }); });
    child.stdin.end();
  });
}

/** Public read discovery, authenticated write discovery/RPC, real Git backend. */
export async function gitHttpsFixture(t, token, { onChallenge = () => {} } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-https-'));
  const config = path.join(root, 'empty-config'); fs.writeFileSync(config, '');
  const cert = fileURLToPath(new URL('../fixtures/git-auth/localhost-cert.pem', import.meta.url));
  const key = fileURLToPath(new URL('../fixtures/git-auth/localhost-key.pem', import.meta.url));
  const env = { ...process.env, GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: config,
    GIT_TERMINAL_PROMPT: '0', GIT_ASKPASS: '', SSH_ASKPASS: '', GIT_SSL_CAINFO: cert,
    NO_PROXY: 'localhost,127.0.0.1', no_proxy: 'localhost,127.0.0.1' };
  const git = args => {
    const result = spawnSync('git', args, { env, encoding: 'utf8', timeout: 10000 });
    if (result.status !== 0) throw new Error('Git fixture setup failed');
    return result.stdout.trim();
  };
  const bare = path.join(root, 'owner', 'repo.git'); fs.mkdirSync(path.dirname(bare));
  git(['init', '--bare', '-q', bare]); git(['-C', bare, 'config', 'http.receivepack', 'true']);
  const backend = path.join(git(['--exec-path']), 'git-http-backend' + (process.platform === 'win32' ? '.exe' : ''));
  const expected = 'Basic ' + Buffer.from('x-access-token:' + token).toString('base64');
  const events = [], children = new Set();
  const server = https.createServer({ cert: fs.readFileSync(cert), key: fs.readFileSync(key) }, (request, response) => {
    const url = new URL(request.url, 'https://localhost');
    const write = url.searchParams.get('service') === 'git-receive-pack' || url.pathname.endsWith('/git-receive-pack');
    const authorized = request.headers.authorization === expected;
    events.push({ write, authorized });
    if (write && !authorized) {
      onChallenge(); response.writeHead(401, { 'WWW-Authenticate': 'Basic realm="synthetic"', 'Content-Length': '0' }); response.end(); return;
    }
    const child = spawn(backend, [], { env: { ...env, GIT_PROJECT_ROOT: root, GIT_HTTP_EXPORT_ALL: '1',
      REQUEST_METHOD: request.method, PATH_INFO: url.pathname, QUERY_STRING: url.search.slice(1),
      CONTENT_TYPE: request.headers['content-type'] || '', CONTENT_LENGTH: request.headers['content-length'] || '0',
      REMOTE_USER: authorized ? 'fixture' : '', REMOTE_ADDR: '127.0.0.1', SERVER_PROTOCOL: 'HTTP/1.1',
      HTTP_GIT_PROTOCOL: request.headers['git-protocol'] || '' }, windowsHide: true });
    children.add(child); const chunks = []; let size = 0, failed = false;
    const timer = setTimeout(() => { failed = true; child.kill('SIGKILL'); }, 15000);
    request.pipe(child.stdin); child.stdin.on('error', () => {}); child.stderr.resume();
    child.stdout.on('data', chunk => { size += chunk.length; if (size > 1024 * 1024) { failed = true; child.kill('SIGKILL'); } else chunks.push(chunk); });
    child.on('error', () => { failed = true; });
    child.on('close', status => {
      clearTimeout(timer); children.delete(child);
      const data = Buffer.concat(chunks), boundary = data.indexOf('\r\n\r\n');
      if (failed || status !== 0 || boundary < 0) { response.writeHead(500); response.end(); return; }
      const headers = data.subarray(0, boundary).toString('latin1').split('\r\n').map(line => {
        const colon = line.indexOf(':'); return [line.slice(0, colon), line.slice(colon + 1).trim()];
      });
      const statusLine = headers.find(([name]) => name.toLowerCase() === 'status');
      response.statusCode = statusLine ? Number.parseInt(statusLine[1], 10) : 200;
      for (const [name, value] of headers) if (!['status', 'content-length'].includes(name.toLowerCase())) response.setHeader(name, value);
      const body = data.subarray(boundary + 4); response.setHeader('Content-Length', body.length); response.end(body);
    });
  });
  t.after(async () => {
    for (const child of children) child.kill('SIGKILL');
    server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
    fs.rmSync(root, { recursive: true, force: true });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return { url: `https://localhost:${server.address().port}/owner/repo.git`, env, events };
}
