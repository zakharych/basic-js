const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr);
    let deepth = 0;
    let counter = 0;
    function checkArray(arr) {
      arr.forEach((element) => {
        if (Array.isArray(element)) {
          counter++;
          checkArray(element);
        }
      });
      if (counter > deepth) {
        deepth = counter;
        counter = 0;
      } else {
        counter = 0;
      }
    }
    checkArray(arr);

    return deepth + 1;
  }
};

// const instance = new DepthCalculator();
// const calculateDepth = instance.calculateDepth.bind(instance);

// calculateDepth([
//   1,
//   [8, [[]]],
//   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
//   2,
//   3,
//   [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//   [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//   4,
//   5,
//   ["6575", ["adas", ["dfg", [0]]]],
// ]);
