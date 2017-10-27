var a = [
	{
		_ids$member : { register : 0, modifier : 0 }
		//, cd$category_system : "SYS0010"
		, cd : 1000001
		, date_create : [ 2017, 9, 1, 00, 00, 00 ]
		, description : "관리자"
		//, description_cn : ""
		//, description_kr : ""
		//, description_us : ""
		, nm : "관리자"
		//, nm_cn : ""
		//, nm_kr : ""
		//, nm_us : ""
		//, auths_flag_reference : 0
		//, auths_exclude : []
		//, auths_include : []
	}
	, {
		_ids$member : { register : 0, modifier : 0 }
		//, cd$category_system : "SYS0020"
		, cd : 2000001
		, date_create : [ 2017, 9, 1, 00, 00, 00 ]
		, description : "일반 사용자"
		//, description_cn : ""
		//, description_kr : ""
		//, description_us : ""
		, nm : "사용자"
		//, nm_cn : ""
		//, nm_kr : ""
		//, nm_us : ""
		//, auths_flag_reference : 0
		//, auths_exclude : []
		//, auths_include : []
	}
];

//----------------------------------------------------------------------------------------------------"

var db0 = db.getSiblingDB( "authority" );
	db0.authority_code.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
		io.cd = NumberInt( io.cd );

	db0.authority_code.insert( io );
};