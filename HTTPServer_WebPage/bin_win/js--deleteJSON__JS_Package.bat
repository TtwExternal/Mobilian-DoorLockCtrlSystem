call del /s /q ..\js\__list.json
call del /s /q ..\js\__listDir.json
call del /s /q ..\js\__listPackage.json

call del /s /q ..\js-WebServer\__list.json
call del /s /q ..\js-WebServer\__listDir.json
call del /s /q ..\js-WebServer\__listPackage.json

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