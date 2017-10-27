var a = [
	{
		_id$file_attachments : 0//첨부 파일 Index;

		, date : "2017-09-06T08:58:48.367Z"//등록 시간 - Document가 생성된 시간;
	}
	, { _id$file_attachments : 0, date : "2017-09-06T08:58:48.367Z" }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "doorlock" );
	db0.blueprint.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.blueprint.insert( io );
};