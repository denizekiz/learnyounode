var map = require('through2-map');
var http = require('http');
var port = process.argv[2]; //first argument is the port

var server = http.createServer(function(request,response)
	{	if(request.method != 'POST')
	{
		return response.end('send me a POST\n');
	}
		request.pipe(map(function(chunk)
			{
				return chunk.toString().toUpperCase();
			})).pipe(response);
	}
	});

server.listen(port);