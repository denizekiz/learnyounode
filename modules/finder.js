var fs = require('fs');
var path = require('path');
//console.log(filePath);
//console.log(ext);
var finder = function(filePath,extFilter,callback)
{
	fs.readdir(filePath,function(err,list)
	{
		data =[];
		if(err)
			return callback(err);
		for(var i=0;i<list.length;i++)
		{
			var element = list[i];
			//console.log(element);

			if(path.extname(element) === "." + extFilter)
			{
				data.push(element);
			}	
		}
		callback(null,data);
	});

}

module.exports = finder;