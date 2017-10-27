//----------------------------------------------------------------------------------------------------;
var fileNm = "./js-common/mobilianUIClass/gis/window.mobilianUIClass.gis.DoorlockCtrlSystem.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
var cb = function( result ){ fn(); };
var fn = function(){ window.b2link_service.common._fn_req( "http://localhost:49320/_admin/doorlock/addSampleData__doorlock?", cb ); };
fn();

var cb = function( result ){};
var fn = function(){ window.b2link_service.common._fn_req( "http://localhost:49320/_admin/doorlock/addSampleData__doorlock?", cb ); };
fn();
//*/

/*/
db.getSiblingDB( "doorlock" ).doorlock.createIndex( { c : "2d" } );
//*/

/**
 * @class
 * @param {Object} d
 * <code>
	{
		map : {L.Map}
		, mapControls : [ {L.Control}, {L.Control}, ... ]
		, mapLayers : [ {L.Layer}, {L.Layer}, ... ]
	}
 * </code>
 * @param {Object} _this
 */
window.mobilianUIClass.gis.DoorlockCtrlSystem = function( d, _this )
{
	//----------------------------------------------------------------------------------------------------;

	//	VALIDATION;

	//----------------------------------------------------------------------------------------------------;

	if( !d.map ){ window.b2link_ui.message.error( "Map은 필수" ); return new Error( "Map은 필수" ); }
	if( !d.mapControls ){ window.b2link_ui.message.error( "Map Controls 는 필수" ); return new Error( "Map Controls 는 필수" ); }
	if( !d.mapLayers ){ window.b2link_ui.message.error( "Map Layers 는 필수" ); return new Error( "Map Layers 는 필수" ); }

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	var _map = d.map;
	var _mapControls = d.mapControls;
	var _mapLayers = d.mapLayers;

	/**
	 * @property {L.FeatureGroup}
	 */
	var _mapGroup_Feature_POI_CM = null;

	/**
	 * @private
	 * @property {Object}
	 */
	var _this = _this ? _this : {};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
	 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		//_map.addEventListener( "click", _evt_mClick__map, false, 0, true );
		_map.addEventListener( "moveend", _evt_moveend__map__doorLockList__All, false, 0, true );
		//_map.addEventListener( "mouseout", _evt_mOut__map, false, 0, true );
		//_map.addEventListener( "mouseover", _evt_mOver__map, false, 0, true );

		_mapGroup_Feature_POI_CM.addEventListener( "click", _evt_mClick___mapGroup_Feature_POI_CM, false, 0, true );
		//_mapGroup_Feature_POI_CM.addEventListener( "mouseout", _evt_mOut___mapGroup_Feature_POI_CM, false, 0, true );
		//_mapGroup_Feature_POI_CM.addEventListener( "mouseover", _evt_mOver___mapGroup_Feature_POI_CM, false, 0, true );
	};

	/**
	 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
	 * @function
	 */
	var _removeEvent = function()
	{
		//_map.removeEventListener( "click", _evt_mClick__map, false );
		_map.removeEventListener( "moveend", _evt_moveend__map__doorLockList__All, false );
		//_map.removeEventListener( "mouseout", _evt_mOut__map, false );
		//_map.removeEventListener( "mouseover", _evt_mOver__map, false );

		_mapGroup_Feature_POI_CM.removeEventListener( "click", _evt_mClick___mapGroup_Feature_POI_CM, false );
		//_mapGroup_Feature_POI_CM.removeEventListener( "mouseout", _evt_mOut___mapGroup_Feature_POI_CM, false );
		//_mapGroup_Feature_POI_CM.removeEventListener( "mouseover", _evt_mOver___mapGroup_Feature_POI_CM, false );
	};

	/**
	 * @function
	 * @param {Event} click event
	 */
	var _evt_mClick___mapGroup_Feature_POI_CM = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick___mapGroup_Feature_POI_CM():void----------" );

		if( "click" != e.type )
		{
			window.b2link_ui.message.error( "click이 아니다." );
			debugger;
			return;
		}

		var l = e.layer;
		var t = e.target;

		try
		{
			//_id로 장치의 정보를 가져온다.;
			window.b2link.common.clearTimeout( _evt_mClick___mapGroup_Feature_POI_CM._timeout0 );
			_req___evt_mOver___mapGroup_Feature_POI_CM._layer = l;
			_evt_mClick___mapGroup_Feature_POI_CM._timeout0 = window.b2link.common.setTimeout( _req___evt_mOver___mapGroup_Feature_POI_CM, 100 );
		}
		catch( er )
		{
			window.TtwLog.error( "_evt_mClick___mapGroup_Feature_POI_CM Error : " + er );
			debugger;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick___mapGroup_Feature_POI_CM():void----------" );
	};
	_evt_mClick___mapGroup_Feature_POI_CM._timeout0 = -1;

	/**
	 * @function
	 * @param {Event} e moveend event
	 */
	var _evt_moveend__map__doorLockList__All = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_moveend__map__doorLockList__All():void----------" );

		if( "moveend" != e.type )
		{
			window.b2link_ui.message.error( "moveend가 아니다." );
			debugger;
			return;
		}

		var t = e.target;

		//----------[ S ] - Bounds로 데이터를 요청한다.;
		var bounds = t.getBounds();
		var sw = bounds.getSouthWest();
		var ne = bounds.getNorthEast();

		_req___evt_moveend__map__doorLockList__All( sw.lng, sw.lat, ne.lng,ne.lat );
		//----------[ E ] - Bounds로 데이터를 요청한다.;

		window.TtwLog.timeStamp( "-- [ E ] - _evt_moveend__map__doorLockList__All():void----------" );
	};

	/**
	 * @function
	 * @param {Event} mouseout event
	 */
	var _evt_mOut___mapGroup_Feature_POI_CM = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mOut___mapGroup_Feature_POI_CM():void----------" );

		if( "mouseout" != e.type )
		{
			window.b2link_ui.message.error( "mouseout이 아니다." );
			debugger;
			return;
		}

		var l = e.layer;
		var t = e.target;

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mOut___mapGroup_Feature_POI_CM():void----------" );
	};

	/**
	 * @function
	 * @param {Event} mouseover event
	 */
	var _evt_mOver___mapGroup_Feature_POI_CM = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mOver___mapGroup_Feature_POI_CM():void----------" );

		if( "mouseover" != e.type )
		{
			window.b2link_ui.message.error( "mouseover가 아니다." );
			debugger;
			return;
		}

		var l = e.layer;
		var t = e.target;

		try
		{
			//_id로 장치의 정보를 가져온다.;
			window.b2link.common.clearTimeout( _evt_mOver___mapGroup_Feature_POI_CM._timeout0 );
			_req___evt_mOver___mapGroup_Feature_POI_CM._layer = l;
			_evt_mOver___mapGroup_Feature_POI_CM._timeout0 = window.b2link.common.setTimeout( _req___evt_mOver___mapGroup_Feature_POI_CM, 100 );
		}
		catch( er )
		{
			window.TtwLog.error( "_evt_mOver___mapGroup_Feature_POI_CM Error : " + er );
			debugger;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mOver___mapGroup_Feature_POI_CM():void----------" );
	};
	_evt_mOver___mapGroup_Feature_POI_CM._timeout0 = -1;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Objeect} d
	 * <code>
		{

		}
	 * </code>
	 */
	var _addPOI__DoorLock = function( d )
	{
		//window.TtwLog.timeStamp( "-- [ S ] - _addPOI__DoorLock():void----------" );

		//var f0 = window.ttw.gis.addLayer_Vector__Circle;
		//var f0 = window.ttw.gis.addLayer_Vector__Circle_XY;
		var f0 = window.ttw.gis.addLayer_Vector__CircleMarker;
		//var f0 = window.ttw.gis.addLayer_Vector__CircleMarker_XY;

		_mapGroup_Feature_POI_CM.addLayer( f0( d ) );

		//window.TtwLog.timeStamp( "-- [ E ] - _addPOI__DoorLock():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		if( _dispose.super ) _dispose.super();

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _initialize__FeatureGroup = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _initialize__FeatureGroup():void----------" );

		_mapGroup_Feature_POI_CM = window.ttw.gis.addFeatureGroup({ k : "POI_CircleMarker", map : _map });

		window.TtwLog.timeStamp( "-- [ E ] - _initialize__FeatureGroup():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * DoorLock의 상세 Popup을 띄운다.
	 * @function
	 * @param {
	 */
	var _popup___addPOI__DoorLock = function( t )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _popup___addPOI__DoorLock():void----------" );

		var o = t.options;
		/*/
		t.bindPopup(
		//t.bindTooltip(
			" _id : " + o._id
			+ "\nx : " + o.c[ 1 ]
			+ "\ny : " + o.c[ 0 ]
			+ "\ny : " + o.c[ 0 ]
			+ "\ncd$category_status_doorlock : " + o.cd$category_status_doorlock
		).openPopup();
		/*/
		o.c[ 0 ] = Number( o.c[ 0 ].toFixed( 5 ) );
		o.c[ 1 ] = Number( o.c[ 1 ].toFixed( 5 ) );

		var popup = _popup___addPOI__DoorLock._popup;
			popup.setLatLng( t.getLatLng() )
				.setContent( window.b2link.string.applyBrace( _popup___addPOI__DoorLock._popup_html, o ) )
				.openOn( _map );
		//*/

		window.TtwLog.timeStamp( "-- [ E ] - _popup___addPOI__DoorLock():void----------" );
	};
	_popup___addPOI__DoorLock._popup = window.ttw.gisPack.popup();
	_popup___addPOI__DoorLock._popup_html = window.b2link.xhr.reqSync_String( "./ui/doorlock/doorlock/template-gis-popup-doorlock.html" );

	//--------------------------------------------------;

	/**
	 * Bounds로 데이터를 요청한다.
	 * @function
	 * @param {Number} minX
	 * @param {Number} minY
	 * @param {Number} maxX
	 * @param {Number} maxY
	 */
	var _req___evt_moveend__map__doorLockList__All = function( minX, minY, maxX, maxY )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req___evt_moveend__map__doorLockList__All():void----------" );

		var maxD0 = maxY - minY;
		var maxD1 = maxX - minX;

		var maxD = ( maxD0 > maxD1 ) ? maxD0 : maxD1;

		//지도의 중심부터 최소 최대 검색 범위를 가지고 장치 목록을 검색한다.;
		window.service_doorlock.doorlock.getSearchList__CenterMinMax( {
			//minX : minX, minY : minY, maxX : maxX, maxY : maxY//lng, lat;
			minX : minY, minY : minX, maxX : maxY, maxY : maxX//lat,lng;

			//Find Distance;
			, minD : 0 , maxD : maxD
		}, _res___evt_moveend__map__doorLockList__All );

		window.TtwLog.timeStamp( "-- [ E ] - _req___evt_moveend__map__doorLockList__All():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} result
	 * <code>
		{
			r : {uint|String}//Result Code;
			, m : {String}//Result Message;
			, data : {Array}//Result Data;
		}
	 * </code>
	 */
	var _res___evt_moveend__map__doorLockList__All = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res___evt_moveend__map__doorLockList__All():void----------" );

		if( !window.b2link.response.getResultStatus( result ) )
		{
			debugger;
			return;
		}

		//var d = window.MAP.DIC_LAYERS_VECTOR_CIRCLE;
		var d = window.MAP.DIC_LAYERS_VECTOR_CIRCLE_MARKER;
		for( var s in d )
		{
			d[ s ].remove();
			delete d[ s ];
		}

		var t0 = _res___evt_moveend__map__doorLockList__All._colors;

		/*/
		var a = result.data;
		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];
			io.k = "p_" + io._id;
			io.map = _map;
			io.radius = 5;
			io.color = "#000";
			io.fillColor = t0[ io.cd$category_status_doorlock ];
			io.fillOpacity = 0.9;
			//io.stroke = false;
			io.weight = 0.5;

			_addPOI__DoorLock( io );
		}
		/*/
		//var f0 = window.ttw.gis.addLayer_Vector__Circle;
		//var f0 = window.ttw.gis.addLayer_Vector__Circle_XY;
		var f0 = window.ttw.gis.addLayer_Vector__CircleMarker;
		//var f0 = window.ttw.gis.addLayer_Vector__CircleMarker_XY;

		var a = result.data;
		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];
			io.k = "p_" + io._id;
			io.map = _map;
			io.radius = 5;
			io.color = "#000";
			io.fillColor = t0[ io.cd$category_status_doorlock ];
			io.fillOpacity = 0.9;
			//io.stroke = false;
			io.weight = 0.5;

			_mapGroup_Feature_POI_CM.addLayer( f0( io ) );
		}
		//*/

		window.TtwLog.timeStamp( "-- [ E ] - _res___evt_moveend__map__doorLockList__All():void----------" );
	};
	//*/
	_res___evt_moveend__map__doorLockList__All._colors = {
		CSDL001 : "#f2711c"
		, CSDL002 : "#21ba45"
		, CSDL003 : "#2185d0"
		, CSDL004 : "#db2828"
	};
	/*/
	_res___evt_moveend__map__doorLockList__All._colors = {
		CSDLCR001 : "#21ba45"
		, CSDLCR002 : "#2185d0"
		, CSDLCR003 : "#db2828"
	};
	//*/

	//--------------------------------------------------;

	/**
	 * _id로 장치의 상세 정보를 가져온다;
	 * @function
	 * @param {uint} _id
	 */
	var _req___evt_mOver___mapGroup_Feature_POI_CM = function( _id )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req___evt_mOver___mapGroup_Feature_POI_CM():void----------" );

		var t = _req___evt_mOver___mapGroup_Feature_POI_CM._layer;

		if( !t )
		{
			return;
		}

		if( "number" != typeof( _id ) ) _id = t.options._id;

		if( _id < 0 )
		{
			window.TtwLog.Error( "_req___evt_mOver___mapGroup_Feature_POI_CM Error : _id는 0보다 커야 한다." );
			debugger;
			return;
		}

		//장치 상세 정보를 1번만 가져와서 재사용 할수 있는 로직;
		//장치 정보를 동적으로 가져오게 하려면 제거 하기;
		if( t.options.addr_mac ) _res___evt_mOver___mapGroup_Feature_POI_CM._reuse( t );
		else
		{
			//장치의 정보를 가져온다.;
			window.service_doorlock.doorlock.getDocFrom_id({ _id : _id }, _res___evt_mOver___mapGroup_Feature_POI_CM );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req___evt_mOver___mapGroup_Feature_POI_CM():void----------" );
	};
	_req___evt_mOver___mapGroup_Feature_POI_CM._layer = null;

	/**
	 * @function
	 * @param {Object} result
	 * <code>
		{
			r : {uint|String}//Result Code;
			, m : {String}//Result Message;
			, data : {Array}//Result Data;
		}
	 * </code>
	 */
	var _res___evt_mOver___mapGroup_Feature_POI_CM = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res___evt_mOver___mapGroup_Feature_POI_CM():void----------" );

		if( !window.b2link.response.getResultStatus( result ) )
		{
			window.b2link_ui.message.error( "_res___evt_mOver___mapGroup_Feature_POI_CM Error : 대상 객체의 정보를 가져올 수 없다." );
			window.b2link_ui.message.error( result );
			debugger;
			return;
		}

		var t = _req___evt_mOver___mapGroup_Feature_POI_CM._layer;
		STtwUtilObject.copyObjectRef( t.options, result.data );

		//Development Mode;
		//window.b2link_ui.message.message( JSON.stringify( result.data, null, "\t" ) );

		//DoorLock의 상세 Popup을 띄운다.;
		_popup___addPOI__DoorLock( t );

		window.TtwLog.timeStamp( "-- [ E ] - _res___evt_mOver___mapGroup_Feature_POI_CM():void----------" );
	};
	_res___evt_mOver___mapGroup_Feature_POI_CM._reuse = function( t ){
		window.TtwLog.timeStamp( "-- [ S ] - _res___evt_mOver___mapGroup_Feature_POI_CM._reuse():void----------" );

		//DoorLock의 상세 Popup을 띄운다.;
		_popup___addPOI__DoorLock( t );

		window.TtwLog.timeStamp( "-- [ E ] - _res___evt_mOver___mapGroup_Feature_POI_CM._reuse():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( _setData.super ) _setData.super( d );
	};
	if( _this.setData ) _setData.super = _this.setData;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


	//----------;
	_initialize__FeatureGroup();
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;



		_.map = _map;
		_.mapControls = _mapControls;
		_.mapLayers = _mapLayers;



		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//---------------------------------------------------------------------------------------------------;