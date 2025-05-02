// https://www.acmicpc.net/problem/2563
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const squares = strings.slice(1);
const covered = new Set();
for (const [x, y] of squares.map((s) => s.split(" ").map(Number))) {
  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      covered.add(`${x + dx},${y + dy}`);
    }
  }
}

console.log(covered.size);

// const BOARD = 100;
// const board = new Uint8Array(BOARD * BOARD);
// let count = 0;
// function draw(x, y) {
//   for (let dx = 0; dx < 10; dx++) {
//     for (let dy = 0; dy < 10; dy++) {
//       const idx = (x + dx) * BOARD + (y + dy);
//       if (board[idx] === 0) {
//         board[idx] = 1;
//         count++;
//       }
//     }
//   }
// }

// for (const [x, y] of squares.map((s) => s.split(" ").map(Number))) {
//   draw(x, y);
// }

// console.log(count);

// const BOARD = 100;
// const SIZE = BOARD * BOARD; // 10000칸
// const WORD_SIZE = 32; // 32비트 단위
// const words = new Uint32Array(Math.ceil(SIZE / WORD_SIZE));
// let count = 0;

// // (x,y) -> 1차원 인덱스
// function idx1d(x, y) {
//   return x * BOARD + y;
// }

// // 비트셋에 설정
// function setBit(x, y) {
//   const idx = idx1d(x, y);
//   const w = idx >>> 5; // idx / 32
//   const b = idx & 31; // idx % 32
//   const mask = 1 << b;
//   if (!(words[w] & mask)) {
//     // 아직 0이었으면
//     words[w] |= mask; // 1로 설정
//     count++;
//   }
// }

// const squares = require("fs")
//   .readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : "./input.txt",
//     "utf8"
//   )
//   .trim()
//   .split("\n")
//   .slice(1)
//   .map((line) => line.split(" ").map(Number));

// for (const [x, y] of squares) {
//   for (let dx = 0; dx < 10; dx++) {
//     for (let dy = 0; dy < 10; dy++) {
//       setBit(x + dx, y + dy);
//     }
//   }
// }

// console.log(count);
