//----------------------------------------------------------------------------------------------------;
var fileNm = "js__GIS/ui_gis/map_sk/window.ui_gis.map_sk.basic.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Stock Transfer Req
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_gis.map_sk.basic = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.ui_gis.map_sk.basic():{Array}----------" );

	var host = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" );

	var p = {
		url : host + "/ui/gis/map/sk/"
		, nm : "basic"
		, css_url : host + "/css_ui/"
		, css_front_nm : "div-gis-map-sk-basic"
		, key : "gis-map$sk-basic"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	window.TtwLog.timeStamp( "---- [ E ] - window.ui_gis.map_sk.basic():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;