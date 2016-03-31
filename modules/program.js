var finder = require('./finder.js');

finder(process.argv[2],process.argv[3],function(e,list)
{
	if(e) console.log(e);
	else list.forEach(function(file) {console.log(file);});
});