const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  } else if (typeof date === "string" || typeof date === "number" ) {
    return false
  } else if (typeof date === "function"){
    console.log('THROWN');
    console.log(date);
    throw new Error('THROWN')
  } else if (typeof date === "object") {
    if (typeof date.getMonth === "function") {
      // console.log(date);
      inData = date;
      console.log(inData);
      mounth = inData.getMonth();
      if (mounth >= 2 && mounth <= 4) {
        // console.log("spring");
        return "spring"
      } else if (mounth >= 5 && mounth <= 7) {
        // console.log("summer");
        return "summer"
      } else if (mounth >= 8 && mounth <= 10) {
        // console.log("autumn");
        return "autumn"
      } else {
        // console.log("winter");
        return "winter"
      }
    } else {
      return false;
    }
  }
};
