

(function(window){
	var cQuery = function(selector){
		return new cQuery.fn.init(selector)//return new cQuery不能new自己,return new cQuery.prototype.init()在自己的原型上加一个方法
	};
	cQuery.fn = cQuery.prototype = {
		constructor:cQuery,//改变cQuery.prototype的原型对象constructor指向cQuery;
		init:function(selector){
			// console.log('$::',selector);
			//1.布尔值是false
			if(!selector){
				return this;
			}
			//2.函数
			else if(cQuery.isFunction(selector)){
				// console.log('function')
				window.addEventListener('DOMContentLoaded',selector)
				this[0] = document;
				this.length = 1;
				return this
			}
			//3.字符串
			else if(cQuery.isString(selector)){
				// console.log('string')
				//3.1 html代码
				if(cQuery.isHtml(selector)){
					var seDom = document.createElement('div');
					seDom.innerHTML = selector;
					for(var i = 0;i<seDom.children.length;i++){
						this[i] = seDom.children[i];
					}
					this.length = seDom.children.length;
					return this;
				}
				//3.2 选择器
				else{
					var domSelector = document.querySelectorAll(selector)
					for(var i = 0;i<domSelector.length;i++){
						this[i] = domSelector[i];
					}
					this.length = domSelector.length;
				}
			}
			
			//4.数组
			else if(cQuery.isArray(selector)){
				// console.log('object')
				for(var i = 0;i<selector.length;i++){
					this[i] = selector[i];
				}
				this.length = selector.length;
				return this;
			}
			
			//5.对象(其他所有的)
			else{
				this[0] = selector;
				this.length = 1;
				return this;
			}
				
		},
		get:function(num){
			if(num){
				if(cQuery.isNumber(num)){
					if(num >= 0){
						return this[num];
					}
					else{
						return this[this.length + num]
					}
				}
			}else{
				var arr = [];
				for(var i = 0;i<this.length;i++){
					arr.push(this[i])
				}
				return arr;
			}
		}
	}
	cQuery.isFunction = function(str){
		return typeof str == 'function';
	}
	cQuery.isString = function(str){
		return typeof str == 'string';
	}
	cQuery.isHtml = function(str){
		return /<[^<>]+>/.test(str);
	}
	cQuery.isArray = function(str){
		return typeof str == 'object' && length in str;
	}
	cQuery.isNumber = function(str){
		return typeof str == 'number';
	}


	cQuery.fn.init.prototype = cQuery.fn//将init方法上的原型对象指向cQuery的原型 改变原型指向
	window.cQuery = window.$ = cQuery;//window = cQuery = $

})(window)