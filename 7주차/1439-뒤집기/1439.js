// https://www.acmicpc.net/problem/1439
const fs = require("fs");
const string = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt",
    "utf8"
  )
  .trim();

const arr1 = string.split(/1+/g);
const arr2 = string.split(/0+/g);

console.log(arr1, arr2);

console.log(
  Math.min(
    arr1.filter((ele) => ele !== "").length,
    arr2.filter((ele) => ele !== "").length
  )
);
