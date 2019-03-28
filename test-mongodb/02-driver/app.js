const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


// Connection URL 
//定义url
const url = 'mongodb://localhost:27017';

// Database Name 
//定义变量
const dbName = 'yichen';

// Create a new MongoClient 
//new了一个实例 传了一个url
const client = new MongoClient(url,{ useNewUrlParser: true });

// Use connect method to connect to the Server 
//用connect方法链接server
client.connect(function(err) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	// Get the documents collection
	//创建数据库wang
	const collection = db.collection('wang');

	/*
	//Insert a Document
	//在数据库里插入 添加资源
	collection.insertMany([{name:"why",age:18,major:"music"},{name:"wyc",age:18,major:"music"}],(err,result)=>{
		if(err){
			console.log('ins err:::',err)
		}else{
			console.log(result)
		}
		client.close();
	})
	*/
	/*
	//Find All Documents
	//查询数据库里的文档
	collection.find({}).toArray((err, docs)=>{
		if(err){
			console.log('find err:::',err)
		}else{
			console.log(docs)
		}
		client.close();
	})
	*/
	/*
	//Find Documents with a Query Filter
	//根据局部信息查找资料
	collection.find({name:"wyc"}).toArray((err, docs)=>{
		if(err){
			console.log('find err:::',err)
		}else{
			console.log(docs)
		}
		client.close();
	})
	*/
	/*
	//Update a document
	//更新内容
	collection.updateOne({name:"wyc"},{$set:{age:28}},(err,result)=>{
		if(err){
			console.log('updateOne err:::',err)
		}else{
			console.log(result)
		}
		client.close();
	})
	*/

	//Remove a document
	//删除
	collection.deleteOne({name:"why"},(err,result)=>{
		if(err){
			console.log('deleteOne err:::',err)
		}else{
			console.log(result)
		}
		client.close();
	})





});