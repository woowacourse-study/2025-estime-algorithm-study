function solution(word) {
  const letters = ["A", "E", "I", "O", "U"];
  function makeWord(current, depth) {
    const res = [];
    if (depth > 0) res.push(current);
    if (depth === 5) return res;

    for (const ch of letters) {
      res.push(...makeWord(current + ch, depth + 1));
    }
    return res;
  }

  const arr = makeWord("", 0);
  return arr.indexOf(word) + 1;
}
