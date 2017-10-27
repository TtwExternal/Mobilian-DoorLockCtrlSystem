//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service_member/member_session/window.b2link_service_member.member_session.getProp__idFromsid.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session.getProp__idFromsid = function( cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_session.getProp__idFromsid():void----------" );

	window.b2link_service.common._fn_req(
		window.b2link_service_member.member_session.URL + "getProp__idFromsid?"
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_session.getProp__idFromsid():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;