(function(){
	var tagprefix = 'demo_';
	var shareurl = 'http://www.domain.com/share.php?url=';
	var dialogmask;
	var dialoghandle;
	function createElement(e, t) {
		var n = document.createElement(t || "div");
		return n.id = tagprefix + e, n;
	}
	function getElement(e) {
		return document.getElementById(tagprefix + e);
	}
	collectjs_closedialog = function(){
		var astyle = getElement("style");
		var p = astyle.parentNode;
		p.removeChild(dialogmask), p.removeChild(dialoghandle);p.removeChild(astyle);
		return;
	};
	var validateurl = function(url) {
        if (url.indexOf('http://')!==0 && url.indexOf('https://')!==0) return false;
        //TODO: validate url
        return true;
    }
	var fetch = function(){
		var url = location.href;
		if (!validateurl(url)) {
			alert('url error');
			return;
		}
		var styledom = getElement("style");
		var bm = 0 <= navigator.userAgent.indexOf("MSIE") && 0 > navigator.userAgent.indexOf("Opera");
		if (!styledom || "link" !== styledom.tagName.toLowerCase()) {
			styledom = createElement("style","style");
			styledom.rel="stylesheet";
			styledom.type = "text/css"; 
			styledom.href = "/css/baobei.css"; 
			bm ? document.getElementsByTagName("head")[0].appendChild(styledom): document.body.appendChild(styledom);
			dialogmask = createElement("mask");
			document.body.appendChild(dialogmask);
			dialoghandle = createElement("sharebox");
			document.body.appendChild(dialoghandle);
			var tourl = shareurl+encodeURIComponent(url);
			var content = '<div class="d-outer d-state-lock d-state-visible d-state-focus"><table class="d-border"><tbody><tr><td class="d-nw"></td><td class="d-n"></td><td class="d-ne"></td></tr><tr><td class="d-w"></td><td class="d-c"><div class="d-inner"><table class="d-dialog"><tbody><tr><td class="d-header"><div class="d-titleBar"><div class="d-title" style="">米铺采集</div><a class="d-close" href="javascript:collectjs_closedialog();">×</a></div></td></tr><tr><td class="d-main" style="width: 600px; height: 700px; "><div class="d-content"><iframe width="600px" height="700px" name="idialogform" id="idialogform" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" border="0" src="'+tourl+'"></iframe></div></td></tr><tr><td class="d-footer"></td></tr></tbody></table></div></td><td class="d-e"></td></tr><tr><td class="d-sw"></td><td class="d-s"></td><td class="d-se"></td></tr></tbody></table></div>';
			dialoghandle.innerHTML = content;
		}
	};
	if (typeof document[domainname]=='undefined' || !document[domainname]._loaded) {
		document[domainname] = document[domainname] || {};
		document[domainname]._loaded = !0; 
		document[domainname].fetchShare = fetch;
		document[domainname].fetchShare();
	} else {
		document[domainname].fetchShare();
	}
})();