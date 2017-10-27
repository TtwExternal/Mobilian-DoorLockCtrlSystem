var a = [];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_session.remove({});

var _col$member_basic = db0.member_basic;

a = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a[ i ].mid

		, d_ex : ""
		, sid : null
	};

	db0.member_session.insert( io );
};