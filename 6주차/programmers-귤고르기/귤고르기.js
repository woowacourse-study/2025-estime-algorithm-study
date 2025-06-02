function solution(name) {
  let verticalCost = 0;
  for (const ch of name) {
    const diff = ch.charCodeAt(0) - 65;
    verticalCost += Math.min(diff, 26 - diff);
  }

  let horizontalMin = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === "A") next++;

    const option1 = i * 2 + (name.length - next);

    const option2 = i + 2 * (name.length - next);

    horizontalMin = Math.min(horizontalMin, option1, option2);
  }

  return verticalCost + horizontalMin;
}
const result = [];
function makeWord(current, depth) {
  if (depth === 5) {
    result.push(current);
    return;
  }
  for (let ch of ["a", "e", "i", "o", "u"]) makeWord(current + ch, depth + 1);
}

co;
