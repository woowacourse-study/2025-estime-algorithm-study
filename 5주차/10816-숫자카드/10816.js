const fs = require("fs");
const string = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const list = string[1].split(" ");
const words = string[3].split(" ");

const map = new Map();
for (const l of list) {
  if (map.has(l)) {
    let count = map.get(l);

    map.set(l, ++count);
  } else {
    map.set(l, 1);
  }
}

const answer = [];
for (const l of words) {
  if (map.has(l)) {
    answer.push(map.get(l));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
