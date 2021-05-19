// 移动适配方案
;
(function(win) {
	var doc = win.document;
	var docEle = doc.documentElement;
	var _t;
	// console.log(doc);
	// console.log(docEle);

	function refreshRemFn() {
		var _width = docEle.getBoundingClientRect().width;
		if (_width > 640) {
			_width = 640;
		};

		// 1rem = 100px
		var _rem = _width / 6.4;
		docEle.style.fontSize = _rem + 'px';
	}

	win.addEventListener('resize', function() {
		clearTimeout(_t);
		_t = setTimeout(refreshRemFn, 300)
	}, false);

	refreshRemFn();

})(window)
