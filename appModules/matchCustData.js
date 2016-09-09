var matchCustData = function (custData, DFdata) {
  console.log("staring to match data");
  var matchesJSON = [{header:'Matches'}];
  custData.forEach(function (customerCo) {
    var matchArray = [];
    matchesJSON.push({id: customerCo.id, matches: matchArray});
    DFdata.forEach(function (company) {
      if (customerCo.name === company.name) {
        matchArray.push(company.id)
      }
    })
  });
  return matchesJSON;
  console.log("finished matching data");
}

module.exports = matchCustData;
