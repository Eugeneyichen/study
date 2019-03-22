const fs = require('fs')

// fs.writeFileSync('./01.txt','Wang Yichen',{flag:'a'})
const fd = fs.openSync('01.txt','a')
fs.writeSync(fd,'Wang Yichen');
fs.closeSync(fd);