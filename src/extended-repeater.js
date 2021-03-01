const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

  str = str;
  j = 0;
  i = 0;
  let newStr = "";
  newStr += str;
  while (i < options.additionRepeatTimes) {
    newStr += options.addition;
    if (i < options.additionRepeatTimes - 1) {
      newStr += options.additionSeparator;
    }

    i++;
  }
  // console.log(newStr);
  addStr = newStr;
  newStr = "";
  while (j < options.repeatTimes) {
    newStr += addStr
    if (j < options.repeatTimes - 1) {
      newStr += options.separator;
    }
    j++;
  }

  return newStr
};