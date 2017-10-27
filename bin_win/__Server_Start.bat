:——————————————————————————————————————————————————;
:APIServer;
:——————————————————————————————————————————————————;

call __Build_APIServer.bat

call cd__APIServer--bin_win.bat

call cd ..

:start APIServer.bat
:start APIServer-Electron.bat
start APIServer-Electron.exe

call cd bin_win

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
:MongoDB;
:——————————————————————————————————————————————————;

call cd__MongoDB--bin_win.bat

call cd ..

call cd 3.4.5_x64

start Start.bat

call cd ..

call cd bin_win

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
:HTTPServer_WebPage;
:——————————————————————————————————————————————————;

call cd__WebPage--bin_win.bat

call js--deleteJSON__JS_Package.bat

cd bin_win

call js--createJSON__JS_Package.bat

call cd__Root__bin_win.bat



call cd__HTTPServer_WebPage--bin_win.bat

call cd ..

:start HTTPServer_WebPage.bat
:start HTTPServer_WebPage-Electron.bat
start HTTPServer_WebPage-Electron.exe

call cd bin_win

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
