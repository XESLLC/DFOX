var csv = require('csv-parser');
var fs = require('fs');

console.log("starting CSV to JSON parser");

var parseCSV = function (fileCSV, callback) {
  var custJson = [];
  var id = 0;
  fs.createReadStream(fileCSV)
  .pipe(csv())
  .on('data', function (data) {
    id++;
    var keys = Object.keys(data);
    var n = keys.length;
    var rowobj = {};
    while (n--) {
      key = keys[n];
      rowobj[key.toLowerCase()] = data[key];
      rowobj.id = id;
    }
    custJson.push(rowobj);
  })
  .on('finish', function () {
    console.log("finished CSV to JSON parser");
    callback(custJson);
  })
  .on('err', function (err) {
    console.log("error in CSV to JSON parser", err);
  })
};

module.exports = parseCSV;
