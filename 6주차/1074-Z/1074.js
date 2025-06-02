const fs = require("fs");
const [n, r, c] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim()
  .split(" ");

let answer = 0;

const position = {
  LU: 0,
  RU: 1,
  LD: 2,
  RD: 3,
};

function Z(r, c, N) {
  if (N === 0) return;
  const half = 2 ** (N - 1);
  let UD = "";
  let LR = "";
  if (r < half) UD = "U";
  if (r >= half) UD = "D";
  if (c < half) LR = "L";
  if (c >= half) LR = "R";
  const index = position[`${LR}${UD}`];
  answer += half * half * index;

  Z((r %= half), (c %= half), N - 1);
}

function altZ(r, c, N) {
  if (N === 0) return 0;

  return 4 * altZ(Math.floor(r / 2), Math.floor(c / 2), N - 1);
}

console.log(altZ(r, c, n));
