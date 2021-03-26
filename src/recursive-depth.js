const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {
    let counter = 1;
    let result = 0;
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        counter = this.calculateDepth(e);
        if (result < counter) {
          result = counter;
        }
      }
    })
    result += 1;
    return result;
  }
};