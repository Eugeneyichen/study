const mongoose = require('mongoose');

const YichenModel = require('./moudles/user.js')

//1.链接数据库服务
mongoose.connect('mongodb://localhost/yichen', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection error::');
	throw err;
});

db.once('open', ()=>{
	console.log('connection sucessful::');


	//2.用模型操作数据(CRUD)
	YichenModel.distinct('name',{age:{$gt:20}},(err,result)=>{
		if(err){
			console.log('ditinct err::',err)
		}else{
			console.log(result)
		}
	})
	
})