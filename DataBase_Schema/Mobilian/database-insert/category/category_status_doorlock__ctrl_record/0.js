var a = [
	  { cd : "CSDLCR001",  nm : "Open" }
	, { cd : "CSDLCR002",  nm : "Close" }
	, { cd : "CSDLCR003",  nm : "Error" }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.category_status_doorlock__ctrl_record.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.category_status_doorlock__ctrl_record.insert( io );
};