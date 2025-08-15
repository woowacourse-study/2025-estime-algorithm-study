const fs = require("fs");
const N = Number(
  fs
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "./input.txt",
      "utf8"
    )
    .trim()
);
const dp = Array.from({ length: N + 1 }, (x) => 0);
for (let i = 2; i < N + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}
console.log(dp[N]);
