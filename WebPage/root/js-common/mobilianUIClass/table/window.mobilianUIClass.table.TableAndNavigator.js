//----------------------------------------------------------------------------------------------------;
var fileNm = "./js-common/mobilianUIClass/base/window.mobilianUIClass.table.TableAndNavigator.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @class
 * @param {Object} d
 * @param {Object} _this
 */
window.mobilianUIClass.table.TableAndNavigator = function( d, _this )
{
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

	/**
	 * @private
	 * @property {Object}
	 */
	var _this = _this ? _this : {};

	/**
	 * @private
	 * @property {Boolean}
	 */
	_this.bAddEvent_Keyboard = false;

	/**
	 * @private
	 * @property {Boolean}
	 */
	_this.bAddEvent_Mouse = false;

	/**
	 * @private
	 * @property {Object}
	 */
	var _o_events_callback = {};

	/**
	 * @private
	 * @property {Object}
	 */
	var _o_events_callback__className = {};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	API - Navigator;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * Navigator을 조작하는 함수를 모은 구조체
	 * @property {Object}
	 */
	var _api_navigator = {

		_target : null

		, _className : {
			default : "item$Number item"
			, selected : "item$Number item ui blue label"
			//, selected : "item$Number item ui red label"
		}

		/**
		 * 네비게이터의 왼쪽 버튼 클릭시 작동;
		 * @function
		 * @param {MouseEvent} e
		 */
		, _evt_mClick__Left : function( e ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._evt_mClick__Left():void----------" );

			var t = _api_navigator._target;

			//연산 전 네비게이터 번호 보관;
			var beforeNum = t.N_NAVI;

			t.N_NAVI = t.N_NAVI - t.N_NAVI_VIEW_COUNT;

			if( 0 > t.N_NAVI ) t.N_NAVI = 0;

			//연산 전 번호와 같으면 아무일도 하지 않는다.;
			if( beforeNum == t.N_NAVI )
			{
				window.b2link_ui.message.message( "처음 목록 이다." );
				window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._evt_mClick__Left():void----------return;" );
				return;
			}

			//*/
			//시작 번호를 가장 오른쪽으로 옮기고 번호 아이템을 추가 한다.;
			_api_navigator._setNavigatorNumber__Left( t.N_NAVI );
			/*/
			//Table의 Numbering Navigator을 갱신한다.;
			_api_navigator._draw_Table_Navigator();
			//*/

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._evt_mClick__Left():void----------" );
		}

		/**
		 * 네비게이터의 오른쪽 버튼 클릭시 작동;
		 * @function
		 * @param {MouseEvent} e
		 */
		, _evt_mClick__Right : function( e ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._evt_mClick__Right():void----------" );

			var t = _api_navigator._target;

			//연산 전 네비게이터 번호 보관;
			var beforeNum = t.N_NAVI;

			t.N_NAVI = t.N_NAVI + t.N_NAVI_VIEW_COUNT;
			//t.N_NAVI = t.N_NAVI + t.N_NAVI_VIEW_COUNT - 1;
			//t.N_NAVI = t.N_NAVI + 1;
			if( t.N_NAVI > t.N_NAVI_MAX_COUNT )
				t.N_NAVI = t.N_NAVI_MAX_COUNT - t.N_NAVI_VIEW_COUNT;

			//최대 번호보다 크면 최대 번호를 넣는다;
			if( t.N_NAVI > t.N_NAVI_MAX_COUNT )
				t.N_NAVI = t.N_NAVI_MAX_COUNT

			//0보다 작으면 0번으로 설정한다.;
			if( 0 > t.N_NAVI ) t.N_NAVI = 0;

			//연산 전 번호와 같으면 아무일도 하지 않는다.;
			if( beforeNum == t.N_NAVI )
			{
				window.b2link_ui.message.message( "마지막 목록 이다." );
				window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._evt_mClick__Right():void----------return;" );
				return;
			}

			//*/
			//시작 번호를 가장 왼쪽으로 옮기고 번호 아이템을 추가 한다.;
			_api_navigator._setNavigatorNumber__Right( t.N_NAVI );
			/*/
			//Table의 Numbering Navigator을 갱신한다.;
			_api_navigator._draw_Table_Navigator();
			//*/

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._evt_mClick__Right():void----------" );
		}

		/**
		 * 네비게이터의 숫자 버튼 클릭시 작동
		 * @function
		 * @param {MouseEvent} e
		 */
		, _evt_mClick__NumberItem : function( e ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._evt_mClick__NumberItem():void----------" );

			var t = _api_navigator._target;
			var a = t.tableNavigator.children;

			var i=1, iLen=a.length-1;
			for( ; i<iLen; ++i ) a[ i ].className = _api_navigator._className.default;

			var el = e.target;

			//네비게이터 번호 설정;
			t.N_NAVI = Number( el.innerText );

			//선택한 페이지 색상 변경;
			el.className = _api_navigator._className.selected;

			//검색 목록의 시작 번호 설정;
			//t.N_SKIP = t.N_NAVI * t.N_LIMIT;
			t.N_SKIP = ( t.N_NAVI - 1 ) * t.N_LIMIT;

			//검색조건에 기반한 회원 목록 검색을 요청한다.;
			_api_navigator._reqData_List();

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._evt_mClick__NumberItem():void----------" );
		}

		/**
		 * 네비게이터의 '<' 버튼과 '>' 버튼 추가
		 * @function
		 * @param {HTMLElement} l
		 * @param {HTMLElement} r
		 */
		, _appendChild__Navigator_LeftRightElement : function( l, r ){
			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._appendChild__Navigator_LeftRightElement():void----------" );

			var t = _api_navigator._target;

			//가장 왼쪽에 < 버튼 재삽입;
			t.tableNavigator.children[ 0 ].insertAdjacentElement( "beforebegin", l );

			//가장 오른쪽에 > 버튼 재삽입;
			t.tableNavigator.appendChild( r );

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._appendChild__Navigator_LeftRightElement():void----------" );
		}

		/**
		 * Table의 Numbering Navigator을 갱신한다.
		 * @function
		 */
		, _draw_Table_Navigator : function(){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._draw_Table_Navigator():void----------" );

			var t = _api_navigator._target;

			//_api_navigator._target.tableNavigator.children에서 왼쪽(<), 오른쪽(>) 버튼을 제거한 후 반환한다.;
			var btns = _api_navigator._getLeftRightBtnsAndRemoveElement();

			a = t.tableNavigator.children;

			var i=1, iLen=a.length;
			var j=t.N_NAVI;

			//네비게이터 번호 버튼 갯수와 설정된 갯수가 일치 할시;
			if( iLen == t.N_NAVI_VIEW_COUNT )
			{
				//----------[ S ] - 선택된 숫자만 별도 클래스 처리;
				a[ 0 ].className = _api_navigator._className.selected;
				//a[ 0 ].innerText = j;//네비게이터 숫자를 0부터 시작;
				a[ 0 ].innerText = j + 1;//네비게이터 숫자를 1부터 시작;
				++j;
				//----------[ E ] - 선택된 숫자만 별도 클래스 처리;

				for( ; i<iLen; ++i )
				{
					a[ i ].className = _api_navigator._className.default;
					//a[ i ].innerText = j;//네비게이터 숫자를 0부터 시작;
					a[ i ].innerText = j + 1;//네비게이터 숫자를 1부터 시작;
					++j;
				}
			}
			//네비게이터 번호 버튼 갯수와 설정된 갯수가 일치일치 하지 않을 시 버튼 갯수 가감 로직;
			else
			{
			}

			//네비게이터의 '<' 버튼과 '>' 버튼 추가;
			_api_navigator._appendChild__Navigator_LeftRightElement( btns[ 0 ], btns[ 1 ] );


			//----------[ S ] - 네비게이터 다시 배치시 게시물 목록 갱신하기;
			//검색 목록의 시작 번호 설정;
			//*/
			t.N_SKIP = t.N_NAVI * t.N_LIMIT;
			/*/
			t.N_SKIP = ( t.N_NAVI - 1 ) * t.N_LIMIT;
			//*/
			_api_navigator._reqData_List();
			//----------[ E ] - 네비게이터 다시 배치시 게시물 목록 갱신하기;

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._draw_Table_Navigator():void----------" );
		}

		//외부 주입 인터페이스;
		, _reqData_Count : null

		//외부 주입 인터페이스;
		, _reqData_List : null

		/**
		 * _api_navigator._target.tableNavigator.children에서 왼쪽(<), 오른쪽(>) 버튼을 제거한 후 반환한다.
		 * @function
		 * @return [ leftButton, rightButton ]
		 */
		, _getLeftRightBtnsAndRemoveElement : function(){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._getLeftRightBtnsAndRemoveElement():{Object}----------" );

			var t = _api_navigator._target;

			var a = t.tableNavigator.children;
			var lastIdx = a.length - 1;

			var item_Left = a[ 0 ];
			var item_Right = a[ lastIdx ];
				item_Left.remove();
				item_Right.remove();

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._getLeftRightBtnsAndRemoveElement():{Object}----------" );
			return [ item_Left, item_Right ];
		}

		/**
		 * 시작 번호를 가장 오른쪽으로 옮기고 번호 아이템을 추가 한다.;
		 * @function
		 * @param {Number} n
		 */
		, _setNavigatorNumber__Left : function( n ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._setNavigatorNumber__Left():void----------" );

			var t = _api_navigator;

				//Table의 Numbering Navigator을 갱신한다.;
				t._draw_Table_Navigator();

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._setNavigatorNumber__Left():void----------" );
		}

		/**
		 * 시작 번호를 가장 왼쪽으로 옮기고 번호 아이템을 추가 한다.;
		 * @function
		 * @param {Number} n
		 */
		, _setNavigatorNumber__Right : function( n ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._setNavigatorNumber__Right():void----------" );

			/*/
			var t = _api_navigator;

				//Table의 Numbering Navigator을 갱신한다.;
				t._draw_Table_Navigator();
			/*/
			var t = _api_navigator._target;
				t.N_NAVI = t.N_NAVI - 1;

			//_api_navigator._target.tableNavigator.children에서 왼쪽(<), 오른쪽(>) 버튼을 제거한 후 반환한다.;
			var btns = _api_navigator._getLeftRightBtnsAndRemoveElement();

			a = t.tableNavigator.children;

			var i=a.length-1, iLen=-1;
			var j=t.N_NAVI;

			//네비게이터 번호 버튼 갯수와 설정된 갯수가 일치 할시;
			if( a.length == t.N_NAVI_VIEW_COUNT )
			{
				//----------[ S ] - 선택된 숫자만 별도 클래스 처리;
				a[ i ].className = _api_navigator._className.selected;
				//a[ i ].innerText = j;//네비게이터 숫자를 0부터 시작;
				a[ i ].innerText = j + 1;//네비게이터 숫자를 1부터 시작;
				--i;
				--j;
				//----------[ E ] - 선택된 숫자만 별도 클래스 처리;

				for( ; i>iLen; --i )
				{
					a[ i ].className = _api_navigator._className.default;
					//a[ i ].innerText = j;//네비게이터 숫자를 0부터 시작;
					a[ i ].innerText = j + 1;//네비게이터 숫자를 1부터 시작;
					--j;
				}
			}
			//네비게이터 번호 버튼 갯수와 설정된 갯수가 일치일치 하지 않을 시 버튼 갯수 가감 로직;
			else
			{
			}

			//네비게이터의 '<' 버튼과 '>' 버튼 추가;
			_api_navigator._appendChild__Navigator_LeftRightElement( btns[ 0 ], btns[ 1 ] );


			//----------[ S ] - 네비게이터 다시 배치시 게시물 목록 갱신하기;
			//검색 목록의 시작 번호 설정;
			//*/
			t.N_SKIP = t.N_NAVI * t.N_LIMIT;
			/*/
			t.N_SKIP = ( t.N_NAVI - 1 ) * t.N_LIMIT;
			//*/
			_api_navigator._reqData_List();
			//----------[ E ] - 네비게이터 다시 배치시 게시물 목록 갱신하기;
			//*/

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._setNavigatorNumber__Right():void----------" );
		}

		/**
		 * 화면에 표출되는 네비게이터 아이템 갯수를 설정한다.
		 * @function
		 * @param {Number} n
		 */
		, _setNavigatorItemCount : function( n ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_navigator._setNavigatorItemCount():void----------" );

			var t = _api_navigator._target;

			//왼쪽(<), 오른쪽(>) 버튼을 제거한 후 반환한다.;
			var btns = _api_navigator._getLeftRightBtnsAndRemoveElement();

			t.N_NAVI_VIEW_COUNT = n;

			var f = window.b2link.html.createHTMLElement;
			var i=0, iLen=n;
			for( ; i<iLen; ++i )
			{
				var el = f( _api_navigator._setNavigatorItemCount._template );
				//네비게이터 숫자 버튼 추가;
				t.appendChild( el );
			}

			//네비게이터의 '<' 버튼과 '>' 버튼 추가;
			_api_navigator._appendChild__Navigator_LeftRightElement( btns[ 0 ], btns[ 1 ] );

			window.TtwLog.timeStamp( "--- [ E ] - _api_navigator._setNavigatorItemCount():void----------" );
		}

		/**
		 * 필요한 Reference를 주입한다.
		 * @function
		 * @param {Object}
		 * <code>
			{
				target : {}
				, fn__reqData_Count : function(){}
				, fn__reqData_List : function(){}
			}
		 * </code>
		 */
		, _setReference : function( d ){

			//각종 대상 객체가 있는 구조체 레퍼런스를 설정한다;
			if( d.target )
			{
				/**
				 * Table API가 참조할 대상 구조체
				 * @Getter
				 */
				_api_navigator.__defineGetter__( "_target", function(){ return d.target; });
			}

			if( d.fn__reqData_Count )
			{
				/**
				 * 검색조건에 기반한 회원 목록 수량을 요청한다.
				 * @Getter
				 * @function
				 */
				_api_navigator.__defineGetter__( "_reqData_Count", function(){ return d.fn__reqData_Count; });
			}

			if( d.fn__reqData_List )
			{
				/**
				 * 검색조건에 기반한 회원 목록 검색을 요청한다.
				 * @Getter
				 * @function
				 */
				_api_navigator.__defineGetter__( "_reqData_List", function(){ return d.fn__reqData_List; });
			}
		}
	};
	_api_navigator._setNavigatorItemCount._template = '<a class="item$Number item">{{n}}</a>';

	//----------------------------------------------------------------------------------------------------;

	//	API - Table;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * Table을 조작하는 함수를 모은 구조체
	 * @property {Object}
	 */
	var _api_table = {

		_target : null

		/**
		 * Table-TBody의 TR들을 갱신한다.
		 * @function
		 * @param {Array} data
		 */
		, _draw_Table_TBody_TRs : function( data ){
			window.TtwLog.timeStamp( "--- [ S ] - _api_table._draw_Table_TBody_TRs():void----------" );

			var t = _api_table._target;

			if( data.length < t.N_LIMIT )
			{
				if( t.tbody.__list_reuse_key )
				{
					var d = {};
					var a = t.tbody.__list_reuse_key;
					var i=0, iLen=a.length;
					for( ; i<iLen; ++i )
					{
						var s = a[ i ];
						if( -1 != s.indexOf( "." ) )
						{
							var a0 = s.split( "." );
							var d0 = d[ a0[ 0 ] ] = {};
							var j=1, jLen=a0.length-2;
							for( ; j<jLen; ++j ) d0 = d0[ a0[ j ] ] = {};
							d0 = d0[ a0[ a0.length - 1 ] ] = "-";
						}
						else d[ s ] = "-";
					}

					var i=0, iLen=t.N_LIMIT-data.length;
					for( ; i<iLen; ++i ) data.push( d );
				}
				else
				{
					var d = {};
					var io = data[ 0 ];
					for( var s in data[ 0 ] ) d[ s ] = "-";
					var i=0, iLen=t.N_LIMIT-data.length;
					for( ; i<iLen; ++i ) data.push( d );
				}
			}

			//받아온 데이터를 기반으로 tr들을 생성한다.;
			//window.b2link.html_tbody.apply_child( t.tbody, data );
			window.b2link.html_tbody.apply_child__ReUseKeyList( t.tbody, data );

			//이 UI 객체의 사이즈와 이 UI 객체의 부모의 사이즈를 비교하여 중심에 배치 시킨다.;
			//window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( $el_div );

			//Table 목록의 Table Size를 특정 조건에 따라 동적으로 지정한다.;
			_api_table._setTableSize();

			window.TtwLog.timeStamp( "--- [ E ] - _api_table._draw_Table_TBody_TRs():void----------" );
		}

		/**
		 * 필요한 Reference를 주입한다.
		 * @function
		 * @param {Object}
		 * <code>
			{
				target : {}
			}
		 * </code>
		 */
		, _setReference : function( d ){
			//각종 대상 객체가 있는 구조체 레퍼런스를 설정한다;
			if( d.target )
			{
				/**
				 * Table API가 참조할 대상 구조체
				 * @Getter
				 */
				_api_table.__defineGetter__( "_target", function(){ return d.target; });
			}
		}

		/**
		 * member_basic의 Table Size를 특정 조건에 따라 동적으로 지정한다.
		 * @function
		 */
		, _setTableSize : function(){
			window.TtwLog.timeStamp( "--- [ S ] - _api_table._setTableSize():void----------" );

			var t = _api_table._target;

			//var r0 = $el_div.getBoundingClientRect();
			var r1 = t.tableParent.parentElement.getBoundingClientRect();
			var r2 = t.tableParent.getBoundingClientRect();
			var r3 = t.tableNavigator.getBoundingClientRect();

			var r3_h_d2 = r3.height / 2;

			t.tableParent.style.height = ( r1.height + r3.height - r3_h_d2 - r1.y - ( r1.height - r2.y ) ) + "px";

			window.TtwLog.timeStamp( "--- [ E ] - _api_table._setTableSize():void----------" );
		}
	};

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
	};

	/**
	 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
	 * @function
	 */
	var _removeEvent = function(){};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

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
	_addEvent();
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.dispose = _dispose;


		_.setData = _setData;


		_._api_navigator = _api_navigator;
		_._api_table = _api_table;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;