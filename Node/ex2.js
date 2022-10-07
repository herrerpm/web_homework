let filesystem = require("fs")

filesystem.readFile('.\\Node\\file2.txt', 'utf8', function(err, data){
    console.log(data);
});