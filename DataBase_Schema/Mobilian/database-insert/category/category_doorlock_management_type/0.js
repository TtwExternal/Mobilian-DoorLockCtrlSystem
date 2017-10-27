var a = [
	  { cd : "CDMT001",  nm : "지도" }
	, { cd : "CDMT002",  nm : "도면" }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.category_doorlock_management_type.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.category_doorlock_management_type.insert( io );
};