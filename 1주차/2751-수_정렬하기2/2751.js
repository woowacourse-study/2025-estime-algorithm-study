// https://www.acmicpc.net/problem/2751
// 2751 수 정렬하기2
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const n = +strings[0];
const arr = strings.slice(1).map(Number);
arr.sort((a, b) => a - b);
// for (const num of arr) {
//   console.log(num);
// }
console.log(arr.join("\n"));
