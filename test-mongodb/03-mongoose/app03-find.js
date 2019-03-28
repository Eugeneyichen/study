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
	//{}空的查所有
	YichenModel.find({},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	YichenModel.find({age:{$gt:20}},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	YichenModel.find({age:{$lt:15}},"age name -_id",(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	//第一条不显示
	YichenModel.find({age:{$lt:20}},null,{skip:1},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	//限制显示几条
	YichenModel.find({age:{$lt:20}},null,{limit:2},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	YichenModel.find({age:{$lt:20}},null,{sort:{age:-1}},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	let result = YichenModel.find({age:{$lt:20}},null,{sort:{age:-1}},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
	console.log(result)
	*/
	/*
	YichenModel.findById("5c9c78932beb282e5072d812","name -_id",(err,docs)=>{
		if(err){
			console.log('findById',err)
		}else{
			console.log(docs)
		}
	})
	*/
	YichenModel.findOne({age:{$lt:20}},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			console.log(docs)
		}
	})
})