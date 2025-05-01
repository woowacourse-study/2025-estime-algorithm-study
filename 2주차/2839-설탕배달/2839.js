//https://www.acmicpc.net/problem/2839
//2839
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = Number(require("fs").readFileSync(filePath, "utf8").trim());
let cnt = 0;
while (n > 0 && n % 5 !== 0) {
  n -= 3;
  cnt++;
}

console.log(n < 0 ? -1 : cnt + n / 5);
