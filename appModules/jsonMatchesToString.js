var jasonMatchesToString = function (matchesJSON) {

  var matchesString = matchesJSON.reduce(function (string, currentValue) {
    if (currentValue.header) {
      string += currentValue.header + "\r\n";
    }
    if (currentValue.id) {
      string += currentValue.id + " ";
      if (currentValue.matches.length === 0) {
        string += "\r\n";
      }
      currentValue.matches.forEach(function (match) {
        string += " " + match;
        var isLast = currentValue.matches.slice(-1)[0] === match;
        if (isLast) {
          string += "\r\n";
        } else {
          string += ",";
        }
      });
    }
    return string;
  }, "");

  return matchesString;
};

module.exports = jasonMatchesToString;
