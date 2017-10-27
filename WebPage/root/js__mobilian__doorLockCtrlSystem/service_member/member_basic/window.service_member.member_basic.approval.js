//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_member/member_basic/window.service_member.member_basic.approval.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 가입 요청한 사용자 승인
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_member.member_basic.approval = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_member.member_basic.approval():void----------" );

	var _url = window.b2link.url.getServerURLByDB( "member" ) + "member/member_basic/approval?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_member.member_basic.approval():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;