//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/url/window.b2link.url.getServerURLByServer.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {
		//공용;
		//session_server : [ "http://localhost:30000", "http://localhost:30001", "http://localhost:30002" ]
		session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]

		//사용하는 곳 목록;
		//B2Ker, ...;
		, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]

		//사용하는 곳 목록;
		//B2Ker, ...;
		, file_server : [ "http://localhost:49322", "http://localhost:49322" ]

		//사용하는 곳 목록;
		//B2Ker, ...;
		, webhook_server : [ "http://localhost:47320", "http://localhost:47320" ]

		//사용하는 곳 목록;
		//BrandPortal, ...;
		, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		//, brand_portal_api_server : [ "http://localhost:45320", "http://localhost:45320" ]
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	window.b2link.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;