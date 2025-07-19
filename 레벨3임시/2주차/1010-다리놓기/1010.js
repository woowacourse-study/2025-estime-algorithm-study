// https://www.acmicpc.net/problem/1010
const fs = require("fs");
const strings = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const T = strings[0];

const a = strings.slice(1);
const answers = [];

function fact(r, c) {
  let answer = 1;
  let divider = 1;
  const length = r;
  for (let i = 0; i < length; i++) {
    answer *= c;
    divider *= r;
    r--;
    c--;
  }

  return Math.round(answer / divider);
}

for (const aa of a) {
  const [r, c] = aa.split(" ");
  let parsedR = Number(r);
  let parsedC = Number(c);
  answers.push(fact(parsedR, parsedC));
}
console.log(answers.join("\n"));
