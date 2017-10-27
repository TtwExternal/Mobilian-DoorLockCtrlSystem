//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_template/doorlock/doorlock/deviceAdd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 도어락 장치 등록
 * 관리자만 사용 가능하다.
 * @class
 * @param {String} url js file url
 * @param {HTMLElement} $el_div 이 객체가 조작할 HTMLElement
 */
(function( url, $el_div ){

	"use_strict";

	//Extends;
	var _this = window.b2linkUIClass.container.ModalPanel( url, $el_div );

	//ModalPanel을 상속받은 HTMLElement에 ModalPanel 특성의 Local Label을 적용한다. (())로 이루어진 ModalPanel 전용 Local Label을 변환한다.;
	window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel( $el_div );

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
	 * input type elements( <input>가 아님 값을 입력할 수 있는 HTMLElement )
	 * @property {Object}
	 */
	var _els__input = {

		//MAC Address;
		addr_mac : _this.$f0( $el_div, "addr_mac" )

		//Device Create Date(Y, M, D, HO, MI, SE) HTMLInputElements;
		, date_device_create : {
			y : _this.$f0( $el_div, "date_year" )
			, m : _this.$f0( $el_div, "date_month" )
			, d : _this.$f0( $el_div, "date_day" )
			, ho : _this.$f0( $el_div, "date_ho" )
			, mi : _this.$f0( $el_div, "date_mi" )
			, se : _this.$f0( $el_div, "date_se" )
		}
	};

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
	 * @function
	 * @return {Boolean}
	 */
	var _checkEmptyInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _checkEmptyInputElements():{Boolean}----------" );

		var f = window.b2link_ui.message.error;

		if( "" == _els__input.addr_mac.value ){ f( "Please enter MAC address." ); return 0; }

		var d = _els__input.date_device_create;
		if( "" == d.y.value ){ f( "Please enter Year." ); return 0; }
		if( "" == d.m.value ){ f( "Please enter Month." ); return 0; }
		if( "" == d.d.value ){ f( "Please enter Day." ); return 0; }
		//if( "" == d.ho.value ){ f( "Please enter Hour." ); return 0; }
		//if( "" == d.mi.value ){ f( "Please enter Minute." ); return 0; }
		//if( "" == d.se.value ){ f( "Please enter Seconds." ); return 0; }
		//if( "" == d.mil.value ){ f( "Please enter Year." ); return 0; }

		window.TtwLog.timeStamp( "-- [ S ] - _checkEmptyInputElements():{Boolean}----------return 1;" );
		return 1;
	};

	/**
	 * DataInput 타입의 HTMLElement 들의 값을 Validation 한다.
	 * @function
	 * @return {Boolean}
	 */
	var _checkValidationInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _checkValidationInputElements():{Boolean}----------" );

		var f = window.b2link_ui.message.error;

		//Validation - MAC Address;
		if( !window.b2link.validation_input.addr_mac( _els__input.addr_mac.value ) ){ f( "MAC address is not valid" ); return 0; }

		//Validation - Object Type Date;
		if( !window.b2link.validation_date.dateObject__YMDHoMiSe( window.b2link.date.getDateObjectFromInputsObject( _els__input.date_device_create ) ) ) return 0;

		window.TtwLog.timeStamp( "-- [ E ] - _checkValidationInputElements():{Boolean}----------return 1;" );
		return 1;
	};

	/**
	 * 입력 HTMLElements 들의 value를 초기화 한다.
	 * @function
	 */
	var _clearDataInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _clearDataInputElements():void----------" );

		window.b2link.element.clearElementsValue( _els__input, "" );

		window.TtwLog.timeStamp( "-- [ E ] - _clearDataInputElements():void----------" );
	};

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

	/**
	 * deviceAdd 요청 결과로 후처리를 행하는 함수
	 * @function
	 * @param
	 */
	var _res = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res():void----------" );

		if( !window.b2link.response.getResultStatus( result ) )
		{
			window.b2link_ui.message.error( "ERROR CODE : " + result.r );

			//*/
			window.b2link.ui_modal.move_ContentChildrenToBGContent();
			var a = window.smt_ui.message.error.modal();
			var el = a[ 0 ];
			var ec = a[ 1 ];
				ec.headerText = "장치 등록 실패";
				ec.messageText = "ERROR CODE : " + result.r
					+ "\nERROR MSG : " + result.m;
			//*/
		}
		else
		{
			window.b2link_ui.message.message( "장치 등록 성공" );

			//*/
			window.b2link.ui_modal.move_ContentChildrenToBGContent();
			var a = window.smt_ui.message.success.modal();
			var el = a[ 0 ];
			var ec = a[ 1 ];
				ec.headerText = "장치 등록 성공";
				ec.messageText = "RESULT CODE : " + result.r
					+ "\nERROR MSG : " + result.m;
			//*/

			_clearDataInputElements();
		}

		window.TtwLog.timeStamp( "-- [ E ] - _res():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	/**
	 * @function
	 * @return {Object}
	 * <code>
		{
			//MAC Address;
			"addr_mac" : ""

			//Device Create Date(Y, M, D, HO, MI, SE) HTMLInputElements;
			, "date_device_create" : ""//Date.toISOString;
		}
	 * </code>
	 */
	var _getDataForRequest = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getDataForRequest():{Object}----------" );

		var r = {
			//MAC Address;
			addr_mac : _els__input.addr_mac.value

			//Device Create Date - Date.toISOString;
			, date_device_create : window.b2link.date.getISOStringFromDateObject( window.b2link.date.getDateObjectFromInputsObject( _els__input.date_device_create ) )
		};

		window.TtwLog.timeStamp( "-- [ E ] - _getDataForRequest():{Object}----------return r;" );
		return r;
	};

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * </code>
	 */
	var _setData = function( d )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData():void----------" );
		window.TtwLog.timeStamp( "-- [ E ] - _setData():void----------" );
	};
	_setData.super = _this.setData;//override;

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

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


	//----------;
	_addEvent();
	_setPosition();
	//----------;

	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

		//장치 등록 요청;
		f0( "btn-Submit", function( e ){ if( "click" != e.type ) return;

			if( !_checkEmptyInputElements() )//필수값 확인;
				return;

			if( _checkValidationInputElements() )//validation;
				window.service_doorlock.doorlock.deviceAdd( _getDataForRequest(), _res );
		});

		//장치 등록 화면 취소;
		f0( "btn-Cancel", function( e ){ if( "click" != e.type ) return;
			_clearDataInputElements();//입력 HTMLElements 들의 value를 초기화 한다.;
			_this.hideAndModal();//Signin View를 숨긴다.;
		});

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f1 = _this.addEventCallBackFunction__EventType;

	//--------------------------------------------------;


	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
});