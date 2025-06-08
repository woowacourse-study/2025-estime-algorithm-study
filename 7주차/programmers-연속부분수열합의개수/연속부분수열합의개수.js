function solution(elements) {
  const lineArray = [...elements, ...elements];
  const sumArr = [];
  let a = 0;
  const answer = new Set();
  const prefix = [0];
  for (const v of lineArray) prefix.push(prefix[prefix.length - 1] + v);

  for (let len = 0; len < elements.length; len++) {
    for (let start = 0; start < elements.length; start++) {
      answer.add(prefix[start + len] - prefix[start]);
    }
  }

  return answer.size;
}
