// ;(function($){
// 	$('.dropdown').dropdown();
// })(jQuery)
;(function($){

	function loadHtmlOnce($elem,cb){
		var loadUrl = $elem.data('load');
		if(!loadUrl) return;
		var isLoaded = $elem.data('isLoaded');
		if(isLoaded) return;
		$.getJSON(loadUrl,function(data){
			typeof cb == 'function' && cb($elem,data);
		})		
	}
	//获取数据
	function getDataOnce($elem,url,cb){
		var data = $elem.data(url);
		if(!data){
			console.log('get data once ..');
			$.getJSON(url,function(resData){
				$elem.data(url,resData);
				cb(resData);
			})
		}else{
			cb(data);
		}
	}	
	//加载图片
	function loadImage(imgUrl,success,error){
		var image = new Image();

		image.onload = function(){
			typeof success == 'function' && success(imgUrl);
		}
		image.onerror = function(){
			typeof error == 'function' && error(imgUrl);
		}
		//模拟网络延时
		setTimeout(function(){
			image.src = imgUrl;	
		},500)	
	}
	/*
		懒加载共通函数
		options = {
			totalItemNum:5,
			$elem:$elem,
			eventName:'carousel-show',
			eventPerfix:'carousel'
		}
	 */
	function lazyLoad(options){
		var item = {},
		 	totalItemNum = options.totalItemNum,
		 	totalLoadedItemNum = 0,
		 	loadFn = null,
		 	$elem = options.$elem,
		 	eventName = options.eventName,
		 	eventPerfix = options.eventPerfix;
		//1.开始加载
		$elem.on(eventName,loadFn = function(ev,index,elem){
			if(item[index] != 'loaded'){
				//2.具体的加载分离,在具体调用时监听事件eventPerfix+'-load'来执行
				$elem.trigger(eventPerfix+'-load',[index,elem,function(){
					item[index] = 'loaded';
					totalLoadedItemNum++;
					if(totalItemNum == totalLoadedItemNum){
						$elem.trigger(eventPerfix+'-loaded');
					}					
				}]);
			}
		});
		//3.加载结束
		$elem.on(eventPerfix+'-loaded',function(){
			$elem.off(eventName,loadFn);
		});			
	}	

	//顶部下拉菜单
	var $menuDropdown = $('.nav-side .dropdown');

	$menuDropdown.on('dropdown-show',function(ev){
		loadHtmlOnce($(this),buildMenuLayer);
	});
	function buildMenuLayer($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<li><a href="'+data[i].url+'" class="menu-item">'+data[i].name+'</a></li>'
		}
		//模拟网络延时
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000);
	}

	$menuDropdown.dropdown({
		delay:200,
	});


	//搜索框
	var $search = $('.header .search');
	$search.on('getData',function(ev,data){
		var html = getSearchLayerHtml(data,5);
		$search.search('appendHtml',html)
		if(html == ''){
			$search.search('hideLayer');
		}else{
			$search.search('showLayer');
		}
	});
	$search.on('getNoData',function(){
		$search.search('appendHtml','');
		$search.search('hideLayer');
	});	

	function getSearchLayerHtml(data,maxNum){
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			if(i >= maxNum) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html;		
	}

	$search.search();

	//分类列表
	var $categoryDropdown = $('.category .dropdown');

	$categoryDropdown.on('dropdown-show',function(ev){
		loadHtmlOnce($(this),buildCategoryLayer)
	});
	function buildCategoryLayer($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<dl class="category-details"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">';
			for(var j = 0;j<data[i].items.length;j++){
				html += '<a href="#" class="link">'+data[i].items[j]+'</a>';
			}
			html += '</dd></dl>';
		}
		//模拟网络延时
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000);		
	}
	$categoryDropdown.dropdown({
		delay:200,
		js:true,
		mode:"fade"
	});

	//焦点区域轮播图	
	var $focusCarousel = $('.focus .carousel-wrap');
	$focusCarousel.on('carousel-load',function(ev,index,elem,success){
		var $imgs = $(elem).find('.carousel-img');
		$imgs.each(function(){
			var $img = $(this);
			var imgUrl = $img.data('src');
			loadImage(imgUrl,function(imgUrl){
				$img.attr('src',imgUrl);
			},function(imgUrl){
				$img.attr('src',"images/focus-carousel/placeholder.png");
			});
			success();
		});
	});	
	lazyLoad({
		totalItemNum:$focusCarousel.find('.carousel-img').length,
		$elem:$focusCarousel,
		eventName:'carousel-show',
		eventPerfix:'carousel'		
	});
	$focusCarousel.carousel({});


	//今日热销域轮播图	
	var $todaysCarousel = $('.todays .carousel-wrap');
	$todaysCarousel.on('carousel-load',function(ev,index,elem,success){
		var $imgs = $(elem).find('.carousel-img');
		$imgs.each(function(){
			var $img = $(this);
			var imgUrl = $img.data('src');
			loadImage(imgUrl,function(imgUrl){
				$img.attr('src',imgUrl);
			},function(imgUrl){
				$img.attr('src',"images/todays-carousel/placeholder.png");
			});
			success();
		});
	});	
	lazyLoad({
		totalItemNum:$todaysCarousel.find('.carousel-img').length,
		$elem:$todaysCarousel,
		eventName:'carousel-show',
		eventPerfix:'carousel'		
	});
	$todaysCarousel.carousel({});

})(jQuery)