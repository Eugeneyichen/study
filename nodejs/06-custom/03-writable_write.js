const {Writable} = require('stream')

class MyWritable extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk)
		console.log(encoding)
		callback&&callback()
	}
}
const writer = new MyWritable;
writer.on('finish',()=>{
	console.log('finish')
})
writer.write('hello','utf-8',()=>{
	console.log('hello')
})
writer.write('WangYichen')
writer.end()