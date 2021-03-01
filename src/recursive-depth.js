const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
// class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    arr.forEach((element) => {
      let counter = 0;
      if (Array.isArray(element)) {
        counter += this.calculateDepth(element);
      }
      if (counter > depth) {
        depth = counter;
      }
    });
    return depth + 1;
  }
}
