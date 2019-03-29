const mongoose = require('mongoose');
const BlogModel = require('./moudles/blog.js');

//1.链接数据库服务
mongoose.connect('mongodb://localhost/yichen', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection error::');
	throw err;
});

db.once('open', ()=>{
	console.log('connection sucessful::');
	BlogModel.insertMany({
		title:"title1",
		content:"content1",
		author:"5c9d74fb7e2062091831052d"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err:',err)
		}else{
			console.log(docs)
		}
	})
})