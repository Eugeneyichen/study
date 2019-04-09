const express = require('express')
const UserModel = require('../models/user.js')
const pagination = require('../util/pagination.js')
const router = express.Router()

//权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登录</h1>')
	}
})


//显示后台首页
router.get("/",(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})

//显示用户列表
router.get("/users",(req,res)=>{
	/*
	分页：
	约定：每页显示两条数据limit(2) limit = 0

	第一页 跳过0条 skip(0)
	第二页 跳过2条 skip(2)
	第三页 跳过4条 skip(4)

	第page页 跳过 (page - 1) * limit 条 skip((page - 1) * limit)
	*/


/*
	let { page } = req.query;
	//每页显示条数
	const limit = 2;

	page = parseInt(page)

	if(isNaN(page)){
		page = 1;
	}

	if(page == 0){
		page = 1;
	}

	UserModel.countDocuments({})
	.then(count=>{
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

		UserModel.find({},'-password -__v')
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users,
				page,
				list
			})
		})	
	})
*/
	const options = {
		page:req.query.page,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(data=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		})
	})
	
})

module.exports = router