//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_member/member_basic/window.service_member.member_basic.getSearchList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 사용자 목록 검색
 * @function
 * @param {Object} d
 * <code>
	{
		query : {}
		, fields : {}
		, limit : {uint}
		, skip : {uint}
		, batchSize : {Number}
		, options : {}
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_member.member_basic.getSearchList = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_member.member_basic.getSearchList():void----------" );

	d.query = d.query || {};
	d.fields = d.fields || null;
	d.limit = d.limit || null;
	d.skip = d.skip || null;
	if( d.skip < 0 ) d.skip = 0;
	d.batchSize = d.batchSize || null;
	d.options = d.options || null;

	var _url = window.b2link.url.getServerURLByDB( "member" ) + "member/member_basic/getSearchList?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_member.member_basic.getSearchList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;