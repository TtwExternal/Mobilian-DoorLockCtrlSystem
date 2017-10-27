var a = [
	{
		_id$blueprint : 0//도면 ID;

		, _id$member_basic : 0//장치 설치자;

		, addr : {}//장치가 설치된 장소의 주소;

		, addr_mac : ""//장치의 MAC Address;

		, blueprint_x : 360//장치의 도면상 X 위치;
		, blueprint_y : 240//장치의 도면상 Y 위치;

		, cd$category_doorlock_management_type : "CDMT001"//Operation Code - 관리 방식 - 지도 또는 도면;

		, cd$category_status_doorlock : "CSDL001"//장치 상태;

		, date : "2017-09-06T08:58:48.367Z"//장치 등록 일시 - ISO Date;
		, date_device_create : "2017-09-06T08:58:48.367Z"//장치 생산 일시 - ISO Date;

		, key : "?????"//장치 제어를 위한 키 값;

		, x : 127//장치가 설치된 장소의 Coordinates X;
		, y : 38//장치가 설치된 장소의 Coordinates Y;
	}
	, { _id$blueprint : 0, _id$member_basic : 0, addr : {}, addr_mac : ""
		, blueprint_x : 360, blueprint_y : 240
		, cd$category_doorlock_management_type : "CDMT001", cd$category_status_doorlock : "CSDL001"
		, date : "2017-09-06T08:58:48.367Z", date_device_create : "2017-09-06T08:58:48.367Z"
		, key : "?????"
		, x : 127, y : 38
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "doorlock" );
	db0.doorlock.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.doorlock.insert( io );
};