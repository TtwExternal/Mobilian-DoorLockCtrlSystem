//----------------------------------------------------------------------------------------------------;
var fileNm = "/js__mobilian__doorLockCtrlSystem/mobilian_router/doorlock/control_history/controlHistoryAdd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * 도어락 장치를 조작한 내역을 저장한다.
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS__require( global.mobilian_router.doorlock.PATH.control_history + "controlHistoryAdd.dbjs" );

/**
 * @function
 * 도어락 장치를 조작한 내역을 저장한다.
 * @param {http.ClientRequest} req
 * <code>
	{
		//MAC Address;
		addr_mac : ""

		, cd$category_status_doorlock : ""
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
	http://localhost:49320/doorlock/control_history/controlHistoryAdd?
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - doorlock/control_history/controlHistoryAdd():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - 도어락 장치를 조작한 내역을 저장한다.
	var _query = global.b2link.fs.getDBJS__require( global.mobilian_router.doorlock.PATH.control_history + "controlHistoryAdd.dbjs" );
	var query = _query.replace( "<!=data=!>", q.data );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.mobilian_router.doorlock.PATH.control_history + "controlHistoryAdd.query", query );

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
				global.b2link.response.send_200_False( req, res );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] - doorlock/control_history/controlHistoryAdd():void----------" );
});