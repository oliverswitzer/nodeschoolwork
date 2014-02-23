var dirListModule = require('./dirListModule.js')
var dirPath = process.argv[2];
var extFilter = process.argv[3];

dirListModule(dirPath, extFilter, function(err, filteredList) {
  filteredList.forEach(function(value) {
    console.log(value);
  });
});