//모든 컬렉션 정보를 인스턴스화 한다;
var db0 = db.getSiblingDB( "_instance" );
var col = db0.getCollection( "dbs" );

var tCol = db0.getCollection( "cols" );
	tCol.remove({});

col.find({}).forEach( function( doc ){
	var db1 = db.getSiblingDB( doc._id );
	var cols = db1.getCollectionNames();
	var i=0, iLen=cols.length;
	for( ; i<iLen; ++i )
	{
		if( "system.js" != cols[ i ] )
		{
			tCol.insert({
				_id : cols[ i ]
				, db : doc._id
			});
		}
	}
});