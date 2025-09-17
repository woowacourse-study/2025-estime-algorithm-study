/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (map.has(needed)) {
      let pairedIndex = map.get(needed);
      return [pairedIndex, i];
    }
    map.set(nums[i], i);
  }
};
