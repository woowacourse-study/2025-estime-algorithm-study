// https://www.acmicpc.net/problem/1931
const fs = require("fs");
const string = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");
const strings = string.slice(1);

const times = [];
for (const str of strings) {
  const [startTime, endTime] = str.split(" ").map(Number);
  times.push([startTime, endTime]);
}

times.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else return a[0] - b[0];
});

let lastEnd = times[0][1];

let count = 1;

for (let i = 1; i < strings.length; i++) {
  const [startTime, endTime] = times[i];
  if (lastEnd <= startTime) {
    count++;
    lastEnd = endTime;
  }
}

console.log(count);
