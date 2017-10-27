//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/doorLockCtrlSystem/ui_layout/window.doorLockCtrlSystem.ui_layout.container_main.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.doorLockCtrlSystem.ui_layout.container_main = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.doorLockCtrlSystem.ui_layout.container_main():{Array}----------" );

	//*///테스트 화면이 아닌 전체 화면으로 표시;
	window.b2link_ui.test.test_Menu({ display : false })[ 1 ].hide();
	//기본 ViewContainer 설정;
	//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );
	//*/

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "app__mobilian__doorLockCtrlSystem/layout/"
		, nm : "doorLockCtrlSystem-layout-container_main"
		, css_url : "./css_ui/"
		, css_front_nm : ""
		, key : "doorLockCtrlSystem-layout-container_main"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div-doorLockCtrlSystem-ViewContainer" );

	window.TtwLog.timeStamp( "---- [ E ] - window.doorLockCtrlSystem.ui_layout.container_main():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;