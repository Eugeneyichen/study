// console.log(process)
// console.log(global.process)

//process 和 global.process是同一个对象
// console.log(process == global.process)

//process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
// console.log(process.argv)

//process.env 属性返回包含用户环境的对象
// console.log(process.env)

// process.pid 属性返回进程的PID。
// console.log(process.pid)

// console.log(1)
// process.nextTick(()=>{
// 	console.log(2)
// })
// console.log(3)


const EventEmit  = require('events')



class Emit extends EventEmit{

} 


const eee  = new Emit();

eee.on('test',(val)=>{

	console.log(val)
})
eee.emit('test','cccc');

