var http = require('http');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	if(urlStr =='/favicon.ico'){
		res.end('/favicon.ico');
	}
	var filePath = 
	res.end('laia kuaihuoa');
});
server.listen(3000,'127.0.0.1',function(){
	console.log('Server running at http://127.0.0.1:3000')
})