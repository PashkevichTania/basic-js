const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;


module.exports = function dateSample(sampleActivity) {
  let sample = 0;
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity.length <= 0) return false;
  if ((+sampleActivity) <= 0 || (+sampleActivity) > 20) return false;
  sample = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  if (sample<0) return false;
  return sample;
};
