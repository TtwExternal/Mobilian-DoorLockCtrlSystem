call del /s /q ..\js\__list.json
call del /s /q ..\js\__listDir.json
call del /s /q ..\js\__listPackage.json

call del /s /q ..\js-common\__list.json
call del /s /q ..\js-common\__listDir.json
call del /s /q ..\js-common\__listPackage.json

call del /s /q ..\js--Semantic-UI\__list.json
call del /s /q ..\js--Semantic-UI\__listDir.json
call del /s /q ..\js--Semantic-UI\__listPackage.json

call del /s /q ..\js__GIS\__list.json
call del /s /q ..\js__GIS\__listDir.json
call del /s /q ..\js__GIS\__listPackage.json

call del /s /q ..\js__mobilian__doorLockCtrlSystem\__list.json
call del /s /q ..\js__mobilian__doorLockCtrlSystem\__listDir.json
call del /s /q ..\js__mobilian__doorLockCtrlSystem\__listPackage.json

call del /s /q ..\js__mobilian__sessionServer\__list.json
call del /s /q ..\js__mobilian__sessionServer\__listDir.json
call del /s /q ..\js__mobilian__sessionServer\__listPackage.json





cd ..
del /s /q *.query

for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"
:for /f "tokens=*" %%d in ('dir /ad/b/s ^| sort /R') do rd "%%d"

cd bin_win