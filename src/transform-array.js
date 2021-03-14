const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr === 'undefined' || arr.length <= 0) {
    return [];
  }
  if (arr === null){
    throw new Error();
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != "--double-next" && arr[i] != "--double-prev") {
      result.push(arr[i]);
    } else if (arr[i] == '--discard-next' && i != arr.length - 1) {
      i++;
    } else if (arr[i] == '--double-next' && i != arr.length - 1) {
      result.push(arr[i + 1]);
    } else if (arr[i] == '--discard-prev' && i != 0 && arr[i - 2] != '--discard-next' ) {
      result.pop();
    } else if (arr[i] == '--double-prev' && i != 0 && arr[i - 2] != '--discard-next' ) {
      result.push(arr[i - 1]);
    }
  }

  return result;
};