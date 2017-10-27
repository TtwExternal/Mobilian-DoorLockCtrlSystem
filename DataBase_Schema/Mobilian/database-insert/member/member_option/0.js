/*/
SYS0010 : SessionServer
SYS0020 : DoorLockCtrlSystem
//*/

var a = [];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_option.remove({});

var _col$member_basic = db0.member_basic;
a = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a[ i ].mid

//		, _id$brand_basic : 0
	};

	io.SYS0010 = {};//Mobilian-SessionServer;
	io.SYS0020 = {};//Mobilian-DoorLockCtrlSystem;
//	io.SYS0030 = {//B2LiNK-BrandPortal;
//		//Member의 소속 회사 정보;
//		company : {
//			address : { cd$country : "KR", cd$postal : "525353", cd_postal : "525353", addr1 : "", addr2 : "", addr3 : "", addr4 : "", addr5 : "", addr6 : "", f : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)" }
//			, company_registration_number : "123-456-789"
//			, email : "b2link@b2link.co.kr"
//			, phone_tel : { f : "+82-10-1588-3366", c : "82", a : "10", n0 : "1234", n1 : "1234" }
//			, nm : "비투링크"
//			, nm_president : { a : "이소형", f : "소형", l : "이" }
//		}
//
//		//Member의 결제정보;
//		, info_payment : { nm_bank : "국민은행", nm_account_owner : "홍길동", num_account : "123-456-789", issue_tax_bill : "발급" }
//	};

	db0.member_option.insert( io );
};