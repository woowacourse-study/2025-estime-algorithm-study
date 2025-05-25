// https://www.acmicpc.net/problem/17219
const fs = require("fs");
const string = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");
const [N, M] = string[0].split(" ").map(Number);
const list = string.slice(1, N + 1);

const words = string.slice(N + 1);

const passwordMap = new Map();

for (const l of list) {
  const [ID, password] = l.split(" ");
  passwordMap.set(ID, password);
}
const result = [];
for (const w of words) {
  result.push(passwordMap.get(w));
}

console.log(result.join("\n"));
