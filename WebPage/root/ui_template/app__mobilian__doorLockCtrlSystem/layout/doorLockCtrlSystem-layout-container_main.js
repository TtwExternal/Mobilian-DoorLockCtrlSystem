//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_template/app__mobilian__doorLockCtrlSystem/layout/doorLockCtrlSystem-layout-container_main.js";
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

	/**
	 * @property {HTMLElement}
	 */
	var _el_article_right_container = _this.$f0( $el_div, "article-right-container" );

	/**
	 * @property {HTMLElement}
	 */
	var _el_article_top_container = _this.$f0( $el_div, "article-top-container" );
		var _els_menuItem = _el_article_top_container.getElementsByClassName( "item" );
		//----------[ S ] - 상단 메뉴 아이템의 초기 class 값 보관;
		var _classNames_menuItem_default = [];
		var i=0, iLen=_els_menuItem.length;
		for( ; i<iLen; ++i ) _classNames_menuItem_default[ i ] = _els_menuItem[ i ].className;
		//----------[ E ] - 상단 메뉴 아이템의 초기 class 값 보관;


	/**
	 * Main View 객체 공간
	 * @property {HTMLElement}
	 */
	var _el_div_ViewContainer = document.getElementById( "div-doorLockCtrlSystem-ViewContainer" );

	/**
	 * input Element 로그인한 사용자 이름
	 * @property {HTMLElement}
	 */
	//var _el_input__session_name = _this.$f0( $el_div, "input-member_nm" );

	//--------------------------------------------------;


	//----------------------------------------------------------------------------------------------------;

	//	MEMBER VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	API - Mobilian UI Class - GIS - DoorLockCtrlSystem;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @property {window.mobilianUIClass.gis.DoorlockCtrlSystem}
	 */
	var _api_gis;// = new window.mobilianUIClass.gis.doorlockCtrlSystem();

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
	 * 상단메뉴 클릭 시
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__topMenuItem = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__topMenuItem():void----------" );

		if( "click" != e.type ) return;

		var t = e.target;

		if( "A" != t.tagName ) return;

		//UI 대상 Container 교체;
		//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );
		window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Panel" );

		window.b2link.element.removeAllChildren( window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT );

		//메뉴 아이템 클릭된 상태 여부 변경;
		var bVisible = _evt_mClick__topMenuItem.__common_menuItem_ChangeActive( e );

		var v = t.classList[ 0 ];//Element's First className;

		var ui = _evt_mClick__topMenuItem[ v ]( e );
		if( !ui )
		{
			window.b2link_ui.message.error( "미구현 UI 버튼" );
			return;
		}

		var uiel = ui[ 0 ];//UI Element;
		var uiec = ui[ 1 ];//UI Element's Controller;

		if( "menuItem_DashBoard" == v )
		{
			window.b2link_ui.message.error( "지도는 on/off 하지 않음" );
			return;
		}

		window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( ui[ 0 ] );
		if( bVisible ) uiec.show();
		else
		{
			uiec.hide();
			window.b2link.element.removeChildFromParentElement( uiel );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__topMenuItem():void----------" );
	};
	//메뉴 아이템 클릭된 상태 여부 변경;
	_evt_mClick__topMenuItem.__common_menuItem_ChangeActive = function( e, className ){

		//클릭한 메뉴 class 정보 가져오기;
		var t = e.target;
		var className = t.classList[ 0 ] + " " + t.classList[ 1 ];
		var bActive = t.classList[ 2 ];
		if( "active" == bActive )
		{
			t.className = className;//menuItem_??? item;
			return 0;//Visible false;
		}
		else
		{
			//상단 메뉴 아이템의 초기 class 값 복원;
			var i=0, iLen=_els_menuItem.length;
			for( ; i<iLen; ++i ) _els_menuItem[ i ].className = _classNames_menuItem_default[ i ];

			//클릭한 메뉴 활성화 스타일 적용;
			t.className = className + " active";//menuItem_??? item active;
			return 1;//Visible true;
		}
	};
	//대쉬보드;
	_evt_mClick__topMenuItem.menuItem_DashBoard = function( e ){

		//UI 대상 Container 교체;
		window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );
		//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Panel" );

		var a = window.ui_gis.map_leaflet.google.basic();
		var el = a[ 0 ];
		var eC = a[ 1 ];

		//UI 대상 Container 교체;
		//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );
		window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Panel" );
		return a;
	};
	//장치 관리;
	_evt_mClick__topMenuItem.menuItem_DeviceManagement = function( e ){
		var a = window.ui_doorlock.doorlock.deviceManagement();
		var el = a[ 0 ];
		var eC = a[ 1 ];
		return a;
	};
	//통계;
	_evt_mClick__topMenuItem.menuItem_Statistics = function( e ){
		//var a = window.ui_gis.map_leaflet.google.basic();
		//var el = a[ 0 ];
		//var eC = a[ 1 ];
		//return a;
	};
	//사용자 관리;
	_evt_mClick__topMenuItem.menuItem_UserManagement = function( e ){
		var a = window.ui_member.member_basic.userManagement();
		var el = a[ 0 ];
		var eC = a[ 1 ];
		return a;
	};

//	/**
//	 * 상단메뉴 클릭 시
//	 * @function
//	 * @param {MouseEvent} e event
//	 */
//	var _evt_mClick__topmenuItem = function( e )
//	{
//		if( "click" != e.type ) return;
//
//		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__menuItem():void----------" );
//
//		var li = window.b2link.el_ul.getLIFromMouseClickEventTarget( e.target );
//		var data = li.list_item_value;
//
//		var f = data.callBack;
//
//		debugger;
//
//		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__menuItem():void----------" );
//	};


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

	/**
	 * 화면 구성요소를 초기화 한다.
	 * @function
	 */
	var _initialize = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _initialize():void----------" );


		//메뉴 목록 구조체 요청;
		//_req_Data__memberInfo();
		//_req_Data__topMenu();

		window.TtwLog.timeStamp( "-- [ S ] - _initialize():void----------" );
	};

	/**
	 * 지도 화면 컴포넌트를 초기화 한다.
	 * @function
	 */
	var _initialize__Map = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _initialize__Map():void----------" );

		//UI 대상 Container 교체;
		window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );
		//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Panel" );

		var t = _el_div_ViewContainer;

		//지도 화면 객체;
		var ui_map = window.ui_gis.map_leaflet.google.basic();
		var ui_map__el = ui_map[ 0 ];
		var ui_map__ctrl = ui_map[ 1 ];

		//지도를 정상적으로 띄우기 위한 이벤트 핸들러;
		var _evt_DOMNodeInserted = function( e ){
			t.removeEventListener( "DOMNodeInserted", _evt_DOMNodeInserted, false );
			setTimeout( function(){
				//지도 초기화;
				ui_map__ctrl.initialize();

				//지도 컨트롤 로직 Class에 지도 참조값 전달;
				_api_gis = new window.mobilianUIClass.gis.DoorlockCtrlSystem( ui_map__ctrl );

			}, 1000 );
		};

		t.removeEventListener( "DOMNodeInserted", _evt_DOMNodeInserted, false );
		t.addEventListener( "DOMNodeInserted", _evt_DOMNodeInserted, false, 0, true );
		t.appendChild( ui_map[ 0 ] );

		//UI 대상 Container 교체;
		//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );
		window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Panel" );

		window.TtwLog.timeStamp( "-- [ S ] - _initialize__Map():void----------" );
	};

//	/**
//	 * 메뉴 목록 구조체 요청
//	 * @function
//	 */
//	var _req_Data__topMenu = function()
//	{
//		window.TtwLog.timeStamp( "-- [ S ] - _req_Data__topMenu():void----------" );
//
//		//메뉴 목록 구조체 요청;
//		window.doorLockCtrlSystem.service.getMenuContents( _res_Data__topMenu );
//
//		window.TtwLog.timeStamp( "-- [ E ] - _req_Data__topMenu():void----------" );
//	};

//	/**
//	 * 메뉴 목록 구조체 요청 응답
//	 * @function
//	 * @param {Array} data
//	 */
//	var _res_Data__topMenu = function( data )
//	{
//		window.TtwLog.timeStamp( "-- [ S ] - _res_Data__topMenu():void----------" );
//
//		_draw( data );
//
//		window.TtwLog.timeStamp( "-- [ E ] - _res_Data__topMenu():void----------" );
//	};

//	var _draw = function( data )
//	{
//		window.TtwLog.timeStamp( "-- [ S ] - _draw():void----------" );
//
//		var f0 = window.b2link.html_div.apply_child;
//		var f1 = window.b2link.element.injectValueForListItemsAndIDX;
//
//		var _el_ul__topmenu_list = _this.$f0( _el_article_top_container, "ul-topmenu-list" );
//		f0( _el_ul__topmenu_list, data );
//		f1( _el_ul__topmenu_list, data );
//
//		if( data )
//		{
//			/*/
//			var i=0, iLen=data.length;
//			var io;//data[ i ];
//			for( ; i<iLen; ++i )
//			{
//				io = data[ i ];
//			}
//			//*/
//		}
//
//		window.TtwLog.timeStamp( "-- [ E ] - _draw():void----------" );
//	};

	/**
	 * 회원정보 요청
	 * @function
	 */
	var _req_Data__memberInfo = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data__memberInfo():void----------" );

		window.b2link_service_member.member_public.getProp_NameFrom_idFromsid( _res_Data__memberInfo );

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data__memberInfo():void----------" );
	};

	/**
	 * 회원정보 응답
	 * @function
	 */
	var _res_Data__memberInfo = function( data )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res_Data__memberInfo():void----------" );

		_el_input__session_name.value = data;

		window.TtwLog.timeStamp( "-- [ E ] - _res_Data__memberInfo():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

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

	//화면 구성요소를 초기화 한다;
	_initialize();

	//지도 화면 컴포넌트를 초기화 한다;
	_initialize__Map();
	//----------;

	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

		f0( "a-signout", function( e ){ if( "click" != e.type ) return;
			try
			{
				window.service_member.common.sign_out( window.b2link.session.getSession(), function(){
					_this.hide();//B2Ker Main 화면 숨김;

					//UI 대상 Container 교체;
					//window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );

					var o = window.ui_member.common.sign_in();//SIGN IN 화면;
					var el = o[ 0 ];//HTMLElement;
					var elc = o[ 1 ];//HTMLElement's Controller;

					el.addEventListener( window.b2link.event.HIDED_EL, function(){
						el.removeEventListener( window.b2link.event.HIDED_EL, arguments.callee, false );
						var s = window.b2link.session.getSession();//세션 정보;
						if( !s.sid )
						{
							window.b2link_ui.message.error( "SIGN IN이 필요합니다." );
							//다시 SIGN IN  화면;
							window.ui_member.common.sign_in();
							return;
						}

						//B2Ker Main 화면 - UI 대상 Container 교체;
						window.b2ker.ui_layout.container_main();
					}, false, 0, true );

				});
			}
			catch( er )
			{
				window.b2link_ui.message.error( "a-signout Error : " + er );
			}
		});

		//Element.className으로 callback 등록;
		//f0( "evt_mClick_add--div-content-info-etc", function( e ){} );

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f1 = _this.addEventCallBackFunction__EventType;

		//상단메뉴 - 목록 - 클릭;
		f1( "evt_mClick--article-top-container", _evt_mClick__topMenuItem );

		//상단메뉴 - 목록 - 클릭;
		//f1( "evt_mClick__topmenuItem", _evt_mClick__topmenuItem );

	//--------------------------------------------------;


	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
} );