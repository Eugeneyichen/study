const fs = require('fs');
/*
//1.打开文件
fs.open('01.txt','a',(err,fd)=>{
	if(err){
		console.log('open error',err)
	}else{
		//2.写入数据
		fs.write(fd,'Wang Yichen',(err)=>{
			if(err){
				console.log('write error',err)
			}else{
				console.log('write sucess')
			}
			//3.保存退出(关闭)
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error',err)
				}else{
					console.log('close sucess')
				}
			})
		})
	}
})
*/
fs.writeFile('./01.txt','kuazhu',{flag:'a'},(err)=>{
	if(err){
		console.log('writeFile error',err)
	}else{
		console.log('writeFile success')
	}
})
console.log('bab')

