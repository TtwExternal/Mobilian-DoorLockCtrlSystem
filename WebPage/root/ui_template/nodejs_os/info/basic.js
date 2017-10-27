//----------------------------------------------------------------------------------------------------;
//var fileNm = "./ui/nodejs_os/info/basic.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {String} $el_div
 */
(function( url, $el_div ){
	//Extends;
	var _this = window.b2linkUIClass.container.ModalPanel( url, $el_div );

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRE;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var _os = require( "os" );

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
	 * 자동갱신 여부 체크 박스
	 * @property {HTMLElement}
	 */
	var _el__input__checkbox__auto_reload = _this.$f0( $el_div, "input-checkbox-auto_reload" );

	/**
	 * 자동 갱신 시간(초)
	 * @property {HTMLElement}
	 */
	var _el__input__time_reload = _this.$f0( $el_div, "input-time_reload" );


	/**
	 * @property {HTMLElement}
	 */
	var _el__section_properties = _this.$f0( $el_div, "section-properties" );

	/**
	 * @property {HTMLElement}
	 */
	var _el__section_properties_cpus = _this.$f0( $el_div, "section-properties-cpus" );

	/**
	 * @property {HTMLElement}
	 */
	var _el__section_properties_networkInterfaces = _this.$f0( $el_div, "section-properties-networkInterfaces" );
		_el__section_properties_networkInterfaces.__originalInnerHTML = _el__section_properties_networkInterfaces.innerHTML;
		_el__section_properties_networkInterfaces.innerHTML = "";

	/**
	 * @property {HTMLElement}
	 */
	var _el__textarea_info = _this.$f0( $el_div, "textarea-info" );

	/**
	 * @property {HTMLElement}
	 */
	var _el__ul__cpus = _this.$f0( $el_div, "ul-cpus" );

	/**
	 * @property {int}
	 */
	var _interval_reload = -1;

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

	//--------------------------------------------------;

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
	 * @function
	 */
	var _draw_info__os = function()
	{
		var f1 = _draw_info__os.__f0;
			f1( "EOL" );
			f1( "arch" );
			//f1( "cpus" );
			f1( "endianness" );
			f1( "freemem" );
			//f1( "getNetworkInterfaces" );
			f1( "homedir" );
			f1( "hostname" );
			f1( "loadavg" );
			//f1( "networkInterfaces" );
			f1( "platform" );
			f1( "release" );
			f1( "tmpDir" );
			f1( "tmpdir" );
			f1( "totalmem" );
			f1( "type" );
			f1( "uptime" );
			//f1( t0, t1, "userInfo" );

		_draw_info__os._cpus( "cpus" );
		_draw_info__os._networkInterfaces();
		_draw_info__os._userInfo();
	};
	_draw_info__os.__f0 = function( k ){
		var f0 = _this.$f0;

		if( !_os.hasOwnProperty( k ) )
		{
			global.TtwLog.error( k + "는 존재하지 않는 Property" );
			return;
		}

		var t2 = f0( _el__section_properties, k );//li;
		var t3 = t2.children[ 1 ];//li의 2번째 자식 객체;

		if( "function" == typeof( _os[ k ] ) )
		{
			var d0 = _os[ k ]();
			t3.innerText = d0;
		}
		else if( _os[ k ].hasOwnProperty( "pop" ) )//Array;
		{

		}
		else if( "object" == typeof( _os[ k ] ) )//Object;
		{
			debugger;
		}
	};
	_draw_info__os._cpus = function(){
		var t2 = _this.$f0( _el__section_properties, "cpus" );//li;
		var t3 = t2.children[ 1 ];//li의 2번째 자식 객체;

		var a0 = _os.cpus();
		_draw_info__os._cpus._count = a0.length;
		t3.innerText = _draw_info__os._cpus._count + " N";
		window.b2link.html_ul.apply_child( _el__ul__cpus, a0 );

		_draw_info__os._cpus._a__times_idle = _el__ul__cpus.getElementsByClassName( "times-idle" );
		_draw_info__os._cpus._a__times_irq = _el__ul__cpus.getElementsByClassName( "times-irq" );
		_draw_info__os._cpus._a__times_sys = _el__ul__cpus.getElementsByClassName( "times-sys" );
		_draw_info__os._cpus._a__times_user = _el__ul__cpus.getElementsByClassName( "times-user" );
	};
	_draw_info__os._cpus._count = -1;
	_draw_info__os._cpus._a__times_idle;
	_draw_info__os._cpus._a__times_irq;
	_draw_info__os._cpus._a__times_sys;
	_draw_info__os._cpus._a__times_user;

	_draw_info__os._networkInterfaces = function(){
		var f0 = _this.$f0;
		var t2 = _this.$f0( _el__section_properties, "networkInterfaces" );//li;
		var t3 = t2.children[ 1 ];//li의 2번째 자식 객체;

		var t4 = _el__section_properties_networkInterfaces;
		var _innerHTML = "";

		var o0 = _os.networkInterfaces();
		var count = 0;
		var a0 = [];
		for( var s in o0 )
		{
			_innerHTML += "\n" + t4.__originalInnerHTML.replace( "{{networkInterfaces__name}}", s );
			a0.push( o0[ s ] );
			++count;
		}
		t4.innerHTML = _innerHTML;

		var io;
		var i=0, iLen=a0.length;
		for( ; i<iLen; ++i )
		{
			io = a0[ i ];
			window.b2link.html_ul.apply_child( f0( t4.children[ i ], "ul-networkInterfaces" ), io );
		}

		t3.innerText = count + " N";
	};
	_draw_info__os._userInfo = function(){
		var t2 = _this.$f0( _el__section_properties, "userInfo" );//li;
		var t3 = t2.children[ 1 ];//li의 2번째 자식 객체;
		var o0 = _os.userInfo();
		window.b2link.html.applyBrace( t3, o0 );
	};
	/*/
	var _draw_info__os = function()
	{
		var text = "";
		var t = require( "os" );
		var f0 = function( s ){ text += "\n" + s; };
			f0( "EOL : " + t.EOL );
			f0( "arch : " + t.arch() );
			f0( "cpus : " + t.cpus() );
			f0( "endianness : " + t.endianness() );
			f0( "freemem : " + t.freemem() );
			f0( "getNetworkInterfaces : " + t.getNetworkInterfaces() );
			f0( "homedir : " + t.homedir() );
			f0( "hostname : " + t.hostname() );
			f0( "loadavg : " + t.loadavg() );
			f0( "networkInterfaces : " + t.networkInterfaces() );
			f0( "platform : " + t.platform() );
			f0( "release : " + t.release() );
			f0( "tmpDir : " + t.tmpDir() );
			f0( "tmpdir : " + t.tmpdir() );
			f0( "totalmem : " + t.totalmem() );
			f0( "type : " + t.type() );
			f0( "uptime : " + t.uptime() );
			f0( "userInfo : " + t.userInfo() );

		_el__textarea_info.value = text;
	};
	//*/

	/**
	 * @function
	 */
	var _draw_info__os__reload = function()
	{
		_draw_info__os__reload._el__freemem.innerText = _os.freemem();
		_draw_info__os__reload._el__uptime.innerText = _os.uptime();

		//수정하기 - 20170608 - 송선우 - 처음 구할때 CPU 갯수를 인스턴스화 하고 - 성능 부하로 개별 갱신되게 수정하기
		/*/
		_draw_info__os._cpus( "cpus" );
		/*/
		var a0 = _os.cpus();//매번 값을 복사해오는 메카니즘 수정 금지;

		var t0 = _draw_info__os._cpus;
		var a1 = t0._a__times_idle;
		var a2 = t0._a__times_irq;
		var a3 = t0._a__times_sys;
		var a4 = t0._a__times_user;

		var io0;
		var i=0, iLen=a0.length;
		for( ; i<iLen; ++i )
		{
			io0 = a0[ i ].times;

			a1[ i ].innerText = io0.idle;
			a2[ i ].innerText = io0.irq;
			a3[ i ].innerText = io0.sys;
			a4[ i ].innerText = io0.user;
		}
		//*/
	};
	_draw_info__os__reload._el__freemem = _this.$f0( _el__section_properties, "freemem" ).children[ 1 ];
	_draw_info__os__reload._el__uptime = _this.$f0( _el__section_properties, "uptime" ).children[ 1 ];

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _reload__start_or_end = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _reload__start_or_end():void----------" );

		window.b2link.common.clearInterval( _interval_reload );

		var _time = parseInt( _el__input__time_reload.value );

		if( _el__input__checkbox__auto_reload.checked )
		{
			_interval_reload = window.b2link.common.setInterval( _draw_info__os__reload, _time );
		}
		else
		{
			window.b2link_ui.message.message( "자동 갱신을 선택해야한다." );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _reload__start_or_end():void----------" );
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
	_setPosition();
	//----------;

	_draw_info__os();


	//--------------------------------------------------;
	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup, ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;
		//새로 고침 버튼;
		f0( "btn-reload", function( e ){ if( "click" != e.type ) return; _draw_info__os(); });

		//자동 갱신 체크 박스;
		f0( "input-checkbox-auto_reload", function( e ){ if( "click" != e.type ) return; _reload__start_or_end(); });

		//자동 갱신 시간(초);
		f0( "input-time_reload", function( e ){ if( "keyup" != e.type ) return; _reload__start_or_end(); });

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	//var f1 = _this.addEventCallBackFunction__EventType;
	//--------------------------------------------------;


	//--------------------------------------------------this - FUNCTION, GET METHOD, SET METHOD, GET/SET METHOG, GETTER, SETTER, GETTER / SETTER 순서 - 타입별 내부는 알파벳 순서 _는 알파벳보다 빠르다.;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;
	//--------------------------------------------------this;
	return _;
});