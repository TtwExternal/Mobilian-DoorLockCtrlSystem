 //----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/message/window.smt_ui.message.error.modal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 이미 한번 생성되어있으면 존재하는 객체를 반환한다.
 * arguments의 옵션을 통해 View를 표출하지 않고 객체만 반환 받는게 가능하다.
 *
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.smt_ui.message.error.modal = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.message.error.modal():{Array}----------" );

	var host = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" );

	var p = {
		url : host + "/ui/smt_ui/Message/Variations/Error/"
		//url : host + "/ui--Semantic-UI/smt_ui/Message/Variations/Error/"
		, nm : "smt_ui-Message-Variations-Error"
		, css_url : host + "/css_ui/"
		, css_front_nm : "div-"
		, key : "smt_ui$Message.Variations.Error"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.message.error.modal():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;