//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_template/member/member_basic/userManagement.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 사용자 관리 화면
 * 사용자 등록/수정/삭제 등
 * 관리자만 사용 가능하다.
 * @class
 * @param {String} url js file url
 * @param {HTMLElement} $el_div 이 객체가 조작할 HTMLElement
 */
(function( url, $el_div ){

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
		cd$authority_code : _this.$f0( $el_div, "input-cd$authority_code" )
		, email : _this.$f0( $el_div, "input-search_value" )
		, mid : _this.$f0( $el_div, "input-search_value" )
		, "nm.a" : _this.$f0( $el_div, "input-search_value" )
	};

	/**
	 * 검색 대상 필드
	 * @property {HTMLElement}
	 */
	var _el_input__SearchField = _this.$f0( $el_div, "input-search_field" );

	/**
	 * member_basic Table 및 Table Navigator의 Reference가 존재하는 구조체
	 * @structure
	 * @property {Object}
	 * <code>
		{
		}
	 * </code>
	 */
	var _el_table__member_basic = {
		table : _this.$f0( $el_div, "table$member_basic" )
		, tbody : _this.$f0( $el_div, "tbody$member_basic" )

		, tableNavigator : _this.$f0( $el_div, "navigator-Num$member_basic" )//Table의 Page Navigator DIV;
		, tableParent : _this.$f0( $el_div, "field$table$member_basic" )

		//UI 구성 참조 프로퍼티;
		, N_LIMIT : 10//현재 화면에 표시할 회원 목록의 갯수;
		, N_SKIP : 0//현재 화면에 표시할 회원 목록의 시작 번호;
		, N_MAX_COUNT : -1//회원 목록 최대 갯수;

		, N_NAVI : 0//회원 목록의 현재 페이지 네비게이터 번호;
		, N_NAVI_MAX_COUNT : -1//회원 목록의 최대 페이지 네비게이터 갯수;
		//, N_NAVI_VIEW_COUNT : 5//현재 페이지 네비게이터 표출할 갯수;
		, N_NAVI_VIEW_COUNT : 10//현재 페이지 네비게이터 표출할 갯수;
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	API - Navigator;
	//	API - Table;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var API_OBJECTS = window.mobilianUIClass.table.TableAndNavigator();

	/**
	 * Navigator을 조작하는 함수를 모은 구조체
	 * @property {Object}
	 */
	var _api_navigator = API_OBJECTS._api_navigator;

	/**
	 * Table을 조작하는 함수를 모은 구조체
	 * @property {Object}
	 */
	var _api_table = API_OBJECTS._api_table;

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
	 * 입력 HTMLElements 들의 value를 초기화 한다.
	 * @function
	 */
	var _clearDataInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _clearDataInputElements():void----------" );

		window.b2link.element.clearElementsValue( _els__input, "" );

		$( ".ui.dropdown" ).dropdown( "clear" );

		window.TtwLog.timeStamp( "-- [ E ] - _clearDataInputElements():void----------" );
	};

	//--------------------------------------------------;

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

	//--------------------------------------------------;

	/**
	 * 화면 구성요소를 초기화 한다.
	 * @function
	 */
	var _initialize = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _initialize():void----------" );

		//입력 HTMLElements 들의 value를 초기화 한다.;
		_clearDataInputElements();

		//회원 목록을 0번째로 설정한다;
		_el_table__member_basic.N_SKIP = 0;

		//----------;
		//검색조건에 기반한 회원 목록 수량을 요청한다.;
		_req_count__member_basic();

		//검색조건에 기반한 회원 목록 검색을 요청한다.;
		_req_searchList__member_basic();
		//----------;

		window.TtwLog.timeStamp( "-- [ E ] - _initialize():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * 검색조건에 기반한 회원 목록 수량을 요청한다.
	 * @function
	 */
	var _req_count__member_basic = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_count__member_basic():void----------" );

		//조건에 맞는 member_basic 수량 요청하기;
		window.service_member.member_basic.getCount( _getRequestParameters(), _req_count__member_basic._res );

		window.TtwLog.timeStamp( "-- [ E ] - _req_count__member_basic():void----------" );
	};
	_req_count__member_basic._res = function( result ){

		var r = window.b2link.response.getResultStatus( result );
		if( !r )
		{
			var a = window.smt_ui.message.error.modal();
			var el = a[ 0 ];
			var ec = a[ 1 ];
				ec.headerText = "회원 목록 수 검색 에러";
				ec.messageText = result.data;

			return;
		}

		var t = _el_table__member_basic;

		//회원 목록 최대 갯수;
		var n = t.N_MAX_COUNT = Number( result.data );

		//회원 목록의 최대 페이지 네비게이터 갯수;
		t.N_NAVI_MAX_COUNT = Math.round( n / t.N_LIMIT );

		//Table의 Numbering Navigator을 갱신한다.
		_api_navigator._draw_Table_Navigator( t.N_NAVI_MAX_COUNT );
	};

	/**
	 * 검색조건에 기반한 회원 목록 검색을 요청한다.
	 * @function
	 */
	var _req_searchList__member_basic = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_searchList__member_basic():void----------" );

		//조건에 맞는 member_basic 데이터 요청하기;
		window.service_member.member_basic.getSearchList( _getRequestParameters(), _req_searchList__member_basic._res );

		window.TtwLog.timeStamp( "-- [ E ] - _req_searchList__member_basic():void----------" );
	}
	_req_searchList__member_basic._res = function( result ){

		var r = window.b2link.response.getResultStatus( result );
		if( !r )
		{
			var a = window.smt_ui.message.error.modal();
			var el = a[ 0 ];
			var ec = a[ 1 ];
				ec.headerText = "회원 목록 검색 에러";
				ec.messageText = result.data;

			return;
		}

		//Table-TBody의 TR들을 갱신한다.;
		_api_table._draw_Table_TBody_TRs( result.data );

		//이 UI 객체의 사이즈와 이 UI 객체의 부모의 사이즈를 비교하여 중심에 배치 시킨다.;
		//window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( $el_div );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;

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

			//검색할 대상 선택 필드;
			d.search_field = _el_input__SearchField.value;

		window.TtwLog.timeStamp( "-- [ E ] - _get_HTMLElement_value__els__input():{Object}----------return d;" );
		return d;
	};

	/**
	 * @function
	 * @return {Object} d
	 * <code>
		{
			cd$authority_code : {Number}
			, search_field : ""

			, email : ""
			, mid : ""
			, nm.a : ""

			, query : {}
			, fields : {}
			, limit : {int}
			, skip : {int}
			, batchSize : {Number}
			, options : {}
		}
	 * </code>
	 */
	var _getRequestParameters = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getRequestParameters():{Object}----------;" );

		var t = _el_table__member_basic;

		//입력 HTMLElements 들의 value를 가져온다.;
		var d = _get_HTMLElement_value__els__input();

		var query = {};
			if( d.cd$authority_code ) query.cd$authority_code = Number( d.cd$authority_code );

			//*/
			if( d[ d.search_field ] )
			{
				query[ d.search_field ] = { $regex : '.*' + d[ d.search_field ] + '.*' };
			}
			/*/
			if( d.email ) query.email = d.email;
			if( d.mid ) query.mid = d.mid;
			if( d[ "nm.a" ] ) query[ "nm.a" ]  = d[ "nm.a" ];
			//*/

		var fields = d.fields || null;
		var limit = d.limit || t.N_LIMIT;//시작 데이터 순번 부터 10개;
		var skip = d.skip || t.N_SKIP;//시작 데이터 순번;
		var batchSize = d.batchSize || null;
		var options = d.options || null;

		window.TtwLog.timeStamp( "-- [ E ] - _getRequestParameters():{Object}----------return {};" );
		return {
			query : query
			, fields : fields
			, limit : limit
			, skip : skip
			, batchSize : batchSize
			, options : options
		};
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

	//필요한 Reference를 주입한다;
	_api_navigator._setReference({
		target : _el_table__member_basic
		, fn__reqData_Count : _req_count__member_basic
		, fn__reqData_List : _req_searchList__member_basic
	});

	//필요한 Reference를 주입한다;
	_api_table._setReference({
		target : _el_table__member_basic
	});


	//----------;
	_addEvent();
	_setPosition();
	//----------;

	//--------------------------------------------------[ S ] - Semantic-UI & jQuery Module Initialize;

	//$( ".menu .item" ).tab();
	$( ".ui.dropdown" ).dropdown();

	//--------------------------------------------------[ E ] - Semantic-UI & jQuery Module Initialize;

	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

		f0( "btn_Add", function( e ){
			var ui = window.ui_member.public.sign_up.modal();
			//var ui = window.ui_member.public.sign_up();
			var el = ui[ 0 ];//Element;
			var ec = ui[ 1 ];//Element's Controller;
			//if( ec.hideAndModal ) ec.hideAndModal();
			//if( ec.hide ) ec.hide();

			//$( "#div-member-public-sign_up" ).modal( "show" );
		});

		//입력 HTMLElements 들의 value를 초기화 한다.;
		f0( "btn_Clear", function( e ){ _clearDataInputElements(); });

		f0( "btn_Search", function( e ){

			//검색조건을 기반으로 검색한 후 첫번째 목록부터 보여주게 값 초기화;
			_el_table__member_basic.N_NAVI = 0;
			_el_table__member_basic.N_SKIP = 0;

			//검색조건에 기반한 회원 목록 수량을 요청한다.;
			_req_count__member_basic();

			//검색조건에 기반한 회원 목록 검색을 요청한다.;
			_req_searchList__member_basic();
		});

		//--------------------------------------------------;
		//네비게이터의 왼쪽 버튼 클릭시 작동;
		f0( "item$Navi$Left", _api_navigator._evt_mClick__Left );

		//네비게이터의 오른쪽 버튼 클릭시 작동;
		f0( "item$Navi$Right", _api_navigator._evt_mClick__Right );

		//네비게이터의 숫자 버튼 클릭시 작동;
		f0( "item$Number", _api_navigator._evt_mClick__NumberItem );
		//--------------------------------------------------;

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f1 = _this.addEventCallBackFunction__EventType;

	//--------------------------------------------------;

	//화면 구성요소를 초기화 한다.;
	_initialize();

	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
} );