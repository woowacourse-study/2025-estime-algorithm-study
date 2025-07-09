const table = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const intToRoman = function (num) {
  let answer = "";

  for (const [roman, value] of table) {
    if (num >= value) {
      const count = Math.floor(num / value);
      num -= count * value;
      answer += roman.repeat(count);
    }
  }

  return answer;
};
