const {Writable} = require('stream')

class MyWritable extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk)
		console.log(encoding)
		callback&&callback()

	}
}
const write = new MyWritable;

write.on('finish',()=>{
	console.log('finish.....')
})

write.write('hello','utf-8',()=>{
	console.log('hello.....')
})
write.write('kuazhu')
write.end();