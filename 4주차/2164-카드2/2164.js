const fs = require("fs");
const N = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim();

const q = new Array(N + 1);
for (let i = 1; i <= N; i++) q[i] = i;
let head = 1,
  tail = N + 1;

while (tail - head > 1) {
  head++; // 버리고
  q[tail++] = q[head++]; // 다음 카드를 뒤에 넣고
}
console.log(q[head]);
