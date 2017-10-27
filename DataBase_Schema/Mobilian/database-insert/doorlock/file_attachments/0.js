var a = [
	{
		_id$member_basic : 0//첨부 파일을 생성한 사용자;

		, content_type : ""//컨텐츠 타입;

		, date : "2017-09-06T08:58:48.367Z"//등록 시간 - Document가 생성된 시간;

		, nm_file : ""//첨부 파일 이름;

		, path_file : ""//첨부 파일 경로;

		, size : 1024//첨부 파일 용량;
	}
	, { _id$member_basic : 0, content_type : "", date : "2017-09-06T08:58:48.367Z", nm_file : "", path_file : "", size : 1024 }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "doorlock" );
	db0.file_attachments.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.file_attachments.insert( io );
};