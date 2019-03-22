
(function(window){
	var wQuery = function(){
		return new wQuery.fn.init()

	}
	wQuery.fn =  wQuery.prototype = {
		constructor:wQuery,
		init:function(){

		}
	}
	wQuery.fn.init.prototype = wQuery.fn
	window.wQuery = window.$ = wQuery

})(window)