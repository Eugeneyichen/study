const mongoose = require('mongoose');
const YichenModel = require('./moudles/user.js');
const moment  =require('moment');

//1.链接数据库服务
mongoose.connect('mongodb://localhost/yichen', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection error::');
	throw err;
});

db.once('open', ()=>{
	console.log('connection sucessful::');
	YichenModel.findById('5c9d746e3f4d4b2ae8e211e5',(err,user)=>{
		if(err){
			console.log('find;:',err)
		}else{
			// console.log(user.createdAt)
			//1.用Date
			// const date = new Date(user.createdAt);
			// console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
			//2.用moment
			console.log(moment(user.createdAt).format('YYYY-MM-DD HH:mm:ss'))

		}

	})
})