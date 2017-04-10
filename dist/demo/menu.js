var menuHtml = [
	'<ul class="nav">',
		'<li class="active">',
			'<a href="javascript:;" >基础</a>',
			'<ul class="nav nav-sub">',
				'<li>',
					'<a href="./text.html">文本（text）</a>',
				'</li>',
				'<li>',
					'<a href="./space.html">间隙（space）</a>',
				'</li>',
			'</ul>',
		'</li>',
		'<li>',
			'<a href="javascript:;">Components</a>',
		'</li>',
		'<li>',
			'<a href="javascript:;">Layout</a>',
		'</li>',
	'</ul>'
].join("");

window.onload = function() {
	document.querySelector('#menu').innerHTML = menuHtml;
}