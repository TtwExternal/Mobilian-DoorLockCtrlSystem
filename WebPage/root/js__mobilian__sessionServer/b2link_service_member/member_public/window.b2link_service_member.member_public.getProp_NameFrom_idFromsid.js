//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service_member/member_public/window.b2link_service_member.member_public.getProp_NameFrom_idFromsid.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_NameFrom_idFromsid = function( cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_public.getProp_NameFrom_idFromsid():void----------" );

	window.b2link_service_member.member_session.getProp__idFromsid( function( _id ){
		window.b2link_service_member.member_public.getProp_NameFrom_id( _id, cbFunction );
	});

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_public.getProp_NameFrom_idFromsid():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;