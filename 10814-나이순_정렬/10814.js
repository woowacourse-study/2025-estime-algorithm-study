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

// 안쓰는 코드는 지우는게 좋은 습관입니다.
// 안쓰는 코드는 지우는게 좋은 습관입니다.
// 근데 나중에 써먹을거 같긴 해서 남겨둠.
// arr.sort((a, b) => {
//   if (a.age > b.age) return 1;
//   if (a.age < b.age) return -1;
//   if (a.name < b.name) return 1;
//   if (a.name > b.name) return -1;
//   return 0;
// });

const output = arr.map((item) => `${item.age} ${item.name}`).join("\n");
console.log(output);
