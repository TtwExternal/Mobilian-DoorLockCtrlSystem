//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/200_define_window.b2link_service.common_storage.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.common_storage;

window.b2link_service.common_storage = window.b2link_service.common_storage || {};

//--------------------------------------------------window.b2link_service.common_storage.g***;

/**
 * DB에서 Public로 식별되는 DB & Collection만 사용할수 있는 API
 * Client Memory 상에 보관되어있으면 있는 값을 리턴하고 없으면 서버에 요청해서 가져와서 저장하고 리턴한다.
 * Client Memory를 비우는 API는 별도로 존재한다.
 * Public DB Schema가 새롭게 추가되어 필요시 요청바람.
 *
 *
 * DB 목록
 * category
 * list_static
 *
 * DB * Collection 목록
 * brand.brand_basic
 *
 * information.exchange_rate
 *
 * member.member_public
 *
 * partner.partner_buyer
 * partner.partner_logistics
 * partner.partner_supplier
 *
 * product.product_basic
 * product.product_type
 *
 * @function
 * @param {String} nm_prop _id$***, cd$***
 * @param {*} value
 * @return {*}
 * @example
 * <code>
	{
		var data = window.b2link_service.common_storage.get( "_id$country", 0 );

		var data = window.b2link_service.common_storage.get( "cd$category_division", "BOD" );
	}
 * </code>
 */
//!function(){var e=SUtilXMLHttpReqGet.reqSyncReturn,n=window.b2link.STATIC.CONFIG.URL,i=n.PROXY+window.b2link.url.getServerURLByDB("_query_public")+"_query_public/findOne/getDoc?",r=n.PROXY+window.b2link.url.getServerURLByDB("_instance")+"_instance/",s=JSON.parse(e(r+"cols/getAllList").responseText),o=JSON.parse(e(r+"dbs_cols__public/getAllList").responseText);window.b2link_service.common_storage.get=function(n,r){if(-1==n.indexOf("_id$")&&-1==n.indexOf("cd$"))return window.b2link_ui.message.error("window.b2link_service.common_storage.get Error : "+n+"는 이 API 사용 불가능함."),null;var t=n.split("$"),l=t[1],c=s[l].db;window.b2link_service.common._checkDBColNames(c,l);try{var _=o[c][l];if(_){var w=_[r];return w?w:(_[r]=JSON.parse(e(i+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:n,v:r})).responseText),_[r])}}catch(a){return window.b2link_ui.message.error(a),null}}}();
//try{!function(){var e,r=SUtilXMLHttpReqGet.reqSyncReturn,n=window.b2link.STATIC.CONFIG.URL,i=n.PROXY+window.b2link.url.getServerURLByDB("_query_public")+"_query_public/findOne/getDoc?",t=n.PROXY+window.b2link.url.getServerURLByDB("_instance")+"_instance/";try{e=JSON.parse(r(t+"cols/getAllList").responseText)}catch(o){window.TtwLog.error("Collections 정보를 가져오지 못함."),e={}}var s;try{s=JSON.parse(r(t+"dbs_cols__public/getAllList").responseText)}catch(o){window.TtwLog.error("Collections( + DB 이름) 정보를 가져오지 못함."),s={}}window.b2link_service.common_storage.get=function(n,t){var o=n.split("$"),l=o[1],c=e[l].db;window.b2link_service.common._checkDBColNames(c,l);try{var w=s[c][l];if(w){var a=w[t];return a?a:(w[t]=JSON.parse(r(i+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:n,v:t})).responseText),w[t])}}catch(_){return window.b2link_ui.message.error(_),null}}}();}catch(e){}
try{!function(){var e,r=SUtilXMLHttpReqGet.reqSyncReturn,n=window.b2link.STATIC.CONFIG.URL,i=n.PROXY+window.b2link.url.getServerURLByDB("_query_public")+"_query_public/findOne/getDoc?",t=n.PROXY+window.b2link.url.getServerURLByDB("_instance")+"_instance/";try{e=JSON.parse(r(t+"cols/getAllList").responseText)}catch(o){e={}}var s;try{s=JSON.parse(r(t+"dbs_cols__public/getAllList").responseText)}catch(o){s={}}window.b2link_service.common_storage.get=function(n,t){var o=n.split("$"),l=o[1],c=e[l].db;window.b2link_service.common._checkDBColNames(c,l);try{var w=s[c][l];if(w){var a=w[t];return a?a:(w[t]=JSON.parse(r(i+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:n,v:t})).responseText),w[t])}}catch(_){return window.b2link_ui.message.error(_),null}}}();}catch(e){}

//--------------------------------------------------window.b2link_service.common_storage.g***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.common_storage;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;