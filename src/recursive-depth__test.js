// const CustomError = require("../extensions/custom-error");

// module.exports = class DepthCalculator {
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let depth = 0;
    arr.forEach((element) => {
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

const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]));

console.log(calculateDepth([[1], [2, [1, []]]]));
