//crud (create read update delete)

//增加

const fs = require('fs');
const util = require('util');

const filePath = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/*
const add = (name,callback)=>{
	//1.获取原有的数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{
			//console.log(data);
			//解析
			let arr = JSON.parse(data);
			//2.添加数据到原有的数据中
			arr.push({
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
				name:name
			});
			let setArr = JSON.stringify(arr)
			//3.保存
			fs.writeFile(filePath,setArr,(err)=>{
				if(err){
					callback(err);
				}else{
					callback(null,arr);
				}
			})
		}
	})
}
add('Wyc',(err,data)=>{
	if(err){
		console.log('err')
	}else{
		console.log(data)
	}
})
*/
async function add(name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	let setArr = JSON.stringify(arr)
	//3.保存
	await writeFile(filePath,setArr);

	return arr;
}

//查找
async function get(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.查找对应id的对象
	return arr.find(val=>{
		return val['id'] == id;
	})
}

//修改
async function update(id,name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.查找对应id的对象
	let obj = arr.find(val=>{
		return val['id'] == id;
	})
	if(obj){
		obj.name = name;
		let setArr = JSON.stringify(arr)
		//3.保存
		await writeFile(filePath,setArr);
		return arr;
	}else{
		return obj;
	}
}

async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})
	let setArr = JSON.stringify(newArr)
	//3.保存
	await writeFile(filePath,setArr);
	return newArr;
}

/*
add('Why')
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})
*/
/*
get('15534839547222')
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})
*/
/*
update('15534839492861802','wyk')
.then(data=>{
	console.log(data)
})
*/
remove('15534839492861805')
.then(data=>{
	console.log(data)
})