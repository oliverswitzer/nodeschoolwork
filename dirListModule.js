// dirListModule.js

var fs = require('fs');  //require node filesystem module
var path = require('path'); //require node path module (a couple of tools for reading path names)

module.exports = function filterDirFiles(pathSupplied, extFilter, callback) {
  function extension(element) {
    var extName = path.extname(element);
    return extName === '.' + extFilter; 
  };

  fs.readdir(pathSupplied, function (err, list) {
    if (err) {
      return callback(err);
    };
    return callback(null, list.filter(extension))
  });
};

