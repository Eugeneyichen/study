/*
page:请求页码
model：数据类型
query：查询条件
projection：投影
sort：排序
*/
async function pagination(options){
	/*
	分页：
	约定：每页显示两条数据limit(2) limit = 0

	第一页 跳过0条 skip(0)
	第二页 跳过2条 skip(2)
	第三页 跳过4条 skip(4)

	第page页 跳过 (page - 1) * limit 条 skip((page - 1) * limit)
	*/



	let { page,model,query,projection,sort } = options;
	//每页显示条数
	const limit = 2;

	page = parseInt(page)

	if(isNaN(page)){
		page = 1;
	}

	if(page == 0){
		page = 1;
	}

	const count = await model.countDocuments(query)

	//计算总页数
	const pages = Math.ceil(count / limit)
	if(page > pages){
		page = pages
	}
	//生成页码数组
	const list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i)
	}
	//每页显示条数
	const skip = (page - 1) * limit

	const docs = await model.find(query,projection).sort(sort).skip(skip).limit(limit)

	return {
		docs,
		page,
		list
	}
}

module.exports = pagination