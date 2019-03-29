	const mongoose = require('mongoose');

//1.定义schema
	const YichenSchema = new mongoose.Schema({
		name: {
			type:String,
			required:[true,"have to enter a name"],
			maxlength:[5,"max five"],
			minlength:[3,"min three"]
		},
		age: {
			type:Number,
			default:0,
			min:[10,"min ten"],
			max:[150,"max one five"]
		},
		phone:{
			type:String,
			validate:{
				validator:function(val){
					  return /1[358]\d{9}/.test(val)
				},
				message:'{VALUE}no no no!!!'
			}
		},
		major: {
			type:String,
			enum:['music','art','sports','basketball'],
			default:'art'
		},
		locked:{
			type:Boolean,
			default:false
		},
		createdAt:{
			type:Date,
			default:Date.now,
		},
		friends:{
			type:Array
		}
	});

	//2.生成模型model
	//2.1 mongoose.model第一个参数是制定在mongodb集合的名称,mongoose会自动变为复数
	//2.2 mongoose.model第二个参数是指定Schema
	const YichenModel = mongoose.model('yichen', YichenSchema);

	//3.导出
	module.exports = YichenModel;