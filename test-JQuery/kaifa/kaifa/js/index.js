// ;(function($){
// 	$('.dropdown').dropdown();
// })(jQuery)
;(function($){
	/*
	$('.dropdown').dropdown({
		delay:200,
		// eventName:'click'
	});
	$('.dropdown').on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log('1::',ev.type)
	})
	*/

	//dropdown暴漏接口测试
	/*
	$('button').on('click',function(){
		$('.dropdown').dropdown('show')
	})
	*/


	var $menuDropdown = $('.dropdown');
	$menuDropdown.dropdown({
		delay:200,
	})
	$menuDropdown.on('dropdown-show',function(ev){
		var $elem = $(this);
		var loadUrl = $elem.data('load');
		if(!loadUrl) return;
		var isLoaded =  $elem.data('isLoaded')
		if(isLoaded) return;
		var $layer = $elem.find('.dropdown-layer')
		$.getJSON(loadUrl,function(data){
			var html = ''
			for(var i = 0;i<data.length;i++){
				html += '<li class="menu-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
			}
			//模拟网络延时
			setTimeout(function(){
				$layer.html(html);
				$elem.data('isLoaded',true)
			},1000)
			
		})
	})

	//搜索框
	var $search = $('.header .search')
	$search.search({
		
	})
})(jQuery)