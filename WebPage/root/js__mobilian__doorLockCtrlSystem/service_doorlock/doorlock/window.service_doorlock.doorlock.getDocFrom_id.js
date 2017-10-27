//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_doorlock/doorlock/window.service_doorlock.doorlock.getDocFrom_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 장치의 정보를 가져온다.
 * @function
 * @param {Object} d
 * <code>
	{
		//query : {}
		//, fields : {}
		//, limit : {Int}
		//, skip : {Int}
		//, batchSize : {Number}
		//, options : {}
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_doorlock.doorlock.getDocFrom_id = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_doorlock.doorlock.getDocFrom_id():void----------" );

	//d.query = d.query || {};
	//d.fields = d.fields || null;
	//d.limit = d.limit || null;
	//d.skip = d.skip || null;
	//d.batchSize = d.batchSize || null;
	//d.options = d.options || null;

	var _url = window.b2link.url.getServerURLByDB( "doorlock" ) + "doorlock/doorlock/getDocFrom_id?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_doorlock.doorlock.getDocFrom_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;