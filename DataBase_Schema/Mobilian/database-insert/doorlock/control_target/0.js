var a = [
	{
		_id$member_basic : 0//장치를 제어한 사용자;

		, addr_mac : ""//장치의 MAC Address;

		, date : "2017-09-06T08:58:48.367Z"//등록 시간 - Document가 생성된 시간;
	}
	, { _id$member_basic : 0, addr_mac : "", date : "2017-09-06T08:58:48.367Z" }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "doorlock" );
	db0.control_target.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.control_target.insert( io );
};