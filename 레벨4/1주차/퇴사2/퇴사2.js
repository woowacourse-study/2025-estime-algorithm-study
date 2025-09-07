const fs = require("fs");
const strs = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split("\n");
const N = Number(strs[0]);
const T = [];
const P = [];

for (const s of strs.slice(1)) {
  const [t, p] = s.split(" ").map(Number);
  T.push(t);
  P.push(p);
}
const dp = Array.from({ length: N + 1 }, (x) => 0);

for (let i = N; i < 0; i--) {
  dp[i + 1] = Math.max(dp[i + 1], dp[i]);
  if (i + T[i] <= N) {
    dp[i + T[i]] = Math.max(dp[i + T[i]], dp[i] + P[i]);
  }
}

console.log(dp[N]);
