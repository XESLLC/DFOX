var fs = require('fs');

var matchesToTextFile = function (matchesString) {
  console.log("starting to write text file \r\n", matchesString);

  fs.appendFile('./matches.txt', matchesString , 'utf8', function (err) {
    if (err) {console.log(err)}
    console.log("finished writting text file");
  });
}

module.exports = matchesToTextFile;
