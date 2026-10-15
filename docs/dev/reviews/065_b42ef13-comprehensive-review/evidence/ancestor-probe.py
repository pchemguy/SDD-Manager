"""Disposable TextStats source-root fallback probe; no provider operations."""
from pathlib import Path
import subprocess,sys,tempfile,json
sys.path.insert(0,str(Path.cwd()/'acceptance/textstats/scripts'))
import core
for ancestor in ('.agents','.agents/plugins'):
 with tempfile.TemporaryDirectory() as td:
  root=Path(td)/'source';root.mkdir();foreign=Path(td)/'foreign';foreign.mkdir()
  def git(*args):return subprocess.check_output(['git','-C',str(root),*args],stderr=subprocess.DEVNULL,text=True).strip()
  git('init','-q');git('config','user.name','Fixture');git('config','user.email','fixture@example.invalid')
  (root/'plugin.json').write_text('{"name":"root-decoy"}')
  path=root/ancestor;path.parent.mkdir(parents=True,exist_ok=True);path.symlink_to(foreign,target_is_directory=True)
  git('add','.');git('commit','-qm','malformed nested ancestor')
  for mode in ('committed','dirty'):
   try:
    info,files=core.package(root,dict(plugin_revision='HEAD',source_mode=mode))
    print(json.dumps(dict(ancestor=ancestor,mode=mode,outcome='accepted-root-fallback',selected=info['package_subdirectory'],files=sorted(files))))
   except core.Stop as error:print(json.dumps(dict(ancestor=ancestor,mode=mode,outcome=error.cause)))
