require( "../../../Development-NodeJS_Modules/Common-APIServer-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "MemberSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "../../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리;

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
//require( "./_$TATIC_NODE_MODULES.js" );

//require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

//----------------------------------------------------------------------------------------------------;

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;
if( global.REQUIRES ){ if( !global.REQUIRES.mongodb ){ global.TtwLog.error( "알수없는 이유로 global.REQUIRES.mongodb가 존재하지 않는다" ); debugger; } }else{ global.TtwLog.error( "알수없는 이유로 global.REQUIRES가 존재하지 않는다" ); debugger; }

//----------------------------------------------------------------------------------------------------;

//*/
global._$TATIC_CONST_DEBUG = true;
/*/
global._$TATIC_CONST_DEBUG = false;
//*/

/**
 * Session Time
 * 2000000 : 37분 정도
 * 10000000 : 3시간 정도
 * @static
 * @property {Number}
 */
global._$TATIC_CONST_SESSION_TIME = 10000000;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){

	//----------Initlaize Server;
	var server_port = process.argv[ 2 ] ? process.argv[ 2 ] : 49320;
	if( "NaN" == parseFloat( server_port ).toString() ) server_port = 49320;

	var _server = new global.Lib.Ttw.CLASS.HTTPAPIServer.MongoDB({
		instanceKey : "global.Lib.Ttw.httpAPIServer_MongoDB"
		, mongodb : { host : "localhost", port : 59320 }
		, server : { host : null, port : server_port }
	});
	global.server = _server;


	var f = _server.addRouter;

	//http://localhost:port/member_basic/getAllList__email?a=1&b=1
	f( "/member_basic/getAllList__email", function( req, res ){
		var _server = global.server;
		var q = _server.getQueryFromURL( req.url );

		//use q;
		//...Custom parameter process;

		q.db = "member";
		q.q = "member_basic$getAllList__email()";

		_server.req_DB( req, res, q, function( error, result ){
			if( error )
			{
				console.error( q.q + " Error : " + error );
				_server.sendResponse_200_False( req, res );
				return;
			}

			//...;

			_server.sendResponse_200_String( req, res, JSON.stringify( result ) );
		});
	});

	//--------------------------------------------------;
})();
//*/

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, Development-NodeJS_Modules에 존재한다.;
// - ./js__mobilian__***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	global.b2link.fs.autoLoad_JSs([
		  [ "JavaScript Import - Mobilian-DoorLockCtrlSystem", "./js__mobilian__doorLockCtrlSystem/", { mobilian_router : 1, mobilian_router_external : 1, mobilian_router_internal : 1 } ]
		, [ "JavaScript Import - Mobilian-SessionServer", "./js__mobilian__sessionServer/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
	]);
})();
//*/

//global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack = global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;