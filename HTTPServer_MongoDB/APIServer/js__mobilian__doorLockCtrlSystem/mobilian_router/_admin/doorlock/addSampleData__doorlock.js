//----------------------------------------------------------------------------------------------------;
var fileNm = "/js__mobilian__doorLockCtrlSystem/mobilian_router/_admin/doorlock/addSampleData__doorlock.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
var cb = function( result ){ fn(); };
var fn = function(){ window.b2link_service.common._fn_req( "http://localhost:49320/_admin/doorlock/addSampleData__doorlock?", cb ); };
fn();

var cb = function( result ){};
var fn = function(){ window.b2link_service.common._fn_req( "http://localhost:49320/_admin/doorlock/addSampleData__doorlock?", cb ); };
fn();
//*/

/*/
db.getSiblingDB( "doorlock" ).doorlock.createIndex( { c : "2d" } );
//*/

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * 도어락 장치 등록
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS__require( global.mobilian_router.doorlock.PATH.doorlock + "deviceAdd.dbjs" );

/**
 * 도어락 장치 등록
 * 관리자만 사용 가능하다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		//MAC Address;
		addr_mac : ""

		//도어락 장치 생산 일시;
		, date_device_create : date.toISOString()
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:49320/_admin/doorlock/addSampleData__doorlock?
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _admin/doorlock/addSampleData__doorlock():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;


	var f0 = function(){ return STtwUtilMath.random( 0, 0xff ).toString( "16" ).toUpperCase(); };
	/*/
	var f1 = function(){ return STtwUtilMath.random( -180, 180, 0.00005 ); };
	var f2 = function(){ return STtwUtilMath.random( -90, 90, 0.00005 ); };
	/*/
	var f1 = function(){ return STtwUtilMath.random( 125.60669, 130.85815, 0.00005 ); };
	var f2 = function(){ return STtwUtilMath.random( 34.59252, 38.5997, 0.00005 ); };
	//*/
	var d = {
		_id$blueprint : 0
		, _id$member_basic : 0
		, addr : {}
		, addr_mac : f0() + "-" + f0() + "-" + f0() + "-" + f0() + "-" + f0() + "-" + f0()
		, blueprint_x : -1
		, blueprint_y : -1
		, cd$category_doorlock_management_type : "CDMT001"
		, cd$category_status_doorlock : STtwUtilMath.random( 0, 3 )
		, date : new Date().toISOString()
		, date_device_create : new Date().toISOString()
		, key : STtwUtilHttpClientResponse.create_Session( req )
		, x : f1()
		, y : f2()
	};
	//d.c = [ d.x, d.y ];
	//d.e = [ d.x, d.y ];
	d.c = [ d.y, d.x ];
	//d.e = [ d.y, d.x ];
	//d.key = STtwUtilHttpClientResponse.create_Session( req );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - 도어락 장치 등록;
	var _query = global.b2link.fs.getDBJS__require( global.mobilian_router._admin.PATH.doorlock + "addSampleData__doorlock.dbjs" );
	var query = _query.replace( "<!=data=!>", JSON.stringify( d ) );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.mobilian_router._admin.PATH.doorlock + "addSampleData__doorlock.query", query );

	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
			if( !global.b2link.response.getResultStatus( result ) )//0 == OK;
			{
				//global.b2link.response.send_200_False( req, res );
				global.b2link.response.send_200_JSON( req, res, result );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] - _admin/doorlock/addSampleData__doorlock():void----------" );
});