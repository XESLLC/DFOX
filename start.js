console.log("Starting Datafox match app");

var parseCSV = require ('./appModules/parseCSV')

parseCSV('crm.csv', function (data) {
  console.log(data);
})
