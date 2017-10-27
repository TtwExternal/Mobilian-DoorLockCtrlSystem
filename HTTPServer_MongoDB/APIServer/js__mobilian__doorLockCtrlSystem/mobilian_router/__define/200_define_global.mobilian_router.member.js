//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mobilian_router/__define/200_define_global.mobilian_router.member.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.mobilian_router.member;

global.mobilian_router.member = global.mobilian_router.member || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.mobilian_router.member;

/**
 * global.mobilian_router.member.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "./js__mobilian__doorLockCtrlSystem/mobilian_router/member/";
	var _a0 = [
		"member_basic"
		//, "member_public"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	var _ = global.mobilian_router.member.PATH = global.mobilian_router.member.PATH || {};

		_.__defineGetter__( "member_basic", function(){ return _PATH.member_basic; });
		//_.__defineGetter__( "member_public", function(){ return _PATH.member_public; });
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;