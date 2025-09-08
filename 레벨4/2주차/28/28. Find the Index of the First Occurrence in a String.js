/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const word = new RegExp(`${needle}`);
  return haystack.search(word);
};
