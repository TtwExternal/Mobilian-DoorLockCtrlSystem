//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/gis/map_leaflet/google/basic.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {String} $el_div
 */
(function( url, $el_div ){

	//Extends;
	var _this = window.b2linkUIClass.container.Layout( url, $el_div );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * @property {L.Map}
	 */
	var _map = null;

	/**
	 * @property {Array} [ {L.Layer}, {L.Layer}, ... ]
	 */
	var _mapControls = null;

	/**
	 * @property {Array} [ {L.Control}, {L.Control}, ... ]
	 */
	var _mapLayers = null;


	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	MEMBER VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
	 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		window.addEventListener( "resize", _evt_resize$parentElement, false, 0, true );
	};

	/**
	 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
	 * @function
	 */
	var _removeEvent = function()
	{
		window.removeEventListener( "resize", _evt_resize$parentElement, false );
	};

	/**
	 * window Browser Resize시 실행되는 EventListener
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resize$parentElement = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_resize$parentElement():void----------" );

		_setPosition();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION - 알파벳 순 정렬;
	//	- Common Interface
	//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * 지도를 초기화 시킨다.
	 * @function
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
	var _initialize = function()
	{
		var maps = window.gis.map_leaflet.initialize_Map__Tile__Google({
			//Map을 올릴 HTML's id;
			id : "div-gis-map_leaflet-google-basic"

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
		});

		_map = window.MAP = maps.map;
		_mapControls = window.MAP_CONTROLS = maps.controls;
		_mapLayers = window.MAP_LAYERS = maps.layers;

		_map.setView( [ 37.510372649468756, 126.92659378051759 ], 13 );

		return maps;
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;
	//	- Common Interface
	//	_setData : 이 객체가 정상적으로 작동되기 위한 값들을 주입 받는 다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		var t = $el_div;

		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	/**
	 * @getter
	 */
	_this.__defineGetter__( "map", function(){ return _map; });

	/**
	 * @getter
	 */
	_this.__defineGetter__( "mapControls", function(){ return _mapControls; });

	/**
	 * @getter
	 */
	_this.__defineGetter__( "mapLayers", function(){ return _mapLayers; });

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


	//----------;
	_addEvent();
	_setPosition();
	//----------;


	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup, ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	//var f1 = _this.addEventCallBackFunction__EventType;
	//--------------------------------------------------;


	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

		_.__el = $el_div;


		//_.map = _map;
		//_.mapControls = _mapControls;
		//_.mapLayers = _mapLayers;


		_.dispose = _dispose;

		_.initialize = _initialize;
	//--------------------------------------------------this;
	return _;
});