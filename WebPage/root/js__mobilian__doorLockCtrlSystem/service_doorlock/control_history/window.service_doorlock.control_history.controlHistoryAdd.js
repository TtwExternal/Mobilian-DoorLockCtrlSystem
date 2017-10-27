//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_doorlock/doorlock/window.service_doorlock.control_history.controlHistoryAdd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 도어락 장치를 조작한 내역을 저장한다.
 * @function
 * @param {Object} d
 * <code>
	{
		//MAC Address;
		addr_mac : ""

		//도어락 장치 생산 일시;
		, date_device_create : date.toISOString()
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_doorlock.control_history.controlHistoryAdd = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_doorlock.control_history.controlHistoryAdd():void----------" );

	var _url = window.b2link.url.getServerURLByDB( "doorlock" ) + "doorlock/control_history/controlHistoryAdd?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_doorlock.control_history.controlHistoryAdd():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;