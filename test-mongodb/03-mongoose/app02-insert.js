const mongoose = require('mongoose');
//构建数据用
const getRandom = (min,max)=>{	
	return Math.round(min + (max-min)*Math.random());
}
const names = ["wyc","wzq","why","qxb","zy","lfj","cmy"];
const majors = ["art","music","sport","basketball"]
const getName = ()=> names[getRandom(0,names.length-1)]
const getMajor = ()=> majors[getRandom(0,majors.length-1)]


//1.链接数据库服务
mongoose.connect('mongodb://localhost/yichen', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connection error::');
	throw err;
});

db.once('open', ()=>{
	console.log('connection sucessful::');
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
	YichenModel.insertMany({name:getName(),age:getRandom(10,25),major:getMajor()},(err,docs)=>{
		if(err){
			console.log('updateMany:::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	YichenModel.insertMany(
		[
			{name:getName(),age:getRandom(10,25),major:getMajor()},
			{name:getName(),age:getRandom(10,25),major:getMajor()}
		],(err,docs)=>{
		if(err){
			console.log('updateMany:::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	let promise = YichenModel.insertMany(
		[
			{name:getName(),age:getRandom(10,25),major:getMajor()},
			{name:getName(),age:getRandom(10,25),major:getMajor()}
		]
	);
	promise
	.then(does=>{
		console.log(does)
	})
	.catch(err=>{
		onsole.log('updateMany:::',err)
	})
	*/
	/*
	YichenModel.create({name:getName(),age:getRandom(10,25),major:getMajor()},(err,docs)=>{
		if(err){
			console.log('updateMany:::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	const arr = [];
	for(let i = 0;i<10;i++){
		arr.push({
			name:getName(),
			age:getRandom(10,25),
			major:getMajor()
		})
	}
	YichenModel.insertMany(
		arr,(err,docs)=>{
		if(err){
			console.log('updateMany:::',err)
		}else{
			console.log(docs)
		}
	})
})