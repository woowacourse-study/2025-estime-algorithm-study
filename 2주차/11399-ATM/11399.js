// https://www.acmicpc.net/problem/11399
// 11399 ATM
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const numbers = strings[1].split(" ").map(Number);

numbers.sort((a, b) => b - a);

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

let total = 0;
for (let i = 0; i < +strings[0]; i++) {
  total += sum(numbers.slice(i));
}

console.log(total);
