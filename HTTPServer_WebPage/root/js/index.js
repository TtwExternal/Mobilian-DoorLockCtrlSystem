//----------------------------------------------------------------------------------------------------;
var fileNm = "js/index.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.initialize = function(){

//----------------------------------------------------------------------------------------------------;

//	REQUIRE;

//----------------------------------------------------------------------------------------------------;

window.__autoLoad_JS = global.Lib.Ttw.autoLoad_JS;

//require( "../../../Development-NodeJS_Modules/root/WebPage-Lib-Base.min.js" );
require( "../../../Development-NodeJS_Modules/root/WebPage-Lib-Base-Sencha.min.js" );

//Create Console;
//require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//----------------------------------------------------------------------------------------------------;

//	STATIC VARIABLES - 알파벳 순 정렬;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------public;

//--------------------------------------------------protected;

//--------------------------------------------------private;

//--------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//	MEMBER VARIABLES - 알파벳 순 정렬;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------public;

//--------------------------------------------------protected;

//--------------------------------------------------private;

//----------------------------------------------------------------------------------------------------;

//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
//	- Callback를 정의하는 곳이 아님.
//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
//	- Common Interface
//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * 사용 금지
 * window._$TATIC_EVT_COMPLETE__InitializeLibraries를 사용;
 * @function
 */
window.onload = function()
{
	window.console.log( "--[ S ] - TATIC_EVT_COMPLETE__InitializeLibraries" );
	console.log( "Initialize Libraries Complete." );


	//--------------------------------------------------[ S ] - ;
	var f0 = window.b2link.element.mouseDisable__ID;
	var f1 = window.b2link.element.mouseEnable__ID;
	f0("div_0__Background");
	f1("div_0__Application");
	f0("div_0__UI_Component_Fixed");
	f1("div_0__UI_Component_Fixed");
	f0("div_0__UI_Component_Panel");
	f0("div_0__Top");
	f0("div_0__Top_modal");
	//--------------------------------------------------[ E ] - ;

	//--------------------------------------------------[ S ] - HTML, JavaScript UI;
	//*///--------------------------------------------------TemplateHTML API - addHTMLJS__URL 활용;

	window.b2link_ui.test.test_Menu();

	//------------------------------;
	//WebSocket을 생성하여 WebSocketServer과 연결한다.;
	//모든 메세지가 전체 송/수신 되는 기능;
	//sid(session id)와 mid(member id)를 체크한다.;
	//try{window.__WS__MessageBox=window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message({host:"localhost",port:42322})}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함. - "+e)}
	//try{window.__WS__MessageBox=window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message({host:"222.239.10.122",port:42322})}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함. - "+e)}
	//------------------------------;

	/*/
	//window.b2link_ui.test.test_Menu();
	//window.b2link_ui__dev.index_dev_mongodb.queryTester();

	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );


	var o =
		window.ui_member.common.sign_in();
		//window.ui_member.common.sign_in.modal();

	var el = o[ 0 ];
	var elC = o[ 1 ];

	elC.evt_Complete__SignIn = function( result )
	{
		window.TtwLog.timeStamp( "[ S ] - window.ui_member.common.sign_in._evt_Complete__SignIn():void----------" );

		if( window.b2link.response.getResultStatus( result ) )
		{
			//window.b2link_ui_member.member_basic.getAllList();
			//window.b2link_ui_member.member_basic.getAllList__nm();
			window.b2ker.ui_layout.container_main();
			window.b2ker.ui_dashboard.main();

			//------------------------------;
			//WebSocket을 생성하여 WebSocketServer과 연결한다.;
			//모든 메세지가 전체 송/수신 되는 기능;
			//sid(session id)와 mid(member id)를 체크한다.;
			//try{window.__WS__MessageBox=window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message({host:"localhost",port:42322})}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함. - "+e)}
			//try{window.__WS__MessageBox=window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message({host:"222.239.10.122",port:42322})}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함. - "+e)}
			//------------------------------;
		}
		else window.b2link.log.error__Signin_failure();

		window.TtwLog.timeStamp( "[ E ] - window.ui_member.common.sign_in._evt_Complete__SignIn():void----------" );
	};

	window.b2link.element.appendChild_SetPositionCenterMiddle( window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED, el, 200 );

	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div__test_Menu_UIContainer" );
	//*/

	//*///--------------------------------------------------TemplateHTML API - addHTMLJS__URL 활용;
	//--------------------------------------------------[ E ] - HTML, JavaScript UI;
};

//----------------------------------------------------------------------------------------------------;

//	FUNCTION - 알파벳 순 정렬;
//	- Common Interface
//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;
//	- Common Interface
//	_setData : 이 객체가 정상적으로 작동되기 위한 값들을 주입 받는 다.

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

//--------------------------------------------------SET;

//--------------------------------------------------GET / SET;

//--------------------------------------------------GETTER;

//--------------------------------------------------SETTER;

//--------------------------------------------------GETTER / SETTER

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

window.onload();
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;