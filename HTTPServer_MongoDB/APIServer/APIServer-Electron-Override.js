//----------------------------------------------------------------------------------------------------;
var fileNm = "APIServer-Electron-Override.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var f0 = global.b2link.fs.writeQuery;
	global.b2link.fs.writeQuery = function( fileNm, s, cb_Complete ){
		f0( fileNm, s, cb_Complete );
	}
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;