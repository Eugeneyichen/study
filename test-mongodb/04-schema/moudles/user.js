	const mongoose = require('mongoose');

//1.定义schema
	const YichenSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	});

	//2.生成模型model
	//2.1 mongoose.model第一个参数是制定在mongodb集合的名称,mongoose会自动变为复数
	//2.2 mongoose.model第二个参数是指定Schema
	const YichenModel = mongoose.model('yichen', YichenSchema);

	//3.导出
	module.exports = YichenModel;