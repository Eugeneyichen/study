;(function($){
		$.fn.extend({
			setCss:function(obj,value){
				return this.each(function(){
					var $eDiv = $(this)
					if(!value){
						console.log($eDiv.css(obj));
					}else{
						$eDiv.css(obj,value);
					}
				})
			}
		})
	})(jQuery)