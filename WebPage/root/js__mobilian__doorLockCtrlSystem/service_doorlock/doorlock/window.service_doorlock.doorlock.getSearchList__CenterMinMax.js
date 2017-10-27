//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_doorlock/doorlock/window.service_doorlock.doorlock.getSearchList__CenterMinMax.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 지도의 중심부터 최소 최대 검색 범위를 가지고 장치 목록을 검색한다.
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

		, maxX : {Number}//-180 ~ 180;
		, minX : {Number}//-180 ~ 180;
		, maxY : {Number}//-90 ~ 90;
		, minY : {Number}//-90 ~ 90;

		, maxD : {Number}
		, minD : {Number}//default 0;
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_doorlock.doorlock.getSearchList__CenterMinMax = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_doorlock.doorlock.getSearchList__CenterMinMax():void----------" );

	d.query = d.query || {};
	d.fields = d.fields || null;
	d.limit = d.limit || null;
	d.skip = d.skip || null;
	if( d.skip < 0 ) d.skip = 0;
	d.batchSize = d.batchSize || null;
	d.options = d.options || null;

	d.minD = d.minD || 0;

	var _url = window.b2link.url.getServerURLByDB( "doorlock" ) + "doorlock/doorlock/getSearchList__CenterMinMax?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_doorlock.doorlock.getSearchList__CenterMinMax():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;