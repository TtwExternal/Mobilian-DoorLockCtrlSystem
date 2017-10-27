//----------------------------------------------------------------------------------------------------;
//var fileNm = "./ui/b2link_member/sign_up.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @class
 * @param {String} url js file url
 * @param {HTMLDIVElement} $el_div 이 객체가 조작할 HTMLElement
 */
(function( url, $el_div ){

	//Extends;
	var _this = window.b2linkUIClass.container.ModalPanel( url, $el_div );

	//ModalPanel을 상속받은 HTMLElement에 ModalPanel 특성의 Local Label을 적용한다. (())로 이루어진 ModalPanel 전용 Local Label을 변환한다.;
	window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel( $el_div );

	//alert;
	window.b2linkExtends.injection.locale_alert( $el_div, _this );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * 아이디 중복체크
	 * @property {Boolean}
	 */
	var _bCheckOverlap = 0;

	/**
	 * 회원아이디
	 * @property {HTMLElement}
	 */
	var _el_input__mid = _this.$f0( $el_div, "mid" );

	/**
	 * 이메일 아이디
	 * @property {HTMLElement}
	 */
	//var _el_input__email_id = _this.$f0( $el_div, "email_id" );

	/**
	 * 이메일 도메인
	 * @property {HTMLElement}
	 */
	//var _el_input__email_domain = _this.$f0( $el_div, "email_domain" );

	/**
	 * 비밀번호
	 * @property {HTMLElement}
	 */
	var _el_input__password = _this.$f0( $el_div, "password" );

	/**
	 * 비밀번호 확인
	 * @property {HTMLElement}
	 */
	var _el_input__password_confirm = _this.$f0( $el_div, "password_confirm" );

	/**
	 * 이름 성
	 * @property {HTMLElement}
	 */
	var _el_input__nm_l = _this.$f0( $el_div, "nm_l" );

	/**
	 * 이름 이름
	 * @property {HTMLElement}
	 */
	var _el_input__nm_f = _this.$f0( $el_div, "nm_f" );

	/**
	 * 휴대전화번호
	 * @property {HTMLElement}
	 */
	var _el_input__num_phone_cell0 = _this.$f0( $el_div, "num_phone_cell0" );

	/**
	 * 휴대전화번호
	 * @property {HTMLElement}
	 */
	var _el_input__num_phone_cell1 = _this.$f0( $el_div, "num_phone_cell1" );

	/**
	 * 휴대전화번호
	 * @property {HTMLElement}
	 */
	var _el_input__num_phone_cell2 = _this.$f0( $el_div, "num_phone_cell2" );

	/**
	 * 휴대전화번호
	 * @property {HTMLElement}
	 */
	var _el_input__num_phone_cell3 = _this.$f0( $el_div, "num_phone_cell3" );

	/**
	 * 휴대전화번호
	 * @property {HTMLElement}
	 */
	var _el_input__checkbox__terms_agree = _this.$f0( $el_div, "checkbox__terms_agree" );//이용약관 동의;

	/**
	 * 사용자 등급 코드
	 * @property {HTMLElement}
	 */
	var _el_input__input__cd$authority_code = _this.$f0( $el_div, "input-cd$authority_code" );//사용자 등급 코드;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//----------------------------------------------------------------------------------------------------;

	// EVENT;

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

	// FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * 필수값 확인
	 * @function
	 * @return {Boolean}
	 */
	var _checkEmptyInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _checkEmptyInputElements():void----------" );

		if( _el_input__mid.value == "" )//아이디;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__mid );
			return 1;
		}

		/*/
		if( _el_input__email_id.value == "" )//이메일 아이디;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__email_id );
			return 1;
		}
		if( _el_input__email_domain.value == "" )//이메일 도메인;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__email_domain );
			return 1;
		}
		//*/

		if( _el_input__password.value == "" )//비밀번호;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__password );
			return 1;
		}
		if( _el_input__password_confirm.value == "" )//비밀번호 확인;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__password_confirm );
			return 1;
		}

		if( _el_input__nm_l.value == "" )//성;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__nm_l );
			return 1;
		}

		if( _el_input__nm_f.value == "" )//이름;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__nm_f );
			return 1;
		}

		if( _el_input__num_phone_cell0.value == "" )//휴대폰;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__num_phone_cell0 );
			return 1;
		}

		if( _el_input__num_phone_cell1.value == "" )//휴대폰;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__num_phone_cell1 );
			return 1;
		}

		if( _el_input__num_phone_cell2.value == "" )//휴대폰;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__num_phone_cell2 );
			return 1;
		}

		if( _el_input__num_phone_cell3.value == "" )//휴대폰;
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__num_phone_cell3 );
			return 1;
		}

		if( !_el_input__checkbox__terms_agree.checked )
		{
			window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__checkbox__terms_agree );
			return 1;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _checkEmptyInputElements():boolean----------return false" );
		return 0;
	};

	/**
	 * 입력 HTMLElements 들의 value를 초기화 한다.
	 * @function
	 */
	var _clearDataInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _clearDataInputElements():void----------" );

		_bCheckOverlap = 0;
		_el_input__mid.value = "";
		//_el_input__email_id.value = "";
		//_el_input__email_domain.value = "";
		//_el_input__password.value = "";
		//_el_input__password_confirm.value = "";
		_el_input__nm_l.value = "";
		_el_input__nm_f.value = "";
		_el_input__num_phone_cell0.value = "";
		_el_input__num_phone_cell1.value = "";
		_el_input__num_phone_cell2.value = "";
		_el_input__num_phone_cell3.value = "";
		_el_input__checkbox__terms_agree.checked = false;

		window.TtwLog.timeStamp( "-- [ E ] - _checkEmptyInputElements():boolean----------return false" );
	};

	/**
	 * validation
	 * @function
	 * @return {Boolean}
	 */
	var _checkValidationInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _checkValidationInputElements():{Boolean}----------" );

		var f = window.b2link_ui.message.alert;

		//아이디 중복체크;
		if( !_bCheckOverlap ){ f( _this.$locale.alert.plz_enter_all_infomation__checkOverlap ); return 0; }

		var r;

		//비밀번호 확인;
		r = window.b2link.validation_input.password( _el_input__password.value, _el_input__password_confirm.value );
		if( !r.r ){ f( r.m ); return 0; }

		//핸드폰번호 확인;
		r = window.b2link.validation_input.phone_cell( _el_input__num_phone_cell0.value, _el_input__num_phone_cell1.value, _el_input__num_phone_cell2.value, _el_input__num_phone_cell3.value );
		if( !r.r ){ f( r.m ); return 0; }

		window.TtwLog.timeStamp( "-- [ E ] - _checkValidationInputElements():{Boolean}----------return 1;" );
		return 1;
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

		_dispose.super();

		$el_div.remove();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * 회원등록 요청
	 * @function
	 */
	var _req_Data__insert = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data__insert():void----------" );

		var d = _getDataForQuery();
		window.service_member.public.sign_up( d, _res_Data__insert );

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data__insert():void----------" );
	};

	/**
	 * 회원등록 응답
	 * @function
	 * @param {*} result
	 */
	var _res_Data__insert = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res_Data__insert():void----------" );

		if( window.b2link.response.getResultStatus( result ) )
		{
			_clearDataInputElements();

			_this.hideAndModal();
			window.b2link_ui.message.alert( _this.$locale.alert.succ );

			//if( _evt_Complete__SignIn ) _evt_Complete__SignIn( result );

			//window.b2link.event.dispatchCE__SIGN_UP_SUCCESS( window, null );
		}
		else
		{
			window.b2link_ui.message.alert( _this.$locale.alert.fail );
			//window.b2link.event.dispatchCE__SIGN_UP_FAILURE( window, null );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _res_Data__insert():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * 중복확인 요청
	 * @function
	 */
	var _req_Data__checkOverlap = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data__checkOverlap():void----------" );

		var d = _getDataForQuery();
		window.service_member.public.sign_up__checkOverlap( d, _res_Data__checkOverlap );

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data__checkOverlap():void----------" );
	};

	/**
	 * 중복확인 응답
	 * @function
	 */
	var _res_Data__checkOverlap = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res_Data__checkOverlap():void----------" );

		if( result )
		{
			window.b2link_ui.message.alert( _this.$locale.alert.unavailable__mid );
			_bCheckOverlap = 0;
		}
		else
		{
			window.b2link_ui.message.alert( _this.$locale.alert.available__mid );
			_bCheckOverlap = 1;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _res_Data__checkOverlap():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;
	//	- Common Interface
	//	_setData : 이 객체가 정상적으로 작동되기 위한 값들을 주입 받는 다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	/**
	 * 회원 가입을 위한 데이터 가져오기
	 * @function
	 * @return {Object}
	 */
	var _getDataForQuery = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getDataForQuery():void----------" );

		var d = {
			bConn : 0
			, mid : _el_input__mid.value

			/*/
			, email : _el_input__email_id.value + "@" + _el_input__email_domain.value
			/*/
			, email : _el_input__mid.value
			//*/

			, mpw : _el_input__password.value

			, nm : {
				a : _el_input__nm_l.value + _el_input__nm_f.value
				, f : _el_input__nm_f.value
				, l : _el_input__nm_l.value
			}
			, phone_cell : {
				f : "+" + _el_input__num_phone_cell0.value
						+ "-" + _el_input__num_phone_cell1.value
						+ "-" + _el_input__num_phone_cell2.value
						+ "-" + _el_input__num_phone_cell3.value
				, c : _el_input__num_phone_cell0.value
				, a : _el_input__num_phone_cell1.value
				, n0 : _el_input__num_phone_cell2.value
				, n1 : _el_input__num_phone_cell3.value
			}
			, phone_tel : {}

			, cd$authority_code : _el_input__input__cd$authority_code.value
		};

		window.TtwLog.timeStamp( "-- [ E ] - _getDataForQuery():void----------" );
		return d;
	};

	//--------------------------------------------------SET;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		/*/
		var t = $el_div;
		window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		//*/

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
	//_setPosition();
	//----------;

	//--------------------------------------------------[ S ] - Semantic-UI & jQuery Module Initialize;

	$( ".ui.dropdown" ).dropdown();

	//--------------------------------------------------[ E ] - Semantic-UI & jQuery Module Initialize;


	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup, ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

		//중복 체크;
		f0( "btn-check_overlap", function( e ){ if( "click" != e.type ) return;

			if( _el_input__mid.value == "" )//아이디;
			{
				window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__mid );
				return;
			}

			if( !_el_input__checkbox__terms_agree.checked )
			{
				window.b2link_ui.message.alert( _this.$locale.alert.plz_enter_all_infomation__checkbox__terms_agree );
				return;
			}

			_req_Data__checkOverlap();
		});

		//회원 가입 요청;
		f0( "btn-Submit", function( e ){ if( "click" != e.type ) return;

			if( _checkEmptyInputElements() )//필수값 확인;
				return;

			if( _checkValidationInputElements() )//validation;
				_req_Data__insert();
		});

		//회원 가입 화면 취소;
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