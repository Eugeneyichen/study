const EventEmitter = require('events')

// console.log(EventEmitter)
class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();

emitter.on('test',()=>{
	console.log('Wang Yichen')
})
emitter.emit('test')
