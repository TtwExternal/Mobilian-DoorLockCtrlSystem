//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service_member/member_public/window.b2link_service_member.member_public.getProp_NameFromsid.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} _id
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_NameFromsid = function( cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_public.getProp_NameFromsid():void----------" );

	window.b2link_service.common._fn_req(
		window.b2link_service_member.member_public.URL + "getProp_NameFromsid?"
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_public.getProp_NameFromsid():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;