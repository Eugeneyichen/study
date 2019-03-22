const EventEmitter = require('events')

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();

/*
emitter.on('test',(event,arg1,arg2)=>{
	console.log('runninfg')
	console.log(event,arg1,arg2)
})
*/
/*
emitter.on('test',(arg1,arg2)=>{
	console.log('runninfg')
	console.log(arg1,arg2)
})
emitter.emit('test','hello','kuazhu')
*/
const args = ['hello','kuazhu']
emitter.on('test',(arg1,arg2)=>{
	console.log('runninfg')
	console.log(arg1,arg2)
})
emitter.emit('test',...args)

