//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service_member/member_public/window.b2link_service_member.member_public.getProp_NameFrom_id.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} _id
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_NameFrom_id = function( _id, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_public.getProp_NameFrom_id():void----------" );

	window.b2link_service.common._fn_req(
		window.b2link_service_member.member_public.URL + "getProp_NameFrom_id?_id=" + _id
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_public.getProp_NameFrom_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;