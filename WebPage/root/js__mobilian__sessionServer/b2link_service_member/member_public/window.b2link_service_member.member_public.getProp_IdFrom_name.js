//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service_member/member_public/window.b2link_service_member.member_public.getProp_IdFrom_name.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} nm
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_IdFrom_name = function( nm, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_public.getProp_IdFrom_name():void----------" );

	window.b2link_service.common._fn_req(
		window.b2link_service_member.member_public.URL + "getProp_IdFrom_name?nm=" + nm
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_public.getProp_IdFrom_name():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;