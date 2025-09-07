const fs = require("fs");
const strs = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const n = parseInt(strs[0]);
const table = [];
for (let i = 1; i <= n; i++) {
  table.push(strs[i].split(" ").map(Number));
}

function isPermutation(arr) {
  const n = arr.length;
  const seen = new Set();

  for (let num of arr) {
    if (num < 1 || num > n || seen.has(num)) {
      return false;
    }
    seen.add(num);
  }

  return seen.size === n;
}

let count = 0;

for (let r1 = 0; r1 < n; r1++) {
  // 직사각형의 시작 행
  for (let c1 = 0; c1 < n; c1++) {
    // 직사각형의 시작 열
    for (let r2 = r1; r2 < n; r2++) {
      // 직사각형의 끝 행 (r1보다 크거나 같아야 함)
      for (let c2 = c1; c2 < n; c2++) {
        // 직사각형의 끝 열 (c1보다 크거나 같아야 함)
        let nums = [];
        for (let r = r1; r <= r2; r++) {
          for (let c = c1; c <= c2; c++) {
            nums.push(table[r][c]);
          }
        }
        if (isPermutation(nums)) {
          count++;
        }
      }
    }
  }
}

console.log(count);
