var net = require('net');
var port = process.argv[2];
var server =net.createServer(function(socket)
	{
		var date = new Date();
		var month = date.getMonth()+1;
		if(month<10)
		{
			month= "0"+month;
		}
		var data = date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
		socket.write(data);
		socket.end("\n");
	});

server.listen(port,function(){
	console.log("Port is listening at "+port);
})