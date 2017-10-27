 //----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/search/url.b2link.url.getServerURLByDB.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------SessionServer;

		//  _instance		: [ "http://localhost:30000/", "http://localhost:30000/" ]
		//, _query_public	: [ "http://localhost:30000/", "http://localhost:30000/" ]

		authority		: [ "http://localhost:30000/", "http://localhost:30000/" ]
		//, member		: [ "http://localhost:30000/", "http://localhost:30000/" ]

		//--------------------------------------------------B2Ker;

		, _instance		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, _query_public	: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, administrator	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, brand			: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, category		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, company		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, contract_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, contract_sale		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, information	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, list_static	: [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, member		: [ "http://localhost:30000/", "http://localhost:30000/" ]
		, member		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, partner		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, product		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, schedule		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, server_file	: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, settlement	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, stock  		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, transaction : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_purchase_order_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_purchase_order_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_purchase_return : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction_quotation_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quotation_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quote_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quote_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;

		, transaction_sale_return : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction_report_release : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_report_wearing : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;

		, transaction_stock_release : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_stock_wearing : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//--------------------------------------------------Brand_Portal;

		, baidu_index : [ "http://localhost:45320/", "http://localhost:45320/" ]
		, graph : [ "http://localhost:45320/", "http://localhost:45320/" ]
		, red_post : [ "http://localhost:45320/", "http://localhost:45320/" ]
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
	 * @param {String} db_nm
	 * @return {String} url
	 */
	window.b2link.url.getServerURLByDB = function( db_nm )
	{
		if( !_server[ db_nm ] ) debugger;//없는 db 이름이 들어옴;

		var r;

		if( _idxMaxCount[ db_nm ] > _idx[ db_nm ] )
		{
			r = _server[ db_nm ][ _idx[ db_nm ] ];
			++_idx[ db_nm ];
		}
		else
		{
			_idx[ db_nm ] = 0;
			r = _server[ db_nm ][ _idx[ db_nm ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;