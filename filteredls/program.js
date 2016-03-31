var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
//console.log(filePath);
var ext = "."+process.argv[3];
//console.log(ext);
fs.readdir(filePath,function(err,list)
{
	for(var i=0;i<list.length;i++)
	{
		var element = list[i];
		//console.log(element);

		if(path.extname(element) === ext)
		{
			console.log(element);
		}	
	}
});