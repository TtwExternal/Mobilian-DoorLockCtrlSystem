//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/test/select__db__search_field/select__db__search_field.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @class
 * @param {String} url js file url
 * @param {HTMLElement} $el_div 이 객체가 조작할 HTMLElement
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

	//--------------------------------------------------;


	//----------------------------------------------------------------------------------------------------;

	//	MEMBER VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

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

		_dispose.super();
	};
	_dispose.super = _this.dispose;

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

		var t = $el_div;

		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};
	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	_setPosition();
	//----------;

	//----------;
	var f0 = window.b2link_ui.el_form.getEL_FormFromDB;
	var f1 = window.b2link.element.appendChild;
	var f2 = window.b2link.html.createHTMLElement;
	for( var s in window.b2link_service.selector.db )
	{
		f1( $el_div, f2( "<h1>" + s + "</h1>" ) );
		var a = window.b2link_service.selector.db[ s ];
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			var el = f0( s, a[ i ] );

			//f1( el, f2( "<h2>" + s + "." + a[ i ] + "</h2>" ) );
			//el.inserBefor( f2( "<h2>" + s + "." + a[ i ] + "</h2>" ) );

			f1( $el_div, f2( "<br/>" ) );
			f1( $el_div, el ? el : f2( '<span style="color: #ff0000;">Error</span>' ) );
			f1( $el_div, f2( "<br/>" ) );
		}
		f1( $el_div, f2( "<hr/>" ) );
	}
	//----------;

	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

	_.__el = $el_div;

	_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
} );