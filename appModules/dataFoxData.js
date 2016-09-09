var fs = require('fs');

var dataFoxData = function (fileName, callback) {
  console.log("starting to get Data Fox data");

  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    var dataJson = JSON.parse(data);
    console.log("finshed getting Data Fox data");
    callback(dataJson);
  });
};

module.exports = dataFoxData;
