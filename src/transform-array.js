const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  newArr = [];
  prases = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next",
  ];
  pass = 0;
  arr.map((e, i, array) => {
    if (prases.includes(e)) {
      if (e === "--double-next") {
        if (prases.includes(array[i + 1])) {
        } else {
          newArr.push(e);
          if (array[i + 1] !== undefined) {
            newArr.push(array[i + 1]);
          }
        }
      } else if (e === "--double-prev") {
        if (prases.includes(array[i - 1])) {
        } else {
          if (newArr[newArr.length - 1] !== undefined) {
            newArr.push(newArr[newArr.length - 1]);
            newArr.push(e);
          }
        }
      } else if (e === "--discard-prev") {
        if (prases.includes(array[i - 1])) {
        } else {
          newArr.pop(newArr.length);
          newArr.push(e);
        }
      } else if (e === "--discard-next") {
        newArr.push(e);
        if (prases.includes(array[i + 1])) {
        } else {
          pass = 1;
        }
      }
    } else if (!prases.includes(e)) {
      if (pass === 0) {
        newArr.push(e);
      } else {
        pass = 0;
      }
    }
  });
  if (newArr.length === 0) {
    newArr = arr;
  }
  return newArr.filter((e) => !prases.includes(e));
};
