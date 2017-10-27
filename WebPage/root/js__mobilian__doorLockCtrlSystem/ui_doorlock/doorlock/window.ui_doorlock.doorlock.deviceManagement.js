//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/ui_doorlock/doorlock/window.ui_doorlock.doorlock.deviceManagement.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 도어락 장치 관리 화면
 * 관리자 등록 / 사용자 설치 / 제어 등
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_doorlock.doorlock.deviceManagement = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.ui_doorlock.doorlock.deviceManagement():{Array}----------" );

	var p = {
		url : "./ui/doorlock/doorlock/"
		, nm : "deviceManagement"
		, css_url : "./css_ui/"
		, css_front_nm : "div-doorlock-doorlock-"
		, key : "doorlock-doorlock$deviceManagement"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	window.TtwLog.timeStamp( "---- [ E ] - window.ui_doorlock.doorlock.deviceManagement():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;