/**
 * @param {string} digits
 * @return {string[]}
 */

const dict = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
const letterCombinations = function (digits) {
  if (!digits) return [];
  const result = [];
  function dfs(idx, tmp = "") {
    if (idx == digits.length) {
      result.push(tmp);
      return;
    }
    dict[digits[idx]].forEach((ch) => dfs(idx + 1, tmp + ch));
  }
  dfs(0, "");

  return result;
};
