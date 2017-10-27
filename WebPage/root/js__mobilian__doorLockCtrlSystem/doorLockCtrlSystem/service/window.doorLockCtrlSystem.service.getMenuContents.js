//----------------------------------------------------------------------------------------------------;
var fileNm = "js__mobilian__doorLockCtrlSystem/doorLockCtrlSystem/service/window.doorLockCtrlSystem.service.getMenuContents.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Function} cbFunction function( result ){}
 */
window.doorLockCtrlSystem.service.getMenuContents = function( cbFunction )
 {
 	window.Rh2Log.timeStamp( "---- [ S ] - window.doorLockCtrlSystem.service.getMenuContents():void----------" );

 	cbFunction( window.doorLockCtrlSystem.service.getMenuContents._data );

 	window.Rh2Log.timeStamp( "---- [ E ] - window.doorLockCtrlSystem.service.getMenuContents():void----------" );
};

/*/
type : ""//"", "modal", "popup";
	- modal : Modal View로 표출
	- popup : 새창으로 표출
	- "" : 기본 View 형태
//*/
window.doorLockCtrlSystem.service.getMenuContents._data = [
	{
		label : "Dash Board"
		, callBack : ""
		, type : ""//type : "modal";
	}
	, {
		label : "사용자관리"
		, callBack : "window.b2link_ui_member.member_public.getSearchList"
		, type : ""//type : "modal";
	}
	, {
		label : "장치관리"
		, callBack : ""
		, type : ""//type : "modal";
	}
	, {
		label : "통계"
		, items : []
		, type : ""//type : "modal";
	}
];

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
