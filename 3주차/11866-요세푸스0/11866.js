// https://www.acmicpc.net/problem/11866
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = require("fs")
  .readFileSync(filePath, "utf8")
  .trim()
  .split(" ")
  .map(Number);

const array = Array.from({ length: n }, (_, i) => i + 1);

let count = 0;
const rst = [];

while (array.length !== 0) {
  count += k - 1;
  count %= array.length;
  rst.push(array[count]);
  array.splice(count, 1);
}
console.log(`<${rst.join(", ")}>`);
