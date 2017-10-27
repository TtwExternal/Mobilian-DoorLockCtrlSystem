//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/member/global.b2link_validation.member.member_basic$remove_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$remove_id = function( d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.member.member_basic$remove_id():void----------" );

	try{ d._id = parseInt( d._id ); }catch( e ){ global.TtwLog.error( "Error : " + e ); throw e; }

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.member.member_basic$remove_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;