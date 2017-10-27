//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/test/test_Menu.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = "div__test_Menu_UIContainer";

/**
 * @class
 * @param {String} url js file url
 * @param {HTMLElement} $el_div 이 객체가 조작할 HTMLElement
 */
(function( url, $el_div ){

	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div__test_Menu_UIContainer" );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//----------------------------------------------------------------------------------------------------;

	//	MEMBER VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	var _this = {};

	var $w = window;
	var $d = window.document;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

	var _el_div_menu_list = $d.getElementById( "div__test_Menu_List" );
	var _el_div_menu_uic = $d.getElementById( "div__test_Menu_UIContainer" );

	var _width = $el_div.clientWidth;
	var _height = $el_div.clientHeight;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
	 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		$w.addEventListener( "resize", _evt_resize$parentElement, false, 0, true );

		_el_div_menu_list.addEventListener( "click", _evt_mClick, false, 0, true );
	};

	/**
	 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_div_menu_list.removeEventListener( "click", _evt_mClick, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick():void----------" );

		var t = e.target;
			//console.logObjectInformation( t, "t" );
		window.b2link.STATIC.UI.__allHide();
		//window.b2link.STATIC.UI.__all_setPosition__TestMenu();

		/*/
		var o = t.onclickeval();
		/*/
		var att = t.getAttribute( "onclickeval" );

		var bBiz = ( -1 != att.indexOf( "b2link_ui.biz." ) );
		if( bBiz )
		{
			window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = "div_0__UI_Component_Fixed";
			var t = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED;
			window.b2link.element.removeAllChildren( t );
		}

		bBiz = ( -1 != att.indexOf( "b2link_b2ker." ) );
		if( bBiz )
		{
			window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = "div_0__UI_Component_Fixed";
			var t = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED;
			window.b2link.element.removeAllChildren( t );
		}

		var o = Lib.Ttw.eval( att );
			console.log( o );

		if( "array" != typeof o ) return;

		var el = o[ 0 ];
		var elC = o[ 1 ];

		//20170331 - 송선우 - 추가;
		//window.b2link.element.appendChild_SetPositionCenterMiddle( _el_div_menu_uic, el );

		if( bBiz ) return;
		//*/

		//Modal이 아닐 시;
		if( el.parentElement != window.b2link.ui_modal.modal_content )
		{
			window.b2link.element.removeChildFromParentElement( el );
			//window.b2link.element.appendChild( _el_div_menu_uic, el );
			//window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( el );
			window.b2link.element.appendChild_SetPositionCenterMiddle( _el_div_menu_uic, el );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick():void----------" );
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

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 이 Controller( _this )와 TargetElement( _this.__el )를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
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
		$w = null;
		$d = null;
		//_el_btn_signin = null;
	};

	var _showOrCreateElement = function()
	{

	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};
	//--------------------------------------------------;

	var _getHeight = function(){ return _height; };
	var _setHeight = function( n ){ _height = n; };

	var _getWidth = function(){ return _width; };
	var _setWidth = function( n ){ _width = n; };

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	_setPosition();
	//----------;
	//console.logObjectInformation( $w );
	window.TtwLog.timeStamp( "$w.screen.width : " + $w.screen.width );
	window.TtwLog.timeStamp( "$w.screen.height : " + $w.screen.height );

	/*/
	_el_div_menu_uic.__appendChild = _el_div_menu_uic.appendChild;
	_el_div_menu_uic.appendChild = function( t )
	{
		var o = _el_div_menu_uic.__appendChild( t );
			//console.log( "var o = _el_div_menu_uic.__appendChild( t );" );
			//console.log( o );
		setTimeout( function(){ window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( t ); }, 300 );
		//setTimeout( function(){ window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus( t ); }, 300 );
		return o;
	};
	//*/
	//----------;

	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

	window.b2linkExtends.injection.hide_show( _ );

	_.__el = $el_div;

	_.dispose = _dispose;

	_.getWidth = _getWidth
	_.getHeight = _getHeight
	//--------------------------------------------------this;
	return _;
} );
