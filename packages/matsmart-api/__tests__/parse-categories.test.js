const parseCategories = require('../parse-categories');

const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="sv" xml:lang="sv" xmlns:fb="http://www.facebook.com/2008/fbml">

<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,t){s[t]=o(d+t,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(l+"tracer",[f.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],n),e}finally{c.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||"feature",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c("mark",["onload",a()+h.offset],null,"api");var n=d.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e("handle"),f=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script>
<meta http-equiv="x-dns-prefetch-control" content="on" />
<link rel="dns-prefetch" href="//cdn1.matsmart.se" />
<link rel="dns-prefetch" href="//cdn2.matsmart.se" />
<link rel="dns-prefetch" href="//cdn3.matsmart.se" />
<link rel="dns-prefetch" href="//cdn4.matsmart.se" />
<!--[if IE 9]>
<link rel="prefetch" href="//cdn1.matsmart.se" />
<link rel="prefetch" href="//cdn2.matsmart.se" />
<link rel="prefetch" href="//cdn3.matsmart.se" />
<link rel="prefetch" href="//cdn4.matsmart.se" />
<![endif]-->
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
<link rel="shortcut icon" href="https://cdn1.matsmart.se/sites/se/files/matsmart_icon_16x16.png" type="image/png" />

    <meta name="description" content="Matsmart - Billig mat på nätet. Din fyndbutik för matvaror. Handla billig mat och spara pengar genom att fynda bland våra billiga och smarta klipp. Du sparar både pengar och på miljön när du handlar på Matsmart." />

    <title>Handla billig mat på nätet | Startsida | Matsmart</title>

  <link type="text/css" rel="stylesheet" href="https://cdn4.matsmart.se/sites/se/files/cdn/css/https/css_e5yuuiAWTbGqs-nzwuqm2gaOsDKCGz1iCwIQXk7-lpg.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://cdn3.matsmart.se/sites/se/files/cdn/css/https/css_P0fzA1zFbGjAbeRQXvUvO1-mIOIZ9hKy2HquIa3Uhm4.css" media="screen" />
<style type="text/css" media="print">
<!--/*--><![CDATA[/*><!--*/
#sb-container{position:relative;}#sb-overlay{display:none;}#sb-wrapper{position:relative;top:0;left:0;}#sb-loading{display:none;}

/*]]>*/-->
</style>
<link type="text/css" rel="stylesheet" href="https://cdn1.matsmart.se/sites/se/files/cdn/css/https/css_5dGN3RTmuOBqOl_Akgat-kSIFF9atZ3D5jpUHPRqnrI.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://cdn3.matsmart.se/sites/se/files/cdn/css/https/css_YQsZLWqXBH8m9M_tKfMwmH0f_EM0xGHzLSVXKjMTY98.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://cdn2.matsmart.se/sites/se/files/cdn/css/https/css_ZxqxOUNIH19Ks9597CYwF-PLjIokOVGuecpxiPNBzLE.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://cdn4.matsmart.se/sites/se/files/cdn/css/https/css_48kH1H2Lm0569D6gfTGPBWAoXSRbN0BUtuUwDOHEnuo.css" media="all" />
  <!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="/sites/all/themes/retailshop/css/ie8-and-down.css" />
	<![endif]-->
  <script type="text/javascript" src="https://cdn1.matsmart.se/sites/se/files/js/js_vdXyrbfFnv_kCC15S_Vl4IX6yiZnhj4q0__VwdT6tF4.js"></script>
<script type="text/javascript" src="https://cdn4.matsmart.se/sites/se/files/js/js_e1VOoITSzyq9WRfCqumKUeuj8lPap0O7_buHrX9Joxk.js"></script>
<script type="text/javascript" src="https://cdn4.matsmart.se/sites/se/files/js/js_K119q80ku76VXMK1og73uu5oBcmqsdI0MNKlPyNQrsE.js"></script>
<script type="text/javascript" src="https://cdn4.matsmart.se/sites/se/files/js/js_x_q1P_hmjKdfV4cEX_O_GPmy0gELxQfdlhTWJZAOoGg.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var google_tag_params = {"ecomm_pagetype":"home","ecomm_pcat":[],"ecomm_prodid":[],"ecomm_pname":[],"ecomm_totalvalue":"","ecomm_currencycode":"SEK","ecomm_pvalue":[],"ecomm_pquantity":[]}
dataLayer.push ({
  'event':'remarketingTriggered',
  'google_tag_params': window.google_tag_params
});

//--><!]]>
</script>
<script type="text/javascript" src="https://cdn2.matsmart.se/sites/se/files/js/js_s5GoMkuVOcC0ggKv18ohwh8Xsa1iw0DetILi_kKw_SE.js"></script>
<script type="text/javascript" src="https://cdn4.matsmart.se/sites/se/files/js/js_O3cNMYUALZPrwr0qNrMCnUZOOxVJEdMRzNDiUX7a-Us.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--

          Shadowbox.path = "/sites/all/libraries/shadowbox/";

//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"retailshop","theme_token":"fbhVBYj2DCuwGvzi02dpzSP1C9uoxCikhWq1IdJ70Ek","js":{"0":1,"1":1,"sites\/all\/modules\/eu_cookie_compliance\/js\/eu_cookie_compliance.js":1,"public:\/\/google_tag\/google_tag.script.js":1,"sites\/all\/modules\/jquery_update\/replace\/jquery\/1.9\/jquery.min.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.core.min.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.widget.min.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.effect.min.js":1,"sites\/all\/libraries\/shadowbox\/shadowbox.js":1,"sites\/all\/modules\/shadowbox\/shadowbox_auto.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/external\/jquery.cookie.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.tabs.min.js":1,"sites\/all\/modules\/jquery_plugin\/tooltip.min.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.effect-fade.min.js":1,"sites\/all\/modules\/matsmart_atc\/matsmart_atc.js":1,"2":1,"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/handlebars.js\/4.0.8\/handlebars.min.js":1,"sites\/all\/themes\/retailshop\/js\/functions.js":1,"sites\/all\/themes\/retailshop\/js\/jquery.placeholder.js":1,"sites\/all\/themes\/retailshop\/js\/matsmart_checkout.js":1,"sites\/all\/themes\/retailshop\/js\/mmenu\/jquery.mmenu.min.js":1,"sites\/all\/themes\/retailshop\/js\/matsmart_mobile.js":1,"sites\/all\/themes\/retailshop\/js\/fixed_header.js":1,"sites\/all\/themes\/retailshop\/js\/findify.js":1,"sites\/all\/themes\/retailshop\/js\/jquery.ba-throttle-debounce.min.js":1,"sites\/all\/themes\/retailshop\/components\/slideshow\/owl.carousel.min.js":1,"3":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"sites\/all\/libraries\/shadowbox\/shadowbox.css":1,"0":1,"misc\/ui\/jquery.ui.core.css":1,"misc\/ui\/jquery.ui.theme.css":1,"misc\/ui\/jquery.ui.tabs.css":1,"sites\/all\/modules\/cache_consistent\/css\/cache_consistent.css":1,"sites\/all\/modules\/date\/date_api\/date.css":1,"sites\/all\/modules\/date\/date_popup\/themes\/datepicker.1.7.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/views\/css\/views.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/eu_cookie_compliance\/css\/eu_cookie_compliance.bare.css":1,"sites\/all\/themes\/retailshop\/js\/mmenu\/jquery.mmenu.css":1,"sites\/all\/themes\/retailshop\/components\/modal\/modal.css":1,"sites\/all\/themes\/retailshop\/css\/style.css":1,"sites\/all\/themes\/retailshop\/css\/content.css":1,"sites\/all\/themes\/retailshop\/css\/matsmart_checkout.css":1,"sites\/all\/themes\/retailshop\/css\/matsmart_footer.css":1,"sites\/all\/themes\/retailshop\/css\/matsmart_mobile.css":1,"sites\/all\/themes\/retailshop\/css\/productviews.css":1,"sites\/all\/themes\/retailshop\/components\/products\/teaser\/products--teaser.css":1,"sites\/all\/themes\/retailshop\/components\/products\/full\/products--full.css":1,"sites\/all\/themes\/retailshop\/components\/dropdown-cart\/dropdown-cart.css":1,"sites\/all\/themes\/retailshop\/components\/slideshow\/owl.carousel.min.css":1,"sites\/all\/themes\/retailshop\/components\/slideshow\/owl.theme.default.css":1,"sites\/all\/themes\/retailshop\/components\/notifications\/notifications.css":1,"sites\/all\/themes\/retailshop\/components\/social_share\/social_share.css":1,"sites\/all\/themes\/retailshop\/css\/hamburgers.min.css":1}},"shadowbox":{"animate":true,"animateFade":true,"animSequence":"wh","auto_enable_all_images":0,"auto_gallery":0,"autoplayMovies":true,"continuous":false,"counterLimit":10,"counterType":"default","displayCounter":true,"displayNav":true,"enableKeys":true,"fadeDuration":0.34999999999999998,"handleOversize":"resize","handleUnsupported":"link","initialHeight":160,"initialWidth":320,"language":"sv","modal":false,"overlayColor":"#000","overlayOpacity":0.80000000000000004,"resizeDuration":0.55000000000000004,"showMovieControls":true,"slideshowDelay":0,"viewportPadding":20,"useSizzle":false},"eu_cookie_compliance":{"popup_enabled":1,"popup_agreed_enabled":0,"popup_hide_agreed":false,"popup_clicking_confirmation":true,"popup_scrolling_confirmation":false,"popup_html_info":"\u003Cp id=\u0022popup-text\u0022\u003E\n  Vi anv\u00e4nder oss av cookies, b\u00e5de fr\u00e5n oss och tredje part, f\u00f6r att v\u00e5ra tj\u00e4nster ska fungera. L\u00e4s mer i v\u00e5r \u003Ca href=\u0022\/cookies\u0022\u003Ecookiepolicy\u003C\/a\u003E. Du kan neka anv\u00e4ndandet av cookies genom att g\u00f6ra inst\u00e4llningar i din webbl\u00e4sare.\u003C\/p\u003E\n\u003Cbutton type=\u0022button\u0022 class=\u0022agree-button eu-cookie-compliance-default-button\u0022\u003EOK\u003C\/button\u003E","use_mobile_message":false,"mobile_popup_html_info":"\u003Cp id=\u0022popup-text\u0022\u003E\n  \u003C\/p\u003E\n\u003Cbutton type=\u0022button\u0022 class=\u0022agree-button eu-cookie-compliance-default-button\u0022\u003EOK\u003C\/button\u003E\n","mobile_breakpoint":"768","popup_html_agreed":"\u003Cdiv\u003E\n  \u003Cdiv class =\u0022popup-content agreed\u0022\u003E\n    \u003Cdiv id=\u0022popup-text\u0022\u003E\n          \u003C\/div\u003E\n    \u003Cdiv id=\u0022popup-buttons\u0022\u003E\n      \u003Cbutton type=\u0022button\u0022 class=\u0022hide-popup-button eu-cookie-compliance-hide-button\u0022\u003ED\u00f6lj\u003C\/button\u003E\n          \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","popup_use_bare_css":1,"popup_height":0,"popup_width":0,"popup_delay":0,"popup_link":"\/","popup_link_new_window":1,"popup_position":null,"popup_language":"sv","store_consent":false,"better_support_for_screen_readers":0,"reload_page":0,"domain":"","popup_eu_only_js":0,"cookie_lifetime":"100","disagree_do_not_show_popup":0,"method":"default","whitelisted_cookies":""},"urlIsAjaxTrusted":{"\/":true}});
//--><!]]>
</script>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/manifest.json">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="theme-color" content="#ffffff">
  <meta property="fb:pages" content="101341883359561" />

  <script>
window.findifyApiRegistry = [{
    hook: "search.item",
    didMount: function(apiData) {
      apiData.node.setAttribute('class', 'findify-mjs-search-results__main__content__product col-lg-3 col-md-4 col-sm-6 col-xs-4 col-xxs-6');
        // Change the product html and attach click function to the buy button
        apiData.multiprice_for_string = ' för ';
                apiData.currency_symbol = 'kr';
        apiData.unit_string = 'st';
        apiData.currency_per_unit = 'kr/st';
        apiData.normalprice_string = 'Normalpris';
        apiData.yousave_string = 'Du sparar';
        apiData.buy_string = 'Köp';
        apiData.regular_trail = ':-<span class="unit">st</span>';
        apiData.mp_trail = ':-';
        addToCartFindify(apiData);
    }
}];

</script>
     <script src='//findify-assets-2bveeb6u8ag.netdna-ssl.com/search/prod/prod.matsmart.se.min.js'></script>

<meta name="google-site-verification" content="o3niw0Kcx5mqrdr3UvpP6wWtNq5GMPJLgwyt7fc553g" />
</head>
<body class="s_layout_fixed html front not-logged-in no-sidebars" >
<div id="mmenu-page">
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable">Hoppa till huvudinnehåll</a>
  </div>
  <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PSCLT2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div id="top">
  <div id="wrap-user-border">
    <div id="wrap-user-border2">
      <div id="wrap-user">
        <div id="user-menu"></div>
           <div class="region region-header-payment">
    <div id="block-block-13" class="left-block block block-block">
   <div class="block-content2"><p><img class="top-icons" src="https://cdn3.matsmart.se/sites/se/files/top-payment-info-v2.png" /></p>  </div>
</div>

  </div>
           <div class="region region-user-menu">
    <div id="block-menu-menu-user-menu-se" class="left-block block block-menu">
   <div class="block-content2"><ul id="user-menu"><li class="first leaf"><a href="/user" title="">Mitt konto</a></li>
<li class="leaf"><a href="http://www.matsmart.se/kundservice" title="">Kundservice</a></li>
<li class="last leaf"><a href="http://www.matsmart.se/kontakt" title="">Kontakt</a></li>
</ul>  </div>
</div>

  </div>
      </div>
    </div>
  </div>
  <div id="header">
    <div class="clr">

    </div>

    <div id="header-bottom" class="empty-cart">
      <div class="wrap">
        <div id="header-mobile-menu">
          <button class="hamburger hamburger--slider" type="button" aria-label="Menu" aria-controls="mm-1">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div id="header-mobile-search">
          <a href="#"></a>
        </div>
        <div id="header-mobile-cart">
                  <a class="summary" href="#">
                      <span id="header-cart-summary-mobile" class="circle">
                                  <span class="hdr-basket-count">0</span>
                      </span>
                      <span id="header-cart-summary-img">
                      </span>
                      <span id="header-cart-summary-price">
                          <span class="hdr-basket-old-price"></span>
                          <span class="hdr-basket-price"></span>
                      </span>
              </a>
              <div class="continue-shopping">
                <a href="#">Fortsätt handla</a>
              </div>
        </div>

        <div id="header-mobile-home">
          <a href="/"></a>
        </div>
              <div id="wrap-logo">
          <a href="/"></a>
        </div>
            <div id="header-menu">
            <div class="region region-top-menu">
    <div id="block-menu-menu-top" class="left-block block block-menu">
   <div class="block-content2"><ul id="header-menu"><li class="first last leaf"><a href="http://www.matsmart.se/sa-funkar-det" target="_blank">Så funkar det</a></li>
</ul>  </div>
</div>

  </div>
        </div>
        <div id="search">
            <div class="region region-search-box">
    <div id="block-matsmart-findify-matsmart-findify-search" class="left-block block block-matsmart-findify">
   <div class="block-content2"><form action="/" method="post" id="matsmart-findify-search-form">
  <div>
    <div class="form-item form-type-textfield form-item-q">
      <input class="mobile-header input search-form form-text nice_search"
             data-findify-attr="findify-autocomplete-input" type="text"
             id="edit-search" name="q" value="" placeholder="Sök produkt, varumärke etc" size="15" maxlength="128"
             autocomplete="off" autocorrect="off" autocapitalize="off"
             spellcheck="false" tabindex="1">
    </div>
    <div class="form-wrapper">
      <input
        data-findify-attr="findify-autocomplete-button"
        class="mobile-header input search form-submit nice_submit" type="submit"
        id="submit" value="Sök">
    </div>
  </div>
</form>
  </div>
</div>

  </div>
        </div>
        <div id="hdr-basket">
          <div id="hdr-basket-checkout" class="collapsed">
                     <span id="header-cart-summary-mobile" class="circle">
                                  <span class="hdr-basket-count">0</span>
                      </span>

                      <span>
                          <span id="header-cart-summary-img" class="checkout-span">
                      </span>
                              <span id="header-cart-summary-price" class="checkout-span">
                                  <span class="hdr-basket-old-price"></span>
                                  <span class="hdr-basket-price"></span>
                              </span>
                      </span>
          </div>

          <div id="hdr-basket-full">
                          <script id="matsmart-cart-form-template" type="text/x-handlebars-template">
  <form action="{{self}}" method="post" class="matsmart-cart-form">
    <div class="tablewrap">
      <table class="views-table cols-6">
        <thead>
          <tr>
            <th class="views-field views-field-field-image" scope="col">
              Vara            </th>
            <th class="views-field views-field-line-item-title" scope="col">
            </th>
            <th class="views-field views-field-edit-quantity" scope="col">
              Antal            </th>
            <th class="views-field views-field-commerce-unit-price" scope="col">
              Styckpris            </th>
            <th class="views-field views-field-commerce-total" scope="col">
              Totalt            </th>
            <th class="views-field views-field-edit-delete" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {{#each items}}
          <tr>
            <td class="views-field views-field-field-image">
              {{#if url}}
                <a href="{{url}}">
              {{/if}}
              <img src="{{image}}"/>
              {{#if url}}
                </a>
              {{/if}}
            </td>
            <td class="views-field views-field-line-item-title">
              {{#if url}}
                <a href="{{url}}">
              {{/if}}
              {{{description}}}
              <span>
                {{#if brand}}
                {{{brand}}}
                {{/if}}
                {{#if size}}
                {{size}}
                {{/if}}
              </span>
              {{#if url}}
                </a>
              {{/if}}
            </td>
            <td class="views-field views-field-edit-quantity">
             <div class="cart quantity-wrapper">
               <div class="button decrease">
                 <span class="icon minus">-</span>
               </div>
               <div class="form-item form-type-textfield">
                 <input type="text" size="1" name="items[{{id}}]" value="{{quantity}}" data-id="{{id}}" data-quantity="{{quantity}}"/>
               </div>
               <div class="button increase">
                 <span class="icon plus">+</span>
               </div>
             </div>
            </td>
            <td class="views-field views-field-commerce-unit-price price">
              {{unit_price}}
            </td>
            <td class="views-field views-field-commerce-total price">
              {{#if multiprice_info }}
              <span class="discounted-price">
                {{quantity}} för {{total_formatted}}
                <span>Multirabatt: {{multiprice_info.saved}}</span>
              </span>
              {{else}}
              {{total_formatted}}
              {{/if}}
            </td>
            <td class="views-field views-field-edit-delete">
              <span class="delete-line-item" data-id="{{line_item_id}}">&nbsp;</span>
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    <div class="commerce-order-handler-area-order-total">
      <table class="commerce-price-formatted-components">
        <tbody>
        {{#each totals}}
          {{#if class}}
          <tr class="component-type-{{class}}">
          {{else}}
          <tr class="component-type-{{@key}}">
          {{/if}}
            <td class="component-title">
              {{description}}
            </td>
            <td class="component-total">
              {{amount}}
            </td>
          </tr>
        {{/each}}
        </tbody>
      </table>
    </div>
    <div class="form-actions commerce-line-item-actions form-wrapper">
      <input type="submit" id="edit-submit-cart" name="op" value="Uppdatera varukorgen" class="form-submit">
      <a href="/checkout" id="edit-checkout" class="form-submit ms-button">Kassan</a>
    </div>
  </form>
</script>

  <div id="hdr-basket-info">
    <div class="cart-progress-wrap">
  <h2>Fyllnadsgrad för din nuvarande låda<div class="modal-box">
    <div class="icon">&nbsp;</div>
    <div class="content">
      <div class="close">&nbsp;</div>
      <h2>Fyllnadsgrad för din nuvarande låda</h2>
      <p>Din lådas nuvarande fyllnadsgrad talar om hur mycket du har fyllt din låda, en beräkning där hänsyn tas till både vikt och volym (t.ex. chips är stort och lätt, dryck är litet och tungt). <br>Bästa värde får du om du fyller lådan så nära 100% (per låda) som möjligt.
</p>
      <p>Fraktkostnad per låda:<br>
Serviceställe: <b>49 kronor</b><br>
Hemleverans:<b> 99 kronor</b><br>
Budbee: <b>79 kronor</b><br>
Instabox: <b>59 kronor</b><br>
Hämta på lagret i Katrineholm: <b>0 kronor</b></p>
    </div>
  </div></h2>
  <p>Lådans fyllnadsgrad: <span class="weight-text"><b></b>%</span></p>
  <p>Antal lådor: <span class="box-count"><b></b><span></p>
  <div class="cart-progress">
    <span class="weight"></span>
  </div>
</div>
  </div>

<div class="commerce-line-item-views-form">
  <div id="matsmart-cart-form-placeholder" class="view-commerce-cart-form"></div>
</div>

                        <div id="hdr-basket-weight">
             <div id="hdr-basket-weight-label">Volymvikt (kg):</div>
              <div id="hdr-basket-weight-value"></div>
            </div>
          </div>
        </div>
        <div class="go-to-checkout">
          <a href="/checkout" class="ms-button rounded">Kassan</a>
        </div>
      </div>
    </div>
    <div class="clr"></div>
  </div>
  <div class="clr"></div>
</div>

<div id="wrap-content">
  <div id="messages"></div>    <div id="main-content">
          <div class="mobile-front-splash">
              </div>
        <div id="left-column">
        <div class="region region-sidebar-right">
    <div id="block-menu-menu-categories" class="block block-menu">
  <div id="wrap-categories">
    <div class="wrap-title-black">
            <h2 class="nice-title">Varor</h2>            <div class="expanded"></div>
    </div>
    <ul id="category-menu"><li><a href="/storpack-fynda-hela-lador">Storpack: Fynda hela lådor</a></li>
<li><a href="/skafferiet">Skafferiet</a></li>
<li><a href="https://www.matsmart.se/pasta-ris-och-nudlar-1">Pasta, ris och nudlar</a></li>
<li><a href="/drycker">Drycker</a></li>
<li><a href="/godis">Godis</a></li>
<li><a href="/snacks">Snacks</a></li>
<li><a href="/produkter/halsa">Träning &amp; vikt </a></li>
<li><a href="/barn-0">Barn</a></li>
<li><a href="/te-kaffe">Te &amp; kaffe</a></li>
<li><a href="/produkter/brod-kakor-kex">Bröd, kakor &amp; kex</a></li>
<li><a href="https://www.matsmart.se/bakning">Bakning</a></li>
<li><a href="/kryddor">Kryddor</a></li>
<li><a href="/saser-oljor">Såser &amp; oljor</a></li>
<li><a href="/ekologiskt">Ekologiskt</a></li>
<li><a href="/glutenfritt">Glutenfritt</a></li>
<li><a href="/produkter/har-kropp-intim">Hår, kropp &amp; intim</a></li>
<li><a href="/produkter/munvard">Munvård</a></li>
<li><a href="/apotek">Apotek</a></li>
<li><a href="/spara-och-forvara">Spara och förvara</a></li>
<li><a href="/produkter/stad-tvatt-disk">Städ, tvätt &amp; disk</a></li>
<li><a href="/i-koket">I köket</a></li>
<li><a href="/husdjur">Husdjur</a></li>
<li><a href="https://www.matsmart.se/boxar">Boxar</a></li>
<li><a href="https://www.matsmart.se/utförsäljning">Utförsäljning</a></li>
<li><a href="https://www.matsmart.se/lowengrip-cc-utforsaljning">Löwengrip C&amp;C-utförsäljning </a></li>
<li><a href="https://www.matsmart.se/elgigantens-lagerrensning">Elgigantens lagerrensning</a></li>
</ul>      </div>
</div>
<div id="block-mailchimp-signup-newsletter-signup-se" class="left-block block block-mailchimp-signup">
   <h2 class="nice-title2">Nyhetsbrev</h2><div class="block-content"><form class="mailchimp-signup-subscribe-form" action="/" method="post" id="mailchimp-signup-subscribe-block-newsletter-signup-se-form" accept-charset="UTF-8"><div><div class="mailchimp-signup-subscribe-form-description">Missa inga klipp!</div><div id="mailchimp-newsletter-b02619ada2-mergefields" class="mailchimp-newsletter-mergefields"><div class="form-item form-type-emailfield form-item-mergevars-EMAIL">
  <label for="edit-mergevars-email">E-postadress <span class="form-required" title="Detta fält är obligatoriskt.">*</span></label>
 <input type="email" id="edit-mergevars-email" name="mergevars[EMAIL]" value="" size="25" maxlength="128" class="form-text form-email required" />
</div>
<input type="hidden" name="mergevars[GDPR_OK]" value="" />
</div><input type="hidden" name="form_build_id" value="form-x80TZdO5ZEMGio_bXYlyW_R6XE62ITCFqJZRimeXEck" />
<input type="hidden" name="form_id" value="mailchimp_signup_subscribe_block_newsletter_signup_se_form" />
Genom att skriva upp dig här samtycker du till att ta emot marknadsföringsmaterial  som exempelvis nyhetsbrev från oss. För mer information, klicka här.
<div id="newsletter-signup-modal" class="modal-box">
    <div class="icon"> </div>
    <div class="content">
      <div class="close"> </div>
 <div class="prd-name" style="padding-bottom:15px;">Smart – anmäl dig till våra marknadsutskick!</div>
<div>När du skriver upp dig här samtycker du till att ta emot nyhetsbrev, kampanjerbjudanden och annan marknadsföring från oss med våra senaste och mest prisvärda erbjudanden.
Du kan närsomhelst återkalla ditt samtycke genom att klicka på avregistreringslänken som finns i varje utskick.
För mer information om hur vi behandlar dina personuppgifter för marknadsföringsändamål, vänligen se vår <a href="/integritetspolicy" target="_blank">integritetspolicy</a>.</div>
    </div>
  </div><div class="form-actions form-wrapper" id="edit-actions"><input class="ms-button notranslate form-submit" type="submit" id="edit-submit" name="op" value="Skicka" /></div></div></form>  </div>
</div>

<div id="block-block-141" class="left-block block block-block">
   <div class="block-content2"><p><a href="https://www.matsmart.se/matsmart-ar-den-ultimata-tjansten"><img src="https://cdn3.matsmart.se/sites/se/files/puffsophiajansson.jpg" alt="" width="100%" /></a></p>  </div>
</div>

<div id="block-block-121" class="left-block block block-block">
   <div class="block-content2"><p><a href="https://www.matsmart.se/halva-priset-mot-min-vanliga-matbutik"><img src="https://cdn3.matsmart.se/sites/se/files/josefinpuff.jpg" alt="" width="100%" /></a></p>  </div>
</div>

<div id="block-block-126" class="left-block block block-block">
   <div class="block-content2"><p><a href="https://www.matsmart.se/enkelt-och-billigt-att-gora-insats-miljon"><img src="https://cdn3.matsmart.se/sites/se/files/puffhelena.jpg" alt="" width="100%" /></a></p>  </div>
</div>

  </div>
    </div>

    <div id="right-column">
        <div class="region region-slide-show">
    <div id="block-views-slide-show-block" class="left-block block block-views">
   <div class="block-content2"><div class="view view-slide-show view-id-slide_show view-display-id-block view-dom-id-b413d14a064cd3425176597a899c5bea">



      <div class="view-content">
      <div class="slideshow-wrapper"><div class="owl-carousel owl-theme"><a href="https://www.matsmart.se/kulkex-original-140g"><img typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/slideshow/slides_ballerina.jpg" width="1840" height="600" alt="" /></a><a href="/%20https%3A//www.matsmart.se/smiling-crush-granatapple-50cl"><img typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/slideshow/matsmart_slider_smiling_granatapple_se_kopia.jpg" width="1840" height="600" alt="" /></a><a href="https://www.matsmart.se/majskakor-ost-125g"><img typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/slideshow/matsmart_slider_friggs_majskakor_ost_2018_se_kopia.jpg" width="1840" height="600" alt="" /></a><a href="https://www.matsmart.se/fri-frakt-till-sista-juli-2018"><img typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/slideshow/fri_frakt_juli.jpg" width="1010" height="330" alt="" /></a><a href="https://www.matsmart.se/vann-guldbiljetten-fick-plocka-varor-i-tva-minuter-hos-matsmart"><img typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/slideshow/vinnare.jpg" width="1840" height="600" alt="" /></a></div></div>    </div>






</div>  </div>
</div>

  </div>
      <div id="content">
                <div id="wrap-featured-products">
            <div class="region region-front">

<div id="block-block-56" class="block block-block">
    <div id="block-product-list" >
      <h1 class="block-title">Länge leve maten</h1><p class="block-subtitle">Vi säljer helt perfekt mat med upp till 90% rabatt. Hur är det möjligt? <a href="https://www.matsmart.se/sa-funkar-det">Läs här!</a></p>    </div>
</div>


<div id="block-views-the-candy-view-block" class="block block-views">
    <div id="block-product-list" >
      <div class="view view-the-candy-view view-id-the_candy_view view-display-id-block view-dom-id-8b734af3c9a6967a309107a1be5ae306">



      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/ris-langkornigt-bovete-quinoa-375g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/uncle_bens_ris_bovete.jpg?itok=2j3phzsU 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/uncle_bens_ris_bovete.jpg?itok=vj5jcHbg" alt="" title="Bäst före: 2018-09-05" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              15            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Ris Långkornigt, Bovete &amp; Quinoa 375g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              24,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2490" data-cur-price="1500">
                                  9,90 kr                  (-40%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35161"/>
		<input id="add-to-cart-submit-35161" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-2 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/fanta-pink-grapefruit-zero-33cl">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/fanta_22pink_grapefruit_zero22_33cl.jpg?itok=AIk5pMFN 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/fanta_22pink_grapefruit_zero22_33cl.jpg?itok=W-Pf8-Ct" alt="" title="Bäst före: 2018-10-03" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              24 för            </span>
          </span>

          <div class="prd-price-num ">
                          79                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            5kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Fanta &quot;Pink Grapefruit Zero&quot; 33cl      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              8,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="500" data-mp-price="7896" data-mp-qty="24" data-normal-price="895" data-cur-price="500">
                                  135,84 kr                  (-63%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="24" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37901"/>
		<input id="add-to-cart-submit-37901" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-3 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/hel-lada-barnmat-morot-potatis-6-x-125g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/hl_hipp_morot_potatis.jpg?itok=UJNnzJqc 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/hl_hipp_morot_potatis.jpg?itok=YsP7ON0m" alt="" title="Bäst före: 2018-09-30" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Hel Låda Barnmat Morot &amp; Potatis 6 x 125g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              81 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8100" data-cur-price="2900">
                                  52 kr                  (-64%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="30156"/>
		<input id="add-to-cart-submit-30156" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-4 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kulkex-original-140g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/kulkex_original.jpg?itok=kRpdAuv4 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/kulkex_original.jpg?itok=V4cgTk6H" alt="" title="Bäst före: 2018-07-20" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              3            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kulkex Original 140g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              22,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2290" data-cur-price="300">
                                  19,90 kr                  (-87%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="19111"/>
		<input id="add-to-cart-submit-19111" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-5 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/durumvetemjol-1kg">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/durumvetemjol.jpg?itok=7JNNW0fX 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/durumvetemjol.jpg?itok=pbQXnSQC" alt="" title="Bäst före: 2019-04-11" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              15            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Durumvetemjöl 1kg      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              24,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2495" data-cur-price="1500">
                                  9,95 kr                  (-40%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37351"/>
		<input id="add-to-cart-submit-37351" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-6 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/hel-platta-trocadero-zero-sugar-24-x-33cl">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/trocadero_hel_platta_zero_sugar.jpg?itok=G0I3LQkd 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/trocadero_hel_platta_zero_sugar.jpg?itok=odGt1jsO" alt="" title="Bäst före: 2019-06-23" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              79            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Hel Platta Trocadero &quot;Zero Sugar&quot; 24 x 33cl       </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              189 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="18900" data-cur-price="7900">
                                  110 kr                  (-58%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="34371"/>
		<input id="add-to-cart-submit-34371" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-7 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kokosmjolk-400ml-1">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/blue_dragon_kokosmjolk.jpg?itok=ZUU-hHiR 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/blue_dragon_kokosmjolk.jpg?itok=2IUyXLyR" alt="" title="Bäst före: 2018-07-31" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              5 för            </span>
          </span>

          <div class="prd-price-num ">
                          29                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            7kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kokosmjölk 400ml      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              15,50 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="700" data-mp-price="2900" data-mp-qty="5" data-normal-price="1550" data-cur-price="700">
                                  48,50 kr                  (-63%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="5" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35346"/>
		<input id="add-to-cart-submit-35346" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-8 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/tuggummin-strawberry-35g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/extra_tuggummin_22strawberry22_35g.jpg?itok=uvzXZV_p 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/extra_tuggummin_22strawberry22_35g.jpg?itok=KKPZjAsX" alt="" title="Bäst före: 2018-06-28" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              5 för            </span>
          </span>

          <div class="prd-price-num ">
                          25                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            10kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Tuggummin &quot;Strawberry&quot; 35g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              14,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1000" data-mp-price="2500" data-mp-qty="5" data-normal-price="1490" data-cur-price="1000">
                                  49,50 kr                  (-66%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="5" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="10276"/>
		<input id="add-to-cart-submit-10276" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-9 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/majskakor-graddfil-lok-125g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/majskakor_graddfil_lok_friggs.jpg?itok=CX1LNS2q 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/majskakor_graddfil_lok_friggs.jpg?itok=6ixi5ZeJ" alt="" title="Bäst före: 2018-11-28" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              3 för            </span>
          </span>

          <div class="prd-price-num ">
                          30                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            12kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Majskakor Gräddfil &amp; Lök 125g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              16,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1200" data-mp-price="3000" data-mp-qty="3" data-normal-price="1695" data-cur-price="1200">
                                  20,85 kr                  (-41%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="3" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="8386"/>
		<input id="add-to-cart-submit-8386" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-10 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/torkade-mangobitar-130g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nathalies_mango.jpg?itok=TPbCpONl 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/nathalies_mango.jpg?itok=tqDkoECV" alt="" title="Bäst före: 2018-11-30" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              49            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Torkade Mangobitar 130g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              68,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="6895" data-cur-price="4900">
                                  19,95 kr                  (-29%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="9118"/>
		<input id="add-to-cart-submit-9118" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-11 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/godis-crazy-face-salty-60g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/malaco_crazy_face_liquorice.jpg?itok=oAsaza3S 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/malaco_crazy_face_liquorice.jpg?itok=ifJ5CoC_" alt="" title="Bäst före: 2018-12-13" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              5            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Godis &quot;Crazy Face Salty&quot; 60g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              8,50 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="850" data-cur-price="500">
                                  3,50 kr                  (-41%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35086"/>
		<input id="add-to-cart-submit-35086" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-12 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kakor-choklad-hasselnotter-2-x-145g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/maryland_cookies_tva_pack_kakor.jpg?itok=Gsh4BQUB 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/maryland_cookies_tva_pack_kakor.jpg?itok=8bwmhw9B" alt="" title="Bäst före: 2018-04-21" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              10            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kakor Choklad &amp; Hasselnötter 2 x 145g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              29,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2990" data-cur-price="1000">
                                  19,90 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="10926"/>
		<input id="add-to-cart-submit-10926" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-13 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/snacks-cheez-starz-220g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/cheez_starz_olw_220g.jpg?itok=2scV5-yf 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/cheez_starz_olw_220g.jpg?itok=bh517A77" alt="" title="Bäst före: 2018-06-04" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              5            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Snacks &quot;Cheez Starz&quot; 220g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              22,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2290" data-cur-price="500">
                                  17,90 kr                  (-78%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="32866"/>
		<input id="add-to-cart-submit-32866" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-14 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/hel-lada-proteinpudding-choklad-apelsin-12-x-200g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/njie_hel_lada_chocolate_orange_protein_pudding.jpg?itok=buY0bhHL 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/njie_hel_lada_chocolate_orange_protein_pudding.jpg?itok=0OrZ2EN0" alt="" title="Bäst före: 2018-08-04" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              129            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Hel Låda Proteinpudding Choklad &amp; Apelsin 12 x 200g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              180 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="18000" data-cur-price="12900">
                                  51 kr                  (-28%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="18311"/>
		<input id="add-to-cart-submit-18311" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-15 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/strossel-bla-gul-mix-20g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/dr.oetker_strossel_blagul_mix.jpg?itok=yx42EUAD 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/dr.oetker_strossel_blagul_mix.jpg?itok=R-JTMbvu" alt="" title="Bäst före: 2018-07-31" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              3 för            </span>
          </span>

          <div class="prd-price-num ">
                          10                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            5kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Strössel Blå &amp; Gul Mix 20g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              7 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="500" data-mp-price="999" data-mp-qty="3" data-normal-price="700" data-cur-price="500">
                                  11,01 kr                  (-52%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="3" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="31811"/>
		<input id="add-to-cart-submit-31811" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-16 views-row-even views-row-last">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mjolkchoklad-hallon-lakrits-100g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/bubs_chokskalle.jpg?itok=xOeb1n3P 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/bubs_chokskalle.jpg?itok=ovHWeIX3" alt="" title="Bäst före: 2018-08-30" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              5 för            </span>
          </span>

          <div class="prd-price-num ">
                          29                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            10kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mjölkchoklad Hallon &amp; Lakrits 100g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              17,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1000" data-mp-price="2900" data-mp-qty="5" data-normal-price="1795" data-cur-price="1000">
                                  60,75 kr                  (-68%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="5" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="33151"/>
		<input id="add-to-cart-submit-33151" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
    </div>






</div>    </div>
</div>


<div id="block-block-66" class="block block-block">
    <div id="block-product-list" >
      <h1 class="block-title">NYINKOMMET!</h1>    </div>
</div>


<div id="block-views-front-page-block-1" class="block block-views">
    <div id="block-product-list" >
      <div class="view view-front-page view-id-front_page view-display-id-block_1 view-dom-id-206a5eeaac17e0fcf2dd38552c294442">



      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/godis-crazy-face-salty-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/crazy_face_malaco_salty.jpg?itok=CHC9x2B3 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/crazy_face_malaco_salty.jpg?itok=1nP1-p5u" alt="" title="Bäst före: 2018-05-02" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              5 för            </span>
          </span>

          <div class="prd-price-num ">
                          25                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            7kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Godis &quot;Crazy Face Salty&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              10,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="700" data-mp-price="2500" data-mp-qty="5" data-normal-price="1095" data-cur-price="700">
                                  29,75 kr                  (-54%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="5" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="19681"/>
		<input id="add-to-cart-submit-19681" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-2 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/godis-crazy-face-sour-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/crazy_face_sour_malaco.jpg?itok=TKnXQTAa 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/crazy_face_sour_malaco.jpg?itok=7poUZ4Lb" alt="" title="Bäst före: 2018-05-09" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              5            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Godis &quot;Crazy Face Sour&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              10,95 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="1095" data-cur-price="500">
                                  5,95 kr                  (-54%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="19676"/>
		<input id="add-to-cart-submit-19676" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-3 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/hel-lada-tomatsoppa-nudlar-8-x-432g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nudelsoppa_tomat.jpg?itok=ArA0fpAV 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/nudelsoppa_tomat.jpg?itok=9xn6ZUfj" alt="" title="Bäst före: 2018-05-17" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              59            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Hel Låda Tomatsoppa Nudlar 8 x 43,2g       </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              99 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="9900" data-cur-price="5900">
                                  40 kr                  (-40%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="27466"/>
		<input id="add-to-cart-submit-27466" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-4 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/tranbar-mandlar-30g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/lagom_karpalot_mantelit.jpg?itok=gqpFwt67 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/lagom_karpalot_mantelit.jpg?itok=kWo_m-I4" alt="" title="Bäst före: 2018-10-26" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              3 för            </span>
          </span>

          <div class="prd-price-num ">
                          20                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            10kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Tranbär &amp; Mandlar 30g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              11 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1000" data-mp-price="1998" data-mp-qty="3" data-normal-price="1100" data-cur-price="1000">
                                  13,02 kr                  (-39%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="3" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37676"/>
		<input id="add-to-cart-submit-37676" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-5 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kokospalmsocker-500g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/kokospalmsocker_500g.jpg?itok=JIHdj_Qw 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/kokospalmsocker_500g.jpg?itok=YZymGpRL" alt="" title="Bäst före: 2020-01-12" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              99            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kokospalmsocker 500g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              124 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="12400" data-cur-price="9900">
                                  25 kr                  (-20%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38441"/>
		<input id="add-to-cart-submit-38441" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-6 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mandelmjol-500g-1">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/superfruit_mandelmjol_500g.jpg?itok=DPUgKDZA 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/superfruit_mandelmjol_500g.jpg?itok=iYVqS-99" alt="" title="Bäst före: 2019-11-07" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              119            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mandelmjöl 500g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              159 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="15900" data-cur-price="11900">
                                  40 kr                  (-25%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38456"/>
		<input id="add-to-cart-submit-38456" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-7 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/termokupor-avent-2-in1-2-pack">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/philips_avent_termopads.jpg?itok=p8EGzMVp 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/philips_avent_termopads.jpg?itok=JfqFuQXK" alt="" title="" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              89            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Termokupor &quot;Avent 2-in1&quot; 2-pack      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              179 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="17900" data-cur-price="8900">
                                  90 kr                  (-50%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37976"/>
		<input id="add-to-cart-submit-37976" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-8 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/energibar-glutenfri-raspberry-ripple-2-x-20g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/raspberry_ripple_bar.jpg?itok=om0WRMay 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/raspberry_ripple_bar.jpg?itok=0NTVJlTj" alt="" title="Bäst före: 2018-08-31" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              3 för            </span>
          </span>

          <div class="prd-price-num ">
                          35                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            15kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Energibar Glutenfri &quot;Raspberry Ripple&quot; 2 x 20g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              31,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1500" data-mp-price="3498" data-mp-qty="3" data-normal-price="3190" data-cur-price="1500">
                                  60,72 kr                  (-63%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="3" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="21106"/>
		<input id="add-to-cart-submit-21106" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-9 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/steriliseringspasar-avent-5-pack">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/philips_avent_stereliser_bags.jpg?itok=Bulu3gGW 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/philips_avent_stereliser_bags.jpg?itok=mcHXOO_f" alt="" title="" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              59            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Steriliseringspåsar &quot;Avent&quot; 5-pack      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              119 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="11900" data-cur-price="5900">
                                  60 kr                  (-50%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37991"/>
		<input id="add-to-cart-submit-37991" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-10 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/napp-classic-3m-medium-2-pack">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/philips_avent_classic_3m.jpg?itok=H6Kz7qJJ 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/philips_avent_classic_3m.jpg?itok=X--z3U5C" alt="" title="" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              25            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Napp &quot;Classic 3m+ Medium&quot; 2-pack      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              59 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="5900" data-cur-price="2500">
                                  34 kr                  (-58%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38041"/>
		<input id="add-to-cart-submit-38041" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-11 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/lakritsstang-28g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/lakritsstang_28g.jpg?itok=Qi0Wi-QZ 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/lakritsstang_28g.jpg?itok=R9laONpY" alt="" title="Bäst före: 2018-09-11" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              2 för            </span>
          </span>

          <div class="prd-price-num ">
                          15                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            10kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Lakritsstång 28g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              17 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1000" data-mp-price="1500" data-mp-qty="2" data-normal-price="1700" data-cur-price="1000">
                                  19 kr                  (-56%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="2" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38501"/>
		<input id="add-to-cart-submit-38501" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-12 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/hel-lada-majskakor-chia-22-x-25g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/hel_lada_majskakor_22chia22_22_x_25g.jpg?itok=wykQptVv 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/hel_lada_majskakor_22chia22_22_x_25g.jpg?itok=jAkvKGwl" alt="" title="Bäst före: 2018-11-26" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              39            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Hel Låda Majskakor &quot;Chia&quot; 22 x 25g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              69 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="6900" data-cur-price="3900">
                                  30 kr                  (-43%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38511"/>
		<input id="add-to-cart-submit-38511" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-13 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/flaskvarmare-avent">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/philips_avent_warmer.jpg?itok=hHA0qF4d 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/philips_avent_warmer.jpg?itok=T_BN9lRX" alt="" title="" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              149            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Flaskvärmare &quot;Avent&quot;       </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              359 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="35900" data-cur-price="14900">
                                  210 kr                  (-58%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38006"/>
		<input id="add-to-cart-submit-38006" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-14 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mork-choklad-gojibar-200g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/mork_choklad_gojibar_200g.jpg?itok=qpdTmU4a 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/mork_choklad_gojibar_200g.jpg?itok=Vmldf2pY" alt="" title="Bäst före: 2020-04-08" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              59            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mörk Choklad Gojibär 200g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              79 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="7900" data-cur-price="5900">
                                  20 kr                  (-25%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38396"/>
		<input id="add-to-cart-submit-38396" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-15 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/jordnotter-bbq-200g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/savory_jodnotter_bbq.jpg?itok=dpw8SrxE 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/savory_jodnotter_bbq.jpg?itok=bI09HhBm" alt="" title="Bäst före: 2018-06-10" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              10            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Jordnötter BBQ 200g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              19,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="1990" data-cur-price="1000">
                                  9,90 kr                  (-50%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37511"/>
		<input id="add-to-cart-submit-37511" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-16 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/spirulinapulver-400g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/spirulinapulver_400g.jpg?itok=mAUDqIdb 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/spirulinapulver_400g.jpg?itok=U4a9UJ7X" alt="" title="Bäst före: 2021-06-27" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              149            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Spirulinapulver 400g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              219 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="21900" data-cur-price="14900">
                                  70 kr                  (-32%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38421"/>
		<input id="add-to-cart-submit-38421" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-17 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/jordnotter-wasabi-200g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/savory_jordnotter_wasabi.jpg?itok=jIpiP_ua 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/savory_jordnotter_wasabi.jpg?itok=ET76FOPY" alt="" title="Bäst före: 2018-06-18" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              10            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Jordnötter Wasabi 200g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              19,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="1990" data-cur-price="1000">
                                  9,90 kr                  (-50%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37506"/>
		<input id="add-to-cart-submit-37506" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-18 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/hampaprotein-500g-0">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/hampaprotein_500g.jpg?itok=IzEi1vKv 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/hampaprotein_500g.jpg?itok=Uxnd02SV" alt="" title="Bäst före: 2019-08-15" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              119            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Hampaprotein 500g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              149 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="14900" data-cur-price="11900">
                                  30 kr                  (-20%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38426"/>
		<input id="add-to-cart-submit-38426" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-19 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/gojibar-450g-0">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/gojibar_450g_eko_.jpg?itok=x5YfmyK8 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/gojibar_450g_eko_.jpg?itok=2v1CDWRO" alt="" title="Bäst före: 2019-10-06" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              199            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Gojibär 450g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              249 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="24900" data-cur-price="19900">
                                  50 kr                  (-20%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38401"/>
		<input id="add-to-cart-submit-38401" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-20 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mork-choklad-thin-100g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/green_blacks_thin_dark_choco.jpg?itok=sJkwttGH 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/green_blacks_thin_dark_choco.jpg?itok=YkMArbyx" alt="" title="Bäst före: 2019-01-03" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              20            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mörk Choklad &quot;Thin&quot; 100g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              31,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="3190" data-cur-price="2000">
                                  11,90 kr                  (-37%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37216"/>
		<input id="add-to-cart-submit-37216" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-21 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/gojibar-450g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/gojibar_450g.jpg?itok=NVfLhBVl 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/gojibar_450g.jpg?itok=Irv3B-uX" alt="" title="Bäst före: 2020-03-16" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num big-number">
            <span>
              119            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Gojibär 450g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              155 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="15500" data-cur-price="11900">
                                  36 kr                  (-23%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38406"/>
		<input id="add-to-cart-submit-38406" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-22 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kokoschips-rostade-200g-0">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/kokoschips_rostade_200g.jpg?itok=tofBrtaM 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/kokoschips_rostade_200g.jpg?itok=gXsw15sW" alt="" title="Bäst före: 2018-12-31" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kokoschips Rostade 200g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              39 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="3900" data-cur-price="2900">
                                  10 kr                  (-26%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38706"/>
		<input id="add-to-cart-submit-38706" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-23 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/russinmix-berry-boost-6-x-28g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/berry_boost_3_pack.jpg?itok=iWl2ZCcN 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/berry_boost_3_pack.jpg?itok=DFH3hL7p" alt="" title="Bäst före: 2018-10-27" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              2 för            </span>
          </span>

          <div class="prd-price-num ">
                          40                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            25kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Russinmix &quot;Berry Boost&quot; 6 x 28g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              39,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="2500" data-mp-price="4000" data-mp-qty="2" data-normal-price="3990" data-cur-price="2500">
                                  39,80 kr                  (-50%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="2" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="23436"/>
		<input id="add-to-cart-submit-23436" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-24 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/smorgaskex-100g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/breton_vinta.jpg?itok=7bGBSwep 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/breton_vinta.jpg?itok=fUsk3wl9" alt="" title="Bäst före: 2018-09-16" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              5            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Smörgåskex 100g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              17,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="1790" data-cur-price="500">
                                  12,90 kr                  (-72%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="6316"/>
		<input id="add-to-cart-submit-6316" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-25 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/proteinsnacks-sourcream-onion-48g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/snackbros_protein_sourcream_onion.jpg?itok=hbzL-VvB 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/snackbros_protein_sourcream_onion.jpg?itok=8pbSjKvn" alt="" title="Bäst före: 2018-09-09" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              15            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Proteinsnacks &quot;Sourcream &amp; Onion&quot; 48g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              29 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2900" data-cur-price="1500">
                                  14 kr                  (-48%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37816"/>
		<input id="add-to-cart-submit-37816" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-26 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/proteinsnacks-jalapeno-48g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/snackbros_proteincrisps_jalapeno.jpg?itok=joqeyKFH 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/snackbros_proteincrisps_jalapeno.jpg?itok=nMPUdfrL" alt="" title="Bäst före: 2018-09-03" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              15            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Proteinsnacks &quot;Jalapeno&quot; 48g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              29 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2900" data-cur-price="1500">
                                  14 kr                  (-48%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37826"/>
		<input id="add-to-cart-submit-37826" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-27 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/proteinsnacks-sweet-chili-48g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/snackbros_crips_sweet_chili.jpg?itok=uBh8yVDs 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/snackbros_crips_sweet_chili.jpg?itok=geHeAXa5" alt="" title="Bäst före: 2018-09-02" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              15            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Proteinsnacks &quot;Sweet Chili&quot; 48g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              29 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2900" data-cur-price="1500">
                                  14 kr                  (-48%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="37821"/>
		<input id="add-to-cart-submit-37821" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-28 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mjolkchoklad-pistagenotter-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_choc_pistagenotter.jpg?itok=H-nkn46w 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_choc_pistagenotter.jpg?itok=qyNEuhgB" alt="" title="Bäst före: 2018-07-21" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mjölkchoklad Pistagenötter 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35666"/>
		<input id="add-to-cart-submit-35666" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-29 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mork-choklad-svartvinbar-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_mork_choklad_svartvinbar.jpg?itok=2y6WxHE6 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_mork_choklad_svartvinbar.jpg?itok=X1VXMOCq" alt="" title="Bäst före: 2018-10-18" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mörk Choklad Svartvinbär 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35646"/>
		<input id="add-to-cart-submit-35646" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-30 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mjolkchoklad-strawberry-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_mjolkchoklad_strawberry.jpg?itok=CrW3ijiT 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_mjolkchoklad_strawberry.jpg?itok=y32XufWe" alt="" title="Bäst före: 2018-10-04" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mjölkchoklad &quot;Strawberry&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35676"/>
		<input id="add-to-cart-submit-35676" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-31 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kokoschips-cinnamon-caramel-40g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/kokoschips_22cinnamon_caramel22_40g.jpg?itok=JC-ma7jh 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/kokoschips_22cinnamon_caramel22_40g.jpg?itok=8_DyHzKr" alt="" title="Bäst före: 2018-09-22" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              19            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kokoschips &quot;Cinnamon &amp; Caramel&quot; 40g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              25 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="2500" data-cur-price="1900">
                                  6 kr                  (-24%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38506"/>
		<input id="add-to-cart-submit-38506" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-32 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mjolkchoklad-turkish-pepper-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_mjolkchoklad_turkisk_peppar.jpg?itok=-CLm3IDv 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_mjolkchoklad_turkisk_peppar.jpg?itok=bIDwMp_r" alt="" title="Bäst före: 2018-11-15" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mjölkchoklad &quot;Turkish Pepper&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35706"/>
		<input id="add-to-cart-submit-35706" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-33 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mork-choklad-sea-salt-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_dark_choc_nibs_salt.jpg?itok=dwqORACV 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_dark_choc_nibs_salt.jpg?itok=hOH-0T1c" alt="" title="Bäst före: 2018-11-22" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mörk Choklad &quot;Sea Salt&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35656"/>
		<input id="add-to-cart-submit-35656" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-34 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/kokoschips-200g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/kokoschips_200g.jpg?itok=kH0Kl2Xo 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/kokoschips_200g.jpg?itok=U3o59ulF" alt="" title="Bäst före: 2018-12-31" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Kokoschips 200g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              39 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="3900" data-cur-price="2900">
                                  10 kr                  (-26%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38711"/>
		<input id="add-to-cart-submit-38711" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-35 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mork-choklad-cherry-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_dark_choc_cherry.jpg?itok=59Wd9AtN 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_dark_choc_cherry.jpg?itok=PeSYHRZ6" alt="" title="Bäst före: 2018-11-22" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mörk Choklad &quot;Cherry&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35651"/>
		<input id="add-to-cart-submit-35651" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-36 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/mjolkchoklad-hallon-lakrits-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/nelleulla_liq_rasp.jpg?itok=ptkedt4c 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/nelleulla_liq_rasp.jpg?itok=Oz6OAmX4" alt="" title="Bäst före: 2018-11-15" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Mjölkchoklad Hallon &amp; Lakrits 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              89 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="8900" data-cur-price="2900">
                                  60 kr                  (-67%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35671"/>
		<input id="add-to-cart-submit-35671" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-37 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/bovetekakor-chiafron-havssalt-125g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/bovetekakor_chiafron_havssalt_125g.jpg?itok=gBnRQMGB 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/bovetekakor_chiafron_havssalt_125g.jpg?itok=kHEnD4n0" alt="" title="Bäst före: 2018-11-22" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              2 för            </span>
          </span>

          <div class="prd-price-num ">
                          15                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            10kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Bovetekakor Chiafrön &amp; Havssalt 125g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              19,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1000" data-mp-price="1500" data-mp-qty="2" data-normal-price="1990" data-cur-price="1000">
                                  24,80 kr                  (-62%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="2" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38521"/>
		<input id="add-to-cart-submit-38521" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-38 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/linskakor-pizza-125g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/linskakor_22pizza22_125g.jpg?itok=wrZls4Tw 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/linskakor_22pizza22_125g.jpg?itok=JyGt3T9u" alt="" title="Bäst före: 2018-12-07" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              2 för            </span>
          </span>

          <div class="prd-price-num ">
                          15                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            10kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Linskakor &quot;Pizza&quot; 125g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              19,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1000" data-mp-price="1500" data-mp-qty="2" data-normal-price="1990" data-cur-price="1000">
                                  24,80 kr                  (-62%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="2" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38516"/>
		<input id="add-to-cart-submit-38516" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-39 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/godis-black-box-3-x-150g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/wally_whiz_the_black_box.jpg?itok=uyDbzw4l 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/wally_whiz_the_black_box.jpg?itok=OFqmfOIp" alt="" title="Bäst före: 2019-08-17" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              79            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Godis &quot;The Black Box&quot; 3 x 150g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              269 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="26900" data-cur-price="7900">
                                  190 kr                  (-71%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="36071"/>
		<input id="add-to-cart-submit-36071" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-40 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/bonchips-50g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/bonchips.jpg?itok=zbiQFTMQ 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/bonchips.jpg?itok=JpXtUWzr" alt="" title="Bäst före: 2018-08-16" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              2 för            </span>
          </span>

          <div class="prd-price-num ">
                          20                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            15kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Bönchips 50g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              45 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1500" data-mp-price="2000" data-mp-qty="2" data-normal-price="4500" data-cur-price="1500">
                                  70 kr                  (-78%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="2" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="28966"/>
		<input id="add-to-cart-submit-28966" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-41 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/artchips-45g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/artchips_renee_voltaire_45g.jpg?itok=CCKynx_Z 2x" getsize="" typeof="foaf:Image" src="https://cdn1.matsmart.se/sites/se/files/styles/product_teaser/public/products/artchips_renee_voltaire_45g.jpg?itok=xB8TMxUc" alt="" title="Bäst före: 2018-08-16" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              2 för            </span>
          </span>

          <div class="prd-price-num ">
                          20                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            15kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Ärtchips 45g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              45 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1500" data-mp-price="2000" data-mp-qty="2" data-normal-price="4500" data-cur-price="1500">
                                  70 kr                  (-78%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="2" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="28971"/>
		<input id="add-to-cart-submit-28971" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-42 views-row-even">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/godis-flatad-klubba-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/sweetpeople_twisted.jpg?itok=_c8uKhgU 2x" getsize="" typeof="foaf:Image" src="https://cdn4.matsmart.se/sites/se/files/styles/product_teaser/public/products/sweetpeople_twisted.jpg?itok=M4GukQ3E" alt="" title="Bäst före: 2018-11-30" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Godis Flätad Klubba 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              50 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="5000" data-cur-price="2900">
                                  21 kr                  (-42%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35721"/>
		<input id="add-to-cart-submit-35721" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-43 views-row-odd">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/godis-tivoli-80g">
    <div class="top">

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/sweetpeople_tivoli.jpg?itok=OV-gQWMg 2x" getsize="" typeof="foaf:Image" src="https://cdn3.matsmart.se/sites/se/files/styles/product_teaser/public/products/sweetpeople_tivoli.jpg?itok=SKQuYpLR" alt="" title="Bäst före: 2018-11-30" />        </span>
      </div>

      <div class="prd-price  no-mp ">
                          <div class="prd-price-num ">
            <span>
              29            </span>

            <span class="no-mp-trail">
              :-<span class="unit">st</span>            </span>
          </div>
              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Godis &quot;Tivoli&quot; 80g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              50 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-normal-price="5000" data-cur-price="2900">
                                  21 kr                  (-42%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="1" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="35726"/>
		<input id="add-to-cart-submit-35726" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
  <div class="views-row views-row-44 views-row-even views-row-last">
    <div itemscope itemtype="http://schema.org/Product" class="prd">
  <a href="/pasta-tricolore-500g">
    <div class="top">
                      	<span class="prd-image-tag"><img src="https://cdn3.matsmart.se/sites/se/files/matsmart-product-badge-679.png" /></span>

      <div class="product-teaser-photo-wrap">
        <span class="product-photo teaser">
          <img itemprop="image" class="zoom" srcset="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser_2x/public/products/pasta_22tricolore22_500g.jpg?itok=U9_vtffh 2x" getsize="" typeof="foaf:Image" src="https://cdn2.matsmart.se/sites/se/files/styles/product_teaser/public/products/pasta_22tricolore22_500g.jpg?itok=IuUBH8zV" alt="" title="Bäst före: 2020-07-09" />        </span>
      </div>

      <div class="prd-price ">

          <span class="prd-mp">
            <span class="prd-mp-text">
              3 för            </span>
          </span>

          <div class="prd-price-num ">
                          45                        <span class="trail">
              :-            </span>
          </div>

          <span class="prd-mp-unit">
            19kr/st          </span>

              </div>
    </div>

    <div class="middle">
      <span class="prd-name" itemprop="name">
        Pasta &quot;Tricolore&quot; 500g      </span>

      <div class="prd-price-row">
        <span>
          Normalpris:
                      <s>
              22,90 kr/st            </s>
                  </span>

        <span class="prd-discount">
                      <span class="prd-discount-oldprice">
              Du sparar:
              <span  data-orig="1900" data-mp-price="4500" data-mp-qty="3" data-normal-price="2290" data-cur-price="1900">
                                  23,70 kr                  (-34%)
                              </span>
            </span>
                  </span>
      </div>
    </div>
  </a>
  <div class="prd-atc">
    <div class="field field-name-field-productref field-type-commerce-product-reference field-label-hidden"><div class="field-items"><div class="field-item even"><form class="commerce-add-to-cart matsmart-atc" action="/api/v1.0/carts" method="post" accept-charset="UTF-8">
	<div>
		<div class="form-item form-type-textfield form-item-quantity quantity-wrapper">
			<label>Antal </label>
			<input type="text" name="quantity" value="3" size="3" class="form-text"/>
                        <div class="product quantity-buttons">
                          <div class="button increase">
                            <span class="icon plus">+</span>
                          </div>
                          <div class="button decrease">
                            <span class="icon minus">-</span>
                          </div>
                        </div>
		</div>
		<input type="hidden" name="product_id" value="38386"/>
		<input id="add-to-cart-submit-38386" type="submit" name="op" value="Köp" class="form-submit ms-button"/>
	</div>
</form></div></div></div>  </div>
</div>
  </div>
    </div>






</div>    </div>
</div>

  </div>
        </div>

                </div>
      </div>
    </div>
  </div>
</div>

<div id="footer">
  <div id="wrap-footer-links">
    <div id="footer-links">
      <div class="wrap-links">
          <div class="region region-footer-first">
    <div id="block-menu-menu-om-matsmart" class="footer-block block block-menu">
    <h3>OM MATSMART</h3><ul><li class="first leaf"><a href="http://www.matsmart.se/sa-funkar-det" target="_blank">Så funkar det</a></li>
<li class="leaf"><a href="http://www.matsmart.se/om-bast-fore-datum" title="">Om Bäst-före-datum</a></li>
<li class="leaf"><a href="http://www.matsmart.se/om-matsvinnet" title="">Om matsvinnet</a></li>
<li class="last leaf"><a href="http://www.matsmart.se/matsvinnsskolan" title="">Matsvinnsskolan</a></li>
</ul></div>

  </div>
      </div>
      <div class="wrap-links">
          <div class="region region-footer-second">
    <div id="block-menu-menu-product-support" class="footer-block block block-menu">
    <h3>KUNDTJÄNST</h3><ul><li class="first leaf"><a href="https://matsmart.zendesk.com/hc/sv/categories/200944885-Vanliga-fr%C3%A5gor" target="_blank">Vanliga frågor och svar</a></li>
<li class="leaf"><a href="http://www.matsmart.se/handla-och-betala" title="">Handla och betala</a></li>
<li class="leaf"><a href="http://www.matsmart.se/leverans-och-frakt" title="">Leverans och frakt</a></li>
<li class="leaf"><a href="http://www.matsmart.se/hamta-din-bestallning-pa-matsmarts-lager" title="">Hämta på vårt lager</a></li>
<li class="last leaf"><a href="http://www.matsmart.se/kundservice" title="">Kontakta oss</a></li>
</ul></div>  </div>
      </div>
      <div class="wrap-links">
          <div class="region region-footer-third">
    <div id="block-menu-menu-credit-cards" class="footer-block block block-menu">
    <h3>NYHETER / PRESS</h3><ul><li class="first leaf"><a href="http://www.matsmart.se/matsmart-i-media" title="">Matsmart i media</a></li>
<li class="last leaf"><a href="http://www.matsmart.se/nyhetsbrev" title="">Nyhetsbrev</a></li>
</ul></div>  </div>
      </div>
      <div class="wrap-links">
          <div class="region region-footer-fourth">
    <div id="block-menu-menu-reward-zone-program" class="footer-block block block-menu">
    <h3>ÖVRIGT</h3><ul><li class="first leaf"><a href="http://www.matsmart.se/cookies" title="">Cookies</a></li>
<li class="leaf"><a href="/integritetspolicy">Integritetspolicy</a></li>
<li class="leaf"><a href="https://matsmart.zendesk.com/hc/sv/articles/208224305-Allm%C3%A4nna-villkor" target="_blank">Allmänna villkor</a></li>
<li class="leaf"><a href="http://www.matsmart.se/om-bolaget" title="">Om bolaget</a></li>
<li class="last leaf"><a href="http://www.tryggehandel.se/butik/1348/" target="_blank">Trygg e-handel</a></li>
</ul></div>  </div>
      </div>
      <div class="wrap-links">
          <div class="region region-footer-fifth">
    <div id="block-menu-menu-legal" class="footer-block block block-menu">
    <h3>KONTAKT</h3><ul><li class="first leaf"><a href="http://www.matsmart.se/kundservice" title="">Kundservice</a></li>
<li class="leaf"><a href="http://www.matsmart.se/press" title="">Press</a></li>
<li class="leaf"><a href="https://people.matsmart.se" target="_blank">Jobb</a></li>
<li class="last leaf"><a href="http://www.matsmart.se/leverantorer" title="">För leverantörer</a></li>
</ul></div>  </div>
      </div>
      <div class="wrap-links">
          <div class="region region-footer-sixth">
    <div id="block-menu-menu-f-lj-oss-" class="footer-block block block-menu">
    <h3>FÖLJ OSS!</h3><ul><li class="first leaf"><a href="https://www.facebook.com/pages/Mat-Smart/101341883359561?fref=ts" title="Matsmart Facebook" target="_blank">Facebook</a></li>
<li class="leaf"><a href="https://www.instagram.com/matsmart.se/" title="Matsmart Instagram" target="_blank">Instagram</a></li>
<li class="last leaf"><a href="https://twitter.com/matsmart_se" title="Matsmart Twitter" target="_blank">Twitter</a></li>
</ul></div>

  </div>
      </div>
    </div>
  </div>
  <div id="wrap-footer-logo">
    <div id="footer-logo">
      <div id="footer-logo-img">
      </div>
      <div id="footer-logo-text"><span id="footer-logo-text-span">© Matsmart</span></div>
    </div>
  </div>
</div>
<div id="back-to-top"><a href="#"><img src="/sites/all/themes/retailshop/images/icons/icon_arrow.svg" alt="↑" /></a></div>
  <script type="text/javascript">
<!--//--><![CDATA[//><!--
function euCookieComplianceLoadScripts() {}
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var eu_cookie_compliance_cookie_name = "";
//--><!]]>
</script>
<script type="text/javascript" src="https://cdn2.matsmart.se/sites/se/files/js/js_Sf5pqUQYiaysCTJ2d3ubWVLS742UXH96VZ7fwJ4C2Xs.js"></script>
</div>
  <div id="mobile-menu">
    <ul class="links"><li class="link-to-home first active"><a href="/" class="active">Front</a></li>
<li class="link-to-login"><a href="/user">Logga in</a></li>
<li class="menu-6835"><a href="/storpack-fynda-hela-lador">Storpack: Fynda hela lådor</a></li>
<li class="menu-6816"><a href="/skafferiet">Skafferiet</a></li>
<li class="menu-20571"><a href="https://www.matsmart.se/pasta-ris-och-nudlar-1">Pasta, ris och nudlar</a></li>
<li class="menu-6822"><a href="/drycker">Drycker</a></li>
<li class="menu-6823"><a href="/godis">Godis</a></li>
<li class="menu-6824"><a href="/snacks">Snacks</a></li>
<li class="menu-6828"><a href="/produkter/halsa">Träning &amp; vikt </a></li>
<li class="menu-6820"><a href="/barn-0">Barn</a></li>
<li class="menu-6821"><a href="/te-kaffe">Te &amp; kaffe</a></li>
<li class="menu-6819"><a href="/produkter/brod-kakor-kex">Bröd, kakor &amp; kex</a></li>
<li class="menu-20556"><a href="https://www.matsmart.se/bakning">Bakning</a></li>
<li class="menu-6817"><a href="/kryddor">Kryddor</a></li>
<li class="menu-6818"><a href="/saser-oljor">Såser &amp; oljor</a></li>
<li class="menu-5384"><a href="/ekologiskt">Ekologiskt</a></li>
<li class="menu-9955"><a href="/glutenfritt">Glutenfritt</a></li>
<li class="menu-6825"><a href="/produkter/har-kropp-intim">Hår, kropp &amp; intim</a></li>
<li class="menu-6827"><a href="/produkter/munvard">Munvård</a></li>
<li class="menu-6834"><a href="/apotek">Apotek</a></li>
<li class="menu-6832"><a href="/spara-och-forvara">Spara och förvara</a></li>
<li class="menu-6829"><a href="/produkter/stad-tvatt-disk">Städ, tvätt &amp; disk</a></li>
<li class="menu-6830"><a href="/i-koket">I köket</a></li>
<li class="menu-6836"><a href="/husdjur">Husdjur</a></li>
<li class="menu-20551"><a href="https://www.matsmart.se/boxar">Boxar</a></li>
<li class="menu-20386"><a href="https://www.matsmart.se/utförsäljning">Utförsäljning</a></li>
<li class="menu-23366"><a href="https://www.matsmart.se/lowengrip-cc-utforsaljning">Löwengrip C&amp;C-utförsäljning </a></li>
<li class="menu-25186"><a href="https://www.matsmart.se/elgigantens-lagerrensning">Elgigantens lagerrensning</a></li>
<li class="menu-5967"><a href="/allmanna-villkor" title="">Allmänna villkor</a></li>
<li class="menu-5965"><a href="/handla-och-betala" title="">Handla &amp; betala</a></li>
<li class="menu-5963"><a href="/kundservice" title="">Kundservice</a></li>
<li class="menu-5966 last"><a href="/leverans-och-frakt" title="">Leverans &amp; frakt</a></li>
</ul>  </div>
<script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "/sites/all/themes/retailshop/js/zendesk.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"dfd1b5d947","applicationID":"30533369","transactionName":"b1RaYRdZWkBWBkVZXlYeeVYRUVtdGAhQREJVUEpBOltbXloAQ1NUZ1dKWgtMa0NWAlQ=","queueTime":0,"applicationTime":294,"atts":"QxNZF19DSU4=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
`;

describe('it can find categories', () => {

  test('on the start page', () => {
    const categories = parseCategories(html);

    expect(categories).toMatchSnapshot();
  });

});
