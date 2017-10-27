//----------------------------------------------------------------------------------------------------;
//var fileNm = "./ui/member/common/sign_in.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {String} $el_div
 */
(function( url, $el_div ){

	//----------------------------------------------------------------------------------------------------;

	var LOCALE_LABEL = window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( url );

	//----------------------------------------------------------------------------------------------------;

	//Extends;
	//var _this = window.b2linkUIClass.container.ModalPanel( url, $el_div );
	var _this = window.b2linkUIClass.container.Layout( url, $el_div );

	//class="a-flag"인 <a>들에게 LOCALE_LABEL을 적용;
	var a = $el_div.getElementsByClassName( "a-flag" );var i=0, iLen=a.length;for( ; i<iLen; ++i ) a[ i ].outerHTML = STtwUtilString.applyParenthesesStrFromObj( a[ i ].outerHTML, LOCALE_LABEL );

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

	/**
	 * input type elements( <input>가 아님 값을 입력할 수 있는 HTMLElement )
	 * @property {Object}
	 */
	var _els__input = {

		mid : _this.$f0( $el_div, "input-mid" )//member id;

		, mpw : _this.$f0( $el_div, "input-mpw" )//member password;
	};

	/**
	 * @Property {Function} function( result ){}
	 */
	var _evt_Complete__SignIn;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

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

		_setPosition();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION - 알파벳 순 정렬;
	//	- Common Interface
	//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 입력 HTMLElements 들의 value를 초기화 한다.
	 * @function
	 */
	var _clear_HTMLElement_value__els__input = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _clear_HTMLElement_value__els__input():void----------" );

		window.b2link.element.clearElementsValue( _els__input, "" );

		window.TtwLog.timeStamp( "-- [ E ] - _clear_HTMLElement_value__els__input():void----------" );
	};

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

		_els__input.mid = null;
		_els__input.mpw = null;
		_els__input = null;

		_evt_Complete__SignIn = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _init = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _init():void----------" );

		if( localStorage.chkbx == 1 )
		{
			_this.$f0( $el_div, "input-remember" ).checked = true;
			_this.$f0( $el_div, "input-mid" ).value = localStorage.usrname;
			_this.$f0( $el_div, "input-mpw" ).value = localStorage.pass;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _init():void----------" );
	};

	/**
	 * Signin 요청 결과로 후처리를 행하는 함수
	 * @function
	 * @param {*} result
	 */
	var _res = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res():void----------" );

		if( window.b2link.response.getResultStatus( result ) )
		{
			_setCookie();
			_this.hide( true );

			if( _evt_Complete__SignIn ) _evt_Complete__SignIn( result );

			//window.service_member.common.sign_in에서 발생 중;
			//window.b2link_ui.message.message( "Signin Success" );
			//window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );
		}
		else
		{
			//window.service_member.common.sign_in에서 구동;
			//window.b2link.log.error__Signin_failure();
			//window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, null );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _res():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * 사용자가 입력하여야 하는 입력값들을 검증한다.
	 * @function
	 * @return {Boolean}
	 */
	var _validation_HTMLElement_value__els__input = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _validation_HTMLElement_value__els__input():{Boolean}----------" );

		var f0 = window.b2link_ui.message.alert;

		var t = _els__input;
		var t0;

		var r;

		//<input> - mid;
		r = window.b2link.validation_input.id_emailType( t.mid.value ); if( !r.r ){ f0( r.m ); return 0; };

		//<input> - mpw - Password;
		//r = window.b2link.validation_input.password( t.mpw.value ); if( !r.r ){ f0( r.m ); return 0; };

		window.TtwLog.timeStamp( "-- [ E ] - _validation_HTMLElement_value__els__input():{Boolean}----------" );
		return 1;
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;
	//	- Common Interface
	//	_setData : 이 객체가 정상적으로 작동되기 위한 값들을 주입 받는 다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	/**
	 * 입력 HTMLElements 들의 value를 가져온다.
	 * @function
	 * @return {Object}
	 */
	var _get_HTMLElement_value__els__input = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _get_HTMLElement_value__els__input():{Object}----------" );

		var d = window.b2link.element.getElementsValue( _els__input );//target Object 구조 그대로 HTMLElement Reference를 HTMLElement value로 만들어서 리턴한다.;

		window.TtwLog.timeStamp( "-- [ E ] - _get_HTMLElement_value__els__input():{Object}----------return d;" );
		return d;
	};

	//--------------------------------------------------SET;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		var t = $el_div;

		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		//window.b2link.element.setPosition_LeftBottom( t, 10, 10 );
		//window.b2link.element.setPosition_LeftTop( t, 10, 10 );
		//window.b2link.element.setPosition_RightBottom( t, 10, 10 );
		//window.b2link.element.setPosition_RightTop( t, 10, 10 );

		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

	/**
	 * @function
	 */
	var _setCookie = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setCookie():void----------" );

		if( _this.$f0( $el_div, "input-remember" ).checked )
		{
			localStorage.usrname = _this.$f0( $el_div, "input-mid" ).value;
			localStorage.pass = _this.$f0( $el_div, "input-mpw" ).value;
			localStorage.chkbx = 1;
		}
		else
		{
			localStorage.usrname = "";
			localStorage.pass = "";
			localStorage.chkbx = 0;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _setCookie():void----------" );
	};

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	/**
	 * @function
	 * @return {Function}
	 */
	_this.__defineGetter__( "evt_Complete__SignIn", function(){ return _evt_Complete__SignIn; } );
	_this.__defineSetter__( "evt_Complete__SignIn", function( fn ){ _evt_Complete__SignIn = fn; } );

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


	//----------;
	_addEvent();
	_setPosition();
	_init();
	//----------;


	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup, ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

		////Signin 취소;
		//f0( "btn-cancel", function( e ){ if( "click" != e.type ) return;
		//_clear_HTMLElement_value__els__input();//입력 HTMLElements 들의 value를 초기화 한다.;
		//_this.hideAndModal();//Signin View를 숨긴다.;
		//} );

		f0( "label-remember", function( e ){
			_this.$f0( $el_div, "input-remember" ).checked = !_this.$f0( $el_div, "input-remember" ).checked;
		});

		f0( "forgot", function( e ){
			window.b2link_ui.message.alert( "개발 예정입니다. 담당자에게 문의해주세요." );
		});

		f0( "btn-signup", window.ui_member.public.sign_up.modal );

		//Signin 요청;
		f0( "btn-sign_in", function( e ){ if( "click" != e.type ) return;
			//Input 값 Validation;
			if( _validation_HTMLElement_value__els__input() )
				//window.service_member.common.sign_in( _get_HTMLElement_value__els__input(), _res );
				window.service_member.common.sign_in__multi( _get_HTMLElement_value__els__input(), _res );
				//window.service_member.common.sign_in__single( _get_HTMLElement_value__els__input(), _res );
		});

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	//var f1 = _this.addEventCallBackFunction__EventType;
	//--------------------------------------------------;


	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

		_.__el = $el_div;

		_.clear_HTMLElement_value__els__input = _clear_HTMLElement_value__els__input;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
});