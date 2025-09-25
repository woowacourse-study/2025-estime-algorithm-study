/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function count(str, seekingFor) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (seekingFor !== str[i]) return [cnt, seekingFor];
      else cnt++;
    }
    return [cnt, seekingFor];
  }
  function outerLoop(str) {
    let result = "";
    for (let i = 0; i < str.length; ) {
      const [cnt, seekingFor] = count(str.slice(i), str[i]);
      result += cnt.toString() + seekingFor.toString();
      i += c;
    }
    return result;
  }
  let answer = "1";
  for (let i = 1; i < n; i++) {
    answer = outerLoop(answer);
  }
  return answer;
};
