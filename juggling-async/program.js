var http = require('http');
var bl = require('bl');

for(var i=2;i<5;i++)
{
	http.get(process.argv[i],function(response)
	{
		response.pipe(bl(function(err,data)
		{
			if(err)
				{return console.error(err);}
			//console.log(data.length);
			console.log(data.toString());
		}));
	});
}