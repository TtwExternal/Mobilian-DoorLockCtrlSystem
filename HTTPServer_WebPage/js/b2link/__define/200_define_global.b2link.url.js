//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.b2link.url.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.url;

global.b2link.url = global.b2link.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.url;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
global.b2link.url.getQueryFromURL=function(r){return global.server.getQueryFromURL(r)};

/**
 * encodeURIComponent된 url을 decodeURIComponent 한다. 는 기본적으로 진행함
 * encodeURIComponent를 사용하지 않고 자체 변환된 url도 풀어준다.
 * @function
 * @param {String} url
 * @return {Object}
 */
global.b2link.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&"),JSON.parse(l)};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;