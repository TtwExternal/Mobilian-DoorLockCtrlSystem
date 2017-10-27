//----------------------------------------------------------------------------------------------------;
var fileNm = "js_GIS/gis/map_leaflet/window.gis.map_leaflet.initialize_Map__Tile__Google.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Leaflet 기반의 Map 객체를 초기화 한다.
 * Google Map을 BaseLayer로 생성한다.
 * @function
 * @param {Object} d
 * <code>
	{
		//Map을 올릴 HTML's id;
		id : "div_0__Application"

		//그려진 지도;
		, bStreet : true

		//배경지도 위로 올라오는 글자 및 심볼, 도로 등;
		, bHybrid : false

		//위성영상 지도;
		, bSatellite : false

		//위성영상 지도 + Hybrid;
		, bSatellite_Hybrid : false

		//지형도;
		, bTerrain : false

		, inertia : false
	}
 * </code>
 * @return {Object}
 * <code>
	{
		map : {ttw.gisPack.Map}
		, layers : {
			//예제로 작성된 것임 실제 Key&Value가 아님;
			Street : {ttw.gisPack.Layer}
			, Hybrid : {ttw.gisPack.GridLayer}
			, Satellite : {ttw.gisPack.TileLayer}, ...
		}
		, controls : {
			attribution : {ttw.gisPack.Control.Attribution}
			, scaleLine : ttw.gisPack.Control.ScaleLine}
			, zoom : {ttw.gisPack.Control.Zoom}
		}
	}
 * </code>
 */
window.gis.map_leaflet.initialize_Map__Tile__Google = function( d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.gis.map_leaflet.initialize_Map__Tile__Google():{Object}----------" );

	d = d || {};

	if( !d.hasOwnProperty( "id" ) )
	{
		window.b2link._ui.message.error( "HTML's id는 필수" );
		debugger;
		return;
	}

	if( !d.hasOwnProperty( "bStreet" )
		&& !d.hasOwnProperty( "bHybrid" )
		&& !d.hasOwnProperty( "bSatellite" )
		&& !d.hasOwnProperty( "bSatellite_Hybrid" )
		&& !d.hasOwnProperty( "bTerrain" )
	) d.bStreet = true;

	var o = ttw.gis.initialize_Map__Tile__Google( d );
	var map = o.map;
	//var layers = o.layer;

	var controls = {};
		controls.attribution = ttw.gis.addControl_Attribution({ map : map, position : "bottomright", prefix : "B2LiNK" });
		controls.scaleLine = ttw.gis.addControl_ScaleLine({ map : map, position : "bottomleft", maxWidth : 100, metric : true, imperial : true, updateWhenIdle : false });
		controls.zoom = ttw.gis.addControl_Zoom({ map : map, position : "topright", zoomInText : "+", zoomOutText : "-", zoomInTitle : "확대", zoomOutTitle : "축소" });

	o.controls = controls;

	window.TtwLog.timeStamp( "---- [ E ] - window.gis.map_leaflet.initialize_Map__Tile__Google():{Object}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;