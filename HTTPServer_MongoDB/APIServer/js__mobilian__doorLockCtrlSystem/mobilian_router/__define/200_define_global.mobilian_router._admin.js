//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mobilian_router/__define/200_define_global.mobilian_router._admin.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mobilian_router._admin;

global.mobilian_router._admin = global.mobilian_router._admin || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mobilian_router._admin;

/**
 * global.mobilian_router._admin.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "./js__mobilian__doorLockCtrlSystem/mobilian_router/_admin/";
	var _a0 = [
		"doorlock"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	var _ = global.mobilian_router._admin.PATH = global.mobilian_router._admin.PATH || {};

		_.__defineGetter__( "doorlock", function(){ return _PATH.doorlock; });
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;