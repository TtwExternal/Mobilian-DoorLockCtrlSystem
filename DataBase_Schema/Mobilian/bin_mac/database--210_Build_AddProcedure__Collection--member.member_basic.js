//----------------------------------------------------------------------------------------------------;
var fileNm = "database--210_Build_AddProcedure__Collection--member.member_basic.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./database--00_Config.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

var path_col = "../database/member/member_basic/";

SUtilFsWriteStream_Extension_Dev__MongoDB.build__addProcedure__Collection( path_col, "member", "member_basic" );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;