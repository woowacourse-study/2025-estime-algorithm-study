/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else if (num > first && num > second) {
      return true;
    }
  }

  return false;
};
