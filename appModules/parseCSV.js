var csv = require('csv-parser')
var fs = require('fs')

console.log('starting CSV to JSON parser');

var parseCSV = function (fileCSV, callback) {
  fs.createReadStream(fileCSV)
    .pipe(csv())
    .on('data', function (data) {
      callback(data);
      console.log('finished CSV to JSON parser');
    })
    .on('err', function (err) {
      console.log('error in CSV to JSON parser', err);
    })
}

module.exports = parseCSV
