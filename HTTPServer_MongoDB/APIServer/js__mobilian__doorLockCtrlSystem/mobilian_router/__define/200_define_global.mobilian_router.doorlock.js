//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mobilian_router/__define/200_define_global.mobilian_router.doorlock.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mobilian_router.doorlock;

global.mobilian_router.doorlock = global.mobilian_router.doorlock || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mobilian_router.doorlock;

/**
 * global.mobilian_router.doorlock.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "./js__mobilian__doorLockCtrlSystem/mobilian_router/doorlock/";
	var _a0 = [
		"blueprint"
		, "control_history"
		, "control_target"
		, "doorlock"
		, "file_attachments"
		, "installed_photos"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	var _ = global.mobilian_router.doorlock.PATH = global.mobilian_router.doorlock.PATH || {};

		_.__defineGetter__( "blueprint", function(){ return _PATH.blueprint; });
		_.__defineGetter__( "control_history", function(){ return _PATH.control_history; });
		_.__defineGetter__( "control_target", function(){ return _PATH.control_target; });
		_.__defineGetter__( "doorlock", function(){ return _PATH.doorlock; });
		_.__defineGetter__( "file_attachments", function(){ return _PATH.file_attachments; });
		_.__defineGetter__( "installed_photos", function(){ return _PATH.installed_photos; });
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;