var db0 = db.getSiblingDB( "_instance" );
var a = [
	"category"
	, "list_static"
];

var col = db0.getCollection( "dbs_cols__public" );
	col.remove({});

var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var dbCol = { _id : a[ i ] };
	var db1 = db.getSiblingDB( a[ i ] );
	var cols = db1.getCollectionNames();
	var j=0, jLen=cols.length;
	for( ; j<jLen; ++j )
	{
		if( "system.js" != cols[ j ] )
			dbCol[ cols[ j ] ] = {};
	}
	col.insert( dbCol );
}

var d = {
	member : {
		_id : "member"
		, member_public : {}
	}
};

var col = db0.getCollection( "dbs_cols__public" );
for( var s in d ) col.insert( d[ s ] );
