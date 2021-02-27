const CustomError = require("../extensions/custom-error");

const chainMaker = {
  val: [],
  getLength() {},
  addLink(value) {
    if (arguments.length === 0) {
      console.log(`(${value})`);
      this.val.push("( )");
    }
    this.val.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (position >= 0) {
      this.val.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.val = [];
      throw "Error2"
    }
  },
  reverseChain() {
    this.val.reverse();
    return chainMaker;
  },
  finishChain() {
    val2 = [...this.val];
    this.val = [];
    return val2.join("~~");
  },
};

module.exports = chainMaker;