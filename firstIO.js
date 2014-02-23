// firstIO.js

var fs = require('fs');

fileBuffer = fs.readFileSync(process.argv[2]);  // read the first arg supplied via command line using process.argv, which is always the path to the current js file.
fileString = fileBuffer.toString();
fileLength = (fileString.split('\n').length - 1);
console.log(fileLength);