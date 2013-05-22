(function(){
	var tagprefix = 'demo_';
	var shareurl = 'http://www.baidu.com?url=';
	var stylecss = 'http://127.0.0.1/~admin/collectjs/css/collect.css';
	var dialogtitle = 'Share';
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
		var dialogmask = document.getElementById(tagprefix + "mask");
		var dialoghandle = document.getElementById(tagprefix + "sharebox");
		dialoghandle.style.display="none";
		dialogmask.className = tagprefix+'mask hide';
		//p.removeChild(dialogmask);
		//p.removeChild(dialoghandle);
		//p.removeChild(astyle);
		return false;
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
		if (!styledom || "link" !== styledom.tagName.toLowerCase()) {
			var bm = 0 <= navigator.userAgent.indexOf("MSIE") && 0 > navigator.userAgent.indexOf("Opera");
			styledom = createElement("style","link");
			styledom.rel="stylesheet";
			styledom.type = "text/css"; 
			styledom.className= "collectjs";
			styledom.href = stylecss; 
			bm ? document.getElementsByTagName("head")[0].appendChild(styledom): document.body.appendChild(styledom);
		}
		dialogmask = getElement("mask")?getElement("mask"):createElement("mask");;
		dialogmask.className = tagprefix+"mask";
		dialogmask.onclick = closeDialog;
		document.body.appendChild(dialogmask);
		dialoghandle = getElement("sharebox")?getElement("sharebox"):createElement("sharebox");
		dialoghandle.className = tagprefix+'modal fade';
		dialoghandle.style.display="none";
		var tourl = shareurl+encodeURIComponent(url);
		var content = '<div class="modal-header"><button type="button" class="close" onclick="javascript:document.'+tagprefix+'.closeDialog()">&times;</button><h3>'+dialogtitle+'</h3></div><div class="modal-body"><iframe width="'+dialogwidth+'px" height="'+dialogheight+'px" id="'+tagprefix+'iframe" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" border="0" scrolling="no" src="'+tourl+'"></iframe></div><div class="modal-footer"></div>';
		dialoghandle.innerHTML = content;
		document.body.appendChild(dialoghandle);
		setTimeout(function(){
			dialoghandle.style.display="block";
			setTimeout(function(){
				dialoghandle.className = tagprefix+'modal fade in';
			},200);
		},100);
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