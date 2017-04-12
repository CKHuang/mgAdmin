var menuHtml = [
	'<ul class="nav">',
		'<li class="active">',
			'<a href="javascript:;" >基础</a>',
			'<ul class="nav nav-sub">',
				'<li>',
					'<a href="./color.html">颜色（color）</a>',
				'</li>',
				'<li>',
					'<a href="./space.html">间隙（space）</a>',
				'</li>',
				'<li>',
					'<a href="./text.html">文本（text）</a>',
				'</li>',
				'<li>',
					'<a href="./label.html">标签（label）</a>',
				'</li>',
				'<li>',
					'<a href="./button.html">按钮（button）</a>',
				'</li>',
				'<li>',
					'<a href="./alert.html">告警（alert）</a>',
				'</li>',

				'<li>',
					'<a href="./helper.html">辅助（helper）</a>',
				'</li>',
			'</ul>',
		'</li>',
		'<li>',
			'<a href="javascript:;">Components</a>',
			'<ul class="nav nav-sub">',
				'<li>',
					'<a href="./form.html">表单（form）</a>',
				'</li>',
			'</ul>',
		'</li>',
		'<li>',
			'<a href="javascript:;">Layout</a>',
			'<ul class="nav nav-sub">',
				'<li>',
					'<a href="./grid.html">栅格（grid）</a>',
				'</li>',
			'</ul>',
		'</li>',
	'</ul>'
].join("");

window.onload = function() {
	document.querySelector('#menu').innerHTML = menuHtml;
}