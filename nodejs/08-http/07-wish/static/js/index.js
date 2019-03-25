(function($){

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	var $wish = $('.wish');
	var $wall = $('.wall')
	//获取父容器和自身宽高
	var wishWidth = $wish.width(),
		wishHeight = $wish.height(),
		wallWidth = $wall.width(),
		wallHeight = $wall.height()
	//1.让卡片拖拽
	$wish.pep({constrainTo:'.wall'});
	//2.随机显示卡片
	$wish.each(function(){
		let x = getRandom(0,wallWidth - wishHeight);
		let y = getRandom(0,wallHeight - wishHeight)
		$(this).css({
			transform: "matrix(1, 0, 0, 1, "+x+","+y+")"
		})
	})

})(jQuery);	