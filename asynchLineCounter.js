var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function(err, data) {
  console.log(data.split('\n').length - 1); //will print out the length of the string array that is split on return characters (-1 because the last line doesnt have an enter after it)
});