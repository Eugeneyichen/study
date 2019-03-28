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
	//4.1插入数据
	const yichen = new YichenModel({name:"wyc",age:15,major:"art"})
	yichen.save((err,doc)=>{
		if(err){
			console.log('save err:::',err);
		}else{
			console.log(doc)
		}
	})
	*/
	/*
	//4.2 查找
	YichenModel.find({},(err,docs)=>{
		if(err){
			console.log('save err:::',err);
		}else{
			console.log(docs)
		}
	})
	*/
	//4.3更新
	/*
	//update要被废弃，不一定能使用
	YichenModel.update({name:"wyc"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('update err:::',err);
		}else{
			console.log(result)
		}
	})
	*/
	/*
	YichenModel.updateOne({name:"wyc"},{$set:{age:188}},(err,result)=>{
		if(err){
			console.log('updateOne err:::',err);
		}else{
			console.log(result)
		}
	})
	*/
	//4.4删除
	YichenModel.deleteOne({name:"wyc"},(err,result)=>{
		if(err){
			console.log('deleteOne err:::',err);
		}else{
			console.log(result)
		}
	})
})