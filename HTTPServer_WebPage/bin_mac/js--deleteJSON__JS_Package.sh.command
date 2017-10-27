#!/bin/sh
cd $(dirname $0)

find ../js/ -name '__list.json' -exec rm -f {} \;
find ../js/ -name '__listDir.json' -exec rm -f {} \;
find ../js/ -name '__listPackage.json' -exec rm -f {} \;

#find ../js-WebServer/ -name '__list.json' -exec rm -f {} \;
#find ../js-WebServer/ -name '__listDir.json' -exec rm -f {} \;
#find ../js-WebServer/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__mobilian__doorLockCtrlSystem/ -name '__list.json' -exec rm -f {} \;
find ../js__mobilian__doorLockCtrlSystem/ -name '__listDir.json' -exec rm -f {} \;
find ../js__mobilian__doorLockCtrlSystem/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__mobilian__sessionServer/ -name '__list.json' -exec rm -f {} \;
find ../js__mobilian__sessionServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__mobilian__sessionServer/ -name '__listPackage.json' -exec rm -f {} \;