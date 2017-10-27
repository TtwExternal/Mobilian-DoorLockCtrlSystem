//----------------------------------------------------------------------------------------------------;

//	C** ACCOUNT;

//----------------------------------------------------------------------------------------------------;

var a = [
	  { mid : "ceo@mobilian.biz", cd$authority_code : 1000001, nm : { a : "CEO" } }
	, { mid : "cfo@mobilian.biz", cd$authority_code : 2000001, nm : { a : "CFO" } }
	, { mid : "coo@mobilian.biz", cd$authority_code : 2000001, nm : { a : "COO" } }
	, { mid : "cso@mobilian.biz", cd$authority_code : 2000001, nm : { a : "CSO" } }
	, { mid : "cto@mobilian.biz", cd$authority_code : 2000001, nm : { a : "CTO" } }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );

var len = db0.member_basic.find({}).count();

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( len + i );
		io.bConn = NumberInt( 0 );
		//io.nSignInFail = NumberInt( io.nSignInFail );
		io.nSignInFail = NumberInt( 0 );

		io.cd$authority_code = NumberInt( io.cd$authority_code );
		io.email = io.mid;
		io.mpw = "123qweasd";

		//if( !io.cd$category_division ) io.cd$category_division = "Founders";
		//if( !io.cd$category_division_team ) io.cd$category_division_team = "";
		//if( !io.cd$category_division_part ) io.cd$category_division_part = "";

		//if( !io.messenger ) io.messenger = { cd$messenger : "", id : "" };

		if( !io.nm.f ) io.nm.f = io.nm.a;
		if( !io.nm.l ) io.nm.l = io.nm.a;

		//if( !io.nm_cn ) io.nm_cn = { a : io.nm.a, f : io.nm.f, l : io.nm.l };
		//if( !io.nm_kr ) io.nm_kr = { a : io.nm.a, f : io.nm.f, l : io.nm.l };
		//if( !io.nm_us ) io.nm_us = { a : io.nm.a, f : io.nm.f, l : io.nm.l };

		if( !io.phone_cell ) io.phone_cell = { f : "", c : "", a : "", n0 : "", n1 : "" };
		if( !io.phone_tel ) io.phone_tel = { f : "+", c : "", a : "", n0 : "", n1 : "" };

	db0.member_basic.insert( io );
};