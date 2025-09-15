/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let canPlace = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed.length === 1 && flowerbed[i] === 0) {
      return true;
    } else if (flowerbed.length === 1 && flowerbed[i] === 1) {
      return n < flowerbed;
    } else if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      canPlace++;
      flowerbed[i] = 1;
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      canPlace++;
      flowerbed[i] = 1;
    } else if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i] === 0
    ) {
      canPlace++;
      flowerbed[i] = 1;
    }
  }
  return canPlace >= n;
};

var canPlaceFlowersV2 = function (flowerbed, n) {
  let canPlace = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    // undefined는 falsy이므로 !undefined는 true
    if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      canPlace++;
      flowerbed[i] = 1;
    }
  }

  return canPlace >= n;
};
