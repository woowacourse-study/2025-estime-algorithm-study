/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  function dfs(start, total, path) {
    if (target === total) {
      result.push([...path]);
      return;
    }
    if (target < total) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(i, total + candidates[i], path);
      path.pop();
    }
  }
  dfs(0, 0, []);
  return result;
};
