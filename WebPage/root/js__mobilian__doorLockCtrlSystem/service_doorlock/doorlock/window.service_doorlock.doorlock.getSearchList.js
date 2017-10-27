//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_doorlock/doorlock/window.service_doorlock.doorlock.getSearchList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 장치 목록 검색
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
window.service_doorlock.doorlock.getSearchList = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_doorlock.doorlock.getSearchList():void----------" );

	d.query = d.query || {};
	d.fields = d.fields || null;
	d.limit = d.limit || null;
	d.skip = d.skip || null;
	if( d.skip < 0 ) d.skip = 0;
	d.batchSize = d.batchSize || null;
	d.options = d.options || null;

	var _url = window.b2link.url.getServerURLByDB( "doorlock" ) + "doorlock/doorlock/getSearchList?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_doorlock.doorlock.getSearchList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;