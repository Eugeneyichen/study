const mongoose = require('mongoose');

//1.链接数据库服务
mongoose.connect('mongodb://localhost/yichen', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection error::');
	throw err;
});

db.once('open', ()=>{
	// console.log('connection sucessful::');
	//2.定义schema
	const YichenSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	});
	//3.生成模型model
	//3.1 mongoose.model第一个参数是制定在mongodb集合的名称,mongoose会自动变为复数
	//3.2 mongoose.model第二个参数是指定Schema
	const YichenModel = mongoose.model('yichen', YichenSchema);


	//4.用模型操作数据(CRUD)
	/*
	YichenModel.updateOne({age:{$gt:20}},{$set:{age:21}},(err,result)=>{
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log(result)
		}
	})
	*/
	/*
	YichenModel.updateOne({age:{$gt:10}},{age:21},(err,result)=>{
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log(result)
		}
	})
	*/
	YichenModel.updateMany({age:{$gt:19}},{age:24},(err,result)=>{
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log(result)
		}
	})
})