// https://www.acmicpc.net/problem/1003
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const targets = strings.slice(1);

const memo = new Map();
memo.set(0, [1, 0]);
memo.set(1, [0, 1]);

function fibonacci(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const [z1, o1] = fibonacci(n - 1);
  const [z2, o2] = fibonacci(n - 2);
  const result = [z1 + z2, o1 + o2];
  memo.set(n, result);
  return result;
}
// --- n = 3 일 때 호출 흐름 예시 ---
//
// 초기 memo: { 0: [1,0],  1: [0,1] }
//
// fibonacci(3)
// ├─ fibonacci(2)
// │   ├─ fibonacci(1)   // memo.has(1) → 반환 [0,1]
// │   └─ fibonacci(0)   // memo.has(0) → 반환 [1,0]
// │   └→ 계산: [0+1, 1+0] = [1,1] → memo.set(2, [1,1])
// └─ fibonacci(1)       // memo.has(1) → 반환 [0,1]
// └→ 계산: [1+0, 1+1] = [1,2] → memo.set(3, [1,2])
//
// 최종 반환값: [1, 2]
// — 0 호출 1번, 1 호출 2번

// --- n = 4 일 때 호출 흐름 예시 ---
//
// 초기 memo: { 0: [1,0],  1: [0,1] }
//
// fibonacci(4)
// ├─ fibonacci(3)
// │   ├─ fibonacci(2)
// │   │   ├─ fibonacci(1)   // memo.has(1) → 반환 [0,1]
// │   │   └─ fibonacci(0)   // memo.has(0) → 반환 [1,0]
// │   │   └→ 계산: [0+1, 1+0] = [1,1] → memo.set(2, [1,1])
// │   ├─ fibonacci(1)   // memo.has(1) → 반환 [0,1]
// │   └─ fibonacci(0)   // memo.has(0) → 반환 [1,0]
// │   └→ 계산: [0+1, 1+0] = [1,1] → memo.set(2, [1,1])
// │   ├─ fibonacci(1)   // memo.has(1) → 반환 [0,1]
// │   │   └→ 계산: [1+0, 1+1] = [1,2] → memo.set(3, [1,2])
// │   └─ fibonacci(0)   // memo.has(0) → 반환 [1,0]
// │   └→ 계산: [0+1, 1+0] = [1,1] → memo.set(2, [1,1])

const answer = [];
for (const target of targets) {
  answer.push(fibonacci(Number(target)).join(" "));
}
console.log(answer.join("\n"));
