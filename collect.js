(function(){
	var domainname = '_mipu_';
	var sitename = 'www.mipu100.com';
	var dialogmask;
	var dialoghandle;
	function createDiv(e, t) {
		var n = document.createElement(t || "div");
		return n.id = global + "_" + e, n;
	}
	mipu_closedialog = function(){
		var astyle = document.getElementById("mipustyle");
		var p = astyle.parentNode;
		p.removeChild(dialogmask), p.removeChild(dialoghandle);p.removeChild(astyle);
		return;
	};
	var judgeurl = function(a) {
        var b, c = "null";
        if (null == a) b = ""; else {
            var e = a.match(/.*\:\/\/([^\/]*).*/);
            "undefined" != typeof e && null != e && (c = e[1]), b = c;
        }
        var c = ("spu.tmall.com" == b || "detail.tmall.com" == b) && -1 != a.indexOf("spu_detail.htm?"), e = ("item.tmall.com" == b || "detail.tmall.com" == b) && -1 != a.indexOf("item.htm?"), d = "item.taobao.com" == b && -1 != a.indexOf("item.htm?"), h = "item.taobao.com" == b && -1 != a.indexOf("item_detail.htm"), g = "item.lp.taobao.com" == b && -1 != a.indexOf("item.htm?"), a = "ju.taobao.com" == b && -1 != a.indexOf("home.htm?");
        return d || h || g || a ? "tb" : c || e ? "tmall" : !1;
    }
	var fetch = function(){
		var url = location.href;
		if (!judgeurl(url)) {
			alert('这不是淘宝宝贝地址>_<');
			return;
		}
		var styledom = document.getElementById("mipustyle");
		var bm = 0 <= navigator.userAgent.indexOf("MSIE") && 0 > navigator.userAgent.indexOf("Opera");
		if (!styledom || "link" !== styledom.tagName.toLowerCase()) {
			styledom = document.createElement("link");
			styledom.id = "mipustyle";
			styledom.rel="stylesheet";
			styledom.type = "text/css"; 
			styledom.href = "http://"+sitename+"/statics/js/artDialog/skins/baobei.css"; 
			bm ? document.getElementsByTagName("head")[0].appendChild(styledom): document.body.appendChild(styledom);
			dialogmask = document.createElement("div");
			dialogmask.setAttribute("id", "mipu_mask");
			document.body.appendChild(dialogmask);
			dialoghandle = document.createElement("div");
			dialoghandle.setAttribute("id", "mipu_baobei");
			document.body.appendChild(dialoghandle);
			var vars = [];
			vars.push('http://');
			vars.push(sitename);
			vars.push('/share/index/?url=');
			vars.push(encodeURIComponent(url));
			var url = vars.join("");
			var content = '<div class="d-outer d-state-lock d-state-visible d-state-focus"><table class="d-border"><tbody><tr><td class="d-nw"></td><td class="d-n"></td><td class="d-ne"></td></tr><tr><td class="d-w"></td><td class="d-c"><div class="d-inner"><table class="d-dialog"><tbody><tr><td class="d-header"><div class="d-titleBar"><div class="d-title" style="">米铺采集</div><a class="d-close" href="javascript:mipu_closedialog();">×</a></div></td></tr><tr><td class="d-main" style="width: 600px; height: 700px; "><div class="d-content"><iframe width="600px" height="700px" name="idialogform" id="idialogform" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" border="0" src="'+url+'"></iframe></div></td></tr><tr><td class="d-footer"></td></tr></tbody></table></div></td><td class="d-e"></td></tr><tr><td class="d-sw"></td><td class="d-s"></td><td class="d-se"></td></tr></tbody></table></div>';
			dialoghandle.innerHTML = content;
		}
	};
	if (typeof document[domainname]=='undefined' || !document[domainname]._loaded) {
		document[domainname] = document[domainname] || {};
		document[domainname]._loaded = !0; 
		document[domainname].fetchBaobei = fetch;
		document[domainname].fetchBaobei();
	} else {
		document[domainname].fetchBaobei();
	}
})();