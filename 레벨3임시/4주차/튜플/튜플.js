function solution(s) {
  const a = s.slice(1, s.length - 1);
  let depth = 0;
  let tmp = [];
  let result = [];
  for (const aa of a) {
    if (aa === "{") {
      depth++;
    } else if (aa === "}") {
      depth--;
      result.push(tmp);
      tmp = [];
    } else if (depth === 1) {
      tmp.push(aa);
    }
  }
  const finalArr = result
    .map((ele) => ele.join(""))
    .map((ele) => ele.split(","));
  finalArr.sort((a, b) => a.length - b.length);

  const answer = [Number(...finalArr[0])];

  for (let i = 1; i < finalArr.length; i++) {
    const newElement = finalArr[i].find(
      (element) => !finalArr[i - 1].includes(element)
    );
    answer.push(Number(newElement));
  }

  return answer;
}
