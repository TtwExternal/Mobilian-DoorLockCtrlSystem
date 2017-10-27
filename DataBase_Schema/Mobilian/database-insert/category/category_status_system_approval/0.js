var a = [
	  { cd : "CSSA001",  nm : "승인요청" }
	, { cd : "CSSA002",  nm : "승인" }
	, { cd : "CSSA003",  nm : "반려" }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.category_status_system_approval.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.category_status_system_approval.insert( io );
};