const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options) {
  const string = String(str);
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';



  if (options.hasOwnProperty('repeatTimes')){
    repeatTimes = options.repeatTimes;
  }
  if (options.hasOwnProperty('separator')){
    separator = options.separator;
  }
  if (options.hasOwnProperty('addition')){
    addition = String(options.addition);
  }
  if (options.hasOwnProperty('additionRepeatTimes')){
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.hasOwnProperty('additionSeparator')){
    additionSeparator = options.additionSeparator;
  }


  let result = '',
      additionStr = '',
      count = 0;

  if (addition.length != 0) {
    while (count < additionRepeatTimes) {
      additionStr += addition + additionSeparator;
      count++;
    }

    additionStr = additionStr.slice(0, additionStr.length - additionSeparator.length);
    count = 0;
  }

  while (count < repeatTimes) {
    result += string + additionStr + separator;
    count++;
  }

  return result.slice(0, result.length - separator.length);
}
