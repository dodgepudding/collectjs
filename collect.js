(function(){
	var tagprefix = 'demo_';
	var shareurl = 'http://www.baidu.com?url=';
	var dialogtitle = 'tips';
	var dialogwidth = '720';
	var dialogheight = '600';
	var dialogmask;
	var dialoghandle;
	function createElement(e, t) {
		var n = document.createElement(t || "div");
		return n.id = tagprefix + e, n;
	}
	function getElement(e) {
		return document.getElementById(tagprefix + e);
	}
	var closeDialog = function(){
		var astyle = getElement("style");
		var p = astyle.parentNode;
		p.removeChild(dialogmask);
		p.removeChild(dialoghandle);
		p.removeChild(astyle);
		return;
	};
	var validateUrl = function(url) {
        if (url.indexOf('http://')!==0 && url.indexOf('https://')!==0) return false;
        //TODO: validate url
        return true;
    };
	var fetch = function(){
		var url = location.href;
		if (!validateUrl(url)) {
			alert('url error');
			return;
		}
		var styledom = getElement("style");
		var bm = 0 <= navigator.userAgent.indexOf("MSIE") && 0 > navigator.userAgent.indexOf("Opera");
		if (!styledom || "link" !== styledom.tagName.toLowerCase()) {
			styledom = createElement("style","link");
			styledom.rel="stylesheet";
			styledom.type = "text/css"; 
			styledom.className= "collectjs";
			styledom.href = "css/collect.css"; 
			bm ? document.getElementsByTagName("head")[0].appendChild(styledom): document.body.appendChild(styledom);
			dialogmask = createElement("mask");
			dialogmask.className = tagprefix+"mask";
			document.body.appendChild(dialogmask);
			dialoghandle = createElement("sharebox");
			dialoghandle.className = tagprefix+'outer '+tagprefix+'state-lock '+tagprefix+'state-visible '+tagprefix+'state-focus';
			document.body.appendChild(dialoghandle);
			var tourl = shareurl+encodeURIComponent(url);
			var content = '<table class="'+tagprefix+'border"><tbody><tr><td class="'+tagprefix+'nw"></td><td class="'+tagprefix+'n"></td><td class="'+tagprefix+'ne"></td></tr><tr><td class="'+tagprefix+'w"></td><td class="'+tagprefix+'c"><div class="'+tagprefix+'inner"><table class="'+tagprefix+'dialog"><tbody><tr><td class="'+tagprefix+'header"><div class="'+tagprefix+'titleBar"><div class="'+tagprefix+'title" style="">tips</div><a class="'+tagprefix+'close" href="javascript:document.'+tagprefix+'.closeDialog()">×</a></div></td></tr><tr><td class="'+tagprefix+'main" style="width: '+dialogwidth+'px; height: '+dialogheight+'px; "><div class="'+tagprefix+'content"><iframe width="'+dialogwidth+'px" height="'+dialogheight+'px" name="idialogform" id="idialogform" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" border="0" src="'+tourl+'"></iframe></div></td></tr><tr><td class="'+tagprefix+'footer"></td></tr></tbody></table></div></td><td class="'+tagprefix+'e"></td></tr><tr><td class="'+tagprefix+'sw"></td><td class="'+tagprefix+'s"></td><td class="'+tagprefix+'se"></td></tr></tbody></table>';
			dialoghandle.innerHTML = content;
		}
	};
	if (typeof document[tagprefix]=='undefined' || !document[tagprefix]._loaded) {
		document[tagprefix] = document[tagprefix] || {};
		document[tagprefix]._loaded = !0; 
		document[tagprefix].fetchShare = fetch;
		document[tagprefix].closeDialog = closeDialog;
		document[tagprefix].fetchShare();
	} else {
		document[tagprefix].fetchShare();
	}
})();