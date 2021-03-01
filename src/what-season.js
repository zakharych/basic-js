const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  } else if (typeof date === "string" || typeof date === "number") {
    return false;
  } else if (typeof date === "function") {
    throw new Error("THROWN");
  } else if (typeof date === "object") {
    if (typeof date.getMonth === "function") {
      inData = date;
      mounth = inData.getMonth();
      if (date.setUTCSeconds()) {
        throw new Error("THROWN");
      }
      if (mounth >= 2 && mounth <= 4) {
        return "spring";
      } else if (mounth >= 5 && mounth <= 7) {
        return "summer";
      } else if (mounth >= 8 && mounth <= 10) {
        return "autumn";
      } else {
        return "winter";
      }
    } else {
      return false;
    }
  }
};
