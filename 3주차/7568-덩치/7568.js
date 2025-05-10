// https://www.acmicpc.net/problem/7568
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const strings = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

const people = strings.slice(1);
const grant = [];
let idx = 0;
for (const person of people) {
  const [weight, height] = person.split(" ");
  grant.push([idx, Number(weight), Number(height)]);
  idx++;
}

function isBigger(person, comPerson) {
  const [_, weight, height] = person;
  const [__, comWeight, comHeight] = comPerson;
  return weight > comWeight && height > comHeight;
}
const ranks = Array(strings.length - 1).fill(1);

for (let i = 0; i < grant.length; i++) {
  for (let j = 0; j < grant.length; j++) {
    if (i === j) continue;
    if (isBigger(grant[j], grant[i])) {
      ranks[i]++;
    }
  }
}
const answer = Array(people.length);
for (let i = 0; i < grant.length; i++) {
  const originalIdx = grant[i][0];
  answer[originalIdx] = ranks[i];
}

console.log(answer.join(" "));
