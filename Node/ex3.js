let filesystem = require("fs")

filesystem.writeFile('.\\Node\\helloworld.txt', "Hello world!", function(err, data){
    if(err) {
        console.log(err)
    }
});

filesystem.readFile('.\\Node\\helloworld.txt', 'utf8', function(err, data){
    console.log(data);
});