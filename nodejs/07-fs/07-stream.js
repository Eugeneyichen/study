const fs = require('fs')

const ws = fs.createWriteStream('./ws.txt');
ws.on('finish',()=>{
	console.log('finish....')
})
ws.write('Wang')
ws.write('Yichen')
ws.end()

rs.on('data',(chunk)=>{
	console.log(chunk)
})