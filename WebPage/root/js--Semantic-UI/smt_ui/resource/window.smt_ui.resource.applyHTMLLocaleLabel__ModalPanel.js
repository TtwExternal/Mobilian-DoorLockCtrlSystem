//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/smt_ui/resource/window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _store = {};

	/**
	 * ModalPanel을 상속받은 HTMLElement에 ModalPanel 특성의 Local Label을 적용한다.
	 * (())로 이루어진 ModalPanel 전용 Local Label을 변환한다.
	 * @function
	 * @param {HTMLElement}
	 */
	window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel = function( el )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel():void----------" );

		var url = "./ui_include--Semantic-UI/common-div-title_bar/ModalPanel.js";

		if( !_store[ url ] )
			_store.title_bar = window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( url );

		//class="titleBar-ModalPanel"인 <div>들에게 LOCALE_LABEL.title_bar를 적용;
		var a = el.getElementsByClassName( "titleBar-ModalPanel" );
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
			a[ i ].innerHTML = STtwUtilString.applyParenthesesStrFromObj( a[ i ].innerHTML, _store.title_bar );

		//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel():void----------" );
	};
	window.smt_ui.resource.applyHTMLLocaleLabel__ModalPanel._clear = function(){ _store = {}; };
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;