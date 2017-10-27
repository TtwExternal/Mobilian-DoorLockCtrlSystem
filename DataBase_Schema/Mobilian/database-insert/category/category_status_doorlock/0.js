var a = [
	  { cd : "CSDL001",  nm : "Unknown" }
	, { cd : "CSDL002",  nm : "Open" }
	, { cd : "CSDL003",  nm : "Close" }
	, { cd : "CSDL004",  nm : "Error" }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.category_status_doorlock.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.category_status_doorlock.insert( io );
};