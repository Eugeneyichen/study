const EventEmitter = require('events')
/*
const emitter = new EventEmitter();
// console.log(emitter)
emitter.on('test',()=>{
	console.log('running');
})
emitter.emit('test')
*/

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
// console.log(emitter)
emitter.on('test',()=>{
	console.log('runninfg')
})
emitter.emit('test')
