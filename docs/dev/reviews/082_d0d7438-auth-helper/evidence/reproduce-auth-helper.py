"""Linux-only characterization of campaign 082's unchanged authentication helper.

Run from any directory with Python 3, Node 22+, native Git/git-http-backend and
OpenSSL available. The repository root is derived from this evidence location.
The probe creates temporary client/bare repositories and a localhost HTTPS Git
server, uses one synthetic credential, captures credential stdout privately and
prints only classified outcomes/presence indicators. It performs no external
provider request or source/configuration mutation in the reviewed repository.

This characterizes the reported defects at the reviewed baseline: its assertions
expect rejection/lost diagnostics and will need revision after product repair.
Temporary fixtures/server/key material are owned by the probe and cleaned up.
Redirect stdout to retain a fresh observation; the recorded observation belongs
to the exact source/environment identified in that JSON, not a future checkout.
"""
from pathlib import Path
import base64, http.server, json, os, platform, shlex, shutil, ssl, subprocess, sys, tempfile, threading
from urllib.parse import urlsplit
if platform.system() != 'Linux':
 raise SystemExit('This recorded reproduction requires Linux; native Windows evidence is separate.')
ROOT=Path(__file__).resolve().parents[5]
SCRIPT=ROOT/'.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs'
MODULE=ROOT/'.agents/plugins/sdd-manager/skills/sdd-manage/scripts/protected-token.mjs'
NODE=shutil.which('node')
TOKEN='sdd082-synthetic-only-not-a-real-credential'
env={k:v for k,v in os.environ.items() if not k.upper().startswith('GIT_') and k.upper() not in ('GCM_INTERACTIVE','SSH_ASKPASS')}
env.update(GIT_CONFIG_NOSYSTEM='1',GIT_CONFIG_GLOBAL=os.devnull,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='never',GIT_ASKPASS='',SSH_ASKPASS='')
def run(args, **kw):
 return subprocess.run([str(x) for x in args],capture_output=True,timeout=kw.pop('timeout',30),env=kw.pop('env',env),**kw)
def checked(args, **kw):
 r=run(args,**kw)
 if r.returncode: raise RuntimeError('Fixture operation failed: '+str(args[0])+' status '+str(r.returncode))
 return r.stdout.decode().strip()
observation={'source':checked(['git','-C',ROOT,'rev-parse','HEAD']),'environment':{'os':platform.system(),'node':checked([NODE,'--version']),'git':checked(['git','--version'])}}
with tempfile.TemporaryDirectory(prefix='sdd082-auth-review-') as temporary:
 tmp=Path(temporary);repo=tmp/'client';repo.mkdir()
 def git(*args):return checked(['git','-C',repo,*args])
 git('init','-q');git('config','user.name','Fixture');git('config','user.email','fixture@example.invalid')
 (repo/'.gitignore').write_text('*.tkn\n');(repo/'gh.tkn').write_text(TOKEN+'\n');(repo/'gh.tkn').chmod(0o600)
 git('add','.gitignore');git('commit','-qm','synthetic fixture');ref=git('symbolic-ref','HEAD');oid=git('rev-parse','HEAD')
 url='https://example.invalid/owner/repo.git';git('remote','add','origin',url)
 protocol=b'protocol=https\nhost=example.invalid\npath=owner/repo.git\n\n'
 observation['direct_helper']=[]
 variants=[('clean',{}),('GIT_DIR',{'GIT_DIR':'.git'}),('GIT_WORK_TREE',{'GIT_WORK_TREE':str(repo)}),('GIT_PREFIX',{'GIT_PREFIX':'subdir/'}),('GIT_CONFIG_PARAMETERS',{'GIT_CONFIG_PARAMETERS':"'core.abbrev=12'"})]
 for name,extra in variants:
  r=run([NODE,SCRIPT,'--credential-helper',repo,'gh.tkn',url,'get'],cwd=repo,input=protocol,env={**env,**extra})
  row={'case':name,'exit':r.returncode,'credential_returned':('password='+TOKEN).encode() in r.stdout,'stdout_empty':not r.stdout,'stderr_empty':not r.stderr}
  observation['direct_helper'].append(row)
 assert [(x['exit'],x['credential_returned']) for x in observation['direct_helper']]==[(0,True),(1,False),(1,False),(0,True),(0,True)]
 code="import { childEnv } from "+json.dumps(MODULE.as_uri())+";try{childEnv({GIT_DIR:'.git'});}catch(e){console.log(JSON.stringify({code:e.code,stage:e.stage}));}"
 observation['direct_guard']=json.loads(checked([NODE,'--input-type=module','-e',code]))
 # Controlled process results retain real Git/file preflight but replace network effects.
 code="""import * as auth from AUTH;import {spawnSync} from 'node:child_process';
const options=OPTS;const results=[];
for(const [name,push] of [['exit128',{status:128,stdout:'',stderr:'synthetic transport failure'}],['timeout',{status:null,error:{code:'ETIMEDOUT'},stdout:'',stderr:''}],['signal',{status:null,signal:'SIGKILL',stdout:'',stderr:''}]]){
let pushes=0;const execute=(exe,args,settings)=>{
if(args.includes('push')){pushes++;return push;}
if(args.includes('ls-remote')&&args.includes('--refs'))return {status:0,stdout:'',stderr:''};
return spawnSync(exe,args,{...settings,encoding:'utf8'});};
const result=auth.recover(options,execute);results.push({case:name,pushes,result});}
console.log(JSON.stringify(results));""".replace('AUTH',json.dumps(SCRIPT.as_uri())).replace('OPTS',json.dumps(dict(operation='push',repo=str(repo),remote='origin',url=url,ref=ref,expect=oid,timeoutMs=5000)))
 observation['controlled_push_outcomes']=json.loads(checked([NODE,'--input-type=module','-e',code]))
 assert all(x['pushes']==1 and x['result']['code']=='remote_absent' and x['result']['remote_state']=='absent' for x in observation['controlled_push_outcomes'])
 # A public read endpoint, authenticated write endpoint, and real git-http-backend.
 project=tmp/'server';(project/'owner').mkdir(parents=True);bare=project/'owner/repo.git'
 checked(['git','init','--bare','-q',bare]);checked(['git','-C',bare,'config','http.receivepack','true'])
 key=tmp/'key.pem';cert=tmp/'cert.pem'
 checked(['openssl','req','-x509','-newkey','rsa:2048','-nodes','-keyout',key,'-out',cert,'-days','1','-subj','/CN=localhost','-addext','subjectAltName=DNS:localhost'])
 backend=Path(checked(['git','--exec-path']))/'git-http-backend'
 expected_auth='Basic '+base64.b64encode(('x-access-token:'+TOKEN).encode()).decode()
 transport_events=[]
 class Handler(http.server.BaseHTTPRequestHandler):
  def log_message(self,*args):pass
  def do_GET(self):self.handle_git()
  def do_POST(self):self.handle_git()
  def handle_git(self):
   parts=urlsplit(self.path);write='git-receive-pack' in parts.query or parts.path.endswith('/git-receive-pack')
   authorized=self.headers.get('Authorization')==expected_auth
   transport_events.append({'write':write,'authorized':authorized})
   if write and not authorized:
    self.send_response(401);self.send_header('WWW-Authenticate','Basic realm="synthetic fixture"');self.send_header('Content-Length','0');self.end_headers();return
   length=int(self.headers.get('Content-Length','0'));body=self.rfile.read(length)
   child={**env,'GIT_PROJECT_ROOT':str(project),'GIT_HTTP_EXPORT_ALL':'1','PATH_INFO':parts.path,'QUERY_STRING':parts.query,'REQUEST_METHOD':self.command,'CONTENT_TYPE':self.headers.get('Content-Type',''),'CONTENT_LENGTH':str(length),'REMOTE_USER':'fixture' if authorized else '','REMOTE_ADDR':'127.0.0.1','SERVER_PROTOCOL':'HTTP/1.1'}
   if self.headers.get('Git-Protocol'):child['HTTP_GIT_PROTOCOL']=self.headers['Git-Protocol']
   result=run([backend],input=body,env=child,timeout=10)
   if result.returncode:raise RuntimeError('Synthetic Git backend failure')
   headers,content=result.stdout.split(b'\r\n\r\n',1)
   pairs=[line.decode('latin-1').split(':',1) for line in headers.split(b'\r\n')]
   status=next((int(value.strip().split()[0]) for name,value in pairs if name.lower()=='status'),200)
   self.send_response(status)
   for name,value in pairs:
    if name.lower() not in ('status','content-length'):self.send_header(name,value.strip())
   self.send_header('Content-Length',str(len(content)));self.end_headers();self.wfile.write(content)
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),Handler)
 context=ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER);context.load_cert_chain(cert,key);server.socket=context.wrap_socket(server.socket,server_side=True)
 thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
 try:
  url='https://localhost:'+str(server.server_port)+'/owner/repo.git';git('remote','set-url','origin',url)
  network_env={**env,'GIT_SSL_CAINFO':str(cert),'NO_PROXY':'localhost,127.0.0.1','no_proxy':'localhost,127.0.0.1'}
  r=run([NODE,SCRIPT,'push','--repo',repo,'--remote','origin','--url',url,'--ref',ref,'--expect',oid,'--timeout-ms','10000'],cwd=repo,env=network_env,timeout=45)
  observation['native_recover']={'exit':r.returncode,'result':json.loads(r.stdout),'credential_reached_write_endpoint':any(x['write'] and x['authorized'] for x in transport_events)}
  assert r.returncode==2 and observation['native_recover']['result']['code']=='remote_absent' and not observation['native_recover']['credential_reached_write_endpoint']
  wrapper=tmp/'helper-wrapper.py';metadata=tmp/'helper-metadata.jsonl'
  wrapper.write_text('''import json,os,subprocess,sys
mode,metadata,*command=sys.argv[1:]
original=os.environ.copy();env=original.copy()
if mode=='clear_git_dir':env.pop('GIT_DIR',None)
result=subprocess.run(command,input=sys.stdin.buffer.read(65537),capture_output=True,env=env,timeout=10)
with open(metadata,'a') as stream:stream.write(json.dumps({'mode':mode,'action':command[-1],'git_environment_names':sorted(k for k in original if k.startswith('GIT_')),'exit':result.returncode,'credential_returned':b'password=' in result.stdout,'stderr_empty':not result.stderr})+'\\n')
sys.stdout.buffer.write(result.stdout);sys.stderr.buffer.write(result.stderr);sys.exit(result.returncode)
''')
  config_before=(repo/'.git/config').read_bytes();observation['native_wrapper_pushes']=[]
  for mode in ['preserve','clear_git_dir']:
   helper='!'+shlex.join([sys.executable,str(wrapper),mode,str(metadata),NODE,str(SCRIPT),'--credential-helper',str(repo),'gh.tkn',url])
   r=run(['git','-C',repo,'-c','credential.helper=','-c','credential.helper='+helper,'-c','credential.useHttpPath=true','-c','core.askPass=','push','--porcelain','origin',oid+':'+ref],cwd=repo,env=network_env,timeout=20)
   observation['native_wrapper_pushes'].append({'mode':mode,'exit':r.returncode})
  assert [x['exit'] for x in observation['native_wrapper_pushes']]==[128,0]
  rows=[json.loads(x) for x in metadata.read_text().splitlines()];observation['native_helper_calls']=rows
  assert any(x['mode']=='preserve' and x['action']=='get' and 'GIT_DIR' in x['git_environment_names'] and x['exit']==1 for x in rows)
  assert any(x['mode']=='clear_git_dir' and x['action']=='get' and x['credential_returned'] and x['exit']==0 for x in rows)
  readback=checked(['git','-C',repo,'ls-remote','--refs',url,ref],cwd=repo,env=network_env)
  assert readback==oid+'\t'+ref
  observation['native_readback_matches']=True;observation['persistent_helper_config_unchanged']=(repo/'.git/config').read_bytes()==config_before
  assert observation['persistent_helper_config_unchanged']
 finally:server.shutdown();server.server_close();thread.join(timeout=5)
observation['external_provider_operations']=False
print(json.dumps(observation,indent=2))
