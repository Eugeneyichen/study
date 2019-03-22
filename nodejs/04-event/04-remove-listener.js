const EventEmitter = require('events')

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();

// emitter.on('test',()=>{
// 	console.log('1:::running')
// })
const fn1 = ()=>{
	console.log('1:::running')
}
emitter.on('test',fn1)
emitter.off('test',fn1)//off是10版本才出现的 老版本用不成  off == removeListener 结果 true
// emitter.removeListener('test',fn1)
emitter.emit('test')