// https://www.acmicpc.net/problem/10814
// 10814 나이순 정렬
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const n = +strings[0];
const arr = strings.slice(1).map((str) => {
  const [age, name] = str.split(" ");
  return { age: Number(age), name };
});
arr.sort((a, b) => a.age - b.age);

const output = arr.map((item) => `${item.age} ${item.name}`).join("\n");
console.log(output);
