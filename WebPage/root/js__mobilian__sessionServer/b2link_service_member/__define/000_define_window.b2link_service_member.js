//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service_member/__define/200_define_window.b2link_service_memberjs";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service_member

window.b2link_service_member = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service_member

/**
 * @function
 * @return {String}
 */
window.b2link_service_member.__defineGetter__( "URL", function(){ return window.b2link_service.getURL_DB( "member" ); } );

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;