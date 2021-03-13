const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter =0;
  if (typeof matrix !== 'undefined' && matrix.length > 0) {
    for (let i of matrix){
      for (let j of i){
        if (typeof(j) == "string"){
          if (j === "^^"){
            counter += 1;
          }
        }
      }
    }
  }
  return counter;
};
