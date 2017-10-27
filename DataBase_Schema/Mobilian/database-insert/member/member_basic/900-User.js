//----------------------------------------------------------------------------------------------------;

//	SYSTEM 계정;

//----------------------------------------------------------------------------------------------------;

var a = [
	{ "mid" : "ttwexternal@gmail.com", "mpw" : "123qweasd", "bConn" : 0

		, "cd$authority_code" : 1000001
		//, "cd$category_division" : "BLS";
		//, "cd$category_division_team" : "DEV";
		//, "cd$category_division_part" : "DEV";

		, "email" : "thdtjsdn@gmail.com"//, "email_id" : "thdtjsdn"//, "email_domain" : "gmail.com"
		//, "messenger" : { "cd$messenger" : "MSG001", "id" : "thdtjsdn@gmail.com" };

		, "nm" : { "a" : "송선우", "f" : "선우", "l" : "송" }
		//, "nm_cn" : { "a" : "", "f" : "", "l" : "" };
		//, "nm_kr" : { "a" : "송선우", "f" : "선우", "l" : "송" };
		//, "nm_us" : { "a" : "SunWoo Song", "f" : "SunWoo", "l" : "Song" };

		, "nSignInFail" : 0

		, "phone_cell" : { "f" : "+82-10-1588-3366", "c" : "82", "a" : "10", "n0" : "1234", "n1" : "1234" }
		, "phone_tel" : { "f" : "+82-2-1588-3366", "c" : "82", "a" : "02", "n0" : "1588", "n1" : "3366" }
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );

var len = db0.member_basic.find({}).count();

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( len + i );
		io.bConn = NumberInt( io.bConn );
		io.cd$authority_code = NumberInt( io.cd$authority_code );
		io.nSignInFail = NumberInt( io.nSignInFail );

	db0.member_basic.insert( io );
};