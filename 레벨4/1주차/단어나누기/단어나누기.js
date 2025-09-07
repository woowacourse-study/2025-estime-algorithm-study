const fs = require("fs");
const str = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim();

const list = [];
function reverse(s) {
  return [...s].reverse().join("");
}

let a, b, c;
for (let i = 1; i < str.length - 1; i++) {
  a = str.slice(0, i);
  let adiff = str.slice(i);

  for (let j = 1; j < adiff.length; j++) {
    b = adiff.slice(0, j);
    c = adiff.slice(j);
    list.push(reverse(a) + reverse(b) + reverse(c));
  }
}
list.sort();
console.log(list[0]);
