//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/smt_ui_member/update/window.smt_ui_member.update.changePassword.modal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Change Password UI 화면에 필요한 리소스를 서버에 요청 후 View와 Controller를 생성하여 반환하고 화면에 View를 Modal로 표출한다.
 * 이미 한번 생성되어있으면 존재하는 객체를 반환한다.
 * arguments의 옵션을 통해 View를 표출하지 않고 객체만 반환도 가능하다.
 *
 * 화면에 Modal로 표출한다.
 *
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.smt_ui_member.update.changePassword.modal = function()
{

	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui_member.update.changePassword.modal():{Array}----------" );

	if( !window.b2link.session.getSession__sid() ){window.b2link_ui.message.error( "The session ID does not exist." );debugger;return;}

	var host = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" );
	//if( _$TATIC_CONST_DEBUG ){ host = "http://localhost:49321"; }

	var p = {
		url : host + "/ui/member/update/"
		, nm : "changePassword"
		, css_url : host + "/css_ui/"
		, css_front_nm : "div-member-update-"
		, key : "member-update$changePassword"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	if( elC.evt_Complete__ChangePassword )
	{
		window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui_member.update.changePassword.modal():{Array}----------if( elC.evt_Complete__ChangePassword )" );
		return o;
	}

	elC.evt_Complete__ChangePassword = window.smt_ui_member.update.changePassword._evt_Complete__ChangePassword;

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui_member.update.changePassword.modal():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;