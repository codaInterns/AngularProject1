#!/usr/bin/env python3
import os
import subprocess
from glob import glob
commitids = os.popen('git log --format="%H" -n 2').read()
commitids = commitids.splitlines()
diff = os.popen('git diff --name-only ' + commitids[0] + ' ' + commitids[1]).read()
diff = diff.splitlines()
basepath = os.getcwd()
basepath += '\\'

for i in diff:
	base=os.path.basename(i)
	if os.path.splitext(base)[1] == '.ts':
		print(i)
		cmd = os.popen('tslint '+basepath+i).read()
		print(cmd)
		exit(1)
	elif os.path.splitext(base)[1] == '.java':
		print(basepath+i)
		cmd = os.popen('java -jar' + basepath+'checkstyle-8.17-all.jar -c '+basepath + 'sun_checks.xml ' + basepath+i)		
   
print("Pre push Hook finished")