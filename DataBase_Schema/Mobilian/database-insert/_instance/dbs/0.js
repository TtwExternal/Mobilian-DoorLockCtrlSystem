var a = [
	"authority"
	, "category"
	, "doorlock"
	, "member"
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "_instance" );
	db0.dbs.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];

	db0.dbs.insert({ _id : a[ i ] });
};