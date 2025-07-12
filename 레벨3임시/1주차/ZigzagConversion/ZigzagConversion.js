/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
  let dir = 1;
  let cur = 0;
  for (const ch of s) {
    rows[cur] += ch;
    if (cur === 0) dir = 1;
    if (cur === numRows - 1) dir = -1;
    cur += dir;
  }

  return rows.join("");
};
