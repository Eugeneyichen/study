;(function($){

function Search($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$searchBtn = $elem.find('.search-btn');
	this.$searchInput = $elem.find('.search-input');
	this.$searchForm = $elem.find('.search-form');
	this.$searchLayer = $elem.find('.search-layer')
	//2.初始化
	this.init();
	if(this.options.autocompelete){
		this.autocompelete();
	}
}
Search.prototype = {
	constructor:Search,
	init:function(){
		//绑定事件
		this.$searchBtn.on('click',$.proxy(this.submit,this))
	},
	submit:function(){
		if(this.getInputVal() == ''){
			return false;
		}
		this.$searchForm.trigger('submit')
	},
	getInputVal:function(){
		return $.trim(this.$searchInput.val())
	},
	autocompelete:function(){
		//1.初始化显示隐藏
		this.$searchLayer.showHide(this.options)
		//2.监听输入框input事件
		this.$searchInput.on('input',$.proxy(this.getData,this));
	},
	getData:function(){
		console.log('laia kuaihuoa ');
		// console.log(this.options.url)
		// var inputVal = this.getInputVal();
		// if(inputVal == ''){
		// 	return;
		// }

		$.ajax({
			url:this.options.url + this.getInputVal(),
			dataType:"jsonp",
			jsonp:"callback",
			// success:function(){
			// 	console.log('aa')
			// },
			// error:function(jqX,status){
			// 	// console.log('bb')
			// 	console.log(status)
			// 	console.log(jqX)
			// 	console.log(this.url)
			// },
		})
		.done(function(data){
			// console.log(data);
			//1.根据数据生成html
			var html = '';
			for(var i = 0;i<data.result.length;i++){
				html += '<li class="search-item">'+data.result[i][0]+'</li>'
			}
			//2.加载html到下拉层
			this.$searchLayer.html(html);
			//3.显示下拉层
			this.$searchLayer.showHide('show');
		}.bind(this))
		.fail(function(err){
			// console.log(err);
		})

	},

}
Search.DEFAULTS = {
	autocompelete:true,
	url:"https://suggest.taobao.com/sug?code=utf-8&q=",
	mode:'slideDownUp'

}

$.fn.extend({
	search:function(options){
		return this.each(function(){
			var $elem = $(this);
			var search = $elem.data('search');
			if(!search){
				options = $.extend({},Search.DEFAULTS,options);
				search = new Search($elem,options);
				$elem.data('search',search);				
			}
			if(typeof search[options] == 'function'){
				search[options]();
			}

		});
	}
})
	
})(jQuery);