//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/ui_member/member_basic/window.ui_member.member_basic.userManagement.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 사용자 관리 화면
 * 사용자 등록/수정/삭제 등
 * 관리자만 사용 가능하다.
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_member.member_basic.userManagement = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.ui_member.member_basic.userManagement():{Array}----------" );

	var p = {
		url : "./ui/member/member_basic/"
		, nm : "userManagement"
		, css_url : "./css_ui/"
		, css_front_nm : "div-member-member_basic-"
		, key : "member-member_basic$userManagement"
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

	window.TtwLog.timeStamp( "---- [ E ] - window.ui_member.member_basic.userManagement():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;