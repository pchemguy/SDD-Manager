from pathlib import Path
import importlib.util,hashlib,json,time,zipfile,subprocess
root=Path.cwd();spec=importlib.util.spec_from_file_location('publisher',root/'.github/scripts/release.py');r=importlib.util.module_from_spec(spec);spec.loader.exec_module(r)
source=r.git(root,'rev-parse','HEAD').decode().strip();notes='Local review probe; no release.';data=dict(source=source,notes_source=source,tag='v0.15.0',notes=notes,notes_sha256=hashlib.sha256(notes.encode()).hexdigest(),publish=False,prerelease=False,make_latest=False,request_id='review065')
a=r.build_package(root,data,'/tmp/065-build-a');time.sleep(3);b=r.build_package(root,data,'/tmp/065-build-b')
za=zipfile.ZipFile(a['sdd-manager.zip']);zb=zipfile.ZipFile(b['sdd-manager.zip']);ha=hashlib.sha256(a['sdd-manager.zip'].read_bytes()).hexdigest();hb=hashlib.sha256(b['sdd-manager.zip'].read_bytes()).hexdigest()
result={'source':source,'files':len(r.tree_inventory(root,source)),'sha_a':ha,'sha_b':hb,'same_archive_bytes':ha==hb,'same_member_names':za.namelist()==zb.namelist(),'same_member_contents':all(za.read(n)==zb.read(n) for n in za.namelist()),'first_member_time_a':za.infolist()[0].date_time,'first_member_time_b':zb.infolist()[0].date_time,'git_version':subprocess.check_output(['git','--version'],text=True).strip()}
Path('/tmp/065-rebuild-result.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
