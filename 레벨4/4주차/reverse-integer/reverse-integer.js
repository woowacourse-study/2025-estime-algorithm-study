/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let num = Math.abs(x);
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  result = x < 0 ? -result : result;

  return result < -1 * 2 ** 31 || result > 2 ** 31 - 1 ? 0 : result;
};
