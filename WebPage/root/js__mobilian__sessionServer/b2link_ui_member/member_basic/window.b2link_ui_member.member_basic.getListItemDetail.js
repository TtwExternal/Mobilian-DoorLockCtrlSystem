//----------------------------------------------------------------------------------------------------;
var fileNm = "./js__b2link__sessionServer/b2link_ui_member/member_basic/window.b2link_ui_member.member_basic.getListItemDetail.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.getListItemDetail = function()
{
	window.KaiLog.timeStamp( "---- [ S ] - window.b2link_ui_member.member_basic.getListItemDetail():{Array}----------" );

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "b2link_member/member_basic/"
		, nm : "getListItemDetail"
		, css_url : "./css_ui/"
		, css_front_nm : "div__member_basic-"
		, key : "member$member_basic$getListItemDetail"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	var o = window.b2link_ui.addUI__DefaultModalTrue( p, arguments[ 0 ] );

	window.KaiLog.timeStamp( "---- [ E ] - window.b2link_ui_member.member_basic.getListItemDetail():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
