//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/101_define_window.b2link.STATIC.UI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var $w = window;

//--------------------------------------------------[ S ] - window.b2link.STATIC.UI;

$w.b2link.STATIC.UI = $w.b2link.STATIC.UI || {};

$w.b2link.STATIC.UI.__div = window.document.createElement( "div" );

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @param {Object} [ {HTMLElement}, {Object}, .. ]
 */
$w.b2link.STATIC.UI.__add = function( key, o )
{
	if( $w.b2link.STATIC.UI[ key ] )
	{
		var s = "window.b2link.STATIC.UI." + key + " already exists";
			console.error( s );
			//alert( s );
			//throw new Error( s );
	}
	else $w.b2link.STATIC.UI[ key ] = o;
};

//--------------------------------------------------;

/**
 * @function
 */
$w.b2link.STATIC.UI.__all_setPosition__TestMenu = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition__TestMenu():void----------" );
	var t = $w.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		if( io[ 1 ] && s != "test_Menu" )
		{
			console.log( io );
			var s = io[ 0 ].style;
			s.left = "250px";
			s.top = "45px";
			s.bottom = "initial";
			s.right = "initial";
			//s.right = "20px";
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition__TestMenu():void----------" );
};

/**
 * @function
 */
$w.b2link.STATIC.UI.__all_setPosition_Center_FromParent = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromParent():void----------" );
	var t = $w.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			$w.b2link.element.setPosition_Center_FromParent( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromParent():void----------" );
};

/**
 * @function
 */
$w.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus():void----------" );
	var t = $w.b2link.STATIC.UI;
	var io;
	for( var s in t ){
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			$w.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus():void----------" );
};

/**
 * @function
 */
$w.b2link.STATIC.UI.__all_setPosition_Center_FromWindow = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow():void----------" );
	var t = $w.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			$w.b2link.element.setPosition_Center_FromWindow( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow():void----------" );
};

/**
 * @function
 */
$w.b2link.STATIC.UI.__allHide = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__allHide():void----------" );
	var t = $w.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
		{
			//console.log( io );
			try
			{
				io[ 1 ].hide();
			}
			catch( er )
			{
				console.error( s + " window.b2link.STATIC.UI.__allHide Error : " + er );
			}
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__allHide():void----------" );
};

/**
 * @function
 */
$w.b2link.STATIC.UI.__allShow = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__allShow():void----------" );
	var t = $w.b2link.STATIC.UI;
	for( var s in t )
	{
		io = t[ s ];
		if( io[ 1 ] )
		{
			//console.log( io );
			try
			{
				io[ 1 ].show();
				//io[ 1 ].req_Data();
			}
			catch( er )
			{
				console.error( s + " window.b2link.STATIC.UI.__allShow Error : " + er );
			}
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__allShow():void----------" );
};

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {Boolean}
 */
$w.b2link.STATIC.UI.__checkKey = function( key )
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__checkKey():{Boolean}----------" );
	if( $w.b2link.STATIC.UI[ key ] ) return 1;
	return 0;
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__checkKey():{Boolean}----------" );
};

//--------------------------------------------------;

/**
 * @function
 */
$w.b2link.STATIC.UI.__list = function(){ this.__status(); };

/**
 * @function
 * @param {String} key
 */
$w.b2link.STATIC.UI.__show = function( key )
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__show():void----------" );
	var t = $w.b2link.STATIC.UI[ key ][ 1 ];
	try
	{
		t.show();
		//t.req_Data();
	}
	catch( e )
	{
		window.b2link_ui.message.error( "Error : " + e );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__show():void----------" );
};

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {*}
 */
$w.b2link.STATIC.UI.__getObj = function( key ){ return $w.b2link.STATIC.UI[ key ]; };

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------[ E ] - window.b2link.STATIC.UI;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//---------------------------------------------------------------------------------------------------;