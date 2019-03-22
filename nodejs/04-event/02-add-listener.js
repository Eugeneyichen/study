const EventEmitter = require('events')

class MyEmitter extends EventEmitter{
}

const emitter = new MyEmitter();

/*
emitter.on('test',()=>{
	console.log('1:::running')
})

emitter.addListener('test',()=>{
	console.log('2:::running')
})

emitter.emit('test');
*/

/*
emitter.once('test',()=>{
	console.log('1:::running')
})
emitter.emit('test');
emitter.emit('test');
*/
emitter.setMaxListeners(11)
emitter.once('test',()=>{
	console.log('1:::running')
})
emitter.once('test',()=>{
	console.log('2:::running')
})
emitter.once('test',()=>{
	console.log('3:::running')
})
emitter.once('test',()=>{
	console.log('4:::running')
})
emitter.once('test',()=>{
	console.log('5:::running')
})
emitter.once('test',()=>{
	console.log('6:::running')
})
emitter.once('test',()=>{
	console.log('7:::running')
})
emitter.once('test',()=>{
	console.log('8:::running')
})
emitter.once('test',()=>{
	console.log('9:::running')
})
emitter.once('test',()=>{
	console.log('10:::running')
})
emitter.once('test',()=>{
	console.log('11:::running')
})
emitter.emit('test');