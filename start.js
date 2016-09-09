console.log("Starting Datafox match app");

var parseCSV = require ('./appModules/parseCSV');
var dataFoxData =require ('./appModules/dataFoxData');
var matchCustData = require ('./appModules/matchCustData');
var jsonMatchesToString = require ('./appModules/jsonMatchesToString');
var matchesToTextFile = require('./appModules/matchesToTextFile');

parseCSV('crm.csv', function (custData) {
  dataFoxData('db.json', function (DFdata) {
    var jsonMatches = matchCustData(custData, DFdata);
    var matchesString = jsonMatchesToString(jsonMatches);
    matchesToTextFile(matchesString);
  });
});
