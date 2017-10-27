//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/service_doorlock/doorlock/window.service_doorlock.doorlock.deviceInstall.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 도어락 장치 설치
 * 사용자가 이용한다.
 * @function
 * @param {Object} d
 * <code>
	{
		//도어락 장치가 설치된 주소;
		addr : ""

		//도어락 장치 관리 방식 - 지도 / 도면;
		//실내 / 실외??
		//확인하기 - 남사장님에게;
		, cd$category_doorlock_management_type : ""

		, _id$blueprint//실내 도면 아이디;

		//확인하기 - 남사장님에게 - PDF 상에선 알수 없는 듯함;
		, 제어 키
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_doorlock.doorlock.deviceInstall = function( d, cbFunction )
 {
	window.TtwLog.timeStamp( "---- [ S ] - window.service_doorlock.doorlock.deviceInstall():void----------" );

	var _url = window.b2link.url.getServerURLByDB( "doorlock" ) + "doorlock/doorlock/deviceInstall?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.service_doorlock.doorlock.deviceInstall():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;